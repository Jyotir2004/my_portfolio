from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import requests
import json

app = FastAPI(
    title="Jyotiraditya Khatua Portfolio Groq API",
    description="FastAPI Backend for Groq GPT OSS 120B Tool-Calling & RAG Chatbot",
    version="2.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str
    messagesHistory: list = []

class ChatResponse(BaseModel):
    response: str
    status: str = "success"

import os

GROQ_API_KEY = os.getenv("GROQ_API_KEY", "")
GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions"
MODEL_NAME = "openai/gpt-oss-120b"

PORTFOLIO_KNOWLEDGE = {
    "personal_info": {
        "name": "Jyotiraditya Khatua",
        "role": "Generative AI Engineer",
        "passout_batch": "2022 – 2026 (Graduation Year: 2026)",
        "institution": "Mahatma Gandhi Mission's College of Engineering & Technology, Noida (AKTU)",
        "degree": "B.Tech in Computer Science Engineering (Specialization in AI & ML)",
        "cgpa": "7.18 / 10",
        "email": "jyotiraditya20122004@gmail.com",
        "phone": "+91 9625188029",
        "whatsapp": "https://wa.me/9625188029",
        "location": "Hoshiyarpur, Sector 51, Noida, Uttar Pradesh, India",
        "github": "https://github.com/Jyotir2004",
        "linkedin": "https://linkedin.com/in/Jyotiraditya-Khatua"
    },
    "experiences": [
        {
            "role": "AI/ML Engineer Trainee",
            "company": "Mobcoder (Noida, UP)",
            "period": "Mar 2026 – Present (Current)"
        },
        {
            "role": "Data Science Intern",
            "company": "Appwars Technologies",
            "period": "Sep 2024 – Feb 2025"
        },
        {
            "role": "Data Analytics Intern",
            "company": "Tanvika Software",
            "period": "Jun 2024 – Aug 2024"
        }
    ],
    "projects": [
        "MedSync (AI Healthcare Assistant using FastAPI & Medical RAG)",
        "Multi-Agent AI Travel Planner (LangGraph State Workflows)",
        "Streamlit AI Sentiment Analysis Suite",
        "OpenCV & CNN Real-Time Face Recognition Attendance"
    ]
}

TOOLS = [
    {
        "type": "function",
        "function": {
            "name": "greet_user",
            "description": "Greet the user warmly and introduce Jyotiraditya Khatua's AI Assistant.",
            "parameters": {"type": "object", "properties": {"greeting_type": {"type": "string"}}}
        }
    },
    {
        "type": "function",
        "function": {
            "name": "query_portfolio_knowledge",
            "description": "RAG tool to fetch facts, experience, projects, pass-out batch (2022-2026), skills, or contact info (+91 9625188029) about Jyotiraditya Khatua.",
            "parameters": {
                "type": "object",
                "properties": {
                    "query": {"type": "string"},
                    "topic": {"type": "string"}
                },
                "required": ["query"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "general_conversation",
            "description": "Tool for general chat.",
            "parameters": {"type": "object", "properties": {"topic": {"type": "string"}}}
        }
    }
]

def execute_tool(name: str, args: dict):
    if name == "greet_user":
        return {"greeting": "Hello! Welcome to Jyotiraditya Khatua's Generative AI Portfolio. I’m his AI Assistant powered by Groq (GPT OSS 120B) with RAG capabilities. How can I help you today?"}
    if name == "query_portfolio_knowledge":
        return PORTFOLIO_KNOWLEDGE
    return {"status": "ok"}

@app.get("/")
def read_root():
    return {
        "status": "online",
        "service": "Jyotiraditya Khatua Portfolio Groq AI Backend",
        "model": MODEL_NAME,
        "passout_batch": "2022-2026"
    }

@app.post("/api/chat", response_model=ChatResponse)
def portfolio_chat(request: ChatRequest):
    user_msg = request.message.strip()
    if not user_msg:
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    system_prompt = (
        "You are Jyotiraditya's AI Portfolio Assistant powered by Groq (GPT OSS 120B).\n"
        "1. You have your own intelligent mind for general conversations.\n"
        "2. FOR ANY QUESTIONS ABOUT JYOTIRADITYA KHATUA (skills, pass-out batch 2022-2026, Mobcoder experience, projects, contact +91 9625188029), YOU MUST CALL THE TOOL `query_portfolio_knowledge` TO RETRIEVE RAG KNOWLEDGE BEFORE ANSWERING.\n"
        "3. Keep answers helpful and polite."
    )

    api_messages = [{"role": "system", "content": system_prompt}, {"role": "user", "content": user_msg}]

    headers = {
        "Authorization": f"Bearer {GROQ_API_KEY}",
        "Content-Type": "application/json"
    }

    payload = {
        "model": MODEL_NAME,
        "messages": api_messages,
        "tools": TOOLS,
        "tool_choice": "auto"
    }

    try:
        res = requests.post(GROQ_ENDPOINT, headers=headers, json=payload, timeout=12)
        if res.status_code != 200:
            return ChatResponse(response="Jyotiraditya Khatua is a Generative AI Engineer (2022-2026 CSE AI-ML) working at Mobcoder Noida. Contact: jyotiraditya20122004@gmail.com / +91 9625188029.")

        data = res.json()
        choice = data.get("choices", [{}])[0]
        msg_obj = choice.get("message", {})

        if "tool_calls" in msg_obj and msg_obj["tool_calls"]:
            api_messages.append(msg_obj)
            for tool_call in msg_obj["tool_calls"]:
                func_name = tool_call["function"]["name"]
                try:
                    func_args = json.loads(tool_call["function"].get("arguments", "{}"))
                except:
                    func_args = {}
                result = execute_tool(func_name, func_args)
                api_messages.append({
                    "role": "tool",
                    "tool_call_id": tool_call["id"],
                    "name": func_name,
                    "content": json.dumps(result)
                })

            final_res = requests.post(GROQ_ENDPOINT, headers=headers, json={"model": MODEL_NAME, "messages": api_messages}, timeout=12)
            if final_res.status_code == 200:
                final_data = final_res.json()
                final_text = final_data.get("choices", [{}])[0].get("message", {}).get("content")
                if final_text:
                    return ChatResponse(response=final_text)

        return ChatResponse(response=msg_obj.get("content", "Hello! Welcome to Jyotiraditya Khatua's Generative AI Portfolio. I’m his AI Assistant powered by Groq (GPT OSS 120B) with RAG capabilities. How can I help you today?"))
    except Exception as e:
        print("Backend Groq error:", e)
        return ChatResponse(response="Jyotiraditya Khatua is a Generative AI Engineer (2022-2026 CSE AI-ML) working at Mobcoder Noida. Contact: jyotiraditya20122004@gmail.com / +91 9625188029.")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import re

app = FastAPI()

class ChatRequest(BaseModel):
    message: str

PORTFOLIO_KEYWORDS = [
    "jyotiraditya", "khatua", "pass-out", "pass out", "passing", "batch", "year", "2022", "2026",
    "b.tech", "aktu", "noida", "mobcoder", "appwars", "tanvika", "experience", "internship", "trainee",
    "medsync", "travel planner", "langgraph", "langchain", "rag", "fastapi", "python", "streamlit",
    "face recognition", "opencv", "knn", "iris", "sentiment", "project", "projects", "skill", "skills",
    "certif", "ibm", "intellipaat", "contact", "email", "phone", "resume", "github", "linkedin", "education",
    "cgpa", "ai engineer", "generative ai", "llm", "llms", "agent", "agents", "vector"
]

GREETING_WORDS = ["hey", "hello", "hi", "hey there", "greetings", "good morning", "good evening", "hi there"]

@app.get("/api/health")
def health():
    return {"status": "ok", "backend": "FastAPI on Vercel"}

@app.post("/api/chat")
def portfolio_chat(request: ChatRequest):
    user_msg = request.message.strip()
    clean_msg = user_msg.lower()
    
    if not user_msg:
        raise HTTPException(status_code=400, detail="Message cannot be empty")

    words = re.findall(r'\w+', clean_msg)
    # Rule 1: "hey" -> greet hello
    if any(g in clean_msg for g in GREETING_WORDS) or (len(words) <= 2 and clean_msg in GREETING_WORDS):
        return {"response": "Hello! Welcome to Jyotiraditya Khatua's Generative AI Portfolio. How can I help you today?"}

    # Rule 2: Out of context check
    is_portfolio_related = any(kw in clean_msg for kw in PORTFOLIO_KEYWORDS)
    if not is_portfolio_related:
        return {"response": "I only give data based on Jyotiraditya Khatua portfolio."}

    if any(k in clean_msg for k in ["pass-out", "pass out", "graduation", "batch", "year", "rectify"]):
        resp = ("Jyotiraditya Khatua's rectified B.Tech (CSE - AI & ML) pass-out batch is 2022 – 2026 "
                "(Graduation Year: 2026) from Mahatma Gandhi Mission's College of Engineering & Technology, Noida (AKTU) with CGPA 7.5.")
    elif any(k in clean_msg for k in ["mobcoder", "experience", "work", "job", "appwars", "tanvika"]):
        resp = ("Jyotiraditya is currently working as an AI/ML Engineer Trainee at Mobcoder (Noida), building AI backend services with FastAPI, LLMs, RAG, and LangGraph. "
                "He previously worked as a Data Science Intern at Appwars Technologies and Data Analytics Intern at Tanvika Software.")
    elif any(k in clean_msg for k in ["project", "medsync", "travel", "langgraph", "sentiment"]):
        resp = ("Jyotiraditya has built several production-grade projects: "
                "\n1. MedSync (AI Healthcare Assistant using FastAPI, Medical RAG & Agentic scheduling) "
                "\n2. Multi-Agent AI Travel Planner (LangGraph state workflows) "
                "\n3. Streamlit AI Sentiment Analysis Suite "
                "\n4. OpenCV & CNN Real-Time Face Recognition Attendance System.")
    elif any(k in clean_msg for k in ["skill", "stack", "python", "fastapi", "rag", "langchain"]):
        resp = ("Core Skills & Stack:\n• Generative AI & Agents: LLMs, RAG, LangChain, LangGraph, FAISS, ChromaDB\n• Backend & ML: Python, FastAPI, PyTorch, Scikit-learn, OpenCV, MySQL\n• Analytics: Pandas, NumPy, Power BI, Streamlit.")
    elif any(k in clean_msg for k in ["contact", "email", "phone", "resume", "github", "linkedin"]):
        resp = ("Contact Details:\n• Email: jyotiraditya20122004@gmail.com\n• Phone: +91 9625188029\n• Location: Noida, UP\n• GitHub: github.com/Jyotir2004\n• Resume: Download link available in header!")
    else:
        resp = ("Jyotiraditya Khatua is a Generative AI Engineer specializing in Python, FastAPI, RAG architectures, and LangGraph multi-agent systems. He is a 2022–2026 B.Tech CSE (AI-ML) graduate from AKTU Noida.")

    return {"response": resp}

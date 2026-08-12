import { NextResponse } from 'next/server';

const GROQ_API_KEY = process.env.GROQ_API_KEY || "";
const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";
const MODEL_NAME = "openai/gpt-oss-120b";

// Authoritative Portfolio Knowledge Base for RAG Tool
const PORTFOLIO_KNOWLEDGE = {
  personal_info: {
    name: "Jyotiraditya Khatua",
    role: "Generative AI Engineer",
    tagline: "Building autonomous AI Agents, RAG pipelines, and intelligent LLM workflows.",
    passout_batch: "2022 – 2026 (Graduation Year: 2026)",
    institution: "Mahatma Gandhi Mission's College of Engineering & Technology, Noida (Affiliated with AKTU)",
    degree: "B.Tech in Computer Science Engineering (Specialization in Artificial Intelligence & Machine Learning)",
    cgpa: "7.5 / 10",
    email: "jyotiraditya20122004@gmail.com",
    phone: "+91 9625188029",
    whatsapp: "https://wa.me/9625188029",
    location: "Hoshiyarpur, Sector 51, Noida, Uttar Pradesh, India",
    github: "https://github.com/Jyotir2004",
    linkedin: "https://linkedin.com/in/Jyotiraditya-Khatua"
  },
  experiences: [
    {
      role: "AI/ML Engineer Trainee",
      company: "Mobcoder (Noida, UP)",
      period: "Mar 2026 – Present (Current)",
      highlights: [
        "Architecting AI backend microservices using Python, FastAPI, LLMs, RAG, and LangGraph.",
        "Building multi-agent state workflows with LangChain and LangGraph integrated with OpenAI & Gemini APIs.",
        "Optimizing vector search indexing using ChromaDB and FAISS for semantic document retrieval."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Appwars Technologies (Noida, UP)",
      period: "Sep 2024 – Feb 2025",
      highlights: [
        "Developed end-to-end Machine Learning and NLP models using PyTorch, Scikit-Learn, and NLTK.",
        "Designed REST APIs with FastAPI to serve ML prediction models."
      ]
    },
    {
      role: "Data Analytics Intern",
      company: "Tanvika Software",
      period: "Jun 2024 – Aug 2024",
      highlights: [
        "Analyzed business data pipelines using SQL, Pandas, NumPy, and Power BI."
      ]
    }
  ],
  projects: [
    {
      name: "MedSync",
      category: "Generative AI Healthcare Assistant",
      tech: ["Python", "FastAPI", "Medical RAG", "LangChain", "ChromaDB", "Streamlit"],
      details: "AI Healthcare Assistant featuring Medical Document RAG, appointment scheduling, and automated clinical summaries."
    },
    {
      name: "Multi-Agent AI Travel Planner",
      category: "Generative AI Agent Workflow",
      tech: ["Python", "LangGraph", "FastAPI", "OpenAI API", "Tavily Search"],
      details: "Autonomous multi-agent system orchestrating flights, hotels, weather, and day-by-day travel itineraries using LangGraph state graphs."
    },
    {
      name: "Streamlit AI Sentiment Analysis Suite",
      category: "NLP & Sentiment Classifier",
      tech: ["Python", "Streamlit", "NLTK", "Transformers", "TextBlob"],
      details: "Interactive dashboard providing real-time sentiment analysis and topic modeling on social reviews."
    },
    {
      name: "OpenCV & CNN Real-Time Face Recognition Attendance",
      category: "Computer Vision System",
      tech: ["Python", "OpenCV", "CNN", "PyTorch", "SQLite"],
      details: "Real-time face detection and attendance logging system with sub-second accuracy."
    }
  ],
  skills: {
    generative_ai: ["LLMs", "RAG (Retrieval Augmented Generation)", "LangChain", "LangGraph", "FAISS", "ChromaDB", "OpenAI API", "Gemini API", "AI Agents"],
    backend_ml: ["Python", "FastAPI", "PyTorch", "Scikit-Learn", "OpenCV", "MySQL", "REST APIs"],
    analytics_tools: ["Pandas", "NumPy", "Power BI", "Streamlit", "Git/GitHub"]
  }
};

// Tools schema for Groq Function Calling
const TOOLS = [
  {
    type: "function",
    function: {
      name: "greet_user",
      description: "Greet the user warmly and introduce Jyotiraditya Khatua's AI Assistant.",
      parameters: {
        type: "object",
        properties: {
          greeting_type: { type: "string", description: "Type of greeting (e.g. general, morning, evening)" }
        }
      }
    }
  },
  {
    type: "function",
    function: {
      name: "query_portfolio_knowledge",
      description: "RAG tool to fetch specific facts, experience, projects, pass-out batch, education, skills, contact info, or resume details about Jyotiraditya Khatua.",
      parameters: {
        type: "object",
        properties: {
          query: { type: "string", description: "The specific question or topic to search in the portfolio database." },
          topic: {
            type: "string",
            enum: ["personal_info", "passout_batch", "experience", "mobcoder", "projects", "skills", "contact"],
            description: "The topic area to retrieve information for."
          }
        },
        required: ["query"]
      }
    }
  },
  {
    type: "function",
    function: {
      name: "general_conversation",
      description: "Tool for casual chat or non-portfolio general knowledge when the user is chatting normally.",
      parameters: {
        type: "object",
        properties: {
          topic: { type: "string", description: "Topic of conversation" }
        }
      }
    }
  }
];

// Tool execution logic
function executeTool(name: string, args: any): any {
  if (name === "greet_user") {
    return {
      greeting: "Hello! Welcome to Jyotiraditya Khatua's Generative AI Portfolio. I’m his AI Assistant powered by Groq (GPT OSS 120B) with RAG capabilities. How can I help you today?"
    };
  }

  if (name === "query_portfolio_knowledge") {
    const q = (args.query || "").toLowerCase();
    const topic = args.topic;

    if (topic === "passout_batch" || q.includes("pass") || q.includes("batch") || q.includes("year") || q.includes("aktu") || q.includes("college")) {
      return {
        topic: "Education & Passout Batch",
        data: PORTFOLIO_KNOWLEDGE.personal_info
      };
    }

    if (topic === "mobcoder" || topic === "experience" || q.includes("mobcoder") || q.includes("work") || q.includes("job") || q.includes("intern")) {
      return {
        topic: "Work Experience",
        data: PORTFOLIO_KNOWLEDGE.experiences
      };
    }

    if (topic === "projects" || q.includes("project") || q.includes("medsync") || q.includes("travel")) {
      return {
        topic: "Projects",
        data: PORTFOLIO_KNOWLEDGE.projects
      };
    }

    if (topic === "skills" || q.includes("skill") || q.includes("stack") || q.includes("python") || q.includes("fastapi")) {
      return {
        topic: "Technical Skills",
        data: PORTFOLIO_KNOWLEDGE.skills
      };
    }

    if (topic === "contact" || q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("whatsapp") || q.includes("resume")) {
      return {
        topic: "Contact Details",
        data: {
          email: PORTFOLIO_KNOWLEDGE.personal_info.email,
          phone: PORTFOLIO_KNOWLEDGE.personal_info.phone,
          whatsapp: PORTFOLIO_KNOWLEDGE.personal_info.whatsapp,
          location: PORTFOLIO_KNOWLEDGE.personal_info.location,
          github: PORTFOLIO_KNOWLEDGE.personal_info.github,
          linkedin: PORTFOLIO_KNOWLEDGE.personal_info.linkedin
        }
      };
    }

    // Default RAG bundle
    return PORTFOLIO_KNOWLEDGE;
  }

  if (name === "general_conversation") {
    return { status: "conversing_with_ai_mind" };
  }

  return { result: "Tool executed successfully." };
}

export async function POST(request: Request) {
  try {
    const { message, messagesHistory } = await request.json();

    if (!message || typeof message !== 'string') {
      return NextResponse.json({ error: 'Message string is required' }, { status: 400 });
    }

    const systemPrompt = `You are Jyotiraditya's AI Portfolio Assistant, an intelligent Generative AI agent powered by Groq (GPT OSS 120B).

RULES OF ENGAGEMENT:
1. You have your own intelligent mind to hold casual conversations, answer general questions, or chat naturally.
2. For greetings (e.g. "hi", "hello"), you may call the tool \`greet_user\` or respond warmly using your mind.
3. CRITICAL: Whenever the user asks ANY question about Jyotiraditya Khatua (such as his 2022–2026 pass-out batch, B.Tech education at AKTU, Mobcoder experience, projects like MedSync/Travel Planner, skills, FastAPI, RAG, contact details, resume, email, or phone +91 9625188029), YOU MUST CALL THE TOOL \`query_portfolio_knowledge\` TO RETRIEVE AUTHORITATIVE RAG KNOWLEDGE BEFORE ANSWERING.
4. Always provide helpful, polite, structured answers based on the retrieved RAG tool data when answering portfolio questions.
5. If the question is completely unrelated to Jyotiraditya or general chat, answer politely using your general knowledge while reminding the user you are specialized as Jyotiraditya's portfolio assistant.`;

    const apiMessages: any[] = [
      { role: "system", content: systemPrompt }
    ];

    if (Array.isArray(messagesHistory)) {
      messagesHistory.forEach((m: any) => {
        if (m.sender === 'user') apiMessages.push({ role: 'user', content: m.text });
        if (m.sender === 'ai') apiMessages.push({ role: 'assistant', content: m.text });
      });
    }

    apiMessages.push({ role: "user", content: message });

    // Initial call to Groq API with tools
    let groqRes = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: MODEL_NAME,
        messages: apiMessages,
        tools: TOOLS,
        tool_choice: "auto"
      })
    });

    let data = await groqRes.json();

    if (!groqRes.ok) {
      console.error("Groq API Primary Error:", data);
      return NextResponse.json({
        response: `I am Jyotiraditya's AI Portfolio Assistant. Jyotiraditya Khatua is a Generative AI Engineer (2022–2026 CSE AI-ML batch from AKTU Noida) currently working at Mobcoder. Contact: jyotiraditya20122004@gmail.com / +91 9625188029.`
      });
    }

    const choice = data.choices?.[0];
    const messageObj = choice?.message;

    // Check if the LLM called a tool
    if (messageObj?.tool_calls && messageObj.tool_calls.length > 0) {
      apiMessages.push(messageObj);

      for (const toolCall of messageObj.tool_calls) {
        const functionName = toolCall.function.name;
        let functionArgs = {};
        try {
          functionArgs = JSON.parse(toolCall.function.arguments || "{}");
        } catch {}

        const toolResult = executeTool(functionName, functionArgs);

        apiMessages.push({
          role: "tool",
          tool_call_id: toolCall.id,
          name: functionName,
          content: JSON.stringify(toolResult)
        });
      }

      // Second call to Groq API with tool outputs included
      const finalRes = await fetch(GROQ_ENDPOINT, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${GROQ_API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: MODEL_NAME,
          messages: apiMessages
        })
      });

      const finalData = await finalRes.json();
      const finalContent = finalData.choices?.[0]?.message?.content;

      if (finalContent) {
        return NextResponse.json({ response: finalContent });
      }
    }

    // Direct answer without tool call (using its own mind)
    const directResponse = messageObj?.content || "Hello! Welcome to Jyotiraditya Khatua's Generative AI Portfolio. I’m his AI Assistant powered by Groq (GPT OSS 120B) with RAG capabilities. How can I help you today?";
    return NextResponse.json({ response: directResponse });

  } catch (err: any) {
    console.error("Error in chat API route:", err);
    return NextResponse.json(
      { response: "Hello! Welcome to Jyotiraditya Khatua's Generative AI Portfolio. I’m his AI Assistant powered by Groq (GPT OSS 120B) with RAG capabilities. How can I help you today?" },
      { status: 500 }
    );
  }
}

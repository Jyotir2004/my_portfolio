import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

# Target directory in public folder of portfolio
pdf_path = os.path.join(os.path.dirname(__file__), "public", "Jyotiraditya_Khatua_Resume.pdf")

# Set 0.5 inch (36 pt) margins for optimal single-page fit and ATS parsing
doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

# ATS Friendly Palette (Clean dark slate & subtle dark navy header)
primary_color = colors.HexColor("#0f172a")  # Slate 900
secondary_color = colors.HexColor("#1e293b") # Slate 800
accent_color = colors.HexColor("#0369a1")    # Sky 700
body_color = colors.HexColor("#334155")      # Slate 700
hr_color = colors.HexColor("#cbd5e1")        # Slate 300

# Typography Styles (Standard ATS Fonts: Helvetica)
title_style = ParagraphStyle(
    'TitleStyle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=20,
    leading=22,
    textColor=primary_color,
    alignment=0,
    spaceAfter=2
)

subtitle_style = ParagraphStyle(
    'SubTitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=13,
    textColor=accent_color,
    spaceAfter=3
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=11,
    textColor=body_color,
    spaceAfter=6
)

section_heading = ParagraphStyle(
    'SectionHeading',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=11,
    leading=13,
    textColor=primary_color,
    spaceBefore=6,
    spaceAfter=3
)

item_header = ParagraphStyle(
    'ItemHeader',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=9.5,
    leading=12,
    textColor=secondary_color,
    spaceBefore=2
)

item_sub = ParagraphStyle(
    'ItemSub',
    parent=styles['Normal'],
    fontName='Helvetica-Oblique',
    fontSize=8.5,
    leading=11,
    textColor=accent_color
)

body_style = ParagraphStyle(
    'BodyStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11,
    textColor=body_color,
    spaceAfter=2
)

bullet_style = ParagraphStyle(
    'BulletStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=8.5,
    leading=11,
    textColor=body_color,
    leftIndent=12,
    firstLineIndent=-8,
    spaceAfter=1.5
)

story = []

# --- HEADER SECTION ---
story.append(Paragraph("JYOTIRADITYA KHATUA", title_style))
story.append(Paragraph("GENERATIVE AI ENGINEER | AI/ML SPECIALIST", subtitle_style))
story.append(Paragraph(
    "Noida, UP, India &nbsp;|&nbsp; +91 9625188029 &nbsp;|&nbsp; jyotiraditya20122004@gmail.com &nbsp;|&nbsp; github.com/Jyotir2004 &nbsp;|&nbsp; linkedin.com/in/Jyotiraditya-Khatua",
    contact_style
))
story.append(HRFlowable(width="100%", thickness=1, color=hr_color, spaceBefore=0, spaceAfter=4))

# --- PROFESSIONAL SUMMARY ---
story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
story.append(Paragraph(
    "Generative AI Engineer specializing in Python backend development, LLMs, RAG architectures, autonomous AI Agents, and Machine Learning. Experienced in architecting and deploying production-grade intelligent AI services using FastAPI, LangChain, LangGraph, OpenAI/Gemini APIs, Vector Databases (FAISS/ChromaDB), and PyTorch.",
    body_style
))
story.append(HRFlowable(width="100%", thickness=0.5, color=hr_color, spaceBefore=4, spaceAfter=4))

# --- TECHNICAL SKILLS ---
story.append(Paragraph("TECHNICAL SKILLS", section_heading))
story.append(Paragraph("• <b>Generative AI & Agents:</b> LLMs, RAG (Retrieval-Augmented Generation), Autonomous AI Agents, LangChain, LangGraph, LangFlow, Prompt Engineering", bullet_style))
story.append(Paragraph("• <b>AI Frameworks & Models:</b> OpenAI API, Google Gemini API, GROQ, NVIDIA AI, PyTorch, TensorFlow, Scikit-learn, OpenCV", bullet_style))
story.append(Paragraph("• <b>Backend & Systems:</b> Python, FastAPI, REST APIs, Microservices, AsyncIO", bullet_style))
story.append(Paragraph("• <b>Databases & Vector Search:</b> Vector Databases (FAISS, ChromaDB), MySQL, SQL", bullet_style))
story.append(Paragraph("• <b>Data Analytics & UI:</b> Pandas, NumPy, Matplotlib, Seaborn, Power BI, Streamlit", bullet_style))
story.append(Paragraph("• <b>Developer Tools:</b> Git, GitHub, VS Code, Google Colab, Jupyter Notebooks", bullet_style))
story.append(HRFlowable(width="100%", thickness=0.5, color=hr_color, spaceBefore=4, spaceAfter=4))

# --- WORK EXPERIENCE ---
story.append(Paragraph("WORK EXPERIENCE", section_heading))

story.append(Paragraph("<b>AI/ML Engineer Trainee</b> — <i>Mobcoder (Noida, UP)</i>", item_header))
story.append(Paragraph("March 2026 – Present", item_sub))
story.append(Paragraph("• Developed scalable AI-powered backend applications utilizing Python, FastAPI, LLMs, RAG, and autonomous AI Agents.", bullet_style))
story.append(Paragraph("• Built and integrated intelligent workflows using LangChain, LangGraph, OpenAI/Gemini APIs, and vector databases for multi-step reasoning.", bullet_style))

story.append(Spacer(1, 2))
story.append(Paragraph("<b>Data Science Intern</b> — <i>Appwars Technologies (Noida, UP)</i>", item_header))
story.append(Paragraph("August 2025 – February 2026", item_sub))
story.append(Paragraph("• Applied Python, SQL, Machine Learning, NLP, and Generative AI to build data-driven predictive models and analytics tools.", bullet_style))
story.append(Paragraph("• Developed interactive analytical dashboards and Streamlit applications for hands-on LLM exploration and backend APIs.", bullet_style))
story.append(HRFlowable(width="100%", thickness=0.5, color=hr_color, spaceBefore=4, spaceAfter=4))

# --- PROJECTS ---
story.append(Paragraph("PROJECTS", section_heading))

story.append(Paragraph("<b>AI Healthcare Assistant (MedSync)</b> &nbsp;|&nbsp; <i>Python, FastAPI, LangChain, ChromaDB, LLMs</i>", item_header))
story.append(Paragraph("• Built an AI healthcare assistant featuring medical RAG, clinical triage, and autonomous agent doctor scheduling using FastAPI and LLMs.", bullet_style))

story.append(Paragraph("<b>Multi-Agent AI Travel Planner</b> &nbsp;|&nbsp; <i>Python, LangGraph, OpenAI API</i>", item_header))
story.append(Paragraph("• Developed a LangGraph-based multi-agent travel planner with state-graph workflow orchestration for real-time itinerary generation.", bullet_style))

story.append(Paragraph("<b>AI Sentiment Analysis Suite</b> &nbsp;|&nbsp; <i>Python, Streamlit, Scikit-learn, NLP</i>", item_header))
story.append(Paragraph("• Created an end-to-end NLP sentiment classification application using Python, Streamlit, and Scikit-learn for text and dataset processing.", bullet_style))

story.append(Paragraph("<b>Library Management System</b> &nbsp;|&nbsp; <i>Python, MySQL, REST API</i>", item_header))
story.append(Paragraph("• Developed a full-stack library management system for book, user, and transaction management.", bullet_style))

story.append(Paragraph("<b>Face Detection Attendance System</b> &nbsp;|&nbsp; <i>Python, OpenCV, Deep Learning</i>", item_header))
story.append(Paragraph("• Built a real-time face recognition attendance system using OpenCV and deep learning.", bullet_style))
story.append(HRFlowable(width="100%", thickness=0.5, color=hr_color, spaceBefore=4, spaceAfter=4))

# --- EDUCATION ---
story.append(Paragraph("EDUCATION", section_heading))
story.append(Paragraph("<b>Bachelor of Technology (B.Tech) in Computer Science & Engineering (AI & ML)</b>", item_header))
story.append(Paragraph("Dr. A. P. J. Abdul Kalam Technical University (MGM College of Engineering & Tech) &nbsp;|&nbsp; <b>Batch: 2022 – 2026</b> &nbsp;|&nbsp; <b>CGPA: 7.18</b>", item_sub))

story.append(Spacer(1, 2))
story.append(Paragraph("<b>Secondary Senior High School (Class XII)</b>", item_header))
story.append(Paragraph("Adarsh Public School &nbsp;|&nbsp; <b>2022 – 2023</b>", item_sub))

doc.build(story)
print("Resume PDF generated successfully at:", pdf_path)


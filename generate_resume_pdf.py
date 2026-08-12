import os
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors

pdf_path = "/Users/mobcoderid-225/Desktop/portfolio/public/Jyotiraditya_Khatua_Resume.pdf"

doc = SimpleDocTemplate(
    pdf_path,
    pagesize=letter,
    rightMargin=36,
    leftMargin=36,
    topMargin=36,
    bottomMargin=36
)

styles = getSampleStyleSheet()

# Custom Palette
navy = colors.HexColor("#0f172a")
cyan = colors.HexColor("#0284c7")
dark_gray = colors.HexColor("#334155")
light_gray = colors.HexColor("#64748b")

title_style = ParagraphStyle(
    'TitleStyle',
    parent=styles['Heading1'],
    fontName='Helvetica-Bold',
    fontSize=22,
    leading=26,
    textColor=navy,
    spaceAfter=2
)

subtitle_style = ParagraphStyle(
    'SubTitleStyle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=12,
    leading=14,
    textColor=cyan,
    spaceAfter=4
)

contact_style = ParagraphStyle(
    'ContactStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=12,
    textColor=dark_gray,
    spaceAfter=10
)

section_heading = ParagraphStyle(
    'SectionHeading',
    parent=styles['Heading2'],
    fontName='Helvetica-Bold',
    fontSize=12,
    leading=14,
    textColor=navy,
    spaceBefore=8,
    spaceAfter=4
)

item_title = ParagraphStyle(
    'ItemTitle',
    parent=styles['Normal'],
    fontName='Helvetica-Bold',
    fontSize=10,
    leading=13,
    textColor=navy
)

item_sub = ParagraphStyle(
    'ItemSub',
    parent=styles['Normal'],
    fontName='Helvetica-Oblique',
    fontSize=9,
    leading=11,
    textColor=cyan
)

body_style = ParagraphStyle(
    'BodyStyle',
    parent=styles['Normal'],
    fontName='Helvetica',
    fontSize=9,
    leading=12,
    textColor=dark_gray,
    spaceAfter=3
)

story = []

# Header
story.append(Paragraph("JYOTIRADITYA KHATUA", title_style))
story.append(Paragraph("Generative AI Engineer | AI/ML Specialist", subtitle_style))
story.append(Paragraph("Noida, UP, India | +91 9625188029 | jyotiraditya20122004@gmail.com | github.com/Jyotir2004 | linkedin.com/in/Jyotiraditya-Khatua", contact_style))
story.append(HRFlowable(width="100%", thickness=1.5, color=cyan, spaceBefore=0, spaceAfter=8))

# Professional Summary
story.append(Paragraph("PROFESSIONAL SUMMARY", section_heading))
story.append(Paragraph("Generative AI Engineer specializing in Python backend development, LLMs, RAG architectures, autonomous AI Agents, and Machine Learning. Experienced in building and deploying production-grade intelligent AI services using FastAPI, LangChain, LangGraph, OpenAI/Gemini APIs, Vector Databases (FAISS/ChromaDB), and PyTorch.", body_style))

# Education
story.append(Paragraph("EDUCATION", section_heading))
story.append(Paragraph("<b>Bachelor of Technology in Computer Science & Engineering (Specialization in AI & ML)</b>", item_title))
story.append(Paragraph("Mahatma Gandhi Mission's College of Engineering & Technology, Noida (Affiliated with AKTU) | <b>Batch: 2022 – 2026</b> (Passing Year: 2026) | <b>CGPA: 7.5</b>", item_sub))
story.append(Paragraph("Secondary Senior School (Class XII) | Adarsh Public School (2022 – 2023)", body_style))

# Work Experience
story.append(Paragraph("WORK EXPERIENCE", section_heading))

story.append(Paragraph("<b>AI/ML Engineer Trainee</b> — Mobcoder (Noida, UP)", item_title))
story.append(Paragraph("Mar 2026 – Present", item_sub))
story.append(Paragraph("• Developed AI-powered backend applications using Python, FastAPI, LLMs, RAG, and autonomous AI Agents.", body_style))
story.append(Paragraph("• Built and integrated intelligent workflows using LangChain, LangGraph, OpenAI/Gemini APIs, and vector databases.", body_style))

story.append(Paragraph("<b>Data Science Intern</b> — Appwars Technologies", item_title))
story.append(Paragraph("Sep 2025 – Present", item_sub))
story.append(Paragraph("• Applied Python, SQL, Machine Learning, NLP, and Generative AI to build predictive models and analytics tools.", body_style))
story.append(Paragraph("• Developed interactive dashboards and Streamlit applications for hands-on LLM exploration and backend APIs.", body_style))

story.append(Paragraph("<b>Data Analytics & Visualizations Intern</b> — Tanvika Software", item_title))
story.append(Paragraph("Jun 2025 – Aug 2025", item_sub))
story.append(Paragraph("• Analyzed tabular datasets using Excel and Python; crafted executive dashboards in Power BI, Matplotlib, and Seaborn.", body_style))

# Key Projects
story.append(Paragraph("PROJECTS", section_heading))
story.append(Paragraph("• <b>MedSync (AI Healthcare Assistant)</b>: Built an AI healthcare assistant featuring medical RAG, clinical triage, and autonomous agent doctor scheduling using FastAPI, LangChain, and ChromaDB.", body_style))
story.append(Paragraph("• <b>Multi-Agent AI Travel Planner</b>: Developed a LangGraph-based multi-agent travel planner with state-graph workflow orchestration for real-time itinerary generation.", body_style))
story.append(Paragraph("• <b>AI Sentiment Analysis Suite</b>: Created an end-to-end NLP sentiment classification application using Python, Streamlit, and Scikit-learn for text and CSV dataset processing.", body_style))
story.append(Paragraph("• <b>Face Recognition Attendance System</b>: Real-time face detection and attendance logging system utilizing OpenCV and Deep Neural Networks (CNN).", body_style))

# Technical Skills
story.append(Paragraph("TECHNICAL SKILLS", section_heading))
story.append(Paragraph("• <b>Generative AI & Agents:</b> LLMs, RAG, Autonomous AI Agents, LangChain, LangGraph, LangFlow, Prompt Engineering", body_style))
story.append(Paragraph("• <b>Machine Learning & Frameworks:</b> Python, FastAPI, Scikit-learn, PyTorch, TensorFlow, OpenCV, NLP", body_style))
story.append(Paragraph("• <b>Databases & Analytics:</b> FAISS, ChromaDB, MySQL, SQL, Pandas, NumPy, Power BI, Streamlit", body_style))
story.append(Paragraph("• <b>Developer Tools:</b> Git, GitHub, VS Code, Google Colab, Jupyter Notebooks", body_style))

# Certificates
story.append(Paragraph("CERTIFICATIONS", section_heading))
story.append(Paragraph("• <b>IBM SkillsBuild:</b> 'Build an AI Agent' (Specialized in Agentic AI & Autonomous Systems)", body_style))
story.append(Paragraph("• <b>IBM Developer Skills Network:</b> 'Machine Learning with Python' & 'Data Analysis & Visualization'", body_style))
story.append(Paragraph("• <b>Intellipaat:</b> 'Python for Data Science'", body_style))

doc.build(story)
print("Resume PDF generated successfully at:", pdf_path)

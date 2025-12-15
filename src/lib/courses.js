// lib/courses.js
export const courses = [
  {
    id: "gen-ai-cert",
    title: "Advanced Certification in Gen AI & Prompt Engineering",
    category: "gen-ai",
    duration: "6 Weeks",
    level: "Advanced",
    price: 299,
    rating: 4.9,
    students: 1240,
    description:
      "Master enterprise-grade prompt engineering with ChatGPT, Claude, Gemini, and custom LLM APIs. Build agentic workflows, RAG systems, and production-grade AI pipelines.",
    features: [
      "30+ real-world projects",
      "1:1 mentor reviews",
      "Private AI community",
      "Job placement support",
      "Lifetime access",
    ],
    curriculum: [
      "Prompt Engineering Fundamentals",
      "Advanced Chain-of-Thought & Self-Consistency",
      "Building RAG Systems",
      "Function Calling & Tool Use",
      "Deploying AI Agents",
    ],
    image: "/course-genai.jpg", // optional; use placeholder if missing
  },
  {
    id: "ml-ai-diploma",
    title: "Diploma in Machine Learning and AI",
    category: "ml-ai",
    duration: "16 Weeks",
    level: "Intermediate",
    price: 599,
    rating: 4.8,
    students: 980,
    description:
      "Go from Python basics to deploying scalable ML models on AWS. Includes deep learning, NLP, computer vision, and MLOps.",
    features: [
      "Hands-on with TensorFlow & PyTorch",
      "Cloud deployment (AWS/GCP)",
      "Capstone project",
      "Weekly live sessions",
    ],
    curriculum: [
      "Python for Data Science",
      "Supervised & Unsupervised Learning",
      "Neural Networks & Transformers",
      "Model Evaluation & Optimization",
      "MLOps & CI/CD for ML",
    ],
    image: "/course-ml.jpg",
  },
];

export const categories = [
  { id: "all", name: "All Courses" },
  { id: "gen-ai", name: "Gen AI & Prompt Engineering" },
  { id: "ml-ai", name: "Machine Learning & AI" },
];
const portfolioData = {
  profile: {
    name: 'Deepak Singh',
    role: 'AI/ML Engineer',
    avatar: 'assets/deepak_HK_pic.jpeg',
    location: 'New Delhi, India',
    email: 'dsinghak6@gmail.com',
    phone: '+91-9891645586',
    links: {
      linkedin: 'https://linkedin.com/in/deepak-singh-ai-ds',
      github: 'https://github.com/DeepakAK47',
      leetcode: 'https://leetcode.com/u/Deepak_singh01082003/'
    }
  },
  tabs: [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'certs', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ],
  about: {
    intro: "Aspiring AI/ML Engineer, competitive programmer, and undergrad at GGSIPU (USAR). I have a strong passion for problem-solving, algorithms, and building intelligent systems — from LSTM-based anomaly detection to end-to-end ML pipelines. I love turning messy real-world data into measurable impact, and I'm deeply interested in Machine Learning, Data Science, and the emerging world of Agentic & Generative AI.",
    interests: [
      { icon: 'fa-brain', title: 'Machine Learning', description: 'Building predictive models and deep learning systems that solve real-world problems.' },
      { icon: 'fa-chart-line', title: 'Data Science', description: 'Data preprocessing, EDA, feature engineering and time-series analysis.' },
      { icon: 'fa-robot', title: 'Agentic & Generative AI', description: 'Building autonomous AI agents, LLM-powered applications, RAG pipelines and generative systems that reason, act and solve real-world problems.' }
    ]
  },
  resume: {
    education: [
      { title: 'Guru Gobind Singh Indraprastha University', date: 'Aug 2024 – July 2028', description: 'B.Tech in Artificial Intelligence and Data Science (CGPA: 8.62 / 10.0)' },
      { title: 'Government Boys Senior Secondary School, Delhi', date: '2020 – 2022', description: 'Higher Secondary Education' }
    ],
    experience: [
      { title: 'AI/ML Intern — Indian Army (505 Army Base Workshop - Delhi Cantt.)', date: 'June 2026 – Aug 2026', description: 'Developed predictive engine health monitoring for T-72 tanks with 92% accuracy, built an AI-powered maintenance assistant, and engineered an end-to-end time-series pipeline processing 50+ sensor parameters.' }
    ],
    skills: [
      ['Machine Learning & DL', 85],
      ['Python', 90],
      ['Data Science & Analytics', 80],
      ['DSA(C++)', 85],
      ['Pytorch', 75],
      ['SQL', 70]
    ],
    resumeFile: 'assets/Resume_ML.pdf'
  },

  projects: [
    {
      title: 'FinPulse (Multi-Agent Financial Intelligence System)', year: '2026',
      description: 'FinPulse turns the daily flood of financial news into decision-ready market intelligence. Its LangGraph-powered multi-agent pipeline collects live articles, removes semantic duplicates, identifies companies, sectors, regulators, and keywords, then maps each event to potentially impacted stocks with confidence scores. Through the Streamlit dashboard, users can explore the latest coverage, filter news, search by company or sector, and ask natural-language questions to quickly understand what is moving the market. Built with persistent SQLite and ChromaDB storage, plus FastAPI, Gemini, and Finnhub integrations.',
      video: 'finPulse.mp4',
      demo: 'https://finpulse-zvph53rnzynsm6v6orj6tj.streamlit.app/', github: 'https://github.com/DeepakAK47/finPulse'
    },
    {
      title: 'CerebraScan (Brain Tumor Segmentation)', year: 'Oct 2026',
      description: 'An end-to-end medical imaging pipeline that localizes brain tumors from MRI scans. Built using a ResU-Net architecture (ResNet34 encoder) trained on the LGG MRI Segmentation dataset. Achieved a Test Dice score of 0.85+ by handling class imbalance with a combined Dice + BCE Loss. Features a real-time Streamlit interface for MRI upload, tumor overlay visualization, and confidence tracking.',
      video: 'cerebraScan.mp4',
      demo: 'https://cerebrascan-7ve24rzgfnozajdi69e7fx.streamlit.app/', github: 'https://github.com/DeepakAK47/CerebraScan'
    },
    {
      title: 'Movie Recommendation System', year: 'Mar 2026 – May 2026',
      description: 'A content-based movie recommender built on the TMDB 5000 dataset. It applies NLP preprocessing (tokenization, stopword removal, stemming) on movie metadata (genres, keywords, cast, crew, overview), vectorizes the combined features using TF-IDF, and computes a cosine similarity matrix to return the top-5 most similar movies for any given title. Deployed as an interactive Streamlit web app with live TMDB API integration for movie posters.',
      demo: 'https://movie-recommendation-system-4hvz.onrender.com/', github: 'https://github.com/DeepakAK47/movie_recommendation_system'
    },
    {
      title: 'WhatsApp Chat Analyzer', year: 'Jul 2025 – Sep 2025',
      description: 'A Streamlit-based web app that transforms exported WhatsApp chat files (.txt) into interactive visual insights — including total messages, word count, media shared, most active users, word clouds, most common words, and monthly/hourly activity charts. Users can filter by participant and date range for personalized analysis.',
      demo: 'https://whatsapp-chat-analyser.onrender.com/', github: 'https://github.com/DeepakAK47/whatsapp_chat_analyser'
    }
  ],


  certifications: [
    {
      mainImage: 'assets/img9.jpeg', subImages: ['assets/img4.jpg', 'assets/img7.jpeg'], badgeIcon: 'fa-shield-halved', badge: 'Indian Army',
      kicker: 'Featured experience', title: 'AI/ML Internship Certificate', year: '2026', issuerIcon: 'fa-building-shield', issuer: '505 Army Base Workshop, Delhi Cantt.',
      description: 'Completed AI/ML internship under Lt. Col. Narender Pal Singh Mann, developing predictive maintenance systems for T-72 battle tanks, including LSTM-based anomaly detection and XGBoost classification achieving <strong>92% accuracy</strong>.',
      details: [['Focus', 'Predictive maintenance'], ['Outcome', '92% model accuracy']], certificate: 'assets/img1.jpg'
    },
    {
      mainImage: 'assets/img3.jpg', subImages: ['assets/img5.jpg', 'assets/img8.jpeg'], badgeIcon: 'fa-trophy', badge: 'Winner',
      kicker: 'Innovation award', title: '2nd Position: Smart Delhi Ideation 2024', year: '2024', issuerIcon: 'fa-award', issuer: "Awarded by Hon'ble Lt. Governor of Delhi",
      description: 'Secured <strong>2nd place among 1000+ teams</strong> in a GGSIPU innovation challenge at Vigyan Bhawan, presenting a practical, tech-driven solution evaluated on feasibility, impact, and innovation.',
      details: [['Scale', '1000+ teams'], ['Venue', 'Vigyan Bhawan']], certificate: 'assets/img6.jpeg'
    }
  ]
};

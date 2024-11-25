import { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Analysis of Pollutants Across India and the Impact of COVID-19 on Air Quality Index",
    description: "Analyzed air quality and pollutant levels across 26 Indian cities from 2015 to 2020, focusing on the impact of COVID-19 lockdown. Used data analysis, visualization, and statistical analysis of time series data.",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://drive.google.com/file/d/1rPK-sRZxUGUDupJxbGhcZ_7DPyTWZVAz/view",
    tags: ["Data Analysis and Visualization", "Time Series Analysis"]
  },
  {
    title: "Text-based Machine Learning for E-Commerce Chatbot System",
    description: "Implemented an ML-based recommendation system for e-commerce chatbots using NLP techniques. Combined Market Basket Analysis, KeyBert, and content-based filtering for product suggestions.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1506&q=80",
    link: "https://github.com/git4sudo/Text-based-Machine-Learning-for-E-Commerce-Chatbot-System",
    tags: ["Machine Learning", "Natural Language Processing", "Recommendation System", "Chat Bot"]
  },
  {
    title: "Academic Paper Ranking and Recommendation System",
    description: "Developed a system to find high-impact academic papers in High Energy Physics using NLP techniques like TF-IDF, NMF factorization, and PageRank for analysis and ranking.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    link: "https://github.com/git4sudo/Academic-Paper-Ranking-and-Recommendation-System",
    tags: ["Natural Language Processing", "Recommendation System", "Machine Learning"]
  },
  {
    title: "Statistical Models for Electric Load and Price Prediction",
    description: "Predicted electric load and prices for five Spanish cities using statistical models. Analyzed four years of electricity use, generation, price, and weather data.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://github.com/git4sudo/Statistical-models",
    tags: ["Time Series Analysis", "Data Analysis and Visualization", "Machine Learning"]
  },
  {
    title: "NLP-Driven Analysis and NER of Vaccine Adverse Events",
    description: "Used BioBERT and Stanza to analyze 140,000 VAERS reports, achieving 97.9% accuracy in extracting medical terminologies. Implemented NER and fine-tuned BioBERT for clinical data analysis.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://github.com/git4sudo/NLP_project_NER_bioBERT",
    tags: ["Natural Language Processing", "Machine Learning"]
  },
  {
    title: "Automated Trading System on FinRL",
    description: "Developed an automated trading system using model-free reinforcement learning algorithms within the FinRL framework. Evaluated five RL agents on 12 years of daily stock data.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://github.com/git4sudo/fin_rl_vs_llm",
    tags: ["Machine Learning", "Reinforcement Learning", "Time Series Analysis"]
  },
  {
    title: "LoRA Experiments",
    description: "Fine-tuned various language models on SQuAD 2.0 for question-answering tasks. Compared performance of TinyBERT, Vanilla BERT, fine-tuned DeBERTa v3, and original DeBERTa v3 base model.",
    image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "https://github.com/git4sudo/lora_research_paper",
    tags: ["Natural Language Processing", "Machine Learning"]
  },
  {
    title: "Text Style Transfer: Informal to Formal",
    description: "Implemented and compared different approaches to text style transfer, converting informal text to formal. Utilized Seq2Seq, T5, GPT-2, and pre-trained Hugging Face models.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    link: "https://github.com/git4sudo/NLP_style_transfer_project",
    tags: ["Natural Language Processing", "Machine Learning"]
  },
  {
    title: "Satellite Image Mismatch",
    description: "Developed a low-cost terrain monitoring technique using satellite imagery. Implemented UNET with Inception architecture for image segmentation on 3-band and 16-band satellite images.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    link: "https://github.com/git4sudo/Aerial_image_mismatch",
    tags: ["Computer Vision", "Machine Learning"]
  }
];

const allTags = [
  'All',
  'Data Analysis and Visualization',
  'Time Series Analysis',
  'Machine Learning',
  'Natural Language Processing',
  'Recommendation System',
  'Chat Bot',
  'Reinforcement Learning',
  'Computer Vision'
];

const Projects = () => {
  const [activeTag, setActiveTag] = useState('All');

  const filteredProjects = activeTag === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeTag));

  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        
        <div className="flex flex-wrap justify-center mb-8">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-2 rounded-full m-1 ${
                activeTag === tag
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              } transition duration-300`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2 mb-2">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end">
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-600 hover:text-blue-800">
                    <ExternalLink size={20} className="mr-1" />
                    Link
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
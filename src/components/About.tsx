import React from 'react';
import { Download } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-2/3">
            <p className="text-lg mb-4">
              Hi, I'm Shudhanshu Ranjan, a passionate Machine Learning Engineer with a focus on harnessing AI to solve complex real-world problems. My expertise lies in developing scalable, efficient AI systems that span across Natural Language Processing, Reinforcement Learning, and Computer Vision. I'm driven by the challenge of optimizing models and deploying them to production, ensuring they deliver actionable insights and tangible results.
            </p>
            <p className="text-lg mb-4">
              With hands-on experience in building advanced machine learning pipelines, fine-tuning large language models, and applying deep learning to various domains, I thrive on pushing the boundaries of what AI can achieve. I'm particularly interested in the intersection of AI, automation, and data science, where cutting-edge technologies can unlock new solutions to longstanding challenges.
            </p>
            <p className="text-lg mb-6">
              I'm constantly learning, exploring new trends in AI, and experimenting with innovative techniques to stay ahead in this fast-evolving field.
            </p>
            <a 
              href="/assets/docs/Shudhanshu-Ranjan-Resume.pdf" 
              download
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </a>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full blur opacity-30"></div>
              <img 
                src="/assets/images/profile.png" 
                alt="Shudhanshu Ranjan" 
                className="relative rounded-full w-64 h-64 object-cover shadow-lg border-4 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
import React from 'react';
import { Github, Linkedin, Mail, Twitter, Code, Cloud } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
  src="https://images.unsplash.com/photo-1602351447937-ec6c7b1ae792?auto=format&fit=crop&w=2850&q=80"  
          alt="Cosmic background with stars and nebula" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
      </div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight md:leading-tight mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 py-2">
          Shudhanshu Ranjan
        </h1>
        <div className="space-y-4">
          <p className="text-xl md:text-2xl text-gray-200">New York City Metropolitan Area</p>
          <p className="text-xl md:text-2xl text-gray-200">Data Scientist & Machine Learning Engineer with GCP Experience</p>
        </div>
        <p className="text-lg md:text-xl mt-8 mb-12 text-gray-300 max-w-3xl mx-auto">
          Passionate about pushing the boundaries of AI and machine learning to create innovative solutions that make a difference.
        </p>
        <div className="flex justify-center space-x-8 mb-8">
          <a 
            href="https://github.com/git4sudo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-400 transition duration-300"
            title="GitHub"
          >
            <Github size={28} />
          </a>
          <a 
            href="https://www.linkedin.com/in/shudhanshu-ranjan/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-400 transition duration-300"
            title="LinkedIn"
          >
            <Linkedin size={28} />
          </a>
          <a 
            href="mailto:s.ranjan0304@gmail.com" 
            className="text-gray-300 hover:text-blue-400 transition duration-300"
            title="Email"
          >
            <Mail size={28} />
          </a>
          <a 
            href="https://x.com/sudoxsudo" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-400 transition duration-300"
            title="Twitter"
          >
            <Twitter size={28} />
          </a>
          <a 
            href="https://leetcode.com/u/leet4sudo/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-400 transition duration-300"
            title="LeetCode"
          >
            <Code size={28} />
          </a>
          <a 
            href="https://www.cloudskillsboost.google/public_profiles/91be6b0b-4498-48c5-9e3d-9156a5815aa0" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-300 hover:text-blue-400 transition duration-300"
            title="Google Cloud Profile"
          >
            <Cloud size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;

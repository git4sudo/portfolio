import React from 'react';
import { Briefcase, GraduationCap } from 'lucide-react';

const EducationWork: React.FC = () => {
  return (
    <section id="education-work" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Education & Work Experience</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap className="mr-2" /> Education
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold">Master of Science, Computer Science</h4>
                <p className="text-gray-600">Stevens Institute of Technology</p>
                <p className="text-gray-500">September 2022 - May 2024</p>
                <p className="text-gray-700 mt-2 font-medium">Coursework:</p>
                <p className="text-gray-600">Algorithmic Complexity, Numerical Linear Algebra for Big Data, Natural Language Processing, Computer Vision, Applied Statistics with Application in Finance, Reinforcement Learning and Sequential Decision Making</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold">Graduate Certificate, Machine Learning</h4>
                <p className="text-gray-600">Stevens Institute of Technology</p>
                <p className="text-gray-500">November 2023 - May 2024</p>
                <p className="text-gray-700 mt-2 font-medium">Coursework:</p>
                <p className="text-gray-600">Artificial Intelligence, Machine Learning, Statistical Machine Learning, Deep Learning</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold">Bachelor of Technology, Computer Science and Engineering</h4>
                <p className="text-gray-600">Presidency University Bangalore</p>
                <p className="text-gray-500">August 2018 - July 2022</p>
                <p className="text-gray-700 mt-2 font-medium">Coursework:</p>
                <div className="space-y-2 mt-2">
                  <div>
                    <p className="text-gray-700 font-medium">Core Computer Science:</p>
                    <p className="text-gray-600">Theory of Computations, Discrete Mathematics, Object-Oriented Programming, Data Structures, Computer Organization and Architecture, Analysis of Algorithms</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Software Engineering:</p>
                    <p className="text-gray-600">Software Engineering and Project Management, Operating Systems, Object-Oriented Analysis and Design, Computer Networks, Cryptography and Network Security</p>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Data Science and other Technologies:</p>
                    <p className="text-gray-600">Data Mining, Big Data Analytics, Database Management Systems, Compiler Design, Internet of Things, Human Computer Interaction, Data Visualization</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="mr-2" /> Work Experience
            </h3>
            <div className="space-y-6">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold">Graduate Research Assistant</h4>
                <p className="text-gray-600">Stevens Institute of Technology</p>
                <p className="text-gray-500">January 2024 – Present | Hoboken, New Jersey</p>
                <p className="text-gray-600 mt-2">Working under the supervision of Professor Jia Xu, contributing to groundbreaking research in Natural Language Processing (NLP).</p>
                <div className="mt-3">
                  <p className="text-gray-700 font-medium">Responsibilities:</p>
                  <ul className="list-disc list-inside mt-1 text-gray-600">
                    <li>Collaborating closely with PhD candidates and postdocs to design and execute experiments</li>
                    <li>Analyzing large-scale datasets to refine and enhance NLP models for improved performance</li>
                    <li>Actively contributing to academic papers and conferences, sharing insights from research</li>
                  </ul>
                </div>
                <div className="mt-3">
                  <p className="text-gray-700 font-medium">Key Contributions:</p>
                  <ul className="list-disc list-inside mt-1 text-gray-600">
                    <li>Extracted and analyzed 10,000 tweets using Twitter v2 REST API to build an advanced misinformation classifier</li>
                    <li>Conducted literature review on crowdsourced fact-checking methods, revealing improvements in Community Notes system (4% to 12.5% relevance)</li>
                    <li>Working on efficient fine-tuning techniques and prompt engineering, benchmarking performance across multiple LLMs</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold">Deep Learning Researcher</h4>
                <p className="text-gray-600">PrayogPeti</p>
                <p className="text-gray-500">September 2021 – June 2022 | Bengaluru, Karnataka, India</p>
                <p className="text-gray-600 mt-2">Contributed to research focused on reducing online toxicity using Graph Neural Networks (GNNs) for text classification.</p>
                <div className="mt-3">
                  <p className="text-gray-700 font-medium">Key Contributions:</p>
                  <ul className="list-disc list-inside mt-1 text-gray-600">
                    <li>Conducted comparative analysis of three inductive GNNs—TexTING, In-GCN, and In-GAT for text classification</li>
                    <li>Published findings in IEEE (DOI: 10.1109/ASSIC55218.2022.10088315)</li>
                    <li>Enhanced Inductive GAT model to achieve 98.10% accuracy across 14 classes</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold">Project Intern – UAV Team</h4>
                <p className="text-gray-600">iNeuron.ai</p>
                <p className="text-gray-500">May 2021 – August 2021 | Bengaluru, Karnataka, India</p>
                <div className="mt-3">
                  <p className="text-gray-700 font-medium">Key Contributions:</p>
                  <ul className="list-disc list-inside mt-1 text-gray-600">
                    <li>Built UAV simulations in ROS and Gazebo with real-time object detection using YOLOv5</li>
                    <li>Optimized object detection by converting YOLOv5 to MobileNetV3, achieving 5.5x CPU performance improvement</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-xl font-semibold">Project Intern – SAT IMG Team</h4>
                <p className="text-gray-600">iNeuron.ai</p>
                <p className="text-gray-500">November 2020 – May 2021 | Bengaluru, Karnataka, India</p>
                <div className="mt-3">
                  <p className="text-gray-700 font-medium">Key Contributions:</p>
                  <ul className="list-disc list-inside mt-1 text-gray-600">
                    <li>Developed U-Net with Inception CNN for satellite image segmentation, processing ~21.69 GB dataset</li>
                    <li>Created novel image subtraction algorithm for difference detection using MultiPolygon masks</li>
                    <li>Evaluated performance using Jaccard similarity metric on key regions of interest</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationWork;
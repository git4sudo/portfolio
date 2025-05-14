import React from 'react';
import { ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "TensorFlow Developer Certificate",
    image: "/assets/images/tensorflow-cert.png",
    link: "https://www.credential.net/a070ae98-3f53-427b-af5a-b0d0956c2b0c#gs.i0z3e3",
    description: "Earned this industry-recognized certification to demonstrate expertise in TensorFlow, showcasing the ability to build, train, and deploy scalable machine learning models. Gained hands-on experience in developing and optimizing deep learning models using Python and TensorFlow."
  },
  {
    title: "Reinforcement Learning",
    image: "/assets/images/reinforcement-learning-cert.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/RIS448B7IY2Z", 
    description: "Completed this four-course specialization by the University of Alberta, covering foundational and advanced reinforcement learning concepts. Gained practical experience with algorithms such as Temporal-Difference (TD) Learning, Monte Carlo Methods, Q-Learning, SARSA, and Policy Gradient techniques. Learned to model sequential decision-making problems using Markov Decision Processes (MDPs), implement value-based and policy-based methods, and evaluate agent performance. Developed end-to-end RL pipelines, reinforcing the ability to design intelligent agents in dynamic environments."
  },
  {
    title: "Deep Learning",
    image: "/assets/images/deep-learning-cert.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/YK8FH7EW6N3L",
    description: "Certified by DeepLearning.AI and instructed by Andrew Ng, this specialization covers the entire deep learning pipeline. Mastered building advanced neural networks such as Convolutional Neural Networks (CNNs), Recurrent Neural Networks (RNNs), LSTMs, and Transformers. Acquired skills in hyperparameter tuning, regularization techniques like Dropout and Batch Normalization, and initialization methods. Applied these to real-world challenges in areas like speech recognition, music synthesis, machine translation, and chatbots, gaining proficiency in both theoretical concepts and practical applications."
  },
  {
    title: "Machine Learning",
    image: "/assets/images/machine-learning-cert.png",
    link: "https://www.coursera.org/account/accomplishments/certificate/F67MSAKATVJT",
    description: "Completed Stanford University's comprehensive course on machine learning, covering supervised and unsupervised learning algorithms, data preprocessing, and model evaluation. Learned foundational concepts, including linear regression, logistic regression, neural networks, and clustering techniques, alongside their applications in real-world scenarios."
  },
  {
    title: "Architecting with Google Compute Engine",
    image: "/assets/images/gcp-cert.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/63URWZDRE3XE",
    description: "Completed this five-course specialization, focused on designing and deploying scalable and reliable infrastructure solutions on Google Cloud Platform. Gained expertise in core infrastructure components such as networking, storage, and security, designing elastic infrastructure with autoscaling and load balancing, and implementing reliable solutions with monitoring, automation, and disaster recovery processes. Mastered hands-on practices in building applications using Google Cloud Compute Engine, preparing to handle complex cloud architecture challenges."
  },
  {
    title: "DeepLearning.AI TensorFlow Developer",
    image: "/assets/images/dlai-tfdeveloper-cert.png",
    link: "https://www.coursera.org/account/accomplishments/specialization/certificate/ZL3LKVM35FHY",
    description: "Completed this four-course specialization to gain practical experience in building scalable AI-powered applications using TensorFlow. The program covered key areas such as computer vision, natural language processing, and time series analysis. Gained hands-on experience with convolutional neural networks (CNNs), recurrent neural networks (RNNs), and long short-term memory networks (LSTMs). Learned to implement best practices for training and optimizing deep learning models, including techniques like data augmentation and dropout to prevent overfitting. Developed skills in processing real-world image and text data, and applied TensorFlow tools to build and deploy machine learning models effectively."
  }
];

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  width={2200}
                  height={1700}
                  className="w-full h-auto object-cover"
                />
              </a>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{cert.title}</h3>
                <p className="text-gray-600 leading-relaxed">{cert.description}</p>
                <div className="mt-4">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    View Certificate <ExternalLink size={16} className="ml-1" />
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

export default Certifications;

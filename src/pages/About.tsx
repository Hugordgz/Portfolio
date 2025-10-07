import React from 'react';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '../data/skills';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };



  return (
    <div className="min-h-screen bg-secondary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-bold">About Me</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
              Discover my journey and experiences so far
            </p>
          </motion.div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="container-max section-padding">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={itemVariants} className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                My Journey in Data & Analytics
              </h2>
              <div className="space-y-4 text-lg text-secondary-700 leading-relaxed">
                <p>
                  I'm currently pursuing a dual Bachelor's degree in Data and Business Analytics and Business Administration
                  at Loyola University of Andalusia, Spain, and Loyola University Chicago. With a strong academic foundation
                  (3.92 GPA at Loyola Chicago, 3.67 GPA in Spain), I've been recognized as Top of Class 2023/2024 with
                  honors in Accounting, Economy, Data Visualization, and Databases.
                </p>
                <p>
                  My practical experience spans from leading high-impact projects at Amazon's ONT2 Fulfillment Center
                  valued at $1M+ to conducting cutting-edge AI research at Microsoft's CX department. I've also collaborated
                  with Airbus on award-winning AI solutions for human resources, creating machine learning models to predict
                  and prevent employee absenteeism.
                </p>
                <p>
                  I'm passionate about leveraging data to solve real-world business problems, whether it's optimizing
                  operational efficiency, enhancing customer experience through AI, or developing innovative educational
                  technology solutions. My expertise combines technical skills in Python, SQL, and Power BI with strong
                  business acumen and leadership capabilities.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
            >
              <h3 className="text-2xl font-bold text-secondary-900">Education & Experience</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-secondary-900">US/UE Dual Business Degree, BBA</h4>
                  <p className="text-secondary-600">Loyola University Chicago • 2023-2027 • GPA: 3.92</p>
                  <p className="text-sm text-secondary-500">Dean's List: Fall 2024 & Spring 2025</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-secondary-900">Bachelor of Data and Business Analytics + BBA</h4>
                  <p className="text-secondary-600">Loyola University of Andalusia, Spain • 2023-2027 • GPA: 3.67</p>
                  <p className="text-sm text-secondary-500">Top of Class 2023/2024 • Honors in Accounting, Economy, Data Visualization, Databases</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-secondary-900">Area Manager Intern</h4>
                  <p className="text-secondary-600">Amazon • San Bernardino, CA • Jun-Aug 2025</p>
                  <p className="text-sm text-secondary-500">Led $1M+ project, managed 200+ employees</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-secondary-900">CX Research Intern</h4>
                  <p className="text-secondary-600">Microsoft • Remote • Feb-Jun 2025</p>
                  <p className="text-sm text-secondary-500">AI & Customer Experience Strategy Research</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-secondary-900">Awards & Recognition</h4>
                  <p className="text-secondary-600">Best Speaker - Loyola Accounting Debate XIII (2023)</p>
                  <p className="text-sm text-secondary-500">Academic Excellence Awards from Universidad Loyola & SAFA Funcadia</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-white py-16">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
                Technical Skills
              </h2>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                A comprehensive overview of my technical expertise across different domains
              </p>
            </div>

            <div className="space-y-12">
              {Object.entries(skillCategories).map(([category, title], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-secondary-900 text-left">
                    {title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {skills
                      .filter(skill => skill.category === category)
                      .map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.4, delay: index * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-secondary-50 rounded-xl p-4 border border-secondary-200 hover:border-primary-300 transition-all duration-200"
                        >
                          <div className="text-center">
                            <span className="font-medium text-secondary-900">
                              {skill.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="py-16 bg-gradient-to-r from-primary-50 to-secondary-50">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900">
              Professional Highlights
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { number: '3.92', label: 'GPA at Loyola Chicago', icon: '🎓' },
                { number: '$1M+', label: 'Project Value Led at Amazon', icon: '💼' },
                { number: '200+', label: 'Employees Supervised', icon: '👥' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4"
                >
                  <div className="text-4xl">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-600">
                    {stat.number}
                  </div>
                  <div className="text-lg font-medium text-secondary-700">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;

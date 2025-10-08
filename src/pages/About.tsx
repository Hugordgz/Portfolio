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
                  I am a double degree student in Business Administration and Data & Business Analytics, currently pursuing my studies between Spain and the United States. Throughout this international journey, I have achieved strong academic results, reflecting my commitment to excellence and my ability to adapt and thrive in diverse learning environments. My path combines business understanding with data-driven decision making, strengthened through hands-on projects and global experience.
                </p>
                <p>
                  I have collaborated with leading tech companies such as Airbus, Microsoft, and Amazon, where I have gained valuable experience in AI applications, customer experience, and strategic analysis. These experiences have strengthened my ability to approach complex problems from both a technical and business perspective.
                </p>
                <p>
                  Driven by curiosity and continuous learning, I aim to keep expanding my expertise in data strategy, analytics, and innovation. My goal is to build a career that connects data, technology, and human insight to create impactful and sustainable solutions.
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
                  <p className="text-secondary-600">Loyola University Chicago • 2022-2027 • GPA: 3.92</p>
                  <p className="text-sm text-secondary-500">Dean's List: Fall 2024 & Spring 2025</p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4">
                  <h4 className="font-semibold text-secondary-900">Bachelor of Data and Business Analytics + BBA</h4>
                  <p className="text-secondary-600">Loyola University of Andalusia, Spain • 2022-2027 • GPA: 3.67</p>
                  <p className="text-sm text-secondary-500">Top of Class 2023/2024 • Honors in Accounting, Economy, Data Visualization, Databases</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-secondary-900">Area Manager Intern</h4>
                  <p className="text-secondary-600">Amazon • San Bernardino, CA • Jun-Aug 2025</p>
                  <p className="text-sm text-secondary-500">Led $1M+ project, supported operations for 200+ employees</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-secondary-900">CX Research Intern</h4>
                  <p className="text-secondary-600">Microsoft • Remote • Feb-Jun 2025</p>
                  <p className="text-sm text-secondary-500">AI & Customer Experience Strategy Research</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-secondary-900">Awards & Recognition</h4>
                  <p className="text-secondary-600">Alpha Sigma Nu Member</p>
                  <p className="text-sm text-secondary-500">Other Academic Excellence Awards</p>
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


    </div>
  );
};

export default About;

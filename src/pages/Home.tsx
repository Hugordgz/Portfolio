import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-100">
      {/* Hero Section */}
      <section className="container-max section-padding py-20 lg:py-32">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-secondary-900">
              Hugo Rodriguez Tristancho
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-600">
              Data & Business Analytics
            </h2>
            <p className="text-lg md:text-xl text-secondary-500">
              Loyola University Chicago & Loyola University of Andalusia
            </p>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed"
          >
            This portfolio showcases my projects in data analysis, visualization, and data-driven solutions. It is regularly updated with new work that reflects my learning, exploration of advanced techniques, and practical use of data tools. Each project highlights insights drawn from data and their real-world applications.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/projects"
              className="btn-primary text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              View My Projects
            </Link>
            <Link
              to="/contact"
              className="btn-secondary text-lg px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Skills Preview */}
      <section className="container-max section-padding py-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-secondary-900">
            Core Expertise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Power BI', icon: '📊' },
              { name: 'Python', icon: '🐍' },
              { name: 'SQL', icon: '🗃️' }
            ].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="card p-6 text-center space-y-4"
              >
                <div className="text-4xl">{skill.icon}</div>
                <h4 className="text-lg font-semibold text-secondary-800">
                  {skill.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Projects Preview */}
      <section className="bg-white py-16">
        <div className="container-max section-padding">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-12"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-4xl font-bold text-secondary-900">
                Featured Projects
              </h3>
              <p className="text-lg text-secondary-600 max-w-2xl mx-auto">
                Explore some of my recent work in data analysis, visualization, and machine learning
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'CRM Sales Dashboard',
                  type: 'Power BI',
                  description: 'Comprehensive CRM dashboard with sales KPIs and customer insights'
                },
                {
                  title: 'Space Missions Analytics',
                  type: 'Power BI',
                  description: 'Interactive dashboard exploring space mission data and success rates'
                },
                {
                  title: 'NorthWind Traders BI',
                  type: 'Power BI',
                  description: 'Complete business intelligence solution with advanced DAX'
                }
              ].map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="card p-6 space-y-4"
                >
                  <div className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full inline-block">
                    {project.type}
                  </div>
                  <h4 className="text-xl font-semibold text-secondary-900">
                    {project.title}
                  </h4>
                  <p className="text-secondary-600">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-lg group"
              >
                View All Projects
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import { Skill } from '../types';

export const skills: Skill[] = [
  // Programming
  { name: 'Python', category: 'programming'},
  { name: 'R', category: 'programming'},
  { name: 'SQL', category: 'programming'},
  { name: 'JavaScript', category: 'programming'},

  // Database
  { name: 'Database Design', category: 'database' },
  { name: 'Data Modeling', category: 'database' },
  { name: 'SQL Server', category: 'database' },
  { name: 'MySQL', category: 'database' },

  // Visualization
  { name: 'Power BI', category: 'visualization' },
  { name: 'Data Visualization', category: 'visualization' },
  { name: 'Matplotlib', category: 'visualization' },
  { name: 'Seaborn', category: 'visualization' },
  { name: 'Pandas', category: 'visualization' },

  // Analytics
  { name: 'Statistical Analysis', category: 'analytics' },
  { name: 'Linear Regression', category: 'analytics' },
  { name: 'Logistic Regression', category: 'analytics' },
  { name: 'Predictive Modeling', category: 'analytics' },
  { name: 'Business Intelligence', category: 'analytics' },
  { name: 'Data Mining', category: 'analytics' },

  // Cloud & Tools
  { name: 'Microsoft Office', category: 'cloud' },
  { name: 'Excel', category: 'cloud' },
  { name: 'Power Query', category: 'cloud' },
  { name: 'DAX', category: 'cloud' }
];

export const skillCategories = {
  programming: 'Programming Languages',
  database: 'Database & Modeling',
  visualization: 'Data Visualization & Tools',
  analytics: 'Analytics & Machine Learning',
  cloud: 'Business Tools & Platforms'
};

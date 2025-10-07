import { Skill } from '../types';

export const skills: Skill[] = [
  // Programming
  { name: 'Python', category: 'programming'},
  { name: 'R', category: 'programming'},
  { name: 'SQL', category: 'programming'},
  { name: 'JavaScript', category: 'programming'},

  // Database
  { name: 'Database Design', category: 'database', level: 'advanced' },
  { name: 'Data Modeling', category: 'database', level: 'advanced' },
  { name: 'SQL Server', category: 'database', level: 'advanced' },
  { name: 'MySQL', category: 'database', level: 'intermediate' },

  // Visualization
  { name: 'Power BI', category: 'visualization', level: 'expert' },
  { name: 'Data Visualization', category: 'visualization', level: 'expert' },
  { name: 'Matplotlib', category: 'visualization', level: 'advanced' },
  { name: 'Seaborn', category: 'visualization', level: 'advanced' },
  { name: 'Pandas', category: 'visualization', level: 'advanced' },

  // Analytics
  { name: 'Machine Learning', category: 'analytics', level: 'advanced' },
  { name: 'Statistical Analysis', category: 'analytics', level: 'expert' },
  { name: 'Linear Regression', category: 'analytics', level: 'advanced' },
  { name: 'Logistic Regression', category: 'analytics', level: 'advanced' },
  { name: 'Predictive Modeling', category: 'analytics', level: 'advanced' },
  { name: 'Business Intelligence', category: 'analytics', level: 'expert' },
  { name: 'Data Mining', category: 'analytics', level: 'advanced' },

  // Cloud & Tools
  { name: 'Microsoft Office', category: 'cloud', level: 'expert' },
  { name: 'Excel', category: 'cloud', level: 'expert' },
  { name: 'Power Query', category: 'cloud', level: 'advanced' },
  { name: 'DAX', category: 'cloud', level: 'advanced' }
];

export const skillCategories = {
  programming: 'Programming Languages',
  database: 'Database & Modeling',
  visualization: 'Data Visualization & Tools',
  analytics: 'Analytics & Machine Learning',
  cloud: 'Business Tools & Platforms'
};

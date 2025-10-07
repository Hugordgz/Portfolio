import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    type: 'powerbi',
    title: 'CRM Sales Dashboard',
    description: 'Comprehensive CRM dashboard analyzing sales performance, customer relationships, and revenue trends. Features interactive visualizations for tracking sales KPIs, customer acquisition, and sales team performance metrics.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Data Modeling'],
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiM2NmYmM3MmQtNWI5Yi00NjVkLTlmMjQtM2RmYjI5NmNkYjAyIiwidCI6Ijg3MTA1OGY5LWM4ZGYtNDg0Yi1hYTc4LWM5N2EzYzMyOWZiZSIsImMiOjh9',
    featured: true
  },
  {
    id: '2',
    type: 'powerbi',
    title: 'Space Missions Analytics',
    description: 'Interactive dashboard exploring space mission data, analyzing mission success rates, costs, and trends over time. Provides insights into space exploration patterns and mission outcomes across different space agencies.',
    tech: ['Power BI', 'DAX', 'Data Visualization', 'Statistical Analysis'],
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiODYxYTE1NjEtZjI0Ni00MzQ2LWJhNTctNTU3NzZhZmMwYzY3IiwidCI6Ijg3MTA1OGY5LWM4ZGYtNDg0Yi1hYTc4LWM5N2EzYzMyOWZiZSIsImMiOjh9',
    featured: true
  },
  {
    id: '3',
    type: 'powerbi',
    title: 'NorthWind Traders Business Intelligence',
    description: 'Complete business intelligence solution for NorthWind Traders, featuring sales analysis, product performance, customer insights, and operational metrics. Demonstrates advanced DAX calculations and data modeling techniques.',
    tech: ['Power BI', 'DAX', 'Power Query', 'Business Intelligence', 'Data Modeling'],
    embedUrl: 'https://app.powerbi.com/view?r=eyJrIjoiMGNhM2QzYzItY2U0MC00ZmUwLWI5ZjEtNDUyYzM2ODQ2NDBlIiwidCI6Ijg3MTA1OGY5LWM4ZGYtNDg0Yi1hYTc4LWM5N2EzYzMyOWZiZSIsImMiOjh9',
    featured: true
  },
];

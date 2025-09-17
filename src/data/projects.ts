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
  {
    id: '4',
    type: 'python',
    title: 'Airbus AI for Human Resources',
    description: 'Award-winning machine learning project developed in collaboration with Airbus to predict and prevent employee absenteeism. Implemented advanced ML algorithms to analyze HR patterns and improve workforce efficiency. Recognized as the best project among competing teams.',
    tech: ['Python', 'Machine Learning', 'Pandas', 'Scikit-learn', 'Data Analysis', 'HR Analytics'],
    link: 'https://github.com/Hugordgz/airbus-hr-ai-project',
    featured: true
  },
  {
    id: '5',
    type: 'python',
    title: 'Auxilio - Educational Innovation Startup',
    description: 'Startup project developed during Santander X Explorer Entrepreneur Program focused on delivering innovative solutions for extracurricular education at university level. Includes market analysis, business modeling, and data-driven insights for educational technology.',
    tech: ['Python', 'Data Analysis', 'Business Intelligence', 'Market Research', 'Startup Development'],
    link: 'https://github.com/Hugordgz/auxilio-startup-project'
  },
  {
    id: '6',
    type: 'sql',
    title: 'Business Analytics Database Design',
    description: 'Comprehensive database design and optimization project for business analytics. Includes complex queries for sales analysis, customer segmentation, and performance metrics. Demonstrates advanced SQL techniques and database modeling skills.',
    tech: ['SQL', 'Database Design', 'Data Analysis', 'Performance Optimization'],
    link: 'https://github.com/Hugordgz/business-analytics-sql',
    query: `-- Advanced Customer Analytics Query
WITH CustomerMetrics AS (
  SELECT
    c.customer_id,
    c.customer_name,
    c.registration_date,
    COUNT(DISTINCT o.order_id) as total_orders,
    SUM(o.total_amount) as total_revenue,
    AVG(o.total_amount) as avg_order_value,
    MAX(o.order_date) as last_order_date,
    DATEDIFF(day, c.registration_date, MAX(o.order_date)) as customer_lifetime_days
  FROM customers c
  LEFT JOIN orders o ON c.customer_id = o.customer_id
  WHERE c.registration_date >= DATEADD(year, -2, GETDATE())
  GROUP BY c.customer_id, c.customer_name, c.registration_date
),
CustomerSegmentation AS (
  SELECT *,
    CASE
      WHEN total_revenue > 5000 AND total_orders > 10 THEN 'VIP'
      WHEN total_revenue > 2000 AND total_orders > 5 THEN 'High Value'
      WHEN total_revenue > 500 OR total_orders > 2 THEN 'Regular'
      ELSE 'New/Low Activity'
    END as customer_segment,
    CASE
      WHEN DATEDIFF(day, last_order_date, GETDATE()) <= 30 THEN 'Active'
      WHEN DATEDIFF(day, last_order_date, GETDATE()) <= 90 THEN 'At Risk'
      ELSE 'Inactive'
    END as activity_status
  FROM CustomerMetrics
)
SELECT
  customer_segment,
  activity_status,
  COUNT(*) as customer_count,
  AVG(total_revenue) as avg_revenue,
  AVG(avg_order_value) as avg_order_value,
  AVG(customer_lifetime_days) as avg_lifetime_days
FROM CustomerSegmentation
GROUP BY customer_segment, activity_status
ORDER BY customer_segment, activity_status;`
  },
  {
    id: '7',
    type: 'sql',
    title: 'Academic Performance Analytics',
    description: 'SQL-based analysis of academic performance data, including GPA tracking, course performance analysis, and student success metrics. Developed during academic projects at Loyola University.',
    tech: ['SQL', 'Data Analysis', 'Academic Analytics', 'Statistical Analysis'],
    link: 'https://github.com/Hugordgz/academic-analytics-sql',
    query: `-- Academic Performance Analysis
SELECT
  s.student_id,
  s.student_name,
  s.major,
  COUNT(DISTINCT e.course_id) as courses_taken,
  AVG(e.grade_points) as current_gpa,
  CASE
    WHEN AVG(e.grade_points) >= 3.8 THEN 'Dean''s List'
    WHEN AVG(e.grade_points) >= 3.5 THEN 'High Honors'
    WHEN AVG(e.grade_points) >= 3.0 THEN 'Good Standing'
    ELSE 'Academic Warning'
  END as academic_status,
  MAX(e.semester) as latest_semester
FROM students s
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id
WHERE e.semester >= '2023-Fall'
GROUP BY s.student_id, s.student_name, s.major
HAVING COUNT(DISTINCT e.course_id) >= 3
ORDER BY current_gpa DESC;`
  }
];

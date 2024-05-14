

Gym Management Mini Project

Objective:
The objective of this project is to create a gym management system that allows gym owners to manage their members, trainers, classes, and schedules efficiently.

Technologies Used:

HTML
CSS
PHP
MySQL
XAMPP server for hosting and database management
Features:

Member Management:

Add, edit, and delete member profiles.
Track member attendance and subscription status.
View member details including contact information and membership plan.
Trainer Management:

Add, edit, and delete trainer profiles.
Assign trainers to specific classes or sessions.
View trainer schedules and availability.
Class Management:

Create, modify, and delete class schedules.
Assign trainers to classes.
Set maximum capacity for each class.
Schedule Management:

Display weekly schedules for classes and trainers.
Allow members to sign up for classes.
Send reminders for upcoming classes.
Database Schema:

Members Table:

ID (Primary Key)
Name
Email
Phone Number
Membership Start Date
Membership End Date
Subscription Plan
Trainers Table:

ID (Primary Key)
Name
Specialization
Contact Information
Classes Table:

ID (Primary Key)
Title
Description
Time
Maximum Capacity
Schedule Table:

ID (Primary Key)
Class ID (Foreign Key)
Trainer ID (Foreign Key)
Date
Time
Member Limit
Frontend:
The frontend will be developed using HTML for structure, CSS for styling, and PHP for dynamic content generation. It will include user-friendly interfaces for managing members, trainers, classes, and schedules. The design will focus on simplicity and ease of use.

Database Connectivity:
MySQL will be used to create and manage the database. XAMPP server will host the project locally, providing a platform for PHP scripts to connect with the MySQL database.


-- Create the gym database
CREATE DATABASE IF NOT EXISTS gym;
USE gym;

-- Create the Member table
CREATE TABLE Member (
    MemberID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Gender VARCHAR(10),
    DateOfBirth DATE,
    ContactNumber VARCHAR(20),
    Email VARCHAR(255),
    Address VARCHAR(255)
);

-- Create the Trainer table
CREATE TABLE Trainer (
    TrainerID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Gender VARCHAR(10),
    DateOfBirth DATE,
    ContactNumber VARCHAR(20),
    Email VARCHAR(255),
    Specialization VARCHAR(255)
);

-- Create the Employee table
CREATE TABLE Employee (
    EmployeeID INT AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(255),
    Gender VARCHAR(10),
    DateOfBirth DATE,
    ContactNumber VARCHAR(20),
    Email VARCHAR(255),
    Position VARCHAR(255)
);

-- Create the MembershipPlan table
CREATE TABLE MembershipPlan (
    PlanID INT AUTO_INCREMENT PRIMARY KEY,
    PlanName VARCHAR(255),
    Description TEXT,
    Price DECIMAL(10, 2)
);

-- Create the Equipment table
CREATE TABLE Equipment (
    EquipmentID INT AUTO_INCREMENT PRIMARY KEY,
    EquipmentName VARCHAR(255),
    Category VARCHAR(255),
    QuantityAvailable INT
);

-- Create the WorkoutSession table
CREATE TABLE WorkoutSession (
    SessionID INT AUTO_INCREMENT PRIMARY KEY,
    SessionName VARCHAR(255),
    StartTime TIME,
    EndTime TIME,
    Description TEXT
);

-- Create the Attendance table
CREATE TABLE Attendance (
    AttendanceID INT AUTO_INCREMENT PRIMARY KEY,
    MemberID INT,
    SessionID INT,
    AttendanceDate DATE,
    AttendanceStatus VARCHAR(20),
    FOREIGN KEY (MemberID) REFERENCES Member(MemberID),
    FOREIGN KEY (SessionID) REFERENCES WorkoutSession(SessionID)

);

-- Create the MembershipPayment table
CREATE TABLE MembershipPayment (
    PaymentID INT AUTO_INCREMENT PRIMARY KEY,
    MemberID INT,
    PlanID INT,
    PaymentDate DATE,
    Amount DECIMAL(10, 2),
    FOREIGN KEY (MemberID) REFERENCES Member(MemberID),
    FOREIGN KEY (PlanID) REFERENCES MembershipPlan(PlanID)
);
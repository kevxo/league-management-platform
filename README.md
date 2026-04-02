# ⚽ League Management Platform

A full-stack web application designed to help **league administrators and coaches** manage teams, players, match scheduling, and communication in amateur and youth sports leagues.

---

## 🚀 Overview

The League Management Platform streamlines the organization of sports leagues by providing tools for:

- Managing leagues, divisions, and teams  
- Registering and organizing players (including guest players)  
- Scheduling and tracking matches  
- Enabling communication between coaches and league admins  

This project is designed with **scalability in mind**, starting as a modular monolith and evolving into a **microservices architecture deployed on AWS using Kubernetes**.

---

## 🎯 Goals

- Build a **real-world, production-style application**
- Demonstrate **scalable backend architecture**
- Implement **role-based access control**
- Practice **cloud deployment with AWS (EKS, RDS, S3)**
- Showcase **full-stack development skills**

---

## 🧱 Tech Stack

### Frontend
- React (TypeScript)
- Tailwind CSS

### Backend
- FastAPI (Python)
- PostgreSQL

### DevOps & Cloud (Planned)
- Docker
- Kubernetes (EKS)
- AWS RDS
- AWS S3
- AWS ECR

---

## 🏗️ Architecture

### Phase 1 (MVP – Local Development)
- Modular monolith (FastAPI)
- PostgreSQL database
- Docker Compose

### Phase 2 (Microservices)
- Auth/User Service
- League Service
- Team/Player Service
- Match Scheduling Service
- Messaging Service

### Phase 3 (Cloud Deployment)
- Kubernetes (EKS)
- RDS for database
- S3 + CloudFront for frontend hosting

---

## 🔑 Features

### 👤 User Roles
- **League Admin**
  - Manage leagues and teams
  - Oversee scheduling

- **Coach**
  - Manage team rosters
  - View schedules
  - Communicate with admins

---

### 🏆 League Management
- Create and manage leagues
- Organize divisions (e.g., U12, U14)
- Assign teams to divisions

---

### ⚽ Team & Player Management
- Add/remove players
- Support for **guest players**
- Track player information (DOB, etc.)

---

### 📅 Match Scheduling
- Schedule matches between teams
- Track match status (scheduled, completed, canceled)
- Assign locations and dates

---

### 💬 Messaging System
- Communication between coaches and admins
- Conversation-based messaging
- Group and direct messaging (planned)

---

## 🗄️ Database Design (High-Level)

### Core Entities:
- Users
- Leagues
- Divisions
- Teams
- Players
- TeamPlayers (join table)
- Matches
- Conversations
- Messages

---

## ⚙️ Getting Started (Local Setup)

### Prerequisites
- Docker & Docker Compose
- Node.js
- Python 3.11+

---

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/league-management-platform.git
cd league-management-platform

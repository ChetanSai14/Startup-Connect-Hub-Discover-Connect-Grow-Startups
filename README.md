# 🚀 Startup Connect Hub – Discover, Connect & Grow Startups

A full-stack platform that enables entrepreneurs and startups to connect, collaborate, and showcase ideas in one place.

---

## 📁 Project Structure

/my-app: React frontend (built with Tailwind CSS and modern UI components)
/backend: Node.js & Express backend (MongoDB for data management and authentication)

---

## ⚙️ Quick Start

### 1. Prerequisites

Node.js (v18+)
MongoDB (Local or Atlas)

---

### 2. Backend Setup

cd backend
npm install

# Create a .env file based on .env.example

npm start

---

### 3. Frontend Setup

cd my-app
npm install
npm start

---

## 🌟 Features

Startup Networking: Connect with entrepreneurs, developers, and innovators
Idea Showcase: Post and explore startup ideas and projects
Collaboration Opportunities: Find teammates and partners for your startup
User Authentication: Secure login and user account management
Responsive UI: Clean and modern interface for seamless user experience

---

## 🚀 Deployment Guide

### 1. Frontend (Vercel)

Repo Link: Connect this GitHub repo
Root Directory: Select my-app
Framework Preset: Create React App

Environment Variables:
REACT_APP_API_URL: Set this to your backend URL (e.g., https://backend-production-xyz.up.railway.app)

---

### 2. Backend (Railway)

Repo Link: Connect this GitHub repo
Root Directory: Select backend

Environment Variables:
MONGO_URI: Your MongoDB connection string
JWT_SECRET: A long random string
CLIENT_URL: Set to your Vercel URL (e.g., https://startup-connect-hub.vercel.app)
PORT: (Railway sets this automatically, default can be 5000)

---

## 🛠️ Tech Stack

Frontend:
React.js, Tailwind CSS, JavaScript, HTML, CSS

Backend:
Node.js, Express.js

Database:
MongoDB

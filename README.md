# Code Online - Real-Time Collaborative Coding Platform

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

A LeetCode-inspired platform for real-time code mentoring sessions, built with Next.js and WebSocket technology. The platform enables mentors to observe and guide students through coding challenges in real-time.

🔗 [Live Demo](https://online-coding-frontend.onrender.com) (Note: Initial load may take around 1 minute due to cold start)

## Features

### 🏠 Home Page
- Collection of coding challenges with varying difficulty levels (inserted manually)
- Problems categorized by type (Math, String, Bit Manipulation, etc.)
- Difficulty indicators (Easy, Medium, Hard)

<img width="600" alt="Home Page" src="https://github.com/user-attachments/assets/89b2e514-d650-4299-9d89-c48a83915648">

### 👥 Real-Time Collaboration
- First user to enter becomes the mentor
- Second user joins as a student
- Real-time code synchronization between mentor and student
- Room capacity limited to 2 users

<div style="display: flex; gap: 10px; margin-bottom: 20px;">
    <img width="400" alt="Mentor View" src="https://github.com/user-attachments/assets/4857b671-22b7-4714-ba9f-9253b4c24da8">
    <img width="400" alt="Student View" src="https://github.com/user-attachments/assets/b90339c7-2556-4773-8249-24eb69bdb591">
</div>

### 💻 Interactive Coding Environment
- Syntax highlighting for JavaScript
- Real-time code updates
- Student can write and edit code
- Mentor has read-only access

<div style="display: flex; gap: 10px; margin-bottom: 20px;">
    <img width="400" alt="Real-time Updates" src="https://github.com/user-attachments/assets/13f76be8-95ef-4717-8f39-4ba39aa5d2af">
    <img width="400" alt="Success Feedback" src="https://github.com/user-attachments/assets/f3cb05dd-84c4-4461-bd16-083d3d163101">
</div>

## Technical Implementation

### Built With
- Next.js
- WebSocket
- JavaScript/TypeScript
- Syntax highlighting

## Getting Started
1. Wait for the initial server cold start (may take a moment)
2. Select a coding challenge from the home page
3. First user automatically becomes the mentor
4. Share the URL with your student/mentor
5. Start coding and collaborating in real-time

## Inspiration
Design and functionality inspired by LeetCode, adapted for real-time mentoring sessions.

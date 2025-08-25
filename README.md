# 🌿 Mini Plant Store

A full-stack web application where users can browse, search, and filter through a catalog of plants. Admins can log in and add new plants to the system via a secure form with image upload.

---

## 🔗 Live Links

- **Frontend**: [View Site](https://plant-store-frontend-n39j.onrender.com/)
- **Backend API**: [Render API](https://plant-store-backend-gjoh.onrender.com)
- **GitHub Repo**: [Frontend on GitHub](https://github.com/Nikhith221B/plant-store-frontend)
- **GitHub Repo**: [Backend on GitHub](https://github.com/Nikhith221B/plant-store-backend)

---

## 🚀 Features

### 👤 User Features
- View all plants in a modern, responsive grid
- Search by name or category keyword (case-insensitive)
- Filter plants by category (e.g. Indoor, Outdoor, Succulent)
- See stock availability, price, and images

### 🔐 Admin Features
- Register and log in as admin
- Add new plant with:
  - Name
  - Price
  - Categories (comma-separated)
  - Stock status
  - Optional image upload (via Cloudinary)
- Protected route (`/admin`) only accessible by admin users

---

## 📦 Backend APIs

- `GET /plants` — Fetch all plants (public)
- `POST /plants` — Add new plant (admin only)
- `POST /auth/register` — Create user 
- `POST /auth/login` — Log in and receive JWT

---

## 🔒 Admin Access

### ✅ Use this admin to test:

- **Email**: `test@gmail.com`  
- **Password**: `test123`

---

## 🧪 Tech Stack

- **Frontend**: React.js (hooks, context, react-router-dom)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT + bcrypt
- **Deployment**: Render
- **Media Uploads**: Cloudinary (image hosting)

---

## 🪴 Sample Data

- Database seeded with 50+ realistic plants
- Each has:
  - Name
  - Categories (1–3)
  - Price (₹100–₹500)
  - Stock status
  - Optional image URL

---

## 📱 UI + UX Highlights

- Fully responsive (desktop + mobile)
- Hero-style landing page with call-to-action
- About page with tech summary
- Clean color theme with modern design

---

## 👨‍💻 Author

Developed by **Nagireddy**.

- GitHub: [@Nikhith221B](https://github.com/Nikhith221B)

---

# 📚 Book Store REST API

A simple full-featured REST API for managing books, built with **Node.js**, **Express**, and **MongoDB**.  
Perfect for CRUD operations: add, view, update, and delete books.

---

## 🚀 Live Demo (Render Deployment)
> The API is deployed on Render (free tier):
🔗 https://bookstore-api.onrender.com

To prevent it from sleeping, a ping is sent every 10 minutes using [cron-job.org](https://cron-job.org).

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- Postman (for API testing)
- Deployed on Render

---

## 📁 Project Structure

bookstore-api/
├── controllers/ # CRUD logic for books
├── models/ # Mongoose schema
├── routes/ # API endpoints
├── config/ # DB connection
├── .env.example # Environment variables
├── README.md


---

## 🧪 API Endpoints

| Method | Route            | Description          |
|--------|------------------|----------------------|
| GET    | `/books`         | Get all books        |
| POST   | `/books`         | Add a new book       |
| PUT    | `/books/:id`     | Update a book        |
| DELETE | `/books/:id`     | Delete a book        |

---

## 📥 Sample Book JSON

```json
{
  "title": "Atomic Habits",
  "author": "James Clear",
  "price": 499,
  "publishedDate": "2018-10-16"
}


🧑‍💻 Author
Tamilarasu V
📧 arasut075@gmail.com
🌐 https://portfolio-masstamilan.netlify.app/
🔗 [LinkedIn/arasut075](https://www.linkedin.com/in/tamilarasu55/)

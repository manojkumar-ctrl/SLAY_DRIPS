

# 🧢 SlayDrips 👗

SlayDrips is a full-stack e-commerce web application for selling clothes for **Men**, **Women**, and **Kids**. It supports online orders, secure checkout using **Stripe**, **Razorpay**, and **Cash on Delivery**, and has dedicated **Admin** and **User** dashboards for order and product management.

---

## 🚀 Features

### 👨‍💻 User Panel
- Shop clothing by category: Men, Women, Kids
- Sub-categories: Topwear, Bottomwear, Winterwear
- Filter and sort products by price and category
- Add to cart and place orders
- Secure payments via Stripe, Razorpay, or Cash on Delivery
- View past orders
- About and Contact pages

### 🛠️ Admin Panel
- Admin login system
- Add, update, and delete products
- View all user orders
- Manage inventory and user orders

---

## 🧱 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- Vite

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT for authentication
- Multer for file uploads
- Razorpay & Stripe for payments

---

## 📁 Project Folder Structure

slaydrips/
│
├── admin/ # Admin panel (React + Vite)
│ ├── public/
│ ├── src/
│ │ ├── assets/
│ │ ├── components/
│ │ │ ├── Login.jsx
│ │ │ ├── NavBar.jsx
│ │ │ └── SideBar.jsx
│ │ ├── pages/
│ │ │ ├── Add.jsx
│ │ │ ├── List.jsx
│ │ │ └── Orders.jsx
│ │ ├── App.jsx
│ │ ├── index.css
│ │ └── main.jsx
│ ├── .env
│ ├── index.html
│ ├── vite.config.js
│ ├── package.json
│ └── vercel.json
│
├── frontend/ # Customer-facing frontend (React)
│ ├── src/
│ │ ├── components/
│ │ │ ├── Hero.jsx, NavBar.jsx, etc.
│ │ ├── context/
│ │ │ ├── ShopContext.jsx
│ │ │ └── ShopContextProvider.jsx
│ │ ├── pages/
│ │ │ ├── Home.jsx, Cart.jsx, Product.jsx, etc.
│ │ ├── App.jsx
│ │ ├── index.css
│ │ └── main.jsx
│
├── backend/ # Node.js backend API
│ ├── config/
│ ├── controllers/
│ │ ├── cartController.js
│ │ ├── orderController.js
│ │ ├── productController.js
│ │ └── userController.js
│ ├── middleware/
│ │ ├── auth.js
│ │ ├── adminAuth.js
│ │ └── multer.js
│ ├── models/
│ │ ├── orderModel.js
│ │ ├── productModel.js
│ │ └── userModel.js
│ ├── routes/
│ │ ├── cartRoute.js
│ │ ├── orderRoute.js
│ │ ├── productRoute.js
│ │ └── userRoute.js
│ ├── .env
│ ├── server.js
│ └── vercel.json



---

## ⚙️ Getting Started

### 🧩 Prerequisites
- Node.js & npm
- MongoDB URI (local or Atlas)
- Stripe & Razorpay developer keys

---

### 🛠️ Backend Setup


node server.js

🎨 Frontend Setup (User App)

cd frontend
npm install
npm run dev

🧮 Admin Panel Setup
bash
Copy
Edit
cd admin
npm install
npm run dev
🔐 Environment Variables
Not Commited

#LAYOUTS

Homepage

Product page

Cart and Checkout

Admin Dashboard

🔮 Future Enhancements
Wishlist / Save for later

Product ratings & reviews

Inventory stock tracking

Email notifications

Analytics dashboard for admin

📄 License
👨‍💻 Author
Made with ❤️ by Manojkumar
📧 Email: manojkumarnalwar@gmail.com












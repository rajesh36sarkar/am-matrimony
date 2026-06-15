# A&M Matrimony

A modern, full-stack matrimonial web application built with **Next.js** and **Firebase** that helps users discover compatible life partners through a secure and user-friendly platform.

The application features **Google Authentication**, a **multi-step registration process**, **personalized dashboards**, **responsive profile browsing**, and a clean, modern UI optimized for all devices.

---

# ✨ Features

* 🔐 Google Sign-In Authentication
* 👤 Multi-Step User Registration
* 📝 Complete Profile Management
* ❤️ Browse and View Matrimony Profiles
* 📊 Personalized User Dashboard
* 🎯 Dynamic Profile Pages
* 📱 Fully Responsive Design
* ⚡ Fast Performance with Next.js App Router
* 🔥 Firebase Backend Integration
* 🎨 Modern UI with Tailwind CSS

---

# 🛠 Tech Stack

| Technology            | Description                       |
| --------------------- | --------------------------------- |
| **Next.js**           | React Framework (App Router)      |
| **JavaScript**        | Programming Language              |
| **Tailwind CSS**      | Utility-First CSS Framework       |
| **Firebase**          | Authentication & Backend Services |
| **React Context API** | Global State Management           |

---

# 📂 Project Structure

```text
am-matrimony/
│
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.js
│   │   ├── register/
│   │   │   └── page.js
│   │   └── dashboard/
│   │       └── page.js
│   │
│   ├── (public)/
│   │
│   ├── profile/
│   │   └── [id]/
│   │       └── page.js
│   │
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   │
│   └── ui/
│       ├── Button.jsx
│       ├── Card.jsx
│       └── Popup.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── lib/
│   └── firebase.js
│
├── public/
│   ├── images/
│   ├── videos/
│   ├── logo/
│   └── audio/
│
├── .env.local
├── jsconfig.json
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

---

# 📖 Folder Overview

## `app/`

Contains all application pages and routing logic using the **Next.js App Router**.

* Authentication pages
* Landing page
* Dashboard
* Dynamic profile pages
* Public pages

---

## `components/`

Stores reusable React components.

### layout/

Contains global layout components.

* Navbar
* Footer

### ui/

Reusable UI components like:

* Buttons
* Cards
* Popups
* Forms
* Loaders

---

## `context/`

Handles global application state.

Currently includes:

* Firebase Authentication Context
* User Session Management
* Login & Logout Logic

---

## `lib/`

Contains external service configurations.

Example:

* Firebase Initialization
* API Helpers
* Utility Functions

---

## `public/`

Stores static assets.

* Images
* Videos
* Logos
* Audio Files
* Icons

---

# 🚀 Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/your-username/am-matrimony.git

cd am-matrimony
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env.local` file in the project root and add:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain

NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id

NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket

NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id

NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

---

## 4. Run the Development Server

```bash
npm run dev
```

Visit:

```
http://localhost:3000
```

---

# 📌 Key Pages

| Route           | Description             |
| --------------- | ----------------------- |
| `/`             | Landing Page            |
| `/login`        | User Login              |
| `/register`     | Multi-Step Registration |
| `/dashboard`    | User Dashboard          |
| `/profile/[id]` | Dynamic User Profile    |
| `/testimonials` | Success Stories         |

---

# 📑 Key Files

| File                           | Purpose                 |
| ------------------------------ | ----------------------- |
| `app/page.js`                  | Main Landing Page       |
| `app/layout.js`                | Root Layout             |
| `app/(auth)/register/page.js`  | Registration Flow       |
| `app/(auth)/dashboard/page.js` | User Dashboard          |
| `components/layout/Navbar.jsx` | Navigation Bar          |
| `components/layout/Footer.jsx` | Footer                  |
| `context/AuthContext.jsx`      | Authentication Provider |
| `lib/firebase.js`              | Firebase Configuration  |

---

# 🎯 Future Enhancements

* 💬 Real-Time Chat
* ❤️ Match Recommendation System
* 🔍 Advanced Search Filters
* 📸 Profile Verification
* 💳 Premium Membership Plans
* 🔔 Push Notifications
* 📱 Progressive Web App (PWA)
* 🌙 Dark Mode Support

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Developed By

**A&M Matrimony Team**

Built with ❤️ using **Next.js**, **Firebase**, and **Tailwind CSS**.

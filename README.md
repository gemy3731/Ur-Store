# 🛒 E-Commerce Platform – Vendor Dashboard & Customer Store

## Overview

This project is a **full-featured e-commerce application** built with a modern frontend stack, designed to serve **both vendors and customers** in a single platform.

The application consists of:
- A **Vendor Dashboard** for managing products
- A **Customer Store** for browsing products, managing the cart, and placing orders
- A **secure authentication system**
- A **Stripe-powered payment flow**, with a dedicated backend implementation

The main focus of this project was **clean architecture, scalability, reusability, and maintainability**, while following best practices such as **SOLID principles** and **DRY**.

---

## 🧰 Tech Stack

### Frontend
- **React.js** (Vite)
- **TypeScript**
- **Tailwind CSS**
- **React Router**
- **Context API + useReducer** (State Management)

### Backend & Services
- **Supabase**
  - Authentication
  - Database
  - Backend logic

### Payments
- **Stripe**

### Payment Backend
- **Next.js** (API routes for Stripe integration)  

---

## ✨ Application Features

### Vendor Features
- Create new products
- Update existing products
- Delete products
- Manage products through a dedicated vendor dashboard

### Customer Features
- Browse all products
- Add products to cart
- Manage cart items
- Place orders securely using Stripe

---

## 📁 Project Structure

The project follows a **modular and scalable folder structure**, separating concerns clearly and making the codebase easy to navigate and extend.

```text
public
src/
├── assets
├── components
├── containers
├── context
├── data
├── hooks
├── pages
├── protections
├── providers
├── repositories
├── services
├── types
├── utils
├── App.tsx
└── main.tsx
.env
index.html
```
## 🏗 Architecture – Frontend
### State Management
The application uses a combination of:
- useReducer + Context API for global state
- useState for local component state

This approach provides:
- Predictable state updates
- Better scalability compared to prop drilling
- Clear separation between UI and business logic

Contexts are defined under:
```text
src/context
```
Providers and reducers are defined under:
```text
src/providers
```
---
## 🔐 Authentication Architecture
Authentication is handled using Supabase Auth, wrapped in a custom Auth Provider that manages:
- Session initialization
- User profile fetching
- Sign in / Sign up
- Sign out
- Auth state persistence
- Loading states
  
Auth Flow Highlights
- On app load, the provider checks for an existing session
- If a session exists, the user profile is fetched from the profiles table
- Auth state is synced using onAuthStateChange
- Navigation is controlled after successful authentication

Key Files
- src/providers/auth/Auth.provider.tsx
- src/providers/auth/authReducer.ts
- src/context/Auth.context.ts

This structure ensures:
- Centralized authentication logic
- Predictable state updates
- Easy extensibility for roles and permissions

---
## 🛡 Route Protection
To control access across the application, route protection components are used:
- **Auth Routes**
  - Prevent authenticated users from accessing authentication pages
- **customers Routes**
  - Prevent non-customer users from accessing customers pages
- **vendors Routes**
  - Prevent non-vendor users from accessing vendors pages
- **setup profile Routes**
  - Prevent the users that completed their profile from accessing setup profile page

These helpers live under:
```text
src/protections
```
---
## 🔌 Services Layer
A dedicated service layer is used to handle communication with Supabase and external APIs.
Benefits:
- Keeps components clean
- Centralizes API logic
- Improves testability and maintainability

```text
src/services
```
Each service focuses on a specific domain such as products, orders, or users.
---
## 💳 Stripe Payments
Payments are handled using Stripe, with a separate backend implementation built using Next.js.
**Why a Separate Backend?**
- Secure handling of Stripe secrets
- Cleaner frontend responsibilities
- Better scalability for future payment features

**Stripe Backend Repository:**
<a href="https://github.com/gemy3731/stripe-project">https://github.com/gemy3731/stripe-project</a>
---
## 🧠 Code Quality & Best Practices
Throughout the project, special attention was given to:
- Reusable and composable components
- SOLID principles
- DRY (Don’t Repeat Yourself)
- Clear separation of concerns
- Strong typing with TypeScript
- Clean and readable code structure

---
## 🖼 Application Screenshots
**Vendor Dashboard Overview**
<img width="1422" alt="Screen Shot 2022-12-23 at 8 54 53 PM" src="https://vswzdnrhezclcgtqbhbz.supabase.co/storage/v1/object/public/products/dasboard.PNG">
**Customer Store**
<img width="1422" alt="Screen Shot 2022-12-23 at 8 54 53 PM" src="https://vswzdnrhezclcgtqbhbz.supabase.co/storage/v1/object/public/products/products.PNG">
**Cart**
<img width="1422" alt="Screen Shot 2022-12-23 at 8 54 53 PM" src="https://vswzdnrhezclcgtqbhbz.supabase.co/storage/v1/object/public/products/cart.PNG">
---
## 🙌 Final Notes

This project was a great opportunity to focus on architecture, scalability, and real-world application structure.

The main goal was to build something clean, maintainable, and extensible, while simulating a production-ready e-commerce platform.

If you reached this point, thank you for taking the time to explore the project 🙏
Feedback and suggestions are always welcome.

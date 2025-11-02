# 🧱 Concrete Task Manager

**Concrete Task Manager** is a React + TypeScript web application built to manage tasks and contact information efficiently.  
This project demonstrates component-based UI design, persistent storage, and responsive layouts.

---

## 🚀 Features
- ✅ **Todo Manager** — Add, complete, and delete tasks.
- ✅ **Contact Manager** — Edit names, emails, comments, and online/offline status.
- ✅ **Persistent Data** — Uses `localStorage` to save todos and contacts.
- ✅ **Responsive Design** — Mobile-friendly and adaptive layout.
- ✅ **Dark Mode UI** — Styled with custom CSS and Bootstrap layout patterns.

---

## 🧩 Tech Stack
- **React + TypeScript + Vite**
- **Bootstrap** (for responsive layout)
- **Custom CSS modules** (`TodoPage.css`, `ContactPage.css`, `NavBar.css`)
- **LocalStorage API** (for saving data between sessions)

---

## 📂 Project Structure
src/
├── assets/
│ ├── background.jpg
│ ├── Contact-Wireframe.png
│ └── Todo-Wireframe.png
├── components/
│ ├── NavBar.tsx
│ ├── pages/
│ │ ├── TodoPage.tsx
│ │ ├── ContactPage.tsx
│ │ ├── ProjectPage.tsx
├── App.tsx
├── App.css
└── main.tsx

---

## 🧠 User Stories
- As a user, I want to add, complete, and delete tasks so I can manage my workload.
- As a user, I want to view and edit contacts to keep team members organized.
- As a user, I want to toggle online/offline status to simulate team availability.
- As a user, I want my data to persist even after refreshing or closing the browser.

---

## 🖼️ Wireframes
| Todo Page | Contact Page |
|------------|---------------|
| ![Todo Wireframe](./src/assets/Todo-Wireframe.png) | ![Contact Wireframe](./src/assets/Contact-Wireframe.png) |

---

## ⚙️ How to Run Locally
```bash
# 1. Clone the repository
git clone <your-repo-url>

# 2. Navigate into the project folder
cd project-3

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev

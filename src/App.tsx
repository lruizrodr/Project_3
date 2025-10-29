import { BrowserRouter, Routes, Route, Navigate, Link } from "react-router-dom";
import TodosPage from "./pages/TodosPage";
import ContactPage from "./pages/ContactPage";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <nav className="nav">
          <Link to="/todos">Todos</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      <main className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

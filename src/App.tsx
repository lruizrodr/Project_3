import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import TodoPage from "./components/pages/TodoPage";
import ContactPage from "./components/pages/ContactPage";
import ProjectPage from "./components/pages/ProjectPage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Navigate to="/todos" replace />} />
            <Route path="/todos" element={<TodoPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/project" element={<ProjectPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
} 

export default App;

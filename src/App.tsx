import { HashRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import TodoPage from "./components/pages/TodoPage";
import ContactPage from "./components/pages/ContactPage";
import ProjectPage from "./components/pages/ProjectPage";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <HashRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </main>
    </HashRouter>
    </div>
  );
} 

export default App;

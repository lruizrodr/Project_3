import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import TodoPage from "./components/pages/TodoPage";
import ContactPage from "./components/pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/todos" replace />} />
          <Route path="/todos" element={<TodoPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
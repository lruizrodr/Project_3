import { useState } from "react";
import "./ProjectPage.css";
import TodoWireframe from "../../assets/Todo-Wireframe.png";
import ContactWireframe from "../../assets/Contact-Wireframe.png";

function ProjectPage() {
  const [showStories, setShowStories] = useState(false);

  return (
    <section className="project-page">
      <h2>📘 Project Documentation</h2>

      <div className="readme-card">
        <h3>README Summary</h3>
        <p>
          The <strong>Concrete Task Manager</strong> project is a React + TypeScript web application designed to manage todos and contact information efficiently.
        </p>
        <ul>
          <li>✅ Todo list with add, delete, toggle, and filtering features.</li>
          <li>✅ Contact page with editable form and online/offline toggle.</li>
          <li>✅ Persistent data using <code>localStorage</code>.</li>
          <li>✅ Modern UI using CSS and Bootstrap layout patterns.</li>
        </ul>
      </div>

      <div className="stories-section">
        <button 
          className="toggle-btn"
          onClick={() => setShowStories(!showStories)}
        >
          {showStories ? "Hide User Stories" : "Show User Stories"}
        </button>

        {showStories && (
          <div className="stories-card">
            <h3>👤 User Stories</h3>
            <ol>
              <li>As a user, I want to add, complete, and delete tasks so I can manage my daily workflow.</li>
              <li>As a user, I want to view and edit contact details to keep team member's information up to date.</li>
              <li>As a user, I want to mark contacts online/offline to simulate team availability.</li>
              <li>As a user, I want the application to remember my data between sessions.</li>
            </ol>
          </div>
        )}
      </div>

      <div className="wireframes">
        <h3>🧩 Wireframes</h3>
        <div className="wireframe-grid">
          <div className="wireframe-card">
            <h4>Todo Page Layout</h4>
            {/* ✅ Use imported image */}
            <img src={TodoWireframe} alt="Todo Wireframe" />
          </div>
          <div className="wireframe-card">
            <h4>Contact Page Layout</h4>
            <img src={ContactWireframe} alt="Contact Wireframe" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectPage;

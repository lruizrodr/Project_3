import { useState } from "react";

function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Form Submitted!\n" + JSON.stringify(form, null, 2));
  }

  return (
    <section>
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />
          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />
        </div>
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        <textarea
          name="comments"
          placeholder="Comments"
          value={form.comments}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactPage;

//# User Stories
//  1) As a user, I can add a new todo item so that I don’t forget tasks I need to do.
//  - Acceptance: Typing in the New Task field and pressing Add shows the item immediately at the top of the list.
//  2) As a user, I can mark a todo as completed so I can clearly see what’s done.
//  - Acceptance: Clicking the checkbox toggles the item and applies a strike-through style when completed.
//  3) As a user, I can filter my todos by All, Completed, or Incomplete so I can focus on what matters.
//  - Acceptance: Clicking a filter button updates the list without page reload; the active filter is visually highlighted.
import { useState, useEffect } from "react";

type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  comments: string;
  online: boolean;
};

function ContactPage() {
  const [contacts, setContacts] = useState<Contact[]>(() => {
    const stored = localStorage.getItem("contacts");
    return stored
      ? JSON.parse(stored)
      : [
          { id: 1, firstName: "Lucía", lastName: "Rivers", email: "lucia@example.com", comments: "Working on schedule", online: true },
          { id: 2, firstName: "Ethan", lastName: "Park", email: "ethan@example.com", comments: "Frontend mentor", online: false },
          { id: 3, firstName: "Ava", lastName: "Thompson", email: "ava.t@example.com", comments: "Collaborator", online: true },
          { id: 4, firstName: "Noah", lastName: "Kim", email: "noah.kim@example.com", comments: "UX designer", online: false },
        ];
  });

  const [selected, setSelected] = useState<Contact | null>(null);
  const [form, setForm] = useState<Omit<Contact, "id">>({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    online: false,
  });

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  function handleSelect(contact: Contact) {
    setSelected(contact);
    setForm({
      firstName: contact.firstName,
      lastName: contact.lastName,
      email: contact.email,
      comments: contact.comments,
      online: contact.online,
    });
  }

 function handleChange(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) {
  const { name, value, type } = e.target;
  const newValue =
    type === "checkbox" && e.target instanceof HTMLInputElement
      ? e.target.checked
      : value;

  setForm(prev => ({
    ...prev,
    [name]: newValue,
  }));
}

  function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!selected) return;

    const updated = contacts.map(c =>
      c.id === selected.id ? { ...c, ...form } : c
    );
    setContacts(updated);
    setSelected(null);
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
      online: false,
    });
  }

  return (
    <section className="contact-section">
      <h2>Contact List</h2>

      <div className="contact-list">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map(c => (
              <tr key={c.id}>
                <td>{c.firstName} {c.lastName}</td>
                <td>{c.email}</td>
                <td>
                  <span
                    className={`status ${c.online ? "online" : "offline"}`}
                    onClick={() =>
                      setContacts(prev =>
                        prev.map(p =>
                          p.id === c.id ? { ...p, online: !p.online } : p
                        )
                      )
                    }
                  >
                    {c.online ? "🟢 Online" : "⚪ Offline"}
                  </span>
                </td>
                <td>
                  <button onClick={() => handleSelect(c)}>Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="contact-form">
        <h3>{selected ? "Edit Contact" : "Select a Contact"}</h3>
        {selected && (
          <form onSubmit={handleSave}>
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
            <input
              name="email"
              placeholder="Email"
              type="email"
              value={form.email}
              onChange={handleChange}
            />
            <textarea
              name="comments"
              placeholder="Comments"
              value={form.comments}
              onChange={handleChange}
            />
            <div className="status-field">
              <input
                type="checkbox"
                name="online"
                checked={form.online}
                onChange={handleChange}
                id="online"
              />
              <label htmlFor="online">Online</label>
            </div>
            <button type="submit">Save Changes</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default ContactPage;

import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description && !title) return;

    const newItem = { description, title, completed: false, id: Date.now() };
    onAddItems(newItem);

    setDescription("");
    setTitle("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hi there, What's on Your Agenda Today?</h3>
      <div>
        <input
          type="text"
          placeholder="title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button>Add</button>
      </div>
    </form>
  );
};

export default Form;

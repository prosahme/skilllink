import { useState } from "react";
import { addSkill } from "../services/api";

export default function SkillForm({ onSkillAdded }) {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !price) {
      alert("please fill out both the skill name and price.");
      return;
    }
    try {
      await addSkill({ title, price: parseFloat(price) });
      setTitle("");
      setPrice("");
      onSkillAdded();
    } catch (error) {
      console.error("Error adding skill:", error);
      alert("Failed to add skill. please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add Skills</h3>
      <input
        type="text"
        placeholder="skill name"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="number"
        placeholder="price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

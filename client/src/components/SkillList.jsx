import React, { useEffect, useState } from "react";
import { deleteSkill, getSkill } from "../services/api";

const SkillList = ({ refreshList }) => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await getSkill();
        const data = res.data;
        setSkills(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, [refreshList]);

  const handleDelete = async (id) => {
    try {
      await deleteSkill(id);
      setSkills(skills.filter((skill) => skill.id !== id));
    } catch (err) {
      console.error("Failed to delete skill:", err);
    }
  };

  if (loading) return <p className="loading">Loading skills...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="container">
      <h1 className="title">My Skills</h1>
      <ul className="skill-list">
        {skills.map((skill) => (
          <li key={skill.id} className="skill-item">
            <span className="skill-name">{skill.title}</span>
            <span className="skill-price">${skill.price}</span>
            <button onClick={() => handleDelete(skill.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillList;

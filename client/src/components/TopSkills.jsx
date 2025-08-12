import React, { useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { getSkill } from "../services/api";

export default function TopSkills({ limit = 6 }) {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const { data } = await getSkill();

        const top = Array.isArray(data)
          ? data.sort((a, b) => (b.price || 0) - (a.price || 0)).slice(0, limit)
          : [];

        setSkills(top);
      } catch (err) {
        console.error("Failed to load skills:", err);

        setError("Failed to load skills please try again");
        setSkills([]);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, [limit]);

  if (loading) return <p>Loading top skills..</p>;

  if (error) return <p>{error}</p>;

  if (!skills.length) return <p>No skills yet</p>;

  return (
    <div className="top-skills-grid">
      {skills.map((s) => (
        <SkillCard key={s.id} skill={s} />
      ))}
    </div>
  );
}

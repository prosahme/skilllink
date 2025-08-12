import React from "react";
export default function SkillCard({ skill }) {
  const title = skill.title ?? skill.name ?? "Untitled skill";

  const price = skill.price ?? "0.00";

  return (
    <div className="skill-card">
      <div className="skill icon">🎯</div>
      <div className="skill-content">
        <h4 className="skill-title">{title}</h4>

        <p className="skill-price">{price} birr</p>
      </div>
    </div>
  );
}

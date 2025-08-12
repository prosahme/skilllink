import React, { useState } from "react";
import SkillForm from "../components/SkillForm";
import SkillList from "../components/SkillList";

export default function SkillManager() {
  const [refreshList, setRefreshList] = useState(false);

  const handleSkillAdded = () => {
    setRefreshList(!refreshList);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>SkillLink Product Manager</h1>
      </header>
      <main>
        <SkillForm onSkillAdded={handleSkillAdded} />
        <SkillList key={refreshList} />
      </main>
    </div>
  );
}

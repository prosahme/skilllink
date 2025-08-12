import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import SkillManager from "./pages/SkillManger";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/skills" element={<SkillManager />} />
    </Routes>
  );
}

export default App;

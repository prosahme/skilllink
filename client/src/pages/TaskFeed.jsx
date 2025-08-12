import React, { useState } from "react";
import { motion } from "framer-motion";

export default function TaskFeed() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "writing",
    "design",
    "tutoring",
    " Marketing",
    "development",
  ];

  const tasks = [
    {
      id: 1,
      title: "Blog Article writing",
      budget: "$50",
      description:
        "Write a 1500-word SEO-optimized article about healthy recipes",
      location: "Addis ababa",
      postedBy: "sarah M.",
      category: "writing",
    },

    {
      id: 2,
      title: "Logo design",
      budget: "$80",
      description: "Create a modern logo for a startup coffee shop",
      location: "nairobi",
      postedBy: "john D.",
      category: "design",
    },

    {
      id: 3,
      title: "Math tutoring",
      budget: "$25/hr",
      description: "Online tutoring for high school mathematics",
      location: "Dire Dawa",
      postedBy: "Meryem A.",
      category: "tutoring",
    },

    {
      id: 4,
      title: "marketing manager",
      budget: "$60/hr",
      description: "marketing manager for food delivery company",
      location: "jimma",
      postedBy: "Abebe B.",
      category: "Marketing",
    },
  ];

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  return (
    <div className="task-feed-container">
      <div className="category-filter">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn $ {selectedCategory === cat ? "active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="task-list">
        {filteredTasks.map((task) => (
          <motion.div
            key={task.id}
            className="task-card"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3>{task.title}</h3>
            <p className="budget">{task.budget}</p>
            <p className="description">{task.description}</p>
            <p className="location">📍{task.location}</p>
            <p className="posted-by">posted by: {task.postedBy}</p>

            <button className="apply-btn">Apply Now</button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

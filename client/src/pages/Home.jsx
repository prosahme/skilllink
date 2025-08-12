import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TopSkills from "../components/TopSkills";

export default function Home() {
  return (
    <div className="home-page">
      <motion.header
        className="hero"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.h1
          className="hero-title"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatType: "mirror" }}
        >
          Welcome to skillLink
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          Find trusted local freelancers for short tasks- design,tutoring,coding
          and more.
        </motion.p>

        <div className="hero-ctas">
          <Link className="btn primary" to="/post-task">
            Post a Task
          </Link>
          <Link className="btn outline" to="/tasks">
            Explore Tasks
          </Link>
        </div>
      </motion.header>

      <div className="container">
        <main className="home-main">
          <section className="top-skills-section">
            <h2 className="section-title">Top skills</h2>
            <TopSkills limit={6} />
          </section>
        </main>
      </div>
    </div>
  );
}

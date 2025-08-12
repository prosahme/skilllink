const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { title, price } = req.body;
  if (!title || !price) {
    return res.status(400).json({ error: "Missing fields" });
  }
  const sql = "INSERT INTO skills (title , price) VALUES (?, ?)";
  db.query(sql, [title, price], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res
      .status(201)
      .json({ message: "skill added", productId: result.insertId });
  });
});

router.get("/", (req, res) => {
  db.query("SELECT  * FROM skills", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  db.query("DELETE FROM skills WHERE id = ?", [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "skill not found " });
    }
    res.json({ message: "skill deleted" });
  });
});

module.exports = router;

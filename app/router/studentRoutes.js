const express = require("express");
const router = express.Router();

const {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controller/studentController");

// GET all
router.get("/", getAllStudents);

// GET one
router.get("/:id", getStudentById);

// POST
router.post("/", createStudent);

// PUT
router.put("/:id", updateStudent);

// DELETE
router.delete("/:id", deleteStudent);

module.exports = router;
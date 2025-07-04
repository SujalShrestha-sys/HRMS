// src/routes/employeeRoutes.js
import express from "express";
import Employee from "../models/employeeModel.js";

const router = express.Router();

// GET /employees → Fetch all employees
router.get("/", async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error("Error fetching employees:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// POST /employees → Add a new employee
router.post("/", async (req, res) => {
  try {
    const { name, email } = req.body;
    const newEmployee = new Employee({ name, email });
    await newEmployee.save();
    res.status(201).json({ message: "Employee created", employee: newEmployee });
  } catch (err) {
    console.error("Error creating employee:", err);
    res.status(500).json({ message: "Failed to create employee" });
  }
});

export default router;

const express = require("express");
const router = express.Router();
const Expense = require("../models/Expense");


//Add a new expense
router.post("/add", async (req, res) => {
  console.log("Received POST request on /expenses/add");
  console.log("Request Body:", req.body);

  try {
    const { user, amount, category, note, date } = req.body;
    if (!user || !amount || !category) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newExpense = new Expense({
      user,
      amount,
      category,
      note: note || "",
      date: date || Date.now(),
    });

    await newExpense.save();
    res.status(201).json(newExpense);

  } catch (error) {
    console.error("Error saving expense:", error);
    res.status(500).json({ message: "Erreur serveur", error: error.message });
  }
});

//Get all expenses
router.get("/:userId", async (req, res) => {
    try {
      const expenses = await Expense.find({ user: req.params.userId }); // filter per users
      res.status(200).json(expenses);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  });
  
  // Modify an expense
  router.put("/update/:id", async (req, res) => {
    try {
      const { amount, category } = req.body;
  
      const updatedExpense = await Expense.findByIdAndUpdate(
        req.params.id,
        { amount, category },
        { new: true }
      );
  
      if (!updatedExpense) {
        return res.status(404).json({ message: "Expense Not Found" });
      }
  
      res.status(200).json(updatedExpense);
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
  });

  //Delete an expense
  router.delete("/delete/:id", async (req, res) => {
    try {
        const deletedExpense = await Expense.findByIdAndDelete(req.params.id);

        if (!deletedExpense) {
            return res.status(404).json({ message: "Expense Not Found" });
        }

        res.status(200).json({ message: "Expense deleted successfully", deletedExpense });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

  
  
  module.exports = router;
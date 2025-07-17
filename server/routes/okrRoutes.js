const express = require('express');
const router = express.Router();
const OKR = require('../models/OKR');

// GET all OKRs
router.get('/', async (req, res) => {
  const okrs = await OKR.find();
  res.json(okrs);
});

// POST new OKR
router.post('/', async (req, res) => {
  const newOKR = new OKR(req.body);
  const savedOKR = await newOKR.save();
  res.json(savedOKR);
});

// PUT update OKR
router.put('/:id', async (req, res) => {
  const updatedOKR = await OKR.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedOKR);
});

// DELETE OKR
router.delete('/:id', async (req, res) => {
  await OKR.findByIdAndDelete(req.params.id);
  res.json({ message: 'OKR deleted' });
});

module.exports = router;

// scheduleRoutes.js
const express = require('express');
const router = express.Router();
const Schedule = require('../models/scheduleModel');

router.post('/', async (req, res) => {
  try {
    const {  employeeName,shiftDate,shiftTime } = req.body;
    const newSchedule= new Schedule({
          employeeName,
          shiftDate,
          shiftTime,

    });
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Schedule.findByIdAndDelete(id);
    res.status(200).json({ message: 'Employee deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;


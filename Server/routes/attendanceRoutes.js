const express = require('express');
const router = express.Router();
const Attendance = require('../models/attendanceModel');

// Create attendance
router.post('/', async (req, res) => {
    try {
      const {  date, employeeName,absent,present } = req.body;
      const newAttendance= new Attendance({
          date,
          employeeName,
          absent,
          present,                                
  
      });
      await newAttendance.save();
      res.status(201).json(newAttendance);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

  router.get('/', async (req, res) => {
    try {
      const attendances = await Attendance.find();
      res.status(200).json(attendances);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'Server error' });
    }
  });

// Update attendance by ID
router.get('/:_id', async (request, response) => {
  try{

      const { _id } = request.params;

      const attendance = await  Attendance.findById(_id);

   return response.status(200).json(attendance);
   
  }catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });   
  }
});

router.put('/:_id', async (request, response) => {
  try{
      if(
          !request.body.employeeName||
          !request.body.date||
          !request.body.absent||
          !request.body.present
        
      ){
          return response.status(400).send({
              message: 'Send all required fields: employeeName, month, basicSalary, allowance, deduction,totalSalary',
          });
      }

      const { _id } = request.params;

      const result = await Attendance.findByIdAndUpdate(_id, request.body);

      if (!result) {
          return response.status(404).json({ message: 'Salary Statement not found' });
      }

      return response.status(200).json({ message: 'Salary Statement update successfully' });

  }catch (error) {
      console.log(error.message);
      response.status(500).send({ message: error.message });   
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Attendance.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Attendance deleted successfully.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting attendance.' });
  }
});

module.exports = router;




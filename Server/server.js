const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const nodemailer = require('nodemailer');
const employeeRoutes = require('./routes/Employeeroute');
const attendanceRoutes = require('./routes/attendanceRoutes');
const leaveRoute =  require('./routes/leaveRoute');
const employee = require('./models/Employeemodel');
const crypto = require('crypto'); 
const salaryRoute = require('./routes/salaryRoutes');
const  Schedule = require('./routes/ScheduleRoute');
const adminlogin = require('./routes/adminloginroute');


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/employees', employeeRoutes);
app.use('/schedule',Schedule);
app.use('/leave',leaveRoute);
app.use('/attendances', attendanceRoutes);
app.use('/salaries', salaryRoute);
app.use('/admin',adminlogin);



// Connect to MongoDB
mongoose.connect('mongodb+srv://it22251428:AHQvS0BhFbSw91jS@pet-care-clinic-databas.ut7eejm.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully');
});


app.post("/", (req, res) => {
  const { email, password } = req.body;
  employee.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password) {
          res.json({ message: "Success", firstName: user.firstname,lastName:user.lastname ,address:user.address,phoneNumber:user.phoneNumber,birthDate:user.birthDate,email:user.email,hireDate:user.hireDate});
        } else {
          res.json({ message: "Incorrect password" });
        }
      } else {
        res.json({ message: "No record found" });
      }
    })
    .catch(err => {
      console.error("Error:", err);
      res.status(500).json({ message: "An error occurred. Please try again." });
    });
});






app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;

  try {
    // Check if the email exists in the database
    const user = await employee.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'No account found with this email' });
    }

    // Generate a secure random token
    const token = crypto.randomBytes(20).toString('hex');

    // Update user's reset token in the database
    user.resetToken = token;
    await user.save();

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'it22251428@my.sliit.lk', // Your Gmail email address
        pass: '200275902533', // Your Gmail email password or App password
      },
    });

    // Define the email message
    const mailOptions = {
      from: 'it22251428@my.sliit.lk',
      to: email,
      subject: 'Password Reset',
      text: `Click this link to reset your password: http://localhost:3000/reset-password/${token}`,
    };

    // Send the email and handle errors
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending reset email:', error);
        return res.status(500).json({ message: 'Failed to send reset email' });
      }
      return res.status(200).json({ message: 'Reset email sent successfully' });
    });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'An error occurred. Please try again.' });
  }
});



// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
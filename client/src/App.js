import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import CreateEmployee from './components/CreateEmployee';
import Dashboard from './pages/dashboard'; // Corrected import
import Timeoff from './pages/timeoff'; // Corrected import
import Help from './pages/help'; // Corrected import
import AllEmployees from './pages/Allemployees';
import AllRequests from './pages/Allrequests';
import Profile from './pages/profile';
import Attendance from './pages/Attendance';
import UpdateAttendance from './components/updateatttendance';
import SalaryAssignment from './pages/employeeSalary';
import AdminDashboard from './pages/adminDashboard';
import Schedule from './pages/Shedule';
import ReadSchedules from './components/scheduleList';
import ScheduleEdit from './components/ScheduleEdit';
import UpdateSalary from './components/updateSalary';
import ForgotPassword from './pages/ForgotPassword';
import UpdateProfile from './pages/updateProfile';
import Adminlogin from './pages/AdminLogin';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/CreateEmployee" element={<CreateEmployee />} />
          <Route path="/dashboard/" element={<Dashboard />} />
          <Route path="/timeoff" element={<Timeoff />} />
          <Route path="/help" element={<Help />} />
          <Route path="/allemployees" element={<AllEmployees/>}/>
          <Route path="/leaveRequets" element={<AllRequests/>}/>
           <Route path="/profile" element={<Profile/>}/>
           <Route path="/attendance" element={< Attendance/>}/>
           <Route path="/attendance/:id" element={< UpdateAttendance/>}/>
           <Route path="/salary" element={< SalaryAssignment/>}/>
           <Route path="/admindashboard" element={<AdminDashboard/>}/>
           <Route path="/schedule" element={<Schedule/>}/>
           <Route path="/schedulelist" element={<ReadSchedules/>}/>
           <Route path="/scheduleedit" element={<ScheduleEdit/>}/>
           <Route path="/profile/:id" element={<UpdateProfile/>}/>
           <Route path="/forgot-password" element={<ForgotPassword/>}/>
           <Route path="/salary/:id" element={<UpdateSalary/>} />
           <Route path="/adminlogin" element={<Adminlogin/>} />
           <Route path="/home" element={<Home/>}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;



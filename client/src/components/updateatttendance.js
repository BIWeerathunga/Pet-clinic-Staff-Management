/*import React, { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';

const UpdateAttendance = () => {
  const [id, setId] = useState('');
  const [date, setDate] = useState('');
  const [employeeName, setEmployeeName] = useState('');
  const [absent, setAbsent] = useState(false);
  const [present, setPresent] = useState(false);

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/attendances/${id}`, {
        date,
        employeeName,
        absent,
        present,
      });
      console.log(res.data);
      setId('');
      setDate('');
      setEmployeeName('');
      setAbsent(false);
      setPresent(false);
    } catch (err) {
      console.error(err);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/attendances/${id}`, {
        date,
        employeeName,
        absent,
        present,
      });
      console.log(res.data);
      setId('');
      setDate('');
      setEmployeeName('');
      setAbsent(false);
      setPresent(false);
    } catch (err) {
      console.error('Error submitting attendance:', err);
      if (err.response) {
        console.error('Response data:', err.response.data);
        console.error('Response status:', err.response.status);
      }
    }
  };
  

  return (
    <div>
            <Link to="/attendance">
      <i
  className="fa fa-arrow-left"
  style={{ color: 'black', fontSize: '50px' }}
></i>

          </Link>
      <h2>Update Attendance</h2>
      <div style={{ maxWidth: '85%', margin: '0 auto' }}>
    
      <form onSubmit={handleSubmit} style={{border: '2px solid #000', padding:' 20px'}}>
      
        <div style={{ marginBottom: '10px' }}>
          <label>Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            
            style={{ marginLeft: '4px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            
            style={{ marginLeft: '10px' }}
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ marginRight: '10px' }}>Absent:</label>
          <input
            type="checkbox"
            checked={absent}
            onChange={(e) => setAbsent(e.target.checked)}
          />
        </div>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ marginRight: '10px' }}>Present:</label>
          <input
            type="checkbox"
            checked={present}
            onChange={(e) => setPresent(e.target.checked)}
          />
        </div>
        <button type="submit" style={{ marginLeft: '10px',width:'20%' }}>Submit</button>
      </form>
    </div>
    </div>
  );
};

export default UpdateAttendance;*/

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const UpdateAttendance= () => {
  const [employeeName, setEmployeeName] = useState("");
  const [date, setDate] = useState("");
  const [absent, setabsent] = useState("");
  const [present, setpresent] = useState("");
  
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  
  useEffect(() => {
    axios
      .get(`http://localhost:3000/attendances/${id}`)
      .then((response) => {
        setEmployeeName(response.data.employeeName);
        setDate(response.data.date);
        setabsent(response.data.absent);
        setpresent(response.data.present);
      
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const handleEditAttendance = () => {
    const data = {
      employeeName,
      date,
      absent,
      present,
     
    };

    axios
      .put(`http://localhost:3000/salaries/${id}`, data)
      .then(() => {
        enqueueSnackbar(" Salary Edited Successfully", {
          variant: "success",
        });
        navigate("/salary");
      })
      .catch((error) => {
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl my-4" style={{ color: "black" }}>
        Edit Attendance Record
      </h2>
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Employee Name:</label>
          <input
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Date:</label>
          <input
            type="text"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Absent:</label>
          <input
            type="text"
            value={absent}
            onChange={(e) =>setabsent(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Present:</label>
          <input
            type="text"
            value={present}
            onChange={(e) =>setpresent(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
       
        <button
          className="p-2 bg-sky-300 m-8"
          onClick={handleEditAttendance}
          style={{ backgroundColor: "#ffd700", width: "50%", marginLeft: "300px" }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UpdateAttendance;
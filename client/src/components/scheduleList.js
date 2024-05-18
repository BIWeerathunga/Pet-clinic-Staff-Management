/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ScheduleList = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get('/api/schedule');
        setSchedules(response.data);
      } catch (error) {
        console.error('Error fetching schedules:', error);
      }
    };

    fetchSchedules();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/schedule/delete/${id}`);
      setSchedules(schedules.filter((schedule) => schedule._id !== id));
    } catch (error) {
      console.error('Error deleting schedule:', error);
    }
  };

  return (
    <div>
      <h1>Schedule List</h1>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule._id}>
            <Link to={`/schedule/${schedule._id}`}>{schedule.employeeName}</Link>
            <button onClick={() => handleDelete(schedule._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ScheduleList;*/
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/allemployees.css';
import AdminNavbar from '../components/StaffAdminNav';
import Footer from '../components/footer';

const ReadSchedules = () => {
  const [schedule, setSchedules] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [noResults, setNoResults] = useState(false);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const res = await axios.get('http://localhost:3000/schedule');
        setSchedules(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchSchedules();
  }, []);

  const fetchHandler = async () => {
    try {
      const res = await axios.get('http://localhost:3000/schedule');
      return res.data;
    } catch (err) {
      console.error(err);
      return [];
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/schedule/${id}`);
      setSchedules(schedule.filter((schedule) => schedule._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleSearch = async () => {
    try {
      const data = await fetchHandler();
      const filteredSchedules = data.filter((schedule) =>
        Object.values(schedule).some((field) =>
          field.toString().toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setSchedules(filteredSchedules );
      setNoResults(filteredSchedules .length === 0);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
          < AdminNavbar/>
      <h2>Available Doctors</h2>
      <p><input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        name="search"
        placeholder="Search Available Doctors"
        style={{width:'500px'}}/>
      <button onClick={handleSearch} style={{width:'10%',marginLeft:'10px'}}>Search</button></p>
      {noResults ? (
        <div>
          <p>No Users Found</p>
        </div>
      ) : (
        <table className="employees">
          <thead>
            <tr>
              <th>Doctor Name</th>
              <th>Shift Date</th>
              <th>Shift Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((schedule) => (
              <tr key={schedule._id}>
                <td>{schedule.employeeName}</td>
                <td>{schedule.shiftDate}</td>
                <td>{schedule.shiftTime}</td>
              
                <td>
                  <button className="delete" onClick={() => handleDelete(schedule._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Footer/>
    </div>
  );
};

export default ReadSchedules;

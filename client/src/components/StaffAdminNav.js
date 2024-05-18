import Peticon from "./icon";
import styles from '../styles/Navbar.css';


const AdminNavbar = () => {
  return (
    <div>
    <nav className="navbar">
    <div className="peticon">
         <Peticon/>
        </div>
     
      <div className="links">
      <a href="/admindashboard">Dashboard</a>
      <a href="/allemployees">Employees</a>
      <a href="/leaveRequets">Requests</a>
      <a href="/attendance">Attendance</a>
  
      <a href="/salary">Salary</a>
      
      <a href="/schedulelist">Schedules</a>

       
      </div>
      
    </nav>
   <hr className="top-boarder"/></div>
    
  );
}
 
export default AdminNavbar;
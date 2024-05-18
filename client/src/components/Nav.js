import Peticon from "./icon";
import styles from '../styles/Navbar.css';


const Nav = () => {
  return (
    <div>
    <nav className="navbar">
    <div className="peticon">
         <Peticon/>
        </div>
     
      <div className="links">
      <a href="/dashboard">Dashboard</a>
      <a href="/">Profile</a>
      <a href="/">Appointments</a>
      <a href="/timeoff">Timeoff</a>
  
      <a href="/schedule">Schedule</a>
      <a href="/help">help</a>
      

       
      </div>
      
    </nav>
   <hr className="top-boarder"/></div>
    
  );
}
 
export default Nav;
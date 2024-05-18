import React from 'react';

import ReadEmployee from '../components/ReadEmployee';
import AdminNavbar from '../components/StaffAdminNav';
import Footer from '../components/footer';

function AllEmployees(){
    return (
      <div> 
        < AdminNavbar/>
        <ReadEmployee/>
         <Footer/>
      </div>
      
    );
  }
  
  export default AllEmployees;


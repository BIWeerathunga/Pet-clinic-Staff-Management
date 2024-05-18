
/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import Footer from '../components/footer';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/', { email, password })
      .then((response) => {
        const result = response.data;
        if (result === 'Success') {
          navigate('/dashboard');
        } else {
          setError(result); // Set error message for incorrect credentials
        }
      })
      .catch((err) => {
        console.log(err);
        setError('An error occurred. Please try again.'); // Set error message for general errors
      });
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="login_container">
          <span className="text3">Sign in to Your</span>
          <br />
          <span className="text4">Account</span>
          <br />

          <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="username">User Name</label>
            <br />
            <input
              id="username"
              name="username"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br/>
            <label className="pasword" htmlFor="password">Password</label>
            <br/>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
           
           <p> {error && <p className="error-message">{error}</p>}  
            <br/> 
          <a class ="forget" href="forgot_password.html">Forgot Password?</a></p>
            <button className="button2" type="submit">
              Login
            </button>
          </form>

         
        </div>
        <div className="rectangle2">
          <span className="text5">Now Here?</span>
          <br />
          <span className="text6">Sign up and discover a great amount of new Opportunities</span>
          <Link to="/CreateEmployee">
            <button className="button6">Sign UP</button>
          </Link>
        </div>

      </div>
      <Footer/>
    </div>
  );
};

export default Login;*/
// CreateTodo.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    /*axios
      .post('http://localhost:3000/', { email, password })
      .then((response) => {
        const result = response.data;
        if (result === 'Success') {
          navigate('/dashboard');
        } else {
          setError(result); // Set error message for incorrect credentials
        }
      })
      .catch((err) => {
        console.log(err);
        setError('An error occurred. Please try again.'); // Set error message for general errors
      });
  };*/
  axios
  .post('http://localhost:3000/', { email, password })
  .then((response) => {
    const { message, firstName,lastName,address,phoneNumber,birthDate,email,hireDate, } = response.data;
    if (message === 'Success') {
      localStorage.setItem('firstName', firstName);
      localStorage.setItem('lastName', lastName);
      localStorage.setItem('address', address);
      localStorage.setItem('phoneNumber', phoneNumber);
      localStorage.setItem('birthDate', birthDate);
      localStorage.setItem('email', email);
      localStorage.setItem('hireDate', hireDate);
      navigate('/dashboard');
    } else {
      setError(message);
    }
  })
  .catch((err) => {
    console.log(err);
    setError('An error occurred. Please try again.');
  });
};

  return (
    <div>
      <Navbar />
      <div style={{ alignItems: 'flex-start', marginTop: '0px' }} className="container">
        <div className="login_container">
        <span className="text3" style={{ fontSize: '60px', fontWeight: 'bold', marginLeft: '10px', marginTop: '-190px', fontFamily: 'serif' }}>Sign in to Your</span>
<br />
<span className="text4" style={{ fontSize: '60px', fontWeight: 'bold', marginLeft: '10px', marginTop: '130px', fontFamily: 'serif' }}>Account</span>
<br />


          <form className="form-container" onSubmit={handleSubmit}>
            <label htmlFor="username" style={{ fontSize: '20px' }}>User Name</label>
            <br />
            <input
              id="username"
              name="username"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />
            <br/>
            <label className="pasword" htmlFor="password" style={{ fontSize: '20px' }}>Password</label>
            <br/>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p> {error && <p className="error-message">{error}</p>}  
            <br/> 
            <Link to ="/forgot-password">
            <a className="forget" href="forgot_password.html">Forgot Password?</a></Link></p>
            <button className="button2" type="submit" style={{ width: '150px' }}>Login</button>
          </form>
        </div>
        <div style={{ backgroundColor: '#ffd700', padding: '20px 40px', borderRadius: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', height: '500px', width: '680px', marginLeft: '630px', marginTop: '-500px' }} className="rectangle2">
          <span className="text5">Now Here?</span>
          <br />
          <span className="text6">Sign up and discover a great amount of new Opportunities</span>
          <Link to="/CreateEmployee">
            <button className="button6" style={{ width: '150px' }}>Sign UP</button>
          </Link>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Login;

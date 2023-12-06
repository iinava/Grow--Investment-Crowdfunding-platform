import React, { useEffect, useState } from 'react'
import '../navbar.css'
import icon from '../icon.avif'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export default function Usernav() {
  const navigate = useNavigate();
  const clearloc = (e) => {
    e.preventDefault(); // Prevent the default anchor tag behavior

    // Navigate to the login page before clearing localStorage
    navigate('/login');

    // Delay clearing localStorage and displaying the toast message
    setTimeout(() => {
      localStorage.clear();
      toast('Logged out succesfully!', {
        icon: '👋',
      });
    }, 1000); // Delay for 1 second (adjust the delay as needed)
  }

  const role = localStorage.getItem("role")
  const fname = localStorage.getItem("fname")
  const username = fname.replace(/"/g, '');
  const userRole = role
  console.log(userRole);
  const [isNavVisible, setNavVisible] = useState(false);
  const handleMenuClick = () => {
    setNavVisible(!isNavVisible);
  };
  useEffect(() => {
    if (isNavVisible) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = 'auto'; // Enable scrolling
    }

    // Clean up the effect when the component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isNavVisible]);



  return (
    <div> <Toaster /><header>
      <div className="ll newsmallic">Grow©️</div>
      <div className="smallspace">  <button
        aria-controls="primary"
        aria-expanded={isNavVisible}
        className="menu"
        onClick={handleMenuClick}
      >
        <i className={`fa-solid ${isNavVisible ? 'fa-xmark' : 'fa-bars'} fa-sm`}></i>
      </button></div>

      <nav data-visible={isNavVisible}>
        <ul className="primary">
          <li className="log lefti">
            <h2 className='icon righti'> Ġrow</h2>
            {/* <hr className='hresh' /> */}
            {userRole === '"startup"' && (
              <>
                <a href="" className='nava'><p>Home</p></a>
                <a href="/status" className='nava'><p>Status</p></a>
                <div class="paste-button">
                  <button class="butto">{username} &nbsp; ▼</button>
                  <div class="dropdown-content">
                  <a id="top" href="#">Edit</a>
                    <a id="middle" href="#" onClick={clearloc}>Logout</a>
                  </div>
                </div>
              </>
            )}

            {userRole === '"admin"' && (
              <>
                <a href="/adminhome"><p className='nava'>See investments</p></a>
                <a href="/allinvestor"><p className='nava'>see investors</p></a>
                <a href="/allstartupview"><p className='nava'>see startups</p></a>
                <div class="paste-button">
                  <button class="butto">{username} &nbsp; ▼</button>
                  <div class="dropdown-content">
                    <a id="middle" href="#" onClick={clearloc}>Logout</a>
                  </div>
                </div>
              </>
            )}

            {userRole === '"investor"' && (
              <>
                <a href="" className='nava'><p>Home</p></a>
                <a href="/dashboard" className='nava'><p>Dashboard</p></a>
                <div class="paste-button">
                  <button class="butto">{username} &nbsp; ▼</button>
                  <div class="dropdown-content">
                    <a id="top" href="#">Edit</a>
                    <a id="middle" href="#" onClick={clearloc}>Logout</a>
                  </div>
                </div>
              </>
            )}

            {userRole !== 'startup' && userRole !== 'admin' && userRole !== 'investor' && (
              <>

              </>
            )}


            <span className="rr3">

            </span>
          </li>
        </ul>
      </nav>
    </header></div>
  )
}

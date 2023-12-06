import React from 'react'
import '../components/navbar.css'
import { useState,useEffect } from 'react';
import icon from '../components/icon.avif'

export default function Gnavbar() {
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
    <div> <header>
      <div className="ll"><img src={icon} alt="" /></div>
    <button
      aria-controls="primary"
      aria-expanded={isNavVisible}
      className="menu"
      onClick={handleMenuClick}
    >
      <i className={`fa-solid ${isNavVisible ? 'fa-xmark' : 'fa-bars'} fa-sm`}></i>
    </button>
    <nav data-visible={isNavVisible}>
      <ul className="primary">
        <li className="log">
          <h2 className='icon'> Ġrow</h2>
          <hr className='hresh' />
          <p><a className='links' href="/investor" >Investor</a></p>
          <p><a className='links' href="/startup">Startup</a></p>
          <p className="rr"><a className='links' href="">About</a></p>
          <p className="rr2"><a className='links' href="">Stories</a></p>
          <span className="rr3">
            {/* <button className="button-57 here" role="button">
                
              <span className="text">GET STARTED</span>
              <span className="alt">Alternate text</span>
            </button> */}
            <button class="fill mhid"><a href="/login">Sign in</a></button>
          </span>
        </li>
      </ul>
    </nav>
  </header></div>
  )
}

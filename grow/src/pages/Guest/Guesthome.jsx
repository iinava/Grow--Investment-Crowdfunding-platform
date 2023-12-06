import React from 'react'
import '../Guest/Guest.css'
import gg from '../Guest/hb.webp'
import Scroll from '../../components/Scroll/Scroll'
import Footer from '../../components/Footer/Footer'
import Gnavbar from '../../components/Gnavbar'
import { useNavigate } from 'react-router-dom'
export default function Guesthome() {
  const navigate =useNavigate();
  return (
    <div>
      <div className="navigation">
        <Gnavbar/>
     
      </div>
    <div className='pageone'>
      <h3 id='exp'>We help investors connect to early startups</h3>
        <p>Register now to level up your portfolio</p>
        {/* <button class="button-57 now" role="button"><span class="text">GET STARTED</span><span class="alt">Alternate
            text</span></button> */}
            <button className='fill len'><a href="#page22">Get started</a></button>
            <img className='gg ' src={gg} alt="" />
    </div>
  <div className="scrollsection trance"><Scroll/></div>
    
    <div class="page2" id='page22'>
    <div class="left">

    </div>
    <div class="right">
        <h1>Launch a Funding for Startup</h1>
     <h2>Up your gameby investing in early projects </h2>
     <p> We provide a seamless space for investors seeking exciting opportunities to connect with early-stage ventures ready to make their mark. By fostering meaningful introductions, we streamline the investment journey, offering a comprehensive ecosystem that includes secure communication channels, due diligence resources, and a robust matching algorithm. Whether you're an investor looking for the next big thing or a startup seeking visionary backers, our platform is your gateway to transformative collaborations. Join us in shaping the future of entrepreneurship and investment."</p>
      <button class="button-57 pl " role="button"   onClick={() => navigate('/investor')} ><span class="text">Investor</span><span class="alt">Register now
            </span></button>  
              &nbsp; <button class="button-57 pr" role="button"   onClick={() => navigate('/startup')} ><span class="text">Startup</span><span class="alt">Register now
            </span></button>
    </div>
    
  </div>

<div className="footersection trance">
  <Footer/>
</div>
  
</div>
  )
}

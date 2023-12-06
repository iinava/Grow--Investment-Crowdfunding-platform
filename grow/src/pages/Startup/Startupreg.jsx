import React, { useState } from 'react'
import kk from '../Startup/login.webp'
import '../Startup/Startup.css'
import Gnavbar from '../../components/Gnavbar'
import axios from 'axios'
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'


export default function Startupreg() {
  const navigate = useNavigate();
  const [input, setinput] = useState({

  })
  const [prob, seterror] = useState({})
  const [issubmit, setsubmit] = useState(false)
  const validate = (values) => {
    var error = {}
    const ema = /\S+@\S+\.\S+/;
    const pho = /^\d{10}$/;
    const age = /^(1[89]|[2-9]\d+)$/;
    const pw = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!values.fname) {
      error.fname = 'name  cannot be null'
    }
    if (!values.lname) {
      error.lname = 'lname cannot be null'
    }
    if (!values.country) {
      error.country = 'country cannot be null'
    }
    if (!values.email) {
      error.email = 'Email cannot be null';
    } else if (!ema.test(values.email)) {
      error.email = 'Invalid email format';
    }


    if (!values.age) {
      error.age = 'age cannot be null';
    } else if (!age.test(values.age)) {
      error.age = 'Invalid age format (must be above 18)';
    }
    if (!values.image) {
      error.image = 'profile cannot be null';
    }
    if (!values.phone) {
      error.phone = 'Phone number cannot be null';
    } else if (!pho.test(values.phone)) {
      error.phone = 'Invalid phone number format';
    }
    if (!values.password) {
      error.password = 'Password cannot be null';
    } else if (!pw.test(values.password)) {
      error.password = 'Password must contain at least one capital letter and one number (minimum 6 characters)';
    }

    return error
  }

  console.log(input);
  const inputchange = (event) => {
    const name = event.target.name
    const value = event.target.value

    setinput({ ...input, [name]: value })
  }
  const [first, setfirst] = useState("")

  const register = (e) => {
    e.preventDefault();
    seterror(validate(input))
    setsubmit(true)
    if (Object.keys(prob).length === 0 && issubmit) {
    const formData = new FormData();

    for (const key in input) {
      formData.append(key, input[key]);
    }

    // if (input.image) {
    //   formData.append('image', input.image);
    // }

    console.log(formData);
   
      axios.post("http://127.0.0.1:8000/api/startupregisterApi", formData).then((res) => {
        console.log(res);

        navigate("/login")


      }).catch((err) => {
        console.log(err)
      
      })
     
    }

   
  }



  return (
    <div>
      <Toaster />
      <div className="navigation">
        <Gnavbar />

      </div>
      <div className='custom-page'>
        <h3 className='custom-heading' id='exp'> Empower your startup with us</h3>
        <p className='custom-paragraph '>Empowering Startups to Soar: Where Every Idea Finds a Home and Launches a Legacy</p>
        <button className='fill len' ><a href="#register">register</a></button>
        <img className='custom-image' src={kk} alt="" />
      </div>

      {/* ----------------------------------------------------------------------- */}
      <div>   {/* ----------form ------ */}
        <div className="formesh" id='regpart'>
          <div className="leform ">
            <h1>
              Sign up to</h1>
            <p>Our platform is your launchpad to success. We provide startups with a nurturing ecosystem that offers a range of vital resources and support. From connecting you with a network of potential investors to providing educational content and tools for business development, our platform is designed to help your startup thrive. You'll find a collaborative community of like-minded entrepreneurs and access to valuable insights, all aimed at supercharging your growth. Join us and unlock the potential of your innovative ideas, turning them into a reality that shapes the future.</p>
            <h1>What u are opting</h1>
            <li>Supercharge Growth: Tools and opportunities to accelerate your startup's growth and success.</li>
            <li>Investor Connections: Access to a network of potential investors eager to support innovative startups.</li>

          </div>
          <div className="riform trance" id="register">
            {/* <form > */}
            <h1>Sign up now</h1>
            <input type="text" className='smallin' placeholder=' First name' name='fname' value={input.fname} onChange={inputchange} onClick={() => { seterror({ ...prob, fname: '' }) }} />
            <div className='spann'> <span className='warning' style={{ color: prob.fname ? 'red' : '' }}> {prob.fname}</span></div>
            <input type="text" className='smallin' placeholder='Last name' name='lname' value={input.lname} onChange={inputchange} onClick={() => { seterror({ ...prob, lname: '' }) }} />

            <div className='spann'> <span className='warning' style={{ color: prob.lname ? 'red' : '' }}> {prob.lname}</span></div>
            <input id="file" type="file" name='image' className='imageinput' onChange={(e) => { setinput({ ...input, image: e.target.files[0] }); setfirst(e.target.files[0].name) }} onClick={() => { seterror({ ...prob, image: '' }) }} />
            <div className='spann'> <span className='warning' style={{ color: prob.image ? 'red' : '' }}> {prob.image}</span></div>
            <input className='longin' type="text" placeholder='Email' name='email' value={input.email} onChange={inputchange} onClick={() => { seterror({ ...prob, email: '' }) }} />
            <div className='spann'> <span className='warning' style={{ color: prob.email ? 'red' : '' }}> {prob.email}</span></div>
            <input className='longin' type="text" placeholder='phone number' name='phone' value={input.phone} onChange={inputchange} onClick={() => { seterror({ ...prob, phone: '' }) }} />
            <div className='spann'> <span className='warning' style={{ color: prob.phone ? 'red' : '' }}> {prob.phone}</span></div>
            <input className='longin' type="text" placeholder='Age' name='age' value={input.age} onChange={inputchange} onClick={() => { seterror({ ...prob, age: '' }) }} />
            <div className='spann'>  <span className='warning' style={{ color: prob.age ? 'red' : '' }}> {prob.age}</span></div>
            <input className='longin' type="text" placeholder='Country/Region' name='country' value={input.country} onChange={inputchange} onClick={() => { seterror({ ...prob, country: '' }) }} />
            <div className='spann'> <span className='warning' style={{ color: prob.country ? 'red' : '' }}> {prob.country}</span></div>
            <input className='longin' type="password" placeholder='enter password' name='password' value={input.password} onChange={inputchange} onClick={() => { seterror({ ...prob, password: '' }) }} />
            <div className='spann'><span className='warning' style={{ color: prob.password ? 'red' : '' }}> {prob.password}</span></div>
            <br /> <br />
            {/* <p>To sign up for a trial account, you must accept the Terms of service and privacy policy</p> */}
            <div class="checkbox-wrapper-52">
              <label for="todo-52" class="item">
                <input type="checkbox" id="todo-52" name='image' class="hidden" />
                <label for="todo-52" class="cbx">
                  <svg width="14px" height="12px" viewBox="0 0 14 12">
                    <polyline points="1 7.6 5 11 13 1"></polyline>
                  </svg>
                </label>
                <label for="todo-52" class="cbx-lbl">I have read and accept the Terms of Service and Privacy Policy </label>
              </label>
            </div>
            <button className='fill black' onClick={register}>Signupp..</button>


            {/* </form> */}

          </div>
        </div></div>

    </div>
  )
}

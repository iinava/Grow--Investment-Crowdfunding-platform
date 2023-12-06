import React, { useState } from 'react'
import ii from '../Investor/investor.webp'
import '../Startup/Startup.css'
import Gnavbar from '../../components/Gnavbar'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast'




export default function Investorreg() {



  const [input, setinput] = useState({
    fname: '',
    lname: '',
    email: '',
    phone: '',
    country: '',
    age: '',
    password: '',

  })
  const [prob, seterror] = useState({})
  const [issubmit, setsubmit] = useState(false)

  const validate = (values) => {
    var error = {}
    const ema = /\S+@\S+\.\S+/;
    const pho = /^\d{10}$/;
    const pi = /^\d{6}$/;
    const pw = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!values.fname) {
      error.fname = 'name cannot be null'
    }
    if (!values.lname) {
      error.lname = 'user name cannot be null'
    }
    if (!values.email) {
      error.email = 'Email cannot be null';
    } else if (!ema.test(values.email)) {
      error.email = 'Invalid email format';
    }

    if (!values.phone) {
      error.phone = 'shop cannot be null'
    }
    if (!values.country) {
      error.country = 'adress cannot be null'
    }
    if (!values.age) {
      error.age = 'PIN cannot be null';
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



  const navigate = useNavigate();
  const registration = (e) => {
    e.preventDefault();
    seterror(validate(input))
    setsubmit(true)

    if (Object.keys(prob).length === 0 && issubmit) {
      axios.post('http://127.0.0.1:8000/api/investorregisterApi', input).then((res) => {
        toast.success("register sucess")
        console.log(res);
        navigate("/login")
      }).catch((err) => {
        console.log(err)
      })
      console.log(input);
      // console.log("not happenigdd");
    }





  }



  return (
    <div>
      <Toaster />
      <div className="navigation">
        <Gnavbar />
      </div>
      <div className='custom-page'>
        <h3 className='custom-heading' id='exp'>    Invest in Tomorrow's Success Stories
        </h3>
        <p className='custom-paragraph '>    Supercharge your investment portfolio by finding and backing promising early startups. Your journey to financial success begins here.
        </p>
        <button className='fill len' ><a href="#register">Resgister</a></button>
        <img className='custom-image imom' src={ii} alt="" />
      </div>

      {/* ----------------------------------------------------------------------- */}
      <div>   {/* ----------form ------ */}
        <div className="formesh" id='regpart'>
          <div className="leform ">
            <h1>
              Sign up to grow</h1>
            <p>supercharge your investment portfolio by discovering and backing promising early-stage startups. We offer a dynamic platform that connects you with innovative entrepreneurs and their groundbreaking ventures, providing you with the opportunity to be part of the next big success story. With valuable resources, due diligence tools, and a network of like-minded investors, we make it easier for you to find and support startups that align with your investment goals</p>
            <h1>What u are opting</h1>
            <li>Investment Opportunities: Find and back innovative ventures that align with your investment criteria.</li>
            <li>Startup Discovery: Access to a curated selection of early-stage startups with high growth potential.</li>

          </div>
          <div className="riform trance" id="register">
            <form action="#" onSubmit={(e) => { e.preventDefault(); registration(e); }}>
              <h1>Sign up now</h1>
              <input type="text" className='smallin' placeholder=' First name' name='fname' onClick={() => { seterror({ ...prob, fname: '' }) }} value={input.fname} onChange={inputchange} />
              <div className='spann'><span className='warning' style={{ color: prob.fname ? 'red' : '' }}> {prob.fname}</span> </div>
              <input type="text" className='smallin' placeholder='Last name' name='lname' onClick={() => { seterror({ ...prob, lname: '' }) }} value={input.lname} onChange={inputchange} />
              <div className='spann'><span className='warning' style={{ color: prob.lname ? 'red' : '' }}> {prob.lname}</span> </div>
              <input className='longin' type="text" placeholder='Email' name='email' onChange={inputchange} onClick={() => { seterror({ ...prob, email: '' }) }} value={input.email} />
              <div className='spann'><span className='warning' style={{ color: prob.email ? 'red' : '' }}> {prob.email}</span> </div>
              <input className='longin' type="text" placeholder='Mobile number' name='phone' onChange={inputchange} onClick={() => { seterror({ ...prob, phone: '' }) }} value={input.phone} />
              <div className='spann'><span className='warning' style={{ color: prob.phone ? 'red' : '' }}> {prob.phone}</span> </div>
              <input className='longin' type="text" placeholder='Age' name='age' onChange={inputchange} onClick={() => { seterror({ ...prob, age: '' }) }} value={input.age} />
              <div className='spann'><span className='warning' style={{ color: prob.age ? 'red' : '' }}> {prob.age}</span> </div>
              <input className='longin' type="text" placeholder='Country/Region' name='country' onChange={inputchange} onClick={() => { seterror({ ...prob, country: '' }) }} value={input.country} />
              <div className='spann'><span className='warning' style={{ color: prob.country ? 'red' : '' }}> {prob.country}</span> </div>
              <input className='longin' type="password" placeholder='password' name='password' onChange={inputchange} onClick={() => { seterror({ ...prob, password: '' }) }} value={input.password} />
              <div className='spann'><span className='warning' style={{ color: prob.password ? 'red' : '' }}> {prob.password}</span> </div>

              <div class="checkbox-wrapper-52">
                <label for="todo-52" class="item">
                  <input type="checkbox" id="todo-52" class="hidden" />
                  <label for="todo-52" class="cbx">
                    <svg width="14px" height="12px" viewBox="0 0 14 12">
                      <polyline points="1 7.6 5 11 13 1"></polyline>
                    </svg>
                  </label>
                  <label for="todo-52" class="cbx-lbl">I have read and accept the Terms of Service and Privacy Policy </label>
                </label>
              </div>
              <input type="submit" className='fillblack' value="register" />
              <p>Aldready have an account? <a href="/login" className='loginlink'>Login now</a></p>


            </form>

          </div>
        </div></div>

    </div>
  )
}

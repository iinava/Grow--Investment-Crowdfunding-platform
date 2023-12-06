import React, { useEffect, useState } from 'react'
import '../Investor/home.css'
import { ButTab } from '../../components/Investorcomp'
import Usernav from '../../components/Usernavbar/Usernav';
import Footer from '../../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';



export default function Investconfirm() {
  const { projectname, id } = useParams();
  console.log(id);
  const [numberOfYears, setNumberOfYears] = useState(0);
  const [futureDate, setFutureDate] = useState(null);
  const [state, setstate] = useState({})
  const investorid=localStorage.getItem("userid")
  const [first, setfirst] = useState({})
  const handleInvestData = (investData) => {
    // Handle the received data in the parent component
   setfirst(investData)
   console.log(first,"njan first");
    // You can perform further actions with the data here
  };
  const updateNumberOfYears = (years) => {
    setNumberOfYears(years);
    const currentDate = new Date();
    const futureDate = new Date(currentDate.getFullYear() + years, currentDate.getMonth(), currentDate.getDate());
    setFutureDate(futureDate.toDateString());
  };
  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/singleprojectview/${id}`).then((response) => {
        console.log("here is project data singlw");
        setstate(response.data.data)
        console.log(state);
  
    }).catch((err) => {
        console.log(err);
    })
}, [])
const invdata = {
  startupid: state.startupid,
  investorid: investorid,
  projectid: id,
 
  pricepershare:state.pricepershare,
};
// console.log("pass akanda data",invdata);
  return (
    <div><Toaster/>

      <div className="section-navbar">     <Usernav /></div>
      <div className='gap'>
      </div>
      <div className="projectshowcase">
        <p> ⟫ Home ⟩ projects ⟩ invest ⟩ {projectname} </p>
      </div>
      <div className="homebuy">
        <div><ButTab updateNumberOfYears={updateNumberOfYears}  invdata={invdata} onInvestData={handleInvestData}/></div>
        <div>
          <div className="square">
            <h1>Invest Details</h1>
            <div className="ppinfo">
              <h2>Number of shares</h2>

              <p> {first.ishare}</p>
            </div>
            <div className="ppinfo">
              <h2>price per share</h2>

              <p> {state.pricepershare}</p>
            </div>
            <div className="ppinfo">
              <h2>Total amount invested</h2>
              <p>{parseInt(first.ishare) * parseFloat(state.pricepershare)}</p>

            </div>
            <div className="ppinfo las">
              {/* <h2>Total amount invested</h2> */}

              <p >Your money will be at stake till <span className='yeat'>{futureDate}</span>  </p>

            </div>
          </div>
        </div>
      </div>
      <br /><br /><b></b>
      {/* <Footer /> */}
    </div>
  )
}

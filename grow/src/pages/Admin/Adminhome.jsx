import React, { useEffect, useState } from 'react'
import '../Investor/Investor.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast'
import Usernav from '../../components/Usernavbar/Usernav'



export default function Adminhome() {
    const navigate= useNavigate()
    const id =localStorage.getItem("userid")
    console.log(id);
    const [first, setfirst] = useState({})
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/allinvestmentview").then((response) => {
            console.log("here is project data singlw");
            setfirst(response.data.data)
            console.log(first);
      
        }).catch((err) => {
            console.log(err);
        })
    }, [])
  return (
    <div>
<Toaster/>
      <div className="section-navbar">     <Usernav /></div>
      {/* <div className='gap'>
        <br /><br /><br /> <br /></div> */}
       <div class="project-name-containerw">
  <center><h2 className='dhead'>ALL INVESTMENTS </h2></center>
  <ul class="project-name-responsive-table">
    <li class="project-name-table-header">
      <div class="project-name-col project-name-col-1">number</div>
      <div class="project-name-col project-name-col-2">PROJECT NAME</div>
      <div class="project-name-col project-name-col-3">Founder</div>
      <div class="project-name-col project-name-col-4">investorname</div>
      <div class="project-name-col project-name-col-4">share</div>
      <div class="project-name-col project-name-col-4">PRICE/SHARE</div>
      <div class="project-name-col project-name-col-4">total amount</div>
      <div class="project-name-col project-name-col-4">Period</div>
      <div class="project-name-col project-name-col-4">invest_date</div>
    </li>
    {first[0] ?
          <>


            {first?.map((data, key) => (
    <li class="project-name-table-row">
      <div class="project-name-col project-name-col-1" data-label="number">{key+1}</div>
      <div class="project-name-col project-name-col-2 projview" data-label="PROJECT NAME" >{data.projectname} →</div>
      <div class="project-name-col project-name-col-3" data-label="Founder">{data.startupname}</div>
      <div class="project-name-col project-name-col-3" data-label="Founder">{data.investorname}</div>
      <div class="project-name-col project-name-col-4" data-label="shares invested">{data.share}</div>
      <div class="project-name-col project-name-col-4" data-label="PRICE/SHARE">{data.pricepershare} USD</div>
      <div class="project-name-col project-name-col-4" data-label="total amount">{data.investamount} USD</div>
      <div class="project-name-col project-name-col-4" data-label="Period">{data.period} YEAR</div>
      <div class="project-name-col project-name-col-4" data-label="invested date">{data.invest_date}</div>
    </li>
     ))}
     </>
     : <td>loading...................</td>
   }
   
  </ul>
</div>

    </div>
  )
}

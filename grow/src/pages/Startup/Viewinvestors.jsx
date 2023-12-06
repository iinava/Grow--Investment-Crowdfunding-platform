import React, { useEffect, useState } from 'react'
import '../Investor/Investor.css'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'



export default function Viewinvestors() {
    const navigate= useNavigate()
    const {projectname,id} =useParams()
    console.log(id);
    const [second, setsecond] = useState({})
    
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/startupviewinvesters/${id}`).then((response) => {
          console.log("here is project data singlw");
          console.log(response);
          setsecond(response.data.data)
          // console.log(state);
    
        }).catch((err) => {
          console.log(err);
        })
      }, [])
      function calculateReturnDate(investDate, period) {
        const investDateObj = new Date(investDate);
        const returnDateObj = new Date(investDateObj.getTime() + period * 365 * 24 * 60 * 60 * 1000); // Assuming 1 year is 365 days
      
        // Format the return date as a string (you can customize the format)
        const returnDateString = new Date(returnDateObj).toISOString().split('T')[0];
        return returnDateString;
      }
  return (
    <div> <div>
       <div class="project-name-containerw">
  <center><h2 className='dhead'>{projectname} <span className='smalltext-info'>-funding information</span> </h2></center>
  <ul class="project-name-responsive-table">
    <li class="project-name-table-header">
      <div class="project-name-col project-name-col-1">number</div>
      <div class="project-name-col project-name-col-2">Investor name</div>
      <div class="project-name-col project-name-col-4">number of shares bought</div>
      <div class="project-name-col project-name-col-4">PRICE/SHARE</div>
      <div class="project-name-col project-name-col-4"> Total amount</div>
      <div class="project-name-col project-name-col-4"> investment period</div>
      <div class="project-name-col project-name-col-4"> investdate</div>
      <div class="project-name-col project-name-col-4"> return date</div>

    </li>
    {second[0] ?
          <>


            {second?.map((data, key) => (
    <li class="project-name-table-row">
      <div class="project-name-col project-name-col-1" data-label="number">{key+1}</div>
      <div class="project-name-col project-name-col-2 projview" data-label="Investor name" >{data.investorname} </div>
      <div class="project-name-col project-name-col-4" data-label="shares bought">{data.share}</div>
      <div class="project-name-col project-name-col-4" data-label="PRICE/SHARE">{data.pricepershare} USD</div>
      <div class="project-name-col project-name-col-4" data-label="Total amount"> {data.investamount} USD</div>
      <div class="project-name-col project-name-col-4" data-label="investment period"> {data.period} YEARS</div>
      <div class="project-name-col project-name-col-4" data-label="invest date"> {data.invest_date}</div>
      <div class="project-name-col project-name-col-4" data-label="return date">{calculateReturnDate(data.invest_date, data.period)} </div>
    </li>
     ))}
     </>
     :  <center><td className='inf'>Funding havent started / try refreshing</td></center>
   }
   
  </ul>
</div>

    </div></div>
  )
}

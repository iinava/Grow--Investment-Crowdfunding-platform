import React, { useEffect, useState } from 'react'
import '../Investor/Investor.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export default function Status() {
    const navigate= useNavigate()
    const id =localStorage.getItem("userid")
    console.log(id);
    const [second, setsecond] = useState({})
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/startupviewproject/${id}`).then((response) => {
          console.log("here is project data singlw");
          console.log(response);
          setsecond(response.data.data)
          // console.log(state);
    
        }).catch((err) => {
          console.log(err);
        })
      }, [])
  return (
    <div> <div>
       <div class="project-name-containerw">
  <center><h2 className='dhead'>All Fundings status </h2></center>
  <ul class="project-name-responsive-table">
    <li class="project-name-table-header">
      <div class="project-name-col project-name-col-1">number</div>
      <div class="project-name-col project-name-col-2">PROJECT NAME</div>
      <div class="project-name-col project-name-col-4">shares left </div>
      <div class="project-name-col project-name-col-4">PRICE/SHARE</div>
      <div class="project-name-col project-name-col-4"> funding Status</div>
      <div class="project-name-col project-name-col-4"> status</div>

    </li>
    {second[0] ?
          <>


            {second?.map((data, key) => (
    <li class="project-name-table-row">
      <div class="project-name-col project-name-col-1" data-label="number">{key+1}</div>
      <div class="project-name-col project-name-col-2 projview" data-label="PROJECT NAME" onClick={() => { navigate(`/viewstatusdetail/${data.projectname}/${data.id}`) }}>{data.projectname} →</div>
      <div class="project-name-col project-name-col-4" data-label="shares left">{data.share}</div>
      <div class="project-name-col project-name-col-4" data-label="PRICE/SHARE">{data.pricepershare} USD</div>
      <div class="project-name-col project-name-col-4" data-label="funding status"> {data.initialamount} / {data.amount} USD</div>
      <div class="project-name-col project-name-col-4" data-label="funding status"> {data.projectstatus === "1" ? 'Completed' : 'Ongoing'}</div>
    </li>
     ))}
     </>
     : <td>loading...................</td>
   }
   
  </ul>
</div>

    </div></div>
  )
}

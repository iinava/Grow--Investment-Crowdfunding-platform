import React, { useEffect, useState } from 'react'
import Usernav from '../../components/Usernavbar/Usernav'
import '../Startup/Shome.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'


export default function StartupHome() {
    const id=localStorage.getItem("userid")
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
    
    
    const navigate=useNavigate();
    const delesh = (pid) => {
        axios.delete(`http://127.0.0.1:8000/api/deleteproject/${pid}`).then((response)=>{
          console.log(response);
          console.log("works");
        })}
        
    return (
        <div>
            <Toaster/>
            <div className="section-navbar">     <Usernav /></div>
            {/* <div className='gap'>
                <br /><br /></div> */}

            <div className="welcomsection">
                <h2>Launching Dreams, Building Legacies</h2>
                <p>At Startup Home, we guide you through the funding journey, connecting entrepreneurs with seasoned investors. Your success story begins with expert support, turning ideas into reality through strategic funding partnerships.</p>
                <button class="kunbut" type="button" onClick={() => navigate('/addproject')}>
                    <span class="button__text">Add Item</span>
                    <span class="button__icon"><svg class="svg" fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="12" x2="12" y1="5" y2="19"></line><line x1="5" x2="19" y1="12" y2="12"></line></svg></span>
                </button>
            </div>
            <br /><br />

            <div className="cardcollection">
            {second[0] ?
            <>


              {second?.map((data, key) => (
                <div className="singlecard">
                    <img src={`/funding/${data.backimage}`} alt="" className="imagesec" />
                    <div className="headingsec">{data.projectname}</div>
                    <div className="pricesec">sector :{data.sector} </div>
                    <div className="pricesec">{data.initialamount}/{data.amount} Dollar</div>
                    <div className="parasec">{data.briefdesc}</div>
                    <div className="viewsec">
                        <button class="edit-button" onClick={()=>{navigate(`/editproject/${data.id}`)}}> 
                            <svg class="edit-svgIcon" viewBox="0 0 512 512">
                                <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                            </svg>
                        </button>
                        <button class="delete-button" onClick={(e) => { e.preventDefault(); delesh(data.id); }}>
                            <svg class="delete-svgIcon" viewBox="0 0 448 512">
                                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path>
                            </svg>
                        </button>

                    </div>



                </div>
                    ))}
                    </>
                    : <td>loading...................</td>
                    }
            </div>
        </div>
    )
}

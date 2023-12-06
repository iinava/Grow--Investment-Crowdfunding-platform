import React, { useEffect, useState } from 'react'
import '../Investor/home.css'
import Usernav from '../../components/Usernavbar/Usernav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

export default function InvestorHome() {
  const navigate = useNavigate();
  const [first, setfirst] = useState({})
  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/allprojectview").then((response) => {
      console.log("here comes data");
      console.log(response);
      setfirst(response.data.data)

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
        <div className="welcomsection adi">
                <h2>Launching Dreams <span className='coma'>$$$</span> Building Legacies</h2>
             
            </div>
      <div className="homeinformation">
        <h1 className='heading-homeinfo'>Funded Projects</h1>
        <div className='infohomeinfo'>
          <h1>Raised capital
          </h1>
          <h2>$16,633,788</h2>
        </div>
        <div className='infohomeinfo'>
          <h1>Total participants
          </h1>
          <h2>82,701</h2>
        </div>
        <div className='infohomeinfo'>
          <h1>Funded projects
          </h1>
          <h2>42</h2>
        </div>

      </div>
      <div className="cardcollection">
        {first[0] ?
          <>


            {first?.map((data, key) => (
              <div className="singlecard">
                <img src={`/funding/${data.backimage}`} alt="" className="imagesec" />
                <div className="headingsec">{data.projectname} </div>
                <div className="pricesec"> sector : {data.sector} </div>
              
                <div className="pricesec">{data.initialamount}/{data.amount} Dollar </div>
                <div className="parasec"> {data.briefdesc}</div>
               
                <div className="viewsec"><button class="buff" onClick={() => { navigate(`/project/${data.id}`) }}>
                  <svg class="svgIcon" viewBox="0 0 512 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"></path></svg>
                  View
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

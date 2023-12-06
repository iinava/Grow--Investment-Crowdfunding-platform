import React, { useEffect, useState } from 'react'
import '../Investor/Investor.css'
import { Bar, Social, Tab } from '../../components/Investorcomp'
import InvestorHome from './InvestorHome'
import { Toaster } from 'react-hot-toast'
import Usernav from '../../components/Usernavbar/Usernav'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


export default function Singleprojectview() {
    const navigate=useNavigate();
    const { id } = useParams();
    const projectid = id;
    const [state, setstate] = useState({})
    const [prof, setprof] = useState({})
    const totalshares = state.amount / state.share;
    console.log(totalshares, "hi");
    console.log(projectid);
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/singleprojectview/${projectid}`).then((response) => {
            console.log("here is project data singlw");
            setstate(response.data.data)
            axios.get(`http://127.0.0.1:8000/api/singlestartupview/${response.data.data.startupid}`).then((response) => {
                console.log("startuppesh");
                console.log(response, "startupdetails");
                setprof(response.data.data)

            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    console.log(state);
    return (

        <div><Toaster />
            <div className="section-navbar">     <Usernav /></div>
            <div className='gap'>
            </div>
            <div className='hi'>
                <div className="bannersection">

                    <img src={`/funding/${state.backimage}`} alt="" className="bigbanner" />
                    <img src={`/funding/${prof.profile}`} alt="" className="profpic" />
                </div>
                <div className="extra">
                    <p className='name'>{prof.fname} {prof.lname}</p>
                    {/* <div className='socials'> <Social /></div> */}
                    <div>
                        <Bar projectState={state} /></div>
                </div>

                <div className="information">
                    <h2>{state.projectname}
                    </h2>
                    <p  >Founder : {prof.fname} {prof.lname}</p>
                    <p>{state.briefdesc}</p>



                    <h1>Business overview</h1>

                </div>
                <div className="infodiv">
                    <div className="leftin">
                        <Tab projectState={state} />
                    </div>
                    <div className="rightin">
                        <div className="priceboxx">
                            <div className="ppinfo">
                                <h1>seeking</h1>

                                <p>{state.initialamount}/{state.amount} USD</p>
                            </div>
                            {/* <div className="ppinfo">
                                <h1>current seeking </h1>

                                <p>{state.amount} USD</p>
                            </div> */}
                            <div className="ppinfo">
                                <h1>number of shares left</h1>

                                <p>{state.share}  shares</p>
                            </div>
                            <div className="ppinfo">
                                <h1>price per share</h1>

                                <p>{state.pricepershare}   </p>

                            </div>
                            {/* <div className="ppinfo">
                                <h1>Max purchase</h1>

                                <p>10</p>
                            </div> */}
                            <button className="buttesh" onClick={() => { navigate(`/invest/${state.projectname}/${state.id}`) }}>
                                <span>Invest now</span>
                                <svg width="34" height="34" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="37" cy="37" r="35.5" stroke="black" stroke-width="3"></circle>
                                    <path d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z" fill="black"></path>
                                </svg>
                            </button>

                        </div>
                    </div>

                </div>

                {/* _______________________________________________ */}

            </div></div>

    )
}

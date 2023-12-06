import React, { useState } from 'react'
import '../components/investorcomp.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
const Tab = ({ projectState }) => {
  const [activeTab, setActiveTab] = useState('skills');
  console.log(projectState, "oh vannu njan");
  const tabLinks = [
    { id: 'skills', text: 'Information' },
    { id: 'experience', text: 'About' },
    { id: 'education', text: 'Foundation' },
  ];

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div>
      <div>
        <div className="about-col-2">
          <div className="tab-titles hhoi">
            {tabLinks.map((tab) => (
              <p
                key={tab.id}
                className={`tab-links  ${activeTab === tab.id ? 'active-link' : ''} hoi`}
                onClick={() => openTab(tab.id)}
              >
                {tab.text}
              </p>
            ))}
          </div>
          <div className={`tab-contents ${activeTab === 'skills' ? 'active-tab' : ''}`} id="skills">
            <table className='tabtable'>
              <tr>
                <th></th>
                <th> </th>
              </tr>
              <tr>
                <td>Location</td>
                <td className='righttabledata'>{projectState.location}</td>

              </tr>
              <tr>
                <td>Website</td>
                <td className='righttabledata emm'>{projectState.website}</td>
              </tr>
              <tr>
                <td>Sector</td>
                <td className='righttabledata'> <div className=""> {projectState.sector}</div></td>
              </tr>
              <tr>
                <td>Liscence number</td>
                <td className='righttabledata'>{projectState.liscense}</td>
              </tr>
              {/* <tr>
                <td>Incorporation date</td>
                <td className='righttabledata'>{projectState.location}</td>
              </tr> */}
            </table>





          </div>
          <div className={`tab-contents ${activeTab === 'experience' ? 'active-tab' : ''}`} id="experience">
            <p>{projectState.about}</p>
          </div>
          <div className={`tab-contents ${activeTab === 'education' ? 'active-tab' : ''}`} id="education">
            <p>
              {projectState.foundation}

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};


const Bar = ({ projectState }) => {
  const percentage = (projectState.initialamount / projectState.amount) * 100
  console.log(percentage, "njn ivide und");
  return (
    <div>
      <div className="custom-card">
        <div className="custom-title">
          <span>
            <svg width="20" fill="currentColor" height="20" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
              <path d="M1362 1185q0 153-99.5 263.5t-258.5 136.5v175q0 14-9 23t-23 9h-135q-13 0-22.5-9.5t-9.5-22.5v-175q-66-9-127.5-31t-101.5-44.5-74-48-46.5-37.5-17.5-18q-17-21-2-41l103-135q7-10 23-12 15-2 24 9l2 2q113 99 243 125 37 8 74 8 81 0 142.5-43t61.5-122q0-28-15-53t-33.5-42-58.5-37.5-66-32-80-32.5q-39-16-61.5-25t-61.5-26.5-62.5-31-56.5-35.5-53.5-42.5-43.5-49-35.5-58-21-66.5-8.5-78q0-138 98-242t255-134v-180q0-13 9.5-22.5t22.5-9.5h135q14 0 23 9t9 23v176q57 6 110.5 23t87 33.5 63.5 37.5 39 29 15 14q17 18 5 38l-81 146q-8 15-23 16-14 3-27-7-3-3-14.5-12t-39-26.5-58.5-32-74.5-26-85.5-11.5q-95 0-155 43t-60 111q0 26 8.5 48t29.5 41.5 39.5 33 56 31 60.5 27 70 27.5q53 20 81 31.5t76 35 75.5 42.5 62 50 53 63.5 31.5 76.5 13 94z"></path>
            </svg>
          </span>
          <p className="custom-title-text">
            {projectState.initialamount} / {projectState.amount} 💲
          </p>
          <p className="custom-percent">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" fill="currentColor" height="20" width="20">
              <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
            </svg>{percentage}%
          </p>
        </div>
        <div className="custom-data">
          <p>
            {projectState.amount}  USD
          </p>
          <div className="custom-range">
            <div className="custom-fill" style={{ width: `${percentage}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Round = () => {
  return (
    <div>
      <div> <div className="roundesh">
        <div className="first">
          <h1>ee3ee</h1>
        </div>
        <div className="first">
          <h1>ee3ee</h1>
        </div>
        {/* <div className="ic"></div> */}

      </div></div>
    </div>
  );
};
// ____________

const Social = () => {
  return (
    <div><div class="card">
      <a href="#" class="socialContainer containerOne">
        <svg class="socialSvg instagramSvg" viewBox="0 0 16 16"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
      </a>

      <a href="#" class="socialContainer containerTwo">
        <svg class="socialSvg twitterSvg" viewBox="0 0 16 16"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>

      <a href="#" class="socialContainer containerThree">
        <svg class="socialSvg linkdinSvg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
      </a>


    </div>

    </div>
  );
};
const ButTab = ({ updateNumberOfYears, invdata, onInvestData }) => {
  const [activeTab, setActiveTab] = useState('about');
  const [enteredYears, setEnteredYears] = useState('');

  const tabLinks = [
    { id: 'about', text: 'Invest now' },
    { id: 'foundation', text: 'Terms and conditions' },
  ];

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };
  const handleYearChange = (e) => {
    const years = parseInt(e.target.value, 10);
    setEnteredYears(years);
    updateNumberOfYears(years);
  };
  const [info, setinfo] = useState({
    ishare: '',
    period: '',
  })
  onInvestData(info);
  // console.log(info,"year and share details",invdata,"other details");

  const inputChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setinfo({ ...info, [name]: value })
  }
  const navigate = useNavigate()
  const investingapicall = (e) => {

    e.preventDefault();
    const apidata = {
      startupid: invdata.startupid,
      investorid: invdata.investorid,
      projectid: invdata.projectid,
      pricepershare: invdata.pricepershare,
      ishare: info.ishare,
      period: info.period,
    };

    console.log(apidata, "ithan ayakan pokuunnath");
    axios.post("http://127.0.0.1:8000/api/investingapi", apidata).then((res) => {
      console.log("investing is succesful");
      toast.success("investing has been successfull")
      navigate("/investorhome")
    }).catch((err) => {
      console.log(err.response.data.message);
      const errorMessage = err.response.data.message;
      toast.dismiss(errorMessage);


      setTimeout(() => {

        toast(errorMessage,
          {
            icon: '❌',
            id: "bkstat-toast" ,
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          }
        );
      }, 100);
    });

  }


  return (
    <div>
      <div className="about-col-2">
        <div className="tab-titles hhoi">
          {tabLinks.map((tab) => (
            <p
              key={tab.id}
              className={`tab-links ${activeTab === tab.id ? 'active-link' : ''} hoi`}
              onClick={() => openTab(tab.id)}
            >
              {tab.text}
            </p>
          ))}
        </div>
        <div className={`tab-contents ${activeTab === 'about' ? 'active-tab' : ''}`} id="about">
          <div className="leftcontentoftav">
            <p className='info-warning'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, ea?</p>
            <input className='stabinput' placeholder='number of shares you want to buy' type="number" name='ishare' onChange={inputChange} />
            <input className='stabinput' placeholder='years' type="number" name='period' onChange={(e) => { handleYearChange(e); inputChange(e); }} />
            <button className='inv-tab' onClick={investingapicall}>Invest now</button>
            <p>minimum investment requirement is atleast 10+ shares for 1 year</p>
          </div>
        </div>
        <div className={`tab-contents ${activeTab === 'foundation' ? 'active-tab' : ''}`} id="foundation">
          <div className="right-contenttab">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, voluptas.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit vitae maiores atque nihil illum facilis perspiciatis voluptatem itaque. Sequi voluptate incidunt, perspiciatis accusantium soluta placeat reprehenderit odio consequatur animi optio?</p></div>
        </div>
      </div>
    </div>
  );
};







export { Tab, Round, Social, Bar, ButTab };
import React, { useEffect, useState } from 'react'
import Moon from '../../components/Loader/Moon';
import '../Guest/Coslog.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';


export default function Login() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [backgroundPosition, setBackgroundPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);



    // const interval = setInterval(() => {
    //   const randomX = Math.floor(Math.random() * 101); // Random number between 0 and 100
    //   const randomY = Math.floor(Math.random() * 101); // Random number between 0 and 100
    //   setBackgroundPosition({ x: randomX, y: randomY });
    // }, 150); // Change position every second

    // return () => clearInterval(interval);
  }, []);


  const [log, setlog] = useState({
    email: '',
    password: '',
  })

  const inputchange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setlog({ ...log, [name]: value })
  }
  console.log(log)



  const login = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/LoginAPIView', log).then((response) => {
      console.log(response);
      localStorage.setItem('login_id', JSON.stringify(response.data.data.login_id))
      localStorage.setItem('userid', JSON.stringify(response.data.data.userid))
      localStorage.setItem('role', JSON.stringify(response.data.data.role))
      localStorage.setItem('fname', JSON.stringify(response.data.data.fname))
      localStorage.setItem('lname', JSON.stringify(response.data.data.lname))
    
      setTimeout(() => {
       ;
        toast.success("login successful");
      }, 1000);

      if (response.data.data.role == 'investor') {
        navigate('/investorhome')
        console.log("investor logged successfully")
     }
     else if (response.data.data.role == 'startup') {
        navigate("/startuphome")
        console.log("startup logged successfully")
     }
     else if (response.data.data.role == 'admin') {
        navigate("/adminhome")
        console.log("admin logged successfully")
     }
    }).catch((error) => {
      console.log(error);
      toast('email or password is incorrect', {
        id: 'myCustomToast',
        icon: '🫤',
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      }
    );
  })

  }









  return (
    <div>
      <Toaster/>
      {isLoading ? ( // Conditionally render the loader
        <Moon />
      ) : (
        <div className="full" style={{
          backgroundPosition: `${backgroundPosition.x}% ${backgroundPosition.y}%`,
        }}>
          <div className="icon-top">Ġrow ©️</div>
          <div className="leftf">
            <video src="https://www.cosmos.so/videos/cosmos-rock-spin.webm" className='bi' autoPlay loop muted></video>

          </div>
          {/* <div class="vertical-line"></div> */}

          <div className="rightf">
            <div><h1>Sign in</h1>
              <p className='pp'><a href="/">Or register now</a> </p></div>
            <input type="text" placeholder="enter email" className='uinp' id="usernameField" required="required" name='email' onChange={inputchange} />
            <input type="text" placeholder="enter password" className='uinp' id="usernameField" required="required" name='password' onChange={inputchange} />
            <div className="button" onClick={login}>Enter </div>
          </div>
        </div>
      )}
    </div>
  )
}

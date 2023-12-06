import React, { useState } from 'react'
import '../Startup/Shome.css'
import Usernav from '../../components/Usernavbar/Usernav'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'



export default function ProjectAdd() {
  const startupid=localStorage.getItem("userid")
  const navigate=useNavigate()
  console.log(startupid,"is the userid");
    
  const [input, setinput] = useState({
    startupid: startupid,

  })
  const inputchange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setinput({ ...input, [name]: value })
  }
  console.log(input ,"this is input state");

  const addproject = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('projectname', input.projectname)
    formData.append('sector', input.sector)
    formData.append('briefdesc', input.briefdesc)
    formData.append('about', input.about)
    formData.append('foundation', input.foundation)
    formData.append('amount', input.amount)
    formData.append('share', input.share)
    formData.append('website', input.website)
    formData.append('location', input.location)
    formData.append('liscense', input.liscense)
    formData.append('backimage', input.backimage)
    formData.append('startupid', input.startupid)

   console.log(formData,"now");

    axios.post("http://127.0.0.1:8000/api/addprojectAPi", formData).then((res) => {
      console.log(res);
      console.log("project added successfully");
      navigate('/startuphome')
    }).catch((err) => {
      console.log(err);

    })
    console.log(input);}
  return (
    <div>
         <div className="section-navbar">     <Usernav /></div>
            <div className='gap'>
                <br /><br /></div>
        <div className="every">
        <div className="pright">
      <center> <h2>Add your project/startup detailes</h2></center> 
           
            <div>
          </div>
            <input type="text" placeholder="enter project name" className='uinp' id="pfield" required="required" name='projectname' onChange={inputchange} />
            <input type="text" placeholder="enter project sector / niche" className='uinp' id="pfield" required="required" name='sector' onChange={inputchange}  />
            <input type="text" placeholder="enter a brief description 1 or two lines" className='uinp' id="pfield" required="required" name='briefdesc' onChange={inputchange} />
            <textarea type="text" placeholder="explain whats your project about and what does it do" className=' tta' id="" required="required" name='about' onChange={inputchange}/>
            <textarea type="text" placeholder="describe about the team behind" className=' tta' id="" required="required" name='foundation' onChange={inputchange} />
            <input type="text" placeholder="how  much funding are you seeking" className='uinp' id="pfield" required="required" name='amount' onChange={inputchange} />
            <input type="text" placeholder="price per share" className='uinp' id="pfield" required="required" name='share' onChange={inputchange} />
            <input type="text" placeholder="company website" className='uinp' id="pfield" required="required" name='website' onChange={inputchange} />
            <input type="text" placeholder=" company / serviece location" className='uinp' id="pfield" required="required" name='location' onChange={inputchange} />
            <input type="text" placeholder="liscense number" className='uinp' id="pfield" required="required" name='liscense' onChange={inputchange} />
            {/* <input type="text" placeholder="incorporation date" className='uinp' id="pfield" required="required" name='' /> */}
            <input type="file" placeholder="add an image  or screenshot of startup" className='uinp fileip' id="pfield" required="required" name='backimage'  onChange={(e) => setinput({ ...input, backimage: e.target.files[0] })}/>
            
            <div className="probutton" onClick={addproject} >ADD </div>
          </div>
       
        </div>
    </div>
  )
}

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Usernav from '../../components/Usernavbar/Usernav';
import axios from 'axios';
import '../Startup/Shome.css'
import toast, { Toaster } from 'react-hot-toast';

export default function Editproject() {
    const startupid = localStorage.getItem("userid")
    const { id } = useParams();
    console.log(id, "projectid");
    const [update, setupdate] = useState({})

    const navigate = useNavigate()
    console.log(startupid, "is the userid");
    const [form, setform] = useState({})
    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/api/singleprojectview/${id}`).then((response) => {
            console.log("ther is nothing", response);
            setform(response.data.data)
            // console.log(form);

        }).catch((err) => {
            console.log(err);
        })
    }, [id])


    const inputchange = (event) => {
        const { name, value } = event.target
        setform({ ...form, [name]: value })
        setupdate({ ...update, [name]: value })
    }
    console.log(form, "ithan from");


    const updateproject = (e) => {
        e.preventDefault()
        const formData = new FormData();

        for (const key in update) {
            formData.append(key, update[key]);
        }

        if (update.backimage) {
            formData.append('backimage', update.backimage);
        }

        console.log("fghjkcgfhjkjlfcgbhjklfcghbjk");

        axios.post(`http://127.0.0.1:8000/api/updateproject/${id}`, formData,).then((response) => {

            console.log(response);

            navigate("/startuphome")
            setTimeout(() => {
                toast.success("Updated successfully!");
              }, 900);

        }).catch((err) => {
            console.log(err);

        })
        console.log(form);

    }


    return (
        <div>
            <Toaster />
            <div className="section-navbar">     <Usernav /></div>
            <div className='gap'>
                <br /><br /></div>
            <div className="every">
                <div className="pright">
                    <center> <h2>Add your project/startup detailes</h2></center>

                    <div>
                    </div>
                    <input type="text" placeholder="enter project name" className='uinp' id="pfield" required="required" name='projectname' onChange={inputchange} value={form.projectname} />
                    <input type="text" placeholder="enter project sector / niche" className='uinp' id="pfield" required="required" name='sector' onChange={inputchange} value={form.sector} />
                    <input type="text" placeholder="enter a brief description 1 or two lines" className='uinp' id="pfield" required="required" name='briefdesc' onChange={inputchange} value={form.briefdesc} />
                    <textarea type="text" placeholder="explain whats your project about and what does it do" className=' tta' id="" required="required" name='about' onChange={inputchange} value={form.about} />
                    <textarea type="text" placeholder="describe about the team behind" className=' tta' id="" required="required" name='foundation' onChange={inputchange} value={form.foundation} />
                    <input type="text" placeholder="how  much funding are you seeking" className='uinp' id="pfield" required="required" name='amount' onChange={inputchange} value={form.amount} />
                    <input type="text" placeholder="price per share" className='uinp' id="pfield" required="required" name='share' onChange={inputchange} value={form.share} />
                    <input type="text" placeholder="company website" className='uinp' id="pfield" required="required" name='website' onChange={inputchange} value={form.website} />
                    <input type="text" placeholder=" company / serviece location" className='uinp' id="pfield" required="required" name='location' onChange={inputchange} value={form.location} />
                    <input type="text" placeholder="liscense number" className='uinp' id="pfield" required="required" name='liscense' onChange={inputchange} value={form.liscense} />
                    {/* <input type="text" placeholder="incorporation date" className='uinp' id="pfield" required="required" name='' /> */}
                    <input type="file" placeholder="add an image  or screenshot of startup" className='uinp fileip' id="pfield" required="required" name='backimage' onChange={(e) => setupdate({ ...update, backimage: e.target.files[0] })} />

                    <div className="probutton" onClick={updateproject} >ADD </div>
                </div>

            </div>
        </div>
    )
}

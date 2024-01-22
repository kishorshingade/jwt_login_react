import React, { useState } from "react";
import {NavLink,useNavigate} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

const Usersignup = () => {
    const navigate = useNavigate()
    const [value, setvalue] = useState({
           name: '',
           email: '',
           password: '',
           contact: '',
           address: ''
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:4040/register',value)
  .then((res)=>{
    console.log(res)
    alert('Registerd Sucessfully click to log in')
    if(res.status === 200){
        navigate('/')
    

    }
  })
  .catch((err)=>{
    console.log(err)
  })
    }
  return (
    <>
      <div className="container mt-5">
      <div className='shadow-lg p-3 mb-5 bg-white rounded py-5'>
              <div className="container mt-5">
                <h2 className="text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label>Name</label>
                            <input className="form-control" placeholder="Enter Your Name"
                            onChange={(e) => setvalue({...value, name : e.target.value})}   name="name"></input>
                            <label>Password</label>
                            <input className="form-control" placeholder="Enter Your Password"
                            onChange={(e) => setvalue({...value, password : e.target.value})} name="password"></input>
                            <label>Contact</label>
                            <input className="form-control" placeholder="Enter Your Contact Number"
                            onChange={(e) => setvalue({...value, contact : e.target.value})} name="contact"></input>
                            
                        </div>
                        <div className="col-md-6">
                        <label>Email</label>
                            <input className="form-control" placeholder="Enter Your Email"
                           onChange={(e)=> setvalue({...value, email: e.target.value})} name="email"></input>
                            <label>Address</label>
                            <input className="form-control" placeholder="Enter Your Address"
                             onChange={(e)=> setvalue({...value,address : e.target.value})} name="address"></input>
                            <button type="submit" className="btn btn-primary mt-3 mx-3">Sign Up</button>
                        </div>
                    </div>
                    <NavLink to={'/'}>Already Have Account ?</NavLink>
                </form>
              </div>
            </div>
      </div>
    </>
  );
};

export default Usersignup;

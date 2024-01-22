import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {NavLink,useNavigate} from 'react-router-dom'
import axios from 'axios';


const Userlogin = () => {
    const navigate = useNavigate()
    const [value, setvalue] = useState({
           email: '',
           password: '',
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:4040/login',value)
  .then((res)=>{
    console.log(res)
    alert('user login sucessfull ')
    if(res.status === 200){
        navigate('/dashboard')
    }
  })
  .catch((err)=>{
    console.log(err)
  })
}
  return (
    <>
     <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="car p-4 w-50 border-none shadow-lg p-3 mb-5 bg-white rounded">
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Email
            </label>
            <input
              type="text"
              className="form-control"
              name='email'
              onChange={(e) => setvalue({...value, email : e.target.value})}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name='password'
              onChange={(e)=>setvalue({...value, password : e.target.value})}
              />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
           <NavLink to={'/signup'}>Don't Have Account ?</NavLink>
        </form>
      </div>
    </div>
    </>
  )
}

export default Userlogin
import { useState } from "react"
import axios from 'axios'

export default function Login() {
    const[data,setData]=useState({
        email:'',
        password:'',
    })
    const loginUser=(e)=>{
        e.preventDefault()
        axios.get('/')
    }
  return (
    <div>
        <form onSubmit={loginUser}>
        <label htmlFor="">Email</label>
            <input type="email" placeholder='Enter Email' value={data.email} onChange={(e)=>setData({...data,email:e.target.value})} />
            <label htmlFor="">Password</label>
            <input type="password" placeholder='Enter Password' value={data.password} onChange={(e)=>setData({...data,password:e.target.value})}/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

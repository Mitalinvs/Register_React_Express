import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import {toast} from 'react-hot-toast';

function login() {
    const [email, setEmail]= useState()
    const [password, setPassword]= useState()
    const navigate= useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()          //stop the default behavior of the event

        if(!email || !password) {
            toast.error("Please fill all the details");
            return;
        }

        axios.post('http://localhost:3001/login', {email, password})       //move to login route(created in index.js in app.post) to insert data in database
        .then(result => {
            console.log(result)
            if(result.data === "Success")
            {
                navigate('/home')
            }  
            else
            {
                toast.error(result.data);
            }          
        })
        .catch(err => console.log(err));
    }

    return(
        <div className= "d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className= "bg-white p-3  rounded w-25">
                <h2>Login</h2>
                {/* calls handleSubmit function to send data to server when hit submit button */}
                <form onSubmit={handleSubmit}> 
                    <div className= "mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type= "email"
                            placeholder= "Enter Email"
                            autoComplete= "off"
                            name= "email"
                            className="form-control rounded-0" 
                            onChange= {(e) =>  setEmail(e.target.value)}   
                        />
                    </div>
                    <div className= "mb-3">
                        <label htmlFor="email">
                            <strong>Password</strong>
                        </label>
                        <input
                            type= "password"
                            placeholder= "Enter Password"
                            autoComplete= "off"
                            name= "password"
                            className="form-control rounded-0" 
                            onChange= {(e) =>  setPassword(e.target.value)}   
                        />
                    </div>
                    <button type="submit" className= "btn btn-success w-100 rounded-0">Login</button>
                </form>    

                <p>Don't have Account</p>
                {/* <Link to="/register" className= "btn btn-default border w-100 bg-lightrounded-0 text-decoration-none">Sign Up</Link> */}
                <Link to="/" className= "btn btn-default border w-100 bg-lightrounded-0 text-decoration-none">Sign Up</Link>
            </div>
        </div>
    )
}

export default login;
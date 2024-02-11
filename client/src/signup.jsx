import { useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';      //to post data
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-hot-toast';

function signup() {
    const [name, setName]= useState()
    const [email, setEmail]= useState()
    const [password, setPassword]= useState()
    const navigate= useNavigate()

    const digitRegex = /\d/; // Regular expression to check for at least one digit
    const uppercaseRegex= /[A-Z]/;
    const lowercaseRegex= /[a-z]/;
    const specialRegex= /[!@#$%&*()-+=^]/;
    const spaceRegex= /\s/;
    

    const handleSubmit = (e) => {
        e.preventDefault()

        if(password.length<8 || password.length>15) 
        {
            toast.error("Password should be atleast of 8 characters and not more than 15 characters")
            return;
        }
        if(!digitRegex.test(password))
        {
            toast.error("Password should contain atleast one digit")
            return;
        } 
        if(!uppercaseRegex.test(password))
        {
            toast.error("Password should contain atleast one Uppercase letter")
            return;
        } 
        if(!lowercaseRegex.test(password))
        {
            toast.error("Password should contain atleast one Lowercase letter")
            return;
        }
        if(!specialRegex.test(password))
        {
            toast.error("Password should contain atleast one special character which includes !@#$%&*()-+=^")
            return;
        } 
        if(spaceRegex.test(password))
        {
            toast.error("Password should not contain White space characters")
            return;
        } 
        

        axios.post('http://localhost:3001/', {name, email, password})       //move to register route to insert data in database //'http://localhost:3001/register'
        .then(result => {
            console.log(result)
            navigate('/home')         
        })
        .catch(err => console.log(err))
    }

    return (
        <div className= "d-flex justify-content-center align-items-center bg-secondary vh-100">
            <div className= "bg-white p-3  rounded w-25">
                <h2>Register</h2>
                {/* calls handleSubmit function to send data to server when hit submit button */}
                <form onSubmit={handleSubmit}> 
                    <div className= "mb-3">
                        <label htmlFor="email">
                            <strong>Name</strong>
                        </label>
                        <input
                            type= "text"
                            placeholder= "Enter Name"
                            autoComplete= "off"
                            name= "name"
                            className="form-control rounded-0" 
                            onChange= {(e) =>  setName(e.target.value)}     // assign value given by user to name variable
                        />
                    </div>
                    <div className= "mb-3">
                        <label htmlFor="email">
                            <strong>Email</strong>
                        </label>
                        <input
                            type= "email"
                            placeholder= "Enter Email"
                            autoComplete= "off"
                            name= "email"
                            required= {true}
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
                            required= {true}
                            className="form-control rounded-0" 
                            onChange= {(e) =>  setPassword(e.target.value)}   
                        />
                    </div>
                    <button type="submit" className= "btn btn-success w-100 rounded-0" id= "register">Register</button>
                </form>    

                <p>Already have an Account</p>
                <Link to="/login" className= "btn btn-default border w-100 bg-lightrounded-0 text-decoration-none">Login</Link>
                
            </div>
        </div>
      );    
  }
  
export default signup
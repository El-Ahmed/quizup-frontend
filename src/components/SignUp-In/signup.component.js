import React, { Component } from "react";
import axios from 'axios';

export default function SignUp ( ) {
      const [emailValue, setemailValue] = React.useState("")
      const [passwordValue, setpasswordValue] = React.useState("");
      const [prenomValue, setprenomValue] = React.useState("");
      const [nomValue, setnomValue] = React.useState("");

    const handleChange1 = (event) => {
        setnomValue(
         event.target.value
        );
      }
    
      const handleChange2 = (event) => {
        setprenomValue(
         event.target.value
        );
      }

      const handleChange3 = (event) => {
        setemailValue(
         event.target.value
        );
      }

      const handleChange4 = (event) => {
        setpasswordValue(
         event.target.value
        );
      }

    
    

        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" onChange={handleChange2} />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" onChange={handleChange1}/>
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={handleChange3} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={handleChange4}/>
                </div>

                <button type="submit" className="btn btn-primary btn-block" >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
        );
    
}
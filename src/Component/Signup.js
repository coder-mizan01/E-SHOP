/*import React, { useState } from "react";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";

//css
import "../CSS/Ordertrack.css";

const Ordertrack = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleRegister = () =>{
    axios.post("http://localhost:4000/Signup",{email,password})
    .then(()=>{
       navigate('/login')
    })
    .catch((err)=>{
         navigate('/Signup')
    })

 }

  return (
    <>
      <section id="order-track">
        <h2 className="order-track-title">SignUp</h2>

        <form>
          <div className="order-id-div">
            <label htmlFor="">email</label>
            <input
              type="text"
              name="eamil"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="none"
              required
            />
          </div>

          <div className="order-number-div">
            <label htmlFor="">password</label>
            <input
              type="text"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="none"
              required
            />
          </div>

          <button href="dsad" type="submit" onClick={handleRegister} className="order-track-button">
            SignUp
          </button>
        </form>

        <div className="" style={{textAlign:'center'}}>
            <NavLink to='/login'>
               login
            </NavLink>
        </div>
      </section>
    </>
  );
};

export default Ordertrack;
*/
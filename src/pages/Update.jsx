import React, { useEffect, useState } from 'react'
import axios from 'axios';
import style from "../pages/update.module.css"
import { useNavigate } from 'react-router-dom';
const Update = () => {
  let navigate = useNavigate();
let [user,setUser] = useState({
        username:"",
        useremail:"",
        phone:"",
        password:"",
        dateofbirth:"",
        country:""
});
let userId = localStorage.getItem("userId")
console.log(userId);

useEffect(()=>{
  async function fetch(){
    let { data } = await axios.get(`http://localhost:5000/user${userId}`)
    console.log(data);
    setUser(data)
    
  }
  fetch()
})



   let handleChange =  (e)=>{
    let {name,value} = e.target;
    console.log(name,value);
    setUser({...user,[name]:value})    
   };

   let handleSubmit = (e)=>{
    axios.put(`http://localhost:5000/user/${userId}`,user)
    navigate("/alluser")
   }
  return (
    <div>
      <div className={style.formupdate}>
            <h2>Update-user</h2>
            <form>
              <div>
                <div>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    id="name"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    autoComplete="off"
                    required
                  />
                </div>
      
                <div>
                  <label>Email</label>
                  <input
                    type="text"
                    id="email"
                    name="useremail"
                    placeholder="abc@gmail.com"
                    value={user.useremail}
                    onChange={handleChange}
                    readOnly
                  />
                </div>
      
                <div>
                  <label>Phone:</label>
                  <input
                    type="tel"
                    min={10}
                    max={10}
                    id="phone"
                    name="phone"
                    value={user.phone}
                    placeholder="91-xxxxxxxxxx"
                    onChange={handleChange}
                    required
                  />
                </div>
      
                <div>
                  <label>Password</label>
                  <input 
                  type="password"
                  id="password"
                  placeholder="enter your password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                  required
                   />
                </div>
      
                <div>
                  <label>Country</label>
                  <select id="country" 
                  name="country"
                  value={user.country}
                  onChange={handleChange}
                  required>
                    <option value="">Select your country</option>
                    <option value="India">India</option>
                    <option value="USA" >USA</option>
                    <option value="uk">United Kindom</option>
                    <option value="Austrlia">Australia</option>
                    <option value="Pakistan">Pakistan</option>
                    
                  </select>
                </div>
      
                <div>
                  <label>Date of Birth</label>
                  <input 
                  type="date" 
                  id="dob"
                  name="dateofbirth"
                  value={user.dateofbirth}
                  onChange={handleChange}
                  required
                  />
                </div>
                <div>
                  <button type="submit"onClick={handleSubmit}>submit</button>
                </div>
              </div>
            </form>
          </div>
    </div>
  )
}

export default Update

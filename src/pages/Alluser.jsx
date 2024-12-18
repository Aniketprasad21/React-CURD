import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import style from "../pages/alluser.module.css"
import { useNavigate } from "react-router-dom";
const Alluser = () => {
  let navigate = useNavigate();
  let [alluser, setAllUser] = useState([]);
  let [toggle, settoggle] = useState(false);
  useEffect(() => {
    async function FetchAlluser() {
      let { data } = await axios.get("http://localhost:5000/user");
      console.log(data);
      setAllUser(data);
    }
    FetchAlluser();
  }, [toggle]);

  let handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/user/${id}`)
      .then(() => {
        toast.success("User deleted");
        settoggle(!toggle);
      })
      .catch(() => {
        toast.error("failed");
      }); 
  };

  let handleUpdate = (id) =>{
    localStorage.setItem("userId",id)
    navigate("/update")
  }
  return (
    <div className={style.table}>
      <h1>All Users</h1>
      <table
        border="1"
        style={{ width: "100%", textAlign: "left", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date of Birth</th>
            <th>Country</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {alluser.map(
            ({ id, username, useremail, phone, dateofbirth, country }) => (
              <tr key={id}>
                <td>{username}</td>
                <td>{useremail}</td>
                <td>{phone}</td>
                <td>{dateofbirth}</td>
                <td>{country}</td>
                <td>
                  <button onClick={() => handleDelete(id)}>Delete</button>
                  <button onClick={()=>handleUpdate(id)}>Update</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Alluser;

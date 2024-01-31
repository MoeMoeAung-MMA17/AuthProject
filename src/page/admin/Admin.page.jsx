import React, { useEffect, useState } from "react";
import {useNavigate,useLocation} from "react-router-dom"
import { Auth } from "../../service/User.service";

const AdminPage = () => {
const nav = useNavigate()
const {state} = useLocation();

  const[formData,setFormData] = useState({
    email: "",
    password: "",
  }
  )

  useEffect(() => {
    const finder = localStorage.getItem("auth");
  
    if (finder) {
      nav("/dashboard");
    }
  }, []);

  const handleSubmit =async (e) => {
    e.preventDefault();
    console.log(formData);

    const data = await Auth("user",formData)
    // console.log(data);

    if(data){
      localStorage.setItem("auth",JSON.stringify(data))
      nav("/dashboard",{state:{data}})
    }
  };
  return (
    <div className="flex w-full justify-center items-center h-screen bg-slate-200">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col mb-3">
          <label htmlFor="email" className="mb-2">
            Enter Your Email
          </label>
          <input
          value={formData.email}
          onChange={(e)=>setFormData((pre)=>({...pre,email:e.target.value}))}
            type="email"
            name="email"
            id="email"
            className="border border-slate-400 rounded outline-none py-1"
          />
        </div>
        <div className="flex flex-col mb-5">
          <label htmlFor="password" className="mb-2">
            Enter Your Password
          </label>
          <input
            value={formData.password}
            onChange={(e)=>setFormData((pre)=>({...pre,password:e.target.value}))}
            type="password"
            name="password"
            id="password"
            className="border border-slate-400 rounded outline-none py-1"
          />
        </div>
        <button
          className="px-4 py-1  w-full bg-slate-50  border border-slate-400 hover:bg-slate-600 hover:text-white rounded"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminPage;

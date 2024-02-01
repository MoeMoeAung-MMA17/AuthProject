import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Auth } from "../../service/user.service";

const AdminPage = () => {
  const nav = useNavigate();
  const { state } = useLocation();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const finder = localStorage.getItem("auth");

    if (finder) {
      nav("/dashboard");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    const data = await Auth("user", formData);
    // console.log(data);

    if (data) {
      localStorage.setItem("auth", JSON.stringify(data));
      nav("/dashboard", { state: { data } });
    }
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="w-[400px] bg-orange-200 p-5 rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-7">
          <div className="flex flex-col mb-3">
            <label htmlFor="email" className="mb-2 text-slate-700">
              Enter Your Email
            </label>
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData((pre) => ({ ...pre, email: e.target.value }))
              }
              type="email"
              name="email"
              id="email"
              className=" rounded py-1 px-2 bg-orange-100 outline-none"
            />
          </div>
          <div className="flex flex-col mb-5">
            <label htmlFor="password" className="mb-2 text-slate-700">
              Enter Your Password
            </label>
            <input
              value={formData.password}
              onChange={(e) =>
                setFormData((pre) => ({ ...pre, password: e.target.value }))
              }
              type="password"
              name="password"
              id="password"
              className=" rounded py-1 px-2 bg-orange-100 outline-none"
            />
          </div>
          </div>
          <button
            className="w-full px-4 py-2 rounded text-slate-800 duration-75 bg-orange-300 hover:bg-orange-500 text-lg"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;

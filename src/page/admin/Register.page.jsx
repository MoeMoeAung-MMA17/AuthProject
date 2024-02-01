import React, { useEffect, useState } from "react";
import { Auth, RegAuth } from "../../service/User.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const nav = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
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

    const data = await RegAuth("user", formData);
    console.log(data);

    if (data) {
      nav("/admin", { state: { data } });
      // localStorage.setItem("auth",JSON.stringify(data))
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center mb-5">
        <h1 className="font-bold font-serif text-2xl text-slate-900">Register Form</h1>
      </div>
      <div className="w-[400px] bg-orange-200 p-5 rounded-md">
        <form onSubmit={handleSubmit}>
          <div className="mb-7">
          <div className="mb-3 flex flex-col">
            <label className="mb-2 text-slate-700" htmlFor="username">Name</label>
            <input
              id="username"
              className="outline-none rounded py-1 px-2 bg-orange-100"
              type="text"
              name="username"
              value={formData.username}
              onChange={(e) =>
                setFormData((pre) => ({ ...pre, username: e.target.value }))
              }
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="mb-2 text-slate-700" htmlFor="email">Email</label>
            <input
              id="email"
              className="outline-none rounded py-1 px-2 bg-orange-100"
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((pre) => ({ ...pre, email: e.target.value }))
              }
            />
          </div>
          <div className="mb-3 flex flex-col">
            <label className="mb-2 text-slate-700" htmlFor="password">Password</label>
            <input
              id="password"
              className="outline-none rounded py-1 px-2 bg-orange-100"
              type="password"
              name="password"
              value={formData.password}
              onChange={(e) =>
                setFormData((pre) => ({ ...pre, password: e.target.value }))
              }
            />
          </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 rounded text-slate-800 duration-75 bg-orange-300 hover:bg-orange-500 text-lg"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

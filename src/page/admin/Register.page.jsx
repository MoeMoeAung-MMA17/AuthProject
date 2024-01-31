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
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username:</label>
          <input
            className="outline-none rounded"
            type="text"
            name="username"
            value={formData.username}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, username: e.target.value }))
            }
          />
        </div>
        <div className="mb-3">
          <label>Email:</label>
          <input
            className="outline-none rounded"
            type="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, email: e.target.value }))
            }
          />
        </div>

        <div className="mb-3">
          <label>Password:</label>
          <input
            className="outline-none rounded"
            type="password"
            name="password"
            value={formData.password}
            onChange={(e) =>
              setFormData((pre) => ({ ...pre, password: e.target.value }))
            }
          />
        </div>
        <div>
          <button
            type="submit"
            className=" px-4 py-3 rounded border-yellow-500 bg-yellow-200"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

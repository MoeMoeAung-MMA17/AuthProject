import React, { useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const { state } = useLocation();

  const nav = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("auth");

    if (!data) {
      nav("/admin");
    }
  }, []);
  const handleLogout = () => {
    // Clear user-related information from localStorage
    localStorage.removeItem('auth'); // Assuming you store a user token

    // Redirect to the login page
    window.location.href = '/admin'; // You can use React Router for a more sophisticated routing approach
  };
  return (
    <div className="container mx-auto grid grid-cols-10 h-screen pt-20 gap-2">
      <div className="col-span-3 bg-slate-100 p-5">
        <div className="flex flex-col h-screen">
        <div>
        <ul>
          <Link to={"/dashboard"}>
            <li>Dashboard</li>
          </Link>
          {/* <Link to={"/dashboard/inventory"}>
          <li>Inventory</li>
        </Link> */}
          <Link to={"/dashboard/blog"}>
            <li>Blog</li>
          </Link>
          <Link to={"/dashboard/user"}>
            <li>User</li>
          </Link>
          
          {/* <span>{`Email : ${state?.data.email}`}</span> */}
        </ul>
        </div>
        <div className="mt-[380px]">
        <Link to={"/admin"}>
            <button onClick={handleLogout} className="w-full px-4 py-2 rounded text-slate-800 duration-75 bg-orange-300 hover:bg-orange-500 text-lg">Logout</button>
        </Link>
        </div>
        </div>
      </div>
      <div className="col-span-7">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardPage;

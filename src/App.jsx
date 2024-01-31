import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AdminPage, BlogPage, DashboardPage, HomePage, InventoryPage, RegisterPage, UserPage } from "./page";
import { NavComponents } from "./components";
import NotFound from "../NotFound";




const App = () => {


  return (
    <div className="main">
      <NavComponents/>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage/>}>
            <Route index element={<InventoryPage />} />
            <Route path="blog" element={<BlogPage />} />
            <Route path="user" element={<UserPage />} />
        </Route>
        <Route path="register" element={<RegisterPage />} />
        <Route path="admin" element={<AdminPage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
};

export default App;

import React from "react";
import {useNavigate} from "react-router-dom"


const NotFound = () => {
  const nav = useNavigate();

  const handleBack = () => {
    nav(-1);
  };
 
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 Not Found</h1>
        <p className="text-lg  mb-5">
          The requested page or resource could not be found.
        </p>
      <button className="px-4 py-1 border bg-slate-400 hover:bg-slate-800 text-white rounded" onClick={handleBack}>Back</button>
      </div>
    </div>
  );
};

export default NotFound;

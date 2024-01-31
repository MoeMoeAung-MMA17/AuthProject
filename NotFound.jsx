import React from "react";
import {useNavigate} from "react-router-dom"
// import notFoundImage from 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimages.saymedia-content.com%2F.image%2Ft_share%2FMjAwNDU1MDkxMzI4MDY2OTM2%2Freact-404-page-template.png&tbnid=cedCraauHFaIsM&vet=12ahUKEwjEgeToiPuDAxVKvGMGHTqZCnoQMygCegQIARBM..i&imgrefurl=https%3A%2F%2Fturbofuture.com%2Fcomputers%2FReact-404-Page-Template&docid=KcIltlopmODPvM&w=1200&h=691&q=not%20found%20image%20for%20react&ved=2ahUKEwjEgeToiPuDAxVKvGMGHTqZCnoQMygCegQIARBM';

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

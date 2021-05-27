import React from "react";
 
import News from "../Home/Child/News";
import  {newsData } from "../Home/Child/Newsdata";
import "./News.css";
const NewsMain = () => {
  return (
    <>
     <div className="img">
       <h1>NEWS</h1>
      
     </div>
     <News title=" " cardData={newsData}></News>
    </>
  );
};

export default NewsMain;

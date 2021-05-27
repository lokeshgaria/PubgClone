import React from "react";

//IMPRTING CHILD COMPONENTS
import Hero from "./Child/Hero";
import Register from "./Child/Register";
import Rewards from "./Child/Rewards"
import News from "./Child/News"
import "./Home.css";
//importing news data

import  {newsData ,SocialData} from "./Child/Newsdata";
//importing socialMediadata
 
const Home = () => {
  return (
    <>
      {/*Hero Section Here*/}
      <Hero />
      {/*Register Section Here*/}
      <Register />
      {/*Registration Reward here*/}
      <Rewards />
      {/** NEWS section here*/}
      <News  title="NEWS" cardData={newsData} />
       {/** Social Media*/}
       <News title="SOCIAL MEDIA" cardData={SocialData} />
    </>

  );
};
export default Home;

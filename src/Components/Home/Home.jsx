import React from "react";

//IMPRTING CHILD COMPONENTS
import Hero from "./Child/Hero";
import Register from "./Child/Register";
import Rewards from "./Child/Rewards"
import News from "./Child/News"
import "./Home.css";

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
      <News />
    </>

  );
};
export default Home;

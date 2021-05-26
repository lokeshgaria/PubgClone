import React from "react";

//IMPRTING CHILD COMPONENTS
import Hero from "./Child/Hero";
import Register from "./Child/Register";

import "./Home.css";
const Home = () => {
  return (
    <>
      {/*Hero Section Here*/}
      <Hero />
      {/*Register Section Here*/}
      <Register />
    </>

  );
};
export default Home;

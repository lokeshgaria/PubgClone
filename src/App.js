import React from "react";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Hero from "./Components/Hero/Hero.jsx";
import News from "./Components/News/News"
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
         
   <Navbar />
      
      <Switch>
          <Route exact path="/" component={Hero} />
          <Route  exact path="/news" component={News} />
        </Switch>
      
      
      
    </div>
  );
}

export default App;

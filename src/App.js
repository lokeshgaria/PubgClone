import React from "react";
import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Home from "./Components/Home/Home";
import News from "./Components/News/NewsMain";
import Footer from "./Components/Footer/Footer"
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/news" component={News} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

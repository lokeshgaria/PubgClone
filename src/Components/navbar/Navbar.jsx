import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AppBar, Box, Toolbar, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

//Icons images
import brand from "./assets/brand.png";

import HamBurger from "./assets/Navicon.png";
import Times from "./assets/TimesLogo.png";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    background: theme.palette.grey[200],
    paddingTop: theme.spacing(5),
  },
  navbar: {
    background: "black",
    padding : "0",
  },

  tolbar: {
    padding: " 0",
  },
}));
const Navbar = () => {
  const [toggle, setToggle] = useState(true);

  //to toggle between hamburger icon
  const toggleClass = () => {
    setToggle(!toggle);
   
  };
 
   
  const classes = useStyle();

  return (
    <>
      <AppBar className={classes.navbar} component={Box}  >
        <Toolbar className={classes.tolbar}>
          <Box>
            <img src={brand} alt="sd" className="BrandLogo" />
          </Box>

          <Grid className="Navbox" component={Box} container  >
            
            <Grid
              item
               
              className={toggle ? "navlist nav" : "navlist nav falldown"} 
              xl={1}
              lg={3}
              md={3}
              sm={12}
              xs={12}
              component={Box}
            >
              <ul className="first">
                <li>
                  <NavLink to="/"  exact activeClassName="active" className="navbarLinks"  onClick={toggleClass}>
                    home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/news" exact activeClassName="active" className="navbarLinks"  onClick={toggleClass}>
                    News
                  </NavLink>
                </li>
                <li className=""  onClick={toggleClass}>
                
                  <a
                    href="https://help.battlegroundsmobileindia.com/a/support/"
                    target="_blank"
                    rel="noreferrer"
                    className="navbarLinks support"
                  >
                    Support Please <i class="fas fa-external-link-alt"></i>
                  </a>
                </li>
              </ul>
            </Grid>
            
         

            <Grid
              className="navlist "
              
              item
              xl={1}
              lg={2}
              sm={6}
              
              xs={12}
              component={Box}
               
            >
              <ul className="socialmedia">
                <li>
                  <a href="http://bit.ly/BGMINFB_HOME" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/battlegroundsmobilein_official" target="_blank" rel="noreferrer">
                  <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="http://localhost:3000/#" target="_blank" rel="noreferrer">
                   
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </Grid>
          </Grid>
          <Box
            className={toggle ? "hamicon show" : "hamicon hide"}
            onClick={toggleClass}
          >
            <img src={HamBurger} className="" alt="" />
          </Box>
          <Box
            className={toggle ? "hamicon hide" : "hamicon true"}
            onClick={toggleClass}
          >
            <img src={Times} className=" " alt="" />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;

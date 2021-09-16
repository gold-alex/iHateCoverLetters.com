import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./LandingPage.css";
import LazyHero from "react-lazy-hero";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useBttnStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function LandingPage() {
  const history = useHistory();

  //Event handlers 
  const onLogin = (event) => {
    history.push("/login");
  };

  const onRegister = (event) => {
    history.push("/registration");
  };

  //use bttn styles
  const classes = useBttnStyles();

  return (
    <div>
      <LazyHero
        isCentered={true}
        minHeight="100vh"
        opacity={0.75}
        transitionDuration={0}
        parallaxOffset={100}
        color="#000000"
        imageSrc="https://images.pexels.com/photos/5198264/pexels-photo-5198264.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
      >
        <span id="landing-description">
          <h1 className="white-text">Looking to expedite your job hunt?</h1>
          <p id="description-of-service" className="white-text">
            Input a cover letter template (or a few), and whenver you need
            clean, company specific cover letter PDFs generated, simply input
            the company names and job titles you'd like to generate and we'll do
            the rest.
          </p>
          <h5 className="white-text">
            Get started by registering or logging in below
          </h5>

          {/* Login Button */}
          <div className={classes.root}>
            <Button onClick={onLogin} variant="contained" color="primary">
              Login
            </Button>

            {/* Register Button */}
            <Button
              onClick={onRegister}
              variant="contained"
              style={{ backgroundColor: "#ffffff", color: "#000000" }}
            >
              Register
            </Button>
          </div>
        </span>
      </LazyHero>
    </div>
  );
}

export default LandingPage;

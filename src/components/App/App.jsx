import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import AboutPage from "../AboutPage/AboutPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginForm from "../LoginForm/LoginForm";
import RegistrationForm from "../RegisterForm/RegisterForm";
import MenuAppBar from "../AppBar/AppBar";
import Generate from "../Generate/Generate";
import "./App.css";
import MyCoverLetters from "../MyCoverLetters/MyCoverLetters";
import MyAccount from "../MyAccount/MyAccount";
import AddLetter from "../AddLetter/AddLetter";

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  //FETCHING USER DETAILS
  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <MenuAppBar />
      <Switch>
        {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
        <Redirect exact from="/" to="/home" />

        {/* Visiting localhost:3000/about will show the about page. */}
        <Route
          // shows AboutPage at all times (logged in or not)
          exact
          path="/about"
        >
          <AboutPage />
        </Route>

        <ProtectedRoute
          // logged in shows My Cover Letters else shows landing page
          exact
          path="/mycoverletters"
        >
          <MyCoverLetters />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/generate"
        >
          <Generate />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/myaccount"
        >
          <MyAccount />
        </ProtectedRoute>

        <ProtectedRoute
          exact
          path="/addletter"
        >
          <AddLetter />
        </ProtectedRoute>

        <Route exact path="/login">
          {user.id ? (
            // If the user is already logged in,
            // redirect to the /mycoverletters page
            <Redirect to="/mycoverletters" />
          ) : (
            // Otherwise, show the login page
            <LoginForm />
          )}
        </Route>

        <Route exact path="/registration">
          {user.id ? (
            // If the user is already logged in,
            // redirect them to the /user page
            <Redirect to="/mycoverletters" />
          ) : (
            // Otherwise, show the registration page
            <RegistrationForm />
          )}
        </Route>

        <Route exact path="/home">
          {user.id ? (
            // If the user is already logged in,
            // redirect them to the /user page
            <Redirect to="/generate" />
          ) : (
            // Otherwise, show the Landing page
            <LandingPage />
          )}
        </Route>

        {/* If none of the other routes matched, we will show a 404. */}
        <Route>
          <h1>404</h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

import React from "react";
import "./AboutPage.css";
import InsertBody from "./Instructional_Gifs/InsertBody.gif";
import PositionTag from "./Instructional_Gifs/PositionTag.gif";
import CompanyTag from "./Instructional_Gifs/CompanyTag.gif";
import TimeToCook from "./Instructional_Gifs/TimeToCook.gif";

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h1 style={{ marginTop: "45px" }}>About</h1>
        <p>iHateCoverLetters is a simple cover-letter automation web app by <a href="http://github.com/gold-alex">Alex</a> which utilizes the following technologies:</p>  
        <div id = "bullet-list">
        <ul>
          <li>Node</li>
          <li>Express</li>
          <li>React</li>
          <li>Postgresql</li>
          <li>Passport</li>
          <li>pdfMake</li>
          <li>react-recaptcha</li>
          <li>heroku</li>
        </ul>
        </div>

        <h1 style={{ marginTop: "45px" }}>Instructions</h1>
        <h1 style={{ marginTop: "45px" }}>Step 1: Insert bodies of text</h1>
        <h5>
          Copy and paste the text of one cover letter and iHateCoverLetters will
          create and bulk export clean, company specific cover letters in PDF
          format.
        </h5>
        <img src={InsertBody} />
        <h1>Step 2: Add Company or Job Title Tags (Optional)</h1>
        <h2>Job Title Tag *TITLE* </h2>
        <img src={PositionTag} />
        <h2>Company Tag *COMPANY*</h2>
        <img style={{ marginBottom: "80px" }} src={CompanyTag} />

        <h1>Step 3: Time to Cook!</h1>
        <img style={{ marginBottom: "75px" }} src={TimeToCook} />
      </div>
    </div>
  );
}

export default AboutPage;

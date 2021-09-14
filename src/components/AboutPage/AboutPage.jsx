import React from "react";
import "./AboutPage.css";
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>
          How nice would it be to create one cover letter for your job search?
        </h2>
          <h3>
            Using iHateCoverLetters, you can. <br/> 
          </h3> 
          <h5> 
            Simply paste the text of one
            cover letter and iHateCoverLetters will create and bulk export clean,
            company specific cover letters in PDF format.
          </h5>
      </div>
    </div>
  );
}

export default AboutPage;

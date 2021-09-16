import "../MyCoverLetters/MyCoverLetters.css";
import { useSelector } from "react-redux";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

const paperStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(1),
      width: "58%",
      height: "40%",
      padding: "15px",
    },
  },
}));

const bttnStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function AddLetter() {
  const dispatch = useDispatch();
  const userstore = useSelector((store) => store.user);
  const templatestore = useSelector((store) => store.templates);

  //FETCHING TEMPLATES
  useEffect(() => {
    dispatch({ type: "PULL_TEMPLATES", payload: userstore.id });
  }, []);

  const paperclasses = paperStyles();
  const bttnclasses = bttnStyles();
  const history = useHistory();
  
  //Event handler for add cover letter button
  const onAddLetter = () => {
    return history.push("/addletter");
  };

  //DELETE - individual template deletion
  const onDelete = (templateid) => {
    axios
      .delete(`/api/user/delete/${templateid}`)
      .then(() => dispatch({ type: "PULL_TEMPLATES", payload: userstore.id }));
  };

  console.log(userstore);
  console.log(templatestore);

  return (
    <div>
      <div id="mycoverletter-container">
        <h1 id="mycoverletter-heading">
          {" "}
          {userstore.first_name}'s Cover Letters{" "}
        </h1>
      </div>

      {/* Displaying the templates user has created */} 
      <div id="paper-id" className={paperclasses.root}>
        <Paper elevation={3}>
          <h3 className="center">Template Name</h3>
          <div id="wrapper-div-template-list">
            <div id="template-list-div">
              {templatestore.map((obj) => (
                <div key={obj.id}>
                  <li>
                    {obj.template_name}{" "}
                    <Button
                      onClick={() => onDelete(obj.id)}
                      style={{
                        maxHeight: "15px",
                        width: "15%",
                        backgroundColor: "#852508",
                        color: "#ffffff",
                        textTransform: "none",
                      }}
                      variant="contained"
                    >
                      Delete
                    </Button>{" "}
                  </li>
                </div>
              ))}
            </div>
          </div>
        </Paper>
      </div>

      {/* Add Cover Letter Button */} 
      <div className={bttnclasses} className="center">
        <Button onClick={onAddLetter} variant="contained" color="primary">
          Add Cover Letter Template
        </Button>
      </div>
    </div>
  );
}

export default AddLetter;

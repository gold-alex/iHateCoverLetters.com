import { useSelector } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../Generate/Generate.css'
import { useState } from 'react';


const paperStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '58%',
        height: '20vh',
      },
    },
  }));

  const inputStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  const bttnStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));



function Generate() {
    const userstore = useSelector(store => store.user);
    const paperclasses = paperStyles();
    const bttnclasses = bttnStyles();
    const inputclasses = inputStyles();

    //Array to collect the info input by user to iterate over with jsPDF later... 
    let companytitleArray = [];

    //Creating local state to allow us to push an object of company and title to the array on add button click
    const [company, setCompany] = useState("");
    const [jobTitle, setjobTitle] = useState("");

    const addcompanyTitle = () => {
        companytitleArray.push({company, jobTitle})
        console.log("button clicked")
        console.log("ThiscompanytitleArray", companytitleArray);
        setCompany("")
        setjobTitle("")
    }

    return (
        <div>
            <div id="mycoverletter-container">
                <h1 id = "mycoverletter-heading"> Generate Cover Letters </h1>
            </div>

            <div>
              <h2 className="center">Add to Queue</h2>
            </div>

            <div className = "generate-input">
            <TextField value = {company} onChange={(e)=>setCompany(e.target.value)} id="outlined-basic" label="Company" variant="outlined" />
            </div>

            <br/>

            <div className = "generate-input">
            <TextField value = {jobTitle} onChange={(e)=>setjobTitle(e.target.value)} id="outlined-basic" label="Job Title" variant="outlined" />
            </div>

            <div id = "add-button-generate" className = {bttnclasses} className="center">
                <Button onClick = {addcompanyTitle} variant="contained" color="primary">
                    Add 
                </Button>
            </div>

            <br/>

            <div id = "paper-id" className={paperclasses.root}>
                <Paper elevation={3}>  
                    <h3 className="center">Table HERE with Orgs and Job Titles</h3>
                </Paper> 
            </div>



        </div>
    )
}

export default Generate;
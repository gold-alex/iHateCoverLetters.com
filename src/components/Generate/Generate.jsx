import '../MyCoverLetters/MyCoverLetters.css'
import { useSelector } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


const paperStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '58%',
        height: '35vh',
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


    console.log(userstore);
    return (
        <div>
            <div id="mycoverletter-container">
                <h1 id = "mycoverletter-heading"> {userstore.first_name}'s Cover Letters! </h1>
            </div>

            <div id = "paper-id" className={paperclasses.root}>
                <Paper elevation={3}>  
                    <h3 className="center">Template Name</h3>
                </Paper> 
            </div>

            <div className = {bttnclasses} className="center">
                <Button variant="contained" color="primary">
                    Add Cover Letter Template
                </Button>
            </div>

        </div>
    )
}

export default Generate;
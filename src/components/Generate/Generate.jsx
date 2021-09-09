import { useSelector } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import '../Generate/Generate.css'
import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const tableStyles = makeStyles({

  table: {
    minWidth: 400,
  },
});

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
    const tableclasses = tableStyles();

    //Creating local state to allow us to push an object of company and title to the array on add button click
    const [company, setCompany] = useState("");
    const [jobTitle, setjobTitle] = useState("");
    //Array to collect the info input by user to iterate over with jsPDF later... 
    const [companytitleArray, setcompanytitleArray] = useState([])

    const addcompanyTitle = () => {
        // companytitleArray.push({company: company, jobTitle: jobTitle})
        setcompanytitleArray([...companytitleArray, {company: company, jobTitle: jobTitle}])
        console.log("button clicked")
        console.log("This is companytitleArray", companytitleArray);
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
                    <TableContainer component={Paper}>
                    <Table className={tableclasses.table} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell align="center">Company</TableCell>
                          <TableCell align="center">Job Title</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {companytitleArray.map((item, i) => (
                          <TableRow key={i}>
                            <TableCell align="center" component="th" scope="row">{item.company}</TableCell>
                            <TableCell align="center">{item.jobTitle}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper> 
            </div>
        </div>
    )
}

export default Generate;
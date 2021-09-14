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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import { withStyles } from '@material-ui/core/styles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import { useHistory } from 'react-router';
import GetAppIcon from '@material-ui/icons/GetApp';
import GetApp from '@material-ui/icons/GetApp';
import PDFDOWNLOAD from '../PDFDOWNLOAD/PDFDOWNLOAD';


const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

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
        width: 'auto%',
        height: 'auto',
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
    const dispatch = useDispatch();
    const history = useHistory();
    const templatestore = useSelector(store => store.templates);
    const paperclasses = paperStyles();
    const bttnclasses = bttnStyles();
    const inputclasses = inputStyles();
    const tableclasses = tableStyles();
    //Menu click handling
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    //FETCHING TEMPLATES
    useEffect(() => {
      dispatch({ type: 'PULL_TEMPLATES', payload: userstore.id });
    }, []);

    //Store
    const userstore = useSelector(store => store.user);
    console.log(userstore);
    
    //Local state for selected template
    const [selectedTemplate, setselectedTemplate] = useState('');
    const [selectedTemplateID, setselectedTemplateID] = useState('');

    //On Menu Item Click
    const menuitemClick = (templatename, templateid) => {
      setselectedTemplate(templatename);
      setselectedTemplateID(templateid); 
      setAnchorEl(null);
    }

    //Creating local state to allow us to push an object of company and title to the array on add button click
    const [company, setCompany] = useState("");
    const [jobTitle, setjobTitle] = useState("");
    //Array to collect the info input by user to iterate over with jsPDF later... 
    const [companytitleArray, setcompanytitleArray] = useState([])

    const addcompanyTitle = () => {
        // companytitleArray.push({company: company, jobTitle: jobTitle})
        setcompanytitleArray([...companytitleArray, {company: company, jobTitle: jobTitle}])
        setCompany("")
        setjobTitle("")
    }

    
    const generatePDFs = () => {
      if (selectedTemplate === '') {
        alert ("Please select and template and try again")
      }
      else {
        //Retrieve paragraphs of selected template
        let paragraphOne = "";
        let paragraphTwo = "";
        let paragraphThree = "";
        
  
        for (let i=0; i<templatestore.length; i++) {
          if (templatestore[i].id == selectedTemplateID) {
          paragraphOne = templatestore[i].paragraph_one
          paragraphTwo = templatestore[i].paragraph_two
          paragraphThree = templatestore[i].paragraph_three
          }
        }
        //Sending users info, company specific information, and template selected to pdf generation script
        companytitleArray.map(item => (
          PDFDOWNLOAD(paragraphOne, paragraphTwo, paragraphThree, item.company, item.jobTitle, userstore.first_name, userstore.last_name, userstore.address, userstore.phone_number, userstore.email)
        ))
      }
    } 
    

    return (
        <div id = "wrapper-div" style={{marginBottom: "10px"}}>
            <div id="mycoverletter-container">
                <h1 id = "mycoverletter-heading"> Generate Cover Letters </h1>
            </div>

            <h2 className="center">Add to Queue</h2>
        
            {/* Company Input */}
            <div className = "generate-input">
            <TextField value = {company} onChange={(e)=>setCompany(e.target.value)} id="outlined-basic" label="Company" variant="outlined" />
            </div>

            <br/>

            {/* Job Title Input */}
            <div className = "generate-input">
            <TextField value = {jobTitle} onChange={(e)=>setjobTitle(e.target.value)} id="outlined-basic" label="Job Title" variant="outlined" />
            </div>

            <div id = "add-button-generate" className = {bttnclasses} className="center"> {/* This div includes add button and select template*/}
              {/* Add Button */}
              <Button style= {{backgroundColor: "#2aa32a", color: "#ffffff" }} onClick = {addcompanyTitle} variant="contained" color="primary">
                  Add 
              </Button>

              {/* Select Template Menu */}
              <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Select Template <KeyboardArrowUpIcon/>
              </Button>
              <StyledMenu
                  id="customized-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                <StyledMenuItem onClick={()=>history.push('/addletter')}>
                  <ListItemIcon> <LibraryBooksIcon/> </ListItemIcon>
                  <ListItemText primary="Add New Template"/> 
                </StyledMenuItem>
                
                {templatestore.map((item, i) => (
                    <StyledMenuItem key = {i}>
                      <ListItemText primary={item.template_name} onClick={()=>menuitemClick(item.template_name, item.id)}/> 
                    </StyledMenuItem>
                ))}
              </StyledMenu>
             

            </div>

            <h4>Current Template: {selectedTemplate} </h4>
            
            <div>
            <div id = "paper-id"  className={paperclasses.root}>
                <Paper elevation={3}>  
                    <TableContainer component={Paper}>
                    <Table className={tableclasses.table} aria-label="simple table">
                      <TableHead>
                        <TableRow >
                          <TableCell align="center">Company</TableCell>
                          <TableCell align="center">Job Title</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {companytitleArray.map((item, i) => (
                          <TableRow key={i}>
                            <TableCell  align="center" component="th" scope="row">{item.company}</TableCell>
                            <TableCell  align="center">{item.jobTitle}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Paper> 
            </div>

            <Button onClick = {generatePDFs} variant="contained" style= {{backgroundColor: "#ad0303", color: "#ffffff" }} color="primary">
                  Generate and Download <GetApp/>
            </Button>
            </div>
        </div>
    )
}

export default Generate;
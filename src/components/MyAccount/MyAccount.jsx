import '../MyCoverLetters/MyCoverLetters.css'
import '../MyAccount/MyAccount.css'
import { useSelector } from 'react-redux';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { TextField } from '@material-ui/core';
import MaskedInput from 'react-text-mask';


const phoneStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));


const paperStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '35em',
        height: '20em',
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



function MyAccount() {
    const userstore = useSelector(store => store.user);
    const paperclasses = paperStyles();
    const bttnclasses = bttnStyles();
    const phoneclasses = phoneStyles();

    //creating local state for address and phone number changes
    const [address, setAddress] = React.useState("");
    const [phone, setPhone] = React.useState("");

    console.log(userstore);
    return (
        <div>
            <div id="mycoverletter-container">
                <h1 id = "mycoverletter-heading"> My Account </h1>
            </div>

            <div id = "paper-id" className={paperclasses.root}>
                <Paper elevation={3}>  
                    <h3 className="center">Account Details</h3>
                    <div id = "wrapper-div">
                        <div id = 'account-info'>
                            <p>Email: {userstore.email}</p> 
                            <p>Address: {userstore.address}</p> 
                            <TextField fullWidth />
                            <Button variant="contained" color = "primary">Update Address</Button> 
                            <p>Phone: {userstore.phone_number}</p> 
                            <MaskedInput className={phoneclasses.root} 
                                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                placeholderChar={'\u2000'}
                                showMask
                                value={phone}
                                required
                                onChange={(event) => setPhone(event.target.value)} 
                            />
                            <Button variant="contained" color = "primary">Update Phone</Button> 


                           
                        </div>
                    </div>
                </Paper> 
            </div>
        </div>
    )
}

export default MyAccount;
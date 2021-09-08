import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './RegisterForm.css';
import Button from '@material-ui/core/Button';
import MaskedInput from 'react-text-mask';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function registrationForm() {
    const [email, setEmail] = useState('');
    const [firstname, setfirstName] = useState('');
    const [lastname, setlastName] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();

    const registerUser = (event) => {
        event.preventDefault();

        dispatch({
        type: 'REGISTER',
        payload: {
            firstname,
            lastname,
            username: email,
            password: password,
            address: address,
            phone: phone
        },
        });
    }; // end registerUser

    const bttnclasses = useStyles();
    const phoneinputclasses = useStyles();

  return (
    <div id="registration-form">
    <form onSubmit={registerUser}>
        <h2 className = "black-text">Register User</h2>
    
        {errors.registrationMessage && (
            <h3 className="alert" role="alert">
                {errors.registrationMessage}
            </h3>
        )}

        <h4 className = "black-text">First Name</h4>

        <TextField 
            type="text"
            name="firstname"
            value={firstname}
            required
            onChange={(event) => setfirstName(event.target.value)} 
        />

        <h4 className = "black-text">Last Name</h4>

        <TextField 
            type="text"
            name="lastname"
            value={lastname}
            required
            onChange={(event) => setlastName(event.target.value)} 
        />

        <h4 className = "black-text">Email</h4>

        <TextField 
            type="text"
            name="email"
            autoComplete="username"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)} 
        />

        <h4 className = "black-text">Password</h4>

        <TextField   
            type="password"
            name="password"
            autoComplete="new-password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)} 
        />

        <h4 className = "black-text">Full Address</h4>

        <TextField   
            multiline
            type="text"
            name="address"
            value={address}
            required
            onChange={(event) => setAddress(event.target.value)} 
        />

        <h4 className = "black-text">Phone Number</h4>

        <MaskedInput className={phoneinputclasses.root} 
          mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
          placeholderChar={'\u2000'}
          showMask
          value={phone}
          required
          onChange={(event) => setPhone(event.target.value)} 
        />
       
        <div className={bttnclasses.root}>
        <Button type = 'submit' variant="contained" color ="primary">Register Now</Button>
        </div>
    </form>
    </div>
  );
}

export default registrationForm;
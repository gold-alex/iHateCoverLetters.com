import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Register2/RegisterTwo.css';

const useFormStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function registrationForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const errors = useSelector((store) => store.errors);
    const dispatch = useDispatch();

    const registerUser = (event) => {
        event.preventDefault();

        dispatch({
        type: 'REGISTER',
        payload: {
            username: username,
            password: password,
        },
        });
    }; // end registerUser

  const formClasses = useFormStyles();

  return (
    <>
    <form className={formClasses.root} onSubmit={registerUser}>
        <h2 class = "black-text">Register User</h2>
    
        {errors.registrationMessage && (
            <h3 className="alert" role="alert">
                {errors.registrationMessage}
            </h3>
        )}
        <h4 class = "black-text">Username</h4>

        <TextField 
            type="text"
            name="username"
            value={username}
            required
            onChange={(event) => setUsername(event.target.value)} 
        />
        <h4 class = "black-text">Password</h4>

        <TextField   
            type="password"
            name="password"
            value={password}
            required
            onChange={(event) => setPassword(event.target.value)} 
        />
    </form>
    </>
  );
}

export default registrationForm;
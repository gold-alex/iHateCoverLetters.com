import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core';
import '../LoginForm/LoginForm.css'

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const errors = useSelector(store => store.errors);
  const dispatch = useDispatch();
  const gridclasses = gridStyles();


  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <div id = "login-container">
      {/* <form className="formPanel" onSubmit={login}> */}
      <Grid container spacing={3}>

        <Grid item xs={12}>
          <Paper className={gridclasses.paper}> 
          <h1 className = "black-text">User Login</h1>  
          {errors.loginMessage && (<h3 className="alert" role="alert">{errors.loginMessage}</h3>)}      
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={gridclasses.paper}> 
          <h4 className = "black-text">Email Address</h4>
          <TextField
              type="text"
              style={{width: "50%"}}
              name="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper className={gridclasses.paper}> 
          <h4 className = "black-text">Password</h4>
          <TextField
              type="password"
              style={{width: "50%"}}
              name="password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </Paper>
        </Grid>
      </Grid>

        <div id = "login-button">
          <Button variant="contained" color ="primary" onClick={login}>Login</Button>
        </div>
      {/* </form> */}
    </div>
  );
}

export default LoginForm;

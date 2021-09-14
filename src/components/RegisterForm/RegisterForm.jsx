import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./RegisterForm.css";
import Button from "@material-ui/core/Button";
import MaskedInput from "react-text-mask";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import ReCAPTCHA from "react-google-recaptcha";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const gridStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function registrationForm() {
  const [email, setEmail] = useState("");
  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  console.log("thisis phone", phone.length);
  const [isrecaptchaVerified, setisrecaptchaVerified] = useState(false);

  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();

  const registerUser = (event) => {
    //data validation
    //check first name and last name
    if (firstname.length <= 1 || lastname.length <= 1) {
      alert("Please input a valid first and last name");
    }

    //check email
    if (email.length < 1 || !email.includes("@") || !email.includes(".")) {
      alert("Please provide a valid email and try again");
    }

    //check address
    if (address.length < 1) {
      alert("Please provide a valid address and try again");
    }

    //check password
    if (password.length < 8) {
      alert("Please provide a valid 8+ digit passcode and try again");
    }
    //check everything
    else if (
      firstname.length > 1 &&
      lastname.length > 1 &&
      email.length > 1 &&
      email.includes("@") &&
      email.includes(".") &&
      phone.length > 1 &&
      password.length > 8
    ) {
      event.preventDefault();
      dispatch({
        type: "REGISTER",
        payload: {
          firstname,
          lastname,
          username: email,
          password: password,
          address: address,
          phone: phone,
        },
      });
    }
  };

  //USING STYLES
  const bttnclasses = useStyles();
  const phoneinputclasses = useStyles();
  const gridclasses = gridStyles();

  return (
    <div id="registration-form">
      <div id="inline-blockery">
        <form className="formPanel" onSubmit={registerUser}>
         
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={gridclasses.paper}>
                <h1 className="black-text">Register User</h1>
                {errors.registrationMessage && (
                <h3 className="alert" role="alert">
                  {errors.registrationMessage}
                </h3>
                )}
              </Paper>
            </Grid>

            <Grid item md={6} xs={12}>
              <Paper className={gridclasses.paper}>
                <h4 className="black-text">First Name</h4>
                <TextField
                  type="text"
                  name="firstname"
                  value={firstname}
                  fullWidth
                  required
                  onChange={(event) => setfirstName(event.target.value)}
                />
              </Paper>
            </Grid>

            <Grid item md={6} xs={12}>
              <Paper className={gridclasses.paper}>
                <h4 className="black-text">Last Name</h4>

                <TextField
                  type="text"
                  name="lastname"
                  fullWidth
                  value={lastname}
                  required
                  onChange={(event) => setlastName(event.target.value)}
                />
              </Paper>
            </Grid>

            <Grid item md={6} xs={12}>
              <Paper className={gridclasses.paper}>
                <h4 className="black-text">Full Address</h4>
                <TextField
                  type="text"
                  name="address"
                  fullWidth
                  placeholder="1234 Fake St. Denver, CO 80204"
                  value={address}
                  required
                  onChange={(event) => setAddress(event.target.value)}
                />
              </Paper>
            </Grid>

            <Grid item md={6} xs={12}>
              <Paper className={gridclasses.paper}>
                <h4 className="black-text">Email</h4>
                <TextField
                  type="text"
                  fullWidth
                  name="email"
                  autoComplete="username"
                  value={email}
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Paper>
            </Grid>

            <Grid item md={6} xs={12}>
              <Paper className={gridclasses.paper}>
                <h4 className="black-text">Password</h4>
                <TextField
                  type="password"
                  name="password"
                  autoComplete="new-password"
                  value={password}
                  required
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Paper>
            </Grid>

            <Grid item md={6} xs={12}>
              <Paper className={gridclasses.paper}>
                <h4 className="black-text">Phone Number</h4>
                <MaskedInput
                  className={phoneinputclasses.root}
                  mask={[
                    "(",
                    /[1-9]/,
                    /\d/,
                    /\d/,
                    ")",
                    " ",
                    /\d/,
                    /\d/,
                    /\d/,
                    "-",
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  placeholderChar={"\u2000"}
                  showMask
                  value={phone}
                  required
                  onChange={(event) => setPhone(event.target.value)}
                />
              </Paper>
            </Grid>
          </Grid>
          <div id="recaptchaSection">
            <ReCAPTCHA
              sitekey="6Le0SWUcAAAAANYQw6TwRDGCfiHyzbRkEOTaSp4-"
              onChange={() => setisrecaptchaVerified(true)}
            />
          </div>

          <div className={bttnclasses.root}>
            <Button
              disabled={!isrecaptchaVerified}
              type="submit"
              variant="contained"
              color="primary"
            >
              Register Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default registrationForm;

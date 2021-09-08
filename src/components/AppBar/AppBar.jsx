import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './AppBar.css'
import {useHistory} from 'react-router-dom';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function MenuAppBar() {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  //Bring in user store to verify if user is signed in 
  const user = useSelector((store) => store.user);


  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    dispatch({ type: 'LOGOUT' })
  }


  return (
    <div className={classes.root}>
      <FormGroup>
        
      </FormGroup>
      <AppBar position="fixed">
        <Toolbar>
            
            <Link to ='/' style={{ textDecoration: 'none' }}> <h2 id = "headerid" className="nav-title">iHateCoverLetters</h2></Link>
            <Typography  variant="h1" className={classes.title}></Typography>

        {/* if the user.id is undefined or null, display the following */}
          {user.id == undefined &&
          // If there's no user, show login/registration links
            <Link className="navLink" to="/about">
              About
            </Link>
          } 

          {/* if user is signed in, display the following */}
            {user.id && (
            <div>
              <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                
                  
                <MenuItem onClick={handleClose}>Generate</MenuItem>
                <MenuItem onClick={handleClose}>My Cover Letters</MenuItem>
                <MenuItem onClick={handleClose}>My Account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>



              </Menu>
            </div>
          )}
          </Toolbar>
      </AppBar>
    </div>
  );
}
export default MenuAppBar;

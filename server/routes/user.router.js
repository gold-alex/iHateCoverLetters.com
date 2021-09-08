const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const address = req.body.address;
  const phone = req.body.phone;

  const queryText = `INSERT INTO "user" (email, password, first_name, last_name, address, phone_number)
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING id;`;
  pool
    .query(queryText, [username, password, firstname, lastname, address, phone])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

// Handles PUT for updating user ADDRESS
router.put('/updateaddress', (req, res, next) => {
  let address = req.body.address;
  let userid = req.body.userid;

  const queryText = `UPDATE "user" SET "address" = $1 WHERE "id" = $2;`;
  pool
    .query(queryText, [address, userid])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Address update failed: ', err);
      res.sendStatus(500);
    });
});

// Handles PUT for updating user PHONE
router.put('/updatephone', (req, res, next) => {
  let phone = req.body.phone;
  let userid = req.body.userid;

  const queryText = `UPDATE "user" SET "phone_number" = $1 WHERE "id" = $2;`;
  pool
    .query(queryText, [phone, userid])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('Address update failed: ', err);
      res.sendStatus(500);
    });
});


// Handles login form authenticate/login POST
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;

// Requirements 
const router = require('express').Router();

// Getting the model
let User = require('../models/user.model');

// First route (Get Request)
router.route('/').get((req, res) => {
    //mongoose methos that will get all the users with the find() method.
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Adding user Route
router.route('/add').post((req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});



module.exports = router;
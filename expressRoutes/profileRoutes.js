// profileRoutes.js

const express = require('express');
const profileRoutes = express.Router();

// Require Item model in our routes module
const Profile = require('../models/Profile');

// Defined store route
profileRoutes.route('/add').post(function (req, res) {
  var profile = new Profile(req.body);
   profile.save()
    .then(item => {
    res.status(200).json({'Profile': 'Profile added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
profileRoutes.route('/').get(function (req, res) {
   Profile.find(function (err, profile){
    if(err){
      console.log(err);
    }
    else {
      res.json(profiles);
    }
  });
});

// Defined edit route
profileRoutes.route('/edit/:id').get(function (req, res) {
  var id = req.params.id;
  Profile.findById(id, function (err, profile){
      res.json(profile);
  });
});

//  Defined update route
profileRoutes.route('/update/:id').post(function (req, res) {
   Profile.findById(req.params.id, function(err, profile) {
    if (!coin)
      return next(new Error('Could not load Document'));
    else {
      profile.firstname = req.body.firstname;
      profile.lastname = req.body.lastname;
      profile.email = req.body.email;

      profile.save().then(profile => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
profileRoutes.route('/delete/:id').get(function (req, res) {
   Profile.findByIdAndRemove({_id: req.params.id}, function(err, profile){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = profileRoutes;

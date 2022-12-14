const express = require('express');
const router = express.Router();
const passport = require('passport');

require('dotenv').config();



router.get('/linkedin', passport.authenticate('linkedin', { scope: ['r_emailaddress', 'r_liteprofile'] }));

router.get('/linkedin/callback', 
  passport.authenticate('linkedin', { failureRedirect: '/login' }),
  function(req, res) {
    res.redirect('http://localhost:3000/profile');
  });

router.get('/profile', (req, res) => {
  if (req.user === undefined) 
    return res.status(401).json({ message: 'Unauthorized' });
  res.status(200).json(req.user);
});

router.get('/logout', (req, res) => {
  req.logout((error) => {
      if (error) {
        return res.status(500).json({message: "Server error, please try again later", error: error});
      }
      res.redirect('http://localhost:3000/profile');
  });
});

router.get('/success-callback', (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(401).json({ message: 'User is not logged in' });
  }
});

module.exports = router;
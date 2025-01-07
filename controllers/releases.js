const express = require('express');
const router = express.Router();
const Release =require("../models/release")

// GET /releases/new - Show form to add a new release
router.get('/new', (req, res) => {
  res.render('releases/new.ejs', { title: 'Add Release' });
});

// POST /releases - Add releases / tracklisting
router.post('/', async (req, res) => {
    req.body.artistId = req.user._id;  
    await Release.create(req.body)
  res.redirect('/'); // Redirect back 
});

// GET /dashboard - Display track releases
router.get('/dashboard', (req, res) => {
  res.render('dashboard', { releases, title: 'My Dashboard' });
});

module.exports = router;
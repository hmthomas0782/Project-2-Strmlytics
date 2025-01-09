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

// GET /show - List releases
router.get('/', async (req, res) => {
try{


    // Find the updated list of releases
    const releases = await Release.find({}); // Assuming you have a method to fetch all releases

    // Render the dashboard with updated data
    res.render('show', { releases, title: 'My Releases' });
  } catch (error) {
    console.error('Error in GET / route:', error.message);
    res.status(500).send('An error occurred while processing your request.');
  }
});

//PUT /


module.exports = router;
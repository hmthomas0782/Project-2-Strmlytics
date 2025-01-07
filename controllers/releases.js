const express = require('express');
const router = express.Router();

// GET /releases/new - Show form to add a new release
router.get('/new', (req, res) => {
  res.render('releases/new.ejs', { title: 'Add Release' });
});

// POST /releases - Add releases / tracklisting
router.post('/', (req, res) => {
  const { title, artist, date, type } = req.body;
  releases.push({ title, artist, date, type });
  res.redirect('/dashboard'); // Redirect back 
});

// GET /dashboard - Display track releases
router.get('/dashboard', (req, res) => {
  res.render('dashboard', { releases, title: 'My Dashboard' });
});

module.exports = router;
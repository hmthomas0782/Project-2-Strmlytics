// middleware/ensure-signed-in.js
module.exports = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect('/auth/sign-in'); // Redirect to sign-in page if not signed in
  }
  next(); // middleware or route handler
};

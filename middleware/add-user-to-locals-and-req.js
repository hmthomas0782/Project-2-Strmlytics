// /middleware/add-user-to-locals.js
module.exports = (req, res, next) => {
  res.locals.currentUser = req.session ? req.session.userId || null : null;
  next();
};

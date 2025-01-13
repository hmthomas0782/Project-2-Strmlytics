module.exports = (req, res, next) => {
  if (!req.session.userId) {
    return res.redirect("/auth/sign-in");
  }
  next();
};

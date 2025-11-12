const express = require('express');
const router = express.Router();
const User = require('../model/user.js');
const Event = require('../model/event.js');
const passport = require('passport');
const { saveRedirectUrl, isLoggedIn } = require('../middleware.js');

router.get('/signup', (req, res) => {
    res.render('./users/signup.ejs');
});

router.post('/signup', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        let newUser = new User({ email, username });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err)=> {
          if(err) {
            return next(err);
          
          } 
          req.flash('success', 'Welcome to Collegia!');
          res.redirect('/events');
        })

    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/signup');
    }
});

router.get('/login', (req, res) => {
    res.render('./users/login.ejs');
});

router.post(
  '/login',
  saveRedirectUrl,  
  passport.authenticate('local', {
    failureRedirect: '/login',
    failureFlash: true,
  }),
  (req, res) => {
    req.flash('success', 'Welcome back to Collegia!');
    const redirectUrl = res.locals.redirectUrl || '/events';
    res.redirect(redirectUrl);
  }
);

router.get('/logout', (req,res)=>{
  req.logout((err)=>{
    if(err) {
      next(err);
    }
    req.flash('success','You are logged out!');
    res.redirect('/events');
  })
})

router.get('/profile', isLoggedIn, async (req, res) => {
    const userId = res.locals.currentUser._id;

    // find user
    const user = await User.findById(userId);

    // find events created by user
    const createdEvents = await Event.find({ owner: userId });

    // find events user joined (optional)
    // const joinedEvents = await Event.find({ participants: userId });

    res.render('users/profile.ejs', { user, createdEvents });
});

router.get('/profile/edit', isLoggedIn, async (req, res) => {
    const user = await User.findById(req.user._id);
    res.render('users/editProfile', { user });
});

router.post('/profile/edit', async (req, res) => {
    const { username, dob, phone, profileImage, bio } = req.body;

    await User.findByIdAndUpdate(req.user._id, {
        username,
        dob,
        phone,
        profileImage,
        bio 
    });

    req.flash('success', 'Profile updated!');
    res.redirect('/profile');
});

module.exports = router;

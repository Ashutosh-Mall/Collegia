const Event = require('./model/event.js');

module.exports.isLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
      req.session.redirectUrl = req.originalUrl;
      req.flash('error','You must be logged in to creat new event!')
      return res.redirect('/login');
   }
   next();
}

module.exports.saveRedirectUrl = (req, res, next) => {
   if(req.session.redirectUrl) {
      res.locals.redirectUrl = req.session.redirectUrl;
   }
   next();
}

module.exports.isOwner = async (req, res, next) => {
    const { id } = req.params;
    const event = await Event.findById(id);

    if (!res.locals.currentUser) {
        req.flash('error', 'You must be logged in.');
        return res.redirect('/login');
    }
    
    if (!event.owner.equals(res.locals.currentUser._id)) {
        req.flash('error', "You don't have permission to do that");
        return res.redirect(`/events/${id}`);
    }

    next();
};

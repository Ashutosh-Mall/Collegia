const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const methodOverride = require('method-override');
const eventsRouter = require('./route/event.js');
const feedbacksRouter = require('./route/feedback.js');
const usersRouter = require('./route/user.js');
const ejsMate = require('ejs-mate');
const expressSession = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./model/user.js');


const app = express();
const mongoose_URL = 'mongodb://127.0.0.1:27017/collegia';

app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'));


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(methodOverride("_method"));
app.engine('ejs', ejsMate);

async function main() {
    await mongoose.connect(mongoose_URL);
};
main().catch(err => console.log(err));


const sessionOption = {
  secret: "apm!@#123",
  resave : false,
  saveUninitialized : true,
  cookie : {
    expires : Date.now + 1000*60*60*24*3,
    httpOnly: true, 
    maxAge: 1000*60*60*24*3
  }
}

app.use(expressSession(sessionOption));
app.use(flash());

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currentUser = req.user;
  next();
});


// root
app.get('/',(req,res)=>{
   res.render('./events/home.ejs');
});

app.use('/events',eventsRouter);
app.use('/events/:id/feedbacks',feedbacksRouter);
app.use('/',usersRouter);

const  port = 8080;
app.listen(port, () => {
  console.log(`http://localhost:${port}/`)
  console.log('Server running on port 8080');
});
const express = require('express');
const router = express.Router();
const Event = require('../model/event.js');
const {isLoggedIn, isOwner} = require('../middleware.js');

// All events
router.get('/', async (req,res)=>{
    const listOfEvent = await Event.find();
    res.render('./events/index.ejs',{listOfEvent});
});

// Category filter
router.get('/category', async (req, res) => {
  const { type } = req.query;
  const events = await Event.find({ category: type });
  res.render('./events/category.ejs', { events , type});
});

// Search events
router.get('/search',async (req,res)=>{   
   const {q} = req.query;
   console.log("Search query:", q);

   const events = await Event.find({ $or: [ 
         { category: { $regex: q , $options : 'i'} }, 
         { title: { $regex: q , $options : 'i'} }, 
         { tag : {$regex : q ,$options : 'i'} },  
      ] 
   });
   const type = q.charAt(0).toUpperCase() + q.slice(1);
   res.render('./events/category.ejs', { events , type});
});

// Delete event
router.delete('/:id',
   isLoggedIn,
   isOwner,
   async(req,res)=>{
   await Event.findByIdAndDelete(req.params.id);
   req.flash('success', 'Event deleted successfully!');
   res.redirect('/events');
});

// Create event form
router.get('/new', isLoggedIn, (req,res)=>{
   res.render('./events/new.ejs');
});

// Save new event
router.post('/', isLoggedIn, async(req,res)=>{
   const newEvent = new Event(req.body.event);
   newEvent.owner = req.user._id;
   await newEvent.save();
   req.flash('success', 'New Event Created!');
   res.redirect('/events');
});

// Event details
router.get('/:id', async(req,res)=>{
   const event = await Event.findById(req.params.id)
   .populate('feedbacks')
   .populate('owner');
   res.render('./events/show.ejs',{event});
});

// Edit event form
router.get('/:id/edit',
   isLoggedIn,
   isOwner,
   async (req,res)=>{
   const event = await Event.findById(req.params.id);
   res.render('./events/edit.ejs',{event});
});

// Update event
router.put('/:id',
   isLoggedIn,
   isOwner,
   async (req,res)=>{
   await Event.findByIdAndUpdate(req.params.id, req.body.event, { new: true, runValidators: true });
   req.flash('success', 'Event Updated!');
   res.redirect(`/events/${req.params.id}`);
});

module.exports = router;

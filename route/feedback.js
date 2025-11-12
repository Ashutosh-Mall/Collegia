const express = require('express');
const router = express.Router({ mergeParams: true });


const Event = require('../model/event.js');
const Feedback = require('../model/feedback.js');

router.post('/comment', async (req,res)=>{
   let {id} = req.params;
   let newFeedback = new Feedback(req.body.feedback);
   let event = await Event.findById(id);
   event.feedbacks.push(newFeedback);
   await newFeedback.save();
   await event.save();
   req.flash('success', 'New review added successfully!');
   res.redirect(`/events/${id}#comment`);
});

router.delete('/:fId', async (req,res)=>{
   let {id , fId} = req.params;
   await Event.findByIdAndUpdate(id, {$pull : {
            feedbacks : fId
   }});
   await Feedback.findByIdAndDelete(fId);
   req.flash('success', 'Review Deleted Successfully');
   res.redirect(`/events/${id}`);
});



module.exports = router;
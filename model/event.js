const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: [
            'Tech',         
            'Cultural',     
            'Sports',        
            'Non-Cultural',  
            'Seminar',      
            'Webinar',      
            'Entrepreneurship', 
            'Networking',   
            'Workshop',     
            'Competition',              
            'Other'
        ],
        default: 'Other'
    },
    organizer: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    time: {
        type: String // "10:00 AM - 1:00 PM" format
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    feedbacks: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Feedback' 
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    maxParticipants: {
        type: Number,
        default: 100
    },
    createdAt: {
        type: Date,
        default: Date.now

    },
    // isPublic: {
    //     type: Boolean,
    //     default: true
    // },
    tags: [String],
});

eventSchema.post('findOneAndDelete', async(e)=>{
    if(e>0) {
        await Feedback.deleteMany({_id :
        {$in : e.feedbacks} 
    });
    }
});

module.exports = mongoose.model('Event', eventSchema);

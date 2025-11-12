const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    dob: Date, 
    phone: String,
    bio: String,
    avatar:{
        type: String,
        default :'https://kycaml.guide/wp-content/uploads/2023/08/belal-mahmoud-kycaml.png'
    }
});
userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', userSchema);

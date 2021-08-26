const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    user_email: {
      type: String,
      required: true,
      unique: true,
    },
    user_password: {
      type: String,
      required: true,
    },
    user_name: {
      type: String,
      required: true,
      unique: true,
    },
    user_gender: String,
    user_age: String,
    user_position: String,
    user_language: Array,
  },{ 
		versionKey: false 
	}
);

const User = mongoose.model('users', userSchema);
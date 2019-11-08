const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const taskSchema = new Schema({
  title: String,
  description: {
    type: String,
    default: ''
  },
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
}, {timestamps: true});

taskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });

module.exports = mongoose.model('Task', taskSchema);
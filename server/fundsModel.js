var mongoose = require('mongoose');

var FundsSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  current$: Number,
  desired: Number
});

FundsSchema.pre('save', function(next) {
  this.cash = 0;
  next();
});

module.exports = mongoose.model('Funds', FundsSchema);


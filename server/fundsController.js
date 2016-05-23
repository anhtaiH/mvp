var FundsModel = require('./fundsModel');

var addFund = function(userFundInfo) {

  var newFund = new FundsModel({
    name: userFundInfo.name,
    current$: userFundInfo.current$,
    cash: userFundInfo.cash
  });

  newFund.save(function(err, result) {
    if (err) {
      console.log('Error saving the fund to database ===>', err);
    } else {
      console.log('Fund saved to database! ===>', result);
    }
  });
};

var fetchFunds = function(callback) {
  FundsModel.find({}, function(err, result) {
    if (err) {
      console.log('Error fetching the funds from database! ===>', err);
    } else {
      console.log('Funds retrieved from the database!', result);
      callback(result);
    }
  });
};

module.exports = {
  addFund: addFund,
  fetchFunds: fetchFunds
};

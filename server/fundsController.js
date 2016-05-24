var FundsModel = require('./fundsModel');

var addFund = function(userFundInfo, res) {

  var newFund = new FundsModel({
    name: userFundInfo.name,
    current$: userFundInfo.current$,
    desired: userFundInfo.desired
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

var deleteFunds = function() {
  FundsModel.find({}, function(err, result) {
    if (err) {
      console.log('Error deleting the funds from database (fundscontroller route) ===>', err);
    } else {
      console.log('Data successfully deleted from database (routes) ===>', result);
    }
  }).remove({});
}

module.exports = {
  addFund: addFund,
  fetchFunds: fetchFunds
  // deleteFunds: deleteFunds
};

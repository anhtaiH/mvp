var fundsController = require('./fundsController');


var getHomePage = function(req, res) {
  res.render('../../app/index');
};

var populateSavedAllocation = function(req, res) {
  fundsController.fetchFunds(function(data) {
    res.send(data);
  });
};

var saveAllocation = function (req, res) {
  console.log('Incoming post data.... saving allocation to data base', JSON.stringify(req.body));
  fundsController.addFund(req.body);
  res.send('Funds have been added');
};

var clearData = function(req, res) {
  console.log('Deleting the data now...', req.body);
  fundsController.deleteFunds();
  res.send('Funds have been cleared');
}

module.exports = {
  getHomePage: getHomePage,
  populateSavedAllocation: populateSavedAllocation,
  saveAllocation: saveAllocation,
  clearData: clearData
};

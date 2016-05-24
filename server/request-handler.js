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
  fundsController.addFund(req.body, res);
};

module.exports = {
  getHomePage: getHomePage,
  populateSavedAllocation: populateSavedAllocation,
  saveAllocation: saveAllocation
};

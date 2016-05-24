var fundsController = require('./fundsController');
var userController = require('./userController');


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
};

var saveUser = function(req, res) {
  console.log('Saving user from handler', req.body);
  userController.addUser(req.body, function(data) {
    res.send(data);
  });
};

var loginUser = function(req, res) {
  userController.loginUser(req.body, function(data) {
    res.send(data);
  });
}

module.exports = {
  getHomePage: getHomePage,
  populateSavedAllocation: populateSavedAllocation,
  saveAllocation: saveAllocation,
  clearData: clearData,
  saveUser: saveUser,
  loginUser: loginUser
};

var handler = require('./request-handler');

module.exports = function (app, express) {
  app.get('/', handler.getHomePage);
  app.get('/allocation', handler.populateSavedAllocation);
  app;post('/save', handler.saveAllocation);
};

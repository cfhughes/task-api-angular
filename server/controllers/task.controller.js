const Task = require('mongoose').model('Task');
const errorHandler = require('./concerns/error-handler');

module.exports = {
  index(request, response) {
    Task.find()
      .then(tasks => response.json(tasks))
      .catch(err=> response.json(err));
  },
  show(request, response) {
    Task.findById(request.params.id)
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  create(request, response) {
    Task.create(request.body)
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  update(request, response) {
    Task.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(task => response.json(task))
      .catch(errorHandler.bind(response));
  },
  destroy(request, response) {
    Task.findByIdAndRemove(request.params.id)
      .then(result => response.json(result))
      .catch(errorHandler.bind(response));
  },
};
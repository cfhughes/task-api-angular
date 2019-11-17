const Task = require('mongoose').model('Task');

module.exports = {
  index(request, response) {
    Task.find()
      .then(tasks => response.json(tasks))
      .catch(err=> response.json(err));
  },
  show(request, response) {
    Task.findById(request.params.id)
      .then(task => response.json(task))
      .catch(err => res.json(err));
  },
  create(request, response) {
    Task.create(request.body)
      .then(task => response.json(task))
      .catch(err => res.json(err));
  },
  update(request, response) {
    Task.findByIdAndUpdate(request.params.id, request.body, { new: true })
      .then(task => response.json(task))
      .catch(err => res.json(err));
  },
  destroy(request, response) {
    Task.findByIdAndRemove(request.params.id)
      .then(result => response.json(result))
      .catch(err => res.json(err));
  },
};
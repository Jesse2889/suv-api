const Car = require('../models/car')

function index(req, res) {
  Car
    .find()
    .then(foundCars => res.status(200).json(foundCars))
    .catch(err => res.json(err))
}
function create(req, res) {
  Car
    .create(req.body)
    .then(createdCar => res.status(201).json(createdCar))
    .catch(err => res.json(err))
}
function show(req, res) {
  Car
    .findById(req.params.id)
    .then(car => { 
      if (!car) return res.status(404).json({ message: 'Not Found ' })
      res.status(202).json(car)
    })
    .catch(err => res.json(err))
}
function update(req, res) {
  Car
    .findById(req.params.id) 
    .then(car => {
      if (!car) return res.status(404).json({ message: 'Not Found ' }) 
      Object.assign(car, req.body) 
      return car.save() 
    })
    .then(updatedCar => res.status(202).json(updatedCar)) 
    .catch(err => res.json(err))
}
function destroy(req, res) {
  Car
    .findByIdAndDelete(req.params.id)
    .then(() => res.sendStatus(204))
    .catch(err => res.json(err))
}
module.exports = { index, create, show,  update, destroy }
// Requirements
const router = require("express").Router();

// Getting the model
let Pet = require("../models/pet.model");

// Gets all the pets with the mongoose find() method
router.route("/").get((req, res) => {
  Pet.find()
    .then(pets => res.json(pets))
    .catch(err => res.status(400).json("Error: " + err));
});

// adding pet to the db
router.route("/add").post((req, res) => {
  const petname = req.body.petname;
  const description = req.body.description;
  const age = Number(req.body.age);
  const date = Date.parse(req.body.date);
  const available = req.body.available;
  const breed = req.body.breed;

  // takes the variables above and createsa new pet wth them.
  const newPet = new Pet({
    petname,
    description,
    age,
    date,
    available,
    breed
  });

  newPet
    .save()
    .then(() => res.json("Pet added!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// Get a single Pet with id
router.route("/:id").get((req, res) => {
  Pet.findById(req.params.id)
    .then(pet => res.json(pet))
    .catch(err => res.status(400).json("Error: " + err));
});

// delete Pet elements with matching id
router.route("/:id").delete((req, res) => {
  Pet.findByIdAndDelete(req.params.id)
    .then(() => res.json("Pet deleted!"))
    .catch(err => res.status(400).json("Error: " + err));
});

// Update an existing pete
router.route("/update/:id").post((req, res) => {
  Pet.findById(req.params.id)
    .then(pet => {
      pet.petname = req.body.petname;
      pet.description = req.body.description;
      pet.age = Number(req.body.age);
      pet.date = Date.parse(req.body.date);
      pet.available = req.body.available;
      pet.breed = req.body.breed;

      pet
        .save()
        .then(() => res.json("Pet Updated!"))
        .catch(err => res.status(400).json("Error: " + err));
    })
    .catch(err => res.status(400).json("Error: " + err));
});

// Exporting the router
module.exports = router;

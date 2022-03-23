const { body, validationResult } = require("express-validator");
const Hobbies = require("../models/hobbies");
const getHobbies = (req, res) => {
  Hobbies.find((err, hobbies_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(hobbies_list);
    }
  });
};
const createHobby = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.json({ status: 0, debug_data: errors });
  } else {
    console.log(req.body);
    let { name, description, date_of_creation } = req.body;
    let hobbiesObject = new Hobbies({ name, description, date_of_creation });
    hobbiesObject.save((error) => {
      if (error) {
        res.json(error);
      } else {
        res.json({ status: "Adding hobbies details" });
      }
    });
  }
};
const deleteHobby = (req, res) => {
  Hobbies.findByIdAndDelete(req.params.id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json({
        status: `Hobby details with id as ${req.params.id} is removed`,
      });
    }
  });
};
module.exports = { getHobbies, createHobby, deleteHobby };

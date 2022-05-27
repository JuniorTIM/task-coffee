const drinkOne = require("../models/drinkOne");

module.exports.drinkController = {
  getDrinks: (req, res) => {
    drinkOne
      .find({})
      .select("_id name price")
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },

  getDrinksById: (req, res) => {
    drinkOne
      .findById(req.params.id)
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        console.log(e);
      });
  },

  postDrinks: (req, res) => {
    drinkOne
      .create({
        name: req.body.name,
        price: req.body.price,
        amount: req.body.amount,
        coffein: req.body.coffein,
        size: req.body.size,
        text: req.body.text,
        drinkOneId: req.body.drinkOneId,
      })
      .then(() => {
        res.json("Напиток добавлен");
      })
      .catch((e) => {
        console.log(e);
      });
  },
  deleteDrink: (req, res) => {
    drinkOne
      .findByIdAndRemove(req.params.id)
      .then(() => {
        res.json("Напиток удален");
      })
      .catch((e) => {
        console.log(e);
      });
  },
  patchDrinks: (req, res) => {
    drinkOne
      .findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        price: req.body.price,
        amount: req.body.amount,
        coffein: req.body.coffein,
        size: req.body.size,
        text: req.body.text,
        drinkOneId: req.body.drinkOneId,
      })
      .then(() => {
        res.json("Напиток изменен");
      })
      .catch((e) => {
        console.log(e);
      });
  },

  getDrinksStock: (req, res) => {
    drinkOne
      .find({ amount: { $gt: 0 } })
      .then((data) => {
        res.json(data);
      })
      .catch((e) => {
        res.json(e);
      });
  },
};

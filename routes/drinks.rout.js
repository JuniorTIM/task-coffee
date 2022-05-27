const { Router } = require("express");
const { drinkController } = require("../controllers/drinks.controller");

const router = Router();

router.get("/drinks", drinkController.getDrinks);
router.get("/drinks/:id", drinkController.getDrinksById);
router.get("/drinks/in-stock/stock", drinkController.getDrinksStock);
router.post("/drinks", drinkController.postDrinks);
router.delete("/drinks/:id", drinkController.deleteDrink);
router.patch("/drinks/:id", drinkController.patchDrinks);

module.exports = router;
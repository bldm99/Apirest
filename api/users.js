const UserController = require('../controllers/users');
const express = require('express');
const User = require('../models/User');

const router = express.Router();
/*router.get("/all", UserController.findAllUsers);*/

router.get("/ver", UserController.Contar);
router.get("/todo", UserController.findAllUsers);

router.get("/:id", UserController.findById);

router.post("/add", UserController.addUser);

router.delete("/:id", UserController.Eliminar);

/*db.detalle.aggregate([ {"$group" : {_id:{producto:"$producto"}, count:{$sum:1}}} ]) */


module.exports = router;


const mongoose = require('mongoose');

const User = require('../models/User.js');

const findAllUsers = (req ,res) => {
    User.find((err, users) => {
        err && res.status(500).send(err.message);
        res.status(200).json(users);
    });
};


const findById = (req, res) => {

    User.findById(req.params.id , (err , user) => {
        err && res.status(500).send(err.message);

        res.status(200).json(user);

    });
};

const addUser = (req ,res) => {
    let user = new User ({
        nombre: req.body.nombre,
        pais: req.body.pais,
        producto: req.body.producto,
        precio: req.body.precio
        
    });

    user.save((err, usr) => {

        err && res.status(500).send(err.message);

        res.status(200).json(usr);
    });
};

/* db.detalle.aggregate([ {"$group" : {_id:{producto:"$producto"}, count:{$sum:1}}} ])*/

const Contar = (req ,res) => {
    User.aggregate([ {$group : {_id:{producto:"$producto"}, count:{$sum:1}}} ],(err, u) => {
        err && res.status(500).send(err.message);
        res.status(200).json(u); 
        });
};
const C = (req ,res) => {
    User.find((err, users) => {
        err && res.status(500).send(err.message);
        res.status(200).json(users);
    });
};

const Eliminar = async(req, res) => {

    await User.findByIdAndDelete(req.params.id);
    res.json({message:"eliminado"})
};



module.exports = { findAllUsers , findById , addUser ,Contar , C, Eliminar};
/*module.exports = { findAllUsers };*/
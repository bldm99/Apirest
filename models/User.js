const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    nombre:{ type: String},
    apellido:{ type: String},
    pais:{ type: String},
    producto:{ type: String},
    precio:{ type: String}
    
 

});

module.exports = User = mongoose.model('detalle',UserSchema);
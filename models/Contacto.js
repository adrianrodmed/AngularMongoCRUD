var mongoose = require('mongoose');
var ContactoSchema = new mongoose.Schema({
   // id: int,
    email: String,
    fecha: String,
    comentarios: String,

   // updated_date: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model('Contacto', ContactoSchema);
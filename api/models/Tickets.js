/** @format */

const mongoose = require("mongoose");
const TicketsSchema = mongoose.Schema({
  nombre: String,
  email: String,
  telefono: Number,
  asunto: String,
  mensaje: String,
});

//mongoose.model() acepta dos parametros, el nombre del Schema y el Schema como tal, en este caso, ticketsSchema

module.exports = mongoose.model("Tickets", TicketsSchema);

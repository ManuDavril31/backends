/** @format */

import mongoose from "mongoose";

const ticketsSchema = mongoose.Schema({
  nombre: String,
  email: String,
  telefono: Number,
  asunto: String,
  mensaje: String,
});

//mongoose.model() acepta dos parametros, el nombre del Schema y el Schema como tal, en este caso, ticketsSchema

export default mongoose.model("tickets", ticketsSchema);

/** @format */

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const port = 5500;

const mongoURL = `mongodb+srv://ManuDB:sododado451@cluster0.2lrgv.mongodb.net/tickets?retryWrites=true&w=majority`;

mongoose.connect(mongoURL, {
  //userNewUrlParser: true,
  //useUnifiedTopology: true,
});

//middleware, ejecutar respuesta como archivo jSON
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/tickets", require("./routes/ticket.route.js"));

// app.post("/api/tickets", (req, res) => {
//   let ticketsData = req.body;
//   let mongoTiket = [];
//   ticketsData.forEach((ticket) => {
//     mongoTiket.push({
//       nombre: ticket.nombre,
//       email: ticket.email,
//       telefono: ticket.telefono,
//       asunto: ticket.asunto,
//       mensaje: ticket.mensaje,
//     });
//     Tickets.create(mongoTiket, (err, records) => {
//       if (err) {
//         res.status(500).send(err);
//       } else {
//         res.status(200).send(records);
//       }
//     });
//   });
//   // Tickets.create(req.body, (err, records) => {
//   //   if (err) {
//   //     res.status(500).send(err);
//   //   } else {
//   //     res.status(200).send(records);
//   //   }
//   // });
//   res.send("You have posted something");
// });

// app.get("/", (req, res) => {
//   res.json(res);
// });

//este listen admite dos parametros, el primero es el puerto, el segundo es una colback function
app.listen(port, () => {
  console.log(`Server lisen is the port ${port}`);
});

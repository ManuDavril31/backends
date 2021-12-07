/** @format */
const express = require("express");
const router = express.Router();
const Ticket = require("../api/models/Tickets.js");

router.get("/", async (req, res) => {
  const tickets = await Ticket.find();
  console.log(tickets);
  res.json(tickets);
});

// mascotaRoute.route("/agregar").post((req, res, next) => {
//   MascotaModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

router.post("/", (req, res) => {
  console.log(req.body);
  Ticket.create(req.body, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
  // res.json("Recibido");
});

module.exports = router;

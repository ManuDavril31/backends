/** @format */
const express = require("express");
const router = express.Router();
const Ticket = require("../api/models/Tickets.js");

router.get("/", async (req, res) => {
  const tickets = await Ticket.find();
  console.log(tickets);
  res.json(tickets);
});

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

//OBTENER TICKET POR ID

router.get("/:id", async (req, res) => {
  Ticket.findById(req.params.id, (error, data) => {
    if (error) {
      console.log(error);
    } else {
      res.json(data);
      console.log(data);
    }
  });
});

module.exports = router;

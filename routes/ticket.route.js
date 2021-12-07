/** @format */
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    status: "La API esta funcionanado",
  });
});

// let TicketsModelo = require("../api/models/Tickets.js");

// ticketsRoute.route("/tickets").post((req, res) => {
//   TicketsModelo.create(req.body, (error, data) => {
//     if (error) {
//       console.log(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// AGREGAR

// mascotaRoute.route("/agregar").post((req, res, next) => {
//   MascotaModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

//OBTENER INDIVIDUO

// mascotaRoute.route("/individuo/:id").get((req, res) => {
//   MascotaModel.findById(req.params.id, (error, data, next) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// api reserva

// mascotaRoute.route("/").get((req, res) => {
//   ReservaModel.find((error, data, next) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// mascotaRoute.route("/reserva/:id").post((req, res, next) => {
//   ReservaModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// register

// mascotaRoute.route("/register").post((req, res, next) => {
//   ReservaModel.create(req.body, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// Student model

// studentRoute.route("/").get((req, res) => {
//   StudentModel.find((error, data, next) => {
//     if (error) {
//       return next(error);
//     } else {
//       console.log(error);
//       res.json(data);
//     }
//   });
// });

// studentRoute.route("/edit-student/:id").get((req, res) => {
//   StudentModel.findById(req.params.id, (error, data, next) => {
//     if (error) {
//       console.log(error);
//       return next(error);
//     } else {
//       res.json(data);
//     }
//   });
// });

// // Update student
// studentRoute.route("/update-student/:id").put((req, res, next) => {
//   StudentModel.findByIdAndUpdate(
//     req.params.id,
//     {
//       $set: req.body,
//     },
//     (error, data) => {
//       if (error) {
//         console.log(error);
//         return next(error);
//       } else {
//         res.json(data);
//         console.log("Student successfully updated!");
//       }
//     }
//   );
// });

// // Delete student
// studentRoute.route("/delete-student/:id").delete((req, res, next) => {
//   StudentModel.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return next(error);
//     } else {
//       res.status(200).json({
//         msg: data,
//       });
//     }
//   });
// });

//module.exports = studentRoute;
module.exports = router;

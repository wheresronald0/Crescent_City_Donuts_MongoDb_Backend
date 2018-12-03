const express = require("express");
const router = express.Router();
const Customer = require("../models/index.js");

//index route
router.route("/").get((req, res) => {
  Customer.find((err, customers) => {
    if (err) {
      console.log(err);
    } else {
      res.json(customers);
    }
  });
});

//create route
router.route("/").post((req, res) => {
  const customer = new Customer(req.body);
  customer.save().then(customer => {
    res.json("customer was added!");
  });
});

//show route
router.route("/:id").get((req, res) => {
  Customer.findById(req.params.id, (err, aCustomer) => {
    if (err) {
      console.log(err);
    } else {
      res.json(aCustomer);
    }
  });
});

//edit route (not sure we need to define here)
//update route
router.route("/:id").put((req, res) => {
  Customer.findByIdAndUpdate(req.params.id, req.body, (err, aCustomer) => {
    if (err) {
      console.log(err);
    } else {
      res.json(aCustomer);
    }
  });
});

//destroy route
router.route("/:id").delete((req, res) => {
  Customer.findByIdAndRemove(req.params.id, (err, deleteCustomer) => {
    if (err) {
      console.log(err);
    } else {
      res.json(deleteCustomer);
    }
  });
});

module.exports = router;

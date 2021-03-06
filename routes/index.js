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
    res.json(customer);
  });
});

//show route
router.route("/:keyword").get((req, res) => {
  Customer.find(
    {
      $or: [
        { firstName: req.params.keyword },
        { lastName: req.params.keyword },
        { state: req.params.keyword },
        { email: req.params.keyword }
      ]
    },
    (err, aCustomer) => {
      if (err) {
        console.log(err);
      } else {
        res.json(aCustomer);
      }
    }
  );
});

//update route
router.route("/:_id").put((req, res) => {
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

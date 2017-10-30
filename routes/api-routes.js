// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// grab the orm from the config
// (remember: connection.js -> orm.js -> route file)
// var orm = require("../config/orm.js");
var db = require("./../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the burgers
  app.get("/api/burgers", function(req, res) {
    db.Burger.findAll({}).then(function(results) {
      
      res.json(results);
    });
    // orm.getburgers(function(results) {
      // res.json(results);
    // });
  });

  // POST route for saving a new Burger. We can create a Burger using the data on req.body
  app.post("/api/burgers", function(req, res) {
    // orm.addBurger(req.body, function(results) {
    //   res.json(results);
    console.log(req.body);
    db.Burger.create({
      burger_name: req.body.burger_name,
      devoured: req.body.devoured
    }).then(function(results) {
      res.json(results);
    })
    // });
  });

  // DELETE route for deleting burgers. We can access the ID of the Burger to delete in
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    // orm.deleteBurger(req.params.id, function(results) {
    //   res.json(results);
    // });
    db.Burger.destroy({
      where : {
        id :req.params.id
      }
      }).then(function(results) {
        res.json(results);
      });
  });

  // PUT route for updating burgers. We can access the updated Burger in req.body
  app.put("/api/burgers", function(req, res) {
    // orm.editBurger(req.body, function(results) {
    //   res.json(results);
    // });
    db.Burger.update(
      {burger_name: req.body.burger_name,
        devoured: req.body.devoured
      }, {where : {
        id: req.body.id
      }
    }
    ).then(function(results) {
      res.json(results);
    })
  });
};

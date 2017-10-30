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
    db.Todo.findAll({}).then(function(results) {
      
      res.json(results);
    });
    // orm.getburgers(function(results) {
      // res.json(results);
    // });
  });

  // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/burgers", function(req, res) {
    // orm.addTodo(req.body, function(results) {
    //   res.json(results);
    console.log(req.body);
    db.Todo.create({
      text: req.body.text,
      devoured: req.body.devoured
    }).then(function(results) {
      res.json(results);
    })
    // });
  });

  // DELETE route for deleting burgers. We can access the ID of the todo to delete in
  // req.params.id
  app.delete("/api/burgers/:id", function(req, res) {
    // orm.deleteTodo(req.params.id, function(results) {
    //   res.json(results);
    // });
    db.Todo.destroy({
      where : {
        id :req.params.id
      }
      }).then(function(results) {
        res.json(results);
      });
  });

  // PUT route for updating burgers. We can access the updated todo in req.body
  app.put("/api/burgers", function(req, res) {
    // orm.editTodo(req.body, function(results) {
    //   res.json(results);
    // });
    db.Todo.update(
      {text: req.body.text,
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

const route = require('express').Router();

const authorization = require('../auth/auth');
const users = require('../controllers/userController.js');

// unrestricted routes
route.post("/register", users.register);
route.post("/login", users.login);
route.get("/:id", users.getUser);

// restricted routes
route.get("/all", authorization, users.getUsers);       // Get all users
//route.put("/:id", authorization, users.updateUser);     // Update specific user
route.delete("/:id", authorization, users.deleteUser);  // Remove specific user


module.exports = route;
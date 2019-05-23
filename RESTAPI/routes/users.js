const route = require('express').Router();

const authorization = require('../auth/auth');
const users = require('../controllers/userController.js');

// unrestricted routes
route.post("/register", users.register);
route.post("/login", users.login);
route.get("/:id", users.getUser);
route.put("/update/:id", users.updateUser); 

// restricted routes
//route.get("/all", authorization, users.getUsers);       // Get all users
    // Update specific user
//route.delete("/:id", authorization, users.deleteUser);  // Remove specific user


module.exports = route;
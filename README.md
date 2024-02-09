**Welcome to the backend repository of our e-commerce website! This repository contains the server-side code responsible for handling API requests, managing database operations, and implementing authentication for our e-commerce platform.**

**Technologies Used**:

_Node.js_: JavaScript runtime for building server-side applications.
_Express.js_: Web application framework for Node.js used to build robust APIs.
_MongoDB_: NoSQL database used to store product information, user data, orders, etc.
_Mongoose_: MongoDB object modeling tool for Node.js used to simplify interactions with MongoDB.
_JSON Web Tokens (JWT)_: Used for secure authentication and authorization of API requests.
_bcrypt_: Library for hashing passwords to enhance security.
_Express-async-handler_: Middleware for handling asynchronous functions in Express routes.

**Project Structure**:

config/: Contains configuration files such as database connection settings, JWT secret, etc.
controllers/: Contains the controllers for handling various API endpoints and business logic.
middlewares/: Contains custom middleware functions used in the API routes.
models/: Defines Mongoose models for different data entities such as users, products, carts, orders, etc.
routes/: Defines API routes and connects them to corresponding controller functions.
utils/: Contains utility functions used across the application.

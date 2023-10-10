# BE-Sichere-Benutzerregistrierung-und-Login

## What you will do

In this exercise task, you will develop a Node.js application to implement a simple user registration and login functionality. You will use the express-generator tool (without view engine) to initialize the project. You will use MongoDB as the database.

## Tasks

### Task 1: Initialize project

Use the express-generator tool to create a new express project without a view engine. Name the project "user-authentication". Be sure to use the `--no-view` option to dispense with a view engine.

### Task 2: Install dependencies

Navigate to the project directory and install the required dependencies. Make sure you are using the latest versions of express, mongoose and bcrypt.

### Task 3: Connect MongoDB

Open the `app.js` file in the root directory of the project. Import mongoose into this file and connect to the MongoDB database. Check if the connection was established successfully.

### Task 4: Create user schema and model

Create a `user.schema.js` file and define the user schema in it with the required fields: Username, Email address and Password. Use mongoose for this.

Create another file `user.model.js` and import the user schema. Create the user model using the schema.

### Task 5: Implement registration routes

Create a POST route `/users/signup` that allows users to register. The route should get username, email address and password as request parameters. Implement validation of the input data and store the user in the database. Use bcrypt to hash the password before storing it in the database.

### Task 6: Implement login routes

Create a POST route `/users/login` that will allow users to log in. The route should get username and password as request parameters. Check the entered credentials against the data stored in the database and return a success message if the credentials are correct or an error message if they are incorrect.

## Notes

- Be sure to organize the code into modules and follow best practices for code structuring.
- You can consult the official documentation of express-generator, express, mongoose, and bcrypt for more information on usage and implementation.
- Use appropriate middleware to validate the request parameters and establish the database connection.

Good luck implementing user registration and login functionality in your Node.js application!

var express = require('express');
var router = express.Router()

//validation
const { validationInputs } = require("../middleware/validation")
const { userValidationRule } = require("../lib/validation/userRules")

const {
  httpCreateUser,
  httpAuthenticateUser,
} = require("../controller/user.controller");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', validationInputs(userValidationRule), httpCreateUser);

router.post('/login', httpAuthenticateUser);

module.exports = router;

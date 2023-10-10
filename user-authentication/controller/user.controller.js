const { 
    createUser ,
    authenticateUser,
} = require("../model/user.model")

async function httpCreateUser(req, res, next) {
    try {
        const userData = req.body
        const newUser = await createUser(userData)
        res.json(newUser);
    } catch (error) {
        next(error);
    }
}

async function httpAuthenticateUser(req, res, next){
    try {
        const userData = req.body
        const user = await authenticateUser(userData)
    
        if(!user){
            const error = new Error("Invalid username or password")
            error.statusCode = 400
            throw error
        }
    
        res.json( {
                   Message: "Login successful", 
                   User: user.username 
                })

    } catch (error) {
        next(error);
    }
   
}

module.exports = {
    httpCreateUser,
    httpAuthenticateUser,
}
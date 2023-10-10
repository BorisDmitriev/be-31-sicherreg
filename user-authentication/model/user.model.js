const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const { userSchema } = require("./user.schema")

const User = mongoose.model("User", userSchema)


async function createUser(userData){
    // userData.password = await bcrypt.hash( userData.password, 10 )
    return User.create(userData)
}

async function authenticateUser( { username, password } ){
    const user = await User.findOne( {username} )

    if(!user){
        return null
    }

    const isPasswordValid = await user.authenticate(password)

    if(!isPasswordValid){
        return null
    }

    return user
}


module.exports = { createUser, authenticateUser }

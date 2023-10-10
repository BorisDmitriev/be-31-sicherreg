const mongoose = require("mongoose")
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
})

userSchema.pre( "save", async function(next){
    const user = this
    
    if(user.isModified('password')){
        user.password = await bcrypt.hash( user.password, 10 )
    }

    next()
} )


userSchema.methods.authenticate = async function(password){
    const user = this
    return await bcrypt.compare(password, user.password)
}


module.exports = { userSchema }
const mongoose = require("mongoose")
const gameSchema = mongoose.Schema({
    gamename: String,
    playername: String,
    score: Number
})
module.exports = mongoose.model("game",gameSchema)

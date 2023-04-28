const mongoose = require ("mongoose")
const gameSchema = mongoose.Schema( {
    gamename:  {type: String, min: 1, max: 50},
    playername: {type: String, min:1,  max:50},
    score:   {type: Number, min:1, max: 2000}
    
})

module.exports = mongoose.model ("game", gameSchema)
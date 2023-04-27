const mongoose = require ("mongoose")
const gameSchema = mongoose.Schema( {
    gamename:  {type: String, minlength: 1, maxlength: 50},
    playername: {type: String, minlength:1,  maxlength:50},
    score:   {type: Number, minlength:1, maxlength: 2000}
    
})

module.exports = mongoose.model ("game", gameSchema)
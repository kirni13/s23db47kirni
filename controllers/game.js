var game = require('../models/game');
// List of all Costumes
exports.game_list = function(req, res) {
 res.send('NOT IMPLEMENTED: game list');
};
// for a specific Costume.
exports.game_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: game detail: ' + req.params.id);
};
// Handle Costume create on POST.
exports.game_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: game create POST');
};
// Handle Costume delete form on DELETE.
exports.game_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: game delete DELETE ' + req.params.id);
};
// Handle Costume update form on PUT.
exports.game_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: game update PUT' + req.params.id);
};

// List of all game
exports.game_list = async function(req, res) {
    try{
    thegame = await game.find();
    res.send(thegame);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };

   // VIEWS
// Handle a show all view
exports.game_view_all_Page = async function(req, res) {
    try{
    thegame = await game.find();
    res.render('game', { title: 'game Search Results', results: thegame });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
   // Handle Costume create on POST.
exports.game_create_post = async function(req, res) {
    console.log(req.body)
    let document = new game();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.gamename = req.body.gamename;
    document.playername = req.body.playername;
    document.score = req.body.score;

    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };
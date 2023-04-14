var game = require('../models/game');
// List of all games
exports.game_list = function(req, res) {
 res.send('NOT IMPLEMENTED: game list');
};
// for a specific game.
exports.game_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: game detail: ' + req.params.id);
};
// Handle game create on POST.
exports.game_create_post = function(req, res) {
 res.send('NOT IMPLEMENTED: game create POST');
};
// Handle game delete form on DELETE.
// exports.game_delete = function(req, res) {
//  res.send('NOT IMPLEMENTED: game delete DELETE ' + req.params.id);
// };
// Handle game update form on PUT.
// exports.game_update_put = function(req, res) {
//  res.send('NOT IMPLEMENTED: game update PUT' + req.params.id);
// };
exports.game_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await game.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
   exports.game_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await game.findById( req.params.id)
    // Do updates of properties
    if(req.body.game_type)
    toUpdate.gamename = req.body.gamename;
    if(req.body.playername) toUpdate.playername = req.body.playername;
    if(req.body.score) toUpdate.score = req.body.score;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
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
   // Handle game create on POST.
exports.game_create_post = async function(req, res) {
    console.log(req.body)
    let document = new game();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"game_type":"goat", "cost":12, "size":"large"}
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
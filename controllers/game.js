var game = require('../models/game');
// List of all games
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

// Handle Costume create on POST.
exports.game_create_post = async function(req, res) {
    console.log(req.body)
    let document = new game();
   
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
// Handle game create on POST.
exports.game_detail = async function(req, res) {
    try{
        thegame = await game.find();
        res.send(thegame);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
//res.send('NOT IMPLEMENTED: game create POST');
};


// Handle game delete on DELETE.
exports.game_delete = async function(req, res) {
console.log("delete " + req.params.id)
try {
result = await game.findByIdAndDelete( req.params.id)
console.log("Removed " + result)
res.send(result)
} catch (error) {
console.log(error);
res.status(500)
res.send(`{"error": Error deleting ${error}}`);
}
};
    // Handle a delete one view with id from query
    exports.game_delete_Page = async function(req, res) {
        console.log("Delete view for id " + req.query.id)
        try{
        result = await game.findById(req.query.id)
        res.render('gamedelete', { title: 'game Delete', toShow:
        result });
        }
        catch(error){
        console.log(error)        
        res.status(500)
        res.send(`{'error': '${error}'}`);
        }
        };

// Handle a show one view with id specified by query
exports.game_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await game.findById( req.query.id)
res.render('gamedetail',
{ title: 'game Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};


exports.game_create_Page = function(req, res) {
console.log("create view")
try{
res.render('gamecreate', { title: 'game Create'});
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle game update form on PUT.
exports.game_update_put = async function(req, res) {
    try{
        thegame = await game.find();
        res.send(thegame);
        }
        catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
        }
// res.send('NOT IMPLEMENTED: game update PUT' + req.params.id);
};

// Handle Costume update form on PUT.
exports.game_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
try {
let toUpdate = await game.findById( req.params.id)
// Do updates of properties
if(req.body.gamename)toUpdate.gamename = req.body.gamename;
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
res.render('game', { title: 'games Search Results', results: thegame });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};

// Handle building the view for updating a costume.
// query provides the id
exports.game_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await game.findById(req.query.id)
    res.render('gameupdate', { title: 'game Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };



// for a specific Costume.
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
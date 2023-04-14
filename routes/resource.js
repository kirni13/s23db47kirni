var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var game_controller = require('../controllers/game');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/game', game_controller.game_create_post);
// DELETE request to delete Costume.
//router.delete('/game/:id', game_controller.game_delete);
// PUT request to update Costume.
router.put('/game/:id', game_controller.game_update_put);
// GET request for one Costume.
router.get('/game/:id', game_controller.game_detail);
// GET request for list of all Costume items.
router.get('/game', game_controller.game_list);
module.exports = router;
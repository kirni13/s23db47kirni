var express = require('express');
var router = express.Router();

const game_controlers = require('../controllers/game');
/* GET games */
router.get('/', game_controlers.game_view_all_Page);
router.get('/game/:id', game_controlers.game_detail);

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    req.session.returnTo = req.originalUrl;
    res.redirect("/login");
}
module.exports = router;
/* GET detail game page */
router.get('/detail', secured, game_controlers.game_view_one_Page);
/* GET create game page */
router.get('/create', secured, game_controlers.game_create_Page);
/* GET create update page */
router.get('/update', secured, game_controlers.game_update_Page);
/* GET delete game page */
router.get('/delete', secured, game_controlers.game_delete_Page);
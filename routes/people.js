const { index, show, here } = require('../controllers/people');
module.exports = router => {
    router.get('/', index);
    router.get('/people', show);
    router.get('/people/:id', here);
    return router;
};
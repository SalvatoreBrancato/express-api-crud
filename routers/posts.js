const express = require ('express');
const router = express.Router();
const postsController = require('../controllers/postsController')


router.post('/post', postsController.create)
router.get('/post', postsController.showAll)
router.get('/post/:slug', postsController.show)
//filtrare per:
// Post pubblicati.
// Post che contengono una determinata parola nel titolo o nel contenuto.
router.put('/post/:slug', postsController.update)
router.delete('/post/:slug', postsController.destroy)




module.exports = router

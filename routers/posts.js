const express = require ('express');
const router = express.Router();
const postsController = require('../controllers/postsController')


router.post('/post', postsController.create)
router.get('/posts/:slug', postsController.show)
router.put('/post/:slug', postsController.update)
router.delete('/post/:slug', postsController.destroy)

// GET /posts/:slug per recuperare un post utilizzando il suo slug.
// GET /posts per recuperare tutti i post presenti nel database, con la possibilità di filtrare per:
// Post pubblicati.
// Post che contengono una determinata parola nel titolo o nel contenuto.
// PUT /posts/:slug per aggiornare un post.
// DELETE /posts/:slug per eliminare un post.

module.exports = router

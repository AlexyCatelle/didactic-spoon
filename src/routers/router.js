import express from 'express';
import playlistRouter from './playlistRouter.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});


router.use('/playlists', playlistRouter);

export default router;
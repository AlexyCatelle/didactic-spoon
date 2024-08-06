import express from 'express';
import { getAllPlaylists, getPlaylist, addPlaylist } from '../controllers/playlistController.js';
const playlistRouter = express.Router();

playlistRouter.get('/', getAllPlaylists);
playlistRouter.get('/:id', getPlaylist);
playlistRouter.post('/', addPlaylist);


export default playlistRouter;
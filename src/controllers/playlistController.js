import Song from "../models/Song.js";
import Playlist from "../models/Playlist.js";
const getAllPlaylists = async (req, res) => {
    const playlists = await Playlist.findAll();
    res.render('playlists/index', { playlists: playlists });
};

const getPlaylist = async (req, res) => {
    const id = req.params.id;
    const songs = await Song.findAllByPlaylistId(id);
    res.render('playlists/show', { songs: songs });
};

const addPlaylist = async (req, res) => {
    const playlist = new Playlist(req.body);
    await playlist.save();
    res.redirect('/playlists/' + playlist.id)
};

export { getAllPlaylists, getPlaylist, addPlaylist };
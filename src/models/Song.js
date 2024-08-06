import validator from "validator";
import client from "../../db/database.js";

export default class Song {
    #id;
    #title;
    #link;
    #playlist_id;

    constructor(config) {
        this.id = config.id;
        this.title = config.title;
        this.link = config.link;
        this.playlist_id = config.playlist_id;
    }
    ;

    // GETTER

    get id() {
        return this.#id;
    };

    get title() {
        return this.#title;
    };

    get link() {
        return this.#link;
    };

    get playlist_id() {
        return this.#playlist_id;
    };

    // SETTER

    set id(value) {
        if (typeof value !== 'number' && typeof value !== 'undefined') {
            throw new Error('Id incorrect');
        }
        this.#id = value;
    };

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Titre incorrect');
        }
        this.#title = value.trim();

    };

    set link(value) {
        if (!validator.isURL(value)) {
            throw new Error('Adresse incorrecte');
        }
        this.#link = value;
    };

    set playlist_id(value) {
        if (typeof value !== 'number' && typeof value !== 'undefined') {
            throw new Error('Id playlist incorrect');
        }
        this.#playlist_id = value;
    };

    // METHOD CRUD

    // READ

    // Récupère toutes les chansons d'une playlist
    static async findAllByPlaylistId(id) {
        try {
            const text = `SELECT * FROM "song" WHERE "playlist_id" = $1;`;
            const values = [id];
            const result = await client.query(text, values);
            const songs = result.rows;
            const songsObj = [];
            for (const song of songs) {
                songsObj.push(new Song(song))
            };
            return songsObj;
        }
        catch (error) {
            console.error(error);
        }
    };

    // Récupère toutes les chansons avec leur nom de playlist
    static async findAllWithPlaylistName() {
        try {
            const text = `SELECT * FROM "song" JOIN "playlist" ON "song"."playlist_id"="playlist"."id";`
            const result = await client.query(text);
            const songs = result.rows;
            const songsObj = [];
            for (const song of songs) {
                songsObj.push(new Song(song))
            };
            return songsObj;
        }
        catch (error) {
            console.error(error);
        }
    };

    // CREATE
    // Ajoute une chanson à une playlist
    async addSongToPlaylist() {
        try {
            const text = `INSERT INTO "song" ("title", "link", "playlist_id") VALUES ($1,$2,$3) RETURNING id;`;
            const values = [this.title, this.link, this.#playlist_id];
            const result = await client.query(text, values);
            this.#id = result.rows[0].id;
        }
        catch (error) {
            console.log(error)
        }
    };
}
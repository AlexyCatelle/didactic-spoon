import client from "../../db/database.js";

export default class Playlist {
    #id;
    #name;

    constructor(config) {
        this.id = config.id;
        this.name = config.name;
    };

    //getter 
    get id() {
        return this.#id;
    };

    get name() {
        return this.#name;
    };

    //setter
    set id(value) {
        if (typeof value !== 'number' && typeof value !== 'undefined') {
            throw new Error('Id incorrect');
        }
        this.#id = value;
    };

    set name(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('nom incorrect');
        }
        this.#name = value.trim();
    };

    //method CRUD

    // READ
    static async findAll() {
        const result = await client.query(`SELECT * FROM "playlist" ORDER BY "id";`);
        const playlists = result.rows;
        const playlistsObj = [];
        for (const playlist of playlists) {
            playlistsObj.push(new Playlist(playlist));
        }
        return playlistsObj;
    };

    // CREATE
    async save() {
        const text = `INSERT INTO "playlist" ("name") VALUES ($1) RETURNING id;`;
        const values = [this.name];
        const result = await client.query(text, values);
        this.#id = result.rows[0].id;
    };

    // DELETE

    // UPDATE

};
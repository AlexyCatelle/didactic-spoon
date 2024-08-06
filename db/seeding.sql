BEGIN;
TRUNCATE "song";
INSERT INTO "song" ("title", "link", "playlist_id")
VALUES
('Majorie','http://open.spotify.com/intl-fr/track/12ntTeqEeTg7GAVpe8Mhpl?si=fc2d102d71104459',1),
('You''re loosing me','http://open.spotify.com/intl-fr/track/3CWq0pAKKTWb0K4yiglDc4?si=e2b88b658fea4cb8',2),
('The Archer','http://open.spotify.com/intl-fr/track/3pHkh7d0lzM2AldUtz2x37?si=208b4f8421ee4d23',1);
COMMIT;
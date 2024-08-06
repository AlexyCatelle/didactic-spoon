// ON charge express et le router
import express from 'express';
import dotenv  from 'dotenv';
dotenv.config();
import router from './src/routers/router.js';


//on configure express
const app = express();
//SOit le port est configuré dans le fichier .env soit il utilisera le port 3000 par defaut
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs')
app.set('views', './src/views');

//ON dirige les routes de fichiers statiques dans public
app.use(express.static('public'));

// Ce middleware permet d'accéder a req.body dans les controller liés à des route utilisant la méthdoe post
app.use(express.urlencoded({extended: true}));

// ON envoi toutes nos requêtes dans un router qui s'occupera de leurs dire quoi faire
app.use(router);

//on écoute sur le port configuré
app.listen(PORT, () => console.log(`Le serveur est lancé et écoute sur le port : http://localhost:${PORT}`));
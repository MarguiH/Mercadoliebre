const express= require ('express');

const path = require ('path')
const app = express ()

const publicPath = path.resolve(__dirname, "./public"); 

// ruta de archivos estaticos. 
app.use (express.static (publicPath)); 
app.use(express.urlencoded()); // para que traiga el codigo del body


app.get ("/", (req, res) => {res.sendFile (__dirname + "/views/home.html")} ) 

app.get ("/register", (req, res) => {res.sendFile (__dirname + "/views/register.html")} )
app.post ("/register", (req, res)=> { res.redirect ('/')}) //vuelve al directorio raiz de registro

app.get ("/login", (req, res) => {res.sendFile (__dirname + "/views/login.html")} )
app.post ("/login", (req, res)=> { res.redirect ('/')}) // vuelve al directorio raiz del login

app.get ("/regmoli", (req, res) => {res.sendFile (__dirname + "/views/regmoli.html")} )

// .get para escuchar cuando se solicitan datos, req, res. res.sendfile 
//envio a ruta raiz de archvo html
app.listen (process.env.PORT || 5000 , () => { console.log ("levantaste el servior");}); 
// metodo listen
// para que el servidor escuche peticiones , se ejecuta un callback cuando el servidor este levantado 
//correctamente, esto sale por la terminal.

//se usa nodemon para cuando corremos nodemon app.js trae mas informacion, sino tenes permisos se agrega 
//script en el package.json.

// para instalarlo por unica vez npm install -g nodemon  (nodemon es un monitor que si detecta un cambio lo 
//reinicia. para no reinicira a mano el servidor todo el tiempo)

//levanto el servidor con nodemon app.js

// npm run y el nombre del scipt start.
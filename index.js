const express = require('express')
const serveIndex = require('serve-index')
const app = express()

const port = process.env.PORT;
if(!port){
	console.log("Port not defined.  Example: PORT=12345 node index.js")
	process.exit();
}

const bodyParser = require('body-parser');
var jsonParser = bodyParser.json({limit: '50mb' })
app.use(jsonParser);

app.use('', express.static('public', { 'index': false }), serveIndex('public', { 'icons': true }))

app.all('/set', function(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    bot = req.query || req.body;
    console.log(bot)
    res.send(JSON.stringify(bot));
});

app.listen(port, () => console.log(`Server listening at https://math.seattleacademy.org/${port} or http://math.seattleacademy.org:${port}`))

const express = require('express')
const app = express()

const port = process.env.PORT;
if(!port){
	console.log("Port not defined.  Example: PORT=12345 node index.js")
	process.exit();
}

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening at https://math.seattleacademy.org/${port}`))

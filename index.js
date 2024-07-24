//  import required modules from nodejs and build the server

// export the server

const express = require('express');
const fs = require('fs');
const validatorfunction = require('./middlewares/validator');
const app = express();
app.use(express.json());
const PORT = 8080;

app.post("/", validatorfunction, (req, res) => {
	const resTxt = res.locals.resTxt;
	fs.appendFileSync('res.txt', `data received\n${resTxt}`);
	res.status(200).send(`data received\n${resTxt}`);
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`)
})

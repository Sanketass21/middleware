const fs = require("fs");

// make the validator function and export it.
const validatorfunction = (req, res, next) => {
	const { ID, Name, Rating, Description, Genre, Cast } = req.body;
	let resTxt = "";

	if (typeof ID !== "number") {
		resTxt += "bad request.some data is incorrect.\n"
		fs.appendFileSync("res.txt", resTxt);
		return res.status(400).send(resTxt);
	} else {
		resTxt += "ID is a number\n"
	}

	if (typeof Name !== "string" && /\d/.test(Name)) {
		resTxt += "bad request.some data is incorrect.\n"
		fs.appendFileSync("res.txt", resTxt);
		return res.status(400).send(resTxt);
	} else {
		resTxt += "Name is a string\n"
	}

	if (typeof Description !== "string") {
		resTxt += "bad request.some data is incorrect.\n"
		fs.appendFileSync("res.txt", resTxt)
		return res.status(400).send(resTxt);
	} else {
		resTxt += "Description is a string\n"
	}

	if (typeof Rating !== "number") {
		resTxt += "bad request.some data is incorrect.\n"
		fs.appendFileSync("res.txt", resTxt)
		return res.status(400).send(resTxt)
	} else {
		resTxt += "Rating is a number\n"
	}

	if (typeof Genre !== "string") {
		resTxt += "bad request.some data is incorrect.\n"
		fs.appendFileSync("res.txt", resTxt)
		return res.status(400).send(resTxt)
	} else {
		resTxt += "Genre is a string\n"
	}

	if (!Array.isArray(Cast) || !Cast.every(c => typeof c === "string")) {
		resTxt += "bad request.some data is incorrect.\n"
		fs.appendFileSync("res.txt", resTxt)
		return res.status(400).send(resTxt)
	} else {
		resTxt += "Cast is a array of string\n"
	}

	res.locals.resTxt = resTxt;
	next()
}

module.exports = validatorfunction;

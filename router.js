const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
	const filePath = path.join(__dirname, '/public/routes/index.html');
	res.sendFile(filePath);
});

router.get('/about', (req, res) => {
	const filePath = path.join(__dirname, '/public/routes/about.html');
	res.sendFile(filePath);
});

router.get('/contact', (req, res) => {
	const filePath = path.join(__dirname, '/public/routes/contact.html');
	res.sendFile(filePath);
});

router.get('*', (req, res) => {
	const filePath = path.join(__dirname, '/public/routes/not-found.html');
	res.status(404).sendFile(filePath);
});

module.exports = router;

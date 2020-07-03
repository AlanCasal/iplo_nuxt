const express      = require("express");
const app          = express();
const bodyParser   = require("body-parser");
const {user, pass} = require("./keys");

const nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({extended: true}));

app.post('/send-email', async (req, res) => {
	// return setTimeout(() => res.send("ok"), 2000);
	const {nombre, email, msg} = req.body;

	const transporter = nodemailer.createTransport({
		host  : "smtp.gmail.com",
		port  : 587,
		secure: false,
		auth  : {user, pass},
	});

	const info = await transporter.sendMail({
		from: "'LágrimasBajoTierraI' alan.casal00@gmail.com",
		to: email,
		// to: "lionarstormrage@gmail.com",
		subject: "¡ Tenés un mensaje nuevo !",
		html: `
			<p>NO RESPONDER A ESTE EMAIL</p>
			<br/>
			<p><b>Lágrimas Bajo Tierra I - Iluminados por la Oscuridad</b></p>
			<p>Te enviaron un mensaje desde la página web</p>
			<p>Nombre: <b>${email}</b></p>
			<p>Email: <b>${email}</b></p>
			<p>Mensaje: <br/> ${msg}</p>
		`,
	});

	res.send('ok');
});

export default app;
const express = require("express")

const session = require("express-session")
const KnexSessionStore = require("connect-session-knex")(session)

const usersRouter = require("./users-router")
const db = require("./data/config")

const server = express()
const port = 7000


server.use(express.json())

server.use(session({
	resave: false, 
	saveUninitialized: false, 
	secret: "keep it secret, keep it safe", 
	store: new KnexSessionStore({
		knex: db, 
		createtable: true, 
	}),
}))

server.use(usersRouter)

server.use((err, req, res, next) => {
	console.log(err)
	
	res.status(500).json({
		message: "Something went wrong",
	})
})
server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})

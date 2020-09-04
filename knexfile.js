module.exports = {
	client: "sqlite3",
	useNullAsDefault: true,
	connection: {
		filename: "./database/users.db3",///change this
	},
	migrations: {
		directory: "./migrations",
	},
	seeds: {
		directory: "./database/seeds",//change this
	},
	pool: {
		afterCreate: (conn, done) => {
			conn.run("PRAGMA foreign_keys = ON", done)
		},
	},
}
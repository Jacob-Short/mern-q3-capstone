const mongoose = require("mongoose");
const config = require("config");
const db = config.get("mongoURI");


// connect to mongodb db with mongoose
const connectDB = async () => {
	try {
		// since mongoose.conn returns a promise,
			// we add await in front of it
		await mongoose.connect(db, {
			useNewUrlParser: true,)
		});

		console.log("MongoDB Is Connected...");
	} catch (e) {
		console.log(e.message);

		// exit with failure
		process.exit(1);
	}
};

module.exports = connectDB;

const mysql = require('mysql2/promise');

const is_render = process.env.IS_RENDER || false;

const dbConfigQoddi = {
	host: "sql.freedb.tech",
	user: "freedb_2350_main..",
	password: "svW5VCbNE?gY*q3",
	database: "freedb_comp2350-week5-A01296033",
	multipleStatements: false
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "kevin02gusgh02",
	database: "Local instance 3306",
	multipleStatements: false
};

if (is_render) {
	var database = mysql.createPool(dbConfigQoddi);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		
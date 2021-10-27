/* Amplify Params - DO NOT EDIT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIENDPOINTOUTPUT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIIDOUTPUT
	API_SIMPLETWITTERCLONE_GRAPHQLAPIKEYOUTPUT
	AUTH_SIMPLETWITTERCLONEB1022521_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */

const mysql = require("mysql");
const config = require("./config.json");

const connection = mysql.createConnection({
    host: config.dbhost,
    user: config.dbuser,
    password: config.dbpassword,
    database: config.dbname
})

exports.handler = (event, context, callback) => {
    // TODO implement
    console.log('event', event);
    console.log('context', context);
    connection.query("SHOW Tables", (error, results, fields) => {
        if (error) {
            connection.destroy();
            console.log('Error occured: ' + error.stack);
            callback(error);
        } else {
            console.log('Connected to database and executed query');
            console.log(results);
            callback(null, results);
            connection.end((err) => {
                // connection ended
                if (err) console.log('error while closing:' + err.message );
                console.log('Database connection closed');
            });
        }
    })
};

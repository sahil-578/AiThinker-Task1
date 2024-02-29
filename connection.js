// const mysql = require('mysql2');

// require('dotenv').config()

// var mySqlConnection = mysql.createConnection({
//     host: process.env.MYSQL_HOST,
//     user: process.env.MYSQL_USER ,
//     password: process.env.MYSQL_PASSWORD,
//     database: process.env.MYSQL_DATABASE
// });

// mySqlConnection.connect((err) => {
//     if(err){
//         console.log("error in Db connection" + JSON.stringify(err, undefined, 2));
//     }
//     else {
//         console.log("Db connection successfull");
//     }
// })

// module.exports = mySqlConnection;
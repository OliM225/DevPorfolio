const mysql = require("mysql");
const database = mysql.createConnection({
    host:"https://phpmyadmin.cluster051.hosting.ovh.net/index.php",
    user:"oliviez86",
    password:"781227mmoV",
    database:"oliviz86",
});
database.connect(err =>{
    if(err){
        console.log("error")
    }
    else{
        console.log("success")
    }
});

module.exports = database
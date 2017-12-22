/**
 * Created by mle29 on 7/1/2017.
 */
"use strict";

function dbConfig() {
    const sqlite3 = {
        dbName: "iposDB",
        dbUser: "",
        dbPwd: "",
        dbOptions: {
            dialect: "sqlite",
            storage: "database/auth.db"
        }
    };

    return sqlite3;
}

function server() {
    const config = {
        privateKeyPath : "resources/sslcert/localhost.key",
        certificatePath: "resources/sslcert/localhost.crt",
        enableSSL: false
    };

    return config;
}

/*==========================================================*/
module.exports = {
    db: dbConfig(),
    server: server(),
};
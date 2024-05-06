const mysql = require('mysql');
const {DatabaseModel} = require("./DatabaseModel");

class MySqlService extends DatabaseModel {

    _allItems;
    #connection;
    #config;

    constructor (database) {
        super();
        this.#config = {
            host: "db",
            user: "root",
            password: "root",
            database
        };

    }

    createConnection() {
        this.#connection = mysql.createConnection(this.#config);
    }

    createTable(tableName, options) {
        const createTableSqlCommand = `CREATE TABLE ${tableName} (${options.map(option => `${option.name} ${option.type} ${option?.notNull ? 'NOT NULL' : ''} ${option?.autoIncrement ? 'AUTO_INCREMENT' : ''} ${option?.primaryKey ? ' PRIMARY KEY': ''}`).join(',')})`
        this.#connection.query(createTableSqlCommand, function (err, result)  {
            if(err) console.log(err);
        });
    }

    createItem(tableName, item) {
        const createItemSqlCommand = `INSERT INTO ${tableName}(${Object.keys(item).join(',')}) values(${Object.values(item).map(value => `'${value}'`).join(',')})`

        this.#connection.query(createItemSqlCommand, function (err)  {
            if(err) console.log(err);
            console.log("User created");
        });
    }

    findAll(tableName) {
        const selectAllSqlCommand = `SELECT * FROM ${tableName}`;

        return new Promise((resolve, reject) => {
            this.#connection.query(selectAllSqlCommand, (err, result) => {
                if(err) {
                    console.log(err);
                    reject(err);
                } else {
                    this._allItems = result;
                    resolve(result);
                }
            });
        });
    }

    get allItems() {
        return this._allItems ?? [];
    }

    end() {
        this.#connection.end();
    }
}

module.exports = {MySqlService};
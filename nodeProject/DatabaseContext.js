const {DatabaseModel} = require("./Database/DatabaseModel");

class DatabaseContext extends DatabaseModel {

    #context;

    constructor(context) {
        super();
        this.#context = context;
    }

    createConnection() {
        this.#context.createConnection();
    }

    createTable(tableName, options) {
        this.#context.createTable(tableName, options);
    }

    createItem(tableName, item) {
        this.#context.createItem(tableName, item);
    }

    async findAll(tableName) {
        await this.#context.findAll(tableName);
    }

    get allItems() {
        return this.#context.allItems;
    }
}

module.exports = {DatabaseContext};
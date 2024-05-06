const express = require('express');
const mysql = require('mysql');
const {MySqlService} = require("./Database/MySqlService");
const {DatabaseContext} = require("./DatabaseContext");

const app = express();
const PORT = 3000;

const database = 'nodenginxdb';
const table = 'people';

const MySqlDb = new MySqlService(database);

const dbMySqlContext = new DatabaseContext(MySqlDb);



async function prepareTable() {
    dbMySqlContext.createConnection();
    dbMySqlContext.createTable(table, [
        {name: 'id', type: 'INT', notNull: true, autoIncrement: true, primaryKey: true},
        {name: 'name', type: 'VARCHAR(255)'}
    ]);

    dbMySqlContext.createItem(table, {name: 'Júnior Nunes'});
    await dbMySqlContext.findAll(table);
}



app.get("/", async (req, res) => {
    await prepareTable();

    const users = dbMySqlContext.allItems;

    const usersList = `<ul>
        ${users.map(item => `<li><strong>Nome:</strong> ${item.name}</li>`)}
    </ul>`.replaceAll(',', '');


    res.send(`
        <div>
            <h1>Full Cycle!</h1>
            <h2>Desafio Docker</h2>
            ${usersList ?? 'Nenhum usuário cadastrado'}
        </div>
    `);

    dbMySqlContext.end();
});

app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server is running on port ${PORT}`);
});
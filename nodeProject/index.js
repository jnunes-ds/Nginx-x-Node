const express = require('express');

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send(`
        <div>
        <h1>Full Cycle!</h1>
        <h2>Desafio Docker</h2>
        </div>
    `);
});

app.listen(PORT, '0.0.0.0',() => {
    console.log(`Server is running on port ${PORT}`);
});
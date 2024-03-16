import express from 'express';
import {pool} from './con_db.js';
import {PORT} from './config.js';
const app = express();

app.get('/', async (req, res) =>  {
    const result = await pool.query(`SELECT * FROM usuarios`);
    res.json(result)
});

app.get('/ping', async (req, res) =>  {
    const [result] = await pool.query(`SELECT "HELLO WORLD" as RESULT`);
    console.log(result[0]);
    res.json(result[0]);
});

app.get('/insert', async (req, res) => {
    const result = await pool.query(`INSERT INTO usuarios(nombre) VALUES ("Diego")`);
    res.json(result);
});

app.listen(3300);

console.log('Server on port ', PORT);
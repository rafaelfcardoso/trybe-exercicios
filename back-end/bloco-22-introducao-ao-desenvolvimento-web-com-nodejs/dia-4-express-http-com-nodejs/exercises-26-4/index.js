const express = require('express');
const bodyParser = require('body-parser');

// const rescue = require('express-rescue');
const simpsonsUtils = require('./fs-utils');
/* const authMiddleware = require('./authMiddleware');
const generateToken = require('./generateToken'); */

const app = express();
app.use(bodyParser.json());

/* Rotas */

// implementando rota GET /ping
app.get('/ping', (_req, res) => res.json({ "message": "pong" }));


// implementando rota POST /hello
app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({ "message": `Hello, ${name}!` });
})

// implementando rota POST /greetings
app.post('/greetings', (req, res) => {
  const { name, age } = req.body;

  if (parseInt(age, 10) <= 17) {
    // não esqueça de adicionar o return para impedir de que seu código continue.
    return res.status(401).json({ message: `Unauthorized` });
  }

  return res.status(200).json({ message: `Hello, ${name}!` });
});


// implementando rota PUT /users/:name/:age
app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;

  return res.status(200)
    .json({ "message": `Seu nome é ${name} e você tem ${age} anos de idade` });
})


// SIMPSONS rotas
app.get('/simpsons', async (req, res) => {
  try {
    const simpsons = await simpsonsUtils.getSimpsons();

    return res.status(200).json(simpsons);
  } catch (error) {
    return res.status(500).end();
  }
})



app.listen(3001, () => console.log('ouvindo na porta 3001!'));
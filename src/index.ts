import express from 'express';

const app = express();

app.get('/', (request, response) => {
  console.log('Hello World');
});

app.listen(process.env.port || 3000, () => console.log('App running'));

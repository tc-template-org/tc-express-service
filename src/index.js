import express from 'express';
import { string } from 'tc-utilities';

const app = express();

app.get('/', (req, res) => {
  res.send(string.concat('Hello', ' World!'));
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

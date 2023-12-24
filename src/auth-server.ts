import express from 'express';

import cors from 'cors';
import morgan from 'morgan';

const app = express();
const router = express.Router();

router.use(cors());
router.use(morgan('combined'));

app.get('/users', (req, res) => {
  console.log(req.headers);

  res.send(['user 1']);
});

app.listen(6000, () => {
  console.log('Listen port 6000');
});

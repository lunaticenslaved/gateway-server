import express from 'express';

import cors from 'cors';
import { createProxyMiddleware } from 'http-proxy-middleware';
import morgan from 'morgan';

import { AUTH_SERVER_ADDRESS, PORT } from './constants';

const app = express();
const router = express.Router();

app.use(router);
router.use(cors());
router.use(morgan('combined'));

const authProxy = createProxyMiddleware({
  target: AUTH_SERVER_ADDRESS,
  changeOrigin: true,
  pathRewrite: {
    '^/auth-server': '',
  },
});

router.use('/auth-server', authProxy);

app.listen(PORT, () => {
  console.log('Listen port ' + PORT);
});

import express from 'express';

import { getlogin, postlogin } from '../controllers/login.js';

const router = express.Router();

router.get('/', getlogin);
router.post('/', postlogin);

export default router;
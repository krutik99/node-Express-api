import { Router } from 'express'
import emp from './emp';
import user from './user';

const router = Router();

router.use('/emp', emp);
router.use('/user', user);

export default router;
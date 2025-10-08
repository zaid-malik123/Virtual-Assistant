import express from 'express';
import { getCurrentUser } from '../controller/user.controller.js';
import { isAuth } from '../middleware/IsAuth.js';
const router = express.Router();


router.get("/currUser", isAuth,getCurrentUser)

export default router;
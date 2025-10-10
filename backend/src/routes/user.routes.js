import express from 'express';
import { getCurrentUser, updateAssistant } from '../controller/user.controller.js';
import { isAuth } from '../middleware/IsAuth.js';
import upload from '../middleware/multer.js';
const router = express.Router();


router.get("/currUser", isAuth,getCurrentUser)

router.post("/updateAssistant",upload.single("assistantImage") ,isAuth, updateAssistant )

export default router;
import express from 'express'
import login from "../controllers/authController.js"
import authMiddleware from '../middleware/authMiddleware.js'
import {verify} from '../controllers/authController.js'

const router = express.Router();

router.post("/login", login);
router.get("/verify", authMiddleware, verify)

export default router;
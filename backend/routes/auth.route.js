import { Router } from "express";
const router = Router(); 
import { register } from "../controllers/auth.controller.js";
import {login} from  "../controllers/auth.controller.js";
import {getUserList} from  "../controllers/getUsers.controller.js";
import {authMiddleware} from "../middleware/auth.middleware.js"
router.post('/register', register); 
router.post('/login', login);
router.get("/list", authMiddleware, getUserList); 

export default router; 



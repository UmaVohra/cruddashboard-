import express from 'express';
import { insert ,display,del,edit,signUp,signIn} from '../Controllers/userControllers.js';
import { verifyToken } from '../userMiddleware/middleware.js';

const router=express.Router();
 router.post("/insert",verifyToken,insert);
 router.get("/display",verifyToken,display);
 router.delete("/del/:id",verifyToken,del);
 router.put("/edit/:id",verifyToken,edit);
 router.post("/signup",signUp);
 router.post("/signin",signIn)

 export default router;
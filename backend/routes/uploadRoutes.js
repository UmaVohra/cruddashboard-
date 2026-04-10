import express from "express";
import multer from "multer";
import { uploadImage } from "../Controllers/uploadController.js";
import { verifyToken } from "../userMiddleware/middleware.js";
const router=express.Router();
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+" "+file.originalname);
    }
});
export const upload =multer({storage});
router.post("/image",verifyToken,upload.single("image"),uploadImage,);

export default router;

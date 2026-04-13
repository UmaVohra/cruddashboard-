import express from "express";
import multer from "multer";
import { uploadImage } from "../Controllers/uploadController.js";
import { verifyToken } from "../userMiddleware/middleware.js";

import { editUpload } from "../Controllers/uploadController.js";
const router=express.Router();
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"uploads/");
    },
    filename:(req,file,cb)=>{
        const cleanName = file.originalname.replace(/\s+/g, "_");//\s whitespaces,/g one or more whitespaces, g means globally
        cb(null,Date.now()+"-"+cleanName);
    }
});
export const upload =multer({storage});
router.post("/image",verifyToken,upload.single("image"),uploadImage);//insert image

router.put("/editImg/:id",verifyToken,upload.single("image"),editUpload);//edit image

export default router;

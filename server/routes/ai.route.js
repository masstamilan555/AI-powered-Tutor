import express from"express"
import { summarize } from "../controllers/ai.controller.js"

//multer
import multer from "multer";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./files");
  },
  filename: (req, file, cb) => {
    const uniqSuffix = Date.now();
    cb(null, uniqSuffix + file.originalname);
  },
});
const upload =multer({storage,limits:{
  fileSize: 10 * 1024 * 1024  //10MB limit
},
  
  fileFilter: (req, file, cb) => {
  const allowed = [
    "application/pdf",
    "application/msword",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  ];
  if (allowed.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(new Error("Unsupported file type"));
  }
}})


const router = express.Router()

router.post("/summarize",upload.single("file"),summarize)

export default router
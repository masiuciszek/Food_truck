import multer from "multer";
import { Request } from "express";

const imageFilter = (
  req: Request,
  file: Express.Multer.File,
  cb: multer.FileFilterCallback,
) => {
  const regex = /\.(jpg|jpeg|png)$/;
  if (!file.originalname.match(regex)) {
    return cb(new Error("Only image files are allowed!"));
  }
  cb(null, true);
};

const upload = multer({
  limits: {
    fileSize: 1000000,
  },
  fileFilter: imageFilter,
});

export { upload };

import fs from "fs";
import express, { Express, Request, Response } from "express";
import multer from "multer";
// import { GetClient } from "./s3";

// Database Type ORM
import { AppDataSource } from "./data-source";

// Express App Setup
const app: Express = express();
const port = 3000;
const upload = multer();

//Middlewares

//Routes
app.get("/", (req, res) => {
  fs.readFile("./templates/index.html", function (err, data) {
    if (err != null) {
      return err;
    }

    res.send(data.toString());
  });
});

app.post("/uploads", upload.single("file"), (req, res, next) => {
  let filename: string | undefined = req.file?.originalname;
  let file: Buffer | undefined = req.file?.buffer;
  if (filename == undefined || file == undefined) {
    return res.sendStatus(400);
  }

  // let minioClient = GetClient();

  
  // let file = await selectFileFromDb(filename);
  // file = file.rows[0][0]; //Column that contains the blob content

  // res.setHeader('Content-Length', file.length);
  // res.write(file, 'binary');

  console.log(req.body);

  res.sendStatus(200);
});

// Status
app.get("/status", (req, res) => {
  
  res.send("OK");
});


//Server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import fs from 'fs';
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    //   fs.readFile("./templates/index.html", function (err, data){
    //     if (err != null) {
    //         return err
    //     }
    //     res.send(data.toString());
    //   })
    res.send("Hello World");
});
// app.post('/uploads', (req, res) => {
//     let filename = req.params;
//     // const blob = getFileFromBody(req);
//     // let file = await selectFileFromDb(filename);
//     // file = file.rows[0][0]; //Column that contains the blob content
//     // res.setHeader('Content-Length', file.length);
//     // res.write(file, 'binary');
//     console.log(req.body)
//     console.log(filename)
//     res.sendStatus(200);
//   })
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
// function writeFile(blob){
// }
// function getFileFromBody(req){
//     return req.body.blob()
// }
// function bufferFromBufferString(bufferStr) {
//     return Buffer.from(
//         bufferStr
//             .replace(/[<>]/g, '') // remove < > symbols from str
//             .split(' ') // create an array splitting it by space
//             .slice(1) // remove Buffer word from an array
//             .reduce((acc, val) => 
//                 acc.concat(parseInt(val, 16)), [])  // convert all strings of numbers to hex numbers
//      )
// }

"use strict";

const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const upload = multer(); // for parsing multipart/form-data

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single('upfile'), function(req, res) {
  const {originalname, mimetype, size} = req.file;
  
  res.json({
    name: originalname,
    type: mimetype,
    size: size
  });
});

app.listen(process.env.PORT || 3000, function() {
  console.log("Node.js listening ...");
});

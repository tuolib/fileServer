var express = require("express");
var router = express.Router();
var fs = require("fs");
var path = require("path");

module.exports = app => {
  const apiPre = "/api/file";
  app.get(`${apiPre}/get/:name`, (req, res) => {
    var params = req.params;
    console.log("params", params);
    console.log("query", req.query);
    console.log("ip", req.ip);
    let arr = req.ip.split("::ffff:");
    console.log(arr);
    // if (arr.length == 2 && arr[1] == '192.168.60.20') {
    //   fs.createReadStream(
    //     path.join(__dirname, "../") + "/static/" + params.name
    //   ).pipe(res);
    // }
    try {
      let fileUrl = path.join(__dirname, "../") + "/static/" + params.name;
      if (fs.existsSync(fileUrl)) {
        //file exists
        fs.createReadStream(fileUrl).pipe(res);
      }
    } catch (e) {}
  });
  app.get(`/fileServer/get/:name`, async (req, res) => {
    var params = req.params;
    console.log("params", params);
    console.log("query", req.query);
    console.log("ip", req.ip);
    let arr = req.ip.split("::ffff:");
    console.log(arr);
    // if (arr.length == 2 && arr[1] == '192.168.60.20') {
    //   fs.createReadStream(
    //     path.join(__dirname, "../") + "/static/" + params.name
    //   ).pipe(res);
    // }
    // if (!fs.existsSync(dir)){
    //   fs.mkdirSync(dir);
    // }
    try {
      let fileUrl = path.join(__dirname, "../") + "/static/" + params.name;
      if (fs.existsSync(fileUrl)) {
        //file exists
        fs.createReadStream(fileUrl).pipe(res);
      }
    } catch (e) {}
  });
  app.get(`/getFiles/:name`, async (req, res) => {
    var params = req.params;
    console.log(req.url);
    if (req.url.indexOf('/getFiles/') == 0) {
      if (true) {
        // res.setHeader('X-Accel-Redirect', path.join(__dirname, "../") + "/static/" + '2.jpg');
        // res.end('');
        res.writeHead(200, { 'X-Accel-Redirect': '/files/' + params.name });
        res.end();
      } else {
        // return some error
      }
    } else {
      res.end('works');
    }
    // var params = req.params;
    // console.log("params", params);
    // console.log("query", req.query);
    // console.log("ip", req.ip);
    // let arr = req.ip.split("::ffff:");
    // console.log(arr);
    // // if (arr.length == 2 && arr[1] == '192.168.60.20') {
    // //   fs.createReadStream(
    // //     path.join(__dirname, "../") + "/static/" + params.name
    // //   ).pipe(res);
    // // }
    // // if (!fs.existsSync(dir)){
    // //   fs.mkdirSync(dir);
    // // }
    // try {
    //   let fileUrl = path.join(__dirname, "../") + "/static/" + params.name;
    //   if (fs.existsSync(fileUrl)) {
    //     //file exists
    //     fs.createReadStream(fileUrl).pipe(res);
    //   }
    // } catch (e) {}
  });

  app.post(`${apiPre}/upload`, (req, res) => {});
};

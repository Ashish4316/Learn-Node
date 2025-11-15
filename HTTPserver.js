const http = require("http");

const fs = require("fs");
const url = require("url");

const myServer = http.createServer((req,res) => {
    const log = `${Date.now()} : ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    console.log("Hii");
    fs.appendFile('log.txt', log, (err,data) => {
        console.log("New Req Rec.");
        switch(myUrl.pathname){
            case "/":
                res.end("HomePage");
                break;
            case "/about":
                const username = myUrl.query.myname;
                res.end(`hello ${username}`);
                break;
            default:
                res.end("404 Not Found");   
        }
    })
    console.log("New Req Rec.");
});

myServer.listen(8001, () => console.log("Server Started!"));


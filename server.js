


const data = require("./db.js");

const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(data);
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8081;

server.use(middlewares);
server.use(router);

server.listen(8081, ()=>{
    console.log("connected successfully" )
});
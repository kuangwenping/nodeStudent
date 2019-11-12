let http = require("http");
let url = require("url");

function start(route) {
    function onRequest(request, response) {        
        let pathName = url.parse(request.url).pathname;        
        route(pathName);
        response.writeHead(200, {
            "Content-Type": "text/plain"
        });
        response.write("hello world22")
        response.end()
    }

    http.createServer(onRequest).listen(8888);
    console.log("进入")
}

exports.start = start;
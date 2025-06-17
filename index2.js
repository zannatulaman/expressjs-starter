const http = require("node:http");



const students = [
    {
        name: "Shimu"
    },
    {
        name: "Tanzina"
    }
]

const sendResponse = (res, {statusCode = 200, contentType = 'application/json', response = {} }) => {
    res.writeHead(statusCode, {'Content-Type': contentType});
    res.write(JSON.stringify(response))
    res.end()
}


const server = http.createServer((req, res) => {
    //   console.log('Req', req.url);
       
    if(req.url === "/"){
        // res.writeHead(200, {'Content-Type': 'application/json'});
        // res.write(JSON.stringify({
        //     message: "Successful"
        // }))
        // res.end()
          
         sendResponse(res, {
            response: {
                 message: "Successful"
            }
         })


    }else if(req.url === "/student"){
        // res.writeHead(200, ({'Content-Type': 'application/json'}));
        // res.write(JSON.stringify(students))
        // res.end()

         sendResponse(res, {
            response: (students)
         })
    }else{
         sendResponse(res, {
            statusCode: 400,
             response:{
                message: "Resources not found"
             }
         })
    }

})


const PORT = 5000;

server.listen(PORT, ()=> {
    console.log(`Server is running from ${PORT}`);
})
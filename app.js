//Importamos la libreria que nos permite manipular en http

const http = require('http');
const fs = require('fs');

//Extraemos de la libreria de http el metodo createserver

//response es una estructura de una respuesta default, ya definida en node
http.createServer((request, response)=>{
    const file = request.url == '/' ?
     './WWW/index.html' : `./WWW/${request.url}`;
    fs.readFile(file,(err,data)=>{
        if(err){
            //Mandamos un error 404 de ejemplo, siendo de tipo txt nuestro "archivo" definido en la ultima seccion entre comillas dobles ("text/plain")
            response.writeHead(404,{"Content-Type":"text/plain"});
            response.write("not found"); //Escribimos desde nuestra despuesta el mensaje "not found"
            response.end();
        }else{
            //Extraemos el valor despues del ultimo punto en nuestra url, para poder definir el content-type
            const extension = request.url.split('.').pop();
            //Verificamos 3 de los casos que vamos a manejar de tipo de archivo para el content-type
            switch(extension){
                case 'txt':
                    response.writeHead(200,{"Content-Type":"text/plain"});

                    break;
                case 'html':
                    response.writeHead(200,{"Content-Type":"text/html"});
                break;

                case 'png':
                    response.writeHead(200,{"Content-Type":"image/png"});
                break;
            }
            //El archivo seleccionado por medio de nuestra url es escrito en nuestra pagina, ya definido su tipo de archivo 
            response.write(data);
            response.end();
        }
    })
    //Nuestro servidor estara escuchando localmente desde el puerto 4444
}).listen(4444);


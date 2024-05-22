# Servidor http

En esta pequeña practica observaremos un uso practico de un servidor http

## Vamos a empezar

Si te gustaria tener una copia del tutorial para realizar este proyecto puedes entrar a la siguiente liga (https://github.com/Ericktati1234/server-http)
y descargar todo el proyecto

### Prerequisitos

Para poder realizar esta practica debemos de ya haber tenido instalado nuestra herramienta de node para la ejecucion de archivos en .js (javascript), si deseamos saber como instalar node, favor de seguir la siguiente liga donde se nos muestra un tutorial detallado para su instalacion (https://www.hostinger.com/tutorials/how-to-install-node-ubuntu?ppc_campaign=google_search_generic_hosting_all&bidkw=defaultkeyword&lo=1010019&gad_source=1&gclid=EAIaIQobChMIpMeMsrGghgMVqUp_AB2akg5WEAAYASAAEgKdMPD_BwE)

### Instalando y verificando version (funcionamiento)

Verificamos que nuestros archivos funcionen correctamente, para ello nos dirigiremos por medio de la consola de nuestro linux a la carpeta contenedora de nuestro proyecto (si ejecutamos nuestro comando "ls" en esta carpeta deberemos de ver algo parecido a esto)

```
~/server-http$ ls
app.js  readme.md  WWW

```
Por ultimo verificamos que nuestro node js este correctamente instalado con el siguiente comando:

```
~/server-http$ node --version
v12.22.9

```
Perfecto ahora vamos a la practica!!

### Ejecutando nuestro archivo

En nuestra carpeta contenedora del proyecto tenemos diversos archivos dentro de la carpeta WWW y dentro de nuestra carpeta raiz, vamos a jugar un poco con estos archivos de la siguiente forma:

Vamos a ejecutar nuestro archivo app.js con ayuda de nuestra herramienta de node de la siguiente forma:

```
~/server-http$ node app.js 
_

```
Podremos saber que nuestro archivo esta correctamente ejecutado si existe un guion bajo "_" parpadeando justo al haber ejecutado nuestro comando
*IMPORTANTE*: No debe de mostrarnos otra vez la linea de comandos, debe de estar en espera como de un imput

Despues de ejecutado nuestro archivo app.js con node, vamos a dirigirnos a nuestro navegador de confianza (Google o firefox en mi caso), para verificar que esta funcionando correctamente nuestro servidor http, para ello, vamos a escribir en nuestra barra de busqueda el siguiente comando:

```
localhost:4444

```
Este comando abrira el archivo index.html que tenemos en nuestra carpeta WWW dentro de nuestro proyecto, como parte de nuestra configuracion en el archivo app.js, el archivo en cuestion debera de mostrarnos una pantalla en blanco con un mensaje grande que dice:

```
Hola a mi servidor http

```
Vamos a continuar navegando en nuestros archivos de la carpeta WWW, para ello podemos modificar la liga con la que accedimos a nuestro servidor por medio del navegar, por las siguientes lineas:

*Ventas*
```
localhost:4444/ventas.html

```
output:
```
Hola a mis sitios de ventas

```
*Readme.txt*
```
localhost:4444/readme.txt
```
output:
```
Este es el readme de mi sitio web.

```
*Imagen logo FIng*
```
localhost:4444/images/fing.png

```
output:
```
fing.png (Este es una imagen en formato png que se muestra en el centro de la pantalla)

```

Estos son todos los archivos que podemos observar en nuestro proyecto aunque podemos añadir nuestros propios archivos dentro de la carpeta WWW, con diversas extensiones cada uno de los archivos, pero no sin antes, especificar en nuestro codigo cual es el tipo de archivo que se esta mostrando en nuestro sitio web, si queremos añadir archivos de otro tipo que no sea .html, .txt o .png, debemos de añadir un nuevo caso en el switch dentro de nuestro archivo app.js:

*CODIGO EN app.js:*
```
case 'html':
    response.writeHead(200,{"Content-Type":"text/html"});
break;

case 'png':
    response.writeHead(200,{"Content-Type":"image/png"});
break;

Añadir codigo nuevo.........

```
Deberemos de copiar y pegar un nuevo bloque de codigo y especificar la extension que estemos manipulando y su Mime Type:

```

case 'extension':
    response.writeHead(200,{"Content-Type":"MimeType"});
break;

```
Para consultar el Mime Type de nuestro tipo de archivo podemos consultar la siguiente liga (https://developer.mozilla.org/es/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types) donde encontraremos una gran variedad de tipos de archivos y su mime type


### Terminando tutorial

POdemos verificar el content type que tanto mencionamos dentro de nuestor navegador (firefox), debemos de hacer lo siguiente:

* Ejecutamos cualquiera de nuestros archivos dentro de nuestro servidor http, ya sea el index.html, el readme.txt, etc

* Despues damos click derecho a la pagina web y presionaremos la opcion de "inspeccionar"

* Observaremos una pestaña con diversas opciones en el encabezado, nosotros seleccionaremos la que dice "red"

* Recargamos nuestra pagina web y observaremos ciertos cambios dentro de la pestaña de red, en ella observaremos 1 o mas archivos que se estan ejecutando

* Presionamos cualquiera de los archivos y una pestaña en nuestra esquina inferior derecha se nos abrira con una descripcion del archivo

* Si prestamos atencion a los atributos existira uno con el nombre de "content-type" aqui estara definido el tipo de archivo.

## Implementacion

Para mayor informacion y comprension del uso de un servidor http, podemos seguir la siguiente liga el cual nos brinda un tutorial mas detallado de la ejecucion de un servidor http casero (https://www-almabetter-com.translate.goog/bytes/tutorials/nodejs/creating-server-in-nodejs?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=rq&_x_tr_hist=true)

## Hecho con

* [VsCode](https://code.visualstudio.com) - Como editor de nuestro codigo fuente
* [GitHub](https://github.com) - Como repositorio remoto que contiene nuestros archivos tutorial
* [Node js](https://nodejs.org/en) - Como herramienta para la ejecucion de nuestro servidor https
* [Firefox](https://www.mozilla.org/es-MX/firefox/new/) - Como navegador auxiliar para verificar nuestro servidor

## Contribucion

Si desea contribuir y mejorar el siguiente documento, favor de contactarnos en el siguiente correo (ContactoBinBash@coolmail.com)

## Versionado

Para el versionado y consulta de documento hacemos el uso de [GitHub](https://github.com) en el cual actualizamos, verificamos y probamos 
cada mejora en los codigos y tutoriales realizados

## Authors

* **Erick Nevarez** - *Totalidad del trabajo* - [Ericktati1234](https://github.com/Ericktati1234)

Por el momento a la fecha 21/05/2024 no existen colaboradores que hayan participado en el proyecto

## License

Este proyecto es usado solamente para usos didacticos, no nos hacemos responsables ninguno de los autores por el mal uso del codigo anexado
Todos los documentos y links son una via para obtener mayor conocimiento, no se obtiene ningun beneficio personal por el compartir los links

## Reconocimientos

* Un agradecimiento a todo aquella persona que este observanod este proyecto y me de la posibilidad de mostrar mis conocimientos



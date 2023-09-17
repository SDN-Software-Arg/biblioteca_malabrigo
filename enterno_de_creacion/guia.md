Entorno de creacion

introduccion:
Lo que tenemos aca es el enterno donde vamos a desarrollar los componentes para la pagina web.
Lo cual nos permitira trabajar de una forma mas facil ya que se trabajara componentisando los elementos de la pagina,lo cual hara mas facil de gestionar cada elemento ya que cada uno usara una carpeta para su creacion.

1-Para usar esto lo que tenemos que hacer es crea un carpeta en la carpeta componentes con los siguientes archivo (no es obligatorio pero se recomienda), obteniendo la siguiente estructura:

----components
    ----nombre_folder
        ----index.html
        ----style.css
        ----index.js

2-Ahora lo que tenemos que hacer es ir al archivo js que esta mas afuera el del proyecto, el cual se encuentra al mismo nivel que este, aqui encontraremos un objeto de la siguiente forma:

const renderProyect = {
  folderName: "ejemplo",
  html: "index", //default values, recomient no edit
  css: "style", //default values, recomient no edit
  js: "index", //default values, recomient no edit
}

3-Al encontrar este lo que tenemos que hacer es cambiar el valor de la varibale folderName por el nombre de la carpeta que hemos creado antes, guardamos cambios y seguimos.
4-Ya con esto vamos a renderizar el html que tenemos en la root de proyecto (al nivel de esta nota), lo renderizaremos de la forma que quiera cada uno.
5-Yo con esto podemos comenzar a desarrollar nuestros componentes desde los archivos antes creado, haciendolo como lo hacemos de forma mas habitual.
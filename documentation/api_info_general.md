----------------
| SOBRE LA API |
----------------

_old web:                   http://0426.bepe.ar/
_especificaciones de xml:   http://0426.bepe.ar/cgi-bin/koha/unapi
_conabip web:               https://www.conabip.gob.ar/

_que hacemos?
Por lo que tengo entendido, la API es del gobierno más específicamente del CONABIP.
Esto en sí no es una API, lo que hacemos acá es hacer peticiones a una dirección que esta usa como pseudo API donde retorna XML, el archivo adjunto de api_uso.md explicaba más a fondo cómo usar esta.

En síntesis, lo que hacemos acá es sabiendo las cosas antes mencionadas hacemos peticiones a la URL que creamos con determinados parámetros y recibimos el XML el cual pasa por una función la cual lo modifica y lo transforma a un formato JSON más fácil de manipular al cual le secamos los datos que necesitamos y a esto lo renderizamos en la parte de la búsqueda, esto es un gran síntesis de todo lo que tenemos atrás, pero describe bastante bien lo que hacemos.



By Amaro Cattarozzi.
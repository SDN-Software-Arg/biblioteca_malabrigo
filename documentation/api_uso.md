------------------------
| PARA ENTENDER LA API |
------------------------

path:   http://0426.bepe.ar/cgi-bin/koha/opac-search.pl?


codificaciones:

esta sigue el siguiente formato:
__(1)__
    idx= codigo de busqueda ... 
    &
    q= data de busqueda
    &
__(2)__
    op= (codigo or o and) (este si solo se busca mas de un campo)
    &
    repeat: 1
__(3)__
    format=rss2
    
ejemplo de formato:
    http://0426.bepe.ar/cgi-bin/koha/opac-search.pl?
    idx=kw              &
    q=holamundo         &
    op=%2520and%2520    &
    idx=su%252Cwrdl     &
    q=programacion      &
    format=rss2

tipos aplicados en el formato:
    busqueda:
        idx: kw             -> palabras clave
        idx: su%252Cwrdl    -> materia
        idx: ti             -> titulo
        idx: au%252Cwrdl    -> autor
        idx: pb%252Cwrdl    -> editor
        idx: pb%252Cwrdl    -> ubicacion del editor
        idx: nb             -> isbn
        idx: bc             -> codigo de barra
    operadores:
        or: %2520or%2520
        and: %2520and%2520


By Amaro Cattarozzi.
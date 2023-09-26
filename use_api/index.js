import { fetchAndConvertToJSON } from "./functions/index.js";
import {
  manipulacion_normal,
  agregarEstadosToObj,
} from "./functions/manipulacion_de_info.js";

const data_of_search = "hola";
const inicio_of_search = 0;
const count_of_search = 5;

//all search
const url = `http://0426.bepe.ar/cgi-bin/koha/opac-search.pl?idx=kw&q=${data_of_search}&op=%2520or%2520&idx=su%252Cwrdl&q=${data_of_search}&op=%2520or%2520&idx=ti&q=${data_of_search}&op=%2520or%2520&idx=au%252Cwrdl&q=${data_of_search}&op=%2520or%2520&idx=pb%252Cwrdl&q=${data_of_search}&op=%2520or%2520&idx=pb%252Cwrdl&q=${data_of_search}&op=%2520or%2520&idx=nb&q=${data_of_search}&op=%2520or%2520&idx=bc&q=${data_of_search}&op=%2520or%2520&offset=${inicio_of_search}&count=${count_of_search}&format=rss2`;

//.rss.channel.item - data que nos sirve
const data = await fetchAndConvertToJSON(url);
const items = data.rss.channel.item;
const items_advance = manipulacion_normal(items);

const info_final = await agregarEstadosToObj(items_advance);
console.log(info_final);

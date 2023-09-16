import { fetchAndConvertToJSON } from "./functions/index.js";

const url =
  "http://0426.bepe.ar/cgi-bin/koha/opac-search.pl?idx=kw&q=malabrigo&format=rss2";

//.rss.channel.item - data que nos sirve
const data = await fetchAndConvertToJSON(url);
const items = data.rss.channel.item;

const datos_generales_string = items.map((n) => n.description.p[0].split("\n"));

//esta info es modificando un string
const datos_generales = datos_generales_string.map((n) => {
  const info = n.map((m) => {
    const data = m.replace(/,/g, " ").trim();
    if (!(data == null || data === "")) return data;
  });

  return {
    autor: info[0]?.replace(/By /g, ""),
    lugar_de_origen: info[1],
    paginas: info[2]?.slice(2, -2).split(" ").join(""),
    colaborador: info[3]?.replace(/Colaborador: /g, ""),
    medida: info[4]?.slice(0, -2).split(" ").join(""),
    //isbn or codigo_de_barra
    codigos: [info[5], info[6]],
  };
});

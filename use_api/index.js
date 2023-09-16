import { fetchAndConvertToJSON } from "./functions/index.js";

const url =
  "http://0426.bepe.ar/cgi-bin/koha/opac-search.pl?idx=kw&q=harry&offset=0&count=10&format=rss2";

//.rss.channel.item - data que nos sirve
const data = await fetchAndConvertToJSON(url);
const items = data.rss.channel.item;

const datos_generales_string = items.map((n) => {
  return {
    ...n,
    description: n.description.p[0].split("\n"),
    opac_reserve: {
      otro: n.description.p[1]?.a._.replace(/\s+/g, ' ').replace("\n" , "").trim(),
      href: n.description.p[1]?.a?.href,
      titulo: n.description.p[1]?.a?.i,
    },
  };
});

const descripcion_generales = datos_generales_string.map((n) => {
  const info = n.description.map((m) => {
    const data = m.replace(/,/g, " ").trim();
    if (!(data == null || data === "")) return data;
  });

  delete n.description

  return {
    ...n,
    autor: info[0]?.replace(/By /g, ""),
    lugar_de_origen: info[1],
    paginas: info[2]?.slice(2, -2).split(" ").join(""),
    colaborador: info[3]?.replace(/Colaborador: /g, ""),
    medida: info[4]?.slice(0, -2).split(" ").join(""),
    //isbn or codigo_de_barra
    codigos: [info[5], info[6]],
  };
});

console.log(descripcion_generales);

import { fetchForUrlToHTML } from "./fetch.js";
import { textToHTML } from "./parces.js";

export const manipulacion_normal = (items) => {
  return items.map((n) => {
    const info = n.description.p[0].split("\n").map((m) => {
      const data = m.replace(/,/g, " ").trim();
      if (!(data == null || data === "")) return data;
    });

    const retorno = {
      ...n,
      title: n.title.trim(),
      opac_reserve: {
        otro: n.description.p[1]?.a._.replace(/\s+/g, " ")
          .replace("\n", "")
          .trim(),
        href: n.description.p[1]?.a?.href,
        titulo: n.description.p[1]?.a?.i,
      },
      autor: info[0]?.replace(/By /g, ""),
      lugar_de_origen: info[1],
      paginas: info[2]?.slice(2, -2).replace(/\s/g, ""),
      colaborador: info[3]?.replace(/Colaborador: /g, ""),
      medida: info[4]?.slice(0, -2).replace(/\s/g, ""),
      codigos: [info[5], info[6]],
    };

    delete retorno.description;

    return retorno;
  });
};

export const agregarEstadosToObj = async (items) => { 
  let retorno = [];

  for (let i = 0; i < items?.length; i++) {
    const element = items[i];
    const estado = await obtenerEstado(element.link);

    console.log(`${((i + 1) / items.length) * 100}%`)

    retorno.push({
      ...element,
      estado,
    });
  }
  return retorno;
};

export const obtenerEstado = async (link) => {
  const html = await fetchForUrlToHTML(link);
  const doc = textToHTML(html);

  return doc
    ?.getElementsByClassName("item-status available")[0]
    ?.textContent.trim();
};

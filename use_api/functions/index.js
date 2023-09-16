import { xmlTextToDoc } from "./parces.js";
import { xmlToJson } from "./parces.js";
import { fetchForUrlXmlToString } from "./fetch.js";

export async function fetchAndConvertToJSON(url) {
  try {
    const xmlText = await fetchForUrlXmlToString(url);
    const xmlDoc = xmlTextToDoc(xmlText);
    const jsonData = xmlToJson(xmlDoc);

    return jsonData;
  } catch (error) {
    console.error("Error al obtener y convertir XML:", error);
    throw error;
  }
}

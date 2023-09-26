import { DOMParser } from "xmldom";
import xml2js from "xml2js";

export function textToHTML(text) {
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, "text/html");

    return doc;
  } catch (error) {
    console.error("Error al xmlText to doc:", error);
    throw error;
  }
}

export function xmlTextToDoc(xmlText) {
  try {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "text/xml");

    return xmlDoc;
  } catch (error) {
    console.error("Error al xmlText to doc:", error);
    throw error;
  }
}

export function xmlToJson(xml) {
  try {
    if (xml == null) return {};

    const parser = new xml2js.Parser({
      explicitArray: false,
      mergeAttrs: true,
    });

    let resultado = {};

    parser.parseString(xml, (err, result) => {
      if (err) {
        console.error("Error al parsear el XML:", err);
      }
      resultado = result;
    });

    if (resultado == null) return {};
    return resultado;
  } catch (error) {
    console.error("Error al xml to json:", error);
    throw error;
  }
}

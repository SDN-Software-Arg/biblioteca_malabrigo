import fetch from "node-fetch";

export async function fetchForUrlXmlToString(url) {
  try {
    const response = await fetch(url);

    if (!response.ok)
      throw new Error(`Error en la solicitud: ${response.statusText}`);

    const xmlText = await response.text();

    return xmlText;
  } catch (error) {
    console.error("Error al obtener y convertir XML:", error);
    throw error;
  }
}

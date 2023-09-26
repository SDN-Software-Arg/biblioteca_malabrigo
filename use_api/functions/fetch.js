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

export async function fetchForUrlToHTML(url) {
  return await fetch(url)
    .then((response) => response.text())
    .then((html) => {
      return html;
    })
    .catch((error) => {
      console.error("Error al cargar el archivo:", error);
    });
}

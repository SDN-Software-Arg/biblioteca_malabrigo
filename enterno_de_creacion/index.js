const root = document.getElementById("root");
const head = document.querySelector("head")
const body = document.querySelector("body")

const renderProyect = {
  folderName: "ejemplo",
  html: "index", //default values, recomient no edit
  css: "style", //default values, recomient no edit
  js: "index", //default values, recomient no edit
}

const recuperarFile = async (folderName , fileName) => {
  return await fetch(
    `http://127.0.0.1:5500/components/${folderName}/${fileName}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("La solicitud no fue exitosa");
      }
      return response.text();
    })
    .then((html) => {
      return html;
    })
    .catch((error) => {
      console.error(error);
    });
};

const addCSS = () => {
  const linkCSS = document.createElement('link');
  linkCSS.rel = 'stylesheet';
  linkCSS.type = 'text/css';
  linkCSS.href = `./components/${renderProyect.folderName}/${renderProyect.css}.css`;
  head.appendChild(linkCSS);
}

const addJS = () => {
  const scriptElement = document.createElement('script');
  scriptElement.src = `./components/${renderProyect.folderName}/${renderProyect.js}.js`;
  body.appendChild(scriptElement);
}

const addHTML = async () => {
  const html = await recuperarFile(renderProyect.folderName , renderProyect.html + ".html")
  root.insertAdjacentHTML("afterbegin" , html);
}

const allData = async () => {
  await addHTML();
  addCSS();
  addJS();
} 

document.addEventListener("DOMContentLoaded", async () => {
  await allData();  
});

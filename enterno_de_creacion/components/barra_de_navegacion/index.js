const nav = document.querySelector("nav");
const section_botton = document.querySelector(".botton-section");
const btn_vista = document.querySelector("#btn-vista");

const url_view = "/components/barra_de_navegacion/img/"

btn_vista.addEventListener("click", () => {
  if (nav.classList.contains("h500")) {
    btn_vista.children[0].src = url_view + "view.svg"
    section_botton.classList.add("hidden");
    nav.classList.remove("h500");
    nav.classList.add("w50pxImp")
    return;
  }

  nav.classList.remove("w50pxImp")
  btn_vista.children[0].src = url_view + "no_view.svg"
  section_botton.classList.remove("hidden");
  nav.classList.add("h500");
});

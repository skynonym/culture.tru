import { createRootElement } from "./helper.js";
import { waitForElm } from "./helper.js";

// #GET NAVBAR COMPONENT
window.addEventListener("DOMContentLoaded", getNav);

function getNav() {
  const headElement = document.getElementsByTagName("head")[0];
  const styleNav = createRootElement("link", null, [
    ["rel", "stylesheet"],
    ["href", "./style/global.css"],
  ]);
  const bootstrap = createRootElement("link", null, [
    ["rel", "stylesheet"],
    ["href", "./node_modules/bootstrap/dist/css/bootstrap.min.css"],
  ]);
  headElement.append(bootstrap);
  headElement.append(styleNav);

  const bodyElement = document.getElementsByTagName("body")[0];
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "_nav.html", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const nav = document.createElement("nav");
      nav.classList.add(
        "navbar",
        "navbar-expand-xl",
        "bg-light",
        "fixed-top",
        "navbar-light"
      );
      nav.innerHTML = this.responseText;
      bodyElement.prepend(nav);
    } else {
      console.warn("did not recieve 200");
    }
  };

  xhr.send();
}

// #GET FOOTER COMPONENT
window.addEventListener("DOMContentLoaded", getFooter);
function getFooter() {
  const mainElement = document.getElementsByTagName("main")[0];
  const xhr = new XMLHttpRequest();

  xhr.open("GET", "_footer.html", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const footer = document.createElement("footer");
      footer.innerHTML = this.responseText;
      mainElement.insertAdjacentElement("afterend", footer);
    } else {
      console.warn("did not recieve 200");
    }
  };

  xhr.send();
}

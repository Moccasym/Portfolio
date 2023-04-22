import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

document.getElementById("buttonMore").onclick = () => {
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("buttonMore");
  
    if (btnText.innerHTML === "Read Less") {
        btnText.innerHTML = "...Read More";
        moreText.style.display = "none";
    } else {
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
    }
  }
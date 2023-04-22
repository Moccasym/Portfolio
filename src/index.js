import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

document.getElementById("buttonMore").onclick = btnmore = () => {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("buttonMore");
    var profileImg = document.getElementById("profileIMG");
  
    if (btnText.innerHTML === "Read Less") {
        //buttonMore.style.display = "inline";
        btnText.innerHTML = "...Read More";
        moreText.style.display = "none";
    } else {
        //buttonMore.style.display = "none";
        btnText.innerHTML = "Read Less";
        moreText.style.display = "inline";
        //appear(moreText, 0, 5, 100);
    }
  }

  function appear(elm, i, step, speed){
    var t_o;
    //initial opacity
    i = i || 0;
    //opacity increment
    step = step || 5;
    //time waited between two opacity increments in msec
    speed = speed || 50; 

    t_o = setInterval(function(){
        //get opacity in decimals
        var opacity = i / 100;
        //set the next opacity step
        i = i + step; 
        if(opacity > 1 || opacity < 0){
            clearInterval(t_o);
            //if 1-opaque or 0-transparent, stop
            return; 
        }
        //modern browsers
        elm.style.opacity = opacity;
        //older IE
        elm.style.filter = 'alpha(opacity=' + opacity*100 + ')';
    }, speed);
}





//   .about-wrapper__image{
//     animation:fadeIn 5s;

//     @keyframes fadeIn{
//       0%{opacity:0;}  
//       80%{opacity:0;}
//       100%{opacity:1;}
//     }
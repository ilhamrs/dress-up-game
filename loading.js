// mobile fullscreen fix

function isMobile() {

return /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

}

if(isMobile()){

document.body.classList.add("mobile");

}

// prevent context menu

document.addEventListener("contextmenu", e => e.preventDefault());

// memory warning logging

window.addEventListener("error", function(e){

console.error("WebGL Error:", e.message);

});

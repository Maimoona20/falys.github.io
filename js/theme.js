/* Header/footer are in each page's HTML (same as index.html). This only adds behaviour. */
document.addEventListener("DOMContentLoaded",function(){
var h=document.querySelector(".th-h");if(!h)return;
var bg=h.querySelector(".bgr");
bg.onclick=function(){var o=h.classList.toggle("open");bg.setAttribute("aria-expanded",o)};
h.querySelectorAll(".nl a").forEach(function(a){a.addEventListener("click",function(){h.classList.remove("open")})});
var s=document.querySelector(".th-stk"),hero=document.querySelector(".hero");
if(s)addEventListener("scroll",function(){s.classList.toggle("s",hero?hero.getBoundingClientRect().bottom<0:scrollY>400)},{passive:true});
addEventListener("resize",function(){if(innerWidth>860)h.classList.remove("open")});
});

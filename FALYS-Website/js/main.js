/* =====================================================
   FALYS WEBSITE - MAIN JAVASCRIPT
   ===================================================== */



document.addEventListener(
    "DOMContentLoaded",
    () => {



/* =========================
   NAVBAR SCROLL EFFECT
========================= */


const navbar = document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {


        if(window.scrollY > 50){


            navbar.style.background =
            "rgba(5,8,22,0.75)";


            navbar.style.backdropFilter =
            "blur(15px)";


            navbar.style.borderBottom =
            "1px solid rgba(148,163,184,.15)";


        }

        else{


            navbar.style.background =
            "transparent";


            navbar.style.borderBottom =
            "none";


        }


    }
);






/* =========================
   SCROLL REVEAL
========================= */


const revealElements =
document.querySelectorAll(
    ".feature-card, .flow-box, .detection-box, .cta"
);



const observer =
new IntersectionObserver(

(entries)=>{


entries.forEach(
(entry)=>{


if(entry.isIntersecting){


    entry.target.classList.add(
        "fade-in"
    );


    observer.unobserve(
        entry.target
    );


}


});


},

{

threshold:0.15

}

);



revealElements.forEach(
(element)=>{

    observer.observe(element);

}

);






/* =========================
   DASHBOARD COUNTER EFFECT
========================= */


const counters =
document.querySelectorAll(
".stat-card h3"
);



counters.forEach(
(counter)=>{


const target =
parseInt(
counter.innerText
);



let current = 0;



const speed =
target / 80;



const update = ()=>{


if(current < target){


current += speed;


counter.innerText =
Math.ceil(current);



requestAnimationFrame(
    update
);



}

else{


counter.innerText =
target;


}


};



update();



}

);






/* =========================
   ACTIVE PAGE LINK
========================= */


const currentPage =
window.location.pathname
.split("/")
.pop();



document
.querySelectorAll(".nav-links a")
.forEach(
(link)=>{


if(
link.getAttribute("href")
===
currentPage
){


link.style.color =
"#00eaff";


}



}

);






/* =========================
   FUTURE API PLACEHOLDER
========================= */


// Later:
// - live dashboard stats
// - agent count
// - threat feed
// - API integration



console.log(
"%cFALYS Security Platform Loaded",
"color:#00eaff;font-size:16px;font-weight:bold;"
);



});
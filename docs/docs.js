/* FALYS docs — tiny enhancements: active-section sidebar, search, copy buttons, mobile menu, back-to-top */
(function(){
  var toc=document.getElementById('toc'),secs=[].slice.call(document.querySelectorAll('main section'));
  var tops=[].slice.call(toc.querySelectorAll(':scope>ul>li'));
  function activate(id){
    tops.forEach(function(li){var a=li.querySelector(':scope>a');li.classList.toggle('active',a&&a.getAttribute('href')==='#'+id)});
  }
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)activate(e.target.id)})},{rootMargin:'-20% 0px -70% 0px'});
    secs.forEach(function(s){io.observe(s)});
  }
  activate('introduction');
  // sub-heading highlight
  var subs=[].slice.call(toc.querySelectorAll('li li a'));
  var heads=subs.map(function(a){return document.getElementById(a.getAttribute('href').slice(1))}).filter(Boolean);
  window.addEventListener('scroll',function(){
    var y=window.scrollY+140,cur=null;
    heads.forEach(function(h){if(h.getBoundingClientRect().top+window.scrollY<=y)cur=h.id});
    subs.forEach(function(a){a.classList.toggle('cur',a.getAttribute('href')==='#'+cur)});
    document.getElementById('top').classList.toggle('show',window.scrollY>600);
  },{passive:true});
  // search
  document.getElementById('search').addEventListener('input',function(){
    var q=this.value.trim().toLowerCase();toc.classList.toggle('searching',!!q);
    tops.forEach(function(li){li.classList.toggle('hide',!!q&&li.textContent.toLowerCase().indexOf(q)<0)});
    [].forEach.call(toc.querySelectorAll('li li'),function(li){li.style.display=(!q||li.textContent.toLowerCase().indexOf(q)>=0)?'':'none'});
  });
  // copy buttons
  [].forEach.call(document.querySelectorAll('pre'),function(pre){
    var b=document.createElement('button');b.className='copy';b.textContent='copy';
    b.onclick=function(){navigator.clipboard&&navigator.clipboard.writeText(pre.innerText.replace(/copy$/,'').trim()).then(function(){b.textContent='copied ✓';setTimeout(function(){b.textContent='copy'},1400)})};
    pre.appendChild(b);
  });
  // mobile menu + back to top
  document.getElementById('menu').onclick=function(){document.body.classList.toggle('open')};
  toc.addEventListener('click',function(e){if(e.target.tagName==='A')document.body.classList.remove('open')});
  document.getElementById('top').onclick=function(){window.scrollTo({top:0,behavior:'smooth'})};
})();

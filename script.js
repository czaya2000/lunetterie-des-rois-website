'use strict';
(function(){
  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');
  var hdr    = document.getElementById('hdr');
  var body   = document.body;

  if(burger && drawer){
    burger.addEventListener('click', function(){
      var open = burger.classList.toggle('open');
      burger.setAttribute('aria-expanded', String(open));
      drawer.classList.toggle('open', open);
      drawer.setAttribute('aria-hidden', String(!open));
      body.style.overflow = open ? 'hidden' : '';
    });
    document.addEventListener('keydown', function(e){
      if(e.key==='Escape' && burger.classList.contains('open')){
        burger.classList.remove('open'); burger.setAttribute('aria-expanded','false');
        drawer.classList.remove('open'); drawer.setAttribute('aria-hidden','true');
        body.style.overflow=''; burger.focus();
      }
    });
    Array.from(drawer.querySelectorAll('a')).forEach(function(a){
      a.addEventListener('click', function(){
        burger.classList.remove('open'); drawer.classList.remove('open');
        burger.setAttribute('aria-expanded','false');
        drawer.setAttribute('aria-hidden','true');
        body.style.overflow='';
      });
    });
  }

  if(hdr){
    window.addEventListener('scroll', function(){
      hdr.style.boxShadow = window.scrollY > 10 ? '0 1px 12px rgba(0,0,0,.06)' : '';
    }, {passive:true});
  }

  var revs = document.querySelectorAll('.rev');
  var prefersReduced = window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced || !('IntersectionObserver' in window)) {
    // Skip staged reveal — show everything immediately.
    revs.forEach(function(el){ el.classList.add('on'); });
  } else {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('on'); io.unobserve(e.target); }
      });
    },{threshold:.08, rootMargin:'0px 0px -32px 0px'});
    revs.forEach(function(el){ io.observe(el); });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    a.addEventListener('click',function(e){
      var id = a.getAttribute('href');
      if(id==='#') return;
      var t = document.querySelector(id);
      if(t){ e.preventDefault(); var h=hdr?hdr.offsetHeight:0;
        window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-h-16, behavior:'smooth'});
      }
    });
  });
})();

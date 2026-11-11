(function(){
  var roles=['programmer','data enthusiast','problem solver','software engineer'],i=0,j=0,del=false,el=document.getElementById('role');
  var still=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(still){el.textContent=roles[0]}
  else(function tick(){
    var w=roles[i];j+=del?-1:1;el.textContent=w.slice(0,j);
    var t=del?45:90;
    if(!del&&j===w.length){del=true;t=1400}
    else if(del&&j===0){del=false;i=(i+1)%roles.length;t=300}
    setTimeout(tick,t);
  })();
  var nav=document.getElementById('menu'),b=document.querySelector('.burger');
  b.addEventListener('click',function(){var o=nav.classList.toggle('open');b.setAttribute('aria-expanded',o)});
  nav.addEventListener('click',function(){nav.classList.remove('open');b.setAttribute('aria-expanded',false)});
  var links=[].slice.call(nav.querySelectorAll('a'));
  var io=new IntersectionObserver(function(es){es.forEach(function(e){
    if(e.isIntersecting)links.forEach(function(a){a.classList.toggle('on',a.getAttribute('href')==='#'+e.target.id)})
  })},{rootMargin:'-40% 0px -55% 0px'});
  document.querySelectorAll('main section').forEach(function(s){io.observe(s)});
  document.getElementById('yr').textContent=new Date().getFullYear();
  var copy=document.querySelector('.copy');
  copy.addEventListener('click',function(){
    var done=function(){copy.textContent='Copied';setTimeout(function(){copy.textContent='Copy email'},1800)};
    if(navigator.clipboard)navigator.clipboard.writeText('tnafis57@gmail.com').then(done,function(){});
  });
  var note=document.getElementById('note');
  document.getElementById('form').addEventListener('submit',function(e){
    e.preventDefault();var f=e.target;
    var body='Name: '+f.name.value+'\nEmail: '+f.email.value+'\n\n'+f.msg.value;
    location.href='mailto:tnafis57@gmail.com?subject='+encodeURIComponent('Portfolio message from '+f.name.value)+'&body='+encodeURIComponent(body);
    note.textContent='Your email app should open with the message ready to send.';
  });
})();

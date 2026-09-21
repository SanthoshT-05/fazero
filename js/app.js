const nav=document.getElementById('nav');const menu=document.getElementById('menu');const mobile=document.getElementById('mobileNav');
window.addEventListener('scroll',()=>{nav?.classList.toggle('scrolled',window.scrollY>16)},{passive:true});
menu?.addEventListener('click',()=>mobile?.classList.toggle('open'));
document.querySelectorAll('.mobile-nav a').forEach(a=>a.addEventListener('click',()=>mobile?.classList.remove('open')));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const form=document.getElementById('leadForm');if(form){form.addEventListener('submit',e=>{e.preventDefault();const s=document.querySelector('.success');if(s)s.style.display='block';form.reset();});}

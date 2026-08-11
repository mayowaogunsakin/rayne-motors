
document.addEventListener("DOMContentLoaded",()=>{
 const header=document.querySelector(".site-header");
 const menu=document.querySelector(".menu-btn"), mobile=document.querySelector(".mobile-drawer");
 const scrim=document.querySelector(".scrim"), cart=document.querySelector(".cart-drawer");
 const closeEls=document.querySelectorAll("[data-close]");
 const updateHeader=()=>header?.classList.toggle("scrolled",scrollY>24);
 updateHeader(); addEventListener("scroll",updateHeader,{passive:true});
 const setDrawer=(el,open)=>{
   el?.classList.toggle("open",open);
   const anyOpen=document.querySelector(".mobile-drawer.open,.cart-drawer.open");
   document.body.classList.toggle("drawer-open",!!anyOpen);
 };
 menu?.addEventListener("click",()=>{setDrawer(mobile,true);scrim?.classList.add("open")});
 document.querySelector("[data-mobile-close]")?.addEventListener("click",()=>{setDrawer(mobile,false);scrim?.classList.remove("open")});
 scrim?.addEventListener("click",()=>{setDrawer(mobile,false);setDrawer(cart,false);scrim.classList.remove("open")});
 document.querySelectorAll("[data-cart-open]").forEach(b=>b.addEventListener("click",()=>{setDrawer(cart,true);scrim?.classList.add("open")}));
 closeEls.forEach(b=>b.addEventListener("click",()=>{const target=b.closest(".cart-drawer")||b.closest(".mobile-drawer");setDrawer(target,false);scrim?.classList.remove("open")}));
 document.querySelectorAll(".reveal").forEach(el=>{
   const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});
   io.observe(el);
 });
 const path=location.pathname.split("/").pop()||"index.html";
 const current=path===""?"index.html":path;
 document.querySelectorAll("[data-nav]").forEach(a=>{if(a.getAttribute("href")===current)a.classList.add("active")});
 document.querySelectorAll(".mobile-links a").forEach(a=>a.addEventListener("click",()=>{
   setDrawer(mobile,false); scrim?.classList.remove("open");
 }));
 document.addEventListener("keydown",e=>{
   if(e.key==="Escape"){
     setDrawer(mobile,false); setDrawer(cart,false); scrim?.classList.remove("open");
   }
 });
 window.RayneUI={setDrawer};
});

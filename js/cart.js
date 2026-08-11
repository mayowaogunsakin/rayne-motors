
(()=>{
 const get=()=>JSON.parse(localStorage.getItem("rayneCart")||"[]");
 const save=items=>{localStorage.setItem("rayneCart",JSON.stringify(items));render();};
 const add=id=>{let c=get(); if(!c.includes(id))c.push(id);save(c); openCart()};
 const remove=id=>save(get().filter(x=>x!==id));
 const clear=()=>save([]);
 function render(){
   const ids=get(), list=document.querySelector(".cart-items"), count=document.querySelectorAll(".cart-count");
   count.forEach(x=>x.textContent=ids.length);
   if(!list)return;
   if(!ids.length){list.innerHTML='<div class="empty"><strong>Your cart is empty.</strong><br><span>Choose a vehicle to add it here.</span></div>';return}
   list.innerHTML=ids.map(id=>{
     const v=RAYNE_VEHICLES.find(x=>x.id===id); if(!v)return "";
     return `<div class="cart-item"><img src="${RAYNE_IMG(v.id)}" alt="${v.brand} ${v.model} concept visual"><div><h4>${v.brand} ${v.model}</h4><small>${v.type} • ${v.availability}</small><br><button class="btn btn-small btn-ghost" data-remove="${v.id}" style="margin-top:8px">Remove</button></div><span class="mono">REQUEST<br>PRICE</span></div>`
   }).join("");
   list.querySelectorAll("[data-remove]").forEach(b=>b.onclick=()=>remove(b.dataset.remove));
 }
 function openCart(){document.querySelector(".cart-drawer")?.classList.add("open");document.querySelector(".scrim")?.classList.add("open");document.body.classList.add("drawer-open")}
 document.addEventListener("click",e=>{const b=e.target.closest("[data-add-cart]");if(b){add(b.dataset.addCart)}});
 document.addEventListener("DOMContentLoaded",render);
 window.RayneCart={get,add,remove,clear};
})();


document.addEventListener("DOMContentLoaded",()=>{
 const grid=document.querySelector("#galleryGrid");if(!grid)return;
 const cats=["All","Luxury","SUV","Performance","Exotic","Sedan"];
 const bar=document.querySelector("#galleryFilters");
 bar.innerHTML=cats.map((c,i)=>`<button class="filter-chip ${i===0?"active":""}" data-cat="${c}">${c}</button>`).join("");
 function render(cat="All"){
  grid.innerHTML=RAYNE_VEHICLES.filter(v=>cat==="All"||v.category===cat||v.type===cat).map(v=>`<a class="gallery-item" href="vehicle.html?id=${v.id}"><img src="${RAYNE_IMG(v.id)}" alt="${v.brand} ${v.model} concept visual"><div class="gallery-overlay"><strong>${v.brand} ${v.model}</strong><div class="muted">${v.category} • View Vehicle →</div></div></a>`).join("");
 }
 bar.addEventListener("click",e=>{const b=e.target.closest("[data-cat]");if(!b)return;bar.querySelectorAll(".filter-chip").forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.cat)});
 render();
});

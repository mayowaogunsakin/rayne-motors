
document.addEventListener("DOMContentLoaded",()=>{
 const grid=document.querySelector("#vehicleGrid"); if(!grid)return;
 const search=document.querySelector("#vehicleSearch"), make=document.querySelector("#makeFilter"), type=document.querySelector("#typeFilter"), availability=document.querySelector("#availabilityFilter"), count=document.querySelector("#resultCount");
 const cards=v=>`<article class="vehicle-card reveal visible"><div class="vehicle-image"><img src="${RAYNE_IMG(v.id)}" alt="${v.brand} ${v.model} concept vehicle visual"><span class="badge ${v.availability==="Available"?"available":""}">${v.availability}</span></div><div class="card-body"><div class="card-title"><h3>${v.brand}<br><strong>${v.model}</strong></h3><span class="mono">${v.category}</span></div><div class="card-meta"><span>${v.transmission}</span><span>${v.seats} Seats</span><span>${v.fuel}</span></div><div class="card-actions"><a class="btn btn-small btn-primary" href="vehicle.html?id=${v.id}">View Vehicle →</a>${v.rentalAvailable?`<a class="btn btn-small btn-ghost" href="rentals.html?vehicle=${v.id}">Rent</a>`:""}</div></div></article>`;
 function render(){
   const q=(search?.value||"").toLowerCase().trim();
   const out=RAYNE_VEHICLES.filter(v=>(!q||`${v.brand} ${v.model} ${v.category} ${v.type}`.toLowerCase().includes(q))&&(!make?.value||v.brand===make.value)&&(!type?.value||v.type===type.value)&&(!availability?.value||v.availability===availability.value));
   grid.innerHTML=out.length?out.map(cards).join(""):`<div class="notice" style="grid-column:1/-1">No demo vehicles match those filters. Try another combination.</div>`;
   if(count)count.textContent=`${out.length} vehicle${out.length===1?"":"s"}`;
 }
 [search,make,type,availability].forEach(x=>x?.addEventListener("input",render));
 document.querySelector("#resetFilters")?.addEventListener("click",()=>{[search,make,type,availability].forEach(x=>{if(x)x.value=""});render()});
 render();
});

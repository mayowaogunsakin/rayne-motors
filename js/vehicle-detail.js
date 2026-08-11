
document.addEventListener("DOMContentLoaded",()=>{
 const root=document.querySelector("#vehicleDetail");if(!root)return;
 const id=new URLSearchParams(location.search).get("id")||"bmw-x5";
 const v=RAYNE_VEHICLES.find(x=>x.id===id)||RAYNE_VEHICLES[0];
 const images=[RAYNE_IMG(v.id),RAYNE_IMG(v.id),RAYNE_IMG(v.id),RAYNE_IMG(v.id)];
 root.innerHTML=`<div class="detail-grid"><div class="detail-gallery"><div class="detail-main-image"><img id="mainVehicleImage" src="${images[0]}" alt="${v.brand} ${v.model} concept visual"></div><div class="thumbs">${images.map((src,i)=>`<button class="thumb ${i===0?"active":""}" data-img="${src}"><img src="${src}" alt="Gallery view ${i+1}"></button>`).join("")}</div></div><div class="detail-panel"><a class="mono muted" href="vehicles.html">← Back to Vehicles</a><div style="margin-top:30px"><span class="mono" style="color:var(--accent)">${v.category} / ${v.type}</span><h1>${v.brand}<br>${v.model}</h1><p class="lead">${v.description}</p><div class="spec-grid">${[["Availability",v.availability],["Transmission",v.transmission],["Fuel Type",v.fuel],["Seats",v.seats],["Drive Type","Demo specification"],["Engine","Demo specification"]].map(x=>`<div class="spec"><span>${x[0]}</span><strong>${x[1]}</strong></div>`).join("")}</div><div class="notice">Pricing is intentionally omitted because this is a fictional portfolio concept.</div><div class="hero-actions">${v.rentalAvailable?`<a class="btn btn-primary" href="rentals.html?vehicle=${v.id}">Rent This Vehicle →</a>`:""}<button class="btn btn-ghost" data-add-cart="${v.id}">Add to Cart</button></div></div></div></div>`;
 root.querySelectorAll(".thumb").forEach(b=>b.onclick=()=>{root.querySelector("#mainVehicleImage").src=b.dataset.img;root.querySelectorAll(".thumb").forEach(x=>x.classList.remove("active"));b.classList.add("active")});
 document.title=`${v.brand} ${v.model} — RAYNE MOTORS`;
});

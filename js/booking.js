
document.addEventListener("DOMContentLoaded",()=>{
 const form=document.querySelector("#bookingForm");if(!form)return;
 const vehicleSelect=form.querySelector("#vehicle");
 RAYNE_VEHICLES.filter(v=>v.rentalAvailable).forEach(v=>{const o=document.createElement("option");o.value=v.id;o.textContent=`${v.brand} ${v.model}`;vehicleSelect.appendChild(o)});
 const q=new URLSearchParams(location.search).get("vehicle");if(q)vehicleSelect.value=q;
 form.addEventListener("submit",e=>{
   e.preventDefault();let valid=true;
   form.querySelectorAll("[required]").forEach(f=>{const err=f.parentElement.querySelector(".error-text");if(!f.value.trim()){valid=false;if(err)err.textContent="This field is required."}else if(err)err.textContent=""});
   const start=form.querySelector("#pickupDate"), end=form.querySelector("#returnDate");
   if(start.value&&end.value&&new Date(end.value)<new Date(start.value)){valid=false;form.querySelector("#dateError").textContent="Return date must be on or after pick-up date."}
   else form.querySelector("#dateError").textContent="";
   const notice=document.querySelector("#bookingNotice");
   if(valid){notice.className="notice success";notice.textContent="BOOKING REQUEST RECEIVED — Your rental request has been recorded for demonstration purposes. No real booking has been made.";form.reset();if(q)vehicleSelect.value=q;window.scrollTo({top:notice.offsetTop-120,behavior:"smooth"})}
 });
});

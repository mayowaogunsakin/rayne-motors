
document.addEventListener("DOMContentLoaded",()=>{
 const form=document.querySelector("#contactForm");if(!form)return;
 form.addEventListener("submit",e=>{e.preventDefault();const notice=document.querySelector("#contactNotice");let ok=true;form.querySelectorAll("[required]").forEach(f=>{if(!f.value.trim())ok=false});notice.className=`notice ${ok?"success":"error"}`;notice.textContent=ok?"DEMO ENQUIRY RECEIVED — This concept form does not send real messages.":"Please complete the required fields.";if(ok)form.reset()});
});

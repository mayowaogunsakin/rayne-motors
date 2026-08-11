
document.addEventListener("DOMContentLoaded",()=>{
 const form=document.querySelector("[data-auth-form]");if(!form)return;
 form.addEventListener("submit",e=>{e.preventDefault();const notice=document.querySelector("#authNotice");notice.className="notice success";notice.textContent="Demo form submitted. No real account has been created or authenticated.";form.reset()});
});

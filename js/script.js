const share_btn=document.querySelector("#share-btn");
const share_modal=document.querySelector(".card__share-active");
const share_modal_button=document.querySelector(".card__share-active-icon");
share_btn.addEventListener("click",()=>{
    share_modal.classList.toggle("active");
});

share_modal_button.addEventListener("click",()=>{
    share_modal.classList.toggle("active");
});
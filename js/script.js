
let sidebarOpen = document.querySelector(".info-toggle"),
    sidebarClose = document.querySelector(".page-header__info-close");
    sidebar = document.querySelector(".page-header__info");

if (sidebarOpen && sidebar) {
 sidebar.classList.remove("page-header__info--no-js");
 sidebarOpen.addEventListener("click", function(e) {
   e.preventDefault();
   sidebar.classList.add("page-header__info--active");
 });

 sidebarClose.addEventListener("click", function() {
   if (sidebar.classList.contains("page-header__info--active")) {
     sidebar.classList.remove("page-header__info--active");
   }
 });

 window.addEventListener("keydown", function(event) {
   if (event.keyCode == 27) {
     if (sidebar.classList.contains("page-header__info--active")) {
       sidebar.classList.remove("page-header__info--active");
     }
   }
 });
}

// paginator
let paginatorDisabled = document.querySelectorAll('.paginator__item--disabled');

  if (paginatorDisabled) {
    for (i = 0; i < paginatorDisabled.length; i++) {
			paginatorDisabled[i].addEventListener('click', function (e) {
			 e.preventDefault();
			});
		}
  }

    
  
  //form msg popup
let formMsgPopup = document.querySelector('.msg-popup'),
    formMsgPopupClose = document.querySelector('.msg-popup__close');

if (formMsgPopup && formMsgPopupClose) {

  formMsgPopupClose.addEventListener('click', function (e) {
  e.preventDefault();

  // setTimeout(function(){
    formMsgPopup.classList.remove('msg-popup--active');
  // },800);

  });
}
function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(document).ready(function() {
  $(".header-burger").click(function () {
    $(".header-burger,.main-sign,.sign-popup,.main-account,.account-popup,.footer-account,.header-account__exit").toggleClass("active");
    $("body").toggleClass("lock");
  });

  if(document.location.pathname == "/pa-balance.html" || document.location.pathname == "/pa-withdraw.html"){
    $('.header-account-crumbs').addClass("active");
    if(document.location.pathname == "/pa-balance.html") {
      $('.header-account-crumbs__text').text("Пополнить баланс")
    }
    if(document.location.pathname == "/pa-withdraw.html") {
      $('.header-account-crumbs__text').text("Вывод средств")
    }
  }
})
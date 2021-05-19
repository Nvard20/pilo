var mySwiper = new Swiper('.first-slider', {
    effect: 'coverflow', // 'cube', 'fade', 'coverflow',
    loop: true,
    pagination: ".swiper-pagination",
    speed: 500,
    autoplay: true,
  });
 

  var sw = new Swiper('.sw', {
    slidesPerView: 4,
    spaceBetween: 40,
    // freeMode: true,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      // clickable: true,
    },
    breakpoints: {
      700: {
        slidesPerView: 1,
        spaceBetween: 40,

      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 40,

      },
      '@1.00': {
        slidesPerView: 1,
      },
      '@1.50': {
        slidesPerView: 1,
      },
    }
  });
  (function() {

var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),

    doToggle: function(e) {
        e.preventDefault();
        this.navToggle.classList.toggle('expanded');
        this.nav.classList.toggle('expanded');
    }
};

hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());


$('.header').on('click', '.search-toggle', function(e) {
  var selector = $(this).data('selector');

      $(selector).toggleClass('show').find('.search-input').focus();
      $(this).toggleClass('active');

      e.preventDefault();
});
$('.new-category').on('click',  function() {
  $('.new').css("display"," block");
  $('.skid').css("display"," none");
  $('.sale').css("display","none");


})
$('.skid-category').on('click',  function() {
  $('.skid').css("display"," block");
  $('.sale').css("display"," block");

  $('.new').css("display","none");

})



function openNav() {
  document.getElementById("mySidepanel").style.display="block";
 
document.getElementById("mySidepanel").style.width = "230px";

}

function closeNav() {
document.getElementById("mySidepanel").style.width = "0";
}
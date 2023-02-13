/* GENERAL PAGE */

let i = 1;

$.each($('.generalBlocks > div'), function (key, value) {
  i++;
  console.log('1')
  if (i & 1) {
    $(this).addClass('generalBlockReverse')
  }
})

$('.mobileFooterItem').click(function () {
  $(this).toggleClass('mobileFooterActive')
  $(this).find('.mobileFooterItemLinks').toggleClass('mobileFooterItemLinksActive')
})


const swiperText = new Swiper('.swiperText', {
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  scrollbar: {
    el: '.swiper-scrollbar',
  },

});

const customerSlider = new Swiper('.customerSlider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3.2,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // mobile + tablet - 320-990
    320: {
      slidesPerView: 1.2,
      slidesPerGroup: 1,
    },
  
    
    // desktop >= 991
    991: {
      slidesPerView: 3.2,
      slidesPerGroup: 3,
    }
  }
});


const productSlider = new Swiper('.productSlider', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    // mobile + tablet - 320-990
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    // desktop >= 430 - 990
    491: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    // desktop >= 991
    991: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    }
  }
});


/* TABS GENERATE */

$.each($('.tabItem'), function (key, value) {
  $(this).addClass('tabClass_' + key)
  var button_name = $(this).attr('tab-name')
  $('.tabsMenu').append(`<p id="tab_` + key + `">` + button_name + `</p>`)
})

$(".tabsMenu").delegate("p", "click", function () {
  var activeNumber = $(this).attr('id').replace('tab_', '')
  var activeTab = 'tabClass_' + activeNumber;

  $(".tabsMenu p").removeClass('tabsMenuActive')
  $(this).addClass('tabsMenuActive')

  $('.tabItem').removeClass('tabVisible')

  $.each($('.tabItem'), function (key, value) {
    if ($(this).hasClass(activeTab)) {
      $(this).addClass('tabVisible')
    }
  })
});


/* MENU */

var menuOpen = false;

$('.hamburger').click(function () {
  $('.mobileMenu').toggleClass('mobileMenuActive')
  $(this).toggleClass('is-active')
  $('.menuWrapper').toggleClass('navActiveColor')

  if (menuOpen === false) {
    $('body, html').attr('style', 'overflow: hidden')

  } else {
    $('body, html').attr('style', 'overflow: scroll')
  }

  menuOpen = !menuOpen
})
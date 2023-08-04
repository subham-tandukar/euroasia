var $ = jQuery;

// Fancybox Config
Fancybox.bind('[data-fancybox="gallery"]', {
  //
});

$(".banner-carousel").owlCarousel({
  nav: true,
  dots: false,
  loop: true,
  items: 1,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
});
$(".destination-carousel").owlCarousel({
  center: true,
  items: 1,
  loop: true,
  margin: 30,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    960: {
      items: 2,
    },
  },
});
$(".testimonial-carousel").owlCarousel({
  nav: true,
  dots: false,
  // loop: true,
  items: 3,
  margin: 40,
  // autoplay: true,
  // autoplayTimeout: 5000,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    640: {
      items: 2,
    },
    960: {
      items: 3,
    },
  },
});
$(".related-carousel").owlCarousel({
  nav: false,
  dots: true,
  // loop: true,
  items: 3,
  margin: 40,
  autoHeight: true,
  // autoplay: true,
  // autoplayTimeout: 5000,
  // autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    640: {
      items: 2,
    },
    960: {
      items: 3,
    },
  },
});

$(
  "#offcanvas-overlay #primary-menu1 > li.menu-item-has-children, #offcanvas-overlay #primary-menu1 > li.menu-item-has-children ul li.menu-item-has-children"
).append('<span><i class="fa-solid fa-caret-down"></i></span>');
$(document).on(
  "click",
  "#offcanvas-overlay #primary-menu1 li.menu-item-has-children span",
  function (event) {
    $(this).parent("li").children("ul").slideToggle();
    $(this).parent("li").children("ul").toggleClass("show");
  }
);

//  -----------------------------------------

$(".content__title").click(function () {
  const $this = $(this),
    parent = $this.closest("li"),
    accordionBody = $this.siblings(".content__desc"),
    siblingItem = parent.siblings(),
    siblingBody = siblingItem.find(".content__desc");

  if (parent.hasClass("active")) {
    parent.removeClass("active");
    accordionBody.slideUp();
  } else {
    parent.addClass("active");
    accordionBody.slideDown();
    siblingItem.removeClass("active");
    siblingBody.slideUp();
  }
});

$(".detailed__itinerary ul li").each(function () {
  if ($(this).hasClass("active")) {
    $(this).find(".detailed__itinerary .content__desc").slideDown();
  }
});
$(".trip__content__wrapper").each(function () {
  if ($(this).hasClass("active")) {
    $(this).find(".toggleContent").slideDown();
    $(this).toggleClass("activecontent");
  }
});

$(".openAllBtn").click(function (e) {
  e.preventDefault();

  const parentWrapper = $(this).closest("#itinerary"),
    item = parentWrapper.find(".detailed__itinerary li"),
    itemBody = parentWrapper.find(".detailed__itinerary .content__desc");

  if ($(this).hasClass("active")) {
    $(this).text("Show Detail Itinerary");
    item.removeClass("active");
    itemBody.slideUp();
    $(this).removeClass("active");
  } else {
    $(this).text("Show Outline Itinerary");
    item.addClass("active");
    itemBody.slideDown();
    $(this).addClass("active");
  }
});

$(document).on("click", ".trip__content__wrapper h4", function (event) {
  $(this).siblings(".toggleContent").slideToggle();
  $(this).parent(".trip__content__wrapper").toggleClass("activecontent");
});

$(".team__content .the__content").readmore({
  speed: 220,
  lessLink: '<a href="#">Read Less</a>',
});

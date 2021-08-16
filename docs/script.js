$(document).ready(function () {
  /* constractor scrpit */
  gen_hexagon();
  $(window).resize(function () {
    $(".bg-container").empty();
    gen_hexagon();
  });

  /* navbar script */
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
  });

  /* toggle menu/navbar script */
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".navbar i").toggleClass("active");
  });
  $(".menu > li > a").click(function () {
    $(".navbar .menu").removeClass("active");
    $(".navbar i").removeClass("active");
  });

  /* typing animation script */
  var typed = new Typed(".typing-1", {
    strings: ["Gamer", "Developer", "Blogger", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing-2", {
    strings: ["Gamer", "Developer", "Blogger", "Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  /* toggle card-detail/skills script */
  $(".card").click(function () {
    inactive(".card-detail", this);
    inactive(".card-content > i:last-child", this);
    $(".card-detail", this).toggleClass("active");
    $(".card-content > i:last-child", this).toggleClass("active");
  });

  /* toggle qualification-content/qualification script */
  $(".tab-btn").click(function () {
    let id = $(this).attr("id");
    inactive(".tab-btn", this);
    $(this).addClass("active");
    switch (id) {
      case "education-btn": {
        $("#education").addClass("active");
        $(".qualification-content").not("#education").removeClass("active");
        break;
      }
      case "work-btn": {
        $("#work").addClass("active");
        $(".qualification-content").not("#work").removeClass("active");
        break;
      }
    }
  });

  /* slide animation script */
  $(".project").slick({
    dots: true,
    prevArrow: '<i class="uil uil-angle-left slick-arrow prev"></i>',
    nextArrow: '<i class="uil uil-angle-right slick-arrow next"></i>',
  });
});

function gen_hexagon() {
  let hexagon_w = $(window).width() / 100,
    hexagon_h = $(window).height() / 100 + 1;
  for (i = 0; i < hexagon_h; i++) {
    $(".bg-container").append('<div class="row row-' + i + '"></div>');
    for (j = 0; j < hexagon_w; j++) {
      $(".bg-container .row.row-" + i + "").append(
        '<div class="hexagon"></div>'
      );
    }
  }
}

function inactive(element, obj) {
  $(element)
    .not($($(element, obj)))
    .removeClass("active");
}

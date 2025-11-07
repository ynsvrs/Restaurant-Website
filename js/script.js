// menu filtter buttons
$(document).ready(function() {
  $(".menu-filters button").click(function() {
    const filter = $(this).attr("data-filter");
    $(".menu-filters button").removeClass("active");
    $(this).addClass("active");

    if (filter === "all") {
      $(".menu-item").show("slow");
    } else {
      $(".menu-item").not(`[data-category='${filter}']`).hide("slow");
      $(`.menu-item[data-category='${filter}']`).show("slow");
    }
  });

  // modal for dish
  $("#dishModal").on("show.bs.modal", function(event) {
    const button = $(event.relatedTarget);
    const name = button.data("name");
    const desc = button.data("desc");
    const price = button.data("price");
    const img = button.data("img");

    $("#modal-name").text(name);
    $("#modal-desc").text(desc);
    $("#modal-price").text(price);
    $("#modal-img").attr("src", img);
  });
});




// GALLERY
// gallery filter
$(document).ready(function() {
  $('.menu-filters button').click(function() {
    const filter = $(this).attr('data-filter');
    $('.menu-filters button').removeClass('active');
    $(this).addClass('active');

    if (filter === 'all') {
      $('.gallery-item').fadeIn();
    } else {
      $('.gallery-item').hide();
      $(`.gallery-item[data-category="${filter}"]`).fadeIn();
    }
  });

  // lightbox
  $('.gallery-card img').click(function() {
    const src = $(this).attr('src');
    const caption = $(this).siblings('.overlay').find('h5').text();
    $('#lightbox-img').attr('src', src);
    $('#lightbox-caption').text(caption);
    $('#lightbox').fadeIn();
  });

  $('.close').click(function() {
    $('#lightbox').fadeOut();
  });
});
// fade-in scroll effect 
$(window).on("scroll load", function() {
  $('[data-fade]').each(function() {
    const top = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scroll + windowHeight - 100 > top) {
      $(this).addClass('show');
    }
  });
});

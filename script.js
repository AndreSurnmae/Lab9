$(document).ready(function () {
  $(".gallery-flexbox .card img").on("click", function () {
    const imgSrc = $(this).attr("src");
    const imgCaption = $(this).siblings("p").text();
    $("#lightboxImage").attr("src", imgSrc);
    $("#lightboxCaption").text(imgCaption);
    $("#lightbox").fadeIn(500);
  });
  $(".close").on("click", function () {
    $("#lightbox").fadeOut(500);
  });
  $("#lightbox").on("click", function (e) {
    if (e.target !== this) return;
    $(this).fadeOut(500);
  });
  $(".card").show();

  $(".btn").click(function () {
    var filterValue = $(this).attr("data-filter");

    $(".btn").removeClass("active");
    $(this).addClass("active");

    if (filterValue === "All") {
      $(".card").show();
    } else {
      $(".card").hide();
      $("." + filterValue).show();
    }
  });
});

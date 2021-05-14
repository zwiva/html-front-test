console.log('aaaaaa');

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


$(function () {
  $(".card-text").on("dblclick", function () {
    $(this).css("color", "black");
    $(this).css("font-weight", "bold");
  });
  $(".card-img-top").on("click", function () {
    $(".card-body").toggle();
  });
});

$(function (){
  $("a").click(function(event){
      if (this.hash !== "") {
          event.preventDefault();
          var ids = this.hash;
          $("html, body").animate({scrollTop: $(ids).offset().top}, 800, function() {
              window.location.hash = ids;
          });
      }
  });
});
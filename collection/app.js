  $(document).ready(function() {
  $('.filterizr-filter span').click(function() {
    $('.filterizr-filter span').removeClass('active');
    $(this).addClass('active');
  });
  var filterizd = $('.filtr-container').filterizr();
});
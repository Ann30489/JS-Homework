$(function () {
  let tab = $('#tabs .tabs-items > div');
  tab.hide().filter(':first').show();

  $('#tabs .tabs-nav a').click(function () {
    tab.hide();
    tab.filter(this.hash).show();
    $('#tabs .tabs-nav a').removeClass('active');
    $(this).addClass('active');
    return false;
  }).filter(':first').click();

  if (window.location.hash) {
    $('#tabs-nav a[href=' + window.location.hash + ']').click();
    window.scrollTo(0, $("#".window.location.hash).offset().top);
  }
});
$(document).ready(function(){
    $('.main_head').css('min-height', $(window).height());
    var finalDate="2015/11/15 11:00:00";
    $('.days').countdown(finalDate, {elapse: true}).on('update.countdown', function(event) {
    if (event.elapsed) {
        $('.message').text("We are already married for ");
        $(this).text(event.strftime('%D days'));
        $('.hours').text(event.strftime('%H:%M:%S'));
    } 
    else {
        $('.message').text("Our wedding is in");
        $(this).text(
        event.strftime('%D days')
        )
        $('.hours').text(
        event.strftime('%H:%M:%S')
        )
  }
  });    
});
$(document).ready(function(){
    var finalDate="2015/11/15 11:00:00";
    $('.days').countdown(finalDate, {elapse: true}).on('update.countdown', function(event) {
    if (event.elapsed) {
        $('.message').text("We are already married for ");
        $(this).text(event.strftime('%D days'));
        $('.hours').text(event.strftime('Hours %H:%M:%S'));
    } 
    else {
        $('.message').text("Our wedding are in");
        $(this).text(
        event.strftime('%D days')
        )
        $('.hours').text(
        event.strftime('%H:%M:%S')
        )
  }
  });    
});
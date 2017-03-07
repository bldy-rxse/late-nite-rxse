var $target = $('#main');
inView('.song_body').on('enter', function(el){
  var color = $(el).attr('data-background-color');
  $target.css('background-color', color );
});

inView.threshold(0.5);
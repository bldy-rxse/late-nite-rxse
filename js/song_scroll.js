var $target = $('#main');
inView('.song_body').on('enter', function(el){
  var color = $(el).attr('data-background-color');
  $target.css('background-color', color );
});

inView.threshold(0.5);

$(window).resize(function(){
	var win = $(this);
	if (win.width() <= 767) {
		inView.threshold(0);
	}

	if (win.width() >= 768) {
		inView.threshold(0.5);
	}
});

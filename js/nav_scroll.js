$(document).ready(function() {
	$(window).scroll(function() {
		var checkpoint = $('#hero').height();
		if ($('#bldy-nav').offset().top >= checkpoint ) {
			$('.cls-1').css('fill', 'rgb(0, 0, 0)');
			$('.share_area ul li p').css("color", "black");
			$('.share_area ul li a .fa.fa-twitter').css("color", "black");
			$('.share_area ul li a .fa.fa-facebook').css("color", "black");
		} else {
			$('.cls-1').css('fill', 'rgb(255, 255, 255)');
			$('.share_area ul li p').css("color", "white");
			$('.share_area ul li a .fa.fa-twitter').css("color", "white");
			$('.share_area ul li a .fa.fa-facebook').css("color", "white");
		}
	});
});
$(document).ready(function() {

	// Smooth Scrolling
	$('a[href*="#"]:not([href="#"])').click(function() {
	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  if (target.length) {
	    $('html, body').animate({
	      scrollTop: target.offset().top
	    }, 300);
	    return false;
	  }
	}
	});

	let btnTop = $('#bcktoTop');

	$(window).scroll(function(){
		if ($(window).scrollTop() > 400) {
			btnTop.addClass('show');
		}
		else{
			btnTop.removeClass('show');
		}
	});

	btnTop.on('click', function(e) {
  		e.preventDefault();
  		$('html, body').animate({scrollTop:0}, '300');
	});


});
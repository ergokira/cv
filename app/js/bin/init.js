(function($){
  $(function(){

  	var options = [
    	{selector: '.abilities', offset: 300, callback: function(el) { Materialize.showStaggeredList($(el)); } },
    	{selector: 'footer', offset: 300, callback: function(el) { Materialize.showStaggeredList($(el)); } }
  	];
  	Materialize.scrollFire(options);

    $(".button-collapse").sideNav({closeOnClick: true})

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

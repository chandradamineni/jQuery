/**
 * Created by chandu D.
 * Image siding function.
 * jquery
 */

(function($) {

	$.fn.jFlow = function(options) {
		var opts = $.extend({}, $.fn.jFlow.defaults, options);
		var randNum = Math.floor(Math.random()*11);
		var jFC = opts.controller;
		var jFS =  opts.slideWrapper;
		var jSel = opts.selectedWrapper;

		var cur = 0;
		var timer;
		var maxi = $(jFC).length - 1;
		var autoMove = opts.next;
		var displayDuration = 7500;

		// sliding function
		var slide = function (dur, i) {
			$(opts.slides).children().css({
				overflow:"hidden"
			});
			$(opts.slides + " iframe").hide().addClass("temp_hide");
			$(opts.slides).animate({
				marginLeft: "-" + (i * $(opts.slides).find(":first-child").width() + "px")
				},
				opts.duration*(dur),
				opts.easing,
				function(){
					$(opts.slides).fadeIn('200');
					$(opts.slides).children().css({
						overflow:"hidden"
					});
					$(".temp_hide").show();
				}
			);

		}
		$(this).find(jFC).each(function(i){
			$(this).click(function(){
				dotimer();
				if ($(opts.slides).is(":not(:animated)")) {
					$(jFC).removeClass(jSel);
					$(this).addClass(jSel);
					if(opts.direction == 'right'){ //direction edit for controller
						that = maxi - i;
					} else {
						that = i;
					}
					var dur = Math.abs(cur-that);
					slide(dur,that);
					cur = that;
				}
			});
		});

		$(opts.slides).before('<div id="'+jFS.substring(1, jFS.length)+'"></div>').appendTo(jFS);

		$(opts.slides).find("div").each(function(){
			$(this).before('<div class="jFlowSlideContainer"></div>').appendTo($(this).prev());
		});

		//direction settings
		if(opts.direction == 'right'){
			cur = maxi; //starting from last slide
			autoMove = opts.prev; //changing the auto-scroll direction
			$(opts.slides).children().each(function(e){ //inverting the slide order
				if(e > 0){
					var child = $(this).detach();
					$(opts.slides).prepend(child);
				}
			});
		}



})(jQuery);
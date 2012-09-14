	// expanding panels which sliiide out
	$.fn.expandulator = function(opts){
		opts = $.extend({
			width:308,
			triggers: $('.trigger', this),
			slider: $('#slider'),
			url:'',
			callback:null
		},
		opts || {});

		opts.width = opts.width ? opts.width : $('#slider').outerWidth(true);

		opts.triggers.click(function(){
			if ($(this).hasClass('selected')) {
				$('#slider').animate({'right':0});				
				opts.triggers.removeClass('selected');
				$('#slider div').fadeOut();
			} else {
				opts.triggers.removeClass('selected');
				$(this).addClass('selected');
				
				$('#slider').addClass('loading').animate({'right':'-'+opts.width+'px'});
				$('#slider div').fadeOut();

			// quick check here if already is loaded...?

				if (opts.url) {
					$('#slider div').load(opts.url+'?d='+$(this).data('arg'), function(response,err) {
						$(this).stop(true);
						if(opts.callback) callback.apply(this);
						$('#slider').removeClass('loading');
						$(this).fadeIn();
					});
				}

			}
		});

	};


/**
 * ThemesRobot ShareIt scripts
 * http://demo.themesrobot.com/shareit/
 */

;var QL_ShareIt;

(function($){

	QL_ShareIt = {

		init: function() {
			if ( $('#fb-root').length == 0 ) {
				$('body').append('<div id="fb-root" />');
			}
			this.parseArgs();
			this.loadFB();
		},

		loadFB: function() {
			window.fbAsyncInit = function() {
				FB.init({
					appId  : shareitjs.app_id,
					status : true,
					xfbml  : true
				});
			};

			(function(d, s, id){
				var js, fjs = d.getElementsByTagName(s)[0];
				if (d.getElementById(id)) {return;}
				js = d.createElement(s); js.id = id;
				js.src = "//connect.facebook.net/en_US/all.js";
				fjs.parentNode.insertBefore(js, fjs);
			}(document, 'script', 'facebook-jssdk'));
		},

		makeLinks: function() {
			$('.tr_shareit-facebook').each(function(){
				$(this).on('click', function(e){
					e.preventDefault();
					var $this = $(this);
					if ( 'object' == typeof FB ) {
						FB.ui({
								method: 'feed',
								name: $this.data('name'),
								link: $this.data('link'),
								picture: $this.data('picture'),
								description: $this.data('description')
							},
							function (response) {
								if (response && response.post_id) {
									alert( shareitjs.fb_published );
								} else {
									alert( shareitjs.fb_not_published );
								}
							}
						);
					}
				});
			});
		},

		parseArgs: function(){
			$.each(shareitjs, function(index, value) {
				if( '0' == value || '1' == value ){
					shareitjs[index] = '0' != value;
				} else if( typeof value === 'string' && ! value.match(/[a-z]/i) && parseInt( value ) ){
					shareitjs[index] = parseInt(value);
				} else if( typeof value === 'string' && ! value.match(/[a-z]/i) && parseFloat(value) ){
					shareitjs[index] = parseFloat(value);
				}
			});
		}
	};

	$(document).ready(function() {
		QL_ShareIt.init();
	});

	$(window).load(function() {
		QL_ShareIt.makeLinks();
	});

})(jQuery);

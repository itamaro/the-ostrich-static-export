/* Admin script for WordPress Editor (TinyMCE 4.0) by ThemesRobot */

tinymce.PluginManager.add('trShareItMenu', function(ed, url) {

	function checkMedia( $node, urlOnly ) {
	    var $image = jQuery( 'img', $node ),
            media = '',
		    url = '';
        if ( $image.length > 0 ) {
            url = $image.attr('src');
            media = 'media="' + url + '"';
        }
	    if ( urlOnly ) {
		    return url;
	    }
	    return media;
    }
	function dialog( t, sc, w, h ) {
		return {
			text : t,
			onclick : function() {
				var media = checkMedia( jQuery( ed.selection.getNode() ), true );
				ed.windowManager.open({
					file : ajaxurl + '?action=tr_shareit_editor_menu&box='+sc+'&title='+t+'&selected=' + encodeURIComponent(ed.selection.getContent())+'&security='+trsiEditorVars.nonce+'&media='+media,
					width : w,
					height : h,
					inline : 1
				});
			}
		};
	}
	function wrap( t, sc ) {
		return {
			text : t,
			onclick : function() {
				var media = checkMedia( jQuery( ed.selection.getNode() ), false );
				ed.selection.setContent('[' + sc + ' ' + media + ']' + ed.selection.getContent() + '[/' + sc + ']');
			}
		};
	}

	var items = [
		dialog( trsiEditorVars.toggle, 'tr-shareit', 400, 610 ),
		wrap( trsiEditorVars.wrap, 'tr-shareit' )
	];

	ed.addButton('btntrShareItMenu', {
		type: 'menubutton',
		text: '',
		icon: 'trshareit',
		tooltip: trsiEditorVars.title,
		menu: items
	});

});

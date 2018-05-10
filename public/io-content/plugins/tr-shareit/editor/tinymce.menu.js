/* Admin script for WordPress Editor (TinyMCE) by ThemesRobot */

;(function() {
    tinymce.create('tinymce.plugins.trShareItMenu', {
		init : function(ed, url) {
			tinymce.plugins.trShareItMenu.theurl = url;
		},
        createControl: function(n, cm) {
            if (n != 'btntrShareItMenu') return null;
		
			var p = this;
			var c = cm.createSplitButton('trShareItMenu', {
				title : trsiEditorVars.title,
				image : tinymce.plugins.trShareItMenu.theurl + '/themesrobot.png',
				onclick: function(){
					c.showMenu();
				}
			});
			
			c.onRenderMenu.add(function(c, m) {
				tinymce.plugins.trShareItMenu.ed = ed = tinyMCE.activeEditor;
				
				m.add({title : trsiEditorVars.title, 'class' : 'mceMenuItemTitle'}).setDisabled(1);

				p.trLaunchDialog( m, trsiEditorVars.toggle, 'tr-shareit', 400, 610 );
				p.trWrap( m, trsiEditorVars.wrap, 'tr-shareit');

				//p.trInsert( m, trsiEditorVars.insert, 'toggle' );
			});

			return c;
        },

	    checkMedia: function( $node, urlOnly ) {
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
	    },

		trLaunchDialog : function(m, t, sc, w, h){
			var p = this;
			m.add({ title : t, onclick : function() {
				var media = p.checkMedia( jQuery( ed.selection.getNode() ), true );
				tinymce.plugins.trShareItMenu.ed.windowManager.open({
					file : ajaxurl + '?action=tr_shareit_editor_menu&box='+sc+'&title='+t+'&selected=' + encodeURIComponent(ed.selection.getContent())+'&security='+trsiEditorVars.nonce+'&media='+media,
					width : w,
					height : h,
					inline : 1
				});
				}
			});
		},
		trWrap : function(m, t, sc) {
			var p = this;
			m.add({ title : t, onclick : function() {
				var media = p.checkMedia( jQuery( ed.selection.getNode() ), false );
				tinymce.plugins.trShareItMenu.ed.selection.setContent('[' + sc + ' ' + media + ']' + tinymce.plugins.trShareItMenu.ed.selection.getContent() + '[/' + sc + ']');
			}})
		},
		trInsert : function(m, t, sc){
			m.add({title : t, onclick : function() {
				tinymce.plugins.trShareItMenu.ed.selection.setContent('[' + sc + '/]');
			}});
		}
    });
    tinymce.PluginManager.add('trShareItMenu', tinymce.plugins.trShareItMenu);
})();

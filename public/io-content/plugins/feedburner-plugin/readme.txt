=== FD Feedburner Plugin ===
Contributors: fd
Donate link: http://flagrantdisregard.com/feedburner/
Tags: feedburner, redirect, rss, feed
Requires at least: 2.0
Tested up to: 4.3
Stable tag: trunk

Redirects the main feed and optionally the comments feed seamlessly and
transparently to Feedburner.com.

== Description ==

Redirects the main feed and optionally the comments feed to Feedburner.com. It
does this seamlessly without the need to modify templates, setup new hidden
feeds, modify .htaccess files, or asking users to migrate to a new feed.  All
existing feeds simply become Feedburner feeds seamlessly and transparently for
all users. Just tell the plugin what your Feedburner feed URL is and you're
done.

Available in these languages:
English, Hungarian, German, Portuguese, Dutch, Italian, French, Turkish, Hebrew

Translators: Use the .pot file in the languages/ folder. Email .po files
(only) to me for inclusion in the plugin. Thank you!

== Installation ==

1. Copy the feedburner-plugin folder into wp-content/plugins
1. Activate the plugin through the Plugins menu
1. Configure your feed from the new Feedburner Settings submenu

== Changelog ==

= 1.48 =
* Added Catalan and Spanish translations by @ferran_munoz (http://ferranmunoz.com)

= 1.47 =
* Added Czech translation by Michal Stanke (http://www.mikk.cz)

= 1.46 =
* Added "Do not redirect author feeds" option. Patch contributed by Robert McFrazier (lxbn.lexblog.com)
* Translators: please update your translations to include the new author feeds message (msgid "Do not redirect author feeds") if you can. Thanks!
* Added Russian translation by Pribory Trista (http://vizitti.com)

= 1.45 =
* Moved options to Settings menu
* Fixed deprecated permission settings (caused deprecated notices)
Hat tip: Ben Gillbanks (http://twitter.com/binarymoon)
* Turkish transaltion by Semih YEŞİLYURT (http://webdiliedebiyati.com)
* Hebrew translation by Sagive (http://www.sagive.co.il)

= 1.44 =
* Fixed compatibility issue with Google Webmaster Tools.
Avoid redirecting Googlebot to avoid sitemap feeds issues
(http://www.google.com/support/feedburner/bin/answer.py?hl=en&answer=97090).
Patch contributed by Ivan Yarych.

= 1.43 =
* Added nonce verification (security) patch from Ulf Härnhammar <ulfharn@gmail.com>

= 1.42 =
* Localized configuration panel, added Hungarian translation thanks to Sepp Toth.
* German translation by Linus Metzler (http://limenet.ch)
* Brazilian Portuguese translation by Gervásio Antônio
* Dutch translation by Pieter (http://www.pieterc.be)
* Italian translation by Guter
* French translation by liryk (http://liryk.lautre.net)

= 1.41 =
* Added option to not redirect search result feeds

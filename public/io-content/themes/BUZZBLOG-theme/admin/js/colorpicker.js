(function(c){var m,x=65,H={eventName:"click",onShow:function(){},onBeforeShow:function(){},onHide:function(){},onChange:function(){},onSubmit:function(){},color:"ff0000",livePreview:!0,flat:!1},n=function(a,b){var f=h(a);c(b).data("colorpicker").fields.eq(1).val(f.r).end().eq(2).val(f.g).end().eq(3).val(f.b).end()},q=function(a,b){c(b).data("colorpicker").fields.eq(4).val(a.h).end().eq(5).val(a.s).end().eq(6).val(a.b).end()},p=function(a,b){c(b).data("colorpicker").fields.eq(0).val(j(h(a))).end()},
r=function(a,b){c(b).data("colorpicker").selector.css("backgroundColor","#"+j(h({h:a.h,s:100,b:100})));c(b).data("colorpicker").selectorIndic.css({left:parseInt(150*a.s/100,10),top:parseInt(150*(100-a.b)/100,10)})},s=function(a,b){c(b).data("colorpicker").hue.css("top",parseInt(150-150*a.h/360,10))},t=function(a,b){c(b).data("colorpicker").currentColor.css("backgroundColor","#"+j(h(a)))},u=function(a,b){c(b).data("colorpicker").newColor.css("backgroundColor","#"+j(h(a)))},I=function(a){a=a.charCode||
a.keyCode||-1;if(a>x&&90>=a||32==a)return!1;!0===c(this).parent().parent().data("colorpicker").livePreview&&k.apply(this)},k=function(a){var b=c(this).parent().parent(),f;if(0<this.parentNode.className.indexOf("_hex")){f=b.data("colorpicker");var d=this.value,e=6-d.length;if(0<e){for(var g=[],y=0;y<e;y++)g.push("0");g.push(d);d=g.join("")}d=l(v(d));f.color=f=d}else 0<this.parentNode.className.indexOf("_hsb")?b.data("colorpicker").color=f=w({h:parseInt(b.data("colorpicker").fields.eq(4).val(),10),
s:parseInt(b.data("colorpicker").fields.eq(5).val(),10),b:parseInt(b.data("colorpicker").fields.eq(6).val(),10)}):(f=b.data("colorpicker"),d=parseInt(b.data("colorpicker").fields.eq(1).val(),10),e=parseInt(b.data("colorpicker").fields.eq(2).val(),10),g=parseInt(b.data("colorpicker").fields.eq(3).val(),10),d={r:Math.min(255,Math.max(0,d)),g:Math.min(255,Math.max(0,e)),b:Math.min(255,Math.max(0,g))},f.color=f=l(d));a&&(n(f,b.get(0)),p(f,b.get(0)),q(f,b.get(0)));r(f,b.get(0));s(f,b.get(0));u(f,b.get(0));
b.data("colorpicker").onChange.apply(b,[f,j(h(f)),h(f)])},J=function(){c(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus")},K=function(){x=0<this.parentNode.className.indexOf("_hex")?70:65;c(this).parent().parent().data("colorpicker").fields.parent().removeClass("colorpicker_focus");c(this).parent().addClass("colorpicker_focus")},L=function(a){var b=c(this).parent().find("input").focus();a={el:c(this).parent().addClass("colorpicker_slider"),max:0<this.parentNode.className.indexOf("_hsb_h")?
360:0<this.parentNode.className.indexOf("_hsb")?100:255,y:a.pageY,field:b,val:parseInt(b.val(),10),preview:c(this).parent().parent().data("colorpicker").livePreview};c(document).bind("mouseup",a,z);c(document).bind("mousemove",a,A)},A=function(a){a.data.field.val(Math.max(0,Math.min(a.data.max,parseInt(a.data.val+a.pageY-a.data.y,10))));a.data.preview&&k.apply(a.data.field.get(0),[!0]);return!1},z=function(a){k.apply(a.data.field.get(0),[!0]);a.data.el.removeClass("colorpicker_slider").find("input").focus();
c(document).unbind("mouseup",z);c(document).unbind("mousemove",A);return!1},M=function(){var a={cal:c(this).parent(),y:c(this).offset().top};a.preview=a.cal.data("colorpicker").livePreview;c(document).bind("mouseup",a,B);c(document).bind("mousemove",a,C)},C=function(a){k.apply(a.data.cal.data("colorpicker").fields.eq(4).val(parseInt(360*(150-Math.max(0,Math.min(150,a.pageY-a.data.y)))/150,10)).get(0),[a.data.preview]);return!1},B=function(a){n(a.data.cal.data("colorpicker").color,a.data.cal.get(0));
p(a.data.cal.data("colorpicker").color,a.data.cal.get(0));c(document).unbind("mouseup",B);c(document).unbind("mousemove",C);return!1},N=function(){var a={cal:c(this).parent(),pos:c(this).offset()};a.preview=a.cal.data("colorpicker").livePreview;c(document).bind("mouseup",a,D);c(document).bind("mousemove",a,E)},E=function(a){k.apply(a.data.cal.data("colorpicker").fields.eq(6).val(parseInt(100*(150-Math.max(0,Math.min(150,a.pageY-a.data.pos.top)))/150,10)).end().eq(5).val(parseInt(100*Math.max(0,Math.min(150,
a.pageX-a.data.pos.left))/150,10)).get(0),[a.data.preview]);return!1},D=function(a){n(a.data.cal.data("colorpicker").color,a.data.cal.get(0));p(a.data.cal.data("colorpicker").color,a.data.cal.get(0));c(document).unbind("mouseup",D);c(document).unbind("mousemove",E);return!1},O=function(){c(this).addClass("colorpicker_focus")},P=function(){c(this).removeClass("colorpicker_focus")},Q=function(){var a=c(this).parent(),b=a.data("colorpicker").color;a.data("colorpicker").origColor=b;t(b,a.get(0));a.data("colorpicker").onSubmit(b,
j(h(b)),h(b));a.hide()},G=function(){var a,b,f,d=c("#"+c(this).data("colorpickerId"));d.data("colorpicker").onBeforeShow.apply(this,[d.get(0)]);var e=c(this).offset(),g="CSS1Compat"==document.compatMode;a=window.pageXOffset||(g?document.documentElement.scrollLeft:document.body.scrollLeft);b=window.pageYOffset||(g?document.documentElement.scrollTop:document.body.scrollTop);f=window.innerWidth||(g?document.documentElement.clientWidth:document.body.clientWidth);var h=e.top+this.offsetHeight,e=e.left,
h=h+176>b+(window.innerHeight||(g?document.documentElement.clientHeight:document.body.clientHeight))?h-(this.offsetHeight+176):h+5;e+356>a+f&&(e-=356);d.css({left:e+"px",top:h+"px"});!1!=d.data("colorpicker").onShow.apply(this,[d.get(0)])&&d.show();c(document).bind("mousedown",{cal:d},F);return!1},F=function(a){R(a.data.cal.get(0),a.target,a.data.cal.get(0))||(!1!=a.data.cal.data("colorpicker").onHide.apply(this,[a.data.cal.get(0)])&&a.data.cal.hide(),c(document).unbind("mousedown",F))},R=function(a,
b,c){if(a==b)return!0;if(a.contains)return a.contains(b);if(a.compareDocumentPosition)return!!(a.compareDocumentPosition(b)&16);for(b=b.parentNode;b&&b!=c;){if(b==a)return!0;b=b.parentNode}return!1},w=function(a){return{h:Math.min(360,Math.max(0,a.h)),s:Math.min(100,Math.max(0,a.s)),b:Math.min(100,Math.max(0,a.b))}},v=function(a){a=parseInt(-1<a.indexOf("#")?a.substring(1):a,16);return{r:a>>16,g:(a&65280)>>8,b:a&255}},l=function(a){var b={};b.b=Math.max(Math.max(a.r,a.g),a.b);b.s=0>=b.b?0:Math.round(100*
(b.b-Math.min(Math.min(a.r,a.g),a.b))/b.b);b.b=Math.round(100*(b.b/255));b.h=a.r==a.g&&a.g==a.b?0:a.r>=a.g&&a.g>=a.b?60*(a.g-a.b)/(a.r-a.b):a.g>=a.r&&a.r>=a.b?60+60*(a.g-a.r)/(a.g-a.b):a.g>=a.b&&a.b>=a.r?120+60*(a.b-a.r)/(a.g-a.r):a.b>=a.g&&a.g>=a.r?180+60*(a.b-a.g)/(a.b-a.r):a.b>=a.r&&a.r>=a.g?240+60*(a.r-a.g)/(a.b-a.g):a.r>=a.b&&a.b>=a.g?300+60*(a.r-a.b)/(a.r-a.g):0;b.h=Math.round(b.h);return b},h=function(a){var b,c,d;b=Math.round(a.h);var e=Math.round(255*a.s/100);a=Math.round(255*a.b/100);if(0==
e)b=c=d=a;else{var e=(255-e)*a/255,g=(a-e)*(b%60)/60;360==b&&(b=0);60>b?(b=a,d=e,c=e+g):120>b?(c=a,d=e,b=a-g):180>b?(c=a,b=e,d=e+g):240>b?(d=a,b=e,c=a-g):300>b?(d=a,c=e,b=e+g):360>b?(b=a,c=e,d=a-g):d=c=b=0}return{r:Math.round(b),g:Math.round(c),b:Math.round(d)}},j=function(a){var b=[a.r.toString(16),a.g.toString(16),a.b.toString(16)];c.each(b,function(a,c){1==c.length&&(b[a]="0"+c)});return b.join("")};m={init:function(a){a=c.extend({},H,a||{});if("string"==typeof a.color)a.color=l(v(a.color));else if(void 0!=
a.color.r&&void 0!=a.color.g&&void 0!=a.color.b)a.color=l(a.color);else if(void 0!=a.color.h&&void 0!=a.color.s&&void 0!=a.color.b)a.color=w(a.color);else return this;a.origColor=a.color;return this.each(function(){if(!c(this).data("colorpickerId")){var b="collorpicker_"+parseInt(1E3*Math.random());c(this).data("colorpickerId",b);b=c('<div class="colorpicker"><div class="colorpicker_color"><div><div></div></div></div><div class="colorpicker_hue"><div></div></div><div class="colorpicker_new_color"></div><div class="colorpicker_current_color"></div><div class="colorpicker_hex"><input type="text" maxlength="6" size="6" /></div><div class="colorpicker_rgb_r colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_g colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_rgb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_h colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_s colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_hsb_b colorpicker_field"><input type="text" maxlength="3" size="3" /><span></span></div><div class="colorpicker_submit"></div></div>').attr("id",
b);a.flat?b.appendTo(this).show():b.appendTo(document.body);a.fields=b.find("input").bind("keydown",I).bind("change",k).bind("blur",J).bind("focus",K);b.find("span").bind("mousedown",L);a.selector=b.find("div.colorpicker_color").bind("mousedown",N);a.selectorIndic=a.selector.find("div div");a.hue=b.find("div.colorpicker_hue div");b.find("div.colorpicker_hue").bind("mousedown",M);a.newColor=b.find("div.colorpicker_new_color");a.currentColor=b.find("div.colorpicker_current_color");b.data("colorpicker",
a);b.find("div.colorpicker_submit").bind("mouseenter",O).bind("mouseleave",P).bind("click",Q);n(a.color,b.get(0));q(a.color,b.get(0));p(a.color,b.get(0));s(a.color,b.get(0));r(a.color,b.get(0));t(a.color,b.get(0));u(a.color,b.get(0));a.flat?b.css({position:"relative",display:"block"}):c(this).bind(a.eventName,G)}})},showPicker:function(){return this.each(function(){c(this).data("colorpickerId")&&G.apply(this)})},hidePicker:function(){return this.each(function(){c(this).data("colorpickerId")&&c("#"+
c(this).data("colorpickerId")).hide()})},setColor:function(a){if("string"==typeof a)a=l(v(a));else if(void 0!=a.r&&void 0!=a.g&&void 0!=a.b)a=l(a);else if(void 0!=a.h&&void 0!=a.s&&void 0!=a.b)a=w(a);else return this;return this.each(function(){if(c(this).data("colorpickerId")){var b=c("#"+c(this).data("colorpickerId"));b.data("colorpicker").color=a;b.data("colorpicker").origColor=a;n(a,b.get(0));q(a,b.get(0));p(a,b.get(0));s(a,b.get(0));r(a,b.get(0));t(a,b.get(0));u(a,b.get(0))}})}};c.fn.extend({ColorPicker:m.init,
ColorPickerHide:m.hide,ColorPickerShow:m.show,ColorPickerSetColor:m.setColor})})(jQuery);

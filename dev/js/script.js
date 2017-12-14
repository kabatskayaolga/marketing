// Magnific Popup v1.1.0 by Dmitry Semenov
// http://bit.ly/magnific-popup#build=inline+image+ajax+iframe+gallery+retina+imagezoom
(function(a){typeof define=="function"&&define.amd?define(["jquery"],a):typeof exports=="object"?a(require("jquery")):a(window.jQuery||window.Zepto)})(function(a){var b="Close",c="BeforeClose",d="AfterClose",e="BeforeAppend",f="MarkupParse",g="Open",h="Change",i="mfp",j="."+i,k="mfp-ready",l="mfp-removing",m="mfp-prevent-close",n,o=function(){},p=!!window.jQuery,q,r=a(window),s,t,u,v,w=function(a,b){n.ev.on(i+a+j,b)},x=function(b,c,d,e){var f=document.createElement("div");return f.className="mfp-"+b,d&&(f.innerHTML=d),e?c&&c.appendChild(f):(f=a(f),c&&f.appendTo(c)),f},y=function(b,c){n.ev.triggerHandler(i+b,c),n.st.callbacks&&(b=b.charAt(0).toLowerCase()+b.slice(1),n.st.callbacks[b]&&n.st.callbacks[b].apply(n,a.isArray(c)?c:[c]))},z=function(b){if(b!==v||!n.currTemplate.closeBtn)n.currTemplate.closeBtn=a(n.st.closeMarkup.replace("%title%",n.st.tClose)),v=b;return n.currTemplate.closeBtn},A=function(){a.magnificPopup.instance||(n=new o,n.init(),a.magnificPopup.instance=n)},B=function(){var a=document.createElement("p").style,b=["ms","O","Moz","Webkit"];if(a.transition!==undefined)return!0;while(b.length)if(b.pop()+"Transition"in a)return!0;return!1};o.prototype={constructor:o,init:function(){var b=navigator.appVersion;n.isLowIE=n.isIE8=document.all&&!document.addEventListener,n.isAndroid=/android/gi.test(b),n.isIOS=/iphone|ipad|ipod/gi.test(b),n.supportsTransition=B(),n.probablyMobile=n.isAndroid||n.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),s=a(document),n.popupsCache={}},open:function(b){var c;if(b.isObj===!1){n.items=b.items.toArray(),n.index=0;var d=b.items,e;for(c=0;c<d.length;c++){e=d[c],e.parsed&&(e=e.el[0]);if(e===b.el[0]){n.index=c;break}}}else n.items=a.isArray(b.items)?b.items:[b.items],n.index=b.index||0;if(n.isOpen){n.updateItemHTML();return}n.types=[],u="",b.mainEl&&b.mainEl.length?n.ev=b.mainEl.eq(0):n.ev=s,b.key?(n.popupsCache[b.key]||(n.popupsCache[b.key]={}),n.currTemplate=n.popupsCache[b.key]):n.currTemplate={},n.st=a.extend(!0,{},a.magnificPopup.defaults,b),n.fixedContentPos=n.st.fixedContentPos==="auto"?!n.probablyMobile:n.st.fixedContentPos,n.st.modal&&(n.st.closeOnContentClick=!1,n.st.closeOnBgClick=!1,n.st.showCloseBtn=!1,n.st.enableEscapeKey=!1),n.bgOverlay||(n.bgOverlay=x("bg").on("click"+j,function(){n.close()}),n.wrap=x("wrap").attr("tabindex",-1).on("click"+j,function(a){n._checkIfClose(a.target)&&n.close()}),n.container=x("container",n.wrap)),n.contentContainer=x("content"),n.st.preloader&&(n.preloader=x("preloader",n.container,n.st.tLoading));var h=a.magnificPopup.modules;for(c=0;c<h.length;c++){var i=h[c];i=i.charAt(0).toUpperCase()+i.slice(1),n["init"+i].call(n)}y("BeforeOpen"),n.st.showCloseBtn&&(n.st.closeBtnInside?(w(f,function(a,b,c,d){c.close_replaceWith=z(d.type)}),u+=" mfp-close-btn-in"):n.wrap.append(z())),n.st.alignTop&&(u+=" mfp-align-top"),n.fixedContentPos?n.wrap.css({overflow:n.st.overflowY,overflowX:"hidden",overflowY:n.st.overflowY}):n.wrap.css({top:r.scrollTop(),position:"absolute"}),(n.st.fixedBgPos===!1||n.st.fixedBgPos==="auto"&&!n.fixedContentPos)&&n.bgOverlay.css({height:s.height(),position:"absolute"}),n.st.enableEscapeKey&&s.on("keyup"+j,function(a){a.keyCode===27&&n.close()}),r.on("resize"+j,function(){n.updateSize()}),n.st.closeOnContentClick||(u+=" mfp-auto-cursor"),u&&n.wrap.addClass(u);var l=n.wH=r.height(),m={};if(n.fixedContentPos&&n._hasScrollBar(l)){var o=n._getScrollbarSize();o&&(m.marginRight=o)}n.fixedContentPos&&(n.isIE7?a("body, html").css("overflow","hidden"):m.overflow="hidden");var p=n.st.mainClass;return n.isIE7&&(p+=" mfp-ie7"),p&&n._addClassToMFP(p),n.updateItemHTML(),y("BuildControls"),a("html").css(m),n.bgOverlay.add(n.wrap).prependTo(n.st.prependTo||a(document.body)),n._lastFocusedEl=document.activeElement,setTimeout(function(){n.content?(n._addClassToMFP(k),n._setFocus()):n.bgOverlay.addClass(k),s.on("focusin"+j,n._onFocusIn)},16),n.isOpen=!0,n.updateSize(l),y(g),b},close:function(){if(!n.isOpen)return;y(c),n.isOpen=!1,n.st.removalDelay&&!n.isLowIE&&n.supportsTransition?(n._addClassToMFP(l),setTimeout(function(){n._close()},n.st.removalDelay)):n._close()},_close:function(){y(b);var c=l+" "+k+" ";n.bgOverlay.detach(),n.wrap.detach(),n.container.empty(),n.st.mainClass&&(c+=n.st.mainClass+" "),n._removeClassFromMFP(c);if(n.fixedContentPos){var e={marginRight:""};n.isIE7?a("body, html").css("overflow",""):e.overflow="",a("html").css(e)}s.off("keyup"+j+" focusin"+j),n.ev.off(j),n.wrap.attr("class","mfp-wrap").removeAttr("style"),n.bgOverlay.attr("class","mfp-bg"),n.container.attr("class","mfp-container"),n.st.showCloseBtn&&(!n.st.closeBtnInside||n.currTemplate[n.currItem.type]===!0)&&n.currTemplate.closeBtn&&n.currTemplate.closeBtn.detach(),n.st.autoFocusLast&&n._lastFocusedEl&&a(n._lastFocusedEl).focus(),n.currItem=null,n.content=null,n.currTemplate=null,n.prevHeight=0,y(d)},updateSize:function(a){if(n.isIOS){var b=document.documentElement.clientWidth/window.innerWidth,c=window.innerHeight*b;n.wrap.css("height",c),n.wH=c}else n.wH=a||r.height();n.fixedContentPos||n.wrap.css("height",n.wH),y("Resize")},updateItemHTML:function(){var b=n.items[n.index];n.contentContainer.detach(),n.content&&n.content.detach(),b.parsed||(b=n.parseEl(n.index));var c=b.type;y("BeforeChange",[n.currItem?n.currItem.type:"",c]),n.currItem=b;if(!n.currTemplate[c]){var d=n.st[c]?n.st[c].markup:!1;y("FirstMarkupParse",d),d?n.currTemplate[c]=a(d):n.currTemplate[c]=!0}t&&t!==b.type&&n.container.removeClass("mfp-"+t+"-holder");var e=n["get"+c.charAt(0).toUpperCase()+c.slice(1)](b,n.currTemplate[c]);n.appendContent(e,c),b.preloaded=!0,y(h,b),t=b.type,n.container.prepend(n.contentContainer),y("AfterChange")},appendContent:function(a,b){n.content=a,a?n.st.showCloseBtn&&n.st.closeBtnInside&&n.currTemplate[b]===!0?n.content.find(".mfp-close").length||n.content.append(z()):n.content=a:n.content="",y(e),n.container.addClass("mfp-"+b+"-holder"),n.contentContainer.append(n.content)},parseEl:function(b){var c=n.items[b],d;c.tagName?c={el:a(c)}:(d=c.type,c={data:c,src:c.src});if(c.el){var e=n.types;for(var f=0;f<e.length;f++)if(c.el.hasClass("mfp-"+e[f])){d=e[f];break}c.src=c.el.attr("data-mfp-src"),c.src||(c.src=c.el.attr("href"))}return c.type=d||n.st.type||"inline",c.index=b,c.parsed=!0,n.items[b]=c,y("ElementParse",c),n.items[b]},addGroup:function(a,b){var c=function(c){c.mfpEl=this,n._openClick(c,a,b)};b||(b={});var d="click.magnificPopup";b.mainEl=a,b.items?(b.isObj=!0,a.off(d).on(d,c)):(b.isObj=!1,b.delegate?a.off(d).on(d,b.delegate,c):(b.items=a,a.off(d).on(d,c)))},_openClick:function(b,c,d){var e=d.midClick!==undefined?d.midClick:a.magnificPopup.defaults.midClick;if(!e&&(b.which===2||b.ctrlKey||b.metaKey||b.altKey||b.shiftKey))return;var f=d.disableOn!==undefined?d.disableOn:a.magnificPopup.defaults.disableOn;if(f)if(a.isFunction(f)){if(!f.call(n))return!0}else if(r.width()<f)return!0;b.type&&(b.preventDefault(),n.isOpen&&b.stopPropagation()),d.el=a(b.mfpEl),d.delegate&&(d.items=c.find(d.delegate)),n.open(d)},updateStatus:function(a,b){if(n.preloader){q!==a&&n.container.removeClass("mfp-s-"+q),!b&&a==="loading"&&(b=n.st.tLoading);var c={status:a,text:b};y("UpdateStatus",c),a=c.status,b=c.text,n.preloader.html(b),n.preloader.find("a").on("click",function(a){a.stopImmediatePropagation()}),n.container.addClass("mfp-s-"+a),q=a}},_checkIfClose:function(b){if(a(b).hasClass(m))return;var c=n.st.closeOnContentClick,d=n.st.closeOnBgClick;if(c&&d)return!0;if(!n.content||a(b).hasClass("mfp-close")||n.preloader&&b===n.preloader[0])return!0;if(b!==n.content[0]&&!a.contains(n.content[0],b)){if(d&&a.contains(document,b))return!0}else if(c)return!0;return!1},_addClassToMFP:function(a){n.bgOverlay.addClass(a),n.wrap.addClass(a)},_removeClassFromMFP:function(a){this.bgOverlay.removeClass(a),n.wrap.removeClass(a)},_hasScrollBar:function(a){return(n.isIE7?s.height():document.body.scrollHeight)>(a||r.height())},_setFocus:function(){(n.st.focus?n.content.find(n.st.focus).eq(0):n.wrap).focus()},_onFocusIn:function(b){if(b.target!==n.wrap[0]&&!a.contains(n.wrap[0],b.target))return n._setFocus(),!1},_parseMarkup:function(b,c,d){var e;d.data&&(c=a.extend(d.data,c)),y(f,[b,c,d]),a.each(c,function(c,d){if(d===undefined||d===!1)return!0;e=c.split("_");if(e.length>1){var f=b.find(j+"-"+e[0]);if(f.length>0){var g=e[1];g==="replaceWith"?f[0]!==d[0]&&f.replaceWith(d):g==="img"?f.is("img")?f.attr("src",d):f.replaceWith(a("<img>").attr("src",d).attr("class",f.attr("class"))):f.attr(e[1],d)}}else b.find(j+"-"+c).html(d)})},_getScrollbarSize:function(){if(n.scrollbarSize===undefined){var a=document.createElement("div");a.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(a),n.scrollbarSize=a.offsetWidth-a.clientWidth,document.body.removeChild(a)}return n.scrollbarSize}},a.magnificPopup={instance:null,proto:o.prototype,modules:[],open:function(b,c){return A(),b?b=a.extend(!0,{},b):b={},b.isObj=!0,b.index=c||0,this.instance.open(b)},close:function(){return a.magnificPopup.instance&&a.magnificPopup.instance.close()},registerModule:function(b,c){c.options&&(a.magnificPopup.defaults[b]=c.options),a.extend(this.proto,c.proto),this.modules.push(b)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&#215;</button>',tClose:"Close (Esc)",tLoading:"Loading...",autoFocusLast:!0}},a.fn.magnificPopup=function(b){A();var c=a(this);if(typeof b=="string")if(b==="open"){var d,e=p?c.data("magnificPopup"):c[0].magnificPopup,f=parseInt(arguments[1],10)||0;e.items?d=e.items[f]:(d=c,e.delegate&&(d=d.find(e.delegate)),d=d.eq(f)),n._openClick({mfpEl:d},c,e)}else n.isOpen&&n[b].apply(n,Array.prototype.slice.call(arguments,1));else b=a.extend(!0,{},b),p?c.data("magnificPopup",b):c[0].magnificPopup=b,n.addGroup(c,b);return c};var C="inline",D,E,F,G=function(){F&&(E.after(F.addClass(D)).detach(),F=null)};a.magnificPopup.registerModule(C,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){n.types.push(C),w(b+"."+C,function(){G()})},getInline:function(b,c){G();if(b.src){var d=n.st.inline,e=a(b.src);if(e.length){var f=e[0].parentNode;f&&f.tagName&&(E||(D=d.hiddenClass,E=x(D),D="mfp-"+D),F=e.after(E).detach().removeClass(D)),n.updateStatus("ready")}else n.updateStatus("error",d.tNotFound),e=a("<div>");return b.inlineElement=e,e}return n.updateStatus("ready"),n._parseMarkup(c,{},b),c}}});var H="ajax",I,J=function(){I&&a(document.body).removeClass(I)},K=function(){J(),n.req&&n.req.abort()};a.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){n.types.push(H),I=n.st.ajax.cursor,w(b+"."+H,K),w("BeforeChange."+H,K)},getAjax:function(b){I&&a(document.body).addClass(I),n.updateStatus("loading");var c=a.extend({url:b.src,success:function(c,d,e){var f={data:c,xhr:e};y("ParseAjax",f),n.appendContent(a(f.data),H),b.finished=!0,J(),n._setFocus(),setTimeout(function(){n.wrap.addClass(k)},16),n.updateStatus("ready"),y("AjaxContentAdded")},error:function(){J(),b.finished=b.loadError=!0,n.updateStatus("error",n.st.ajax.tError.replace("%url%",b.src))}},n.st.ajax.settings);return n.req=a.ajax(c),""}}});var L,M=function(b){if(b.data&&b.data.title!==undefined)return b.data.title;var c=n.st.image.titleSrc;if(c){if(a.isFunction(c))return c.call(n,b);if(b.el)return b.el.attr(c)||""}return""};a.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var c=n.st.image,d=".image";n.types.push("image"),w(g+d,function(){n.currItem.type==="image"&&c.cursor&&a(document.body).addClass(c.cursor)}),w(b+d,function(){c.cursor&&a(document.body).removeClass(c.cursor),r.off("resize"+j)}),w("Resize"+d,n.resizeImage),n.isLowIE&&w("AfterChange",n.resizeImage)},resizeImage:function(){var a=n.currItem;if(!a||!a.img)return;if(n.st.image.verticalFit){var b=0;n.isLowIE&&(b=parseInt(a.img.css("padding-top"),10)+parseInt(a.img.css("padding-bottom"),10)),a.img.css("max-height",n.wH-b)}},_onImageHasSize:function(a){a.img&&(a.hasSize=!0,L&&clearInterval(L),a.isCheckingImgSize=!1,y("ImageHasSize",a),a.imgHidden&&(n.content&&n.content.removeClass("mfp-loading"),a.imgHidden=!1))},findImageSize:function(a){var b=0,c=a.img[0],d=function(e){L&&clearInterval(L),L=setInterval(function(){if(c.naturalWidth>0){n._onImageHasSize(a);return}b>200&&clearInterval(L),b++,b===3?d(10):b===40?d(50):b===100&&d(500)},e)};d(1)},getImage:function(b,c){var d=0,e=function(){b&&(b.img[0].complete?(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("ready")),b.hasSize=!0,b.loaded=!0,y("ImageLoadComplete")):(d++,d<200?setTimeout(e,100):f()))},f=function(){b&&(b.img.off(".mfploader"),b===n.currItem&&(n._onImageHasSize(b),n.updateStatus("error",g.tError.replace("%url%",b.src))),b.hasSize=!0,b.loaded=!0,b.loadError=!0)},g=n.st.image,h=c.find(".mfp-img");if(h.length){var i=document.createElement("img");i.className="mfp-img",b.el&&b.el.find("img").length&&(i.alt=b.el.find("img").attr("alt")),b.img=a(i).on("load.mfploader",e).on("error.mfploader",f),i.src=b.src,h.is("img")&&(b.img=b.img.clone()),i=b.img[0],i.naturalWidth>0?b.hasSize=!0:i.width||(b.hasSize=!1)}return n._parseMarkup(c,{title:M(b),img_replaceWith:b.img},b),n.resizeImage(),b.hasSize?(L&&clearInterval(L),b.loadError?(c.addClass("mfp-loading"),n.updateStatus("error",g.tError.replace("%url%",b.src))):(c.removeClass("mfp-loading"),n.updateStatus("ready")),c):(n.updateStatus("loading"),b.loading=!0,b.hasSize||(b.imgHidden=!0,c.addClass("mfp-loading"),n.findImageSize(b)),c)}}});var N,O=function(){return N===undefined&&(N=document.createElement("p").style.MozTransform!==undefined),N};a.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(a){return a.is("img")?a:a.find("img")}},proto:{initZoom:function(){var a=n.st.zoom,d=".zoom",e;if(!a.enabled||!n.supportsTransition)return;var f=a.duration,g=function(b){var c=b.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),d="all "+a.duration/1e3+"s "+a.easing,e={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},f="transition";return e["-webkit-"+f]=e["-moz-"+f]=e["-o-"+f]=e[f]=d,c.css(e),c},h=function(){n.content.css("visibility","visible")},i,j;w("BuildControls"+d,function(){if(n._allowZoom()){clearTimeout(i),n.content.css("visibility","hidden"),e=n._getItemToZoom();if(!e){h();return}j=g(e),j.css(n._getOffset()),n.wrap.append(j),i=setTimeout(function(){j.css(n._getOffset(!0)),i=setTimeout(function(){h(),setTimeout(function(){j.remove(),e=j=null,y("ZoomAnimationEnded")},16)},f)},16)}}),w(c+d,function(){if(n._allowZoom()){clearTimeout(i),n.st.removalDelay=f;if(!e){e=n._getItemToZoom();if(!e)return;j=g(e)}j.css(n._getOffset(!0)),n.wrap.append(j),n.content.css("visibility","hidden"),setTimeout(function(){j.css(n._getOffset())},16)}}),w(b+d,function(){n._allowZoom()&&(h(),j&&j.remove(),e=null)})},_allowZoom:function(){return n.currItem.type==="image"},_getItemToZoom:function(){return n.currItem.hasSize?n.currItem.img:!1},_getOffset:function(b){var c;b?c=n.currItem.img:c=n.st.zoom.opener(n.currItem.el||n.currItem);var d=c.offset(),e=parseInt(c.css("padding-top"),10),f=parseInt(c.css("padding-bottom"),10);d.top-=a(window).scrollTop()-e;var g={width:c.width(),height:(p?c.innerHeight():c[0].offsetHeight)-f-e};return O()?g["-moz-transform"]=g.transform="translate("+d.left+"px,"+d.top+"px)":(g.left=d.left,g.top=d.top),g}}});var P="iframe",Q="//about:blank",R=function(a){if(n.currTemplate[P]){var b=n.currTemplate[P].find("iframe");b.length&&(a||(b[0].src=Q),n.isIE8&&b.css("display",a?"block":"none"))}};a.magnificPopup.registerModule(P,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){n.types.push(P),w("BeforeChange",function(a,b,c){b!==c&&(b===P?R():c===P&&R(!0))}),w(b+"."+P,function(){R()})},getIframe:function(b,c){var d=b.src,e=n.st.iframe;a.each(e.patterns,function(){if(d.indexOf(this.index)>-1)return this.id&&(typeof this.id=="string"?d=d.substr(d.lastIndexOf(this.id)+this.id.length,d.length):d=this.id.call(this,d)),d=this.src.replace("%id%",d),!1});var f={};return e.srcAction&&(f[e.srcAction]=d),n._parseMarkup(c,f,b),n.updateStatus("ready"),c}}});var S=function(a){var b=n.items.length;return a>b-1?a-b:a<0?b+a:a},T=function(a,b,c){return a.replace(/%curr%/gi,b+1).replace(/%total%/gi,c)};a.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var c=n.st.gallery,d=".mfp-gallery";n.direction=!0;if(!c||!c.enabled)return!1;u+=" mfp-gallery",w(g+d,function(){c.navigateByImgClick&&n.wrap.on("click"+d,".mfp-img",function(){if(n.items.length>1)return n.next(),!1}),s.on("keydown"+d,function(a){a.keyCode===37?n.prev():a.keyCode===39&&n.next()})}),w("UpdateStatus"+d,function(a,b){b.text&&(b.text=T(b.text,n.currItem.index,n.items.length))}),w(f+d,function(a,b,d,e){var f=n.items.length;d.counter=f>1?T(c.tCounter,e.index,f):""}),w("BuildControls"+d,function(){if(n.items.length>1&&c.arrows&&!n.arrowLeft){var b=c.arrowMarkup,d=n.arrowLeft=a(b.replace(/%title%/gi,c.tPrev).replace(/%dir%/gi,"left")).addClass(m),e=n.arrowRight=a(b.replace(/%title%/gi,c.tNext).replace(/%dir%/gi,"right")).addClass(m);d.click(function(){n.prev()}),e.click(function(){n.next()}),n.container.append(d.add(e))}}),w(h+d,function(){n._preloadTimeout&&clearTimeout(n._preloadTimeout),n._preloadTimeout=setTimeout(function(){n.preloadNearbyImages(),n._preloadTimeout=null},16)}),w(b+d,function(){s.off(d),n.wrap.off("click"+d),n.arrowRight=n.arrowLeft=null})},next:function(){n.direction=!0,n.index=S(n.index+1),n.updateItemHTML()},prev:function(){n.direction=!1,n.index=S(n.index-1),n.updateItemHTML()},goTo:function(a){n.direction=a>=n.index,n.index=a,n.updateItemHTML()},preloadNearbyImages:function(){var a=n.st.gallery.preload,b=Math.min(a[0],n.items.length),c=Math.min(a[1],n.items.length),d;for(d=1;d<=(n.direction?c:b);d++)n._preloadItem(n.index+d);for(d=1;d<=(n.direction?b:c);d++)n._preloadItem(n.index-d)},_preloadItem:function(b){b=S(b);if(n.items[b].preloaded)return;var c=n.items[b];c.parsed||(c=n.parseEl(b)),y("LazyLoad",c),c.type==="image"&&(c.img=a('<img class="mfp-img" />').on("load.mfploader",function(){c.hasSize=!0}).on("error.mfploader",function(){c.hasSize=!0,c.loadError=!0,y("LazyLoadError",c)}).attr("src",c.src)),c.preloaded=!0}}});var U="retina";a.magnificPopup.registerModule(U,{options:{replaceSrc:function(a){return a.src.replace(/\.\w+$/,function(a){return"@2x"+a})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var a=n.st.retina,b=a.ratio;b=isNaN(b)?b():b,b>1&&(w("ImageHasSize."+U,function(a,c){c.img.css({"max-width":c.img[0].naturalWidth/b,width:"100%"})}),w("ElementParse."+U,function(c,d){d.src=a.replaceSrc(d,b)}))}}}}),A()})

// Change Logo


// function changeLogo(){
// 	if ($(window).width() < 700) {
// 		$('.header_logo__image').attr('src', 'images/logo-mobile.png');
// 	} else{
// 		$('.header_logo__image').attr('src', 'images/logo.png');
// 	}
// };

// Menu

function openMenu(){
	if ($(window).width() > 1040) {
		$('.header_nav').show();
	} else{
		$('.header_nav').hide();
	}
};

$(document).ready(function(){

	// changeLogo();

	// Menu

	$('.open_menu').click(function(){
		$('.header_nav').css('display', 'flex');
		$(".header_nav").append("<a class='button button-close'>x</a>");
		$("body").addClass('body-overflow');
	});

	$(".header_nav").on('click', '.button-close',function(){
		$('.header_nav').hide();
		$(this).remove();
		$("body").removeClass('body-overflow');
	});


	$('.header_nav__link').click(function(){
		if ($(window).width() < 1040) {
			$('.header_nav').hide();
		}
	});
});


$(window).resize(function(){
	// changeLogo();
	openMenu();
});


// Tabs

$(document).ready(function(){

	$('.services_nav__link').click(function(e){

		e.preventDefault();

		$('.services_nav__link').removeClass('active');
		$('.services_block').removeClass('active');

		var findId = $(this).attr('href');

		$(this).addClass('active');
		$(findId).addClass('active');
	})
});


$('.portfolio_block').hover(function(){
	console.log(1);
	var appendValue = "<div class='over_block'><span class='ico magnifying-glass></span></div>";
	$(this).append(appendValue);
}, 
function(){
	$('.over_block').remove()
})


// gallery
$('.portfolio_blocks').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        },
        callbacks: {
			open: function() {


				// $(this.content).append(
				// 	'<span class="prompt">Для увеличения/уменьшения изображения прокрутите колесиком мыши</span>'
				// );

				// var posY = parseInt($('.mfp-content').css('height'));
				// var raznY = ($('body').height() - posY)/ 2 -160 ;

				$( window).on('mousewheel', function(event) {

				    var height = $('.mfp-img').css('height');

				    if($('.mfp-img').length > 0 && event.deltaY == 1){
				    	var count= 500;
				    	 event.preventDefault();
				    } else if(
				    	$('.mfp-img').length > 0 && 
				    	event.deltaY == -1 &&  
				    	parseInt(height) >= $(window).height()
				    ){
				    	var count= -500;
				    	 event.preventDefault();
				    }
				    $('.mfp-img').css('max-height', parseInt(height)+count+'px');

				  //   var posX = parseInt($('.mfp-content').css('width'));
			 		// var raznX = ($(window).width() - posX) / 2 - 50;

			 		// $('.prompt').css({
			 		// 	'top': event.pageY - raznY +'px',
			 		// 	'left': event.pageX - raznX +'px'
			 		// });
			 		// console.log(event.pageX + ", " + event.pageY, $('body').height(), posY, raznY);


				});


				

				
				// $(window).resize(function(){

			 // 		var posX = parseInt($('.mfp-content').css('width'));
			 // 		var raznX = ($(window).width() - posX) / 2 - 50;

			 // 		$('.prompt').css({
			 // 			'top': event.pageY - raznY +'px',
			 // 			'left': event.pageX - raznX +'px'
			 // 		});
			 // 		console.log(event.pageX + ", " + event.pageY, $('body').height(), posY, raznY);

	
				// });
				// $(document).mousemove(function(event){

			 // 		var posX = parseInt($('.mfp-content').css('width'));
			 // 		var raznX = ($(window).width() - posX) / 2 - 50;

			 // 		$('.prompt').css({
			 // 			'top': event.pageY - raznY +'px',
			 // 			'left': event.pageX - raznX +'px'
			 // 		});
			 // 		console.log(event.pageX + ", " + event.pageY, $('body').height(), posY, raznY);

				// });
			},

		}
        
    });
});

$(document).ready(function(){
  $('.command_slider').slick({

		slidesToShow: 5,
		// centerMode: true,
		prevArrow: $('.button_slider.button_prew'),
		nextArrow: $('.button_slider.button_next'),
		infinite: true,
		responsive: [
	    {
	      breakpoint:1200,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 700,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 532,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
		
  });
});

$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}

				
			},
			open: function() {


				if(this.currItem.el.attr('type-of-form') == 'Заказать звонок'){
					$('.hide-group').hide();
				} else{
					$('.hide-group').show();
				}


				var typeOfForm = this.currItem.el.attr('type-of-form');
				this.currItem.inlineElement.find('[name="entry.1954888542"]').val(typeOfForm);

				if(this.currItem.el.attr('price-type')){
					var priceType = this.currItem.el.attr('price-type');
					this.currItem.inlineElement.find('[name="entry.1784265609"]').val(priceType);
				};
				

		    },
		    close: function() {
		    	this.currItem.inlineElement.find('[name="entry.1954888542"]').val('');
		    	this.currItem.inlineElement.find('[name="entry.1784265609"]').val('');
		     
		    }
		}
	});
	$('form').on("submit", function() {
	 	var th = $(this);
	 
		$.magnificPopup.open({
	        items: {
	            src: $('#form_modal_after_submit')
	        },
	        type: 'inline'
	    });
	    setTimeout(function(){th.find('input').val('')}, 1000); // Привет, Вася
	   


	});
});




///////////////////////////////////////
// Adaptive
///////////////////////////////////////


// var WEBSITEADDR = '';
// var PAGESPEED = '';

// $(document).ready(function() {
// 	$('.popup-with-form-adaptive').magnificPopup({
// 		type: 'inline',
// 		preloader: false,
// 		focus: '#name',

// 		// When elemened is focused, some mobile browsers in some cases zoom in
// 		// It looks not nice, so we disable it:
// 		callbacks: {
// 			beforeOpen: function() {
// 				if($(window).width() < 700) {
// 					this.st.focus = false;
// 				} else {
// 					this.st.focus = '#name';
// 				}

				
// 			},
// 			open: function() {
// 				// siteaddre
// 				this.currItem.inlineElement.find('[name="entry.816312878"]').val(WEBSITEADDR);
			
// 		    },
// 		    close: function() {
		    
		     
// 		    }
// 		}
// 	});



// 	$('#pagespeed').submit(function(e){
// 		e.preventDefault();
// 		// console.log(this, e, $(this).children('[type="text"]').val());
// 		var websiteAddr = $(this).children('[type="text"]').val();
// 		var score = 0;
// 	   	var afterText = '';
// 	   	var th = $(this);
// 	   	var timerId = '';
// 		if(websiteAddr == ''){
// 			$('.afterPAgespeed').remove();
// 			$(this).after('<p class="afterPAgespeed">* Поле не должно быть пустым</p>');
// 		} else{
// 			$.ajax({url: "https://www.googleapis.com/pagespeedonline/v2/runPagespeed?url=" + websiteAddr + "&strategy=mobile&key=AIzaSyAJFwN_woKl2jmKfZtGXeSzTUYzm0NhhQo", 
// 				success: function(result){
// 					$('.afterPAgespeed').remove();
// 	   				var score = result.ruleGroups.SPEED.score;
// 	   				afterText = '<h5 class="afterPAgespeed">Ваша страница оптимизирована на <span class="akcent">'+ score +'%</span></h5>';
// 	   				th.after(afterText);
// 	   				setTimeout(function() {
// 					  clearInterval(timerId);
// 					}, 0);
// 					WEBSITEADDR += websiteAddr + ', ';
// 					PAGESPEED = score + '%'; 
// 				},
// 				beforeSend:  function(result){
// 					$('.afterPAgespeed').remove();
// 					afterText = '<h5 class="afterPAgespeed">Информация сейчас загрузится <span></span></h5>';
// 					th.after(afterText);
// 					var i = 0;
// 					var text = '';
// 					timerId = setInterval(function() {
// 						if(i == 3){
// 							i = 0;
// 							text = '';
// 						}
// 						i++;
// 						text += '.';
// 					  $('.afterPAgespeed span').text(text);
// 					}, 500);
// 				}, 
// 				error:  function(error){
// 					$('.afterPAgespeed').remove();
// 					afterText = '<p class="afterPAgespeed">* Вы ввели некоректный адрес сайта<br />Если вы уверены что все правильно ввели, обновите страницу </p>';
// 					th.after(afterText);
// 				}
// 			});
// 		}

// 	});


//   function loadClient(websiteAddr, th) {
//   	console.log('websiteAddr: ', websiteAddr, 'this: ', th);
//     gapi.client.setApiKey('AIzaSyAJFwN_woKl2jmKfZtGXeSzTUYzm0NhhQo');
//     return gapi.client.load("https://content.googleapis.com/discovery/v1/apis/searchconsole/v1/rest")
//         .then(function() {
//           console.log("GAPI client loaded for API");
//           execute(websiteAddr, th);
//         }, function(error) {
//           console.error("Error loading GAPI client for API");
//         });
//   }
//   // Make sure the client is loaded before calling this method.
//   function execute(val, th) {
//   	console.log(th, afterText);
//   	$('.afterPAgespeed').remove();
// 	var afterText = '<h5 class="afterPAgespeed">Информация сейчас загрузится <span></span></h5>';
// 	th.after(afterText);

// 	var i = 0;
// 	var text = '';
// 	timerId = setInterval(function() {
// 		if(i == 3){
// 			i = 0;
// 			text = '';
// 		}
// 		i++;
// 		text += '.';
// 	  $('.afterPAgespeed span').text(text);
// 	}, 500);

//     return gapi.client.searchconsole.urlTestingTools.mobileFriendlyTest.run({
//       "resource": {
//         "url": val,
//         "requestScreenshot": true
//       }

//     })
//         .then(function(response) {
//           // Handle the results here (response.result has the parsed body).
//         	$('.afterPAgespeed').remove();
			
// 			setTimeout(function() {
// 			  clearInterval(timerId);
// 			}, 0);
			
//           console.log("Response", response);
//           var txtH5 = '';
//           var txtP = '';
//           $('.has__screen img').attr('src', 'data:image/png;base64,'+response.result.screenshot.data).addClass('active');
//           if(response.result.mobileFriendliness == 'MOBILE_FRIENDLY'){
//           	txtH5 = 'Ваш сайт адаптивен'
//           } else{
//           	txtH5 = 'Ваш сайт не адаптивен'
//           }
//           var iss = response.result.mobileFriendlyIssues;
//            if(iss){
//            	for(var i = 0; i < iss.length; i++){
//            		txtP += 
//            			iss[i].rule == 'MOBILE_FRIENDLY_RULE_UNSPECIFIED' ? '- Извините, у нас нет описания для правила, которое было нарушено<br />' : 
//            			iss[i].rule == 'USES_INCOMPATIBLE_PLUGINS' ? '- Используются плагины, несовместимые с мобильными устройствами<br />' : 
//            			iss[i].rule == 'CONFIGURE_VIEWPORT' ? '- Viewport не указан с помощью мета-тега viewport<br />' : 
//            			iss[i].rule == 'FIXED_WIDTH_VIEWPORT' ? '- Viewport определен фиксированной шириной<br />' : 
//            			iss[i].rule == 'SIZE_CONTENT_TO_VIEWPORT' ? '- Содержимое не имеет подходящего размера для viewport<br />' :
//            			iss[i].rule == 'USE_LEGIBLE_FONT_SIZES' ? '- Размер шрифта слишком мал для удобства чтения на маленьком экране<br />' :
//            			iss[i].rule == 'TAP_TARGETS_TOO_CLOSE' ? '- Сенсорные элементы слишком близки друг к другу<br />' :'<br />';
//            	}
//            }
// 			th.after('<h5 class="afterPAgespeed">' + txtH5 + '</h5><p class="afterPAgespeed">' + txtP + '</p>');
//         	WEBSITEADDR += val + ', ';
          
//         }, function(error) {
//           console.error("Execute error", error);
//           $('.afterPAgespeed').remove();
//           th.after('<p class="afterPAgespeed">* Произошла ошибка, нажмите кнопку "проверить" снова или перезагрузите страницу!</p>');
//         });
       
//   }
//   gapi.load("client");

// 	$('#mobileFliendly').submit(function(e){
// 		e.preventDefault();
		
// 		var websiteAddr = $(this).children('[type="text"]').val();
// 		var th = $(this);
// 		var timerId = '';
// 		$('.remuve').remove();
// 		if(websiteAddr == ''){
// 			$('.afterPAgespeed').remove();
// 			$(this).after('<p class="afterPAgespeed">* Поле не должно быть пустым</p>');
// 		} else{
// 			loadClient(websiteAddr, th);
// 		}
		
// 	});

	

// });
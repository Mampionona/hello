!function(n){n.fn.jAnchor=function(t){var o={duration:400,easing:"swing"},a=n.extend(o,t);return this.each(function(t,o){n(o).on("click",function(t){var o=this.hash;n("body, html").animate({scrollTop:n(o).offset().top},a.duration,a.easing),hash(o),t.preventDefault()})})}}(jQuery),hash=function(n){history.pushState?history.pushState(null,null,n):location.hash=n};
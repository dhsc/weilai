$(function(){function s(){n.hasClass(m)?(n.removeClass(m).addClass(v),u.removeClass(f).addClass(m),c.removeClass(v).addClass(f)):n.hasClass(v)?(n.removeClass(v).addClass(f),u.removeClass(m).addClass(v),c.removeClass(f).addClass(m)):(n.removeClass(f).addClass(m),u.removeClass(v).addClass(f),c.removeClass(m).addClass(v)),$("."+m).css({"z-index":"2"}),$("."+f).css({"z-index":"3"}),$("."+v).css({"z-index":"1"})}function a(){n.hasClass(m)?(n.removeClass(m).addClass(f),u.removeClass(f).addClass(v),c.removeClass(v).addClass(m)):n.hasClass(v)?(n.removeClass(v).addClass(m),u.removeClass(m).addClass(f),c.removeClass(f).addClass(v)):(n.removeClass(f).addClass(v),u.removeClass(v).addClass(m),c.removeClass(m).addClass(f)),$("."+m).css({"z-index":"1"}),$("."+f).css({"z-index":"3"}),$("."+v).css({"z-index":"2"})}function e(){C=setTimeout(function(){clearTimeout(C),a(),e()},5e3)}function l(){d=setTimeout(function(){clearTimeout(C)},250)}function o(){clearTimeout(i),i=setTimeout(function(){clearTimeout(d),a()},250)}function r(){clearTimeout(i),i=setTimeout(function(){clearTimeout(d),s()},250)}function t(){d=setTimeout(function(){clearTimeout(i),e()},250)}var C,d,i,n=$(".rotaryCarousel > ul > li:nth-child(1)"),u=$(".rotaryCarousel > ul > li:nth-child(2)"),c=$(".rotaryCarousel > ul > li:nth-child(3)"),m="rotaryCarousel-left",v="rotaryCarousel-right",f="rotaryCarousel-current",h=$(".rotaryCarousel > span:first-child > a"),T=$(".rotaryCarousel > span:last-child > a"),y=$(".rotaryCarousel");e(),y.hover(function(){l()},function(){t()}),T.click(function(){o()}),h.click(function(){r()})});
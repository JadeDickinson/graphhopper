(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require
    if(!u&&a)return a(o,!0)
    if(i)return i(o,!0)
    var f=new Error("Cannot find module '"+o+"'")
    throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}}
    t[o][0].call(l.exports,function(e){var n=t[o][1][e]
        return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require
    for(var o=0
        o<r.length
    o++)s(r[o])
    return s})({1:[function(require,module,exports){
    !function(){function n(n){return n&&(n.ownerDocument||n.document||n).documentElement}function t(n){return n&&(n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView)}function e(n,t){return n<t?-1:n>t?1:n>=t?0:NaN}function r(n){return null===n?NaN:+n}function i(n){return!isNaN(n)}function u(n){return{left:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length)
        r<i
        ){var u=r+i>>>1
            n(t[u],e)<0?r=u+1:i=u}return r},right:function(t,e,r,i){for(arguments.length<3&&(r=0),arguments.length<4&&(i=t.length)
        r<i
        ){var u=r+i>>>1
            n(t[u],e)>0?i=u:r=u+1}return r}}}function o(n){return n.length}function a(n){for(var t=1
        n*t%1
    )t*=10
        return t}function l(n,t){for(var e in t)Object.defineProperty(n.prototype,e,{value:t[e],enumerable:!1})}function c(){this._=Object.create(null)}function f(n){return(n+="")===Mo||n[0]===xo?xo+n:n}function s(n){return(n+="")[0]===xo?n.slice(1):n}function h(n){return f(n)in this._}function p(n){return(n=f(n))in this._&&delete this._[n]}function g(){var n=[]
        for(var t in this._)n.push(s(t))
        return n}function v(){var n=0
        for(var t in this._)++n
        return n}function d(){for(var n in this._)return!1
        return!0}function y(){this._=Object.create(null)}function m(n){return n}function M(n,t,e){return function(){var r=e.apply(t,arguments)
        return r===t?n:r}}function x(n,t){if(t in n)return t
        t=t.charAt(0).toUpperCase()+t.slice(1)
        for(var e=0,r=bo.length
            e<r
        ++e){var i=bo[e]+t
            if(i in n)return i}}function b(){}function _(){}function w(n){function t(){for(var t,r=e,i=-1,u=r.length
        ++i<u
    )(t=r[i].on)&&t.apply(this,arguments)
        return n}var e=[],r=new c
        return t.on=function(t,i){var u,o=r.get(t)
            return arguments.length<2?o&&o.on:(o&&(o.on=null,e=e.slice(0,u=e.indexOf(o)).concat(e.slice(u+1)),r.remove(t)),i&&e.push(r.set(t,{on:i})),n)},t}function S(){ao.event.preventDefault()}function k(){for(var n,t=ao.event
        n=t.sourceEvent
    )t=n
        return t}function N(n){for(var t=new _,e=0,r=arguments.length
        ++e<r
    )t[arguments[e]]=w(t)
        return t.of=function(e,r){return function(i){try{var u=i.sourceEvent=ao.event
            i.target=n,ao.event=i,t[i.type].apply(e,r)}finally{ao.event=u}}},t}function E(n){return wo(n,Eo),n}function A(n){return"function"==typeof n?n:function(){return So(n,this)}}function C(n){return"function"==typeof n?n:function(){return ko(n,this)}}function z(n,t){function e(){this.removeAttribute(n)}function r(){this.removeAttributeNS(n.space,n.local)}function i(){this.setAttribute(n,t)}function u(){this.setAttributeNS(n.space,n.local,t)}function o(){var e=t.apply(this,arguments)
        null==e?this.removeAttribute(n):this.setAttribute(n,e)}function a(){var e=t.apply(this,arguments)
        null==e?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,e)}return n=ao.ns.qualify(n),null==t?n.local?r:e:"function"==typeof t?n.local?a:o:n.local?u:i}function L(n){return n.trim().replace(/\s+/g," ")}function q(n){return new RegExp("(?:^|\\s+)"+ao.requote(n)+"(?:\\s+|$)","g")}function T(n){return(n+"").trim().split(/^|\s+/)}function R(n,t){function e(){for(var e=-1
        ++e<i
    )n[e](this,t)}function r(){for(var e=-1,r=t.apply(this,arguments)
        ++e<i
    )n[e](this,r)}n=T(n).map(D)
        var i=n.length
        return"function"==typeof t?r:e}function D(n){var t=q(n)
        return function(e,r){if(i=e.classList)return r?i.add(n):i.remove(n)
            var i=e.getAttribute("class")||""
            r?(t.lastIndex=0,t.test(i)||e.setAttribute("class",L(i+" "+n))):e.setAttribute("class",L(i.replace(t," ")))}}function P(n,t,e){function r(){this.style.removeProperty(n)}function i(){this.style.setProperty(n,t,e)}function u(){var r=t.apply(this,arguments)
        null==r?this.style.removeProperty(n):this.style.setProperty(n,r,e)}return null==t?r:"function"==typeof t?u:i}function U(n,t){function e(){delete this[n]}function r(){this[n]=t}function i(){var e=t.apply(this,arguments)
        null==e?delete this[n]:this[n]=e}return null==t?e:"function"==typeof t?i:r}function j(n){function t(){var t=this.ownerDocument,e=this.namespaceURI
        return e===Ao&&t.documentElement.namespaceURI===Ao?t.createElement(n):t.createElementNS(e,n)}function e(){return this.ownerDocument.createElementNS(n.space,n.local)}return"function"==typeof n?n:(n=ao.ns.qualify(n)).local?e:t}function F(){var n=this.parentNode
        n&&n.removeChild(this)}function H(n){return{__data__:n}}function O(n){return function(){return No(this,n)}}function I(n){return arguments.length||(n=e),function(t,e){return t&&e?n(t.__data__,e.__data__):!t-!e}}function Y(n,t){for(var e=0,r=n.length
        e<r
        e++)for(var i,u=n[e],o=0,a=u.length
            o<a
        o++)(i=u[o])&&t(i,o,e)
        return n}function Z(n){return wo(n,zo),n}function V(n){var t,e
        return function(r,i,u){var o,a=n[u].update,l=a.length
            for(u!=e&&(e=u,t=0),i>=t&&(t=i+1)
                !(o=a[t])&&++t<l
            )
            return o}}function X(n,t,e){function r(){var t=this[o]
        t&&(this.removeEventListener(n,t,t.$),delete this[o])}function i(){var i=l(t,co(arguments))
        r.call(this),this.addEventListener(n,this[o]=i,i.$=e),i._=t}function u(){var t,e=new RegExp("^__on([^.]+)"+ao.requote(n)+"$")
        for(var r in this)if(t=r.match(e)){var i=this[r]
            this.removeEventListener(t[1],i,i.$),delete this[r]}}var o="__on"+n,a=n.indexOf("."),l=$
        a>0&&(n=n.slice(0,a))
        var c=Lo.get(n)
        return c&&(n=c,l=B),a?t?i:r:t?b:u}function $(n,t){return function(e){var r=ao.event
        ao.event=e,t[0]=this.__data__
        try{n.apply(this,t)}finally{ao.event=r}}}function B(n,t){var e=$(n,t)
        return function(n){var t=this,r=n.relatedTarget
            r&&(r===t||8&r.compareDocumentPosition(t))||e.call(t,n)}}function W(e){var r=".dragsuppress-"+ ++To,i="click"+r,u=ao.select(t(e)).on("touchmove"+r,S).on("dragstart"+r,S).on("selectstart"+r,S)
        if(null==qo&&(qo=!("onselectstart"in e)&&x(e.style,"userSelect")),qo){var o=n(e).style,a=o[qo]
            o[qo]="none"}return function(n){if(u.on(r,null),qo&&(o[qo]=a),n){var t=function(){u.on(i,null)}
            u.on(i,function(){S(),t()},!0),setTimeout(t,0)}}}function J(n,e){e.changedTouches&&(e=e.changedTouches[0])
        var r=n.ownerSVGElement||n
        if(r.createSVGPoint){var i=r.createSVGPoint()
            if(Ro<0){var u=t(n)
                if(u.scrollX||u.scrollY){r=ao.select("body").append("svg").style({position:"absolute",top:0,left:0,margin:0,padding:0,border:"none"},"important")
                    var o=r[0][0].getScreenCTM()
                    Ro=!(o.f||o.e),r.remove()}}return Ro?(i.x=e.pageX,i.y=e.pageY):(i.x=e.clientX,i.y=e.clientY),i=i.matrixTransform(n.getScreenCTM().inverse()),[i.x,i.y]}var a=n.getBoundingClientRect()
        return[e.clientX-a.left-n.clientLeft,e.clientY-a.top-n.clientTop]}function G(){return ao.event.changedTouches[0].identifier}function K(n){return n>0?1:n<0?-1:0}function Q(n,t,e){return(t[0]-n[0])*(e[1]-n[1])-(t[1]-n[1])*(e[0]-n[0])}function nn(n){return n>1?0:n<-1?Uo:Math.acos(n)}function tn(n){return n>1?Ho:n<-1?-Ho:Math.asin(n)}function en(n){return((n=Math.exp(n))-1/n)/2}function rn(n){return((n=Math.exp(n))+1/n)/2}function un(n){return((n=Math.exp(2*n))-1)/(n+1)}function on(n){return(n=Math.sin(n/2))*n}function an(){}function ln(n,t,e){return this instanceof ln?(this.h=+n,this.s=+t,void(this.l=+e)):arguments.length<2?n instanceof ln?new ln(n.h,n.s,n.l):_n(""+n,wn,ln):new ln(n,t,e)}function cn(n,t,e){function r(n){return n>360?n-=360:n<0&&(n+=360),n<60?u+(o-u)*n/60:n<180?o:n<240?u+(o-u)*(240-n)/60:u}function i(n){return Math.round(255*r(n))}var u,o
        return n=isNaN(n)?0:(n%=360)<0?n+360:n,t=isNaN(t)?0:t<0?0:t>1?1:t,e=e<0?0:e>1?1:e,o=e<=.5?e*(1+t):e+t-e*t,u=2*e-o,new mn(i(n+120),i(n),i(n-120))}function fn(n,t,e){return this instanceof fn?(this.h=+n,this.c=+t,void(this.l=+e)):arguments.length<2?n instanceof fn?new fn(n.h,n.c,n.l):n instanceof hn?gn(n.l,n.a,n.b):gn((n=Sn((n=ao.rgb(n)).r,n.g,n.b)).l,n.a,n.b):new fn(n,t,e)}function sn(n,t,e){return isNaN(n)&&(n=0),isNaN(t)&&(t=0),new hn(e,Math.cos(n*=Oo)*t,Math.sin(n)*t)}function hn(n,t,e){return this instanceof hn?(this.l=+n,this.a=+t,void(this.b=+e)):arguments.length<2?n instanceof hn?new hn(n.l,n.a,n.b):n instanceof fn?sn(n.h,n.c,n.l):Sn((n=mn(n)).r,n.g,n.b):new hn(n,t,e)}function pn(n,t,e){var r=(n+16)/116,i=r+t/500,u=r-e/200
        return i=vn(i)*Ko,r=vn(r)*Qo,u=vn(u)*na,new mn(yn(3.2404542*i-1.5371385*r-.4985314*u),yn(-.969266*i+1.8760108*r+.041556*u),yn(.0556434*i-.2040259*r+1.0572252*u))}function gn(n,t,e){return n>0?new fn(Math.atan2(e,t)*Io,Math.sqrt(t*t+e*e),n):new fn(NaN,NaN,n)}function vn(n){return n>.206893034?n*n*n:(n-4/29)/7.787037}function dn(n){return n>.008856?Math.pow(n,1/3):7.787037*n+4/29}function yn(n){return Math.round(255*(n<=.00304?12.92*n:1.055*Math.pow(n,1/2.4)-.055))}function mn(n,t,e){return this instanceof mn?(this.r=~~n,this.g=~~t,void(this.b=~~e)):arguments.length<2?n instanceof mn?new mn(n.r,n.g,n.b):_n(""+n,mn,cn):new mn(n,t,e)}function Mn(n){return new mn(n>>16,n>>8&255,255&n)}function xn(n){return Mn(n)+""}function bn(n){return n<16?"0"+Math.max(0,n).toString(16):Math.min(255,n).toString(16)}function _n(n,t,e){var r,i,u,o=0,a=0,l=0
        if(r=/([a-z]+)\((.*)\)/.exec(n=n.toLowerCase()))switch(i=r[2].split(","),r[1]){case"hsl":return e(parseFloat(i[0]),parseFloat(i[1])/100,parseFloat(i[2])/100)
            case"rgb":return t(Nn(i[0]),Nn(i[1]),Nn(i[2]))}return(u=ra.get(n))?t(u.r,u.g,u.b):(null==n||"#"!==n.charAt(0)||isNaN(u=parseInt(n.slice(1),16))||(4===n.length?(o=(3840&u)>>4,o|=o>>4,a=240&u,a|=a>>4,l=15&u,l|=l<<4):7===n.length&&(o=(16711680&u)>>16,a=(65280&u)>>8,l=255&u)),t(o,a,l))}function wn(n,t,e){var r,i,u=Math.min(n/=255,t/=255,e/=255),o=Math.max(n,t,e),a=o-u,l=(o+u)/2
        return a?(i=l<.5?a/(o+u):a/(2-o-u),r=n==o?(t-e)/a+(t<e?6:0):t==o?(e-n)/a+2:(n-t)/a+4,r*=60):(r=NaN,i=l>0&&l<1?0:r),new ln(r,i,l)}function Sn(n,t,e){n=kn(n),t=kn(t),e=kn(e)
        var r=dn((.4124564*n+.3575761*t+.1804375*e)/Ko),i=dn((.2126729*n+.7151522*t+.072175*e)/Qo),u=dn((.0193339*n+.119192*t+.9503041*e)/na)
        return hn(116*i-16,500*(r-i),200*(i-u))}function kn(n){return(n/=255)<=.04045?n/12.92:Math.pow((n+.055)/1.055,2.4)}function Nn(n){var t=parseFloat(n)
        return"%"===n.charAt(n.length-1)?Math.round(2.55*t):t}function En(n){return"function"==typeof n?n:function(){return n}}function An(n){return function(t,e,r){return 2===arguments.length&&"function"==typeof e&&(r=e,e=null),Cn(t,e,n,r)}}function Cn(n,t,e,r){function i(){var n,t=l.status
        if(!t&&Ln(l)||t>=200&&t<300||304===t){try{n=e.call(u,l)}catch(n){return void o.error.call(u,n)}o.load.call(u,n)}else o.error.call(u,l)}var u={},o=ao.dispatch("beforesend","progress","load","error"),a={},l=new XMLHttpRequest,c=null
        return!this.XDomainRequest||"withCredentials"in l||!/^(http(s)?:)?\/\//.test(n)||(l=new XDomainRequest),"onload"in l?l.onload=l.onerror=i:l.onreadystatechange=function(){l.readyState>3&&i()},l.onprogress=function(n){var t=ao.event
            ao.event=n
            try{o.progress.call(u,l)}finally{ao.event=t}},u.header=function(n,t){return n=(n+"").toLowerCase(),arguments.length<2?a[n]:(null==t?delete a[n]:a[n]=t+"",u)},u.mimeType=function(n){return arguments.length?(t=null==n?null:n+"",u):t},u.responseType=function(n){return arguments.length?(c=n,u):c},u.response=function(n){return e=n,u},["get","post"].forEach(function(n){u[n]=function(){return u.send.apply(u,[n].concat(co(arguments)))}}),u.send=function(e,r,i){if(2===arguments.length&&"function"==typeof r&&(i=r,r=null),l.open(e,n,!0),null==t||"accept"in a||(a.accept=t+",*/*"),l.setRequestHeader)for(var f in a)l.setRequestHeader(f,a[f])
            return null!=t&&l.overrideMimeType&&l.overrideMimeType(t),null!=c&&(l.responseType=c),null!=i&&u.on("error",i).on("load",function(n){i(null,n)}),o.beforesend.call(u,l),l.send(null==r?null:r),u},u.abort=function(){return l.abort(),u},ao.rebind(u,o,"on"),null==r?u:u.get(zn(r))}function zn(n){return 1===n.length?function(t,e){n(null==t?e:null)}:n}function Ln(n){var t=n.responseType
        return t&&"text"!==t?n.response:n.responseText}function qn(n,t,e){var r=arguments.length
        r<2&&(t=0),r<3&&(e=Date.now())
        var i=e+t,u={c:n,t:i,n:null}
        return ua?ua.n=u:ia=u,ua=u,oa||(aa=clearTimeout(aa),oa=1,la(Tn)),u}function Tn(){var n=Rn(),t=Dn()-n
        t>24?(isFinite(t)&&(clearTimeout(aa),aa=setTimeout(Tn,t)),oa=0):(oa=1,la(Tn))}function Rn(){for(var n=Date.now(),t=ia
        t
    )n>=t.t&&t.c(n-t.t)&&(t.c=null),t=t.n
        return n}function Dn(){for(var n,t=ia,e=1/0
        t
    )t.c?(t.t<e&&(e=t.t),t=(n=t).n):t=n?n.n=t.n:ia=t.n
        return ua=n,e}function Pn(n,t){return t-(n?Math.ceil(Math.log(n)/Math.LN10):1)}function Un(n,t){var e=Math.pow(10,3*mo(8-t))
        return{scale:t>8?function(n){return n/e}:function(n){return n*e},symbol:n}}function jn(n){var t=n.decimal,e=n.thousands,r=n.grouping,i=n.currency,u=r&&e?function(n,t){for(var i=n.length,u=[],o=0,a=r[0],l=0
        i>0&&a>0&&(l+a+1>t&&(a=Math.max(1,t-l)),u.push(n.substring(i-=a,i+a)),!((l+=a+1)>t))
        )a=r[o=(o+1)%r.length]
        return u.reverse().join(e)}:m
        return function(n){var e=fa.exec(n),r=e[1]||" ",o=e[2]||">",a=e[3]||"-",l=e[4]||"",c=e[5],f=+e[6],s=e[7],h=e[8],p=e[9],g=1,v="",d="",y=!1,m=!0
            switch(h&&(h=+h.substring(1)),(c||"0"===r&&"="===o)&&(c=r="0",o="="),p){case"n":s=!0,p="g"
                break
                case"%":g=100,d="%",p="f"
                    break
                case"p":g=100,d="%",p="r"
                    break
                case"b":case"o":case"x":case"X":"#"===l&&(v="0"+p.toLowerCase())
                case"c":m=!1
                case"d":y=!0,h=0
                    break
                case"s":g=-1,p="r"}"$"===l&&(v=i[0],d=i[1]),"r"!=p||h||(p="g"),null!=h&&("g"==p?h=Math.max(1,Math.min(21,h)):"e"!=p&&"f"!=p||(h=Math.max(0,Math.min(20,h)))),p=sa.get(p)||Fn
            var M=c&&s
            return function(n){var e=d
                if(y&&n%1)return""
                var i=n<0||0===n&&1/n<0?(n=-n,"-"):"-"===a?"":a
                if(g<0){var l=ao.formatPrefix(n,h)
                    n=l.scale(n),e=l.symbol+d}else n*=g
                n=p(n,h)
                var x,b,_=n.lastIndexOf(".")
                if(_<0){var w=m?n.lastIndexOf("e"):-1
                    w<0?(x=n,b=""):(x=n.substring(0,w),b=n.substring(w))}else x=n.substring(0,_),b=t+n.substring(_+1)
                !c&&s&&(x=u(x,1/0))
                var S=v.length+x.length+b.length+(M?0:i.length),k=S<f?new Array(S=f-S+1).join(r):""
                return M&&(x=u(k+x,k.length?f-b.length:1/0)),i+=v,n=x+b,("<"===o?i+n+k:">"===o?k+i+n:"^"===o?k.substring(0,S>>=1)+i+n+k.substring(S):i+(M?n:k+n))+e}}}function Fn(n){return n+""}function Hn(){this._=new Date(arguments.length>1?Date.UTC.apply(this,arguments):arguments[0])}function On(n,t,e){function r(t){var e=n(t),r=u(e,1)
        return t-e<r-t?e:r}function i(e){return t(e=n(new pa(e-1)),1),e}function u(n,e){return t(n=new pa(+n),e),n}function o(n,r,u){var o=i(n),a=[]
        if(u>1)for(
            o<r
        )e(o)%u||a.push(new Date(+o)),t(o,1)
        else for(
            o<r
        )a.push(new Date(+o)),t(o,1)
        return a}function a(n,t,e){try{pa=Hn
        var r=new Hn
        return r._=n,o(r,t,e)}finally{pa=Date}}n.floor=n,n.round=r,n.ceil=i,n.offset=u,n.range=o
        var l=n.utc=In(n)
        return l.floor=l,l.round=In(r),l.ceil=In(i),l.offset=In(u),l.range=a,n}function In(n){return function(t,e){try{pa=Hn
        var r=new Hn
        return r._=t,n(r,e)._}finally{pa=Date}}}function Yn(n){function t(n){function t(t){for(var e,i,u,o=[],a=-1,l=0
        ++a<r
    )37===n.charCodeAt(a)&&(o.push(n.slice(l,a)),null!=(i=va[e=n.charAt(++a)])&&(e=n.charAt(++a)),(u=A[e])&&(e=u(t,null==i?"e"===e?" ":"0":i)),o.push(e),l=a+1)
        return o.push(n.slice(l,a)),o.join("")}var r=n.length
        return t.parse=function(t){var r={y:1900,m:0,d:1,H:0,M:0,S:0,L:0,Z:null},i=e(r,n,t,0)
            if(i!=t.length)return null
            "p"in r&&(r.H=r.H%12+12*r.p)
            var u=null!=r.Z&&pa!==Hn,o=new(u?Hn:pa)
            return"j"in r?o.setFullYear(r.y,0,r.j):"W"in r||"U"in r?("w"in r||(r.w="W"in r?1:0),o.setFullYear(r.y,0,1),o.setFullYear(r.y,0,"W"in r?(r.w+6)%7+7*r.W-(o.getDay()+5)%7:r.w+7*r.U-(o.getDay()+6)%7)):o.setFullYear(r.y,r.m,r.d),o.setHours(r.H+(r.Z/100|0),r.M+r.Z%100,r.S,r.L),u?o._:o},t.toString=function(){return n},t}function e(n,t,e,r){for(var i,u,o,a=0,l=t.length,c=e.length
        a<l
    ){if(r>=c)return-1
            if(i=t.charCodeAt(a++),37===i){if(o=t.charAt(a++),u=C[o in va?t.charAt(a++):o],!u||(r=u(n,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function r(n,t,e){_.lastIndex=0
        var r=_.exec(t.slice(e))
        return r?(n.w=w.get(r[0].toLowerCase()),e+r[0].length):-1}function i(n,t,e){x.lastIndex=0
        var r=x.exec(t.slice(e))
        return r?(n.w=b.get(r[0].toLowerCase()),e+r[0].length):-1}function u(n,t,e){N.lastIndex=0
        var r=N.exec(t.slice(e))
        return r?(n.m=E.get(r[0].toLowerCase()),e+r[0].length):-1}function o(n,t,e){S.lastIndex=0
        var r=S.exec(t.slice(e))
        return r?(n.m=k.get(r[0].toLowerCase()),e+r[0].length):-1}function a(n,t,r){return e(n,A.c.toString(),t,r)}function l(n,t,r){return e(n,A.x.toString(),t,r)}function c(n,t,r){return e(n,A.X.toString(),t,r)}function f(n,t,e){var r=M.get(t.slice(e,e+=2).toLowerCase())
        return null==r?-1:(n.p=r,e)}var s=n.dateTime,h=n.date,p=n.time,g=n.periods,v=n.days,d=n.shortDays,y=n.months,m=n.shortMonths
        t.utc=function(n){function e(n){try{pa=Hn
            var t=new pa
            return t._=n,r(t)}finally{pa=Date}}var r=t(n)
            return e.parse=function(n){try{pa=Hn
                var t=r.parse(n)
                return t&&t._}finally{pa=Date}},e.toString=r.toString,e},t.multi=t.utc.multi=ct
        var M=ao.map(),x=Vn(v),b=Xn(v),_=Vn(d),w=Xn(d),S=Vn(y),k=Xn(y),N=Vn(m),E=Xn(m)
        g.forEach(function(n,t){M.set(n.toLowerCase(),t)})
        var A={a:function(n){return d[n.getDay()]},A:function(n){return v[n.getDay()]},b:function(n){return m[n.getMonth()]},B:function(n){return y[n.getMonth()]},c:t(s),d:function(n,t){return Zn(n.getDate(),t,2)},e:function(n,t){return Zn(n.getDate(),t,2)},H:function(n,t){return Zn(n.getHours(),t,2)},I:function(n,t){return Zn(n.getHours()%12||12,t,2)},j:function(n,t){return Zn(1+ha.dayOfYear(n),t,3)},L:function(n,t){return Zn(n.getMilliseconds(),t,3)},m:function(n,t){return Zn(n.getMonth()+1,t,2)},M:function(n,t){return Zn(n.getMinutes(),t,2)},p:function(n){return g[+(n.getHours()>=12)]},S:function(n,t){return Zn(n.getSeconds(),t,2)},U:function(n,t){return Zn(ha.sundayOfYear(n),t,2)},w:function(n){return n.getDay()},W:function(n,t){return Zn(ha.mondayOfYear(n),t,2)},x:t(h),X:t(p),y:function(n,t){return Zn(n.getFullYear()%100,t,2)},Y:function(n,t){return Zn(n.getFullYear()%1e4,t,4)},Z:at,"%":function(){return"%"}},C={a:r,A:i,b:u,B:o,c:a,d:tt,e:tt,H:rt,I:rt,j:et,L:ot,m:nt,M:it,p:f,S:ut,U:Bn,w:$n,W:Wn,x:l,X:c,y:Gn,Y:Jn,Z:Kn,"%":lt}
        return t}function Zn(n,t,e){var r=n<0?"-":"",i=(r?-n:n)+"",u=i.length
        return r+(u<e?new Array(e-u+1).join(t)+i:i)}function Vn(n){return new RegExp("^(?:"+n.map(ao.requote).join("|")+")","i")}function Xn(n){for(var t=new c,e=-1,r=n.length
        ++e<r
    )t.set(n[e].toLowerCase(),e)
        return t}function $n(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e,e+1))
        return r?(n.w=+r[0],e+r[0].length):-1}function Bn(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e))
        return r?(n.U=+r[0],e+r[0].length):-1}function Wn(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e))
        return r?(n.W=+r[0],e+r[0].length):-1}function Jn(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e,e+4))
        return r?(n.y=+r[0],e+r[0].length):-1}function Gn(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e,e+2))
        return r?(n.y=Qn(+r[0]),e+r[0].length):-1}function Kn(n,t,e){return/^[+-]\d{4}$/.test(t=t.slice(e,e+5))?(n.Z=-t,e+5):-1}function Qn(n){return n+(n>68?1900:2e3)}function nt(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e,e+2))
        return r?(n.m=r[0]-1,e+r[0].length):-1}function tt(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e,e+2))
        return r?(n.d=+r[0],e+r[0].length):-1}function et(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e,e+3))
        return r?(n.j=+r[0],e+r[0].length):-1}function rt(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e,e+2))
        return r?(n.H=+r[0],e+r[0].length):-1}function it(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e,e+2))
        return r?(n.M=+r[0],e+r[0].length):-1}function ut(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e,e+2))
        return r?(n.S=+r[0],e+r[0].length):-1}function ot(n,t,e){da.lastIndex=0
        var r=da.exec(t.slice(e,e+3))
        return r?(n.L=+r[0],e+r[0].length):-1}function at(n){var t=n.getTimezoneOffset(),e=t>0?"-":"+",r=mo(t)/60|0,i=mo(t)%60
        return e+Zn(r,"0",2)+Zn(i,"0",2)}function lt(n,t,e){ya.lastIndex=0
        var r=ya.exec(t.slice(e,e+1))
        return r?e+r[0].length:-1}function ct(n){for(var t=n.length,e=-1
        ++e<t
    )n[e][0]=this(n[e][0])
        return function(t){for(var e=0,r=n[e]
            !r[1](t)
            )r=n[++e]
            return r[0](t)}}function ft(){}function st(n,t,e){var r=e.s=n+t,i=r-n,u=r-i
        e.t=n-u+(t-i)}function ht(n,t){n&&ba.hasOwnProperty(n.type)&&ba[n.type](n,t)}function pt(n,t,e){var r,i=-1,u=n.length-e
        for(t.lineStart()
            ++i<u
    )r=n[i],t.point(r[0],r[1],r[2])
        t.lineEnd()}function gt(n,t){var e=-1,r=n.length
        for(t.polygonStart()
            ++e<r
    )pt(n[e],t,1)
        t.polygonEnd()}function vt(){function n(n,t){n*=Oo,t=t*Oo/2+Uo/4
        var e=n-r,o=e>=0?1:-1,a=o*e,l=Math.cos(t),c=Math.sin(t),f=u*c,s=i*l+f*Math.cos(a),h=f*o*Math.sin(a)
        wa.add(Math.atan2(h,s)),r=n,i=l,u=c}var t,e,r,i,u
        Sa.point=function(o,a){Sa.point=n,r=(t=o)*Oo,i=Math.cos(a=(e=a)*Oo/2+Uo/4),u=Math.sin(a)},Sa.lineEnd=function(){n(t,e)}}function dt(n){var t=n[0],e=n[1],r=Math.cos(e)
        return[r*Math.cos(t),r*Math.sin(t),Math.sin(e)]}function yt(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]}function mt(n,t){return[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]]}function Mt(n,t){n[0]+=t[0],n[1]+=t[1],n[2]+=t[2]}function xt(n,t){return[n[0]*t,n[1]*t,n[2]*t]}function bt(n){var t=Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2])
        n[0]/=t,n[1]/=t,n[2]/=t}function _t(n){return[Math.atan2(n[1],n[0]),tn(n[2])]}function wt(n,t){return mo(n[0]-t[0])<Do&&mo(n[1]-t[1])<Do}function St(n,t){n*=Oo
        var e=Math.cos(t*=Oo)
        kt(e*Math.cos(n),e*Math.sin(n),Math.sin(t))}function kt(n,t,e){++ka,Ea+=(n-Ea)/ka,Aa+=(t-Aa)/ka,Ca+=(e-Ca)/ka}function Nt(){function n(n,i){n*=Oo
        var u=Math.cos(i*=Oo),o=u*Math.cos(n),a=u*Math.sin(n),l=Math.sin(i),c=Math.atan2(Math.sqrt((c=e*l-r*a)*c+(c=r*o-t*l)*c+(c=t*a-e*o)*c),t*o+e*a+r*l)
        Na+=c,za+=c*(t+(t=o)),La+=c*(e+(e=a)),qa+=c*(r+(r=l)),kt(t,e,r)}var t,e,r
        Pa.point=function(i,u){i*=Oo
            var o=Math.cos(u*=Oo)
            t=o*Math.cos(i),e=o*Math.sin(i),r=Math.sin(u),Pa.point=n,kt(t,e,r)}}function Et(){Pa.point=St}function At(){function n(n,t){n*=Oo
        var e=Math.cos(t*=Oo),o=e*Math.cos(n),a=e*Math.sin(n),l=Math.sin(t),c=i*l-u*a,f=u*o-r*l,s=r*a-i*o,h=Math.sqrt(c*c+f*f+s*s),p=r*o+i*a+u*l,g=h&&-nn(p)/h,v=Math.atan2(h,p)
        Ta+=g*c,Ra+=g*f,Da+=g*s,Na+=v,za+=v*(r+(r=o)),La+=v*(i+(i=a)),qa+=v*(u+(u=l)),kt(r,i,u)}var t,e,r,i,u
        Pa.point=function(o,a){t=o,e=a,Pa.point=n,o*=Oo
            var l=Math.cos(a*=Oo)
            r=l*Math.cos(o),i=l*Math.sin(o),u=Math.sin(a),kt(r,i,u)},Pa.lineEnd=function(){n(t,e),Pa.lineEnd=Et,Pa.point=St}}function Ct(n,t){function e(e,r){return e=n(e,r),t(e[0],e[1])}return n.invert&&t.invert&&(e.invert=function(e,r){return e=t.invert(e,r),e&&n.invert(e[0],e[1])}),e}function zt(){return!0}function Lt(n,t,e,r,i){var u=[],o=[]
        if(n.forEach(function(n){if(!((t=n.length-1)<=0)){var t,e=n[0],r=n[t]
                if(wt(e,r)){i.lineStart()
                    for(var a=0
                        a<t
                    ++a)i.point((e=n[a])[0],e[1])
                    return void i.lineEnd()}var l=new Tt(e,n,null,!0),c=new Tt(e,null,l,!1)
                l.o=c,u.push(l),o.push(c),l=new Tt(r,n,null,!1),c=new Tt(r,null,l,!0),l.o=c,u.push(l),o.push(c)}}),o.sort(t),qt(u),qt(o),u.length){for(var a=0,l=e,c=o.length
            a<c
            ++a)o[a].e=l=!l
            for(var f,s,h=u[0]

            ){for(var p=h,g=!0
                p.v
            )if((p=p.n)===h)return
                f=p.z,i.lineStart()
                do{if(p.v=p.o.v=!0,p.e){if(g)for(var a=0,c=f.length
                    a<c
                    ++a)i.point((s=f[a])[0],s[1])
                else r(p.x,p.n.x,1,i)
                    p=p.n}else{if(g){f=p.p.z
                    for(var a=f.length-1
                        a>=0
                    --a)i.point((s=f[a])[0],s[1])}else r(p.x,p.p.x,-1,i)
                    p=p.p}p=p.o,f=p.z,g=!g}while(!p.v)
                i.lineEnd()}}}function qt(n){if(t=n.length){for(var t,e,r=0,i=n[0]
        ++r<t
    )i.n=e=n[r],e.p=i,i=e
        i.n=e=n[0],e.p=i}}function Tt(n,t,e,r){this.x=n,this.z=t,this.o=e,this.e=r,this.v=!1,this.n=this.p=null}function Rt(n,t,e,r){return function(i,u){function o(t,e){var r=i(t,e)
        n(t=r[0],e=r[1])&&u.point(t,e)}function a(n,t){var e=i(n,t)
        d.point(e[0],e[1])}function l(){m.point=a,d.lineStart()}function c(){m.point=o,d.lineEnd()}function f(n,t){v.push([n,t])
        var e=i(n,t)
        x.point(e[0],e[1])}function s(){x.lineStart(),v=[]}function h(){f(v[0][0],v[0][1]),x.lineEnd()
        var n,t=x.clean(),e=M.buffer(),r=e.length
        if(v.pop(),g.push(v),v=null,r)if(1&t){n=e[0]
            var i,r=n.length-1,o=-1
            if(r>0){for(b||(u.polygonStart(),b=!0),u.lineStart()
                ++o<r
            )u.point((i=n[o])[0],i[1])
                u.lineEnd()}}else r>1&&2&t&&e.push(e.pop().concat(e.shift())),p.push(e.filter(Dt))}var p,g,v,d=t(u),y=i.invert(r[0],r[1]),m={point:o,lineStart:l,lineEnd:c,polygonStart:function(){m.point=f,m.lineStart=s,m.lineEnd=h,p=[],g=[]},polygonEnd:function(){m.point=o,m.lineStart=l,m.lineEnd=c,p=ao.merge(p)
        var n=Ot(y,g)
        p.length?(b||(u.polygonStart(),b=!0),Lt(p,Ut,n,e,u)):n&&(b||(u.polygonStart(),b=!0),u.lineStart(),e(null,null,1,u),u.lineEnd()),b&&(u.polygonEnd(),b=!1),p=g=null},sphere:function(){u.polygonStart(),u.lineStart(),e(null,null,1,u),u.lineEnd(),u.polygonEnd()}},M=Pt(),x=t(M),b=!1
        return m}}function Dt(n){return n.length>1}function Pt(){var n,t=[]
        return{lineStart:function(){t.push(n=[])},point:function(t,e){n.push([t,e])},lineEnd:b,buffer:function(){var e=t
            return t=[],n=null,e},rejoin:function(){t.length>1&&t.push(t.pop().concat(t.shift()))}}}function Ut(n,t){return((n=n.x)[0]<0?n[1]-Ho-Do:Ho-n[1])-((t=t.x)[0]<0?t[1]-Ho-Do:Ho-t[1])}function jt(n){var t,e=NaN,r=NaN,i=NaN
        return{lineStart:function(){n.lineStart(),t=1},point:function(u,o){var a=u>0?Uo:-Uo,l=mo(u-e)
            mo(l-Uo)<Do?(n.point(e,r=(r+o)/2>0?Ho:-Ho),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),n.point(u,r),t=0):i!==a&&l>=Uo&&(mo(e-i)<Do&&(e-=i*Do),mo(u-a)<Do&&(u-=a*Do),r=Ft(e,r,u,o),n.point(i,r),n.lineEnd(),n.lineStart(),n.point(a,r),t=0),n.point(e=u,r=o),i=a},lineEnd:function(){n.lineEnd(),e=r=NaN},clean:function(){return 2-t}}}function Ft(n,t,e,r){var i,u,o=Math.sin(n-e)
        return mo(o)>Do?Math.atan((Math.sin(t)*(u=Math.cos(r))*Math.sin(e)-Math.sin(r)*(i=Math.cos(t))*Math.sin(n))/(i*u*o)):(t+r)/2}function Ht(n,t,e,r){var i
        if(null==n)i=e*Ho,r.point(-Uo,i),r.point(0,i),r.point(Uo,i),r.point(Uo,0),r.point(Uo,-i),r.point(0,-i),r.point(-Uo,-i),r.point(-Uo,0),r.point(-Uo,i)
        else if(mo(n[0]-t[0])>Do){var u=n[0]<t[0]?Uo:-Uo
            i=e*u/2,r.point(-u,i),r.point(0,i),r.point(u,i)}else r.point(t[0],t[1])}function Ot(n,t){var e=n[0],r=n[1],i=[Math.sin(e),-Math.cos(e),0],u=0,o=0
        wa.reset()
        for(var a=0,l=t.length
            a<l
        ++a){var c=t[a],f=c.length
            if(f)for(var s=c[0],h=s[0],p=s[1]/2+Uo/4,g=Math.sin(p),v=Math.cos(p),d=1

            ){d===f&&(d=0),n=c[d]
                var y=n[0],m=n[1]/2+Uo/4,M=Math.sin(m),x=Math.cos(m),b=y-h,_=b>=0?1:-1,w=_*b,S=w>Uo,k=g*M
                if(wa.add(Math.atan2(k*_*Math.sin(w),v*x+k*Math.cos(w))),u+=S?b+_*jo:b,S^h>=e^y>=e){var N=mt(dt(s),dt(n))
                    bt(N)
                    var E=mt(i,N)
                    bt(E)
                    var A=(S^b>=0?-1:1)*tn(E[2])
                        (r>A||r===A&&(N[0]||N[1]))&&(o+=S^b>=0?1:-1)}if(!d++)break
                h=y,g=M,v=x,s=n}}return(u<-Do||u<Do&&wa<-Do)^1&o}function It(n){function t(n,t){return Math.cos(n)*Math.cos(t)>u}function e(n){var e,u,l,c,f
        return{lineStart:function(){c=l=!1,f=1},point:function(s,h){var p,g=[s,h],v=t(s,h),d=o?v?0:i(s,h):v?i(s+(s<0?Uo:-Uo),h):0
            if(!e&&(c=l=v)&&n.lineStart(),v!==l&&(p=r(e,g),(wt(e,p)||wt(g,p))&&(g[0]+=Do,g[1]+=Do,v=t(g[0],g[1]))),v!==l)f=0,v?(n.lineStart(),p=r(g,e),n.point(p[0],p[1])):(p=r(e,g),n.point(p[0],p[1]),n.lineEnd()),e=p
            else if(a&&e&&o^v){var y
                d&u||!(y=r(g,e,!0))||(f=0,o?(n.lineStart(),n.point(y[0][0],y[0][1]),n.point(y[1][0],y[1][1]),n.lineEnd()):(n.point(y[1][0],y[1][1]),n.lineEnd(),n.lineStart(),n.point(y[0][0],y[0][1])))}!v||e&&wt(e,g)||n.point(g[0],g[1]),e=g,l=v,u=d},lineEnd:function(){l&&n.lineEnd(),e=null},clean:function(){return f|(c&&l)<<1}}}function r(n,t,e){var r=dt(n),i=dt(t),o=[1,0,0],a=mt(r,i),l=yt(a,a),c=a[0],f=l-c*c
        if(!f)return!e&&n
        var s=u*l/f,h=-u*c/f,p=mt(o,a),g=xt(o,s),v=xt(a,h)
        Mt(g,v)
        var d=p,y=yt(g,d),m=yt(d,d),M=y*y-m*(yt(g,g)-1)
        if(!(M<0)){var x=Math.sqrt(M),b=xt(d,(-y-x)/m)
            if(Mt(b,g),b=_t(b),!e)return b
            var _,w=n[0],S=t[0],k=n[1],N=t[1]
            S<w&&(_=w,w=S,S=_)
            var E=S-w,A=mo(E-Uo)<Do,C=A||E<Do
            if(!A&&N<k&&(_=k,k=N,N=_),C?A?k+N>0^b[1]<(mo(b[0]-w)<Do?k:N):k<=b[1]&&b[1]<=N:E>Uo^(w<=b[0]&&b[0]<=S)){var z=xt(d,(-y+x)/m)
                return Mt(z,g),[b,_t(z)]}}}function i(t,e){var r=o?n:Uo-n,i=0
        return t<-r?i|=1:t>r&&(i|=2),e<-r?i|=4:e>r&&(i|=8),i}var u=Math.cos(n),o=u>0,a=mo(u)>Do,l=ve(n,6*Oo)
        return Rt(t,e,l,o?[0,-n]:[-Uo,n-Uo])}function Yt(n,t,e,r){return function(i){var u,o=i.a,a=i.b,l=o.x,c=o.y,f=a.x,s=a.y,h=0,p=1,g=f-l,v=s-c
        if(u=n-l,g||!(u>0)){if(u/=g,g<0){if(u<h)return
            u<p&&(p=u)}else if(g>0){if(u>p)return
            u>h&&(h=u)}if(u=e-l,g||!(u<0)){if(u/=g,g<0){if(u>p)return
            u>h&&(h=u)}else if(g>0){if(u<h)return
            u<p&&(p=u)}if(u=t-c,v||!(u>0)){if(u/=v,v<0){if(u<h)return
            u<p&&(p=u)}else if(v>0){if(u>p)return
            u>h&&(h=u)}if(u=r-c,v||!(u<0)){if(u/=v,v<0){if(u>p)return
            u>h&&(h=u)}else if(v>0){if(u<h)return
            u<p&&(p=u)}return h>0&&(i.a={x:l+h*g,y:c+h*v}),p<1&&(i.b={x:l+p*g,y:c+p*v}),i}}}}}}function Zt(n,t,e,r){function i(r,i){return mo(r[0]-n)<Do?i>0?0:3:mo(r[0]-e)<Do?i>0?2:1:mo(r[1]-t)<Do?i>0?1:0:i>0?3:2}function u(n,t){return o(n.x,t.x)}function o(n,t){var e=i(n,1),r=i(t,1)
        return e!==r?e-r:0===e?t[1]-n[1]:1===e?n[0]-t[0]:2===e?n[1]-t[1]:t[0]-n[0]}return function(a){function l(n){for(var t=0,e=d.length,r=n[1],i=0
        i<e
        ++i)for(var u,o=1,a=d[i],l=a.length,c=a[0]
            o<l
        ++o)u=a[o],c[1]<=r?u[1]>r&&Q(c,u,n)>0&&++t:u[1]<=r&&Q(c,u,n)<0&&--t,c=u
        return 0!==t}function c(u,a,l,c){var f=0,s=0
        if(null==u||(f=i(u,l))!==(s=i(a,l))||o(u,a)<0^l>0){do c.point(0===f||3===f?n:e,f>1?r:t)
        while((f=(f+l+4)%4)!==s)}else c.point(a[0],a[1])}function f(i,u){return n<=i&&i<=e&&t<=u&&u<=r}function s(n,t){f(n,t)&&a.point(n,t)}function h(){C.point=g,d&&d.push(y=[]),S=!0,w=!1,b=_=NaN}function p(){v&&(g(m,M),x&&w&&E.rejoin(),v.push(E.buffer())),C.point=s,w&&a.lineEnd()}function g(n,t){n=Math.max(-ja,Math.min(ja,n)),t=Math.max(-ja,Math.min(ja,t))
        var e=f(n,t)
        if(d&&y.push([n,t]),S)m=n,M=t,x=e,S=!1,e&&(a.lineStart(),a.point(n,t))
        else if(e&&w)a.point(n,t)
        else{var r={a:{x:b,y:_},b:{x:n,y:t}}
            A(r)?(w||(a.lineStart(),a.point(r.a.x,r.a.y)),a.point(r.b.x,r.b.y),e||a.lineEnd(),k=!1):e&&(a.lineStart(),a.point(n,t),k=!1)}b=n,_=t,w=e}var v,d,y,m,M,x,b,_,w,S,k,N=a,E=Pt(),A=Yt(n,t,e,r),C={point:s,lineStart:h,lineEnd:p,polygonStart:function(){a=E,v=[],d=[],k=!0},polygonEnd:function(){a=N,v=ao.merge(v)
        var t=l([n,r]),e=k&&t,i=v.length
            (e||i)&&(a.polygonStart(),e&&(a.lineStart(),c(null,null,1,a),a.lineEnd()),i&&Lt(v,u,t,c,a),a.polygonEnd()),v=d=y=null}}
        return C}}function Vt(n){var t=0,e=Uo/3,r=ae(n),i=r(t,e)
        return i.parallels=function(n){return arguments.length?r(t=n[0]*Uo/180,e=n[1]*Uo/180):[t/Uo*180,e/Uo*180]},i}function Xt(n,t){function e(n,t){var e=Math.sqrt(u-2*i*Math.sin(t))/i
        return[e*Math.sin(n*=i),o-e*Math.cos(n)]}var r=Math.sin(n),i=(r+Math.sin(t))/2,u=1+r*(2*i-r),o=Math.sqrt(u)/i
        return e.invert=function(n,t){var e=o-t
            return[Math.atan2(n,e)/i,tn((u-(n*n+e*e)*i*i)/(2*i))]},e}function $t(){function n(n,t){Ha+=i*n-r*t,r=n,i=t}var t,e,r,i
        Va.point=function(u,o){Va.point=n,t=r=u,e=i=o},Va.lineEnd=function(){n(t,e)}}function Bt(n,t){n<Oa&&(Oa=n),n>Ya&&(Ya=n),t<Ia&&(Ia=t),t>Za&&(Za=t)}function Wt(){function n(n,t){o.push("M",n,",",t,u)}function t(n,t){o.push("M",n,",",t),a.point=e}function e(n,t){o.push("L",n,",",t)}function r(){a.point=n}function i(){o.push("Z")}var u=Jt(4.5),o=[],a={point:n,lineStart:function(){a.point=t},lineEnd:r,polygonStart:function(){a.lineEnd=i},polygonEnd:function(){a.lineEnd=r,a.point=n},pointRadius:function(n){return u=Jt(n),a},result:function(){if(o.length){var n=o.join("")
        return o=[],n}}}
        return a}function Jt(n){return"m0,"+n+"a"+n+","+n+" 0 1,1 0,"+-2*n+"a"+n+","+n+" 0 1,1 0,"+2*n+"z"}function Gt(n,t){Ea+=n,Aa+=t,++Ca}function Kt(){function n(n,r){var i=n-t,u=r-e,o=Math.sqrt(i*i+u*u)
        za+=o*(t+n)/2,La+=o*(e+r)/2,qa+=o,Gt(t=n,e=r)}var t,e
        $a.point=function(r,i){$a.point=n,Gt(t=r,e=i)}}function Qt(){$a.point=Gt}function ne(){function n(n,t){var e=n-r,u=t-i,o=Math.sqrt(e*e+u*u)
        za+=o*(r+n)/2,La+=o*(i+t)/2,qa+=o,o=i*n-r*t,Ta+=o*(r+n),Ra+=o*(i+t),Da+=3*o,Gt(r=n,i=t)}var t,e,r,i
        $a.point=function(u,o){$a.point=n,Gt(t=r=u,e=i=o)},$a.lineEnd=function(){n(t,e)}}function te(n){function t(t,e){n.moveTo(t+o,e),n.arc(t,e,o,0,jo)}function e(t,e){n.moveTo(t,e),a.point=r}function r(t,e){n.lineTo(t,e)}function i(){a.point=t}function u(){n.closePath()}var o=4.5,a={point:t,lineStart:function(){a.point=e},lineEnd:i,polygonStart:function(){a.lineEnd=u},polygonEnd:function(){a.lineEnd=i,a.point=t},pointRadius:function(n){return o=n,a},result:b}
        return a}function ee(n){function t(n){return(a?r:e)(n)}function e(t){return ue(t,function(e,r){e=n(e,r),t.point(e[0],e[1])})}function r(t){function e(e,r){e=n(e,r),t.point(e[0],e[1])}function r(){M=NaN,S.point=u,t.lineStart()}function u(e,r){var u=dt([e,r]),o=n(e,r)
        i(M,x,m,b,_,w,M=o[0],x=o[1],m=e,b=u[0],_=u[1],w=u[2],a,t),t.point(M,x)}function o(){S.point=e,t.lineEnd()}function l(){
        r(),S.point=c,S.lineEnd=f}function c(n,t){u(s=n,h=t),p=M,g=x,v=b,d=_,y=w,S.point=u}function f(){i(M,x,m,b,_,w,p,g,s,v,d,y,a,t),S.lineEnd=o,o()}var s,h,p,g,v,d,y,m,M,x,b,_,w,S={point:e,lineStart:r,lineEnd:o,polygonStart:function(){t.polygonStart(),S.lineStart=l},polygonEnd:function(){t.polygonEnd(),S.lineStart=r}}
        return S}function i(t,e,r,a,l,c,f,s,h,p,g,v,d,y){var m=f-t,M=s-e,x=m*m+M*M
        if(x>4*u&&d--){var b=a+p,_=l+g,w=c+v,S=Math.sqrt(b*b+_*_+w*w),k=Math.asin(w/=S),N=mo(mo(w)-1)<Do||mo(r-h)<Do?(r+h)/2:Math.atan2(_,b),E=n(N,k),A=E[0],C=E[1],z=A-t,L=C-e,q=M*z-m*L
            (q*q/x>u||mo((m*z+M*L)/x-.5)>.3||a*p+l*g+c*v<o)&&(i(t,e,r,a,l,c,A,C,N,b/=S,_/=S,w,d,y),y.point(A,C),i(A,C,N,b,_,w,f,s,h,p,g,v,d,y))}}var u=.5,o=Math.cos(30*Oo),a=16
        return t.precision=function(n){return arguments.length?(a=(u=n*n)>0&&16,t):Math.sqrt(u)},t}function re(n){var t=ee(function(t,e){return n([t*Io,e*Io])})
        return function(n){return le(t(n))}}function ie(n){this.stream=n}function ue(n,t){return{point:t,sphere:function(){n.sphere()},lineStart:function(){n.lineStart()},lineEnd:function(){n.lineEnd()},polygonStart:function(){n.polygonStart()},polygonEnd:function(){n.polygonEnd()}}}function oe(n){return ae(function(){return n})()}function ae(n){function t(n){return n=a(n[0]*Oo,n[1]*Oo),[n[0]*h+l,c-n[1]*h]}function e(n){return n=a.invert((n[0]-l)/h,(c-n[1])/h),n&&[n[0]*Io,n[1]*Io]}function r(){a=Ct(o=se(y,M,x),u)
        var n=u(v,d)
        return l=p-n[0]*h,c=g+n[1]*h,i()}function i(){return f&&(f.valid=!1,f=null),t}var u,o,a,l,c,f,s=ee(function(n,t){return n=u(n,t),[n[0]*h+l,c-n[1]*h]}),h=150,p=480,g=250,v=0,d=0,y=0,M=0,x=0,b=Ua,_=m,w=null,S=null
        return t.stream=function(n){return f&&(f.valid=!1),f=le(b(o,s(_(n)))),f.valid=!0,f},t.clipAngle=function(n){return arguments.length?(b=null==n?(w=n,Ua):It((w=+n)*Oo),i()):w},t.clipExtent=function(n){return arguments.length?(S=n,_=n?Zt(n[0][0],n[0][1],n[1][0],n[1][1]):m,i()):S},t.scale=function(n){return arguments.length?(h=+n,r()):h},t.translate=function(n){return arguments.length?(p=+n[0],g=+n[1],r()):[p,g]},t.center=function(n){return arguments.length?(v=n[0]%360*Oo,d=n[1]%360*Oo,r()):[v*Io,d*Io]},t.rotate=function(n){return arguments.length?(y=n[0]%360*Oo,M=n[1]%360*Oo,x=n.length>2?n[2]%360*Oo:0,r()):[y*Io,M*Io,x*Io]},ao.rebind(t,s,"precision"),function(){return u=n.apply(this,arguments),t.invert=u.invert&&e,r()}}function le(n){return ue(n,function(t,e){n.point(t*Oo,e*Oo)})}function ce(n,t){return[n,t]}function fe(n,t){return[n>Uo?n-jo:n<-Uo?n+jo:n,t]}function se(n,t,e){return n?t||e?Ct(pe(n),ge(t,e)):pe(n):t||e?ge(t,e):fe}function he(n){return function(t,e){return t+=n,[t>Uo?t-jo:t<-Uo?t+jo:t,e]}}function pe(n){var t=he(n)
        return t.invert=he(-n),t}function ge(n,t){function e(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*r+a*i
        return[Math.atan2(l*u-f*o,a*r-c*i),tn(f*u+l*o)]}var r=Math.cos(n),i=Math.sin(n),u=Math.cos(t),o=Math.sin(t)
        return e.invert=function(n,t){var e=Math.cos(t),a=Math.cos(n)*e,l=Math.sin(n)*e,c=Math.sin(t),f=c*u-l*o
            return[Math.atan2(l*u+c*o,a*r+f*i),tn(f*r-a*i)]},e}function ve(n,t){var e=Math.cos(n),r=Math.sin(n)
        return function(i,u,o,a){var l=o*t
            null!=i?(i=de(e,i),u=de(e,u),(o>0?i<u:i>u)&&(i+=o*jo)):(i=n+o*jo,u=n-.5*l)
            for(var c,f=i
                o>0?f>u:f<u
            f-=l)a.point((c=_t([e,-r*Math.cos(f),-r*Math.sin(f)]))[0],c[1])}}function de(n,t){var e=dt(t)
        e[0]-=n,bt(e)
        var r=nn(-e[1])
        return((-e[2]<0?-r:r)+2*Math.PI-Do)%(2*Math.PI)}function ye(n,t,e){var r=ao.range(n,t-Do,e).concat(t)
        return function(n){return r.map(function(t){return[n,t]})}}function me(n,t,e){var r=ao.range(n,t-Do,e).concat(t)
        return function(n){return r.map(function(t){return[t,n]})}}function Me(n){return n.source}function xe(n){return n.target}function be(n,t,e,r){var i=Math.cos(t),u=Math.sin(t),o=Math.cos(r),a=Math.sin(r),l=i*Math.cos(n),c=i*Math.sin(n),f=o*Math.cos(e),s=o*Math.sin(e),h=2*Math.asin(Math.sqrt(on(r-t)+i*o*on(e-n))),p=1/Math.sin(h),g=h?function(n){var t=Math.sin(n*=h)*p,e=Math.sin(h-n)*p,r=e*l+t*f,i=e*c+t*s,o=e*u+t*a
        return[Math.atan2(i,r)*Io,Math.atan2(o,Math.sqrt(r*r+i*i))*Io]}:function(){return[n*Io,t*Io]}
        return g.distance=h,g}function _e(){function n(n,i){var u=Math.sin(i*=Oo),o=Math.cos(i),a=mo((n*=Oo)-t),l=Math.cos(a)
        Ba+=Math.atan2(Math.sqrt((a=o*Math.sin(a))*a+(a=r*u-e*o*l)*a),e*u+r*o*l),t=n,e=u,r=o}var t,e,r
        Wa.point=function(i,u){t=i*Oo,e=Math.sin(u*=Oo),r=Math.cos(u),Wa.point=n},Wa.lineEnd=function(){Wa.point=Wa.lineEnd=b}}function we(n,t){function e(t,e){var r=Math.cos(t),i=Math.cos(e),u=n(r*i)
        return[u*i*Math.sin(t),u*Math.sin(e)]}return e.invert=function(n,e){var r=Math.sqrt(n*n+e*e),i=t(r),u=Math.sin(i),o=Math.cos(i)
        return[Math.atan2(n*u,r*o),Math.asin(r&&e*u/r)]},e}function Se(n,t){function e(n,t){o>0?t<-Ho+Do&&(t=-Ho+Do):t>Ho-Do&&(t=Ho-Do)
        var e=o/Math.pow(i(t),u)
        return[e*Math.sin(u*n),o-e*Math.cos(u*n)]}var r=Math.cos(n),i=function(n){return Math.tan(Uo/4+n/2)},u=n===t?Math.sin(n):Math.log(r/Math.cos(t))/Math.log(i(t)/i(n)),o=r*Math.pow(i(n),u)/u
        return u?(e.invert=function(n,t){var e=o-t,r=K(u)*Math.sqrt(n*n+e*e)
            return[Math.atan2(n,e)/u,2*Math.atan(Math.pow(o/r,1/u))-Ho]},e):Ne}function ke(n,t){function e(n,t){var e=u-t
        return[e*Math.sin(i*n),u-e*Math.cos(i*n)]}var r=Math.cos(n),i=n===t?Math.sin(n):(r-Math.cos(t))/(t-n),u=r/i+n
        return mo(i)<Do?ce:(e.invert=function(n,t){var e=u-t
            return[Math.atan2(n,e)/i,u-K(i)*Math.sqrt(n*n+e*e)]},e)}function Ne(n,t){return[n,Math.log(Math.tan(Uo/4+t/2))]}function Ee(n){var t,e=oe(n),r=e.scale,i=e.translate,u=e.clipExtent
        return e.scale=function(){var n=r.apply(e,arguments)
            return n===e?t?e.clipExtent(null):e:n},e.translate=function(){var n=i.apply(e,arguments)
            return n===e?t?e.clipExtent(null):e:n},e.clipExtent=function(n){var o=u.apply(e,arguments)
            if(o===e){if(t=null==n){var a=Uo*r(),l=i()
                u([[l[0]-a,l[1]-a],[l[0]+a,l[1]+a]])}}else t&&(o=null)
            return o},e.clipExtent(null)}function Ae(n,t){return[Math.log(Math.tan(Uo/4+t/2)),-n]}function Ce(n){return n[0]}function ze(n){return n[1]}function Le(n){for(var t=n.length,e=[0,1],r=2,i=2
        i<t
        i++){for(
            r>1&&Q(n[e[r-2]],n[e[r-1]],n[i])<=0
        )--r
            e[r++]=i}return e.slice(0,r)}function qe(n,t){return n[0]-t[0]||n[1]-t[1]}function Te(n,t,e){return(e[0]-t[0])*(n[1]-t[1])<(e[1]-t[1])*(n[0]-t[0])}function Re(n,t,e,r){var i=n[0],u=e[0],o=t[0]-i,a=r[0]-u,l=n[1],c=e[1],f=t[1]-l,s=r[1]-c,h=(a*(l-c)-s*(i-u))/(s*o-a*f)
        return[i+h*o,l+h*f]}function De(n){var t=n[0],e=n[n.length-1]
        return!(t[0]-e[0]||t[1]-e[1])}function Pe(){rr(this),this.edge=this.site=this.circle=null}function Ue(n){var t=al.pop()||new Pe
        return t.site=n,t}function je(n){Be(n),il.remove(n),al.push(n),rr(n)}function Fe(n){var t=n.circle,e=t.x,r=t.cy,i={x:e,y:r},u=n.P,o=n.N,a=[n]
        je(n)
        for(var l=u
            l.circle&&mo(e-l.circle.x)<Do&&mo(r-l.circle.cy)<Do
    )u=l.P,a.unshift(l),je(l),l=u
        a.unshift(l),Be(l)
        for(var c=o
            c.circle&&mo(e-c.circle.x)<Do&&mo(r-c.circle.cy)<Do
    )o=c.N,a.push(c),je(c),c=o
        a.push(c),Be(c)
        var f,s=a.length
        for(f=1
            f<s
        ++f)c=a[f],l=a[f-1],nr(c.edge,l.site,c.site,i)
        l=a[0],c=a[s-1],c.edge=Ke(l.site,c.site,null,i),$e(l),$e(c)}function He(n){for(var t,e,r,i,u=n.x,o=n.y,a=il._
        a
    )if(r=Oe(a,o)-u,r>Do)a=a.L
        else{if(i=u-Ie(a,o),!(i>Do)){r>-Do?(t=a.P,e=a):i>-Do?(t=a,e=a.N):t=e=a
            break}if(!a.R){t=a
            break}a=a.R}var l=Ue(n)
        if(il.insert(t,l),t||e){if(t===e)return Be(t),e=Ue(t.site),il.insert(l,e),l.edge=e.edge=Ke(t.site,l.site),$e(t),void $e(e)
            if(!e)return void(l.edge=Ke(t.site,l.site))
            Be(t),Be(e)
            var c=t.site,f=c.x,s=c.y,h=n.x-f,p=n.y-s,g=e.site,v=g.x-f,d=g.y-s,y=2*(h*d-p*v),m=h*h+p*p,M=v*v+d*d,x={x:(d*m-p*M)/y+f,y:(h*M-v*m)/y+s}
            nr(e.edge,c,g,x),l.edge=Ke(c,n,null,x),e.edge=Ke(n,g,null,x),$e(t),$e(e)}}function Oe(n,t){var e=n.site,r=e.x,i=e.y,u=i-t
        if(!u)return r
        var o=n.P
        if(!o)return-(1/0)
        e=o.site
        var a=e.x,l=e.y,c=l-t
        if(!c)return a
        var f=a-r,s=1/u-1/c,h=f/c
        return s?(-h+Math.sqrt(h*h-2*s*(f*f/(-2*c)-l+c/2+i-u/2)))/s+r:(r+a)/2}function Ie(n,t){var e=n.N
        if(e)return Oe(e,t)
        var r=n.site
        return r.y===t?r.x:1/0}function Ye(n){this.site=n,this.edges=[]}function Ze(n){for(var t,e,r,i,u,o,a,l,c,f,s=n[0][0],h=n[1][0],p=n[0][1],g=n[1][1],v=rl,d=v.length
        d--
    )if(u=v[d],u&&u.prepare())for(a=u.edges,l=a.length,o=0
            o<l
    )f=a[o].end(),r=f.x,i=f.y,c=a[++o%l].start(),t=c.x,e=c.y,(mo(r-t)>Do||mo(i-e)>Do)&&(a.splice(o,0,new tr(Qe(u.site,f,mo(r-s)<Do&&g-i>Do?{x:s,y:mo(t-s)<Do?e:g}:mo(i-g)<Do&&h-r>Do?{x:mo(e-g)<Do?t:h,y:g}:mo(r-h)<Do&&i-p>Do?{x:h,y:mo(t-h)<Do?e:p}:mo(i-p)<Do&&r-s>Do?{x:mo(e-p)<Do?t:s,y:p}:null),u.site,null)),++l)}function Ve(n,t){return t.angle-n.angle}function Xe(){rr(this),this.x=this.y=this.arc=this.site=this.cy=null}function $e(n){var t=n.P,e=n.N
        if(t&&e){var r=t.site,i=n.site,u=e.site
            if(r!==u){var o=i.x,a=i.y,l=r.x-o,c=r.y-a,f=u.x-o,s=u.y-a,h=2*(l*s-c*f)
                if(!(h>=-Po)){var p=l*l+c*c,g=f*f+s*s,v=(s*p-c*g)/h,d=(l*g-f*p)/h,s=d+a,y=ll.pop()||new Xe
                    y.arc=n,y.site=i,y.x=v+o,y.y=s+Math.sqrt(v*v+d*d),y.cy=s,n.circle=y
                    for(var m=null,M=ol._
                        M
                )if(y.y<M.y||y.y===M.y&&y.x<=M.x){if(!M.L){m=M.P
                        break}M=M.L}else{if(!M.R){m=M
                        break}M=M.R}ol.insert(m,y),m||(ul=y)}}}}function Be(n){var t=n.circle
        t&&(t.P||(ul=t.N),ol.remove(t),ll.push(t),rr(t),n.circle=null)}function We(n){for(var t,e=el,r=Yt(n[0][0],n[0][1],n[1][0],n[1][1]),i=e.length
        i--
    )t=e[i],(!Je(t,n)||!r(t)||mo(t.a.x-t.b.x)<Do&&mo(t.a.y-t.b.y)<Do)&&(t.a=t.b=null,e.splice(i,1))}function Je(n,t){var e=n.b
        if(e)return!0
        var r,i,u=n.a,o=t[0][0],a=t[1][0],l=t[0][1],c=t[1][1],f=n.l,s=n.r,h=f.x,p=f.y,g=s.x,v=s.y,d=(h+g)/2,y=(p+v)/2
        if(v===p){if(d<o||d>=a)return
            if(h>g){if(u){if(u.y>=c)return}else u={x:d,y:l}
                e={x:d,y:c}}else{if(u){if(u.y<l)return}else u={x:d,y:c}
                e={x:d,y:l}}}else if(r=(h-g)/(v-p),i=y-r*d,r<-1||r>1)if(h>g){if(u){if(u.y>=c)return}else u={x:(l-i)/r,y:l}
            e={x:(c-i)/r,y:c}}else{if(u){if(u.y<l)return}else u={x:(c-i)/r,y:c}
            e={x:(l-i)/r,y:l}}else if(p<v){if(u){if(u.x>=a)return}else u={x:o,y:r*o+i}
            e={x:a,y:r*a+i}}else{if(u){if(u.x<o)return}else u={x:a,y:r*a+i}
            e={x:o,y:r*o+i}}return n.a=u,n.b=e,!0}function Ge(n,t){this.l=n,this.r=t,this.a=this.b=null}function Ke(n,t,e,r){var i=new Ge(n,t)
        return el.push(i),e&&nr(i,n,t,e),r&&nr(i,t,n,r),rl[n.i].edges.push(new tr(i,n,t)),rl[t.i].edges.push(new tr(i,t,n)),i}function Qe(n,t,e){var r=new Ge(n,null)
        return r.a=t,r.b=e,el.push(r),r}function nr(n,t,e,r){n.a||n.b?n.l===e?n.b=r:n.a=r:(n.a=r,n.l=t,n.r=e)}function tr(n,t,e){var r=n.a,i=n.b
        this.edge=n,this.site=t,this.angle=e?Math.atan2(e.y-t.y,e.x-t.x):n.l===t?Math.atan2(i.x-r.x,r.y-i.y):Math.atan2(r.x-i.x,i.y-r.y)}function er(){this._=null}function rr(n){n.U=n.C=n.L=n.R=n.P=n.N=null}function ir(n,t){var e=t,r=t.R,i=e.U
        i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.R=r.L,e.R&&(e.R.U=e),r.L=e}function ur(n,t){var e=t,r=t.L,i=e.U
        i?i.L===e?i.L=r:i.R=r:n._=r,r.U=i,e.U=r,e.L=r.R,e.L&&(e.L.U=e),r.R=e}function or(n){for(
        n.L
    )n=n.L
        return n}function ar(n,t){var e,r,i,u=n.sort(lr).pop()
        for(el=[],rl=new Array(n.length),il=new er,ol=new er

        )if(i=ul,u&&(!i||u.y<i.y||u.y===i.y&&u.x<i.x))u.x===e&&u.y===r||(rl[u.i]=new Ye(u),He(u),e=u.x,r=u.y),u=n.pop()
        else{if(!i)break
            Fe(i.arc)}t&&(We(t),Ze(t))
        var o={cells:rl,edges:el}
        return il=ol=el=rl=null,o}function lr(n,t){return t.y-n.y||t.x-n.x}function cr(n,t,e){return(n.x-e.x)*(t.y-n.y)-(n.x-t.x)*(e.y-n.y)}function fr(n){return n.x}function sr(n){return n.y}function hr(){return{leaf:!0,nodes:[],point:null,x:null,y:null}}function pr(n,t,e,r,i,u){if(!n(t,e,r,i,u)){var o=.5*(e+i),a=.5*(r+u),l=t.nodes
        l[0]&&pr(n,l[0],e,r,o,a),l[1]&&pr(n,l[1],o,r,i,a),l[2]&&pr(n,l[2],e,a,o,u),l[3]&&pr(n,l[3],o,a,i,u)}}function gr(n,t,e,r,i,u,o){var a,l=1/0
        return function n(c,f,s,h,p){if(!(f>u||s>o||h<r||p<i)){if(g=c.point){var g,v=t-c.x,d=e-c.y,y=v*v+d*d
            if(y<l){var m=Math.sqrt(l=y)
                r=t-m,i=e-m,u=t+m,o=e+m,a=g}}for(var M=c.nodes,x=.5*(f+h),b=.5*(s+p),_=t>=x,w=e>=b,S=w<<1|_,k=S+4
            S<k
            ++S)if(c=M[3&S])switch(3&S){case 0:n(c,f,s,x,b)
                break
                case 1:n(c,x,s,h,b)
                    break
                case 2:n(c,f,b,x,p)
                    break
                case 3:n(c,x,b,h,p)}}}(n,r,i,u,o),a}function vr(n,t){n=ao.rgb(n),t=ao.rgb(t)
        var e=n.r,r=n.g,i=n.b,u=t.r-e,o=t.g-r,a=t.b-i
        return function(n){return"#"+bn(Math.round(e+u*n))+bn(Math.round(r+o*n))+bn(Math.round(i+a*n))}}function dr(n,t){var e,r={},i={}
        for(e in n)e in t?r[e]=Mr(n[e],t[e]):i[e]=n[e]
        for(e in t)e in n||(i[e]=t[e])
        return function(n){for(e in r)i[e]=r[e](n)
            return i}}function yr(n,t){return n=+n,t=+t,function(e){return n*(1-e)+t*e}}function mr(n,t){var e,r,i,u=fl.lastIndex=sl.lastIndex=0,o=-1,a=[],l=[]
        for(n+="",t+=""
            (e=fl.exec(n))&&(r=sl.exec(t))
        )(i=r.index)>u&&(i=t.slice(u,i),a[o]?a[o]+=i:a[++o]=i),(e=e[0])===(r=r[0])?a[o]?a[o]+=r:a[++o]=r:(a[++o]=null,l.push({i:o,x:yr(e,r)})),u=sl.lastIndex
        return u<t.length&&(i=t.slice(u),a[o]?a[o]+=i:a[++o]=i),a.length<2?l[0]?(t=l[0].x,function(n){return t(n)+""}):function(){return t}:(t=l.length,function(n){for(var e,r=0
            r<t
            ++r)a[(e=l[r]).i]=e.x(n)
            return a.join("")})}function Mr(n,t){for(var e,r=ao.interpolators.length
        --r>=0&&!(e=ao.interpolators[r](n,t))
    )
        return e}function xr(n,t){var e,r=[],i=[],u=n.length,o=t.length,a=Math.min(n.length,t.length)
        for(e=0
            e<a
        ++e)r.push(Mr(n[e],t[e]))
        for(
            e<u
            ++e)i[e]=n[e]
        for(
            e<o
            ++e)i[e]=t[e]
        return function(n){for(e=0
            e<a
            ++e)i[e]=r[e](n)
            return i}}function br(n){return function(t){return t<=0?0:t>=1?1:n(t)}}function _r(n){return function(t){return 1-n(1-t)}}function wr(n){return function(t){return.5*(t<.5?n(2*t):2-n(2-2*t))}}function Sr(n){return n*n}function kr(n){return n*n*n}function Nr(n){if(n<=0)return 0
        if(n>=1)return 1
        var t=n*n,e=t*n
        return 4*(n<.5?e:3*(n-t)+e-.75)}function Er(n){return function(t){return Math.pow(t,n)}}function Ar(n){return 1-Math.cos(n*Ho)}function Cr(n){return Math.pow(2,10*(n-1))}function zr(n){return 1-Math.sqrt(1-n*n)}function Lr(n,t){var e
        return arguments.length<2&&(t=.45),arguments.length?e=t/jo*Math.asin(1/n):(n=1,e=t/4),function(r){return 1+n*Math.pow(2,-10*r)*Math.sin((r-e)*jo/t)}}function qr(n){return n||(n=1.70158),function(t){return t*t*((n+1)*t-n)}}function Tr(n){return n<1/2.75?7.5625*n*n:n<2/2.75?7.5625*(n-=1.5/2.75)*n+.75:n<2.5/2.75?7.5625*(n-=2.25/2.75)*n+.9375:7.5625*(n-=2.625/2.75)*n+.984375}function Rr(n,t){n=ao.hcl(n),t=ao.hcl(t)
        var e=n.h,r=n.c,i=n.l,u=t.h-e,o=t.c-r,a=t.l-i
        return isNaN(o)&&(o=0,r=isNaN(r)?t.c:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:u<-180&&(u+=360),function(n){return sn(e+u*n,r+o*n,i+a*n)+""}}function Dr(n,t){n=ao.hsl(n),t=ao.hsl(t)
        var e=n.h,r=n.s,i=n.l,u=t.h-e,o=t.s-r,a=t.l-i
        return isNaN(o)&&(o=0,r=isNaN(r)?t.s:r),isNaN(u)?(u=0,e=isNaN(e)?t.h:e):u>180?u-=360:u<-180&&(u+=360),function(n){return cn(e+u*n,r+o*n,i+a*n)+""}}function Pr(n,t){n=ao.lab(n),t=ao.lab(t)
        var e=n.l,r=n.a,i=n.b,u=t.l-e,o=t.a-r,a=t.b-i
        return function(n){return pn(e+u*n,r+o*n,i+a*n)+""}}function Ur(n,t){return t-=n,function(e){return Math.round(n+t*e)}}function jr(n){var t=[n.a,n.b],e=[n.c,n.d],r=Hr(t),i=Fr(t,e),u=Hr(Or(e,t,-i))||0
        t[0]*e[1]<e[0]*t[1]&&(t[0]*=-1,t[1]*=-1,r*=-1,i*=-1),this.rotate=(r?Math.atan2(t[1],t[0]):Math.atan2(-e[0],e[1]))*Io,this.translate=[n.e,n.f],this.scale=[r,u],this.skew=u?Math.atan2(i,u)*Io:0}function Fr(n,t){return n[0]*t[0]+n[1]*t[1]}function Hr(n){var t=Math.sqrt(Fr(n,n))
        return t&&(n[0]/=t,n[1]/=t),t}function Or(n,t,e){return n[0]+=e*t[0],n[1]+=e*t[1],n}function Ir(n){return n.length?n.pop()+",":""}function Yr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push("translate(",null,",",null,")")
        r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else(t[0]||t[1])&&e.push("translate("+t+")")}function Zr(n,t,e,r){n!==t?(n-t>180?t+=360:t-n>180&&(n+=360),r.push({i:e.push(Ir(e)+"rotate(",null,")")-2,x:yr(n,t)})):t&&e.push(Ir(e)+"rotate("+t+")")}function Vr(n,t,e,r){n!==t?r.push({i:e.push(Ir(e)+"skewX(",null,")")-2,x:yr(n,t)}):t&&e.push(Ir(e)+"skewX("+t+")")}function Xr(n,t,e,r){if(n[0]!==t[0]||n[1]!==t[1]){var i=e.push(Ir(e)+"scale(",null,",",null,")")
        r.push({i:i-4,x:yr(n[0],t[0])},{i:i-2,x:yr(n[1],t[1])})}else 1===t[0]&&1===t[1]||e.push(Ir(e)+"scale("+t+")")}function $r(n,t){var e=[],r=[]
        return n=ao.transform(n),t=ao.transform(t),Yr(n.translate,t.translate,e,r),Zr(n.rotate,t.rotate,e,r),Vr(n.skew,t.skew,e,r),Xr(n.scale,t.scale,e,r),n=t=null,function(n){for(var t,i=-1,u=r.length
            ++i<u
            )e[(t=r[i]).i]=t.x(n)
            return e.join("")}}function Br(n,t){return t=(t-=n=+n)||1/t,function(e){return(e-n)/t}}function Wr(n,t){return t=(t-=n=+n)||1/t,function(e){return Math.max(0,Math.min(1,(e-n)/t))}}function Jr(n){for(var t=n.source,e=n.target,r=Kr(t,e),i=[t]
        t!==r
    )t=t.parent,i.push(t)
        for(var u=i.length
            e!==r
    )i.splice(u,0,e),e=e.parent
        return i}function Gr(n){for(var t=[],e=n.parent
        null!=e
    )t.push(n),n=e,e=e.parent
        return t.push(n),t}function Kr(n,t){if(n===t)return n
        for(var e=Gr(n),r=Gr(t),i=e.pop(),u=r.pop(),o=null
            i===u
    )o=i,i=e.pop(),u=r.pop()
        return o}function Qr(n){n.fixed|=2}function ni(n){n.fixed&=-7}function ti(n){n.fixed|=4,n.px=n.x,n.py=n.y}function ei(n){n.fixed&=-5}function ri(n,t,e){var r=0,i=0
        if(n.charge=0,!n.leaf)for(var u,o=n.nodes,a=o.length,l=-1
            ++l<a
    )u=o[l],null!=u&&(ri(u,t,e),n.charge+=u.charge,r+=u.charge*u.cx,i+=u.charge*u.cy)
        if(n.point){n.leaf||(n.point.x+=Math.random()-.5,n.point.y+=Math.random()-.5)
            var c=t*e[n.point.index]
            n.charge+=n.pointCharge=c,r+=c*n.point.x,i+=c*n.point.y}n.cx=r/n.charge,n.cy=i/n.charge}function ii(n,t){return ao.rebind(n,t,"sort","children","value"),n.nodes=n,n.links=fi,n}function ui(n,t){for(var e=[n]
        null!=(n=e.pop())
    )if(t(n),(i=n.children)&&(r=i.length))for(var r,i
            --r>=0
    )e.push(i[r])}function oi(n,t){for(var e=[n],r=[]
        null!=(n=e.pop())
    )if(r.push(n),(u=n.children)&&(i=u.length))for(var i,u,o=-1
            ++o<i
    )e.push(u[o])
        for(
            null!=(n=r.pop())
        )t(n)}function ai(n){return n.children}function li(n){return n.value}function ci(n,t){return t.value-n.value}function fi(n){return ao.merge(n.map(function(n){return(n.children||[]).map(function(t){return{source:n,target:t}})}))}function si(n){return n.x}function hi(n){return n.y}function pi(n,t,e){n.y0=t,n.y=e}function gi(n){return ao.range(n.length)}function vi(n){for(var t=-1,e=n[0].length,r=[]
        ++t<e
    )r[t]=0
        return r}function di(n){for(var t,e=1,r=0,i=n[0][1],u=n.length
        e<u
        ++e)(t=n[e][1])>i&&(r=e,i=t)
        return r}function yi(n){return n.reduce(mi,0)}function mi(n,t){return n+t[1]}function Mi(n,t){return xi(n,Math.ceil(Math.log(t.length)/Math.LN2+1))}function xi(n,t){for(var e=-1,r=+n[0],i=(n[1]-r)/t,u=[]
        ++e<=t
    )u[e]=i*e+r
        return u}function bi(n){return[ao.min(n),ao.max(n)]}function _i(n,t){return n.value-t.value}function wi(n,t){var e=n._pack_next
        n._pack_next=t,t._pack_prev=n,t._pack_next=e,e._pack_prev=t}function Si(n,t){n._pack_next=t,t._pack_prev=n}function ki(n,t){var e=t.x-n.x,r=t.y-n.y,i=n.r+t.r
        return.999*i*i>e*e+r*r}function Ni(n){function t(n){f=Math.min(n.x-n.r,f),s=Math.max(n.x+n.r,s),h=Math.min(n.y-n.r,h),p=Math.max(n.y+n.r,p)}if((e=n.children)&&(c=e.length)){var e,r,i,u,o,a,l,c,f=1/0,s=-(1/0),h=1/0,p=-(1/0)
        if(e.forEach(Ei),r=e[0],r.x=-r.r,r.y=0,t(r),c>1&&(i=e[1],i.x=i.r,i.y=0,t(i),c>2))for(u=e[2],zi(r,i,u),t(u),wi(r,u),r._pack_prev=u,wi(u,i),i=r._pack_next,o=3
            o<c
        o++){zi(r,i,u=e[o])
            var g=0,v=1,d=1
            for(a=i._pack_next
                a!==i
            a=a._pack_next,v++)if(ki(a,u)){g=1
                break}if(1==g)for(l=r._pack_prev
                l!==a._pack_prev&&!ki(l,u)
            l=l._pack_prev,d++)
            g?(v<d||v==d&&i.r<r.r?Si(r,i=a):Si(r=l,i),o--):(wi(r,u),i=u,t(u))}var y=(f+s)/2,m=(h+p)/2,M=0
        for(o=0
            o<c
        o++)u=e[o],u.x-=y,u.y-=m,M=Math.max(M,u.r+Math.sqrt(u.x*u.x+u.y*u.y))
        n.r=M,e.forEach(Ai)}}function Ei(n){n._pack_next=n._pack_prev=n}function Ai(n){delete n._pack_next,delete n._pack_prev}function Ci(n,t,e,r){var i=n.children
        if(n.x=t+=r*n.x,n.y=e+=r*n.y,n.r*=r,i)for(var u=-1,o=i.length
            ++u<o
    )Ci(i[u],t,e,r)}function zi(n,t,e){var r=n.r+e.r,i=t.x-n.x,u=t.y-n.y
        if(r&&(i||u)){var o=t.r+e.r,a=i*i+u*u
            o*=o,r*=r
            var l=.5+(r-o)/(2*a),c=Math.sqrt(Math.max(0,2*o*(r+a)-(r-=a)*r-o*o))/(2*a)
            e.x=n.x+l*i+c*u,e.y=n.y+l*u-c*i}else e.x=n.x+r,e.y=n.y}function Li(n,t){return n.parent==t.parent?1:2}function qi(n){var t=n.children
        return t.length?t[0]:n.t}function Ti(n){var t,e=n.children
        return(t=e.length)?e[t-1]:n.t}function Ri(n,t,e){var r=e/(t.i-n.i)
        t.c-=r,t.s+=e,n.c+=r,t.z+=e,t.m+=e}function Di(n){for(var t,e=0,r=0,i=n.children,u=i.length
        --u>=0
    )t=i[u],t.z+=e,t.m+=e,e+=t.s+(r+=t.c)}function Pi(n,t,e){return n.a.parent===t.parent?n.a:e}function Ui(n){return 1+ao.max(n,function(n){return n.y})}function ji(n){return n.reduce(function(n,t){return n+t.x},0)/n.length}function Fi(n){var t=n.children
        return t&&t.length?Fi(t[0]):n}function Hi(n){var t,e=n.children
        return e&&(t=e.length)?Hi(e[t-1]):n}function Oi(n){return{x:n.x,y:n.y,dx:n.dx,dy:n.dy}}function Ii(n,t){var e=n.x+t[3],r=n.y+t[0],i=n.dx-t[1]-t[3],u=n.dy-t[0]-t[2]
        return i<0&&(e+=i/2,i=0),u<0&&(r+=u/2,u=0),{x:e,y:r,dx:i,dy:u}}function Yi(n){var t=n[0],e=n[n.length-1]
        return t<e?[t,e]:[e,t]}function Zi(n){return n.rangeExtent?n.rangeExtent():Yi(n.range())}function Vi(n,t,e,r){var i=e(n[0],n[1]),u=r(t[0],t[1])
        return function(n){return u(i(n))}}function Xi(n,t){var e,r=0,i=n.length-1,u=n[r],o=n[i]
        return o<u&&(e=r,r=i,i=e,e=u,u=o,o=e),n[r]=t.floor(u),n[i]=t.ceil(o),n}function $i(n){return n?{floor:function(t){return Math.floor(t/n)*n},ceil:function(t){return Math.ceil(t/n)*n}}:_l}function Bi(n,t,e,r){var i=[],u=[],o=0,a=Math.min(n.length,t.length)-1
        for(n[a]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse())
            ++o<=a
    )i.push(e(n[o-1],n[o])),u.push(r(t[o-1],t[o]))
        return function(t){var e=ao.bisect(n,t,1,a)-1
            return u[e](i[e](t))}}function Wi(n,t,e,r){function i(){var i=Math.min(n.length,t.length)>2?Bi:Vi,l=r?Wr:Br
        return o=i(n,t,l,e),a=i(t,n,l,Mr),u}function u(n){return o(n)}var o,a
        return u.invert=function(n){return a(n)},u.domain=function(t){return arguments.length?(n=t.map(Number),i()):n},u.range=function(n){return arguments.length?(t=n,i()):t},u.rangeRound=function(n){return u.range(n).interpolate(Ur)},u.clamp=function(n){return arguments.length?(r=n,i()):r},u.interpolate=function(n){return arguments.length?(e=n,i()):e},u.ticks=function(t){return Qi(n,t)},u.tickFormat=function(t,e){return nu(n,t,e)},u.nice=function(t){return Gi(n,t),i()},u.copy=function(){return Wi(n,t,e,r)},i()}function Ji(n,t){return ao.rebind(n,t,"range","rangeRound","interpolate","clamp")}function Gi(n,t){return Xi(n,$i(Ki(n,t)[2])),Xi(n,$i(Ki(n,t)[2])),n}function Ki(n,t){null==t&&(t=10)
        var e=Yi(n),r=e[1]-e[0],i=Math.pow(10,Math.floor(Math.log(r/t)/Math.LN10)),u=t/r*i
        return u<=.15?i*=10:u<=.35?i*=5:u<=.75&&(i*=2),e[0]=Math.ceil(e[0]/i)*i,e[1]=Math.floor(e[1]/i)*i+.5*i,e[2]=i,e}function Qi(n,t){return ao.range.apply(ao,Ki(n,t))}function nu(n,t,e){var r=Ki(n,t)
        if(e){var i=fa.exec(e)
            if(i.shift(),"s"===i[8]){var u=ao.formatPrefix(Math.max(mo(r[0]),mo(r[1])))
                return i[7]||(i[7]="."+tu(u.scale(r[2]))),i[8]="f",e=ao.format(i.join("")),function(n){return e(u.scale(n))+u.symbol}}i[7]||(i[7]="."+eu(i[8],r)),e=i.join("")}else e=",."+tu(r[2])+"f"
        return ao.format(e)}function tu(n){return-Math.floor(Math.log(n)/Math.LN10+.01)}function eu(n,t){var e=tu(t[2])
        return n in wl?Math.abs(e-tu(Math.max(mo(t[0]),mo(t[1]))))+ +("e"!==n):e-2*("%"===n)}function ru(n,t,e,r){function i(n){return(e?Math.log(n<0?0:n):-Math.log(n>0?0:-n))/Math.log(t)}function u(n){return e?Math.pow(t,n):-Math.pow(t,-n)}function o(t){return n(i(t))}return o.invert=function(t){return u(n.invert(t))},o.domain=function(t){return arguments.length?(e=t[0]>=0,n.domain((r=t.map(Number)).map(i)),o):r},o.base=function(e){return arguments.length?(t=+e,n.domain(r.map(i)),o):t},o.nice=function(){var t=Xi(r.map(i),e?Math:kl)
        return n.domain(t),r=t.map(u),o},o.ticks=function(){var n=Yi(r),o=[],a=n[0],l=n[1],c=Math.floor(i(a)),f=Math.ceil(i(l)),s=t%1?2:t
        if(isFinite(f-c)){if(e){for(
            c<f
            c++)for(var h=1
            h<s
            h++)o.push(u(c)*h)
            o.push(u(c))}else for(o.push(u(c))
            c++<f
        )for(var h=s-1
                h>0
            h--)o.push(u(c)*h)
            for(c=0
                o[c]<a
            c++)
            for(f=o.length
                o[f-1]>l
            f--)
            o=o.slice(c,f)}return o},o.tickFormat=function(n,e){if(!arguments.length)return Sl
        arguments.length<2?e=Sl:"function"!=typeof e&&(e=ao.format(e))
        var r=Math.max(1,t*n/o.ticks().length)
        return function(n){var o=n/u(Math.round(i(n)))
            return o*t<t-.5&&(o*=t),o<=r?e(n):""}},o.copy=function(){return ru(n.copy(),t,e,r)},Ji(o,n)}function iu(n,t,e){function r(t){return n(i(t))}var i=uu(t),u=uu(1/t)
        return r.invert=function(t){return u(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain((e=t.map(Number)).map(i)),r):e},r.ticks=function(n){return Qi(e,n)},r.tickFormat=function(n,t){return nu(e,n,t)},r.nice=function(n){return r.domain(Gi(e,n))},r.exponent=function(o){return arguments.length?(i=uu(t=o),u=uu(1/t),n.domain(e.map(i)),r):t},r.copy=function(){return iu(n.copy(),t,e)},Ji(r,n)}function uu(n){return function(t){return t<0?-Math.pow(-t,n):Math.pow(t,n)}}function ou(n,t){function e(e){return u[((i.get(e)||("range"===t.t?i.set(e,n.push(e)):NaN))-1)%u.length]}function r(t,e){return ao.range(n.length).map(function(n){return t+e*n})}var i,u,o
        return e.domain=function(r){if(!arguments.length)return n
            n=[],i=new c
            for(var u,o=-1,a=r.length
                ++o<a
            )i.has(u=r[o])||i.set(u,n.push(u))
            return e[t.t].apply(e,t.a)},e.range=function(n){return arguments.length?(u=n,o=0,t={t:"range",a:arguments},e):u},e.rangePoints=function(i,a){arguments.length<2&&(a=0)
            var l=i[0],c=i[1],f=n.length<2?(l=(l+c)/2,0):(c-l)/(n.length-1+a)
            return u=r(l+f*a/2,f),o=0,t={t:"rangePoints",a:arguments},e},e.rangeRoundPoints=function(i,a){arguments.length<2&&(a=0)
            var l=i[0],c=i[1],f=n.length<2?(l=c=Math.round((l+c)/2),0):(c-l)/(n.length-1+a)|0
            return u=r(l+Math.round(f*a/2+(c-l-(n.length-1+a)*f)/2),f),o=0,t={t:"rangeRoundPoints",a:arguments},e},e.rangeBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a)
            var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=(s-f)/(n.length-a+2*l)
            return u=r(f+h*l,h),c&&u.reverse(),o=h*(1-a),t={t:"rangeBands",a:arguments},e},e.rangeRoundBands=function(i,a,l){arguments.length<2&&(a=0),arguments.length<3&&(l=a)
            var c=i[1]<i[0],f=i[c-0],s=i[1-c],h=Math.floor((s-f)/(n.length-a+2*l))
            return u=r(f+Math.round((s-f-(n.length-a)*h)/2),h),c&&u.reverse(),o=Math.round(h*(1-a)),t={t:"rangeRoundBands",a:arguments},e},e.rangeBand=function(){return o},e.rangeExtent=function(){return Yi(t.a[0])},e.copy=function(){return ou(n,t)},e.domain(n)}function au(n,t){function u(){var e=0,r=t.length
        for(a=[]
            ++e<r
    )a[e-1]=ao.quantile(n,e/r)
        return o}function o(n){if(!isNaN(n=+n))return t[ao.bisect(a,n)]}var a
        return o.domain=function(t){return arguments.length?(n=t.map(r).filter(i).sort(e),u()):n},o.range=function(n){return arguments.length?(t=n,u()):t},o.quantiles=function(){return a},o.invertExtent=function(e){return e=t.indexOf(e),e<0?[NaN,NaN]:[e>0?a[e-1]:n[0],e<a.length?a[e]:n[n.length-1]]},o.copy=function(){return au(n,t)},u()}function lu(n,t,e){function r(t){return e[Math.max(0,Math.min(o,Math.floor(u*(t-n))))]}function i(){return u=e.length/(t-n),o=e.length-1,r}var u,o
        return r.domain=function(e){return arguments.length?(n=+e[0],t=+e[e.length-1],i()):[n,t]},r.range=function(n){return arguments.length?(e=n,i()):e},r.invertExtent=function(t){return t=e.indexOf(t),t=t<0?NaN:t/u+n,[t,t+1/u]},r.copy=function(){return lu(n,t,e)},i()}function cu(n,t){function e(e){if(e<=e)return t[ao.bisect(n,e)]}return e.domain=function(t){return arguments.length?(n=t,e):n},e.range=function(n){return arguments.length?(t=n,e):t},e.invertExtent=function(e){return e=t.indexOf(e),[n[e-1],n[e]]},e.copy=function(){return cu(n,t)},e}function fu(n){function t(n){return+n}return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=e.map(t),t):n},t.ticks=function(t){return Qi(n,t)},t.tickFormat=function(t,e){return nu(n,t,e)},t.copy=function(){return fu(n)},t}function su(){return 0}function hu(n){return n.innerRadius}function pu(n){return n.outerRadius}function gu(n){return n.startAngle}function vu(n){return n.endAngle}function du(n){return n&&n.padAngle}function yu(n,t,e,r){return(n-e)*t-(t-r)*n>0?0:1}function mu(n,t,e,r,i){var u=n[0]-t[0],o=n[1]-t[1],a=(i?r:-r)/Math.sqrt(u*u+o*o),l=a*o,c=-a*u,f=n[0]+l,s=n[1]+c,h=t[0]+l,p=t[1]+c,g=(f+h)/2,v=(s+p)/2,d=h-f,y=p-s,m=d*d+y*y,M=e-r,x=f*p-h*s,b=(y<0?-1:1)*Math.sqrt(Math.max(0,M*M*m-x*x)),_=(x*y-d*b)/m,w=(-x*d-y*b)/m,S=(x*y+d*b)/m,k=(-x*d+y*b)/m,N=_-g,E=w-v,A=S-g,C=k-v
        return N*N+E*E>A*A+C*C&&(_=S,w=k),[[_-l,w-c],[_*e/M,w*e/M]]}function Mu(n){function t(t){function o(){c.push("M",u(n(f),a))}for(var l,c=[],f=[],s=-1,h=t.length,p=En(e),g=En(r)
        ++s<h
    )i.call(this,l=t[s],s)?f.push([+p.call(this,l,s),+g.call(this,l,s)]):f.length&&(o(),f=[])
        return f.length&&o(),c.length?c.join(""):null}var e=Ce,r=ze,i=zt,u=xu,o=u.key,a=.7
        return t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t.defined=function(n){return arguments.length?(i=n,t):i},t.interpolate=function(n){return arguments.length?(o="function"==typeof n?u=n:(u=Ll.get(n)||xu).key,t):o},t.tension=function(n){return arguments.length?(a=n,t):a},t}function xu(n){return n.length>1?n.join("L"):n+"Z"}function bu(n){return n.join("L")+"Z"}function _u(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]]
        ++t<e
    )i.push("H",(r[0]+(r=n[t])[0])/2,"V",r[1])
        return e>1&&i.push("H",r[0]),i.join("")}function wu(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]]
        ++t<e
    )i.push("V",(r=n[t])[1],"H",r[0])
        return i.join("")}function Su(n){for(var t=0,e=n.length,r=n[0],i=[r[0],",",r[1]]
        ++t<e
    )i.push("H",(r=n[t])[0],"V",r[1])
        return i.join("")}function ku(n,t){return n.length<4?xu(n):n[1]+Au(n.slice(1,-1),Cu(n,t))}function Nu(n,t){return n.length<3?bu(n):n[0]+Au((n.push(n[0]),n),Cu([n[n.length-2]].concat(n,[n[1]]),t))}function Eu(n,t){return n.length<3?xu(n):n[0]+Au(n,Cu(n,t))}function Au(n,t){if(t.length<1||n.length!=t.length&&n.length!=t.length+2)return xu(n)
        var e=n.length!=t.length,r="",i=n[0],u=n[1],o=t[0],a=o,l=1
        if(e&&(r+="Q"+(u[0]-2*o[0]/3)+","+(u[1]-2*o[1]/3)+","+u[0]+","+u[1],i=n[1],l=2),t.length>1){a=t[1],u=n[l],l++,r+="C"+(i[0]+o[0])+","+(i[1]+o[1])+","+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]
            for(var c=2
                c<t.length
            c++,l++)u=n[l],a=t[c],r+="S"+(u[0]-a[0])+","+(u[1]-a[1])+","+u[0]+","+u[1]}if(e){var f=n[l]
            r+="Q"+(u[0]+2*a[0]/3)+","+(u[1]+2*a[1]/3)+","+f[0]+","+f[1]}return r}function Cu(n,t){for(var e,r=[],i=(1-t)/2,u=n[0],o=n[1],a=1,l=n.length
        ++a<l
    )e=u,u=o,o=n[a],r.push([i*(o[0]-e[0]),i*(o[1]-e[1])])
        return r}function zu(n){if(n.length<3)return xu(n)
        var t=1,e=n.length,r=n[0],i=r[0],u=r[1],o=[i,i,i,(r=n[1])[0]],a=[u,u,u,r[1]],l=[i,",",u,"L",Ru(Rl,o),",",Ru(Rl,a)]
        for(n.push(n[e-1])
            ++t<=e
    )r=n[t],o.shift(),o.push(r[0]),a.shift(),a.push(r[1]),Du(l,o,a)
        return n.pop(),l.push("L",r),l.join("")}function Lu(n){if(n.length<4)return xu(n)
        for(var t,e=[],r=-1,i=n.length,u=[0],o=[0]
            ++r<3
    )t=n[r],u.push(t[0]),o.push(t[1])
        for(e.push(Ru(Rl,u)+","+Ru(Rl,o)),--r
            ++r<i
    )t=n[r],u.shift(),u.push(t[0]),o.shift(),o.push(t[1]),Du(e,u,o)
        return e.join("")}function qu(n){for(var t,e,r=-1,i=n.length,u=i+4,o=[],a=[]
        ++r<4
    )e=n[r%i],o.push(e[0]),a.push(e[1])
        for(t=[Ru(Rl,o),",",Ru(Rl,a)],--r
            ++r<u
    )e=n[r%i],o.shift(),o.push(e[0]),a.shift(),a.push(e[1]),Du(t,o,a)
        return t.join("")}function Tu(n,t){var e=n.length-1
        if(e)for(var r,i,u=n[0][0],o=n[0][1],a=n[e][0]-u,l=n[e][1]-o,c=-1
            ++c<=e
    )r=n[c],i=c/e,r[0]=t*r[0]+(1-t)*(u+i*a),r[1]=t*r[1]+(1-t)*(o+i*l)
        return zu(n)}function Ru(n,t){return n[0]*t[0]+n[1]*t[1]+n[2]*t[2]+n[3]*t[3]}function Du(n,t,e){n.push("C",Ru(ql,t),",",Ru(ql,e),",",Ru(Tl,t),",",Ru(Tl,e),",",Ru(Rl,t),",",Ru(Rl,e))}function Pu(n,t){return(t[1]-n[1])/(t[0]-n[0])}function Uu(n){for(var t=0,e=n.length-1,r=[],i=n[0],u=n[1],o=r[0]=Pu(i,u)
        ++t<e
    )r[t]=(o+(o=Pu(i=u,u=n[t+1])))/2
        return r[t]=o,r}function ju(n){for(var t,e,r,i,u=[],o=Uu(n),a=-1,l=n.length-1
        ++a<l
    )t=Pu(n[a],n[a+1]),mo(t)<Do?o[a]=o[a+1]=0:(e=o[a]/t,r=o[a+1]/t,i=e*e+r*r,i>9&&(i=3*t/Math.sqrt(i),o[a]=i*e,o[a+1]=i*r))
        for(a=-1
            ++a<=l
    )i=(n[Math.min(l,a+1)][0]-n[Math.max(0,a-1)][0])/(6*(1+o[a]*o[a])),u.push([i||0,o[a]*i||0])
        return u}function Fu(n){return n.length<3?xu(n):n[0]+Au(n,ju(n))}function Hu(n){for(var t,e,r,i=-1,u=n.length
        ++i<u
    )t=n[i],e=t[0],r=t[1]-Ho,t[0]=e*Math.cos(r),t[1]=e*Math.sin(r)
        return n}function Ou(n){function t(t){function l(){v.push("M",a(n(y),s),f,c(n(d.reverse()),s),"Z")}for(var h,p,g,v=[],d=[],y=[],m=-1,M=t.length,x=En(e),b=En(i),_=e===r?function(){
        return p}:En(r),w=i===u?function(){return g}:En(u)
        ++m<M
    )o.call(this,h=t[m],m)?(d.push([p=+x.call(this,h,m),g=+b.call(this,h,m)]),y.push([+_.call(this,h,m),+w.call(this,h,m)])):d.length&&(l(),d=[],y=[])
        return d.length&&l(),v.length?v.join(""):null}var e=Ce,r=Ce,i=0,u=ze,o=zt,a=xu,l=a.key,c=a,f="L",s=.7
        return t.x=function(n){return arguments.length?(e=r=n,t):r},t.x0=function(n){return arguments.length?(e=n,t):e},t.x1=function(n){return arguments.length?(r=n,t):r},t.y=function(n){return arguments.length?(i=u=n,t):u},t.y0=function(n){return arguments.length?(i=n,t):i},t.y1=function(n){return arguments.length?(u=n,t):u},t.defined=function(n){return arguments.length?(o=n,t):o},t.interpolate=function(n){return arguments.length?(l="function"==typeof n?a=n:(a=Ll.get(n)||xu).key,c=a.reverse||a,f=a.closed?"M":"L",t):l},t.tension=function(n){return arguments.length?(s=n,t):s},t}function Iu(n){return n.radius}function Yu(n){return[n.x,n.y]}function Zu(n){return function(){var t=n.apply(this,arguments),e=t[0],r=t[1]-Ho
        return[e*Math.cos(r),e*Math.sin(r)]}}function Vu(){return 64}function Xu(){return"circle"}function $u(n){var t=Math.sqrt(n/Uo)
        return"M0,"+t+"A"+t+","+t+" 0 1,1 0,"+-t+"A"+t+","+t+" 0 1,1 0,"+t+"Z"}function Bu(n){return function(){var t,e,r
        (t=this[n])&&(r=t[e=t.active])&&(r.timer.c=null,r.timer.t=NaN,--t.count?delete t[e]:delete this[n],t.active+=.5,r.event&&r.event.interrupt.call(this,this.__data__,r.index))}}function Wu(n,t,e){return wo(n,Ol),n.namespace=t,n.id=e,n}function Ju(n,t,e,r){var i=n.id,u=n.namespace
        return Y(n,"function"==typeof e?function(n,o,a){n[u][i].tween.set(t,r(e.call(n,n.__data__,o,a)))}:(e=r(e),function(n){n[u][i].tween.set(t,e)}))}function Gu(n){return null==n&&(n=""),function(){this.textContent=n}}function Ku(n){return null==n?"__transition__":"__transition_"+n+"__"}function Qu(n,t,e,r,i){function u(n){var t=v.delay
        return f.t=t+l,t<=n?o(n-t):void(f.c=o)}function o(e){var i=g.active,u=g[i]
        u&&(u.timer.c=null,u.timer.t=NaN,--g.count,delete g[i],u.event&&u.event.interrupt.call(n,n.__data__,u.index))
        for(var o in g)if(+o<r){var c=g[o]
            c.timer.c=null,c.timer.t=NaN,--g.count,delete g[o]}f.c=a,qn(function(){return f.c&&a(e||1)&&(f.c=null,f.t=NaN),1},0,l),g.active=r,v.event&&v.event.start.call(n,n.__data__,t),p=[],v.tween.forEach(function(e,r){(r=r.call(n,n.__data__,t))&&p.push(r)}),h=v.ease,s=v.duration}function a(i){for(var u=i/s,o=h(u),a=p.length
        a>0
    )p[--a].call(n,o)
        if(u>=1)return v.event&&v.event.end.call(n,n.__data__,t),--g.count?delete g[r]:delete n[e],1}var l,f,s,h,p,g=n[e]||(n[e]={active:0,count:0}),v=g[r]
        v||(l=i.time,f=qn(u,0,l),v=g[r]={tween:new c,time:l,timer:f,delay:i.delay,duration:i.duration,ease:i.ease,index:t},i=null,++g.count)}function no(n,t,e){n.attr("transform",function(n){var r=t(n)
        return"translate("+(isFinite(r)?r:e(n))+",0)"})}function to(n,t,e){n.attr("transform",function(n){var r=t(n)
        return"translate(0,"+(isFinite(r)?r:e(n))+")"})}function eo(n){return n.toISOString()}function ro(n,t,e){function r(t){return n(t)}function i(n,e){var r=n[1]-n[0],i=r/e,u=ao.bisect(Jl,i)
        return u==Jl.length?[t.year,Ki(n.map(function(n){return n/31536e6}),e)[2]]:u?t[i/Jl[u-1]<Jl[u]/i?u-1:u]:[Ql,Ki(n,e)[2]]}return r.invert=function(t){return io(n.invert(t))},r.domain=function(t){return arguments.length?(n.domain(t),r):n.domain().map(io)},r.nice=function(n,t){function e(e){return!isNaN(e)&&!n.range(e,io(+e+1),t).length}var u=r.domain(),o=Yi(u),a=null==n?i(o,10):"number"==typeof n&&i(o,n)
        return a&&(n=a[0],t=a[1]),r.domain(Xi(u,t>1?{floor:function(t){for(
            e(t=n.floor(t))
        )t=io(t-1)
            return t},ceil:function(t){for(
            e(t=n.ceil(t))
        )t=io(+t+1)
            return t}}:n))},r.ticks=function(n,t){var e=Yi(r.domain()),u=null==n?i(e,10):"number"==typeof n?i(e,n):!n.range&&[{range:n},t]
        return u&&(n=u[0],t=u[1]),n.range(e[0],io(+e[1]+1),t<1?1:t)},r.tickFormat=function(){return e},r.copy=function(){return ro(n.copy(),t,e)},Ji(r,n)}function io(n){return new Date(n)}function uo(n){return JSON.parse(n.responseText)}function oo(n){var t=fo.createRange()
        return t.selectNode(fo.body),t.createContextualFragment(n.responseText)}var ao={version:"3.5.17"},lo=[].slice,co=function(n){return lo.call(n)},fo=this.document
        if(fo)try{co(fo.documentElement.childNodes)[0].nodeType}catch(n){co=function(n){for(var t=n.length,e=new Array(t)
            t--
            )e[t]=n[t]
            return e}}if(Date.now||(Date.now=function(){return+new Date}),fo)try{fo.createElement("DIV").style.setProperty("opacity",0,"")}catch(n){var so=this.Element.prototype,ho=so.setAttribute,po=so.setAttributeNS,go=this.CSSStyleDeclaration.prototype,vo=go.setProperty
            so.setAttribute=function(n,t){ho.call(this,n,t+"")},so.setAttributeNS=function(n,t,e){po.call(this,n,t,e+"")},go.setProperty=function(n,t,e){vo.call(this,n,t+"",e)}}ao.ascending=e,ao.descending=function(n,t){return t<n?-1:t>n?1:t>=n?0:NaN},ao.min=function(n,t){var e,r,i=-1,u=n.length
            if(1===arguments.length){for(
                ++i<u
            )if(null!=(r=n[i])&&r>=r){e=r
                    break}for(
                ++i<u
            )null!=(r=n[i])&&e>r&&(e=r)}else{for(
                ++i<u
            )if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r
                    break}for(
                ++i<u
            )null!=(r=t.call(n,n[i],i))&&e>r&&(e=r)}return e},ao.max=function(n,t){var e,r,i=-1,u=n.length
            if(1===arguments.length){for(
                ++i<u
            )if(null!=(r=n[i])&&r>=r){e=r
                    break}for(
                ++i<u
            )null!=(r=n[i])&&r>e&&(e=r)}else{for(
                ++i<u
            )if(null!=(r=t.call(n,n[i],i))&&r>=r){e=r
                    break}for(
                ++i<u
            )null!=(r=t.call(n,n[i],i))&&r>e&&(e=r)}return e},ao.extent=function(n,t){var e,r,i,u=-1,o=n.length
            if(1===arguments.length){for(
                ++u<o
            )if(null!=(r=n[u])&&r>=r){e=i=r
                    break}for(
                ++u<o
            )null!=(r=n[u])&&(e>r&&(e=r),i<r&&(i=r))}else{for(
                ++u<o
            )if(null!=(r=t.call(n,n[u],u))&&r>=r){e=i=r
                    break}for(
                ++u<o
            )null!=(r=t.call(n,n[u],u))&&(e>r&&(e=r),i<r&&(i=r))}return[e,i]},ao.sum=function(n,t){var e,r=0,u=n.length,o=-1
            if(1===arguments.length)for(
                ++o<u
            )i(e=+n[o])&&(r+=e)
            else for(
                ++o<u
            )i(e=+t.call(n,n[o],o))&&(r+=e)
            return r},ao.mean=function(n,t){var e,u=0,o=n.length,a=-1,l=o
            if(1===arguments.length)for(
                ++a<o
            )i(e=r(n[a]))?u+=e:--l
            else for(
                ++a<o
            )i(e=r(t.call(n,n[a],a)))?u+=e:--l
            if(l)return u/l},ao.quantile=function(n,t){var e=(n.length-1)*t+1,r=Math.floor(e),i=+n[r-1],u=e-r
            return u?i+u*(n[r]-i):i},ao.median=function(n,t){var u,o=[],a=n.length,l=-1
            if(1===arguments.length)for(
                ++l<a
            )i(u=r(n[l]))&&o.push(u)
            else for(
                ++l<a
            )i(u=r(t.call(n,n[l],l)))&&o.push(u)
            if(o.length)return ao.quantile(o.sort(e),.5)},ao.variance=function(n,t){var e,u,o=n.length,a=0,l=0,c=-1,f=0
            if(1===arguments.length)for(
                ++c<o
            )i(e=r(n[c]))&&(u=e-a,a+=u/++f,l+=u*(e-a))
            else for(
                ++c<o
            )i(e=r(t.call(n,n[c],c)))&&(u=e-a,a+=u/++f,l+=u*(e-a))
            if(f>1)return l/(f-1)},ao.deviation=function(){var n=ao.variance.apply(this,arguments)
            return n?Math.sqrt(n):n}
        var yo=u(e)
        ao.bisectLeft=yo.left,ao.bisect=ao.bisectRight=yo.right,ao.bisector=function(n){return u(1===n.length?function(t,r){return e(n(t),r)}:n)},ao.shuffle=function(n,t,e){(u=arguments.length)<3&&(e=n.length,u<2&&(t=0))
            for(var r,i,u=e-t
                u
            )i=Math.random()*u--|0,r=n[u+t],n[u+t]=n[i+t],n[i+t]=r
            return n},ao.permute=function(n,t){for(var e=t.length,r=new Array(e)
            e--
            )r[e]=n[t[e]]
            return r},ao.pairs=function(n){for(var t,e=0,r=n.length-1,i=n[0],u=new Array(r<0?0:r)
            e<r
            )u[e]=[t=i,i=n[++e]]
            return u},ao.transpose=function(n){if(!(i=n.length))return[]
            for(var t=-1,e=ao.min(n,o),r=new Array(e)
                ++t<e
            )for(var i,u=-1,a=r[t]=new Array(i)
                ++u<i
            )a[u]=n[u][t]
            return r},ao.zip=function(){return ao.transpose(arguments)},ao.keys=function(n){var t=[]
            for(var e in n)t.push(e)
            return t},ao.values=function(n){var t=[]
            for(var e in n)t.push(n[e])
            return t},ao.entries=function(n){var t=[]
            for(var e in n)t.push({key:e,value:n[e]})
            return t},ao.merge=function(n){for(var t,e,r,i=n.length,u=-1,o=0
            ++u<i
            )o+=n[u].length
            for(e=new Array(o)
                --i>=0
            )for(r=n[i],t=r.length
                --t>=0
            )e[--o]=r[t]
            return e}
        var mo=Math.abs
        ao.range=function(n,t,e){if(arguments.length<3&&(e=1,arguments.length<2&&(t=n,n=0)),(t-n)/e===1/0)throw new Error("infinite range")
            var r,i=[],u=a(mo(e)),o=-1
            if(n*=u,t*=u,e*=u,e<0)for(
                (r=n+e*++o)>t
            )i.push(r/u)
            else for(
                (r=n+e*++o)<t
            )i.push(r/u)
            return i},ao.map=function(n,t){var e=new c
            if(n instanceof c)n.forEach(function(n,t){e.set(n,t)})
            else if(Array.isArray(n)){var r,i=-1,u=n.length
                if(1===arguments.length)for(
                    ++i<u
                )e.set(i,n[i])
                else for(
                    ++i<u
                )e.set(t.call(n,r=n[i],i),r)}else for(var o in n)e.set(o,n[o])
            return e}
        var Mo="__proto__",xo="\0"
        l(c,{has:h,get:function(n){return this._[f(n)]},set:function(n,t){return this._[f(n)]=t},remove:p,keys:g,values:function(){var n=[]
            for(var t in this._)n.push(this._[t])
            return n},entries:function(){var n=[]
            for(var t in this._)n.push({key:s(t),value:this._[t]})
            return n},size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t),this._[t])}}),ao.nest=function(){function n(t,o,a){if(a>=u.length)return r?r.call(i,o):e?o.sort(e):o
            for(var l,f,s,h,p=-1,g=o.length,v=u[a++],d=new c
                ++p<g
        )(h=d.get(l=v(f=o[p])))?h.push(f):d.set(l,[f])
            return t?(f=t(),s=function(e,r){f.set(e,n(t,r,a))}):(f={},s=function(e,r){f[e]=n(t,r,a)}),d.forEach(s),f}function t(n,e){if(e>=u.length)return n
            var r=[],i=o[e++]
            return n.forEach(function(n,i){r.push({key:n,values:t(i,e)})}),i?r.sort(function(n,t){return i(n.key,t.key)}):r}var e,r,i={},u=[],o=[]
            return i.map=function(t,e){return n(e,t,0)},i.entries=function(e){return t(n(ao.map,e,0),0)},i.key=function(n){return u.push(n),i},i.sortKeys=function(n){return o[u.length-1]=n,i},i.sortValues=function(n){return e=n,i},i.rollup=function(n){return r=n,i},i},ao.set=function(n){var t=new y
            if(n)for(var e=0,r=n.length
                e<r
            ++e)t.add(n[e])
            return t},l(y,{has:h,add:function(n){return this._[f(n+="")]=!0,n},remove:p,values:g,size:v,empty:d,forEach:function(n){for(var t in this._)n.call(this,s(t))}}),ao.behavior={},ao.rebind=function(n,t){for(var e,r=1,i=arguments.length
            ++r<i
            )n[e=arguments[r]]=M(n,t,t[e])
            return n}
        var bo=["webkit","ms","moz","Moz","o","O"]
        ao.dispatch=function(){for(var n=new _,t=-1,e=arguments.length
            ++t<e
            )n[arguments[t]]=w(n)
            return n},_.prototype.on=function(n,t){var e=n.indexOf("."),r=""
            if(e>=0&&(r=n.slice(e+1),n=n.slice(0,e)),n)return arguments.length<2?this[n].on(r):this[n].on(r,t)
            if(2===arguments.length){if(null==t)for(n in this)this.hasOwnProperty(n)&&this[n].on(r,null)
                return this}},ao.event=null,ao.requote=function(n){return n.replace(_o,"\\$&")}
        var _o=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g,wo={}.__proto__?function(n,t){n.__proto__=t}:function(n,t){for(var e in t)n[e]=t[e]},So=function(n,t){return t.querySelector(n)},ko=function(n,t){return t.querySelectorAll(n)},No=function(n,t){var e=n.matches||n[x(n,"matchesSelector")]
            return(No=function(n,t){return e.call(n,t)})(n,t)}
        "function"==typeof Sizzle&&(So=function(n,t){return Sizzle(n,t)[0]||null},ko=Sizzle,No=Sizzle.matchesSelector),ao.selection=function(){return ao.select(fo.documentElement)}
        var Eo=ao.selection.prototype=[]
        Eo.select=function(n){var t,e,r,i,u=[]
            n=A(n)
            for(var o=-1,a=this.length
                ++o<a
            ){u.push(t=[]),t.parentNode=(r=this[o]).parentNode
                for(var l=-1,c=r.length
                    ++l<c
            )(i=r[l])?(t.push(e=n.call(i,i.__data__,l,o)),e&&"__data__"in i&&(e.__data__=i.__data__)):t.push(null)}return E(u)},Eo.selectAll=function(n){var t,e,r=[]
            n=C(n)
            for(var i=-1,u=this.length
                ++i<u
            )for(var o=this[i],a=-1,l=o.length
                ++a<l
            )(e=o[a])&&(r.push(t=co(n.call(e,e.__data__,a,i))),t.parentNode=e)
            return E(r)}
        var Ao="http://www.w3.org/1999/xhtml",Co={svg:"http://www.w3.org/2000/svg",xhtml:Ao,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"}
        ao.ns={prefix:Co,qualify:function(n){var t=n.indexOf(":"),e=n
            return t>=0&&"xmlns"!==(e=n.slice(0,t))&&(n=n.slice(t+1)),Co.hasOwnProperty(e)?{space:Co[e],local:n}:n}},Eo.attr=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node()
            return n=ao.ns.qualify(n),n.local?e.getAttributeNS(n.space,n.local):e.getAttribute(n)}for(t in n)this.each(z(t,n[t]))
            return this}return this.each(z(n,t))},Eo.classed=function(n,t){if(arguments.length<2){if("string"==typeof n){var e=this.node(),r=(n=T(n)).length,i=-1
            if(t=e.classList){for(
                ++i<r
            )if(!t.contains(n[i]))return!1}else for(t=e.getAttribute("class")
                ++i<r
        )if(!q(n[i]).test(t))return!1
            return!0}for(t in n)this.each(R(t,n[t]))
            return this}return this.each(R(n,t))},Eo.style=function(n,e,r){var i=arguments.length
            if(i<3){if("string"!=typeof n){i<2&&(e="")
                for(r in n)this.each(P(r,n[r],e))
                return this}if(i<2){var u=this.node()
                return t(u).getComputedStyle(u,null).getPropertyValue(n)}r=""}return this.each(P(n,e,r))},Eo.property=function(n,t){if(arguments.length<2){if("string"==typeof n)return this.node()[n]
            for(t in n)this.each(U(t,n[t]))
            return this}return this.each(U(n,t))},Eo.text=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments)
            this.textContent=null==t?"":t}:null==n?function(){this.textContent=""}:function(){this.textContent=n}):this.node().textContent},Eo.html=function(n){return arguments.length?this.each("function"==typeof n?function(){var t=n.apply(this,arguments)
            this.innerHTML=null==t?"":t}:null==n?function(){this.innerHTML=""}:function(){this.innerHTML=n}):this.node().innerHTML},Eo.append=function(n){return n=j(n),this.select(function(){return this.appendChild(n.apply(this,arguments))})},Eo.insert=function(n,t){return n=j(n),t=A(t),this.select(function(){return this.insertBefore(n.apply(this,arguments),t.apply(this,arguments)||null)})},Eo.remove=function(){return this.each(F)},Eo.data=function(n,t){function e(n,e){var r,i,u,o=n.length,s=e.length,h=Math.min(o,s),p=new Array(s),g=new Array(s),v=new Array(o)
            if(t){var d,y=new c,m=new Array(o)
                for(r=-1
                    ++r<o
            )(i=n[r])&&(y.has(d=t.call(i,i.__data__,r))?v[r]=i:y.set(d,i),m[r]=d)
                for(r=-1
                    ++r<s
            )(i=y.get(d=t.call(e,u=e[r],r)))?i!==!0&&(p[r]=i,i.__data__=u):g[r]=H(u),y.set(d,!0)
                for(r=-1
                    ++r<o
            )r in m&&y.get(m[r])!==!0&&(v[r]=n[r])}else{for(r=-1
                ++r<h
            )i=n[r],u=e[r],i?(i.__data__=u,p[r]=i):g[r]=H(u)
                for(
                    r<s
                    ++r)g[r]=H(e[r])
                for(
                    r<o
                    ++r)v[r]=n[r]}g.update=p,g.parentNode=p.parentNode=v.parentNode=n.parentNode,a.push(g),l.push(p),f.push(v)}var r,i,u=-1,o=this.length
            if(!arguments.length){for(n=new Array(o=(r=this[0]).length)
                ++u<o
            )(i=r[u])&&(n[u]=i.__data__)
                return n}var a=Z([]),l=E([]),f=E([])
            if("function"==typeof n)for(
                ++u<o
            )e(r=this[u],n.call(r,r.parentNode.__data__,u))
            else for(
                ++u<o
            )e(r=this[u],n)
            return l.enter=function(){return a},l.exit=function(){return f},l},Eo.datum=function(n){return arguments.length?this.property("__data__",n):this.property("__data__")},Eo.filter=function(n){var t,e,r,i=[]
            "function"!=typeof n&&(n=O(n))
            for(var u=0,o=this.length
                u<o
            u++){i.push(t=[]),t.parentNode=(e=this[u]).parentNode
                for(var a=0,l=e.length
                    a<l
                a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return E(i)},Eo.order=function(){for(var n=-1,t=this.length
            ++n<t
            )for(var e,r=this[n],i=r.length-1,u=r[i]
                --i>=0
            )(e=r[i])&&(u&&u!==e.nextSibling&&u.parentNode.insertBefore(e,u),u=e)
            return this},Eo.sort=function(n){n=I.apply(this,arguments)
            for(var t=-1,e=this.length
                ++t<e
            )this[t].sort(n)
            return this.order()},Eo.each=function(n){return Y(this,function(t,e,r){n.call(t,t.__data__,e,r)})},Eo.call=function(n){var t=co(arguments)
            return n.apply(t[0]=this,t),this},Eo.empty=function(){return!this.node()},Eo.node=function(){for(var n=0,t=this.length
            n<t
            n++)for(var e=this[n],r=0,i=e.length
                r<i
            r++){var u=e[r]
                if(u)return u}return null},Eo.size=function(){var n=0
            return Y(this,function(){++n}),n}
        var zo=[]
        ao.selection.enter=Z,ao.selection.enter.prototype=zo,zo.append=Eo.append,zo.empty=Eo.empty,zo.node=Eo.node,zo.call=Eo.call,zo.size=Eo.size,zo.select=function(n){for(var t,e,r,i,u,o=[],a=-1,l=this.length
            ++a<l
            ){r=(i=this[a]).update,o.push(t=[]),t.parentNode=i.parentNode
                for(var c=-1,f=i.length
                    ++c<f
            )(u=i[c])?(t.push(r[c]=e=n.call(i.parentNode,u.__data__,c,a)),e.__data__=u.__data__):t.push(null)}return E(o)},zo.insert=function(n,t){return arguments.length<2&&(t=V(this)),Eo.insert.call(this,n,t)},ao.select=function(t){var e
            return"string"==typeof t?(e=[So(t,fo)],e.parentNode=fo.documentElement):(e=[t],e.parentNode=n(t)),E([e])},ao.selectAll=function(n){var t
            return"string"==typeof n?(t=co(ko(n,fo)),t.parentNode=fo.documentElement):(t=co(n),t.parentNode=null),E([t])},Eo.on=function(n,t,e){var r=arguments.length
            if(r<3){if("string"!=typeof n){r<2&&(t=!1)
                for(e in n)this.each(X(e,n[e],t))
                return this}if(r<2)return(r=this.node()["__on"+n])&&r._
                e=!1}return this.each(X(n,t,e))}
        var Lo=ao.map({mouseenter:"mouseover",mouseleave:"mouseout"})
        fo&&Lo.forEach(function(n){"on"+n in fo&&Lo.remove(n)})
        var qo,To=0
        ao.mouse=function(n){return J(n,k())}
        var Ro=this.navigator&&/WebKit/.test(this.navigator.userAgent)?-1:0
        ao.touch=function(n,t,e){if(arguments.length<3&&(e=t,t=k().changedTouches),t)for(var r,i=0,u=t.length
            i<u
            ++i)if((r=t[i]).identifier===e)return J(n,r)},ao.behavior.drag=function(){function n(){this.on("mousedown.drag",u).on("touchstart.drag",o)}function e(n,t,e,u,o){return function(){function a(){var n,e,r=t(h,v)
            r&&(n=r[0]-M[0],e=r[1]-M[1],g|=n|e,M=r,p({type:"drag",x:r[0]+c[0],y:r[1]+c[1],dx:n,dy:e}))}function l(){t(h,v)&&(y.on(u+d,null).on(o+d,null),m(g),p({type:"dragend"}))}var c,f=this,s=ao.event.target.correspondingElement||ao.event.target,h=f.parentNode,p=r.of(f,arguments),g=0,v=n(),d=".drag"+(null==v?"":"-"+v),y=ao.select(e(s)).on(u+d,a).on(o+d,l),m=W(s),M=t(h,v)
            i?(c=i.apply(f,arguments),c=[c.x-M[0],c.y-M[1]]):c=[0,0],p({type:"dragstart"})}}var r=N(n,"drag","dragstart","dragend"),i=null,u=e(b,ao.mouse,t,"mousemove","mouseup"),o=e(G,ao.touch,m,"touchmove","touchend")
            return n.origin=function(t){return arguments.length?(i=t,n):i},ao.rebind(n,r,"on")},ao.touches=function(n,t){return arguments.length<2&&(t=k().touches),t?co(t).map(function(t){var e=J(n,t)
            return e.identifier=t.identifier,e}):[]}
        var Do=1e-6,Po=Do*Do,Uo=Math.PI,jo=2*Uo,Fo=jo-Do,Ho=Uo/2,Oo=Uo/180,Io=180/Uo,Yo=Math.SQRT2,Zo=2,Vo=4
        ao.interpolateZoom=function(n,t){var e,r,i=n[0],u=n[1],o=n[2],a=t[0],l=t[1],c=t[2],f=a-i,s=l-u,h=f*f+s*s
            if(h<Po)r=Math.log(c/o)/Yo,e=function(n){return[i+n*f,u+n*s,o*Math.exp(Yo*n*r)]}
            else{var p=Math.sqrt(h),g=(c*c-o*o+Vo*h)/(2*o*Zo*p),v=(c*c-o*o-Vo*h)/(2*c*Zo*p),d=Math.log(Math.sqrt(g*g+1)-g),y=Math.log(Math.sqrt(v*v+1)-v)
                r=(y-d)/Yo,e=function(n){var t=n*r,e=rn(d),a=o/(Zo*p)*(e*un(Yo*t+d)-en(d))
                    return[i+a*f,u+a*s,o*e/rn(Yo*t+d)]}}return e.duration=1e3*r,e},ao.behavior.zoom=function(){function n(n){n.on(L,s).on($o+".zoom",p).on("dblclick.zoom",g).on(R,h)}function e(n){return[(n[0]-k.x)/k.k,(n[1]-k.y)/k.k]}function r(n){return[n[0]*k.k+k.x,n[1]*k.k+k.y]}function i(n){k.k=Math.max(A[0],Math.min(A[1],n))}function u(n,t){t=r(t),k.x+=n[0]-t[0],k.y+=n[1]-t[1]}function o(t,e,r,o){t.__chart__={x:k.x,y:k.y,k:k.k},i(Math.pow(2,o)),u(d=e,r),t=ao.select(t),C>0&&(t=t.transition().duration(C)),t.call(n.event)}function a(){b&&b.domain(x.range().map(function(n){return(n-k.x)/k.k}).map(x.invert)),w&&w.domain(_.range().map(function(n){return(n-k.y)/k.k}).map(_.invert))}function l(n){z++||n({type:"zoomstart"})}function c(n){a(),n({type:"zoom",scale:k.k,translate:[k.x,k.y]})}function f(n){--z||(n({type:"zoomend"}),d=null)}function s(){function n(){a=1,u(ao.mouse(i),h),c(o)}function r(){s.on(q,null).on(T,null),p(a),f(o)}var i=this,o=D.of(i,arguments),a=0,s=ao.select(t(i)).on(q,n).on(T,r),h=e(ao.mouse(i)),p=W(i)
            Hl.call(i),l(o)}function h(){function n(){var n=ao.touches(g)
            return p=k.k,n.forEach(function(n){n.identifier in d&&(d[n.identifier]=e(n))}),n}function t(){var t=ao.event.target
            ao.select(t).on(x,r).on(b,a),_.push(t)
            for(var e=ao.event.changedTouches,i=0,u=e.length
                i<u
            ++i)d[e[i].identifier]=null
            var l=n(),c=Date.now()
            if(1===l.length){if(c-M<500){var f=l[0]
                o(g,f,d[f.identifier],Math.floor(Math.log(k.k)/Math.LN2)+1),S()}M=c}else if(l.length>1){var f=l[0],s=l[1],h=f[0]-s[0],p=f[1]-s[1]
                y=h*h+p*p}}function r(){var n,t,e,r,o=ao.touches(g)
            Hl.call(g)
            for(var a=0,l=o.length
                a<l
            ++a,r=null)if(e=o[a],r=d[e.identifier]){if(t)break
                n=e,t=r}if(r){var f=(f=e[0]-n[0])*f+(f=e[1]-n[1])*f,s=y&&Math.sqrt(f/y)
                n=[(n[0]+e[0])/2,(n[1]+e[1])/2],t=[(t[0]+r[0])/2,(t[1]+r[1])/2],i(s*p)}M=null,u(n,t),c(v)}function a(){if(ao.event.touches.length){for(var t=ao.event.changedTouches,e=0,r=t.length
            e<r
            ++e)delete d[t[e].identifier]
            for(var i in d)return void n()}ao.selectAll(_).on(m,null),w.on(L,s).on(R,h),N(),f(v)}var p,g=this,v=D.of(g,arguments),d={},y=0,m=".zoom-"+ao.event.changedTouches[0].identifier,x="touchmove"+m,b="touchend"+m,_=[],w=ao.select(g),N=W(g)
            t(),l(v),w.on(L,null).on(R,t)}function p(){var n=D.of(this,arguments)
            m?clearTimeout(m):(Hl.call(this),v=e(d=y||ao.mouse(this)),l(n)),m=setTimeout(function(){m=null,f(n)},50),S(),i(Math.pow(2,.002*Xo())*k.k),u(d,v),c(n)}function g(){var n=ao.mouse(this),t=Math.log(k.k)/Math.LN2
            o(this,n,e(n),ao.event.shiftKey?Math.ceil(t)-1:Math.floor(t)+1)}var v,d,y,m,M,x,b,_,w,k={x:0,y:0,k:1},E=[960,500],A=Bo,C=250,z=0,L="mousedown.zoom",q="mousemove.zoom",T="mouseup.zoom",R="touchstart.zoom",D=N(n,"zoomstart","zoom","zoomend")
            return $o||($o="onwheel"in fo?(Xo=function(){return-ao.event.deltaY*(ao.event.deltaMode?120:1)},"wheel"):"onmousewheel"in fo?(Xo=function(){return ao.event.wheelDelta},"mousewheel"):(Xo=function(){return-ao.event.detail},"MozMousePixelScroll")),n.event=function(n){n.each(function(){var n=D.of(this,arguments),t=k
                jl?ao.select(this).transition().each("start.zoom",function(){k=this.__chart__||{x:0,y:0,k:1},l(n)}).tween("zoom:zoom",function(){var e=E[0],r=E[1],i=d?d[0]:e/2,u=d?d[1]:r/2,o=ao.interpolateZoom([(i-k.x)/k.k,(u-k.y)/k.k,e/k.k],[(i-t.x)/t.k,(u-t.y)/t.k,e/t.k])
                    return function(t){var r=o(t),a=e/r[2]
                        this.__chart__=k={x:i-r[0]*a,y:u-r[1]*a,k:a},c(n)}}).each("interrupt.zoom",function(){f(n)}).each("end.zoom",function(){f(n)}):(this.__chart__=k,l(n),c(n),f(n))})},n.translate=function(t){return arguments.length?(k={x:+t[0],y:+t[1],k:k.k},a(),n):[k.x,k.y]},n.scale=function(t){return arguments.length?(k={x:k.x,y:k.y,k:null},i(+t),a(),n):k.k},n.scaleExtent=function(t){return arguments.length?(A=null==t?Bo:[+t[0],+t[1]],n):A},n.center=function(t){return arguments.length?(y=t&&[+t[0],+t[1]],n):y},n.size=function(t){return arguments.length?(E=t&&[+t[0],+t[1]],n):E},n.duration=function(t){return arguments.length?(C=+t,n):C},n.x=function(t){return arguments.length?(b=t,x=t.copy(),k={x:0,y:0,k:1},n):b},n.y=function(t){return arguments.length?(w=t,_=t.copy(),k={x:0,y:0,k:1},n):w},ao.rebind(n,D,"on")}
        var Xo,$o,Bo=[0,1/0]
        ao.color=an,an.prototype.toString=function(){return this.rgb()+""},ao.hsl=ln
        var Wo=ln.prototype=new an
        Wo.brighter=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,this.l/n)},Wo.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new ln(this.h,this.s,n*this.l)},Wo.rgb=function(){return cn(this.h,this.s,this.l)},ao.hcl=fn
        var Jo=fn.prototype=new an
        Jo.brighter=function(n){return new fn(this.h,this.c,Math.min(100,this.l+Go*(arguments.length?n:1)))},Jo.darker=function(n){return new fn(this.h,this.c,Math.max(0,this.l-Go*(arguments.length?n:1)))},Jo.rgb=function(){return sn(this.h,this.c,this.l).rgb()},ao.lab=hn
        var Go=18,Ko=.95047,Qo=1,na=1.08883,ta=hn.prototype=new an
        ta.brighter=function(n){return new hn(Math.min(100,this.l+Go*(arguments.length?n:1)),this.a,this.b)},ta.darker=function(n){return new hn(Math.max(0,this.l-Go*(arguments.length?n:1)),this.a,this.b)},ta.rgb=function(){return pn(this.l,this.a,this.b)},ao.rgb=mn
        var ea=mn.prototype=new an
        ea.brighter=function(n){n=Math.pow(.7,arguments.length?n:1)
            var t=this.r,e=this.g,r=this.b,i=30
            return t||e||r?(t&&t<i&&(t=i),e&&e<i&&(e=i),r&&r<i&&(r=i),new mn(Math.min(255,t/n),Math.min(255,e/n),Math.min(255,r/n))):new mn(i,i,i)},ea.darker=function(n){return n=Math.pow(.7,arguments.length?n:1),new mn(n*this.r,n*this.g,n*this.b)},ea.hsl=function(){return wn(this.r,this.g,this.b)},ea.toString=function(){return"#"+bn(this.r)+bn(this.g)+bn(this.b)}
        var ra=ao.map({aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074})
        ra.forEach(function(n,t){ra.set(n,Mn(t))}),ao.functor=En,ao.xhr=An(m),ao.dsv=function(n,t){function e(n,e,u){arguments.length<3&&(u=e,e=null)
            var o=Cn(n,t,null==e?r:i(e),u)
            return o.row=function(n){return arguments.length?o.response(null==(e=n)?r:i(n)):e},o}function r(n){return e.parse(n.responseText)}function i(n){return function(t){return e.parse(t.responseText,n)}}function u(t){return t.map(o).join(n)}function o(n){return a.test(n)?'"'+n.replace(/\"/g,'""')+'"':n}var a=new RegExp('["'+n+"\n]"),l=n.charCodeAt(0)
            return e.parse=function(n,t){var r
                return e.parseRows(n,function(n,e){if(r)return r(n,e-1)
                    var i=new Function("d","return {"+n.map(function(n,t){return JSON.stringify(n)+": d["+t+"]"}).join(",")+"}")
                    r=t?function(n,e){return t(i(n),e)}:i})},e.parseRows=function(n,t){function e(){if(f>=c)return o
                if(i)return i=!1,u
                var t=f
                if(34===n.charCodeAt(t)){for(var e=t
                    e++<c
                )if(34===n.charCodeAt(e)){if(34!==n.charCodeAt(e+1))break
                        ++e}f=e+2
                    var r=n.charCodeAt(e+1)
                    return 13===r?(i=!0,10===n.charCodeAt(e+2)&&++f):10===r&&(i=!0),n.slice(t+1,e).replace(/""/g,'"')}for(
                    f<c
                ){var r=n.charCodeAt(f++),a=1
                    if(10===r)i=!0
                    else if(13===r)i=!0,10===n.charCodeAt(f)&&(++f,++a)
                    else if(r!==l)continue
                    return n.slice(t,f-a)}return n.slice(t)}for(var r,i,u={},o={},a=[],c=n.length,f=0,s=0
                (r=e())!==o
            ){for(var h=[]
                r!==u&&r!==o
            )h.push(r),r=e()
                t&&null==(h=t(h,s++))||a.push(h)}return a},e.format=function(t){if(Array.isArray(t[0]))return e.formatRows(t)
                var r=new y,i=[]
                return t.forEach(function(n){for(var t in n)r.has(t)||i.push(r.add(t))}),[i.map(o).join(n)].concat(t.map(function(t){return i.map(function(n){return o(t[n])}).join(n)})).join("\n")},e.formatRows=function(n){return n.map(u).join("\n")},e},ao.csv=ao.dsv(",","text/csv"),ao.tsv=ao.dsv("\t","text/tab-separated-values")
        var ia,ua,oa,aa,la=this[x(this,"requestAnimationFrame")]||function(n){setTimeout(n,17)}
        ao.timer=function(){qn.apply(this,arguments)},ao.timer.flush=function(){Rn(),Dn()},ao.round=function(n,t){return t?Math.round(n*(t=Math.pow(10,t)))/t:Math.round(n)}
        var ca=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"].map(Un)
        ao.formatPrefix=function(n,t){var e=0
            return(n=+n)&&(n<0&&(n*=-1),t&&(n=ao.round(n,Pn(n,t))),e=1+Math.floor(1e-12+Math.log(n)/Math.LN10),e=Math.max(-24,Math.min(24,3*Math.floor((e-1)/3)))),ca[8+e/3]}
        var fa=/(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,sa=ao.map({b:function(n){return n.toString(2)},c:function(n){return String.fromCharCode(n)},o:function(n){return n.toString(8)},x:function(n){return n.toString(16)},X:function(n){return n.toString(16).toUpperCase()},g:function(n,t){return n.toPrecision(t)},e:function(n,t){return n.toExponential(t)},f:function(n,t){return n.toFixed(t)},r:function(n,t){return(n=ao.round(n,Pn(n,t))).toFixed(Math.max(0,Math.min(20,Pn(n*(1+1e-15),t))))}}),ha=ao.time={},pa=Date
        Hn.prototype={getDate:function(){return this._.getUTCDate()},getDay:function(){return this._.getUTCDay()},getFullYear:function(){return this._.getUTCFullYear()},getHours:function(){return this._.getUTCHours()},getMilliseconds:function(){return this._.getUTCMilliseconds()},getMinutes:function(){return this._.getUTCMinutes()},getMonth:function(){return this._.getUTCMonth()},getSeconds:function(){return this._.getUTCSeconds()},getTime:function(){return this._.getTime()},getTimezoneOffset:function(){return 0},valueOf:function(){return this._.valueOf()},setDate:function(){ga.setUTCDate.apply(this._,arguments)},setDay:function(){ga.setUTCDay.apply(this._,arguments)},setFullYear:function(){ga.setUTCFullYear.apply(this._,arguments)},setHours:function(){ga.setUTCHours.apply(this._,arguments)},setMilliseconds:function(){ga.setUTCMilliseconds.apply(this._,arguments)},setMinutes:function(){ga.setUTCMinutes.apply(this._,arguments)},setMonth:function(){ga.setUTCMonth.apply(this._,arguments)},setSeconds:function(){ga.setUTCSeconds.apply(this._,arguments)},setTime:function(){ga.setTime.apply(this._,arguments)}}
        var ga=Date.prototype
        ha.year=On(function(n){return n=ha.day(n),n.setMonth(0,1),n},function(n,t){n.setFullYear(n.getFullYear()+t)},function(n){return n.getFullYear()}),ha.years=ha.year.range,ha.years.utc=ha.year.utc.range,ha.day=On(function(n){var t=new pa(2e3,0)
            return t.setFullYear(n.getFullYear(),n.getMonth(),n.getDate()),t},function(n,t){n.setDate(n.getDate()+t)},function(n){return n.getDate()-1}),ha.days=ha.day.range,ha.days.utc=ha.day.utc.range,ha.dayOfYear=function(n){var t=ha.year(n)
            return Math.floor((n-t-6e4*(n.getTimezoneOffset()-t.getTimezoneOffset()))/864e5)},["sunday","monday","tuesday","wednesday","thursday","friday","saturday"].forEach(function(n,t){t=7-t
            var e=ha[n]=On(function(n){return(n=ha.day(n)).setDate(n.getDate()-(n.getDay()+t)%7),n},function(n,t){n.setDate(n.getDate()+7*Math.floor(t))},function(n){var e=ha.year(n).getDay()
                return Math.floor((ha.dayOfYear(n)+(e+t)%7)/7)-(e!==t)})
            ha[n+"s"]=e.range,ha[n+"s"].utc=e.utc.range,ha[n+"OfYear"]=function(n){var e=ha.year(n).getDay()
                return Math.floor((ha.dayOfYear(n)+(e+t)%7)/7)}}),ha.week=ha.sunday,ha.weeks=ha.sunday.range,ha.weeks.utc=ha.sunday.utc.range,ha.weekOfYear=ha.sundayOfYear
        var va={"-":"",_:" ",0:"0"},da=/^\s*\d+/,ya=/^%/
        ao.locale=function(n){return{numberFormat:jn(n),timeFormat:Yn(n)}}
        var ma=ao.locale({decimal:".",thousands:",",grouping:[3],currency:["$",""],dateTime:"%a %b %e %X %Y",date:"%m/%d/%Y",time:"%H:%M:%S",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
            shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]})
        ao.format=ma.numberFormat,ao.geo={},ft.prototype={s:0,t:0,add:function(n){st(n,this.t,Ma),st(Ma.s,this.s,this),this.s?this.t+=Ma.t:this.s=Ma.t},reset:function(){this.s=this.t=0},valueOf:function(){return this.s}}
        var Ma=new ft
        ao.geo.stream=function(n,t){n&&xa.hasOwnProperty(n.type)?xa[n.type](n,t):ht(n,t)}
        var xa={Feature:function(n,t){ht(n.geometry,t)},FeatureCollection:function(n,t){for(var e=n.features,r=-1,i=e.length
            ++r<i
            )ht(e[r].geometry,t)}},ba={Sphere:function(n,t){t.sphere()},Point:function(n,t){n=n.coordinates,t.point(n[0],n[1],n[2])},MultiPoint:function(n,t){for(var e=n.coordinates,r=-1,i=e.length
            ++r<i
            )n=e[r],t.point(n[0],n[1],n[2])},LineString:function(n,t){pt(n.coordinates,t,0)},MultiLineString:function(n,t){for(var e=n.coordinates,r=-1,i=e.length
            ++r<i
            )pt(e[r],t,0)},Polygon:function(n,t){gt(n.coordinates,t)},MultiPolygon:function(n,t){for(var e=n.coordinates,r=-1,i=e.length
            ++r<i
            )gt(e[r],t)},GeometryCollection:function(n,t){for(var e=n.geometries,r=-1,i=e.length
            ++r<i
            )ht(e[r],t)}}
        ao.geo.area=function(n){return _a=0,ao.geo.stream(n,Sa),_a}
        var _a,wa=new ft,Sa={sphere:function(){_a+=4*Uo},point:b,lineStart:b,lineEnd:b,polygonStart:function(){wa.reset(),Sa.lineStart=vt},polygonEnd:function(){var n=2*wa
            _a+=n<0?4*Uo+n:n,Sa.lineStart=Sa.lineEnd=Sa.point=b}}
        ao.geo.bounds=function(){function n(n,t){M.push(x=[f=n,h=n]),t<s&&(s=t),t>p&&(p=t)}function t(t,e){var r=dt([t*Oo,e*Oo])
            if(y){var i=mt(y,r),u=[i[1],-i[0],0],o=mt(u,i)
                bt(o),o=_t(o)
                var l=t-g,c=l>0?1:-1,v=o[0]*Io*c,d=mo(l)>180
                if(d^(c*g<v&&v<c*t)){var m=o[1]*Io
                    m>p&&(p=m)}else if(v=(v+360)%360-180,d^(c*g<v&&v<c*t)){var m=-o[1]*Io
                    m<s&&(s=m)}else e<s&&(s=e),e>p&&(p=e)
                d?t<g?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t):h>=f?(t<f&&(f=t),t>h&&(h=t)):t>g?a(f,t)>a(f,h)&&(h=t):a(t,h)>a(f,h)&&(f=t)}else n(t,e)
            y=r,g=t}function e(){b.point=t}function r(){x[0]=f,x[1]=h,b.point=n,y=null}function i(n,e){if(y){var r=n-g
            m+=mo(r)>180?r+(r>0?360:-360):r}else v=n,d=e
            Sa.point(n,e),t(n,e)}function u(){Sa.lineStart()}function o(){i(v,d),Sa.lineEnd(),mo(m)>Do&&(f=-(h=180)),x[0]=f,x[1]=h,y=null}function a(n,t){return(t-=n)<0?t+360:t}function l(n,t){return n[0]-t[0]}function c(n,t){return t[0]<=t[1]?t[0]<=n&&n<=t[1]:n<t[0]||t[1]<n}var f,s,h,p,g,v,d,y,m,M,x,b={point:n,lineStart:e,lineEnd:r,polygonStart:function(){b.point=i,b.lineStart=u,b.lineEnd=o,m=0,Sa.polygonStart()},polygonEnd:function(){Sa.polygonEnd(),b.point=n,b.lineStart=e,b.lineEnd=r,wa<0?(f=-(h=180),s=-(p=90)):m>Do?p=90:m<-Do&&(s=-90),x[0]=f,x[1]=h}}
            return function(n){p=h=-(f=s=1/0),M=[],ao.geo.stream(n,b)
                var t=M.length
                if(t){M.sort(l)
                    for(var e,r=1,i=M[0],u=[i]
                        r<t
                    ++r)e=M[r],c(e[0],i)||c(e[1],i)?(a(i[0],e[1])>a(i[0],i[1])&&(i[1]=e[1]),a(e[0],i[1])>a(i[0],i[1])&&(i[0]=e[0])):u.push(i=e)
                    for(var o,e,g=-(1/0),t=u.length-1,r=0,i=u[t]
                        r<=t
                    i=e,++r)e=u[r],(o=a(i[1],e[0]))>g&&(g=o,f=e[0],h=i[1])}return M=x=null,f===1/0||s===1/0?[[NaN,NaN],[NaN,NaN]]:[[f,s],[h,p]]}}(),ao.geo.centroid=function(n){ka=Na=Ea=Aa=Ca=za=La=qa=Ta=Ra=Da=0,ao.geo.stream(n,Pa)
            var t=Ta,e=Ra,r=Da,i=t*t+e*e+r*r
            return i<Po&&(t=za,e=La,r=qa,Na<Do&&(t=Ea,e=Aa,r=Ca),i=t*t+e*e+r*r,i<Po)?[NaN,NaN]:[Math.atan2(e,t)*Io,tn(r/Math.sqrt(i))*Io]}
        var ka,Na,Ea,Aa,Ca,za,La,qa,Ta,Ra,Da,Pa={sphere:b,point:St,lineStart:Nt,lineEnd:Et,polygonStart:function(){Pa.lineStart=At},polygonEnd:function(){Pa.lineStart=Nt}},Ua=Rt(zt,jt,Ht,[-Uo,-Uo/2]),ja=1e9
        ao.geo.clipExtent=function(){var n,t,e,r,i,u,o={stream:function(n){return i&&(i.valid=!1),i=u(n),i.valid=!0,i},extent:function(a){return arguments.length?(u=Zt(n=+a[0][0],t=+a[0][1],e=+a[1][0],r=+a[1][1]),i&&(i.valid=!1,i=null),o):[[n,t],[e,r]]}}
            return o.extent([[0,0],[960,500]])},(ao.geo.conicEqualArea=function(){return Vt(Xt)}).raw=Xt,ao.geo.albers=function(){return ao.geo.conicEqualArea().rotate([96,0]).center([-.6,38.7]).parallels([29.5,45.5]).scale(1070)},ao.geo.albersUsa=function(){function n(n){var u=n[0],o=n[1]
            return t=null,e(u,o),t||(r(u,o),t)||i(u,o),t}var t,e,r,i,u=ao.geo.albers(),o=ao.geo.conicEqualArea().rotate([154,0]).center([-2,58.5]).parallels([55,65]),a=ao.geo.conicEqualArea().rotate([157,0]).center([-3,19.9]).parallels([8,18]),l={point:function(n,e){t=[n,e]}}
            return n.invert=function(n){var t=u.scale(),e=u.translate(),r=(n[0]-e[0])/t,i=(n[1]-e[1])/t
                return(i>=.12&&i<.234&&r>=-.425&&r<-.214?o:i>=.166&&i<.234&&r>=-.214&&r<-.115?a:u).invert(n)},n.stream=function(n){var t=u.stream(n),e=o.stream(n),r=a.stream(n)
                return{point:function(n,i){t.point(n,i),e.point(n,i),r.point(n,i)},sphere:function(){t.sphere(),e.sphere(),r.sphere()},lineStart:function(){t.lineStart(),e.lineStart(),r.lineStart()},lineEnd:function(){t.lineEnd(),e.lineEnd(),r.lineEnd()},polygonStart:function(){t.polygonStart(),e.polygonStart(),r.polygonStart()},polygonEnd:function(){t.polygonEnd(),e.polygonEnd(),r.polygonEnd()}}},n.precision=function(t){return arguments.length?(u.precision(t),o.precision(t),a.precision(t),n):u.precision()},n.scale=function(t){return arguments.length?(u.scale(t),o.scale(.35*t),a.scale(t),n.translate(u.translate())):u.scale()},n.translate=function(t){if(!arguments.length)return u.translate()
                var c=u.scale(),f=+t[0],s=+t[1]
                return e=u.translate(t).clipExtent([[f-.455*c,s-.238*c],[f+.455*c,s+.238*c]]).stream(l).point,r=o.translate([f-.307*c,s+.201*c]).clipExtent([[f-.425*c+Do,s+.12*c+Do],[f-.214*c-Do,s+.234*c-Do]]).stream(l).point,i=a.translate([f-.205*c,s+.212*c]).clipExtent([[f-.214*c+Do,s+.166*c+Do],[f-.115*c-Do,s+.234*c-Do]]).stream(l).point,n},n.scale(1070)}
        var Fa,Ha,Oa,Ia,Ya,Za,Va={point:b,lineStart:b,lineEnd:b,polygonStart:function(){Ha=0,Va.lineStart=$t},polygonEnd:function(){Va.lineStart=Va.lineEnd=Va.point=b,Fa+=mo(Ha/2)}},Xa={point:Bt,lineStart:b,lineEnd:b,polygonStart:b,polygonEnd:b},$a={point:Gt,lineStart:Kt,lineEnd:Qt,polygonStart:function(){$a.lineStart=ne},polygonEnd:function(){$a.point=Gt,$a.lineStart=Kt,$a.lineEnd=Qt}}
        ao.geo.path=function(){function n(n){return n&&("function"==typeof a&&u.pointRadius(+a.apply(this,arguments)),o&&o.valid||(o=i(u)),ao.geo.stream(n,o)),u.result()}function t(){return o=null,n}var e,r,i,u,o,a=4.5
            return n.area=function(n){return Fa=0,ao.geo.stream(n,i(Va)),Fa},n.centroid=function(n){return Ea=Aa=Ca=za=La=qa=Ta=Ra=Da=0,ao.geo.stream(n,i($a)),Da?[Ta/Da,Ra/Da]:qa?[za/qa,La/qa]:Ca?[Ea/Ca,Aa/Ca]:[NaN,NaN]},n.bounds=function(n){return Ya=Za=-(Oa=Ia=1/0),ao.geo.stream(n,i(Xa)),[[Oa,Ia],[Ya,Za]]},n.projection=function(n){return arguments.length?(i=(e=n)?n.stream||re(n):m,t()):e},n.context=function(n){return arguments.length?(u=null==(r=n)?new Wt:new te(n),"function"!=typeof a&&u.pointRadius(a),t()):r},n.pointRadius=function(t){return arguments.length?(a="function"==typeof t?t:(u.pointRadius(+t),+t),n):a},n.projection(ao.geo.albersUsa()).context(null)},ao.geo.transform=function(n){return{stream:function(t){var e=new ie(t)
            for(var r in n)e[r]=n[r]
            return e}}},ie.prototype={point:function(n,t){this.stream.point(n,t)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}},ao.geo.projection=oe,ao.geo.projectionMutator=ae,(ao.geo.equirectangular=function(){return oe(ce)}).raw=ce.invert=ce,ao.geo.rotation=function(n){function t(t){return t=n(t[0]*Oo,t[1]*Oo),t[0]*=Io,t[1]*=Io,t}return n=se(n[0]%360*Oo,n[1]*Oo,n.length>2?n[2]*Oo:0),t.invert=function(t){return t=n.invert(t[0]*Oo,t[1]*Oo),t[0]*=Io,t[1]*=Io,t},t},fe.invert=ce,ao.geo.circle=function(){function n(){var n="function"==typeof r?r.apply(this,arguments):r,t=se(-n[0]*Oo,-n[1]*Oo,0).invert,i=[]
            return e(null,null,1,{point:function(n,e){i.push(n=t(n,e)),n[0]*=Io,n[1]*=Io}}),{type:"Polygon",coordinates:[i]}}var t,e,r=[0,0],i=6
            return n.origin=function(t){return arguments.length?(r=t,n):r},n.angle=function(r){return arguments.length?(e=ve((t=+r)*Oo,i*Oo),n):t},n.precision=function(r){return arguments.length?(e=ve(t*Oo,(i=+r)*Oo),n):i},n.angle(90)},ao.geo.distance=function(n,t){var e,r=(t[0]-n[0])*Oo,i=n[1]*Oo,u=t[1]*Oo,o=Math.sin(r),a=Math.cos(r),l=Math.sin(i),c=Math.cos(i),f=Math.sin(u),s=Math.cos(u)
            return Math.atan2(Math.sqrt((e=s*o)*e+(e=c*f-l*s*a)*e),l*f+c*s*a)},ao.geo.graticule=function(){function n(){return{type:"MultiLineString",coordinates:t()}}function t(){return ao.range(Math.ceil(u/d)*d,i,d).map(h).concat(ao.range(Math.ceil(c/y)*y,l,y).map(p)).concat(ao.range(Math.ceil(r/g)*g,e,g).filter(function(n){return mo(n%d)>Do}).map(f)).concat(ao.range(Math.ceil(a/v)*v,o,v).filter(function(n){return mo(n%y)>Do}).map(s))}var e,r,i,u,o,a,l,c,f,s,h,p,g=10,v=g,d=90,y=360,m=2.5
            return n.lines=function(){return t().map(function(n){return{type:"LineString",coordinates:n}})},n.outline=function(){return{type:"Polygon",coordinates:[h(u).concat(p(l).slice(1),h(i).reverse().slice(1),p(c).reverse().slice(1))]}},n.extent=function(t){return arguments.length?n.majorExtent(t).minorExtent(t):n.minorExtent()},n.majorExtent=function(t){return arguments.length?(u=+t[0][0],i=+t[1][0],c=+t[0][1],l=+t[1][1],u>i&&(t=u,u=i,i=t),c>l&&(t=c,c=l,l=t),n.precision(m)):[[u,c],[i,l]]},n.minorExtent=function(t){return arguments.length?(r=+t[0][0],e=+t[1][0],a=+t[0][1],o=+t[1][1],r>e&&(t=r,r=e,e=t),a>o&&(t=a,a=o,o=t),n.precision(m)):[[r,a],[e,o]]},n.step=function(t){return arguments.length?n.majorStep(t).minorStep(t):n.minorStep()},n.majorStep=function(t){return arguments.length?(d=+t[0],y=+t[1],n):[d,y]},n.minorStep=function(t){return arguments.length?(g=+t[0],v=+t[1],n):[g,v]},n.precision=function(t){return arguments.length?(m=+t,f=ye(a,o,90),s=me(r,e,m),h=ye(c,l,90),p=me(u,i,m),n):m},n.majorExtent([[-180,-90+Do],[180,90-Do]]).minorExtent([[-180,-80-Do],[180,80+Do]])},ao.geo.greatArc=function(){function n(){return{type:"LineString",coordinates:[t||r.apply(this,arguments),e||i.apply(this,arguments)]}}var t,e,r=Me,i=xe
            return n.distance=function(){return ao.geo.distance(t||r.apply(this,arguments),e||i.apply(this,arguments))},n.source=function(e){return arguments.length?(r=e,t="function"==typeof e?null:e,n):r},n.target=function(t){return arguments.length?(i=t,e="function"==typeof t?null:t,n):i},n.precision=function(){return arguments.length?n:0},n},ao.geo.interpolate=function(n,t){return be(n[0]*Oo,n[1]*Oo,t[0]*Oo,t[1]*Oo)},ao.geo.length=function(n){return Ba=0,ao.geo.stream(n,Wa),Ba}
        var Ba,Wa={sphere:b,point:b,lineStart:_e,lineEnd:b,polygonStart:b,polygonEnd:b},Ja=we(function(n){return Math.sqrt(2/(1+n))},function(n){return 2*Math.asin(n/2)})
        (ao.geo.azimuthalEqualArea=function(){return oe(Ja)}).raw=Ja
        var Ga=we(function(n){var t=Math.acos(n)
            return t&&t/Math.sin(t)},m)
        (ao.geo.azimuthalEquidistant=function(){return oe(Ga)}).raw=Ga,(ao.geo.conicConformal=function(){return Vt(Se)}).raw=Se,(ao.geo.conicEquidistant=function(){return Vt(ke)}).raw=ke
        var Ka=we(function(n){return 1/n},Math.atan)
        (ao.geo.gnomonic=function(){return oe(Ka)}).raw=Ka,Ne.invert=function(n,t){return[n,2*Math.atan(Math.exp(t))-Ho]},(ao.geo.mercator=function(){return Ee(Ne)}).raw=Ne
        var Qa=we(function(){return 1},Math.asin)
        (ao.geo.orthographic=function(){return oe(Qa)}).raw=Qa
        var nl=we(function(n){return 1/(1+n)},function(n){return 2*Math.atan(n)})
        (ao.geo.stereographic=function(){return oe(nl)}).raw=nl,Ae.invert=function(n,t){return[-t,2*Math.atan(Math.exp(n))-Ho]},(ao.geo.transverseMercator=function(){var n=Ee(Ae),t=n.center,e=n.rotate
            return n.center=function(n){return n?t([-n[1],n[0]]):(n=t(),[n[1],-n[0]])},n.rotate=function(n){return n?e([n[0],n[1],n.length>2?n[2]+90:90]):(n=e(),[n[0],n[1],n[2]-90])},e([0,0,90])}).raw=Ae,ao.geom={},ao.geom.hull=function(n){function t(n){if(n.length<3)return[]
            var t,i=En(e),u=En(r),o=n.length,a=[],l=[]
            for(t=0
                t<o
            t++)a.push([+i.call(this,n[t],t),+u.call(this,n[t],t),t])
            for(a.sort(qe),t=0
                t<o
            t++)l.push([a[t][0],-a[t][1]])
            var c=Le(a),f=Le(l),s=f[0]===c[0],h=f[f.length-1]===c[c.length-1],p=[]
            for(t=c.length-1
                t>=0
            --t)p.push(n[a[c[t]][2]])
            for(t=+s
                t<f.length-h
            ++t)p.push(n[a[f[t]][2]])
            return p}var e=Ce,r=ze
            return arguments.length?t(n):(t.x=function(n){return arguments.length?(e=n,t):e},t.y=function(n){return arguments.length?(r=n,t):r},t)},ao.geom.polygon=function(n){return wo(n,tl),n}
        var tl=ao.geom.polygon.prototype=[]
        tl.area=function(){for(var n,t=-1,e=this.length,r=this[e-1],i=0
            ++t<e
            )n=r,r=this[t],i+=n[1]*r[0]-n[0]*r[1]
            return.5*i},tl.centroid=function(n){var t,e,r=-1,i=this.length,u=0,o=0,a=this[i-1]
            for(arguments.length||(n=-1/(6*this.area()))
                ++r<i
            )t=a,a=this[r],e=t[0]*a[1]-a[0]*t[1],u+=(t[0]+a[0])*e,o+=(t[1]+a[1])*e
            return[u*n,o*n]},tl.clip=function(n){for(var t,e,r,i,u,o,a=De(n),l=-1,c=this.length-De(this),f=this[c-1]
            ++l<c
            ){for(t=n.slice(),n.length=0,i=this[l],u=t[(r=t.length-a)-1],e=-1
                ++e<r
            )o=t[e],Te(o,f,i)?(Te(u,f,i)||n.push(Re(u,o,f,i)),n.push(o)):Te(u,f,i)&&n.push(Re(u,o,f,i)),u=o
                a&&n.push(n[0]),f=i}return n}
        var el,rl,il,ul,ol,al=[],ll=[]
        Ye.prototype.prepare=function(){for(var n,t=this.edges,e=t.length
            e--
            )n=t[e].edge,n.b&&n.a||t.splice(e,1)
            return t.sort(Ve),t.length},tr.prototype={start:function(){return this.edge.l===this.site?this.edge.a:this.edge.b},end:function(){return this.edge.l===this.site?this.edge.b:this.edge.a}},er.prototype={insert:function(n,t){var e,r,i
            if(n){if(t.P=n,t.N=n.N,n.N&&(n.N.P=t),n.N=t,n.R){for(n=n.R
                n.L
            )n=n.L
                n.L=t}else n.R=t
                e=n}else this._?(n=or(this._),t.P=null,t.N=n,n.P=n.L=t,e=n):(t.P=t.N=null,this._=t,e=null)
            for(t.L=t.R=null,t.U=e,t.C=!0,n=t
                e&&e.C
            )r=e.U,e===r.L?(i=r.R,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.R&&(ir(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ur(this,r))):(i=r.L,i&&i.C?(e.C=i.C=!1,r.C=!0,n=r):(n===e.L&&(ur(this,e),n=e,e=n.U),e.C=!1,r.C=!0,ir(this,r))),e=n.U
            this._.C=!1},remove:function(n){n.N&&(n.N.P=n.P),n.P&&(n.P.N=n.N),n.N=n.P=null
            var t,e,r,i=n.U,u=n.L,o=n.R
            if(e=u?o?or(o):u:o,i?i.L===n?i.L=e:i.R=e:this._=e,u&&o?(r=e.C,e.C=n.C,e.L=u,u.U=e,e!==o?(i=e.U,e.U=n.U,n=e.R,i.L=n,e.R=o,o.U=e):(e.U=i,i=e,n=e.R)):(r=n.C,n=e),n&&(n.U=i),!r){if(n&&n.C)return void(n.C=!1)
                do{if(n===this._)break
                    if(n===i.L){if(t=i.R,t.C&&(t.C=!1,i.C=!0,ir(this,i),t=i.R),t.L&&t.L.C||t.R&&t.R.C){t.R&&t.R.C||(t.L.C=!1,t.C=!0,ur(this,t),t=i.R),t.C=i.C,i.C=t.R.C=!1,ir(this,i),n=this._
                        break}}else if(t=i.L,t.C&&(t.C=!1,i.C=!0,ur(this,i),t=i.L),t.L&&t.L.C||t.R&&t.R.C){t.L&&t.L.C||(t.R.C=!1,t.C=!0,ir(this,t),t=i.L),t.C=i.C,i.C=t.L.C=!1,ur(this,i),n=this._
                        break}t.C=!0,n=i,i=i.U}while(!n.C)
                n&&(n.C=!1)}}},ao.geom.voronoi=function(n){function t(n){var t=new Array(n.length),r=a[0][0],i=a[0][1],u=a[1][0],o=a[1][1]
            return ar(e(n),a).cells.forEach(function(e,a){var l=e.edges,c=e.site,f=t[a]=l.length?l.map(function(n){var t=n.start()
                return[t.x,t.y]}):c.x>=r&&c.x<=u&&c.y>=i&&c.y<=o?[[r,o],[u,o],[u,i],[r,i]]:[]
                f.point=n[a]}),t}function e(n){return n.map(function(n,t){return{x:Math.round(u(n,t)/Do)*Do,y:Math.round(o(n,t)/Do)*Do,i:t}})}var r=Ce,i=ze,u=r,o=i,a=cl
            return n?t(n):(t.links=function(n){return ar(e(n)).edges.filter(function(n){return n.l&&n.r}).map(function(t){return{source:n[t.l.i],target:n[t.r.i]}})},t.triangles=function(n){var t=[]
                return ar(e(n)).cells.forEach(function(e,r){for(var i,u,o=e.site,a=e.edges.sort(Ve),l=-1,c=a.length,f=a[c-1].edge,s=f.l===o?f.r:f.l
                    ++l<c
                    )i=f,u=s,f=a[l].edge,s=f.l===o?f.r:f.l,r<u.i&&r<s.i&&cr(o,u,s)<0&&t.push([n[r],n[u.i],n[s.i]])}),t},t.x=function(n){return arguments.length?(u=En(r=n),t):r},t.y=function(n){return arguments.length?(o=En(i=n),t):i},t.clipExtent=function(n){return arguments.length?(a=null==n?cl:n,t):a===cl?null:a},t.size=function(n){return arguments.length?t.clipExtent(n&&[[0,0],n]):a===cl?null:a&&a[1]},t)}
        var cl=[[-1e6,-1e6],[1e6,1e6]]
        ao.geom.delaunay=function(n){return ao.geom.voronoi().triangles(n)},ao.geom.quadtree=function(n,t,e,r,i){function u(n){function u(n,t,e,r,i,u,o,a){if(!isNaN(e)&&!isNaN(r))if(n.leaf){var l=n.x,f=n.y
            if(null!=l)if(mo(l-e)+mo(f-r)<.01)c(n,t,e,r,i,u,o,a)
            else{var s=n.point
                n.x=n.y=n.point=null,c(n,s,l,f,i,u,o,a),c(n,t,e,r,i,u,o,a)}else n.x=e,n.y=r,n.point=t}else c(n,t,e,r,i,u,o,a)}function c(n,t,e,r,i,o,a,l){var c=.5*(i+a),f=.5*(o+l),s=e>=c,h=r>=f,p=h<<1|s
            n.leaf=!1,n=n.nodes[p]||(n.nodes[p]=hr()),s?i=c:a=c,h?o=f:l=f,u(n,t,e,r,i,o,a,l)}var f,s,h,p,g,v,d,y,m,M=En(a),x=En(l)
            if(null!=t)v=t,d=e,y=r,m=i
            else if(y=m=-(v=d=1/0),s=[],h=[],g=n.length,o)for(p=0
                p<g
            ++p)f=n[p],f.x<v&&(v=f.x),f.y<d&&(d=f.y),f.x>y&&(y=f.x),f.y>m&&(m=f.y),s.push(f.x),h.push(f.y)
        else for(p=0
                p<g
            ++p){var b=+M(f=n[p],p),_=+x(f,p)
                b<v&&(v=b),_<d&&(d=_),b>y&&(y=b),_>m&&(m=_),s.push(b),h.push(_)}var w=y-v,S=m-d
            w>S?m=d+w:y=v+S
            var k=hr()
            if(k.add=function(n){u(k,n,+M(n,++p),+x(n,p),v,d,y,m)},k.visit=function(n){pr(n,k,v,d,y,m)},k.find=function(n){return gr(k,n[0],n[1],v,d,y,m)},p=-1,null==t){for(
                ++p<g
            )u(k,n[p],s[p],h[p],v,d,y,m)
                --p}else n.forEach(k.add)
            return s=h=n=f=null,k}var o,a=Ce,l=ze
            return(o=arguments.length)?(a=fr,l=sr,3===o&&(i=e,r=t,e=t=0),u(n)):(u.x=function(n){return arguments.length?(a=n,u):a},u.y=function(n){return arguments.length?(l=n,u):l},u.extent=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=+n[0][0],e=+n[0][1],r=+n[1][0],i=+n[1][1]),u):null==t?null:[[t,e],[r,i]]},u.size=function(n){return arguments.length?(null==n?t=e=r=i=null:(t=e=0,r=+n[0],i=+n[1]),u):null==t?null:[r-t,i-e]},u)},ao.interpolateRgb=vr,ao.interpolateObject=dr,ao.interpolateNumber=yr,ao.interpolateString=mr
        var fl=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,sl=new RegExp(fl.source,"g")
        ao.interpolate=Mr,ao.interpolators=[function(n,t){var e=typeof t
            return("string"===e?ra.has(t.toLowerCase())||/^(#|rgb\(|hsl\()/i.test(t)?vr:mr:t instanceof an?vr:Array.isArray(t)?xr:"object"===e&&isNaN(t)?dr:yr)(n,t)}],ao.interpolateArray=xr
        var hl=function(){return m},pl=ao.map({linear:hl,poly:Er,quad:function(){return Sr},cubic:function(){return kr},sin:function(){return Ar},exp:function(){return Cr},circle:function(){return zr},elastic:Lr,back:qr,bounce:function(){return Tr}}),gl=ao.map({in:m,out:_r,"in-out":wr,"out-in":function(n){return wr(_r(n))}})
        ao.ease=function(n){var t=n.indexOf("-"),e=t>=0?n.slice(0,t):n,r=t>=0?n.slice(t+1):"in"
            return e=pl.get(e)||hl,r=gl.get(r)||m,br(r(e.apply(null,lo.call(arguments,1))))},ao.interpolateHcl=Rr,ao.interpolateHsl=Dr,ao.interpolateLab=Pr,ao.interpolateRound=Ur,ao.transform=function(n){var t=fo.createElementNS(ao.ns.prefix.svg,"g")
            return(ao.transform=function(n){if(null!=n){t.setAttribute("transform",n)
                var e=t.transform.baseVal.consolidate()}return new jr(e?e.matrix:vl)})(n)},jr.prototype.toString=function(){return"translate("+this.translate+")rotate("+this.rotate+")skewX("+this.skew+")scale("+this.scale+")"}
        var vl={a:1,b:0,c:0,d:1,e:0,f:0}
        ao.interpolateTransform=$r,ao.layout={},ao.layout.bundle=function(){return function(n){for(var t=[],e=-1,r=n.length
            ++e<r
            )t.push(Jr(n[e]))
            return t}},ao.layout.chord=function(){function n(){var n,c,s,h,p,g={},v=[],d=ao.range(u),y=[]
            for(e=[],r=[],n=0,h=-1
                ++h<u
        ){for(c=0,p=-1
                ++p<u
            )c+=i[h][p]
                v.push(c),y.push(ao.range(u)),n+=c}for(o&&d.sort(function(n,t){return o(v[n],v[t])}),a&&y.forEach(function(n,t){n.sort(function(n,e){return a(i[t][n],i[t][e])})}),n=(jo-f*u)/n,c=0,h=-1
                ++h<u
        ){for(s=c,p=-1
                ++p<u
            ){var m=d[h],M=y[m][p],x=i[m][M],b=c,_=c+=x*n
                    g[m+"-"+M]={index:m,subindex:M,startAngle:b,endAngle:_,value:x}}r[m]={index:m,startAngle:s,endAngle:c,value:v[m]},c+=f}for(h=-1
                ++h<u
        )for(p=h-1
                ++p<u
        ){var w=g[h+"-"+p],S=g[p+"-"+h]
                (w.value||S.value)&&e.push(w.value<S.value?{source:S,target:w}:{source:w,target:S})}l&&t()}function t(){e.sort(function(n,t){return l((n.source.value+n.target.value)/2,(t.source.value+t.target.value)/2)})}var e,r,i,u,o,a,l,c={},f=0
            return c.matrix=function(n){return arguments.length?(u=(i=n)&&i.length,e=r=null,c):i},c.padding=function(n){return arguments.length?(f=n,e=r=null,c):f},c.sortGroups=function(n){return arguments.length?(o=n,e=r=null,c):o},c.sortSubgroups=function(n){return arguments.length?(a=n,e=null,c):a},c.sortChords=function(n){return arguments.length?(l=n,e&&t(),c):l},c.chords=function(){return e||n(),e},c.groups=function(){return r||n(),r},c},ao.layout.force=function(){function n(n){return function(t,e,r,i){if(t.point!==n){var u=t.cx-n.x,o=t.cy-n.y,a=i-e,l=u*u+o*o
            if(a*a/y<l){if(l<v){var c=t.charge/l
                n.px-=u*c,n.py-=o*c}return!0}if(t.point&&l&&l<v){var c=t.pointCharge/l
                n.px-=u*c,n.py-=o*c}}return!t.charge}}function t(n){n.px=ao.event.x,n.py=ao.event.y,l.resume()}var e,r,i,u,o,a,l={},c=ao.dispatch("start","tick","end"),f=[1,1],s=.9,h=dl,p=yl,g=-30,v=ml,d=.1,y=.64,M=[],x=[]
            return l.tick=function(){if((i*=.99)<.005)return e=null,c.end({type:"end",alpha:i=0}),!0
                var t,r,l,h,p,v,y,m,b,_=M.length,w=x.length
                for(r=0
                    r<w
                ++r)l=x[r],h=l.source,p=l.target,m=p.x-h.x,b=p.y-h.y,(v=m*m+b*b)&&(v=i*o[r]*((v=Math.sqrt(v))-u[r])/v,m*=v,b*=v,p.x-=m*(y=h.weight+p.weight?h.weight/(h.weight+p.weight):.5),p.y-=b*y,h.x+=m*(y=1-y),h.y+=b*y)
                if((y=i*d)&&(m=f[0]/2,b=f[1]/2,r=-1,y))for(
                    ++r<_
                )l=M[r],l.x+=(m-l.x)*y,l.y+=(b-l.y)*y
                if(g)for(ri(t=ao.geom.quadtree(M),i,a),r=-1
                    ++r<_
                )(l=M[r]).fixed||t.visit(n(l))
                for(r=-1
                    ++r<_
                )l=M[r],l.fixed?(l.x=l.px,l.y=l.py):(l.x-=(l.px-(l.px=l.x))*s,l.y-=(l.py-(l.py=l.y))*s)
                c.tick({type:"tick",alpha:i})},l.nodes=function(n){return arguments.length?(M=n,l):M},l.links=function(n){return arguments.length?(x=n,l):x},l.size=function(n){return arguments.length?(f=n,l):f},l.linkDistance=function(n){return arguments.length?(h="function"==typeof n?n:+n,l):h},l.distance=l.linkDistance,l.linkStrength=function(n){return arguments.length?(p="function"==typeof n?n:+n,l):p},l.friction=function(n){return arguments.length?(s=+n,l):s},l.charge=function(n){return arguments.length?(g="function"==typeof n?n:+n,l):g},l.chargeDistance=function(n){return arguments.length?(v=n*n,l):Math.sqrt(v)},l.gravity=function(n){return arguments.length?(d=+n,l):d},l.theta=function(n){return arguments.length?(y=n*n,l):Math.sqrt(y)},l.alpha=function(n){return arguments.length?(n=+n,i?n>0?i=n:(e.c=null,e.t=NaN,e=null,c.end({type:"end",alpha:i=0})):n>0&&(c.start({type:"start",alpha:i=n}),e=qn(l.tick)),l):i},l.start=function(){function n(n,r){if(!e){for(e=new Array(i),l=0
                l<i
                ++l)e[l]=[]
                for(l=0
                    l<c
                ++l){var u=x[l]
                    e[u.source.index].push(u.target),e[u.target.index].push(u.source)}}for(var o,a=e[t],l=-1,f=a.length
                ++l<f
            )if(!isNaN(o=a[l][n]))return o
                return Math.random()*r}var t,e,r,i=M.length,c=x.length,s=f[0],v=f[1]
                for(t=0
                    t<i
                ++t)(r=M[t]).index=t,r.weight=0
                for(t=0
                    t<c
                ++t)r=x[t],"number"==typeof r.source&&(r.source=M[r.source]),"number"==typeof r.target&&(r.target=M[r.target]),++r.source.weight,++r.target.weight
                for(t=0
                    t<i
                ++t)r=M[t],isNaN(r.x)&&(r.x=n("x",s)),isNaN(r.y)&&(r.y=n("y",v)),isNaN(r.px)&&(r.px=r.x),isNaN(r.py)&&(r.py=r.y)
                if(u=[],"function"==typeof h)for(t=0
                    t<c
                ++t)u[t]=+h.call(this,x[t],t)
                else for(t=0
                    t<c
                ++t)u[t]=h
                if(o=[],"function"==typeof p)for(t=0
                    t<c
                ++t)o[t]=+p.call(this,x[t],t)
                else for(t=0
                    t<c
                ++t)o[t]=p
                if(a=[],"function"==typeof g)for(t=0
                    t<i
                ++t)a[t]=+g.call(this,M[t],t)
                else for(t=0
                    t<i
                ++t)a[t]=g
                return l.resume()},l.resume=function(){return l.alpha(.1)},l.stop=function(){return l.alpha(0)},l.drag=function(){return r||(r=ao.behavior.drag().origin(m).on("dragstart.force",Qr).on("drag.force",t).on("dragend.force",ni)),arguments.length?void this.on("mouseover.force",ti).on("mouseout.force",ei).call(r):r},ao.rebind(l,c,"on")}
        var dl=20,yl=1,ml=1/0
        ao.layout.hierarchy=function(){function n(i){var u,o=[i],a=[]
            for(i.depth=0
                null!=(u=o.pop())
        )if(a.push(u),(c=e.call(n,u,u.depth))&&(l=c.length)){for(var l,c,f
                --l>=0
            )o.push(f=c[l]),f.parent=u,f.depth=u.depth+1
                r&&(u.value=0),u.children=c}else r&&(u.value=+r.call(n,u,u.depth)||0),delete u.children
            return oi(i,function(n){var e,i
                t&&(e=n.children)&&e.sort(t),r&&(i=n.parent)&&(i.value+=n.value)}),a}var t=ci,e=ai,r=li
            return n.sort=function(e){return arguments.length?(t=e,n):t},n.children=function(t){return arguments.length?(e=t,n):e},n.value=function(t){return arguments.length?(r=t,n):r},n.revalue=function(t){return r&&(ui(t,function(n){n.children&&(n.value=0)}),oi(t,function(t){var e
                t.children||(t.value=+r.call(n,t,t.depth)||0),(e=t.parent)&&(e.value+=t.value)})),t},n},ao.layout.partition=function(){function n(t,e,r,i){var u=t.children
            if(t.x=e,t.y=t.depth*i,t.dx=r,t.dy=i,u&&(o=u.length)){var o,a,l,c=-1
                for(r=t.value?r/t.value:0
                    ++c<o
            )n(a=u[c],e,l=a.value*r,i),e+=l}}function t(n){var e=n.children,r=0
            if(e&&(i=e.length))for(var i,u=-1
                ++u<i
        )r=Math.max(r,t(e[u]))
            return 1+r}function e(e,u){var o=r.call(this,e,u)
            return n(o[0],0,i[0],i[1]/t(o[0])),o}var r=ao.layout.hierarchy(),i=[1,1]
            return e.size=function(n){return arguments.length?(i=n,e):i},ii(e,r)},ao.layout.pie=function(){function n(o){var a,l=o.length,c=o.map(function(e,r){return+t.call(n,e,r)}),f=+("function"==typeof r?r.apply(this,arguments):r),s=("function"==typeof i?i.apply(this,arguments):i)-f,h=Math.min(Math.abs(s)/l,+("function"==typeof u?u.apply(this,arguments):u)),p=h*(s<0?-1:1),g=ao.sum(c),v=g?(s-l*p)/g:0,d=ao.range(l),y=[]
            return null!=e&&d.sort(e===Ml?function(n,t){return c[t]-c[n]}:function(n,t){return e(o[n],o[t])}),d.forEach(function(n){y[n]={data:o[n],value:a=c[n],startAngle:f,endAngle:f+=a*v+p,padAngle:h}}),y}var t=Number,e=Ml,r=0,i=jo,u=0
            return n.value=function(e){return arguments.length?(t=e,n):t},n.sort=function(t){return arguments.length?(e=t,n):e},n.startAngle=function(t){return arguments.length?(r=t,n):r},n.endAngle=function(t){return arguments.length?(i=t,n):i},n.padAngle=function(t){return arguments.length?(u=t,n):u},n}
        var Ml={}
        ao.layout.stack=function(){function n(a,l){if(!(h=a.length))return a
            var c=a.map(function(e,r){return t.call(n,e,r)}),f=c.map(function(t){return t.map(function(t,e){return[u.call(n,t,e),o.call(n,t,e)]})}),s=e.call(n,f,l)
            c=ao.permute(c,s),f=ao.permute(f,s)
            var h,p,g,v,d=r.call(n,f,l),y=c[0].length
            for(g=0
                g<y
            ++g)for(i.call(n,c[0][g],v=d[g],f[0][g][1]),p=1
                p<h
            ++p)i.call(n,c[p][g],v+=f[p-1][g][1],f[p][g][1])
            return a}var t=m,e=gi,r=vi,i=pi,u=si,o=hi
            return n.values=function(e){return arguments.length?(t=e,n):t},n.order=function(t){return arguments.length?(e="function"==typeof t?t:xl.get(t)||gi,n):e},n.offset=function(t){return arguments.length?(r="function"==typeof t?t:bl.get(t)||vi,n):r},n.x=function(t){return arguments.length?(u=t,n):u},n.y=function(t){return arguments.length?(o=t,n):o},n.out=function(t){return arguments.length?(i=t,n):i},n}
        var xl=ao.map({"inside-out":function(n){var t,e,r=n.length,i=n.map(di),u=n.map(yi),o=ao.range(r).sort(function(n,t){return i[n]-i[t]}),a=0,l=0,c=[],f=[]
            for(t=0
                t<r
            ++t)e=o[t],a<l?(a+=u[e],c.push(e)):(l+=u[e],f.push(e))
            return f.reverse().concat(c)},reverse:function(n){return ao.range(n.length).reverse()},default:gi}),bl=ao.map({silhouette:function(n){var t,e,r,i=n.length,u=n[0].length,o=[],a=0,l=[]
            for(e=0
                e<u
            ++e){for(t=0,r=0
                t<i
                t++)r+=n[t][e][1]
                r>a&&(a=r),o.push(r)}for(e=0
                e<u
            ++e)l[e]=(a-o[e])/2
            return l},wiggle:function(n){var t,e,r,i,u,o,a,l,c,f=n.length,s=n[0],h=s.length,p=[]
            for(p[0]=l=c=0,e=1
                e<h
            ++e){for(t=0,i=0
                t<f
                ++t)i+=n[t][e][1]
                for(t=0,u=0,a=s[e][0]-s[e-1][0]
                    t<f
                ++t){for(r=0,o=(n[t][e][1]-n[t][e-1][1])/(2*a)
                    r<t
                    ++r)o+=(n[r][e][1]-n[r][e-1][1])/a
                    u+=o*n[t][e][1]}p[e]=l-=i?u/i*a:0,l<c&&(c=l)}for(e=0
                e<h
            ++e)p[e]-=c
            return p},expand:function(n){var t,e,r,i=n.length,u=n[0].length,o=1/i,a=[]
            for(e=0
                e<u
            ++e){for(t=0,r=0
                t<i
                t++)r+=n[t][e][1]
                if(r)for(t=0
                    t<i
                t++)n[t][e][1]/=r
            else for(t=0
                    t<i
                t++)n[t][e][1]=o}for(e=0
                e<u
            ++e)a[e]=0
            return a},zero:vi})
        ao.layout.histogram=function(){function n(n,u){for(var o,a,l=[],c=n.map(e,this),f=r.call(this,c,u),s=i.call(this,f,c,u),u=-1,h=c.length,p=s.length-1,g=t?1:1/h
            ++u<p
        )o=l[u]=[],o.dx=s[u+1]-(o.x=s[u]),o.y=0
            if(p>0)for(u=-1
                ++u<h
        )a=c[u],a>=f[0]&&a<=f[1]&&(o=l[ao.bisect(s,a,1,p)-1],o.y+=g,o.push(n[u]))
            return l}var t=!0,e=Number,r=bi,i=Mi
            return n.value=function(t){return arguments.length?(e=t,n):e},n.range=function(t){return arguments.length?(r=En(t),n):r},n.bins=function(t){return arguments.length?(i="number"==typeof t?function(n){return xi(n,t)}:En(t),n):i},n.frequency=function(e){return arguments.length?(t=!!e,n):t},n},ao.layout.pack=function(){function n(n,u){var o=e.call(this,n,u),a=o[0],l=i[0],c=i[1],f=null==t?Math.sqrt:"function"==typeof t?t:function(){return t}
            if(a.x=a.y=0,oi(a,function(n){n.r=+f(n.value)}),oi(a,Ni),r){var s=r*(t?1:Math.max(2*a.r/l,2*a.r/c))/2
                oi(a,function(n){n.r+=s}),oi(a,Ni),oi(a,function(n){n.r-=s})}return Ci(a,l/2,c/2,t?1:1/Math.max(2*a.r/l,2*a.r/c)),o}var t,e=ao.layout.hierarchy().sort(_i),r=0,i=[1,1]
            return n.size=function(t){return arguments.length?(i=t,n):i},n.radius=function(e){return arguments.length?(t=null==e||"function"==typeof e?e:+e,n):t},n.padding=function(t){return arguments.length?(r=+t,n):r},ii(n,e)},ao.layout.tree=function(){function n(n,i){var f=o.call(this,n,i),s=f[0],h=t(s)
            if(oi(h,e),h.parent.m=-h.z,ui(h,r),c)ui(s,u)
            else{var p=s,g=s,v=s
                ui(s,function(n){n.x<p.x&&(p=n),n.x>g.x&&(g=n),n.depth>v.depth&&(v=n)})
                var d=a(p,g)/2-p.x,y=l[0]/(g.x+a(g,p)/2+d),m=l[1]/(v.depth||1)
                ui(s,function(n){n.x=(n.x+d)*y,n.y=n.depth*m})}return f}function t(n){for(var t,e={A:null,children:[n]},r=[e]
            null!=(t=r.pop())
        )for(var i,u=t.children,o=0,a=u.length
                o<a
            ++o)r.push((u[o]=i={_:u[o],parent:t,children:(i=u[o].children)&&i.slice()||[],A:null,a:null,z:0,m:0,c:0,s:0,t:null,i:o}).a=i)
            return e.children[0]}function e(n){var t=n.children,e=n.parent.children,r=n.i?e[n.i-1]:null
            if(t.length){Di(n)
                var u=(t[0].z+t[t.length-1].z)/2
                r?(n.z=r.z+a(n._,r._),n.m=n.z-u):n.z=u}else r&&(n.z=r.z+a(n._,r._))
            n.parent.A=i(n,r,n.parent.A||e[0])}function r(n){n._.x=n.z+n.parent.m,n.m+=n.parent.m}function i(n,t,e){if(t){for(var r,i=n,u=n,o=t,l=i.parent.children[0],c=i.m,f=u.m,s=o.m,h=l.m
            o=Ti(o),i=qi(i),o&&i
        )l=qi(l),u=Ti(u),u.a=n,r=o.z+s-i.z-c+a(o._,i._),r>0&&(Ri(Pi(o,n,e),n,r),c+=r,f+=r),s+=o.m,c+=i.m,h+=l.m,f+=u.m
            o&&!Ti(u)&&(u.t=o,u.m+=s-f),i&&!qi(l)&&(l.t=i,l.m+=c-h,e=n)}return e}function u(n){n.x*=l[0],n.y=n.depth*l[1]}var o=ao.layout.hierarchy().sort(null).value(null),a=Li,l=[1,1],c=null
            return n.separation=function(t){return arguments.length?(a=t,n):a},n.size=function(t){return arguments.length?(c=null==(l=t)?u:null,n):c?null:l},n.nodeSize=function(t){return arguments.length?(c=null==(l=t)?null:u,n):c?l:null},ii(n,o)},ao.layout.cluster=function(){function n(n,u){var o,a=t.call(this,n,u),l=a[0],c=0
            oi(l,function(n){var t=n.children
                t&&t.length?(n.x=ji(t),n.y=Ui(t)):(n.x=o?c+=e(n,o):0,n.y=0,o=n)})
            var f=Fi(l),s=Hi(l),h=f.x-e(f,s)/2,p=s.x+e(s,f)/2
            return oi(l,i?function(n){n.x=(n.x-l.x)*r[0],n.y=(l.y-n.y)*r[1]}:function(n){n.x=(n.x-h)/(p-h)*r[0],n.y=(1-(l.y?n.y/l.y:1))*r[1]}),a}var t=ao.layout.hierarchy().sort(null).value(null),e=Li,r=[1,1],i=!1
            return n.separation=function(t){return arguments.length?(e=t,n):e},n.size=function(t){return arguments.length?(i=null==(r=t),n):i?null:r},n.nodeSize=function(t){return arguments.length?(i=null!=(r=t),n):i?r:null},ii(n,t)},ao.layout.treemap=function(){function n(n,t){for(var e,r,i=-1,u=n.length
            ++i<u
        )r=(e=n[i]).value*(t<0?0:t),e.area=isNaN(r)||r<=0?0:r}function t(e){var u=e.children
            if(u&&u.length){var o,a,l,c=s(e),f=[],h=u.slice(),g=1/0,v="slice"===p?c.dx:"dice"===p?c.dy:"slice-dice"===p?1&e.depth?c.dy:c.dx:Math.min(c.dx,c.dy)
                for(n(h,c.dx*c.dy/e.value),f.area=0
                    (l=h.length)>0
                )f.push(o=h[l-1]),f.area+=o.area,"squarify"!==p||(a=r(f,v))<=g?(h.pop(),g=a):(f.area-=f.pop().area,i(f,v,c,!1),v=Math.min(c.dx,c.dy),f.length=f.area=0,g=1/0)
                f.length&&(i(f,v,c,!0),f.length=f.area=0),u.forEach(t)}}function e(t){var r=t.children
            if(r&&r.length){var u,o=s(t),a=r.slice(),l=[]
                for(n(a,o.dx*o.dy/t.value),l.area=0
                    u=a.pop()
            )l.push(u),l.area+=u.area,null!=u.z&&(i(l,u.z?o.dx:o.dy,o,!a.length),l.length=l.area=0)
                r.forEach(e)}}function r(n,t){for(var e,r=n.area,i=0,u=1/0,o=-1,a=n.length
            ++o<a
        )(e=n[o].area)&&(e<u&&(u=e),e>i&&(i=e))
            return r*=r,t*=t,r?Math.max(t*i*g/r,r/(t*u*g)):1/0}function i(n,t,e,r){var i,u=-1,o=n.length,a=e.x,c=e.y,f=t?l(n.area/t):0

            if(t==e.dx){for((r||f>e.dy)&&(f=e.dy)
                ++u<o
            )i=n[u],i.x=a,i.y=c,i.dy=f,a+=i.dx=Math.min(e.x+e.dx-a,f?l(i.area/f):0)
                i.z=!0,i.dx+=e.x+e.dx-a,e.y+=f,e.dy-=f}else{for((r||f>e.dx)&&(f=e.dx)
                ++u<o
            )i=n[u],i.x=a,i.y=c,i.dx=f,c+=i.dy=Math.min(e.y+e.dy-c,f?l(i.area/f):0)
                i.z=!1,i.dy+=e.y+e.dy-c,e.x+=f,e.dx-=f}}function u(r){var i=o||a(r),u=i[0]
            return u.x=u.y=0,u.value?(u.dx=c[0],u.dy=c[1]):u.dx=u.dy=0,o&&a.revalue(u),n([u],u.dx*u.dy/u.value),(o?e:t)(u),h&&(o=i),i}var o,a=ao.layout.hierarchy(),l=Math.round,c=[1,1],f=null,s=Oi,h=!1,p="squarify",g=.5*(1+Math.sqrt(5))
            return u.size=function(n){return arguments.length?(c=n,u):c},u.padding=function(n){function t(t){var e=n.call(u,t,t.depth)
                return null==e?Oi(t):Ii(t,"number"==typeof e?[e,e,e,e]:e)}function e(t){return Ii(t,n)}if(!arguments.length)return f
                var r
                return s=null==(f=n)?Oi:"function"==(r=typeof n)?t:"number"===r?(n=[n,n,n,n],e):e,u},u.round=function(n){return arguments.length?(l=n?Math.round:Number,u):l!=Number},u.sticky=function(n){return arguments.length?(h=n,o=null,u):h},u.ratio=function(n){return arguments.length?(g=n,u):g},u.mode=function(n){return arguments.length?(p=n+"",u):p},ii(u,a)},ao.random={normal:function(n,t){var e=arguments.length
            return e<2&&(t=1),e<1&&(n=0),function(){var e,r,i
                do e=2*Math.random()-1,r=2*Math.random()-1,i=e*e+r*r
                while(!i||i>1)
                return n+t*e*Math.sqrt(-2*Math.log(i)/i)}},logNormal:function(){var n=ao.random.normal.apply(ao,arguments)
            return function(){return Math.exp(n())}},bates:function(n){var t=ao.random.irwinHall(n)
            return function(){return t()/n}},irwinHall:function(n){return function(){for(var t=0,e=0
            e<n
            e++)t+=Math.random()
            return t}}},ao.scale={}
        var _l={floor:m,ceil:m}
        ao.scale.linear=function(){return Wi([0,1],[0,1],Mr,!1)}
        var wl={s:1,g:1,p:1,r:1,e:1}
        ao.scale.log=function(){return ru(ao.scale.linear().domain([0,1]),10,!0,[1,10])}
        var Sl=ao.format(".0e"),kl={floor:function(n){return-Math.ceil(-n)},ceil:function(n){return-Math.floor(-n)}}
        ao.scale.pow=function(){return iu(ao.scale.linear(),1,[0,1])},ao.scale.sqrt=function(){return ao.scale.pow().exponent(.5)},ao.scale.ordinal=function(){return ou([],{t:"range",a:[[]]})},ao.scale.category10=function(){return ao.scale.ordinal().range(Nl)},ao.scale.category20=function(){return ao.scale.ordinal().range(El)},ao.scale.category20b=function(){return ao.scale.ordinal().range(Al)},ao.scale.category20c=function(){return ao.scale.ordinal().range(Cl)}
        var Nl=[2062260,16744206,2924588,14034728,9725885,9197131,14907330,8355711,12369186,1556175].map(xn),El=[2062260,11454440,16744206,16759672,2924588,10018698,14034728,16750742,9725885,12955861,9197131,12885140,14907330,16234194,8355711,13092807,12369186,14408589,1556175,10410725].map(xn),Al=[3750777,5395619,7040719,10264286,6519097,9216594,11915115,13556636,9202993,12426809,15186514,15190932,8666169,11356490,14049643,15177372,8077683,10834324,13528509,14589654].map(xn),Cl=[3244733,7057110,10406625,13032431,15095053,16616764,16625259,16634018,3253076,7652470,10607003,13101504,7695281,10394312,12369372,14342891,6513507,9868950,12434877,14277081].map(xn)
        ao.scale.quantile=function(){return au([],[])},ao.scale.quantize=function(){return lu(0,1,[0,1])},ao.scale.threshold=function(){return cu([.5],[0,1])},ao.scale.identity=function(){return fu([0,1])},ao.svg={},ao.svg.arc=function(){function n(){var n=Math.max(0,+e.apply(this,arguments)),c=Math.max(0,+r.apply(this,arguments)),f=o.apply(this,arguments)-Ho,s=a.apply(this,arguments)-Ho,h=Math.abs(s-f),p=f>s?0:1
            if(c<n&&(g=c,c=n,n=g),h>=Fo)return t(c,p)+(n?t(n,1-p):"")+"Z"
            var g,v,d,y,m,M,x,b,_,w,S,k,N=0,E=0,A=[]
            if((y=(+l.apply(this,arguments)||0)/2)&&(d=u===zl?Math.sqrt(n*n+c*c):+u.apply(this,arguments),p||(E*=-1),c&&(E=tn(d/c*Math.sin(y))),n&&(N=tn(d/n*Math.sin(y)))),c){m=c*Math.cos(f+E),M=c*Math.sin(f+E),x=c*Math.cos(s-E),b=c*Math.sin(s-E)
                var C=Math.abs(s-f-2*E)<=Uo?0:1
                if(E&&yu(m,M,x,b)===p^C){var z=(f+s)/2
                    m=c*Math.cos(z),M=c*Math.sin(z),x=b=null}}else m=M=0
            if(n){_=n*Math.cos(s-N),w=n*Math.sin(s-N),S=n*Math.cos(f+N),k=n*Math.sin(f+N)
                var L=Math.abs(f-s+2*N)<=Uo?0:1
                if(N&&yu(_,w,S,k)===1-p^L){var q=(f+s)/2
                    _=n*Math.cos(q),w=n*Math.sin(q),S=k=null}}else _=w=0
            if(h>Do&&(g=Math.min(Math.abs(c-n)/2,+i.apply(this,arguments)))>.001){v=n<c^p?0:1
                var T=g,R=g
                if(h<Uo){var D=null==S?[_,w]:null==x?[m,M]:Re([m,M],[S,k],[x,b],[_,w]),P=m-D[0],U=M-D[1],j=x-D[0],F=b-D[1],H=1/Math.sin(Math.acos((P*j+U*F)/(Math.sqrt(P*P+U*U)*Math.sqrt(j*j+F*F)))/2),O=Math.sqrt(D[0]*D[0]+D[1]*D[1])
                    R=Math.min(g,(n-O)/(H-1)),T=Math.min(g,(c-O)/(H+1))}if(null!=x){var I=mu(null==S?[_,w]:[S,k],[m,M],c,T,p),Y=mu([x,b],[_,w],c,T,p)
                    g===T?A.push("M",I[0],"A",T,",",T," 0 0,",v," ",I[1],"A",c,",",c," 0 ",1-p^yu(I[1][0],I[1][1],Y[1][0],Y[1][1]),",",p," ",Y[1],"A",T,",",T," 0 0,",v," ",Y[0]):A.push("M",I[0],"A",T,",",T," 0 1,",v," ",Y[0])}else A.push("M",m,",",M)
                if(null!=S){var Z=mu([m,M],[S,k],n,-R,p),V=mu([_,w],null==x?[m,M]:[x,b],n,-R,p)
                    g===R?A.push("L",V[0],"A",R,",",R," 0 0,",v," ",V[1],"A",n,",",n," 0 ",p^yu(V[1][0],V[1][1],Z[1][0],Z[1][1]),",",1-p," ",Z[1],"A",R,",",R," 0 0,",v," ",Z[0]):A.push("L",V[0],"A",R,",",R," 0 0,",v," ",Z[0])}else A.push("L",_,",",w)}else A.push("M",m,",",M),null!=x&&A.push("A",c,",",c," 0 ",C,",",p," ",x,",",b),A.push("L",_,",",w),null!=S&&A.push("A",n,",",n," 0 ",L,",",1-p," ",S,",",k)
            return A.push("Z"),A.join("")}function t(n,t){return"M0,"+n+"A"+n+","+n+" 0 1,"+t+" 0,"+-n+"A"+n+","+n+" 0 1,"+t+" 0,"+n}var e=hu,r=pu,i=su,u=zl,o=gu,a=vu,l=du
            return n.innerRadius=function(t){return arguments.length?(e=En(t),n):e},n.outerRadius=function(t){return arguments.length?(r=En(t),n):r},n.cornerRadius=function(t){return arguments.length?(i=En(t),n):i},n.padRadius=function(t){return arguments.length?(u=t==zl?zl:En(t),n):u},n.startAngle=function(t){return arguments.length?(o=En(t),n):o},n.endAngle=function(t){return arguments.length?(a=En(t),n):a},n.padAngle=function(t){return arguments.length?(l=En(t),n):l},n.centroid=function(){var n=(+e.apply(this,arguments)+ +r.apply(this,arguments))/2,t=(+o.apply(this,arguments)+ +a.apply(this,arguments))/2-Ho
                return[Math.cos(t)*n,Math.sin(t)*n]},n}
        var zl="auto"
        ao.svg.line=function(){return Mu(m)}
        var Ll=ao.map({linear:xu,"linear-closed":bu,step:_u,"step-before":wu,"step-after":Su,basis:zu,"basis-open":Lu,"basis-closed":qu,bundle:Tu,cardinal:Eu,"cardinal-open":ku,"cardinal-closed":Nu,monotone:Fu})
        Ll.forEach(function(n,t){t.key=n,t.closed=/-closed$/.test(n)})
        var ql=[0,2/3,1/3,0],Tl=[0,1/3,2/3,0],Rl=[0,1/6,2/3,1/6]
        ao.svg.line.radial=function(){var n=Mu(Hu)
            return n.radius=n.x,delete n.x,n.angle=n.y,delete n.y,n},wu.reverse=Su,Su.reverse=wu,ao.svg.area=function(){return Ou(m)},ao.svg.area.radial=function(){var n=Ou(Hu)
            return n.radius=n.x,delete n.x,n.innerRadius=n.x0,delete n.x0,n.outerRadius=n.x1,delete n.x1,n.angle=n.y,delete n.y,n.startAngle=n.y0,delete n.y0,n.endAngle=n.y1,delete n.y1,n},ao.svg.chord=function(){function n(n,a){var l=t(this,u,n,a),c=t(this,o,n,a)
            return"M"+l.p0+r(l.r,l.p1,l.a1-l.a0)+(e(l,c)?i(l.r,l.p1,l.r,l.p0):i(l.r,l.p1,c.r,c.p0)+r(c.r,c.p1,c.a1-c.a0)+i(c.r,c.p1,l.r,l.p0))+"Z"}function t(n,t,e,r){var i=t.call(n,e,r),u=a.call(n,i,r),o=l.call(n,i,r)-Ho,f=c.call(n,i,r)-Ho
            return{r:u,a0:o,a1:f,p0:[u*Math.cos(o),u*Math.sin(o)],p1:[u*Math.cos(f),u*Math.sin(f)]}}function e(n,t){return n.a0==t.a0&&n.a1==t.a1}function r(n,t,e){return"A"+n+","+n+" 0 "+ +(e>Uo)+",1 "+t}function i(n,t,e,r){return"Q 0,0 "+r}var u=Me,o=xe,a=Iu,l=gu,c=vu
            return n.radius=function(t){return arguments.length?(a=En(t),n):a},n.source=function(t){return arguments.length?(u=En(t),n):u},n.target=function(t){return arguments.length?(o=En(t),n):o},n.startAngle=function(t){return arguments.length?(l=En(t),n):l},n.endAngle=function(t){return arguments.length?(c=En(t),n):c},n},ao.svg.diagonal=function(){function n(n,i){var u=t.call(this,n,i),o=e.call(this,n,i),a=(u.y+o.y)/2,l=[u,{x:u.x,y:a},{x:o.x,y:a},o]
            return l=l.map(r),"M"+l[0]+"C"+l[1]+" "+l[2]+" "+l[3]}var t=Me,e=xe,r=Yu
            return n.source=function(e){return arguments.length?(t=En(e),n):t},n.target=function(t){return arguments.length?(e=En(t),n):e},n.projection=function(t){return arguments.length?(r=t,n):r},n},ao.svg.diagonal.radial=function(){var n=ao.svg.diagonal(),t=Yu,e=n.projection
            return n.projection=function(n){return arguments.length?e(Zu(t=n)):t},n},ao.svg.symbol=function(){function n(n,r){return(Dl.get(t.call(this,n,r))||$u)(e.call(this,n,r))}var t=Xu,e=Vu
            return n.type=function(e){return arguments.length?(t=En(e),n):t},n.size=function(t){return arguments.length?(e=En(t),n):e},n}
        var Dl=ao.map({circle:$u,cross:function(n){var t=Math.sqrt(n/5)/2
            return"M"+-3*t+","+-t+"H"+-t+"V"+-3*t+"H"+t+"V"+-t+"H"+3*t+"V"+t+"H"+t+"V"+3*t+"H"+-t+"V"+t+"H"+-3*t+"Z"},diamond:function(n){var t=Math.sqrt(n/(2*Ul)),e=t*Ul
            return"M0,"+-t+"L"+e+",0 0,"+t+" "+-e+",0Z"},square:function(n){var t=Math.sqrt(n)/2
            return"M"+-t+","+-t+"L"+t+","+-t+" "+t+","+t+" "+-t+","+t+"Z"},"triangle-down":function(n){var t=Math.sqrt(n/Pl),e=t*Pl/2
            return"M0,"+e+"L"+t+","+-e+" "+-t+","+-e+"Z"},"triangle-up":function(n){var t=Math.sqrt(n/Pl),e=t*Pl/2
            return"M0,"+-e+"L"+t+","+e+" "+-t+","+e+"Z"}})
        ao.svg.symbolTypes=Dl.keys()
        var Pl=Math.sqrt(3),Ul=Math.tan(30*Oo)
        Eo.transition=function(n){for(var t,e,r=jl||++Il,i=Ku(n),u=[],o=Fl||{time:Date.now(),ease:Nr,delay:0,duration:250},a=-1,l=this.length
            ++a<l
            ){u.push(t=[])
                for(var c=this[a],f=-1,s=c.length
                    ++f<s
            )(e=c[f])&&Qu(e,f,i,r,o),t.push(e)}return Wu(u,i,r)},Eo.interrupt=function(n){return this.each(null==n?Hl:Bu(Ku(n)))}
        var jl,Fl,Hl=Bu(Ku()),Ol=[],Il=0
        Ol.call=Eo.call,Ol.empty=Eo.empty,Ol.node=Eo.node,Ol.size=Eo.size,ao.transition=function(n,t){return n&&n.transition?jl?n.transition(t):n:ao.selection().transition(n)},ao.transition.prototype=Ol,Ol.select=function(n){var t,e,r,i=this.id,u=this.namespace,o=[]
            n=A(n)
            for(var a=-1,l=this.length
                ++a<l
            ){o.push(t=[])
                for(var c=this[a],f=-1,s=c.length
                    ++f<s
            )(r=c[f])&&(e=n.call(r,r.__data__,f,a))?("__data__"in r&&(e.__data__=r.__data__),Qu(e,f,u,i,r[u][i]),t.push(e)):t.push(null)}return Wu(o,u,i)},Ol.selectAll=function(n){var t,e,r,i,u,o=this.id,a=this.namespace,l=[]
            n=C(n)
            for(var c=-1,f=this.length
                ++c<f
            )for(var s=this[c],h=-1,p=s.length
                ++h<p
            )if(r=s[h]){u=r[a][o],e=n.call(r,r.__data__,h,c),l.push(t=[])
                for(var g=-1,v=e.length
                    ++g<v
            )(i=e[g])&&Qu(i,g,a,o,u),t.push(i)}return Wu(l,a,o)},Ol.filter=function(n){var t,e,r,i=[]
            "function"!=typeof n&&(n=O(n))
            for(var u=0,o=this.length
                u<o
            u++){i.push(t=[])
                for(var e=this[u],a=0,l=e.length
                    a<l
                a++)(r=e[a])&&n.call(r,r.__data__,a,u)&&t.push(r)}return Wu(i,this.namespace,this.id)},Ol.tween=function(n,t){var e=this.id,r=this.namespace
            return arguments.length<2?this.node()[r][e].tween.get(n):Y(this,null==t?function(t){t[r][e].tween.remove(n)}:function(i){i[r][e].tween.set(n,t)})},Ol.attr=function(n,t){function e(){this.removeAttribute(a)}function r(){this.removeAttributeNS(a.space,a.local)}function i(n){return null==n?e:(n+="",function(){var t,e=this.getAttribute(a)
            return e!==n&&(t=o(e,n),function(n){this.setAttribute(a,t(n))})})}function u(n){return null==n?r:(n+="",function(){var t,e=this.getAttributeNS(a.space,a.local)
            return e!==n&&(t=o(e,n),function(n){this.setAttributeNS(a.space,a.local,t(n))})})}if(arguments.length<2){for(t in n)this.attr(t,n[t])
            return this}var o="transform"==n?$r:Mr,a=ao.ns.qualify(n)
            return Ju(this,"attr."+n,t,a.local?u:i)},Ol.attrTween=function(n,t){function e(n,e){var r=t.call(this,n,e,this.getAttribute(i))
            return r&&function(n){this.setAttribute(i,r(n))}}function r(n,e){var r=t.call(this,n,e,this.getAttributeNS(i.space,i.local))
            return r&&function(n){this.setAttributeNS(i.space,i.local,r(n))}}var i=ao.ns.qualify(n)
            return this.tween("attr."+n,i.local?r:e)},Ol.style=function(n,e,r){function i(){this.style.removeProperty(n)}function u(e){return null==e?i:(e+="",function(){var i,u=t(this).getComputedStyle(this,null).getPropertyValue(n)
            return u!==e&&(i=Mr(u,e),function(t){this.style.setProperty(n,i(t),r)})})}var o=arguments.length
            if(o<3){if("string"!=typeof n){o<2&&(e="")
                for(r in n)this.style(r,n[r],e)
                return this}r=""}return Ju(this,"style."+n,e,u)},Ol.styleTween=function(n,e,r){function i(i,u){var o=e.call(this,i,u,t(this).getComputedStyle(this,null).getPropertyValue(n))
            return o&&function(t){this.style.setProperty(n,o(t),r)}}return arguments.length<3&&(r=""),this.tween("style."+n,i)},Ol.text=function(n){return Ju(this,"text",n,Gu)},Ol.remove=function(){var n=this.namespace
            return this.each("end.transition",function(){var t
                this[n].count<2&&(t=this.parentNode)&&t.removeChild(this)})},Ol.ease=function(n){var t=this.id,e=this.namespace
            return arguments.length<1?this.node()[e][t].ease:("function"!=typeof n&&(n=ao.ease.apply(ao,arguments)),Y(this,function(r){r[e][t].ease=n}))},Ol.delay=function(n){var t=this.id,e=this.namespace
            return arguments.length<1?this.node()[e][t].delay:Y(this,"function"==typeof n?function(r,i,u){r[e][t].delay=+n.call(r,r.__data__,i,u)}:(n=+n,function(r){r[e][t].delay=n}))},Ol.duration=function(n){var t=this.id,e=this.namespace
            return arguments.length<1?this.node()[e][t].duration:Y(this,"function"==typeof n?function(r,i,u){r[e][t].duration=Math.max(1,n.call(r,r.__data__,i,u))}:(n=Math.max(1,n),function(r){r[e][t].duration=n}))},Ol.each=function(n,t){var e=this.id,r=this.namespace
            if(arguments.length<2){var i=Fl,u=jl
                try{jl=e,Y(this,function(t,i,u){Fl=t[r][e],n.call(t,t.__data__,i,u)})}finally{Fl=i,jl=u}}else Y(this,function(i){var u=i[r][e]
            (u.event||(u.event=ao.dispatch("start","end","interrupt"))).on(n,t)})
            return this},Ol.transition=function(){for(var n,t,e,r,i=this.id,u=++Il,o=this.namespace,a=[],l=0,c=this.length
            l<c
            l++){a.push(n=[])
                for(var t=this[l],f=0,s=t.length
                    f<s
                f++)(e=t[f])&&(r=e[o][i],Qu(e,f,o,u,{time:r.time,ease:r.ease,delay:r.delay+r.duration,duration:r.duration})),n.push(e)}return Wu(a,o,u)},ao.svg.axis=function(){function n(n){n.each(function(){var n,c=ao.select(this),f=this.__chart__||e,s=this.__chart__=e.copy(),h=null==l?s.ticks?s.ticks.apply(s,a):s.domain():l,p=null==t?s.tickFormat?s.tickFormat.apply(s,a):m:t,g=c.selectAll(".tick").data(h,s),v=g.enter().insert("g",".domain").attr("class","tick").style("opacity",Do),d=ao.transition(g.exit()).style("opacity",Do).remove(),y=ao.transition(g.order()).style("opacity",1),M=Math.max(i,0)+o,x=Zi(s),b=c.selectAll(".domain").data([0]),_=(b.enter().append("path").attr("class","domain"),ao.transition(b))
            v.append("line"),v.append("text")
            var w,S,k,N,E=v.select("line"),A=y.select("line"),C=g.select("text").text(p),z=v.select("text"),L=y.select("text"),q="top"===r||"left"===r?-1:1
            if("bottom"===r||"top"===r?(n=no,w="x",k="y",S="x2",N="y2",C.attr("dy",q<0?"0em":".71em").style("text-anchor","middle"),_.attr("d","M"+x[0]+","+q*u+"V0H"+x[1]+"V"+q*u)):(n=to,w="y",k="x",S="y2",N="x2",C.attr("dy",".32em").style("text-anchor",q<0?"end":"start"),_.attr("d","M"+q*u+","+x[0]+"H0V"+x[1]+"H"+q*u)),E.attr(N,q*i),z.attr(k,q*M),A.attr(S,0).attr(N,q*i),L.attr(w,0).attr(k,q*M),s.rangeBand){var T=s,R=T.rangeBand()/2
                f=s=function(n){return T(n)+R}}else f.rangeBand?f=s:d.call(n,s,f)
            v.call(n,f,s),y.call(n,s,s)})}var t,e=ao.scale.linear(),r=Yl,i=6,u=6,o=3,a=[10],l=null
            return n.scale=function(t){return arguments.length?(e=t,n):e},n.orient=function(t){return arguments.length?(r=t in Zl?t+"":Yl,n):r},n.ticks=function(){return arguments.length?(a=co(arguments),n):a},n.tickValues=function(t){return arguments.length?(l=t,n):l},n.tickFormat=function(e){return arguments.length?(t=e,n):t},n.tickSize=function(t){var e=arguments.length
                return e?(i=+t,u=+arguments[e-1],n):i},n.innerTickSize=function(t){return arguments.length?(i=+t,n):i},n.outerTickSize=function(t){return arguments.length?(u=+t,n):u},n.tickPadding=function(t){return arguments.length?(o=+t,n):o},n.tickSubdivide=function(){return arguments.length&&n},n}
        var Yl="bottom",Zl={top:1,right:1,bottom:1,left:1}
        ao.svg.brush=function(){function n(t){t.each(function(){var t=ao.select(this).style("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush",u).on("touchstart.brush",u),o=t.selectAll(".background").data([0])
            o.enter().append("rect").attr("class","background").style("visibility","hidden").style("cursor","crosshair"),t.selectAll(".extent").data([0]).enter().append("rect").attr("class","extent").style("cursor","move")
            var a=t.selectAll(".resize").data(v,m)
            a.exit().remove(),a.enter().append("g").attr("class",function(n){return"resize "+n}).style("cursor",function(n){return Vl[n]}).append("rect").attr("x",function(n){return/[ew]$/.test(n)?-3:null}).attr("y",function(n){return/^[ns]/.test(n)?-3:null}).attr("width",6).attr("height",6).style("visibility","hidden"),a.style("display",n.empty()?"none":null)
            var l,s=ao.transition(t),h=ao.transition(o)
            c&&(l=Zi(c),h.attr("x",l[0]).attr("width",l[1]-l[0]),r(s)),f&&(l=Zi(f),h.attr("y",l[0]).attr("height",l[1]-l[0]),i(s)),e(s)})}function e(n){n.selectAll(".resize").attr("transform",function(n){return"translate("+s[+/e$/.test(n)]+","+h[+/^s/.test(n)]+")"})}function r(n){n.select(".extent").attr("x",s[0]),n.selectAll(".extent,.n>rect,.s>rect").attr("width",s[1]-s[0])}function i(n){n.select(".extent").attr("y",h[0]),n.selectAll(".extent,.e>rect,.w>rect").attr("height",h[1]-h[0])}function u(){function u(){32==ao.event.keyCode&&(C||(M=null,L[0]-=s[1],L[1]-=h[1],C=2),S())}function v(){32==ao.event.keyCode&&2==C&&(L[0]+=s[1],L[1]+=h[1],C=0,S())}function d(){var n=ao.mouse(b),t=!1
            x&&(n[0]+=x[0],n[1]+=x[1]),C||(ao.event.altKey?(M||(M=[(s[0]+s[1])/2,(h[0]+h[1])/2]),L[0]=s[+(n[0]<M[0])],L[1]=h[+(n[1]<M[1])]):M=null),E&&y(n,c,0)&&(r(k),t=!0),A&&y(n,f,1)&&(i(k),t=!0),t&&(e(k),w({type:"brush",mode:C?"move":"resize"}))}function y(n,t,e){var r,i,u=Zi(t),l=u[0],c=u[1],f=L[e],v=e?h:s,d=v[1]-v[0]
            if(C&&(l-=f,c-=d+f),r=(e?g:p)?Math.max(l,Math.min(c,n[e])):n[e],C?i=(r+=f)+d:(M&&(f=Math.max(l,Math.min(c,2*M[e]-r))),f<r?(i=r,r=f):i=f),v[0]!=r||v[1]!=i)return e?a=null:o=null,v[0]=r,v[1]=i,!0}function m(){d(),k.style("pointer-events","all").selectAll(".resize").style("display",n.empty()?"none":null),ao.select("body").style("cursor",null),q.on("mousemove.brush",null).on("mouseup.brush",null).on("touchmove.brush",null).on("touchend.brush",null).on("keydown.brush",null).on("keyup.brush",null),z(),w({type:"brushend"})}var M,x,b=this,_=ao.select(ao.event.target),w=l.of(b,arguments),k=ao.select(b),N=_.datum(),E=!/^(n|s)$/.test(N)&&c,A=!/^(e|w)$/.test(N)&&f,C=_.classed("extent"),z=W(b),L=ao.mouse(b),q=ao.select(t(b)).on("keydown.brush",u).on("keyup.brush",v)
            if(ao.event.changedTouches?q.on("touchmove.brush",d).on("touchend.brush",m):q.on("mousemove.brush",d).on("mouseup.brush",m),k.interrupt().selectAll("*").interrupt(),C)L[0]=s[0]-L[0],L[1]=h[0]-L[1]
            else if(N){var T=+/w$/.test(N),R=+/^n/.test(N)
                x=[s[1-T]-L[0],h[1-R]-L[1]],L[0]=s[T],L[1]=h[R]}else ao.event.altKey&&(M=L.slice())
            k.style("pointer-events","none").selectAll(".resize").style("display",null),ao.select("body").style("cursor",_.style("cursor")),w({type:"brushstart"}),d()}var o,a,l=N(n,"brushstart","brush","brushend"),c=null,f=null,s=[0,0],h=[0,0],p=!0,g=!0,v=Xl[0]
            return n.event=function(n){n.each(function(){var n=l.of(this,arguments),t={x:s,y:h,i:o,j:a},e=this.__chart__||t
                this.__chart__=t,jl?ao.select(this).transition().each("start.brush",function(){o=e.i,a=e.j,s=e.x,h=e.y,n({type:"brushstart"})}).tween("brush:brush",function(){var e=xr(s,t.x),r=xr(h,t.y)
                    return o=a=null,function(i){s=t.x=e(i),h=t.y=r(i),n({type:"brush",mode:"resize"})}}).each("end.brush",function(){o=t.i,a=t.j,n({type:"brush",mode:"resize"}),n({type:"brushend"})}):(n({type:"brushstart"}),n({type:"brush",mode:"resize"}),n({type:"brushend"}))})},n.x=function(t){return arguments.length?(c=t,v=Xl[!c<<1|!f],n):c},n.y=function(t){return arguments.length?(f=t,v=Xl[!c<<1|!f],n):f},n.clamp=function(t){return arguments.length?(c&&f?(p=!!t[0],g=!!t[1]):c?p=!!t:f&&(g=!!t),n):c&&f?[p,g]:c?p:f?g:null},n.extent=function(t){var e,r,i,u,l
                return arguments.length?(c&&(e=t[0],r=t[1],f&&(e=e[0],r=r[0]),o=[e,r],c.invert&&(e=c(e),r=c(r)),r<e&&(l=e,e=r,r=l),e==s[0]&&r==s[1]||(s=[e,r])),f&&(i=t[0],u=t[1],c&&(i=i[1],u=u[1]),a=[i,u],f.invert&&(i=f(i),u=f(u)),u<i&&(l=i,i=u,u=l),i==h[0]&&u==h[1]||(h=[i,u])),n):(c&&(o?(e=o[0],r=o[1]):(e=s[0],r=s[1],c.invert&&(e=c.invert(e),r=c.invert(r)),r<e&&(l=e,e=r,r=l))),f&&(a?(i=a[0],u=a[1]):(i=h[0],u=h[1],f.invert&&(i=f.invert(i),u=f.invert(u)),u<i&&(l=i,i=u,u=l))),c&&f?[[e,i],[r,u]]:c?[e,r]:f&&[i,u])},n.clear=function(){return n.empty()||(s=[0,0],h=[0,0],o=a=null),n},n.empty=function(){return!!c&&s[0]==s[1]||!!f&&h[0]==h[1]},ao.rebind(n,l,"on")}
        var Vl={n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Xl=[["n","e","s","w","nw","ne","se","sw"],["e","w"],["n","s"],[]],$l=ha.format=ma.timeFormat,Bl=$l.utc,Wl=Bl("%Y-%m-%dT%H:%M:%S.%LZ")
        $l.iso=Date.prototype.toISOString&&+new Date("2000-01-01T00:00:00.000Z")?eo:Wl,eo.parse=function(n){var t=new Date(n)
            return isNaN(t)?null:t},eo.toString=Wl.toString,ha.second=On(function(n){return new pa(1e3*Math.floor(n/1e3))},function(n,t){n.setTime(n.getTime()+1e3*Math.floor(t))},function(n){return n.getSeconds()}),ha.seconds=ha.second.range,ha.seconds.utc=ha.second.utc.range,ha.minute=On(function(n){return new pa(6e4*Math.floor(n/6e4))},function(n,t){n.setTime(n.getTime()+6e4*Math.floor(t))},function(n){return n.getMinutes()}),ha.minutes=ha.minute.range,ha.minutes.utc=ha.minute.utc.range,ha.hour=On(function(n){var t=n.getTimezoneOffset()/60
            return new pa(36e5*(Math.floor(n/36e5-t)+t))},function(n,t){n.setTime(n.getTime()+36e5*Math.floor(t))},function(n){return n.getHours()}),ha.hours=ha.hour.range,ha.hours.utc=ha.hour.utc.range,ha.month=On(function(n){return n=ha.day(n),n.setDate(1),n},function(n,t){n.setMonth(n.getMonth()+t)},function(n){return n.getMonth()}),ha.months=ha.month.range,ha.months.utc=ha.month.utc.range
        var Jl=[1e3,5e3,15e3,3e4,6e4,3e5,9e5,18e5,36e5,108e5,216e5,432e5,864e5,1728e5,6048e5,2592e6,7776e6,31536e6],Gl=[[ha.second,1],[ha.second,5],[ha.second,15],[ha.second,30],[ha.minute,1],[ha.minute,5],[ha.minute,15],[ha.minute,30],[ha.hour,1],[ha.hour,3],[ha.hour,6],[ha.hour,12],[ha.day,1],[ha.day,2],[ha.week,1],[ha.month,1],[ha.month,3],[ha.year,1]],Kl=$l.multi([[".%L",function(n){return n.getMilliseconds()}],[":%S",function(n){return n.getSeconds()}],["%I:%M",function(n){return n.getMinutes()}],["%I %p",function(n){return n.getHours()}],["%a %d",function(n){return n.getDay()&&1!=n.getDate()}],["%b %d",function(n){return 1!=n.getDate()}],["%B",function(n){return n.getMonth()}],["%Y",zt]]),Ql={range:function(n,t,e){return ao.range(Math.ceil(n/e)*e,+t,e).map(io)},floor:m,ceil:m}
        Gl.year=ha.year,ha.scale=function(){return ro(ao.scale.linear(),Gl,Kl)}
        var nc=Gl.map(function(n){return[n[0].utc,n[1]]}),tc=Bl.multi([[".%L",function(n){return n.getUTCMilliseconds()}],[":%S",function(n){return n.getUTCSeconds()}],["%I:%M",function(n){return n.getUTCMinutes()}],["%I %p",function(n){return n.getUTCHours()}],["%a %d",function(n){return n.getUTCDay()&&1!=n.getUTCDate()}],["%b %d",function(n){return 1!=n.getUTCDate()}],["%B",function(n){return n.getUTCMonth()}],["%Y",zt]])
        nc.year=ha.year.utc,ha.scale.utc=function(){return ro(ao.scale.linear(),nc,tc)},ao.text=An(function(n){return n.responseText}),ao.json=function(n,t){return Cn(n,"application/json",uo,t)},ao.html=function(n,t){return Cn(n,"text/html",oo,t)},ao.xml=An(function(n){return n.responseXML}),"function"==typeof define&&define.amd?(this.d3=ao,define(ao)):"object"==typeof module&&module.exports?module.exports=ao:this.d3=ao}()

},{}],2:[function(require,module,exports){
    function Flatpickr(e,t){function n(){e._flatpickr&&M(e._flatpickr),e._flatpickr=oe,oe.element=e,oe.instanceConfig=t||{},J(),F(),j(),z(),U(),B(),oe.isOpen=oe.config.inline,oe.changeMonth=y,oe.clear=w,oe.close=C,oe.destroy=M,oe.formatDate=x,oe.jumpToDate=d,oe.open=S,oe.redraw=_,oe.set=A,oe.setDate=W,oe.toggle=V,oe.isMobile=!oe.config.disableMobile&&!oe.config.inline&&"single"===oe.config.mode&&!oe.config.disable.length&&!oe.config.enable.length&&!oe.config.weekNumbers&&/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),oe.isMobile||p(),s(),oe.isMobile||Object.defineProperty(oe,"dateIsPicked",{set:function(e){ne(oe.calendarContainer,"dateIsPicked",e)}}),oe.dateIsPicked=oe.selectedDates.length>0||oe.config.noCalendar,oe.selectedDates.length&&(oe.config.enableTime&&r(),X()),oe.config.weekNumbers&&(oe.calendarContainer.style.width=oe.days.clientWidth+oe.weekWrapper.clientWidth+"px"),q("Ready")}function a(e){oe.config.noCalendar&&!oe.selectedDates.length&&(oe.selectedDates=[oe.now]),re(e),oe.selectedDates.length&&(!oe.minDateHasTime||"input"!==e.type||e.target.value.length>=2?(i(),X()):setTimeout(function(){i(),X()},1e3))}function i(){if(oe.config.enableTime){var e=parseInt(oe.hourElement.value,10)||0,t=parseInt(oe.minuteElement.value,10)||0,n=oe.config.enableSeconds?parseInt(oe.secondElement.value,10)||0:0
        oe.amPM&&(e=e%12+12*("PM"===oe.amPM.textContent)),oe.minDateHasTime&&0===ie(oe.latestSelectedDateObj,oe.config.minDate)?(e=Math.max(e,oe.config.minDate.getHours()),e===oe.config.minDate.getHours()&&(t=Math.max(t,oe.config.minDate.getMinutes()))):oe.maxDateHasTime&&0===ie(oe.latestSelectedDateObj,oe.config.maxDate)&&(e=Math.min(e,oe.config.maxDate.getHours()),e===oe.config.maxDate.getHours()&&(t=Math.min(t,oe.config.maxDate.getMinutes()))),o(e,t,n)}}function r(e){var t=e||oe.latestSelectedDateObj
        t&&o(t.getHours(),t.getMinutes(),t.getSeconds())}function o(e,t,n){oe.selectedDates.length&&oe.latestSelectedDateObj.setHours(e%24,t,n||0,0),oe.config.enableTime&&!oe.isMobile&&(oe.hourElement.value=oe.pad(oe.config.time_24hr?e:(12+e)%12+12*(e%12===0)),oe.minuteElement.value=oe.pad(t),!oe.config.time_24hr&&oe.selectedDates.length&&(oe.amPM.textContent=oe.latestSelectedDateObj.getHours()>=12?"PM":"AM"),oe.config.enableSeconds&&(oe.secondElement.value=oe.pad(n)))}function l(e){4===e.target.value.length&&(oe.currentYearElement.blur(),T(e.target.value),e.target.value=oe.currentYear)}function c(e){e.preventDefault(),oe.changeMonth(Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY)))}function s(){return oe.config.wrap&&["open","close","toggle","clear"].forEach(function(e){try{oe.element.querySelector("[data-"+e+"]").addEventListener("click",oe[e])}catch(e){}}),void 0!==window.document.createEvent&&(oe.changeEvent=window.document.createEvent("HTMLEvents"),oe.changeEvent.initEvent("change",!1,!0)),oe.isMobile?K():(oe.debouncedResize=ae(N,50),oe.triggerChange=function(){q("Change")},oe.debouncedChange=ae(oe.triggerChange,300),"range"===oe.config.mode&&oe.days&&oe.days.addEventListener("mouseover",Y),window.document.addEventListener("keydown",L),oe.config.inline||oe.config.static||window.addEventListener("resize",oe.debouncedResize),window.ontouchstart&&window.document.addEventListener("touchstart",E),window.document.addEventListener("click",E),window.document.addEventListener("blur",E),oe.config.clickOpens&&(oe.altInput||oe.input).addEventListener("focus",S),oe.config.noCalendar||(oe.prevMonthNav.addEventListener("click",function(){return y(-1)}),oe.nextMonthNav.addEventListener("click",function(){return y(1)}),oe.currentMonthElement.addEventListener("wheel",function(e){return ae(c(e),50)}),oe.currentYearElement.addEventListener("wheel",function(e){return ae(Z(e),50)}),oe.currentYearElement.addEventListener("focus",function(){oe.currentYearElement.select()}),oe.currentYearElement.addEventListener("input",l),oe.currentYearElement.addEventListener("increment",l),oe.days.addEventListener("click",P)),void(oe.config.enableTime&&(oe.timeContainer.addEventListener("transitionend",H),oe.timeContainer.addEventListener("wheel",function(e){return ae(a(e),5)}),oe.timeContainer.addEventListener("input",a),oe.timeContainer.addEventListener("increment",a),oe.timeContainer.addEventListener("increment",oe.debouncedChange),oe.timeContainer.addEventListener("wheel",oe.debouncedChange),oe.timeContainer.addEventListener("input",oe.triggerChange),oe.hourElement.addEventListener("focus",function(){oe.hourElement.select()}),oe.minuteElement.addEventListener("focus",function(){oe.minuteElement.select()}),oe.secondElement&&oe.secondElement.addEventListener("focus",function(){oe.secondElement.select()}),oe.amPM&&oe.amPM.addEventListener("click",function(e){a(e),oe.triggerChange(e)}))))}function d(e){e=e?oe.parseDate(e):oe.latestSelectedDateObj||(oe.config.minDate>oe.now?oe.config.minDate:oe.config.maxDate&&oe.config.maxDate<oe.now?oe.config.maxDate:oe.now)
        try{oe.currentYear=e.getFullYear(),oe.currentMonth=e.getMonth()}catch(t){console.error(t.stack),console.warn("Invalid date supplied: "+e)}oe.redraw()}function u(e,t){var n=e.target.parentNode.childNodes[0]
        n.value=parseInt(n.value,10)+t*(n.step||1)
        try{n.dispatchEvent(new Event("increment",{bubbles:!0}))}catch(e){var a=window.document.createEvent("CustomEvent")
            a.initCustomEvent("increment",!0,!0,{}),n.dispatchEvent(a)}}function f(e){var t=ee("div","numInputWrapper"),n=ee("input","numInput "+e),a=ee("span","arrowUp"),i=ee("span","arrowDown")
        return n.type="text",t.appendChild(n),t.appendChild(a),t.appendChild(i),a.addEventListener("click",function(e){return u(e,1)}),i.addEventListener("click",function(e){return u(e,-1)}),t}function p(){var e=window.document.createDocumentFragment()
        oe.calendarContainer=ee("div","flatpickr-calendar"),oe.numInputType=navigator.userAgent.indexOf("MSIE 9.0")>0?"text":"number",oe.config.noCalendar||(e.appendChild(h()),oe.innerContainer=ee("div","flatpickr-innerContainer"),oe.config.weekNumbers&&oe.innerContainer.appendChild(b()),oe.rContainer=ee("div","flatpickr-rContainer"),oe.rContainer.appendChild(v()),oe.rContainer.appendChild(m()),oe.innerContainer.appendChild(oe.rContainer),e.appendChild(oe.innerContainer)),oe.config.enableTime&&e.appendChild(D()),"range"===oe.config.mode&&oe.calendarContainer.classList.add("rangeMode"),oe.calendarContainer.appendChild(e)
        var t=oe.config.appendTo&&oe.config.appendTo.nodeType
        if(oe.config.inline||oe.config.static){if(oe.calendarContainer.classList.add(oe.config.inline?"inline":"static"),H(),oe.config.inline&&!t)return oe.element.parentNode.insertBefore(oe.calendarContainer,(oe.altInput||oe.input).nextSibling)
            if(oe.config.static){var n=ee("div","flatpickr-wrapper")
                return oe.element.parentNode.insertBefore(n,oe.element),n.appendChild(oe.element),void n.appendChild(oe.calendarContainer)}}(t?oe.config.appendTo:window.document.body).appendChild(oe.calendarContainer)}function g(e,t,n){var a=I(t,!0),i=ee("span","flatpickr-day "+e,t.getDate())
        return i.dateObj=t,0===ie(t,oe.now)&&i.classList.add("today"),a?(i.tabIndex=0,$(t)&&(i.classList.add("selected"),"range"===oe.config.mode?i.classList.add(0===ie(t,oe.selectedDates[0])?"startRange":"endRange"):oe.selectedDateElem=i)):(i.classList.add("disabled"),oe.selectedDates[0]&&t>oe.minRangeDate&&t<oe.selectedDates[0]?oe.minRangeDate=t:oe.selectedDates[0]&&t<oe.maxRangeDate&&t>oe.selectedDates[0]&&(oe.maxRangeDate=t)),"range"===oe.config.mode&&(Q(t)&&!$(t)&&i.classList.add("inRange"),1===oe.selectedDates.length&&(t<oe.minRangeDate||t>oe.maxRangeDate)&&i.classList.add("notAllowed")),oe.config.weekNumbers&&"prevMonthDay"!==e&&n%7===1&&oe.weekNumbers.insertAdjacentHTML("beforeend","<span class='disabled flatpickr-day'>"+oe.config.getWeek(t)+"</span>"),q("DayCreate",i),i}function m(){oe.days||(oe.days=ee("div","flatpickr-days"),oe.days.tabIndex=-1),oe.firstOfMonth=(new Date(oe.currentYear,oe.currentMonth,1).getDay()-oe.l10n.firstDayOfWeek+7)%7,oe.prevMonthDays=oe.utils.getDaysinMonth((oe.currentMonth-1+12)%12)
        var e=oe.utils.getDaysinMonth(),t=window.document.createDocumentFragment(),n=oe.prevMonthDays+1-oe.firstOfMonth
        oe.config.weekNumbers&&oe.weekNumbers.firstChild&&(oe.weekNumbers.textContent=""),"range"===oe.config.mode&&(oe.minRangeDate=new Date(oe.currentYear,oe.currentMonth-1,n),oe.maxRangeDate=new Date(oe.currentYear,oe.currentMonth+1,(42-oe.firstOfMonth)%e)),oe.days.firstChild&&(oe.days.textContent="")
        for(var a=0
            n<=oe.prevMonthDays
        a++,n++)t.appendChild(g("prevMonthDay",new Date(oe.currentYear,oe.currentMonth-1,n),n))
        for(n=1
            n<=e
        n++)t.appendChild(g("",new Date(oe.currentYear,oe.currentMonth,n),n))
        for(var i=e+1
            i<=42-oe.firstOfMonth
        i++)t.appendChild(g("nextMonthDay",new Date(oe.currentYear,oe.currentMonth+1,i%e),i))
        return oe.days.appendChild(t),oe.days}function h(){var e=window.document.createDocumentFragment()
        oe.monthNav=ee("div","flatpickr-month"),oe.prevMonthNav=ee("span","flatpickr-prev-month"),oe.prevMonthNav.innerHTML=oe.config.prevArrow,oe.currentMonthElement=ee("span","cur-month"),oe.currentMonthElement.title=oe.l10n.scrollTitle
        var t=f("cur-year")
        return oe.currentYearElement=t.childNodes[0],oe.currentYearElement.title=oe.l10n.scrollTitle,oe.config.minDate&&(oe.currentYearElement.min=oe.config.minDate.getFullYear()),oe.config.maxDate&&(oe.currentYearElement.max=oe.config.maxDate.getFullYear(),oe.currentYearElement.disabled=oe.config.minDate&&oe.config.minDate.getFullYear()===oe.config.maxDate.getFullYear()),oe.nextMonthNav=ee("span","flatpickr-next-month"),oe.nextMonthNav.innerHTML=oe.config.nextArrow,oe.navigationCurrentMonth=ee("span","flatpickr-current-month"),oe.navigationCurrentMonth.appendChild(oe.currentMonthElement),oe.navigationCurrentMonth.appendChild(t),e.appendChild(oe.prevMonthNav),e.appendChild(oe.navigationCurrentMonth),e.appendChild(oe.nextMonthNav),oe.monthNav.appendChild(e),G(),oe.monthNav}function D(){oe.calendarContainer.classList.add("hasTime"),oe.config.noCalendar&&oe.calendarContainer.classList.add("noCalendar"),oe.timeContainer=ee("div","flatpickr-time"),oe.timeContainer.tabIndex=-1
        var e=ee("span","flatpickr-time-separator",":"),t=f("flatpickr-hour")
        oe.hourElement=t.childNodes[0]
        var n=f("flatpickr-minute")
        if(oe.minuteElement=n.childNodes[0],oe.hourElement.tabIndex=oe.minuteElement.tabIndex=0,oe.hourElement.pattern=oe.minuteElement.pattern="\\d*",oe.hourElement.value=oe.pad(oe.latestSelectedDateObj?oe.latestSelectedDateObj.getHours():oe.config.defaultHour),oe.minuteElement.value=oe.pad(oe.latestSelectedDateObj?oe.latestSelectedDateObj.getMinutes():oe.config.defaultMinute),oe.hourElement.step=oe.config.hourIncrement,oe.minuteElement.step=oe.config.minuteIncrement,oe.hourElement.min=oe.config.time_24hr?0:1,oe.hourElement.max=oe.config.time_24hr?23:12,oe.minuteElement.min=0,oe.minuteElement.max=59,oe.hourElement.title=oe.minuteElement.title=oe.l10n.scrollTitle,oe.timeContainer.appendChild(t),oe.timeContainer.appendChild(e),oe.timeContainer.appendChild(n),oe.config.time_24hr&&oe.timeContainer.classList.add("time24hr"),oe.config.enableSeconds){oe.timeContainer.classList.add("hasSeconds")
            var a=f("flatpickr-second")
            oe.secondElement=a.childNodes[0],oe.secondElement.pattern=oe.hourElement.pattern,oe.secondElement.value=oe.latestSelectedDateObj?oe.pad(oe.latestSelectedDateObj.getSeconds()):"00",oe.secondElement.step=oe.minuteElement.step,oe.secondElement.min=oe.minuteElement.min,oe.secondElement.max=oe.minuteElement.max,oe.timeContainer.appendChild(ee("span","flatpickr-time-separator",":")),oe.timeContainer.appendChild(a)}return oe.config.time_24hr||(oe.amPM=ee("span","flatpickr-am-pm",["AM","PM"][oe.hourElement.value>11|0]),oe.amPM.title=oe.l10n.toggleTitle,oe.amPM.tabIndex=0,oe.timeContainer.appendChild(oe.amPM)),oe.timeContainer}function v(){oe.weekdayContainer||(oe.weekdayContainer=ee("div","flatpickr-weekdays"))
        var e=oe.l10n.firstDayOfWeek,t=oe.l10n.weekdays.shorthand.slice()
        return e>0&&e<t.length&&(t=[].concat(t.splice(e,t.length),t.splice(0,e))),oe.weekdayContainer.innerHTML="\n\t\t<span class=flatpickr-weekday>\n\t\t\t"+t.join("</span><span class=flatpickr-weekday>")+"\n\t\t</span>\n\t\t",oe.weekdayContainer}function b(){return oe.calendarContainer.classList.add("hasWeeks"),oe.weekWrapper=ee("div","flatpickr-weekwrapper"),oe.weekWrapper.appendChild(ee("span","flatpickr-weekday",oe.l10n.weekAbbreviation)),oe.weekNumbers=ee("div","flatpickr-weeks"),oe.weekWrapper.appendChild(oe.weekNumbers),oe.weekWrapper}function y(e,t){oe.currentMonth="undefined"==typeof t||t?oe.currentMonth+e:e,T(),G(),m(),oe.config.noCalendar||oe.days.focus(),q("MonthChange")}function w(e){oe.input.value="",oe.altInput&&(oe.altInput.value=""),oe.mobileInput&&(oe.mobileInput.value=""),oe.selectedDates=[],oe.latestSelectedDateObj=null,oe.dateIsPicked=!1,oe.redraw(),e!==!1&&q("Change")}function C(){oe.isOpen=!1,oe.isMobile||(oe.calendarContainer.classList.remove("open"),(oe.altInput||oe.input).classList.remove("active")),q("Close")}function M(e){e=e||oe,e.clear(!1),window.document.removeEventListener("keydown",L),window.removeEventListener("resize",e.debouncedResize),window.document.removeEventListener("click",E),window.document.removeEventListener("touchstart",E),window.document.removeEventListener("blur",E),e.timeContainer&&e.timeContainer.removeEventListener("transitionend",H),e.mobileInput&&e.mobileInput.parentNode?e.mobileInput.parentNode.removeChild(e.mobileInput):e.calendarContainer&&e.calendarContainer.parentNode&&e.calendarContainer.parentNode.removeChild(e.calendarContainer),e.altInput&&(e.input.type="text",e.altInput.parentNode&&e.altInput.parentNode.removeChild(e.altInput)),e.input.type=e.input._type,e.input.classList.remove("flatpickr-input"),e.input.removeEventListener("focus",S),e.input.removeAttribute("readonly"),delete e.input._flatpickr}function k(e){for(var t=e
        t
    ){if(/flatpickr-day|flatpickr-calendar/.test(t.className))return!0
            t=t.parentNode}return!1}function E(e){var t=oe.element.contains(e.target)||e.target===oe.input||e.target===oe.altInput||e.path&&e.path.indexOf&&(~e.path.indexOf(oe.input)||~e.path.indexOf(oe.altInput))
        !oe.isOpen||oe.config.inline||k(e.target)||t||(e.preventDefault(),oe.close(),"range"===oe.config.mode&&1===oe.selectedDates.length&&(oe.clear(),oe.redraw()))}function x(e,t){if(oe.config.formatDate)return oe.config.formatDate(e,t)
        var n=e.split("")
        return n.map(function(e,a){return oe.formats[e]&&"\\"!==n[a-1]?oe.formats[e](t):"\\"!==e?e:""}).join("")}function T(e){oe.currentMonth<0||oe.currentMonth>11?(oe.currentYear+=oe.currentMonth>11?1:-1,oe.currentMonth=(oe.currentMonth+12)%12,q("YearChange")):e&&(!oe.currentYearElement.min||e>=oe.currentYearElement.min)&&(!oe.currentYearElement.max||e<=oe.currentYearElement.max)&&(oe.currentYear=parseInt(e,10)||oe.currentYear,oe.config.maxDate&&oe.currentYear===oe.config.maxDate.getFullYear()?oe.currentMonth=Math.min(oe.config.maxDate.getMonth(),oe.currentMonth):oe.config.minDate&&oe.currentYear===oe.config.minDate.getFullYear()&&(oe.currentMonth=Math.max(oe.config.minDate.getMonth(),oe.currentMonth)),oe.redraw(),q("YearChange"))}function I(e,t){var n=ie(e,oe.config.minDate,"undefined"!=typeof t?t:!oe.minDateHasTime)<0,a=ie(e,oe.config.maxDate,"undefined"!=typeof t?t:!oe.maxDateHasTime)>0
        if(n||a)return!1
        if(!oe.config.enable.length&&!oe.config.disable.length)return!0
        for(var i,r=oe.parseDate(e,!0),o=oe.config.enable.length>0,l=o?oe.config.enable:oe.config.disable,c=0
            c<l.length
        c++){if(i=l[c],i instanceof Function&&i(r))return o
            if(i instanceof Date&&i.getTime()===r.getTime())return o
            if("string"==typeof i&&oe.parseDate(i,!0).getTime()===r.getTime())return o
            if("object"===("undefined"==typeof i?"undefined":_typeof(i))&&i.from&&i.to&&r>=i.from&&r<=i.to)return o}return!o}function L(e){if(oe.isOpen)switch(e.which){case 13:oe.timeContainer&&oe.timeContainer.contains(e.target)?X():P(e)
        break
        case 27:oe.close()
            break
        case 37:e.target!==oe.input&e.target!==oe.altInput&&y(-1)
            break
        case 38:e.preventDefault(),oe.currentYear++,oe.redraw()
            break
        case 39:e.target!==oe.input&e.target!==oe.altInput&&y(1)
            break
        case 40:e.preventDefault(),oe.currentYear--,oe.redraw()}}function Y(e){if(1===oe.selectedDates.length&&e.target.classList.contains("flatpickr-day")){for(var t=e.target.dateObj,n=oe.parseDate(oe.selectedDates[0],!0),a=Math.min(t.getTime(),oe.selectedDates[0].getTime()),i=Math.max(t.getTime(),oe.selectedDates[0].getTime()),r=!1,o=a
        o<i
        o+=oe.utils.duration.DAY)if(!I(new Date(o))){r=!0
            break}for(var l=function(o,l){var c=o<oe.minRangeDate.getTime()||o>oe.maxRangeDate.getTime()
            if(c)return oe.days.childNodes[l].classList.add("notAllowed"),["inRange","startRange","endRange"].forEach(function(e){oe.days.childNodes[l].classList.remove(e)}),"continue"
            if(r&&!c)return"continue"
                ["startRange","inRange","endRange","notAllowed"].forEach(function(e){oe.days.childNodes[l].classList.remove(e)})
            var s=Math.max(oe.minRangeDate.getTime(),a),d=Math.min(oe.maxRangeDate.getTime(),i)
            e.target.classList.add(t<oe.selectedDates[0]?"startRange":"endRange"),n>t&&o===n.getTime()?oe.days.childNodes[l].classList.add("endRange"):n<t&&o===n.getTime()?oe.days.childNodes[l].classList.add("startRange"):o>s&&o<d&&oe.days.childNodes[l].classList.add("inRange")},c=oe.days.childNodes[0].dateObj.getTime(),s=0
            s<42
        s++,c+=oe.utils.duration.DAY){l(c,s)}}}function N(){!oe.isOpen||oe.config.static||oe.config.inline||H()}function S(e){return oe.isMobile?(e&&(e.preventDefault(),e.target.blur()),setTimeout(function(){oe.mobileInput.click()},0),void q("Open")):void(oe.isOpen||(oe.altInput||oe.input).disabled||oe.config.inline||(oe.calendarContainer.classList.add("open"),oe.config.static||oe.config.inline||H(),oe.isOpen=!0,oe.config.allowInput||((oe.altInput||oe.input).blur(),(oe.config.noCalendar?oe.timeContainer:oe.selectedDateElem?oe.selectedDateElem:oe.days).focus()),(oe.altInput||oe.input).classList.add("active"),q("Open")))}function O(e){return function(t){var n=oe.config["_"+e+"Date"]=oe.parseDate(t),a=oe.config["_"+("min"===e?"max":"min")+"Date"]
        oe.selectedDates&&(oe.selectedDates=oe.selectedDates.filter(I),X()),oe.days&&_(),oe.currentYearElement&&(t&&n instanceof Date?(oe[e+"DateHasTime"]=n.getHours()||n.getMinutes()||n.getSeconds(),oe.currentYearElement[e]=n.getFullYear()):oe.currentYearElement.removeAttribute(e),oe.currentYearElement.disabled=a&&n&&a.getFullYear()===n.getFullYear())}}function F(){var e=["utc","wrap","weekNumbers","allowInput","clickOpens","time_24hr","enableTime","noCalendar","altInput","shorthandCurrentMonth","inline","static","enableSeconds","disableMobile"],t=["onChange","onClose","onDayCreate","onOpen","onReady","onValueUpdate"]
        oe.config=Object.create(Flatpickr.defaultConfig),Object.defineProperty(oe.config,"minDate",{get:function(){return this._minDate},set:O("min")}),Object.defineProperty(oe.config,"maxDate",{get:function(){return this._maxDate},set:O("max")})
        var n=_extends({},oe.instanceConfig,JSON.parse(JSON.stringify(oe.element.dataset||{})))
        _extends(oe.config,n)
        for(var a=0
            a<e.length
        a++)oe.config[e[a]]=oe.config[e[a]]===!0||"true"===oe.config[e[a]]
        for(var i=0
            i<t.length
        i++)oe.config[t[i]]=te(oe.config[t[i]])
        !n.dateFormat&&n.enableTime&&(oe.config.dateFormat=oe.config.noCalendar?"H:i"+(oe.config.enableSeconds?":S":""):Flatpickr.defaultConfig.dateFormat+" H:i"+(oe.config.enableSeconds?":S":"")),n.altInput&&n.enableTime&&!n.altFormat&&(oe.config.altFormat=oe.config.noCalendar?"h:i"+(oe.config.enableSeconds?":S K":" K"):Flatpickr.defaultConfig.altFormat+(" h:i"+(oe.config.enableSeconds?":S":"")+" K"))
        for(var r=0
            r<oe.config.plugins.length
        r++){var o=oe.config.plugins[r](oe)||{}
            for(var l in o)Array.isArray(oe.config[l])?oe.config[l]=te(o[l]).concat(oe.config[l]):void 0!==n[l]&&(oe.config[l]=o[l])}}function j(){"object"!==_typeof(oe.config.locale)&&"undefined"==typeof Flatpickr.l10ns[oe.config.locale]&&console.warn("flatpickr: invalid locale "+oe.config.locale),oe.l10n=_extends(Object.create(Flatpickr.l10ns.default),"object"===_typeof(oe.config.locale)?oe.config.locale:"default"!==oe.config.locale?Flatpickr.l10ns[oe.config.locale]||{}:{})}function H(e){if(!e||e.target===oe.timeContainer){var t=oe.calendarContainer.offsetHeight,n=oe.calendarContainer.offsetWidth,a=oe.altInput||oe.input,i=a.getBoundingClientRect(),r=window.innerHeight-i.bottom+a.offsetHeight,o=r<t+60,l=window.pageYOffset+i.top+(o?-t-2:a.offsetHeight+2)
        if(ne(oe.calendarContainer,"arrowTop",!o),ne(oe.calendarContainer,"arrowBottom",o),!oe.config.inline){var c=window.pageXOffset+i.left,s=window.document.body.offsetWidth-i.right,d=c+n>window.document.body.offsetWidth
            ne(oe.calendarContainer,"rightMost",d),oe.config.static||(oe.calendarContainer.style.top=l+"px",d?(oe.calendarContainer.style.left="auto",oe.calendarContainer.style.right=s+"px"):(oe.calendarContainer.style.left=c+"px",oe.calendarContainer.style.right="auto"))}}}function _(){oe.config.noCalendar||oe.isMobile||(v(),G(),m())}function P(e){if(e.preventDefault(),oe.config.allowInput&&13===e.which&&e.target===(oe.altInput||oe.input))return oe.setDate((oe.altInput||oe.input).value),e.target.blur()
        if(e.target.classList.contains("flatpickr-day")&&!e.target.classList.contains("disabled")&&!e.target.classList.contains("notAllowed")){var t=oe.latestSelectedDateObj=new Date(e.target.dateObj.getTime())
            if(oe.selectedDateElem=e.target,"single"===oe.config.mode)oe.selectedDates=[t]
            else if("multiple"===oe.config.mode){var n=$(t)
                n?oe.selectedDates.splice(n,1):oe.selectedDates.push(t)}else"range"===oe.config.mode&&(2===oe.selectedDates.length&&oe.clear(),oe.selectedDates.push(t),oe.selectedDates.sort(function(e,t){return e.getTime()-t.getTime()}))
            i(),t.getMonth()!==oe.currentMonth&&"range"!==oe.config.mode&&(oe.currentYear=t.getFullYear(),oe.currentMonth=t.getMonth(),G()),m(),oe.minDateHasTime&&oe.config.enableTime&&0===ie(t,oe.config.minDate)&&r(oe.config.minDate),X(),setTimeout(function(){return oe.dateIsPicked=!0},50),"range"===oe.config.mode&&(1===oe.selectedDates.length?(Y(e),oe.maxRangeDate<oe.days.childNodes[41].dateObj&&(oe.nextMonthNav.style.display="none"),oe.minRangeDate>oe.days.childNodes[0].dateObj&&(oe.prevMonthNav.style.display="none")):(oe.nextMonthNav.style.display="block",oe.prevMonthNav.style.display="block",G())),"single"!==oe.config.mode||oe.config.enableTime||oe.close(),q("Change")}}function A(e,t){oe.config[e]=t,oe.redraw(),d()}function R(e){if(Array.isArray(e))oe.selectedDates=e.map(oe.parseDate)
    else if(e instanceof Date||!isNaN(e))oe.selectedDates=[oe.parseDate(e)]
    else if(e&&e.substring)switch(oe.config.mode){case"single":oe.selectedDates=[oe.parseDate(e)]
        break
        case"multiple":oe.selectedDates=e.split("
            ").map(oe.parseDate)
            break
        case"range":oe.selectedDates=e.split(oe.l10n.rangeSeparator).map(oe.parseDate)}oe.selectedDates=oe.selectedDates.filter(function(e){return e instanceof Date&&e.getTime()&&I(e,!1)}),oe.selectedDates.sort(function(e,t){return e.getTime()-t.getTime()})}function W(e,t){return e?(R(e),oe.selectedDates.length>0?(oe.dateIsPicked=!0,oe.latestSelectedDateObj=oe.selectedDates[0]):oe.latestSelectedDateObj=null,oe.redraw(),d(),r(),X(),void(t===!0&&q("Change"))):oe.clear()}function U(){function e(e){for(var t=e.length
        t--
    )"string"==typeof e[t]||+e[t]?e[t]=oe.parseDate(e[t],!0):e[t]&&e[t].from&&e[t].to&&(e[t].from=oe.parseDate(e[t].from),e[t].to=oe.parseDate(e[t].to))
        return e.filter(function(e){return e})}oe.selectedDates=[],oe.now=new Date,R(oe.config.defaultDate||oe.input.value),oe.config.disable.length&&(oe.config.disable=e(oe.config.disable)),oe.config.enable.length&&(oe.config.enable=e(oe.config.enable))
        var t=oe.selectedDates.length?oe.selectedDates[0]:oe.config.minDate&&oe.config.minDate.getTime()>oe.now?oe.config.minDate:oe.config.maxDate&&oe.config.maxDate.getTime()<oe.now?oe.config.maxDate:oe.now
        oe.currentYear=t.getFullYear(),oe.currentMonth=t.getMonth(),oe.selectedDates.length&&(oe.latestSelectedDateObj=oe.selectedDates[0]),oe.minDateHasTime=oe.config.minDate&&(oe.config.minDate.getHours()||oe.config.minDate.getMinutes()||oe.config.minDate.getSeconds()),oe.maxDateHasTime=oe.config.maxDate&&(oe.config.maxDate.getHours()||oe.config.maxDate.getMinutes()||oe.config.maxDate.getSeconds()),Object.defineProperty(oe,"latestSelectedDateObj",{get:function(){return oe._selectedDateObj||oe.selectedDates[oe.selectedDates.length-1]||null},set:function(e){oe._selectedDateObj=e}})}function B(){oe.utils={duration:{DAY:864e5},getDaysinMonth:function(e,t){return e="undefined"==typeof e?oe.currentMonth:e,t="undefined"==typeof t?oe.currentYear:t,1===e&&(t%4===0&&t%100!==0||t%400===0)?29:oe.l10n.daysInMonth[e]},monthToStr:function(e,t){return t="undefined"==typeof t?oe.config.shorthandCurrentMonth:t,oe.l10n.months[(t?"short":"long")+"hand"][e]}}}function J(){oe.formats={D:function(e){return oe.l10n.weekdays.shorthand[oe.formats.w(e)]},F:function(e){return oe.utils.monthToStr(oe.formats.n(e)-1,!1)},H:function(e){return Flatpickr.prototype.pad(e.getHours())},J:function(e){return e.getDate()+oe.l10n.ordinal(e.getDate())},K:function(e){return e.getHours()>11?"PM":"AM"},M:function(e){return oe.utils.monthToStr(e.getMonth(),!0)},S:function(e){return Flatpickr.prototype.pad(e.getSeconds())},U:function(e){return e.getTime()/1e3},Y:function(e){return e.getFullYear()},d:function(e){return Flatpickr.prototype.pad(oe.formats.j(e))},h:function(e){return e.getHours()%12?e.getHours()%12:12},i:function(e){return Flatpickr.prototype.pad(e.getMinutes())},j:function(e){return e.getDate()},l:function(e){return oe.l10n.weekdays.longhand[oe.formats.w(e)]},m:function(e){return Flatpickr.prototype.pad(oe.formats.n(e))},n:function(e){return e.getMonth()+1},s:function(e){return e.getSeconds()},w:function(e){return e.getDay()},y:function(e){return String(oe.formats.Y(e)).substring(2)}}}function z(){return oe.input=oe.config.wrap?oe.element.querySelector("[data-input]"):oe.element,oe.input?(oe.input._type=oe.input.type,oe.input.type="text",oe.input.classList.add("flatpickr-input"),oe.config.altInput&&(oe.altInput=ee(oe.input.nodeName,oe.input.className+" "+oe.config.altInputClass),oe.altInput.placeholder=oe.input.placeholder,oe.altInput.type="text",oe.input.type="hidden",oe.input.parentNode&&oe.input.parentNode.insertBefore(oe.altInput,oe.input.nextSibling)),void(oe.config.allowInput||(oe.altInput||oe.input).setAttribute("readonly","readonly"))):console.warn("Error: invalid input element specified",oe.input)}function K(){var e=oe.config.enableTime?oe.config.noCalendar?"time":"datetime-local":"date"
        oe.mobileInput=ee("input",oe.input.className+" flatpickr-mobile"),oe.mobileInput.step="any",oe.mobileInput.tabIndex=1,oe.mobileInput.type=e,oe.mobileInput.disabled=oe.input.disabled,oe.mobileFormatStr="datetime-local"===e?"Y-m-d\\TH:i:S":"date"===e?"Y-m-d":"H:i:S",oe.selectedDates.length&&(oe.mobileInput.defaultValue=oe.mobileInput.value=x(oe.mobileFormatStr,oe.selectedDates[0])),oe.config.minDate&&(oe.mobileInput.min=x("Y-m-d",oe.config.minDate)),oe.config.maxDate&&(oe.mobileInput.max=x("Y-m-d",oe.config.maxDate)),oe.input.type="hidden",oe.config.altInput&&(oe.altInput.type="hidden")
        try{oe.input.parentNode.insertBefore(oe.mobileInput,oe.input.nextSibling)}catch(e){}oe.mobileInput.addEventListener("change",function(e){oe.latestSelectedDateObj=oe.parseDate(e.target.value),oe.setDate(oe.latestSelectedDateObj),q("Change"),q("Close")})}function V(){oe.isOpen?oe.close():oe.open()}function q(e,t){var n=oe.config["on"+e]
        if(n)for(var a=0
            a<n.length
        a++)n[a](oe.selectedDates,oe.input.value,oe,t)
        if("Change"===e)if("function"==typeof Event&&Event.constructor)oe.input.dispatchEvent(new Event("change",{bubbles:!0})),oe.input.dispatchEvent(new Event("input",{bubbles:!0}))
        else{if(void 0!==window.document.createEvent)return oe.input.dispatchEvent(oe.changeEvent)
            oe.input.fireEvent("onchange")}}function $(e){for(var t=0
        t<oe.selectedDates.length
        t++)if(0===ie(oe.selectedDates[t],e))return""+t
        return!1}function Q(e){return!("range"!==oe.config.mode||oe.selectedDates.length<2)&&(ie(e,oe.selectedDates[0])>=0&&ie(e,oe.selectedDates[1])<=0)}function G(){if(!oe.config.noCalendar&&!oe.isMobile&&oe.monthNav){if(oe.currentMonthElement.textContent=oe.utils.monthToStr(oe.currentMonth)+" ",oe.currentYearElement.value=oe.currentYear,oe.config.minDate){var e=oe.currentYear===oe.config.minDate.getFullYear()?oe.currentMonth<=oe.config.minDate.getMonth():oe.currentYear<oe.config.minDate.getFullYear()
        oe.prevMonthNav.style.display=e?"none":"block"}else oe.prevMonthNav.style.display="block"
        if(oe.config.maxDate){var t=oe.currentYear===oe.config.maxDate.getFullYear()?oe.currentMonth+1>oe.config.maxDate.getMonth():oe.currentYear>oe.config.maxDate.getFullYear()
            oe.nextMonthNav.style.display=t?"none":"block"}else oe.nextMonthNav.style.display="block"}}function X(){if(!oe.selectedDates.length)return oe.clear()
        oe.isMobile&&(oe.mobileInput.value=oe.selectedDates.length?x(oe.mobileFormatStr,oe.latestSelectedDateObj):"")
        var e="range"!==oe.config.mode?"
            ":oe.l10n.rangeSeparator
        oe.input.value=oe.selectedDates.map(function(e){return x(oe.config.dateFormat,e)}).join(e),oe.config.altInput&&(oe.altInput.value=oe.selectedDates.map(function(e){return x(oe.config.altFormat,e)}).join(e)),q("ValueUpdate")}function Z(e){e.preventDefault()
        var t=Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY)),n=parseInt(e.target.value,10)+t
        T(n),e.target.value=oe.currentYear}function ee(e,t,n){var a=window.document.createElement(e)
        return t=t||"",n=n||"",a.className=t,n&&(a.textContent=n),a}function te(e){return Array.isArray(e)?e:[e]}function ne(e,t,n){return n?e.classList.add(t):void e.classList.remove(t)}function ae(e,t,n){var a=void 0
        return function(){for(var i=arguments.length,r=Array(i),o=0
            o<i
            o++)r[o]=arguments[o]
            var l=this,c=function(){a=null,n||e.apply(l,r)}
            clearTimeout(a),a=setTimeout(c,t),n&&!a&&e.apply(l,r)}}function ie(e,t,n){return e instanceof Date&&t instanceof Date&&(n!==!1?new Date(e.getTime()).setHours(0,0,0,0)-new Date(t.getTime()).setHours(0,0,0,0):e.getTime()-t.getTime())}function re(e){if(e.preventDefault(),e&&((e.target.value||e.target.textContent).length>=2||"keydown"!==e.type&&"input"!==e.type)&&e.target.blur(),oe.amPM&&e.target===oe.amPM)return e.target.textContent=["AM","PM"]["AM"===e.target.textContent|0]
        var t=Number(e.target.min),n=Number(e.target.max),a=Number(e.target.step),i=parseInt(e.target.value,10),r=Math.max(-1,Math.min(1,e.wheelDelta||-e.deltaY)),o=Number(i)
        "wheel"===e.type&&(o=i+a*r),"input"!==e.type||2===e.target.value.length?(o<t?o=n+o+(e.target!==oe.hourElement)+(e.target===oe.hourElement&&!oe.amPM):o>n&&(o=e.target===oe.hourElement?o-n-!oe.amPM:t),oe.amPM&&e.target===oe.hourElement&&(1===a?o+i===23:Math.abs(o-i)>a)&&(oe.amPM.textContent="PM"===oe.amPM.textContent?"AM":"PM"),e.target.value=oe.pad(o)):e.target.value=o}var oe=this
        return n(),oe}function _flatpickr(e,t){for(var n=Array.prototype.slice.call(e),a=[],i=0
        i<n.length
        i++)try{n[i]._flatpickr=new Flatpickr(n[i],t||{}),a.push(n[i]._flatpickr)}catch(e){console.warn(e,e.stack)}return 1===a.length?a[0]:a}function flatpickr(e,t){return _flatpickr(window.document.querySelectorAll(e),t)}var _extends=Object.assign||function(e){for(var t=1
            t<arguments.length
            t++){var n=arguments[t]
                for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e}
    Flatpickr.defaultConfig={mode:"single",utc:!1,wrap:!1,weekNumbers:!1,allowInput:!1,clickOpens:!0,time_24hr:!1,enableTime:!1,noCalendar:!1,dateFormat:"Y-m-d",altInput:!1,altInputClass:"flatpickr-input form-control input",altFormat:"F j, Y",defaultDate:null,minDate:null,maxDate:null,parseDate:null,formatDate:null,getWeek:function(e){var t=new Date(e.getTime())
        t.setHours(0,0,0,0),t.setDate(t.getDate()+3-(t.getDay()+6)%7)
        var n=new Date(t.getFullYear(),0,4)
        return 1+Math.round(((t.getTime()-n.getTime())/864e5-3+(n.getDay()+6)%7)/7)},enable:[],disable:[],
        shorthandCurrentMonth:!1,inline:!1,static:!1,appendTo:null,prevArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",nextArrow:"<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",enableSeconds:!1,hourIncrement:1,minuteIncrement:5,defaultHour:12,defaultMinute:0,disableMobile:!1,locale:"default",plugins:[],onChange:[],onOpen:[],onClose:[],onReady:[],onValueUpdate:[],onDayCreate:[]},Flatpickr.l10ns={en:{weekdays:{shorthand:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],longhand:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},months:{shorthand:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],longhand:["January","February","March","April","May","June","July","August","September","October","November","December"]},daysInMonth:[31,28,31,30,31,30,31,31,30,31,30,31],firstDayOfWeek:0,ordinal:function(e){var t=e%100
        if(t>3&&t<21)return"th"
        switch(t%10){case 1:return"st"
            case 2:return"nd"
            case 3:return"rd"
            default:return"th"}},rangeSeparator:" to ",weekAbbreviation:"Wk",scrollTitle:"Scroll to increment",toggleTitle:"Click to toggle"}},Flatpickr.l10ns.default=Object.create(Flatpickr.l10ns.en),Flatpickr.localize=function(e){return _extends(Flatpickr.l10ns.default,e||{})},Flatpickr.setDefaults=function(e){return _extends(Flatpickr.defaultConfig,e||{})},Flatpickr.prototype={pad:function(e){return("0"+e).slice(-2)},parseDate:function(e,t){if(!e)return null
        var n=/(\d+)/g,a=/^(\d{1,2})[:\s](\d\d)?[:\s]?(\d\d)?\s?(a|p)?/i,i=/^(\d+)$/g,r=e
        if(e.toFixed||i.test(e))e=new Date(e)
        else if("string"==typeof e)if(e=e.trim(),"today"===e)e=new Date,t=!0
        else if(this.config&&this.config.parseDate)e=this.config.parseDate(e)
        else if(a.test(e)){var o=e.match(a),l=o[4]?o[1]%12+("p"===o[4].toLowerCase()?12:0):o[1]
            e=new Date,e.setHours(l,o[2]||0,o[3]||0)}else if(/Z$/.test(e)||/GMT$/.test(e))e=new Date(e)
        else if(n.test(e)&&/^[0-9]/.test(e)){var c=e.match(n)
            e=new Date(c[0]+"/"+(c[1]||1)+"/"+(c[2]||1)+" "+(c[3]||0)+":"+(c[4]||0)+":"+(c[5]||0))}else e=new Date(e)
        else e instanceof Date&&(e=new Date(e.getTime()))
        return e instanceof Date?(this.config&&this.config.utc&&!e.fp_isUTC&&(e=e.fp_toUTC()),t===!0&&e.setHours(0,0,0,0),e):(console.warn("flatpickr: invalid date "+r),console.info(this.element),null)}},"undefined"!=typeof HTMLElement&&(HTMLCollection.prototype.flatpickr=NodeList.prototype.flatpickr=function(e){return _flatpickr(this,e)},HTMLElement.prototype.flatpickr=function(e){return _flatpickr([this],e)}),"undefined"!=typeof jQuery&&(jQuery.fn.flatpickr=function(e){return _flatpickr(this,e)}),Date.prototype.fp_incr=function(e){return new Date(this.getFullYear(),this.getMonth(),this.getDate()+parseInt(e,10))},Date.prototype.fp_isUTC=!1,Date.prototype.fp_toUTC=function(){var e=new Date(this.getUTCFullYear(),this.getUTCMonth(),this.getUTCDate(),this.getUTCHours(),this.getUTCMinutes(),this.getUTCSeconds())
        return e.fp_isUTC=!0,e},!window.document.documentElement.classList&&Object.defineProperty&&"undefined"!=typeof HTMLElement&&Object.defineProperty(HTMLElement.prototype,"classList",{get:function(){function e(e){return function(n){var a=t.className.split(/\s+/),i=a.indexOf(n)
        e(a,i,n),t.className=a.join(" ")}}var t=this,n={add:e(function(e,t,n){~t||e.push(n)}),remove:e(function(e,t){~t&&e.splice(t,1)}),toggle:e(function(e,t,n){~t?e.splice(t,1):e.push(n)}),contains:function(e){return!!~t.className.split(/\s+/).indexOf(e)},item:function(e){return t.className.split(/\s+/)[e]||null}}
        return Object.defineProperty(n,"length",{get:function(){return t.className.split(/\s+/).length}}),n}}),"undefined"!=typeof module&&(module.exports=Flatpickr)


},{}],3:[function(require,module,exports){
    !function(e,t){"use strict"
        "object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document")
            return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict"
        function n(e,t){t=t||te
            var n=t.createElement("script")
            n.text=e,t.head.appendChild(n).parentNode.removeChild(n)}function r(e){var t=!!e&&"length"in e&&e.length,n=he.type(e)
            return"function"!==n&&!he.isWindow(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function i(e,t,n){return he.isFunction(t)?he.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?he.grep(e,function(e){return e===t!==n}):"string"!=typeof t?he.grep(e,function(e){return ae.call(t,e)>-1!==n}):Ee.test(t)?he.filter(t,e,n):(t=he.filter(t,e),he.grep(e,function(e){return ae.call(t,e)>-1!==n&&1===e.nodeType}))}function o(e,t){for(
            (e=e[t])&&1!==e.nodeType
        )
            return e}function a(e){var t={}
            return he.each(e.match(Ae)||[],function(e,n){t[n]=!0}),t}function s(e){return e}function u(e){throw e}function l(e,t,n){var r
            try{e&&he.isFunction(r=e.promise)?r.call(e).done(t).fail(n):e&&he.isFunction(r=e.then)?r.call(e,t,n):t.call(void 0,e)}catch(e){n.call(void 0,e)}}function c(){te.removeEventListener("DOMContentLoaded",c),e.removeEventListener("load",c),he.ready()}function f(){this.expando=he.expando+f.uid++}function p(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Re.test(e)?JSON.parse(e):e)}function d(e,t,n){var r
            if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Me,"-$&").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n=p(n)}catch(e){}Pe.set(e,t,n)}else n=void 0
            return n}function h(e,t,n,r){var i,o=1,a=20,s=r?function(){return r.cur()}:function(){return he.css(e,t,"")},u=s(),l=n&&n[3]||(he.cssNumber[t]?"":"px"),c=(he.cssNumber[t]||"px"!==l&&+u)&&We.exec(he.css(e,t))
            if(c&&c[3]!==l){l=l||c[3],n=n||[],c=+u||1
                do o=o||".5",c/=o,he.style(e,t,c+l)
                while(o!==(o=s()/u)&&1!==o&&--a)}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function g(e){var t,n=e.ownerDocument,r=e.nodeName,i=ze[r]
            return i?i:(t=n.body.appendChild(n.createElement(r)),i=he.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),ze[r]=i,i)}function m(e,t){for(var n,r,i=[],o=0,a=e.length
            o<a
            o++)r=e[o],r.style&&(n=r.style.display,t?("none"===n&&(i[o]=Oe.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&Be(r)&&(i[o]=g(r))):"none"!==n&&(i[o]="none",Oe.set(r,"display",n)))
            for(o=0
                o<a
            o++)null!=i[o]&&(e[o].style.display=i[o])
            return e}function v(e,t){var n
            return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&he.nodeName(e,t)?he.merge([e],n):n}function y(e,t){for(var n=0,r=e.length
            n<r
            n++)Oe.set(e[n],"globalEval",!t||Oe.get(t[n],"globalEval"))}function x(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length
            d<h
            d++)if(o=e[d],o||0===o)if("object"===he.type(o))he.merge(p,o.nodeType?[o]:o)
            else if(Ye.test(o)){for(a=a||f.appendChild(t.createElement("div")),s=(Ue.exec(o)||["",""])[1].toLowerCase(),u=Ge[s]||Ge._default,a.innerHTML=u[1]+he.htmlPrefilter(o)+u[2],c=u[0]
                c--
            )a=a.lastChild
                he.merge(p,a.childNodes),a=f.firstChild,a.textContent=""}else p.push(t.createTextNode(o))
            for(f.textContent="",d=0
                o=p[d++]
        )if(r&&he.inArray(o,r)>-1)i&&i.push(o)
            else if(l=he.contains(o.ownerDocument,o),a=v(f.appendChild(o),"script"),l&&y(a),n)for(c=0
                o=a[c++]
        )Ve.test(o.type||"")&&n.push(o)
            return f}function b(){return!0}function w(){return!1}function T(){try{return te.activeElement}catch(e){}}function C(e,t,n,r,i,o){var a,s
            if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0)
                for(s in t)C(e,s,n,r,t[s],o)
                return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),i===!1)i=w
            else if(!i)return e
            return 1===o&&(a=i,i=function(e){return he().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=he.guid++)),e.each(function(){he.event.add(this,t,i,r,n)})}function E(e,t){return he.nodeName(e,"table")&&he.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e:e}function k(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function N(e){var t=rt.exec(e.type)
            return t?e.type=t[1]:e.removeAttribute("type"),e}function S(e,t){var n,r,i,o,a,s,u,l
            if(1===t.nodeType){if(Oe.hasData(e)&&(o=Oe.access(e),a=Oe.set(t,o),l=o.events)){delete a.handle,a.events={}
                for(i in l)for(n=0,r=l[i].length
                    n<r
                n++)he.event.add(t,i,l[i][n])}Pe.hasData(e)&&(s=Pe.access(e),u=he.extend({},s),Pe.set(t,u))}}function D(e,t){var n=t.nodeName.toLowerCase()
            "input"===n&&Xe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function j(e,t,r,i){t=ie.apply([],t)
            var o,a,s,u,l,c,f=0,p=e.length,d=p-1,h=t[0],g=he.isFunction(h)
            if(g||p>1&&"string"==typeof h&&!pe.checkClone&&nt.test(h))return e.each(function(n){var o=e.eq(n)
                g&&(t[0]=h.call(this,n,o.html())),j(o,t,r,i)})
            if(p&&(o=x(t,e[0].ownerDocument,!1,e,i),a=o.firstChild,1===o.childNodes.length&&(o=a),a||i)){for(s=he.map(v(o,"script"),k),u=s.length
                f<p
                f++)l=o,f!==d&&(l=he.clone(l,!0,!0),u&&he.merge(s,v(l,"script"))),r.call(e[f],l,f)
                if(u)for(c=s[s.length-1].ownerDocument,he.map(s,N),f=0
                    f<u
                f++)l=s[f],Ve.test(l.type||"")&&!Oe.access(l,"globalEval")&&he.contains(c,l)&&(l.src?he._evalUrl&&he._evalUrl(l.src):n(l.textContent.replace(it,""),c))}return e}function A(e,t,n){for(var r,i=t?he.filter(t,e):e,o=0
            null!=(r=i[o])
            o++)n||1!==r.nodeType||he.cleanData(v(r)),r.parentNode&&(n&&he.contains(r.ownerDocument,r)&&y(v(r,"script")),r.parentNode.removeChild(r))
            return e}function q(e,t,n){var r,i,o,a,s=e.style
            return n=n||st(e),n&&(a=n.getPropertyValue(t)||n[t],""!==a||he.contains(e.ownerDocument,e)||(a=he.style(e,t)),!pe.pixelMarginRight()&&at.test(a)&&ot.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function L(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function H(e){if(e in pt)return e
            for(var t=e[0].toUpperCase()+e.slice(1),n=ft.length
                n--
        )if(e=ft[n]+t,e in pt)return e}function F(e,t,n){var r=We.exec(t)
            return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function O(e,t,n,r,i){var o,a=0
            for(o=n===(r?"border":"content")?4:"width"===t?1:0
                o<4
            o+=2)"margin"===n&&(a+=he.css(e,n+$e[o],!0,i)),r?("content"===n&&(a-=he.css(e,"padding"+$e[o],!0,i)),"margin"!==n&&(a-=he.css(e,"border"+$e[o]+"Width",!0,i))):(a+=he.css(e,"padding"+$e[o],!0,i),"padding"!==n&&(a+=he.css(e,"border"+$e[o]+"Width",!0,i)))
            return a}function P(e,t,n){var r,i=!0,o=st(e),a="border-box"===he.css(e,"boxSizing",!1,o)
            if(e.getClientRects().length&&(r=e.getBoundingClientRect()[t]),r<=0||null==r){if(r=q(e,t,o),(r<0||null==r)&&(r=e.style[t]),at.test(r))return r
                i=a&&(pe.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+O(e,t,n||(a?"border":"content"),i,o)+"px"}function R(e,t,n,r,i){return new R.prototype.init(e,t,n,r,i)}function M(){ht&&(e.requestAnimationFrame(M),he.fx.tick())}function I(){return e.setTimeout(function(){dt=void 0}),dt=he.now()}function W(e,t){var n,r=0,i={height:e}
            for(t=t?1:0
                r<4
            r+=2-t)n=$e[r],i["margin"+n]=i["padding"+n]=e
            return t&&(i.opacity=i.width=e),i}function $(e,t,n){for(var r,i=(z.tweeners[t]||[]).concat(z.tweeners["*"]),o=0,a=i.length
            o<a
            o++)if(r=i[o].call(n,t,e))return r}function B(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&Be(e),v=Oe.get(e,"fxshow")
            n.queue||(a=he._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,he.queue(e,"fx").length||a.empty.fire()})}))
            for(r in t)if(i=t[r],gt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue
                g=!0}d[r]=v&&v[r]||he.style(e,r)}if(u=!he.isEmptyObject(t),u||!he.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],l=v&&v.display,null==l&&(l=Oe.get(e,"display")),c=he.css(e,"display"),"none"===c&&(l?c=l:(m([e],!0),l=e.style.display||l,c=he.css(e,"display"),m([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===he.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1
                for(r in d)u||(v?"hidden"in v&&(g=v.hidden):v=Oe.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&m([e],!0),p.done(function(){g||m([e]),Oe.remove(e,"fxshow")
                    for(r in d)he.style(e,r,d[r])})),u=$(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}}function _(e,t){var n,r,i,o,a
            for(n in e)if(r=he.camelCase(n),i=t[r],o=e[n],he.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=he.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r]
                for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function z(e,t,n){var r,i,o=0,a=z.prefilters.length,s=he.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1
            for(var t=dt||I(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length
                a<u
            a++)l.tweens[a].run(o)
            return s.notifyWith(e,[l,o,n]),o<1&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:he.extend({},t),opts:he.extend(!0,{specialEasing:{},easing:he.easing._default},n),originalProperties:t,originalOptions:n,startTime:dt||I(),duration:n.duration,tweens:[],createTween:function(t,n){var r=he.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
            return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
            if(i)return this
            for(i=!0
                n<r
            n++)l.tweens[n].run(1)
            return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props
            for(_(c,l.opts.specialEasing)
                o<a
            o++)if(r=z.prefilters[o].call(l,e,c,l.opts))return he.isFunction(r.stop)&&(he._queueHooks(l.elem,l.opts.queue).stop=he.proxy(r.stop,r)),r
            return he.map(c,$,l),he.isFunction(l.opts.start)&&l.opts.start.call(e,l),he.fx.timer(he.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function X(e){var t=e.match(Ae)||[]
            return t.join(" ")}function U(e){return e.getAttribute&&e.getAttribute("class")||""}function V(e,t,n,r){var i
            if(he.isArray(t))he.each(t,function(t,i){n||Nt.test(e)?r(e,i):V(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)})
            else if(n||"object"!==he.type(t))r(e,t)
            else for(i in t)V(e+"["+i+"]",t[i],n,r)}function G(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
            var r,i=0,o=t.toLowerCase().match(Ae)||[]
            if(he.isFunction(n))for(
                r=o[i++]
            )"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function Y(e,t,n,r){function i(s){var u
            return o[s]=!0,he.each(e[s]||[],function(e,s){var l=s(t,n,r)
                return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===Mt
            return i(t.dataTypes[0])||!o["*"]&&i("*")}function Q(e,t){var n,r,i=he.ajaxSettings.flatOptions||{}
            for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
            return r&&he.extend(!0,e,r),e}function J(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes
            "*"===u[0]
        )u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
            if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i)
                break}if(u[0]in n)o=u[0]
            else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i
                break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function K(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice()
            if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a]
            for(o=c.shift()
                o
        )if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u
            else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]))
                break}if(a!==!0)if(a&&e.throws)t=a(t)
            else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function Z(e){return he.isWindow(e)?e:9===e.nodeType&&e.defaultView}var ee=[],te=e.document,ne=Object.getPrototypeOf,re=ee.slice,ie=ee.concat,oe=ee.push,ae=ee.indexOf,se={},ue=se.toString,le=se.hasOwnProperty,ce=le.toString,fe=ce.call(Object),pe={},de="3.1.1",he=function(e,t){return new he.fn.init(e,t)},ge=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,me=/^-ms-/,ve=/-([a-z])/g,ye=function(e,t){return t.toUpperCase()}
        he.fn=he.prototype={jquery:de,constructor:he,length:0,toArray:function(){return re.call(this)},get:function(e){return null==e?re.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=he.merge(this.constructor(),e)
            return t.prevObject=this,t},each:function(e){return he.each(this,e)},map:function(e){return this.pushStack(he.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(re.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0)
            return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:oe,sort:ee.sort,splice:ee.splice},he.extend=he.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1
            for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||he.isFunction(a)||(a={}),s===u&&(a=this,s--)
                s<u
            s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(he.isPlainObject(r)||(i=he.isArray(r)))?(i?(i=!1,o=n&&he.isArray(n)?n:[]):o=n&&he.isPlainObject(n)?n:{},a[t]=he.extend(l,o,r)):void 0!==r&&(a[t]=r))
            return a},he.extend({expando:"jQuery"+(de+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===he.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){var t=he.type(e)
            return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},isPlainObject:function(e){var t,n
            return!(!e||"[object Object]"!==ue.call(e))&&(!(t=ne(e))||(n=le.call(t,"constructor")&&t.constructor,"function"==typeof n&&ce.call(n)===fe))},isEmptyObject:function(e){var t
            for(t in e)return!1
            return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?se[ue.call(e)]||"object":typeof e},globalEval:function(e){n(e)},camelCase:function(e){return e.replace(me,"ms-").replace(ve,ye)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t){var n,i=0
            if(r(e))for(n=e.length
                i<n&&t.call(e[i],i,e[i])!==!1
            i++)
            else for(i in e)if(t.call(e[i],i,e[i])===!1)break
            return e},trim:function(e){return null==e?"":(e+"").replace(ge,"")},makeArray:function(e,t){var n=t||[]
            return null!=e&&(r(Object(e))?he.merge(n,"string"==typeof e?[e]:e):oe.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:ae.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length
            r<n
            r++)e[i++]=t[r]
            return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n
            o<a
            o++)r=!t(e[o],o),r!==s&&i.push(e[o])
            return i},map:function(e,t,n){var i,o,a=0,s=[]
            if(r(e))for(i=e.length
                a<i
            a++)o=t(e[a],a,n),null!=o&&s.push(o)
            else for(a in e)o=t(e[a],a,n),null!=o&&s.push(o)
            return ie.apply([],s)},guid:1,proxy:function(e,t){var n,r,i
            if("string"==typeof t&&(n=e[t],t=e,e=n),he.isFunction(e))return r=re.call(arguments,2),i=function(){return e.apply(t||this,r.concat(re.call(arguments)))},i.guid=e.guid=e.guid||he.guid++,i},now:Date.now,support:pe}),"function"==typeof Symbol&&(he.fn[Symbol.iterator]=ee[Symbol.iterator]),he.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){se["[object "+t+"]"]=t.toLowerCase()})
        var xe=function(e){function t(e,t,n,r){var i,o,a,s,u,l,c,p=t&&t.ownerDocument,h=t?t.nodeType:9
            if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n
            if(!r&&((t?t.ownerDocument||t:$)!==H&&L(t),t=t||H,O)){if(11!==h&&(u=ve.exec(e)))if(i=u[1]){if(9===h){if(!(a=t.getElementById(i)))return n
                if(a.id===i)return n.push(a),n}else if(p&&(a=p.getElementById(i))&&I(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return K.apply(n,t.getElementsByTagName(e)),n
                if((i=u[3])&&T.getElementsByClassName&&t.getElementsByClassName)return K.apply(n,t.getElementsByClassName(i)),n}if(T.qsa&&!U[e+" "]&&(!P||!P.test(e))){if(1!==h)p=t,c=e
            else if("object"!==t.nodeName.toLowerCase()){for((s=t.getAttribute("id"))?s=s.replace(we,Te):t.setAttribute("id",s=W),l=N(e),o=l.length
                o--
            )l[o]="#"+s+" "+d(l[o])
                c=l.join(","),p=ye.test(e)&&f(t.parentNode)||t}if(c)try{return K.apply(n,p.querySelectorAll(c)),n}catch(e){}finally{s===W&&t.removeAttribute("id")}}}return D(e.replace(se,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>C.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[]
            return e}function r(e){return e[W]=!0,e}function i(e){var t=H.createElement("fieldset")
            try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length
            r--
        )C.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex
            if(r)return r
            if(n)for(
                n=n.nextSibling
            )if(n===t)return-1
            return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase()
            return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase()
            return("input"===n||"button"===n)&&t.type===e}}function l(e){return function(t){return"form"in t?t.parentNode&&t.disabled===!1?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&Ee(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length
            a--
            )n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function p(){}function d(e){for(var t=0,n=e.length,r=""
            t<n
            t++)r+=e[t].value
            return r}function h(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=_++
            return t.first?function(t,n,i){for(
                t=t[r]
            )if(1===t.nodeType||a)return e(t,n,i)
                return!1}:function(t,n,u){var l,c,f,p=[B,s]
                if(u){for(
                    t=t[r]
                )if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(
                    t=t[r]
                )if(1===t.nodeType||a)if(f=t[W]||(t[W]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t
                    else{if((l=c[o])&&l[0]===B&&l[1]===s)return p[2]=l[2]
                        if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function g(e){return e.length>1?function(t,n,r){for(var i=e.length
            i--
            )if(!e[i](t,n,r))return!1
            return!0}:e[0]}function m(e,n,r){for(var i=0,o=n.length
            i<o
            i++)t(e,n[i],r)
            return r}function v(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t
            s<u
            s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)))
            return a}function y(e,t,n,i,o,a){return i&&!i[W]&&(i=y(i)),o&&!o[W]&&(o=y(o,a)),r(function(r,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=r||m(t||"*",s.nodeType?[s]:s,[]),y=!e||!r&&t?g:v(g,p,e,s,u),x=n?o||(r?e:h||i)?[]:a:y
            if(n&&n(y,x,s,u),i)for(l=v(x,d),i(l,[],s,u),c=l.length
                c--
            )(f=l[c])&&(x[d[c]]=!(y[d[c]]=f))
            if(r){if(o||e){if(o){for(l=[],c=x.length
                c--
            )(f=x[c])&&l.push(y[c]=f)
                o(null,x=[],l,u)}for(c=x.length
                c--
            )(f=x[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else x=v(x===a?x.splice(h,x.length):x),o?o(null,a,x,u):K.apply(a,x)})}function x(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,u=h(function(e){return e===t},a,!0),l=h(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==j)||((t=n).nodeType?u(e,n,r):l(e,n,r))
            return t=null,i}]
            s<i
            s++)if(n=C.relative[e[s].type])c=[h(g(c),n)]
            else{if(n=C.filter[e[s].type].apply(null,e[s].matches),n[W]){for(r=++s
                r<i&&!C.relative[e[r].type]
                r++)
                return y(s>1&&g(c),s>1&&d(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(se,"$1"),n,s<r&&x(e.slice(s,r)),r<i&&x(e=e.slice(r)),r<i&&d(e))}c.push(n)}return g(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,d=0,h="0",g=r&&[],m=[],y=j,x=r||o&&C.find.TAG("*",l),b=B+=null==y?1:Math.random()||.1,w=x.length
            for(l&&(j=a===H||a||l)
                h!==w&&null!=(c=x[h])
            h++){if(o&&c){for(f=0,a||c.ownerDocument===H||(L(c),s=!O)
                p=e[f++]
            )if(p(c,a||H,s)){u.push(c)
                    break}l&&(B=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0
                p=n[f++]
            )p(g,m,a,s)
                if(r){if(d>0)for(
                    h--
                )g[h]||m[h]||(m[h]=Q.call(u))
                    m=v(m)}K.apply(u,m),l&&!r&&m.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(B=b,j=y),g}
            return i?r(a):a}var w,T,C,E,k,N,S,D,j,A,q,L,H,F,O,P,R,M,I,W="sizzle"+1*new Date,$=e.document,B=0,_=0,z=n(),X=n(),U=n(),V=function(e,t){return e===t&&(q=!0),0},G={}.hasOwnProperty,Y=[],Q=Y.pop,J=Y.push,K=Y.push,Z=Y.slice,ee=function(e,t){for(var n=0,r=e.length
            n<r
            n++)if(e[n]===t)return n
            return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",ie="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+re+"))|)"+ne+"*\\]",oe=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ie+")*)|.*)\\)|)",ae=new RegExp(ne+"+","g"),se=new RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),ue=new RegExp("^"+ne+"*,"+ne+"*"),le=new RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),ce=new RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),fe=new RegExp(oe),pe=new RegExp("^"+re+"$"),de={ID:new RegExp("^#("+re+")"),CLASS:new RegExp("^\\.("+re+")"),TAG:new RegExp("^("+re+"|[*])"),ATTR:new RegExp("^"+ie),PSEUDO:new RegExp("^"+oe),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:new RegExp("^(?:"+te+")$","i"),needsContext:new RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},he=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,xe=new RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),be=function(e,t,n){var r="0x"+t-65536
            return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},we=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Te=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},Ce=function(){L()},Ee=h(function(e){return e.disabled===!0&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"})
            try{K.apply(Y=Z.call($.childNodes),$.childNodes),Y[$.childNodes.length].nodeType}catch(e){K={apply:Y.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0
                e[n++]=t[r++]
                )
                e.length=n-1}}}T=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
                return!!t&&"HTML"!==t.nodeName},L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:$
                return r!==H&&9===r.nodeType&&r.documentElement?(H=r,F=H.documentElement,O=!k(H),$!==H&&(n=H.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),T.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),T.getElementsByTagName=i(function(e){return e.appendChild(H.createComment("")),!e.getElementsByTagName("*").length}),T.getElementsByClassName=me.test(H.getElementsByClassName),T.getById=i(function(e){return F.appendChild(e).id=W,!H.getElementsByName||!H.getElementsByName(W).length}),T.getById?(C.filter.ID=function(e){var t=e.replace(xe,be)
                    return function(e){return e.getAttribute("id")===t}},C.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n=t.getElementById(e)
                    return n?[n]:[]}}):(C.filter.ID=function(e){var t=e.replace(xe,be)
                    return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id")
                        return n&&n.value===t}},C.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n,r,i,o=t.getElementById(e)
                    if(o){if(n=o.getAttributeNode("id"),n&&n.value===e)return[o]
                        for(i=t.getElementsByName(e),r=0
                            o=i[r++]
                    )if(n=o.getAttributeNode("id"),n&&n.value===e)return[o]}return[]}}),C.find.TAG=T.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):T.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
                    if("*"===e){for(
                        n=o[i++]
                    )1===n.nodeType&&r.push(n)
                        return r}return o},C.find.CLASS=T.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&O)return t.getElementsByClassName(e)},R=[],P=[],(T.qsa=me.test(H.querySelectorAll))&&(i(function(e){F.appendChild(e).innerHTML="<a id='"+W+"'></a><select id='"+W+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+W+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+W+"+*").length||P.push(".#.+[+~]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                    var t=H.createElement("input")
                    t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&P.push(":enabled",":disabled"),F.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(T.matchesSelector=me.test(M=F.matches||F.webkitMatchesSelector||F.mozMatchesSelector||F.oMatchesSelector||F.msMatchesSelector))&&i(function(e){T.disconnectedMatch=M.call(e,"*"),M.call(e,"[s!='']:x"),R.push("!=",oe)}),P=P.length&&new RegExp(P.join("|")),R=R.length&&new RegExp(R.join("|")),t=me.test(F.compareDocumentPosition),I=t||me.test(F.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
                    return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(
                    t=t.parentNode
                )if(t===e)return!0
                    return!1},V=t?function(e,t){if(e===t)return q=!0,0
                    var n=!e.compareDocumentPosition-!t.compareDocumentPosition
                    return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!T.sortDetached&&t.compareDocumentPosition(e)===n?e===H||e.ownerDocument===$&&I($,e)?-1:t===H||t.ownerDocument===$&&I($,t)?1:A?ee(A,e)-ee(A,t):0:4&n?-1:1)}:function(e,t){if(e===t)return q=!0,0
                    var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t]
                    if(!i||!o)return e===H?-1:t===H?1:i?-1:o?1:A?ee(A,e)-ee(A,t):0
                    if(i===o)return a(e,t)
                    for(n=e
                        n=n.parentNode
                    )s.unshift(n)
                    for(n=t
                        n=n.parentNode
                    )u.unshift(n)
                    for(
                        s[r]===u[r]
                    )r++
                    return r?a(s[r],u[r]):s[r]===$?-1:u[r]===$?1:0},H):H},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==H&&L(e),n=n.replace(ce,"='$1']"),T.matchesSelector&&O&&!U[n+" "]&&(!R||!R.test(n))&&(!P||!P.test(n)))try{var r=M.call(e,n)
                if(r||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return t(n,H,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==H&&L(e),I(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==H&&L(e)
                var n=C.attrHandle[t.toLowerCase()],r=n&&G.call(C.attrHandle,t.toLowerCase())?n(e,t,!O):void 0
                return void 0!==r?r:T.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(we,Te)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0
                if(q=!T.detectDuplicates,A=!T.sortStable&&e.slice(0),e.sort(V),q){for(
                    t=e[i++]
                )t===e[i]&&(r=n.push(i))
                    for(
                        r--
                    )e.splice(n[r],1)}return A=null,e},E=t.getText=function(e){var t,n="",r=0,i=e.nodeType
                if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent
                    for(e=e.firstChild
                        e
                    e=e.nextSibling)n+=E(e)}else if(3===i||4===i)return e.nodeValue}else for(
                    t=e[r++]
                )n+=E(t)
                return n},C=t.selectors={cacheLength:50,createPseudo:r,match:de,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xe,be),e[3]=(e[3]||e[4]||e[5]||"").replace(xe,be),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
                return de.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&fe.test(n)&&(t=N(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xe,be).toLowerCase()
                return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "]
                return t||(t=new RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e)
                return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(ae," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t
                return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,x=!1
                    if(m){if(o){for(
                        g
                    ){for(p=t
                        p=p[g]
                    )if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1
                        h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&y){for(p=m,f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===B&&l[1],x=d&&l[2],p=d&&m.childNodes[d]
                        p=++d&&p&&p[g]||(x=d=0)||h.pop()
                    )if(1===p.nodeType&&++x&&p===t){c[e]=[B,d,x]
                            break}}else if(y&&(p=t,f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===B&&l[1],x=d),x===!1)for(
                        (p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==v:1!==p.nodeType)||!++x||(y&&(f=p[W]||(p[W]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),c[e]=[B,x]),p!==t))
                    )
                        return x-=i,x===r||x%r===0&&x/r>=0}}},PSEUDO:function(e,n){var i,o=C.pseudos[e]||C.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e)
                return o[W]?o(n):o.length>1?(i=[e,e,"",n],C.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length
                    a--
                    )r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=S(e.replace(se,"$1"))
                return i[W]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length
                    s--
                    )(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(xe,be),function(t){return(t.textContent||t.innerText||E(t)).indexOf(e)>-1}}),lang:r(function(e){return pe.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xe,be).toLowerCase(),function(t){var n
                do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
                while((t=t.parentNode)&&1===t.nodeType)
                return!1

            }}),target:function(t){var n=e.location&&e.location.hash
                return n&&n.slice(1)===t.id},root:function(e){return e===F},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:l(!1),disabled:l(!0),checked:function(e){var t=e.nodeName.toLowerCase()
                return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild
                e
                e=e.nextSibling)if(e.nodeType<6)return!1
                return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return he.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
                return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
                return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[n<0?n+t:n]}),even:c(function(e,t){for(var n=0
                n<t
                n+=2)e.push(n)
                return e}),odd:c(function(e,t){for(var n=1
                n<t
                n+=2)e.push(n)
                return e}),lt:c(function(e,t,n){for(var r=n<0?n+t:n
                --r>=0
                )e.push(r)
                return e}),gt:c(function(e,t,n){for(var r=n<0?n+t:n
                ++r<t
                )e.push(r)
                return e})}},C.pseudos.nth=C.pseudos.eq
            for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=s(w)
            for(w in{submit:!0,reset:!0})C.pseudos[w]=u(w)
            return p.prototype=C.filters=C.pseudos,C.setFilters=new p,N=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=X[e+" "]
                if(c)return n?0:c.slice(0)
                for(s=e,u=[],l=C.preFilter
                    s
                ){r&&!(i=ue.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=le.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(se," ")}),s=s.slice(r.length))
                    for(a in C.filter)!(i=de[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length))
                    if(!r)break}return n?s.length:s?t.error(e):X(e,u).slice(0)},S=t.compile=function(e,t){var n,r=[],i=[],o=U[e+" "]
                if(!o){for(t||(t=N(e)),n=t.length
                    n--
                )o=x(t[n]),o[W]?r.push(o):i.push(o)
                    o=U(e,b(i,r)),o.selector=e}return o},D=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&N(e=l.selector||e)
                if(n=n||[],1===c.length){if(o=c[0]=c[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&O&&C.relative[o[1].type]){if(t=(C.find.ID(a.matches[0].replace(xe,be),t)||[])[0],!t)return n
                    l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=de.needsContext.test(e)?0:o.length
                    i--&&(a=o[i],!C.relative[s=a.type])
                )if((u=C.find[s])&&(r=u(a.matches[0].replace(xe,be),ye.test(o[0].type)&&f(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&d(o),!e)return K.apply(n,r),n
                        break}}return(l||S(e,c))(r,t,!O,n,!t||ye.test(e)&&f(t.parentNode)||t),n},T.sortStable=W.split("").sort(V).join("")===W,T.detectDuplicates=!!q,L(),T.sortDetached=i(function(e){return 1&e.compareDocumentPosition(H.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),T.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r
                if(!n)return e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e)
        he.find=xe,he.expr=xe.selectors,he.expr[":"]=he.expr.pseudos,he.uniqueSort=he.unique=xe.uniqueSort,he.text=xe.getText,he.isXMLDoc=xe.isXML,he.contains=xe.contains,he.escapeSelector=xe.escape
        var be=function(e,t,n){for(var r=[],i=void 0!==n
            (e=e[t])&&9!==e.nodeType
        )if(1===e.nodeType){if(i&&he(e).is(n))break
                r.push(e)}return r},we=function(e,t){for(var n=[]
            e
            e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
            return n},Te=he.expr.match.needsContext,Ce=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,Ee=/^.[^:#\[\.,]*$/
        he.filter=function(e,t,n){var r=t[0]
            return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?he.find.matchesSelector(r,e)?[r]:[]:he.find.matches(e,he.grep(t,function(e){return 1===e.nodeType}))},he.fn.extend({find:function(e){var t,n,r=this.length,i=this
            if("string"!=typeof e)return this.pushStack(he(e).filter(function(){for(t=0
                t<r
                t++)if(he.contains(i[t],this))return!0}))
            for(n=this.pushStack([]),t=0
                t<r
            t++)he.find(e,i[t],n)
            return r>1?he.uniqueSort(n):n},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&Te.test(e)?he(e):e||[],!1).length}})
        var ke,Ne=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Se=he.fn.init=function(e,t,n){var r,i
            if(!e)return this
            if(n=n||ke,"string"==typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:Ne.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e)
                if(r[1]){if(t=t instanceof he?t[0]:t,he.merge(this,he.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:te,!0)),Ce.test(r[1])&&he.isPlainObject(t))for(r in t)he.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r])
                    return this}return i=te.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):he.isFunction(e)?void 0!==n.ready?n.ready(e):e(he):he.makeArray(e,this)}
        Se.prototype=he.fn,ke=he(te)
        var De=/^(?:parents|prev(?:Until|All))/,je={children:!0,contents:!0,next:!0,prev:!0}
        he.fn.extend({has:function(e){var t=he(e,this),n=t.length
            return this.filter(function(){for(var e=0
                e<n
                e++)if(he.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&he(e)
            if(!Te.test(e))for(
                r<i
                r++)for(n=this[r]
                n&&n!==t
            n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&he.find.matchesSelector(n,e))){o.push(n)
                break}return this.pushStack(o.length>1?he.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?ae.call(he(e),this[0]):ae.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(he.uniqueSort(he.merge(this.get(),he(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),he.each({parent:function(e){var t=e.parentNode
            return t&&11!==t.nodeType?t:null},parents:function(e){return be(e,"parentNode")},parentsUntil:function(e,t,n){return be(e,"parentNode",n)},next:function(e){return o(e,"nextSibling")},prev:function(e){return o(e,"previousSibling")},nextAll:function(e){return be(e,"nextSibling")},prevAll:function(e){return be(e,"previousSibling")},nextUntil:function(e,t,n){return be(e,"nextSibling",n)},prevUntil:function(e,t,n){return be(e,"previousSibling",n)},siblings:function(e){return we((e.parentNode||{}).firstChild,e)},children:function(e){return we(e.firstChild)},contents:function(e){return e.contentDocument||he.merge([],e.childNodes)}},function(e,t){he.fn[e]=function(n,r){var i=he.map(this,t,n)
            return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=he.filter(r,i)),this.length>1&&(je[e]||he.uniqueSort(i),De.test(e)&&i.reverse()),this.pushStack(i)}})
        var Ae=/[^\x20\t\r\n\f]+/g
        he.Callbacks=function(e){e="string"==typeof e?a(e):he.extend({},e)
            var t,n,r,i,o=[],s=[],u=-1,l=function(){for(i=e.once,r=t=!0
                s.length
                u=-1)for(n=s.shift()
                    ++u<o.length
                )o[u].apply(n[0],n[1])===!1&&e.stopOnFalse&&(u=o.length,n=!1)
                e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},c={add:function(){return o&&(n&&!t&&(u=o.length-1,s.push(n)),function t(n){he.each(n,function(n,r){he.isFunction(r)?e.unique&&c.has(r)||o.push(r):r&&r.length&&"string"!==he.type(r)&&t(r)})}(arguments),n&&!t&&l()),this},remove:function(){return he.each(arguments,function(e,t){for(var n
                (n=he.inArray(t,o,n))>-1
                )o.splice(n,1),n<=u&&u--}),this},has:function(e){return e?he.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=s=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=s=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||l()),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}}
            return c},he.extend({Deferred:function(t){var n=[["notify","progress",he.Callbacks("memory"),he.Callbacks("memory"),2],["resolve","done",he.Callbacks("once memory"),he.Callbacks("once memory"),0,"resolved"],["reject","fail",he.Callbacks("once memory"),he.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments
            return he.Deferred(function(t){he.each(n,function(n,r){var i=he.isFunction(e[r[4]])&&e[r[4]]
                o[r[1]](function(){var e=i&&i.apply(this,arguments)
                    e&&he.isFunction(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){function o(t,n,r,i){return function(){var l=this,c=arguments,f=function(){var e,f
            if(!(t<a)){if(e=r.apply(l,c),e===n.promise())throw new TypeError("Thenable self-resolution")
                f=e&&("object"==typeof e||"function"==typeof e)&&e.then,he.isFunction(f)?i?f.call(e,o(a,n,s,i),o(a,n,u,i)):(a++,f.call(e,o(a,n,s,i),o(a,n,u,i),o(a,n,s,n.notifyWith))):(r!==s&&(l=void 0,c=[e]),(i||n.resolveWith)(l,c))}},p=i?f:function(){try{f()}catch(e){he.Deferred.exceptionHook&&he.Deferred.exceptionHook(e,p.stackTrace),t+1>=a&&(r!==u&&(l=void 0,c=[e]),n.rejectWith(l,c))}}
            t?p():(he.Deferred.getStackHook&&(p.stackTrace=he.Deferred.getStackHook()),e.setTimeout(p))}}var a=0
            return he.Deferred(function(e){n[0][3].add(o(0,e,he.isFunction(i)?i:s,e.notifyWith)),n[1][3].add(o(0,e,he.isFunction(t)?t:s)),n[2][3].add(o(0,e,he.isFunction(r)?r:u))}).promise()},promise:function(e){return null!=e?he.extend(e,i):i}},o={}
            return he.each(n,function(e,t){var a=t[2],s=t[5]
                i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[0][2].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=re.call(arguments),o=he.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?re.call(arguments):n,--t||o.resolveWith(r,i)}}
            if(t<=1&&(l(e,o.done(a(n)).resolve,o.reject),"pending"===o.state()||he.isFunction(i[n]&&i[n].then)))return o.then()
            for(
                n--
            )l(i[n],a(n),o.reject)
            return o.promise()}})
        var qe=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
        he.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&qe.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},he.readyException=function(t){e.setTimeout(function(){throw t})}
        var Le=he.Deferred()
        he.fn.ready=function(e){return Le.then(e).catch(function(e){he.readyException(e)}),this},he.extend({isReady:!1,readyWait:1,holdReady:function(e){e?he.readyWait++:he.ready(!0)},ready:function(e){(e===!0?--he.readyWait:he.isReady)||(he.isReady=!0,e!==!0&&--he.readyWait>0||Le.resolveWith(te,[he]))}}),he.ready.then=Le.then,"complete"===te.readyState||"loading"!==te.readyState&&!te.documentElement.doScroll?e.setTimeout(he.ready):(te.addEventListener("DOMContentLoaded",c),e.addEventListener("load",c))
        var He=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n
            if("object"===he.type(n)){i=!0
                for(s in n)He(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,he.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(he(e),n)})),t))for(
                s<u
                s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)))
            return i?e:l?t.call(e):u?t(e[0],n):o},Fe=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}
        f.uid=1,f.prototype={cache:function(e){var t=e[this.expando]
            return t||(t={},Fe(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e)
            if("string"==typeof t)i[he.camelCase(t)]=n
            else for(r in t)i[he.camelCase(r)]=t[r]
            return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][he.camelCase(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando]
            if(void 0!==r){if(void 0!==t){he.isArray(t)?t=t.map(he.camelCase):(t=he.camelCase(t),t=t in r?[t]:t.match(Ae)||[]),n=t.length
                for(
                    n--
                )delete r[t[n]]}(void 0===t||he.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando]
            return void 0!==t&&!he.isEmptyObject(t)}}
        var Oe=new f,Pe=new f,Re=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Me=/[A-Z]/g
        he.extend({hasData:function(e){return Pe.hasData(e)||Oe.hasData(e)},data:function(e,t,n){return Pe.access(e,t,n)},removeData:function(e,t){Pe.remove(e,t)},_data:function(e,t,n){return Oe.access(e,t,n)},_removeData:function(e,t){Oe.remove(e,t)}}),he.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes
            if(void 0===e){if(this.length&&(i=Pe.get(o),1===o.nodeType&&!Oe.get(o,"hasDataAttrs"))){for(n=a.length
                n--
            )a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=he.camelCase(r.slice(5)),d(o,r,i[r])))
                Oe.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){Pe.set(this,e)}):He(this,function(t){var n
                if(o&&void 0===t){if(n=Pe.get(o,e),void 0!==n)return n
                    if(n=d(o,e),void 0!==n)return n}else this.each(function(){Pe.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){Pe.remove(this,e)})}}),he.extend({queue:function(e,t,n){var r
            if(e)return t=(t||"fx")+"queue",r=Oe.get(e,t),n&&(!r||he.isArray(n)?r=Oe.access(e,t,he.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx"
            var n=he.queue(e,t),r=n.length,i=n.shift(),o=he._queueHooks(e,t),a=function(){he.dequeue(e,t)}
            "inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
            return Oe.get(e,n)||Oe.access(e,n,{empty:he.Callbacks("once memory").add(function(){Oe.remove(e,[t+"queue",n])})})}}),he.fn.extend({queue:function(e,t){var n=2
            return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?he.queue(this[0],e):void 0===t?this:this.each(function(){var n=he.queue(this,e,t)
                he._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&he.dequeue(this,e)})},dequeue:function(e){return this.each(function(){he.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=he.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])}
            for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx"
                a--
            )n=Oe.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s))
            return s(),i.promise(t)}})
        var Ie=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,We=new RegExp("^(?:([+-])=|)("+Ie+")([a-z%]*)$","i"),$e=["Top","Right","Bottom","Left"],Be=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&he.contains(e.ownerDocument,e)&&"none"===he.css(e,"display")},_e=function(e,t,n,r){var i,o,a={}
            for(o in t)a[o]=e.style[o],e.style[o]=t[o]
            i=n.apply(e,r||[])
            for(o in t)e.style[o]=a[o]
            return i},ze={}
        he.fn.extend({show:function(){return m(this,!0)},hide:function(){return m(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Be(this)?he(this).show():he(this).hide()})}})
        var Xe=/^(?:checkbox|radio)$/i,Ue=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,Ve=/^$|\/(?:java|ecma)script/i,Ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
        Ge.optgroup=Ge.option,Ge.tbody=Ge.tfoot=Ge.colgroup=Ge.caption=Ge.thead,Ge.th=Ge.td
        var Ye=/<|&#?\w+
        /
        !function(){var e=te.createDocumentFragment(),t=e.appendChild(te.createElement("div")),n=te.createElement("input")
            n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),pe.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",pe.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}()
        var Qe=te.documentElement,Je=/^key/,Ke=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ze=/^([^.]*)(?:\.(.+)|)/
        he.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=Oe.get(e)
            if(m)for(n.handler&&(o=n,n=o.handler,i=o.selector),i&&he.find.matchesSelector(Qe,i),n.guid||(n.guid=he.guid++),(u=m.events)||(u=m.events={}),(a=m.handle)||(a=m.handle=function(t){return"undefined"!=typeof he&&he.event.triggered!==t.type?he.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Ae)||[""],l=t.length
                l--
            )s=Ze.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d&&(f=he.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=he.event.special[d]||{},c=he.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&he.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,a)!==!1||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),he.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,m=Oe.hasData(e)&&Oe.get(e)
            if(m&&(u=m.events)){for(t=(t||"").match(Ae)||[""],l=t.length
                l--
            )if(s=Ze.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=he.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length
                    o--
                )c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c))
                    a&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||he.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)he.event.remove(e,d+t[l],n,r,!0)
                he.isEmptyObject(u)&&Oe.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=he.event.fix(e),u=new Array(arguments.length),l=(Oe.get(this,"events")||{})[s.type]||[],c=he.event.special[s.type]||{}
            for(u[0]=s,t=1
                t<arguments.length
            t++)u[t]=arguments[t]
            if(s.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,s)!==!1){for(a=he.event.handlers.call(this,s,l),t=0
                (i=a[t++])&&!s.isPropagationStopped()
            )for(s.currentTarget=i.elem,n=0
                    (o=i.handlers[n++])&&!s.isImmediatePropagationStopped()
                )s.rnamespace&&!s.rnamespace.test(o.namespace)||(s.handleObj=o,s.data=o.data,r=((he.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,u),void 0!==r&&(s.result=r)===!1&&(s.preventDefault(),s.stopPropagation()))
                return c.postDispatch&&c.postDispatch.call(this,s),s.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target
            if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(
                l!==this
                l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||l.disabled!==!0)){for(o=[],a={},n=0
                n<u
                n++)r=t[n],i=r.selector+" ",void 0===a[i]&&(a[i]=r.needsContext?he(i,this).index(l)>-1:he.find(i,this,null,[l]).length),a[i]&&o.push(r)
                o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(he.Event.prototype,e,{enumerable:!0,configurable:!0,get:he.isFunction(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[he.expando]?e:new he.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==T()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===T()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&he.nodeName(this,"input"))return this.click(),!1},_default:function(e){return he.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},he.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},he.Event=function(e,t){return this instanceof he.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?b:w,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&he.extend(this,t),this.timeStamp=e&&e.timeStamp||he.now(),void(this[he.expando]=!0)):new he.Event(e,t)},he.Event.prototype={constructor:he.Event,isDefaultPrevented:w,isPropagationStopped:w,isImmediatePropagationStopped:w,isSimulated:!1,preventDefault:function(){var e=this.originalEvent
            this.isDefaultPrevented=b,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
            this.isPropagationStopped=b,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
            this.isImmediatePropagationStopped=b,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},he.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button
            return null==e.which&&Je.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Ke.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},he.event.addProp),he.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){he.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj
            return i&&(i===r||he.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),he.fn.extend({on:function(e,t,n,r){return C(this,e,t,n,r)},one:function(e,t,n,r){return C(this,e,t,n,r,1)},off:function(e,t,n){var r,i
            if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,he(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
            if("object"==typeof e){for(i in e)this.off(i,t,e[i])
                return this}return t!==!1&&"function"!=typeof t||(n=t,t=void 0),n===!1&&(n=w),this.each(function(){he.event.remove(this,e,n,t)})}})
        var et=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,tt=/<script|<style|<link/i,nt=/checked\s*(?:[^=]|=\s*.checked.)/i,rt=/^true\/(.*)/,it=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        he.extend({htmlPrefilter:function(e){return e.replace(et,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=he.contains(e.ownerDocument,e)
            if(!(pe.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||he.isXMLDoc(e)))for(a=v(s),o=v(e),r=0,i=o.length
                r<i
            r++)D(o[r],a[r])
            if(t)if(n)for(o=o||v(e),a=a||v(s),r=0,i=o.length
                r<i
            r++)S(o[r],a[r])
            else S(e,s)
            return a=v(s,"script"),a.length>0&&y(a,!u&&v(e,"script")),s},cleanData:function(e){for(var t,n,r,i=he.event.special,o=0
            void 0!==(n=e[o])
            o++)if(Fe(n)){if(t=n[Oe.expando]){if(t.events)for(r in t.events)i[r]?he.event.remove(n,r):he.removeEvent(n,r,t.handle)
                n[Oe.expando]=void 0}n[Pe.expando]&&(n[Pe.expando]=void 0)}}}),he.fn.extend({detach:function(e){return A(this,e,!0)},remove:function(e){return A(this,e)},text:function(e){return He(this,function(e){return void 0===e?he.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return j(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=E(this,e)
            t.appendChild(e)}})},prepend:function(){return j(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=E(this,e)
            t.insertBefore(e,t.firstChild)}})},before:function(){return j(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return j(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0
            null!=(e=this[t])
            t++)1===e.nodeType&&(he.cleanData(v(e,!1)),e.textContent="")
            return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return he.clone(this,e,t)})},html:function(e){return He(this,function(e){var t=this[0]||{},n=0,r=this.length
            if(void 0===e&&1===t.nodeType)return t.innerHTML
            if("string"==typeof e&&!tt.test(e)&&!Ge[(Ue.exec(e)||["",""])[1].toLowerCase()]){e=he.htmlPrefilter(e)
                try{for(
                    n<r
                    n++)t=this[n]||{},1===t.nodeType&&(he.cleanData(v(t,!1)),t.innerHTML=e)
                    t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[]
            return j(this,arguments,function(t){var n=this.parentNode
                he.inArray(this,e)<0&&(he.cleanData(v(this)),n&&n.replaceChild(t,this))},e)}}),he.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){he.fn[e]=function(e){for(var n,r=[],i=he(e),o=i.length-1,a=0
            a<=o
            a++)n=a===o?this:this.clone(!0),he(i[a])[t](n),oe.apply(r,n.get())
            return this.pushStack(r)}})
        var ot=/^margin/,at=new RegExp("^("+Ie+")(?!px)[a-z%]+$","i"),st=function(t){var n=t.ownerDocument.defaultView
            return n&&n.opener||(n=e),n.getComputedStyle(t)}
        !function(){function t(){if(s){s.style.cssText="box-sizing:border-box
            position:relative
            display:block
            margin:auto
            border:1px
            padding:1px
            top:1%
            width:50%",s.innerHTML="",Qe.appendChild(a)
            var t=e.getComputedStyle(s)
            n="1%"!==t.top,o="2px"===t.marginLeft,r="4px"===t.width,s.style.marginRight="50%",i="4px"===t.marginRight,Qe.removeChild(a),s=null}}var n,r,i,o,a=te.createElement("div"),s=te.createElement("div")
            s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",pe.clearCloneStyle="content-box"===s.style.backgroundClip,a.style.cssText="border:0
            width:8px
            height:0
            top:0
            left:-9999px
            padding:0
            margin-top:1px
            position:absolute",a.appendChild(s),he.extend(pe,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return t(),r},pixelMarginRight:function(){return t(),i},reliableMarginLeft:function(){return t(),o}}))}()
            var ut=/^(none|table(?!-c[ea]).+)/,lt={position:"absolute",visibility:"hidden",display:"block"},ct={letterSpacing:"0",fontWeight:"400"},ft=["Webkit","Moz","ms"],pt=te.createElement("div").style
            he.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=q(e,"opacity")
                return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{float:"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=he.camelCase(t),u=e.style
                return t=he.cssProps[s]||(he.cssProps[s]=H(s)||s),a=he.cssHooks[t]||he.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=We.exec(n))&&i[1]&&(n=h(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(he.cssNumber[s]?"":"px")),pe.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,a,s=he.camelCase(t)
                return t=he.cssProps[s]||(he.cssProps[s]=H(s)||s),a=he.cssHooks[t]||he.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=q(e,t,r)),"normal"===i&&t in ct&&(i=ct[t]),""===n||n?(o=parseFloat(i),n===!0||isFinite(o)?o||0:i):i}}),he.each(["height","width"],function(e,t){he.cssHooks[t]={get:function(e,n,r){if(n)return!ut.test(he.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?P(e,t,r):_e(e,lt,function(){return P(e,t,r)})},set:function(e,n,r){var i,o=r&&st(e),a=r&&O(e,t,r,"border-box"===he.css(e,"boxSizing",!1,o),o)
                return a&&(i=We.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=he.css(e,t)),F(e,n,a)}}}),he.cssHooks.marginLeft=L(pe.reliableMarginLeft,function(e,t){if(t)return(parseFloat(q(e,"marginLeft"))||e.getBoundingClientRect().left-_e(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),he.each({margin:"",padding:"",border:"Width"},function(e,t){he.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n]
                r<4
                r++)i[e+$e[r]+t]=o[r]||o[r-2]||o[0]
                return i}},ot.test(e)||(he.cssHooks[e+t].set=F)}),he.fn.extend({css:function(e,t){return He(this,function(e,t,n){var r,i,o={},a=0
                if(he.isArray(t)){for(r=st(e),i=t.length
                    a<i
                    a++)o[t[a]]=he.css(e,t[a],!1,r)
                    return o}return void 0!==n?he.style(e,t,n):he.css(e,t)},e,t,arguments.length>1)}}),he.Tween=R,R.prototype={constructor:R,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||he.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(he.cssNumber[n]?"":"px")},cur:function(){var e=R.propHooks[this.prop]
                return e&&e.get?e.get(this):R.propHooks._default.get(this)},run:function(e){var t,n=R.propHooks[this.prop]
                return this.options.duration?this.pos=t=he.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):R.propHooks._default.set(this),this}},R.prototype.init.prototype=R.prototype,R.propHooks={_default:{get:function(e){var t
                return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=he.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){he.fx.step[e.prop]?he.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[he.cssProps[e.prop]]&&!he.cssHooks[e.prop]?e.elem[e.prop]=e.now:he.style(e.elem,e.prop,e.now+e.unit)}}},R.propHooks.scrollTop=R.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},he.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},he.fx=R.prototype.init,he.fx.step={}
            var dt,ht,gt=/^(?:toggle|show|hide)$/,mt=/queueHooks$/
            he.Animation=he.extend(z,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t)
                return h(n.elem,e,We.exec(t),n),n}]},tweener:function(e,t){he.isFunction(e)?(t=e,e=["*"]):e=e.match(Ae)
                for(var n,r=0,i=e.length
                    r<i
                r++)n=e[r],z.tweeners[n]=z.tweeners[n]||[],z.tweeners[n].unshift(t)},prefilters:[B],prefilter:function(e,t){t?z.prefilters.unshift(e):z.prefilters.push(e)}}),he.speed=function(e,t,n){var r=e&&"object"==typeof e?he.extend({},e):{complete:n||!n&&t||he.isFunction(e)&&e,duration:e,easing:n&&t||t&&!he.isFunction(t)&&t}
                return he.fx.off||te.hidden?r.duration=0:"number"!=typeof r.duration&&(r.duration in he.fx.speeds?r.duration=he.fx.speeds[r.duration]:r.duration=he.fx.speeds._default),null!=r.queue&&r.queue!==!0||(r.queue="fx"),r.old=r.complete,r.complete=function(){he.isFunction(r.old)&&r.old.call(this),r.queue&&he.dequeue(this,r.queue)},r},he.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Be).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=he.isEmptyObject(e),o=he.speed(t,n,r),a=function(){var t=z(this,he.extend({},e),o)
                (i||Oe.get(this,"finish"))&&t.stop(!0)}
                return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop
                delete e.stop,t(n)}
                return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=he.timers,a=Oe.get(this)

                    if(i)a[i]&&a[i].stop&&r(a[i])
                    else for(i in a)a[i]&&a[i].stop&&mt.test(i)&&r(a[i])
                    for(i=o.length
                        i--
                    )o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1))
                    !t&&n||he.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=Oe.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=he.timers,a=r?r.length:0
                for(n.finish=!0,he.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length
                    t--
                )o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
                for(t=0
                    t<a
                t++)r[t]&&r[t].finish&&r[t].finish.call(this)
                delete n.finish})}}),he.each(["toggle","show","hide"],function(e,t){var n=he.fn[t]
                he.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(W(t,!0),e,r,i)}}),he.each({slideDown:W("show"),slideUp:W("hide"),slideToggle:W("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){he.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),he.timers=[],he.fx.tick=function(){var e,t=0,n=he.timers
                for(dt=he.now()
                    t<n.length
                t++)e=n[t],e()||n[t]!==e||n.splice(t--,1)
                n.length||he.fx.stop(),dt=void 0},he.fx.timer=function(e){he.timers.push(e),e()?he.fx.start():he.timers.pop()},he.fx.interval=13,he.fx.start=function(){ht||(ht=e.requestAnimationFrame?e.requestAnimationFrame(M):e.setInterval(he.fx.tick,he.fx.interval))},he.fx.stop=function(){e.cancelAnimationFrame?e.cancelAnimationFrame(ht):e.clearInterval(ht),ht=null},he.fx.speeds={slow:600,fast:200,_default:400},he.fn.delay=function(t,n){return t=he.fx?he.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t)
                r.stop=function(){e.clearTimeout(i)}})},function(){var e=te.createElement("input"),t=te.createElement("select"),n=t.appendChild(te.createElement("option"))
                e.type="checkbox",pe.checkOn=""!==e.value,pe.optSelected=n.selected,e=te.createElement("input"),e.value="t",e.type="radio",pe.radioValue="t"===e.value}()
            var vt,yt=he.expr.attrHandle
            he.fn.extend({attr:function(e,t){return He(this,he.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){he.removeAttr(this,e)})}}),he.extend({attr:function(e,t,n){var r,i,o=e.nodeType
                if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?he.prop(e,t,n):(1===o&&he.isXMLDoc(e)||(i=he.attrHooks[t.toLowerCase()]||(he.expr.match.bool.test(t)?vt:void 0)),void 0!==n?null===n?void he.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=he.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!pe.radioValue&&"radio"===t&&he.nodeName(e,"input")){var n=e.value
                return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(Ae)
                if(i&&1===e.nodeType)for(
                    n=i[r++]
                )e.removeAttribute(n)}}),vt={set:function(e,t,n){return t===!1?he.removeAttr(e,n):e.setAttribute(n,n),n}},he.each(he.expr.match.bool.source.match(/\w+/g),function(e,t){var n=yt[t]||he.find.attr
                yt[t]=function(e,t,r){var i,o,a=t.toLowerCase()
                    return r||(o=yt[a],yt[a]=i,i=null!=n(e,t,r)?a:null,yt[a]=o),i}})
            var xt=/^(?:input|select|textarea|button)$/i,bt=/^(?:a|area)$/i
            he.fn.extend({prop:function(e,t){return He(this,he.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[he.propFix[e]||e]})}}),he.extend({prop:function(e,t,n){var r,i,o=e.nodeType
                if(3!==o&&8!==o&&2!==o)return 1===o&&he.isXMLDoc(e)||(t=he.propFix[t]||t,i=he.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=he.find.attr(e,"tabindex")
                return t?parseInt(t,10):xt.test(e.nodeName)||bt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),pe.optSelected||(he.propHooks.selected={get:function(e){var t=e.parentNode
                return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode
                t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),he.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){he.propFix[this.toLowerCase()]=this}),he.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0
                if(he.isFunction(e))return this.each(function(t){he(this).addClass(e.call(this,t,U(this)))})
                if("string"==typeof e&&e)for(t=e.match(Ae)||[]
                    n=this[u++]
                )if(i=U(n),r=1===n.nodeType&&" "+X(i)+" "){for(a=0
                    o=t[a++]
                )r.indexOf(" "+o+" ")<0&&(r+=o+" ")
                    s=X(r),i!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0
                if(he.isFunction(e))return this.each(function(t){he(this).removeClass(e.call(this,t,U(this)))})
                if(!arguments.length)return this.attr("class","")
                if("string"==typeof e&&e)for(t=e.match(Ae)||[]
                    n=this[u++]
                )if(i=U(n),r=1===n.nodeType&&" "+X(i)+" "){for(a=0
                    o=t[a++]
                )for(
                        r.indexOf(" "+o+" ")>-1
                    )r=r.replace(" "+o+" "," ")
                    s=X(r),i!==s&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e
                return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):he.isFunction(e)?this.each(function(n){he(this).toggleClass(e.call(this,n,U(this),t),t)}):this.each(function(){var t,r,i,o
                    if("string"===n)for(r=0,i=he(this),o=e.match(Ae)||[]
                        t=o[r++]
                    )i.hasClass(t)?i.removeClass(t):i.addClass(t)
                    else void 0!==e&&"boolean"!==n||(t=U(this),t&&Oe.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||e===!1?"":Oe.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0
                for(t=" "+e+" "
                    n=this[r++]
                )if(1===n.nodeType&&(" "+X(U(n))+" ").indexOf(t)>-1)return!0
                return!1}})
            var wt=/\r/g
            he.fn.extend({val:function(e){var t,n,r,i=this[0]
                {if(arguments.length)return r=he.isFunction(e),this.each(function(n){var i
                    1===this.nodeType&&(i=r?e.call(this,n,he(this).val()):e,null==i?i="":"number"==typeof i?i+="":he.isArray(i)&&(i=he.map(i,function(e){return null==e?"":e+""})),t=he.valHooks[this.type]||he.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})
                    if(i)return t=he.valHooks[i.type]||he.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(wt,""):null==n?"":n)}}}),he.extend({valHooks:{option:{get:function(e){var t=he.find.attr(e,"value")
                return null!=t?t:X(he.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length
                for(r=o<0?u:a?o:0
                    r<u
                r++)if(n=i[r],(n.selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!he.nodeName(n.parentNode,"optgroup"))){if(t=he(n).val(),a)return t
                    s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=he.makeArray(t),a=i.length
                a--
                )r=i[a],(r.selected=he.inArray(he.valHooks.option.get(r),o)>-1)&&(n=!0)
                return n||(e.selectedIndex=-1),o}}}}),he.each(["radio","checkbox"],function(){he.valHooks[this]={set:function(e,t){if(he.isArray(t))return e.checked=he.inArray(he(e).val(),t)>-1}},pe.checkOn||(he.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})})
            var Tt=/^(?:focusinfocus|focusoutblur)$/
            he.extend(he.event,{trigger:function(t,n,r,i){var o,a,s,u,l,c,f,p=[r||te],d=le.call(t,"type")?t.type:t,h=le.call(t,"namespace")?t.namespace.split("."):[]
                if(a=s=r=r||te,3!==r.nodeType&&8!==r.nodeType&&!Tt.test(d+he.event.triggered)&&(d.indexOf(".")>-1&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,t=t[he.expando]?t:new he.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:he.makeArray(n,[t]),f=he.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!he.isWindow(r)){for(u=f.delegateType||d,Tt.test(u+d)||(a=a.parentNode)
                    a
                    a=a.parentNode)p.push(a),s=a
                    s===(r.ownerDocument||te)&&p.push(s.defaultView||s.parentWindow||e)}for(o=0
                    (a=p[o++])&&!t.isPropagationStopped()
                )t.type=o>1?u:f.bindType||d,c=(Oe.get(a,"events")||{})[t.type]&&Oe.get(a,"handle"),c&&c.apply(a,n),c=l&&a[l],c&&c.apply&&Fe(a)&&(t.result=c.apply(a,n),t.result===!1&&t.preventDefault())
                    return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!Fe(r)||l&&he.isFunction(r[d])&&!he.isWindow(r)&&(s=r[l],s&&(r[l]=null),he.event.triggered=d,r[d](),he.event.triggered=void 0,s&&(r[l]=s)),t.result}},simulate:function(e,t,n){var r=he.extend(new he.Event,n,{type:e,isSimulated:!0})
                he.event.trigger(r,null,t)}}),he.fn.extend({trigger:function(e,t){return this.each(function(){he.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
                if(n)return he.event.trigger(e,t,n,!0)}}),he.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){he.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),he.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),pe.focusin="onfocusin"in e,pe.focusin||he.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){he.event.simulate(t,e.target,he.event.fix(e))}
                he.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=Oe.access(r,t)
                    i||r.addEventListener(e,n,!0),Oe.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=Oe.access(r,t)-1
                    i?Oe.access(r,t,i):(r.removeEventListener(e,n,!0),Oe.remove(r,t))}}})
            var Ct=e.location,Et=he.now(),kt=/\?/
            he.parseXML=function(t){var n
                if(!t||"string"!=typeof t)return null
                try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||he.error("Invalid XML: "+t),n}
            var Nt=/\[\]$/,St=/\r?\n/g,Dt=/^(?:submit|button|image|reset|file)$/i,jt=/^(?:input|select|textarea|keygen)/i
            he.param=function(e,t){var n,r=[],i=function(e,t){var n=he.isFunction(t)?t():t
                r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}
                if(he.isArray(e)||e.jquery&&!he.isPlainObject(e))he.each(e,function(){i(this.name,this.value)})
                else for(n in e)V(n,e[n],t,i)
                return r.join("&")},he.fn.extend({serialize:function(){return he.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=he.prop(this,"elements")
                return e?he.makeArray(e):this}).filter(function(){var e=this.type
                return this.name&&!he(this).is(":disabled")&&jt.test(this.nodeName)&&!Dt.test(e)&&(this.checked||!Xe.test(e))}).map(function(e,t){var n=he(this).val()
                return null==n?null:he.isArray(n)?he.map(n,function(e){return{name:t.name,value:e.replace(St,"\r\n")}}):{name:t.name,value:n.replace(St,"\r\n")}}).get()}})
            var At=/%20/g,qt=/#.*$/,Lt=/([?&])_=[^&]*/,Ht=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ft=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ot=/^(?:GET|HEAD)$/,Pt=/^\/\//,Rt={},Mt={},It="*/".concat("*"),Wt=te.createElement("a")
            Wt.href=Ct.href,he.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Ft.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded
                    charset=UTF-8",accepts:{"*":It,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":he.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Q(Q(e,he.ajaxSettings),t):Q(he.ajaxSettings,e)},ajaxPrefilter:G(Rt),ajaxTransport:G(Mt),ajax:function(t,n){function r(t,n,r,s){var l,p,d,b,w,T=n
            c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",C.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=J(h,C,r)),b=K(h,b,C,l),l?(h.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(he.lastModified[o]=w),w=C.getResponseHeader("etag"),w&&(he.etag[o]=w)),204===t||"HEAD"===h.type?T="nocontent":304===t?T="notmodified":(T=b.state,p=b.data,d=b.error,l=!d)):(d=T,!t&&T||(T="error",t<0&&(t=0))),C.status=t,C.statusText=(n||T)+"",l?v.resolveWith(g,[p,T,C]):v.rejectWith(g,[C,T,d]),C.statusCode(x),x=void 0,f&&m.trigger(l?"ajaxSuccess":"ajaxError",[C,h,l?p:d]),y.fireWith(g,[C,T]),f&&(m.trigger("ajaxComplete",[C,h]),--he.active||he.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{}
            var i,o,a,s,u,l,c,f,p,d,h=he.ajaxSetup({},n),g=h.context||h,m=h.context&&(g.nodeType||g.jquery)?he(g):he.event,v=he.Deferred(),y=he.Callbacks("once memory"),x=h.statusCode||{},b={},w={},T="canceled",C={readyState:0,getResponseHeader:function(e){var t
                if(c){if(!s)for(s={}
                    t=Ht.exec(a)
                )s[t[1].toLowerCase()]=t[2]
                    t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t
                if(e)if(c)C.always(e[C.status])
                else for(t in e)x[t]=[x[t],e[t]]
                return this},abort:function(e){var t=e||T
                return i&&i.abort(t),r(0,t),this}}
            if(v.promise(C),h.url=((t||h.url||Ct.href)+"").replace(Pt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Ae)||[""],null==h.crossDomain){l=te.createElement("a")
                try{l.href=h.url,l.href=l.href,h.crossDomain=Wt.protocol+"//"+Wt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=he.param(h.data,h.traditional)),Y(Rt,h,n,C),c)return C
            f=he.event&&h.global,f&&0===he.active++&&he.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Ot.test(h.type),o=h.url.replace(qt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(At,"+")):(d=h.url.slice(o.length),h.data&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),h.cache===!1&&(o=o.replace(Lt,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et++ +d),h.url=o+d),h.ifModified&&(he.lastModified[o]&&C.setRequestHeader("If-Modified-Since",he.lastModified[o]),he.etag[o]&&C.setRequestHeader("If-None-Match",he.etag[o])),(h.data&&h.hasContent&&h.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+It+"
                    q=0.01":""):h.accepts["*"])
            for(p in h.headers)C.setRequestHeader(p,h.headers[p])
            if(h.beforeSend&&(h.beforeSend.call(g,C,h)===!1||c))return C.abort()
            if(T="abort",y.add(h.complete),C.done(h.success),C.fail(h.error),i=Y(Mt,h,n,C)){if(C.readyState=1,f&&m.trigger("ajaxSend",[C,h]),c)return C
                h.async&&h.timeout>0&&(u=e.setTimeout(function(){C.abort("timeout")},h.timeout))
                try{c=!1,i.send(b,r)}catch(e){if(c)throw e
                    r(-1,e)}}else r(-1,"No Transport")
            return C},getJSON:function(e,t,n){return he.get(e,t,n,"json")},getScript:function(e,t){return he.get(e,void 0,t,"script")}}),he.each(["get","post"],function(e,t){he[t]=function(e,n,r,i){return he.isFunction(n)&&(i=i||r,r=n,n=void 0),he.ajax(he.extend({url:e,type:t,dataType:i,data:n,success:r},he.isPlainObject(e)&&e))}}),he._evalUrl=function(e){return he.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},he.fn.extend({wrapAll:function(e){var t
        return this[0]&&(he.isFunction(e)&&(e=e.call(this[0])),t=he(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this
            e.firstElementChild
            )e=e.firstElementChild
            return e}).append(this)),this},wrapInner:function(e){return he.isFunction(e)?this.each(function(t){he(this).wrapInner(e.call(this,t))}):this.each(function(){var t=he(this),n=t.contents()
        n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=he.isFunction(e)
        return this.each(function(n){he(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){he(this).replaceWith(this.childNodes)}),this}}),he.expr.pseudos.hidden=function(e){return!he.expr.pseudos.visible(e)},he.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},he.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}}
    var $t={0:200,1223:204},Bt=he.ajaxSettings.xhr()
    pe.cors=!!Bt&&"withCredentials"in Bt,pe.ajax=Bt=!!Bt,he.ajaxTransport(function(t){var n,r
        if(pe.cors||Bt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr()
            if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a]
            t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest")
            for(a in i)s.setRequestHeader(a,i[a])
            n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o($t[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort")
            try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),he.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),he.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return he.globalEval(e),e}}}),he.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),he.ajaxTransport("script",function(e){if(e.crossDomain){var t,n
        return{send:function(r,i){t=he("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),te.head.appendChild(t[0])},abort:function(){n&&n()}}}})
    var _t=[],zt=/(=)\?(?=&|$)|\?\?/
    he.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=_t.pop()||he.expando+"_"+Et++
        return this[e]=!0,e}}),he.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(zt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&zt.test(t.data)&&"data")
        if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=he.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(zt,"$1"+i):t.jsonp!==!1&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||he.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?he(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,_t.push(i)),a&&he.isFunction(o)&&o(a[0]),a=o=void 0}),"script"}),pe.createHTMLDocument=function(){var e=te.implementation.createHTMLDocument("").body
        return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),he.parseHTML=function(e,t,n){if("string"!=typeof e)return[]
        "boolean"==typeof t&&(n=t,t=!1)
        var r,i,o
        return t||(pe.createHTMLDocument?(t=te.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=te.location.href,t.head.appendChild(r)):t=te),i=Ce.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=x([e],t,o),o&&o.length&&he(o).remove(),he.merge([],i.childNodes))},he.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ")
        return s>-1&&(r=X(e.slice(s)),e=e.slice(0,s)),he.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&he.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?he("<div>").append(he.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},he.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){he.fn[t]=function(e){return this.on(t,e)}}),he.expr.pseudos.animated=function(e){return he.grep(he.timers,function(t){return e===t.elem}).length},he.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=he.css(e,"position"),f=he(e),p={}
        "static"===c&&(e.style.position="relative"),s=f.offset(),o=he.css(e,"top"),u=he.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),he.isFunction(t)&&(t=t.call(e,n,he.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},he.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){he.offset.setOffset(this,e,t)})
        var t,n,r,i,o=this[0]
        if(o)return o.getClientRects().length?(r=o.getBoundingClientRect(),r.width||r.height?(i=o.ownerDocument,n=Z(i),t=i.documentElement,{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}):r):{top:0,left:0}},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0}
        return"fixed"===he.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),he.nodeName(e[0],"html")||(r=e.offset()),r={top:r.top+he.css(e[0],"borderTopWidth",!0),left:r.left+he.css(e[0],"borderLeftWidth",!0)}),{top:t.top-r.top-he.css(n,"marginTop",!0),left:t.left-r.left-he.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent
        e&&"static"===he.css(e,"position")
        )e=e.offsetParent
        return e||Qe})}}),he.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t
        he.fn[e]=function(r){return He(this,function(e,r,i){var o=Z(e)
            return void 0===i?o?o[t]:e[r]:void(o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i)},e,r,arguments.length)}}),he.each(["top","left"],function(e,t){he.cssHooks[t]=L(pe.pixelPosition,function(e,n){if(n)return n=q(e,t),at.test(n)?he(e).position()[t]+"px":n})}),he.each({Height:"height",Width:"width"},function(e,t){he.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){he.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||o===!0?"margin":"border")
        return He(this,function(t,n,i){var o
            return he.isWindow(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?he.css(t,n,s):he.style(t,n,i,s)},t,a?i:void 0,a)}})}),he.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),he.parseJSON=JSON.parse,"function"==typeof define&&define.amd&&define("jquery",[],function(){return he})
    var Xt=e.jQuery,Ut=e.$
    return he.noConflict=function(t){return e.$===he&&(e.$=Ut),t&&e.jQuery===he&&(e.jQuery=Xt),he},t||(e.jQuery=e.$=he),he})


},{}],4:[function(require,module,exports){
    !function(t){var e
        if("function"==typeof define&&define.amd)define(["leaflet"],t)
        else if("undefined"!=typeof module)e=require("leaflet"),module.exports=t(e)
        else{if("undefined"==typeof window.L)throw new Error("Leaflet must be loaded first")
            t(window.L)}}(function(t){t.Map.mergeOptions({contextmenuItems:[]}),t.Map.ContextMenu=t.Handler.extend({_touchstart:t.Browser.msPointer?"MSPointerDown":t.Browser.pointer?"pointerdown":"touchstart",statics:{BASE_CLS:"leaflet-contextmenu"},initialize:function(e){t.Handler.prototype.initialize.call(this,e),this._items=[],this._visible=!1
        var n=this._container=t.DomUtil.create("div",t.Map.ContextMenu.BASE_CLS,e._container)
        n.style.zIndex=1e4,n.style.position="absolute",e.options.contextmenuWidth&&(n.style.width=e.options.contextmenuWidth+"px"),this._createItems(),t.DomEvent.on(n,"click",t.DomEvent.stop).on(n,"mousedown",t.DomEvent.stop).on(n,"dblclick",t.DomEvent.stop).on(n,"contextmenu",t.DomEvent.stop)},addHooks:function(){var e=this._map.getContainer()
        t.DomEvent.on(e,"mouseleave",this._hide,this).on(document,"keydown",this._onKeyDown,this),t.Browser.touch&&t.DomEvent.on(document,this._touchstart,this._hide,this),this._map.on({contextmenu:this._show,mousedown:this._hide,movestart:this._hide,zoomstart:this._hide},this)},removeHooks:function(){var e=this._map.getContainer()
        t.DomEvent.off(e,"mouseleave",this._hide,this).off(document,"keydown",this._onKeyDown,this),t.Browser.touch&&t.DomEvent.off(document,this._touchstart,this._hide,this),this._map.off({contextmenu:this._show,mousedown:this._hide,movestart:this._hide,zoomstart:this._hide},this)},showAt:function(e,n){e instanceof t.LatLng&&(e=this._map.latLngToContainerPoint(e)),this._showAtPoint(e,n)},hide:function(){this._hide()},addItem:function(t){return this.insertItem(t)},insertItem:function(t,e){e=void 0!==e?e:this._items.length
        var n=this._createItem(this._container,t,e)
        return this._items.push(n),this._sizeChanged=!0,this._map.fire("contextmenu.additem",{contextmenu:this,el:n.el,index:e}),n.el},removeItem:function(e){var n=this._container
        isNaN(e)||(e=n.children[e]),e&&(this._removeItem(t.Util.stamp(e)),this._sizeChanged=!0,this._map.fire("contextmenu.removeitem",{contextmenu:this,el:e}))},removeAllItems:function(){for(var e
        this._container.children.length
        )e=this._container.children[0],this._removeItem(t.Util.stamp(e))},hideAllItems:function(){var t,e,n
        for(e=0,n=this._items.length
            e<n
        e++)t=this._items[e],t.el.style.display="none"},showAllItems:function(){var t,e,n
        for(e=0,n=this._items.length
            e<n
        e++)t=this._items[e],t.el.style.display=""},setDisabled:function(e,n){var i=this._container,o=t.Map.ContextMenu.BASE_CLS+"-item"
        isNaN(e)||(e=i.children[e]),e&&t.DomUtil.hasClass(e,o)&&(n?(t.DomUtil.addClass(e,o+"-disabled"),this._map.fire("contextmenu.disableitem",{contextmenu:this,el:e})):(t.DomUtil.removeClass(e,o+"-disabled"),this._map.fire("contextmenu.enableitem",{contextmenu:this,el:e})))},isVisible:function(){return this._visible},_createItems:function(){var t,e,n=this._map.options.contextmenuItems
        for(t=0,e=n.length
            t<e
        t++)this._items.push(this._createItem(this._container,n[t]))},_createItem:function(e,n,i){if(n.separator||"-"===n)return this._createSeparator(e,i)
        var o=t.Map.ContextMenu.BASE_CLS+"-item",s=n.disabled?o+" "+o+"-disabled":o,h=this._insertElementAt("a",s,e,i),a=this._createEventHandler(h,n.callback,n.context,n.hideOnSelect),m=""
        return n.icon?m='<img class="'+t.Map.ContextMenu.BASE_CLS+'-icon" src="'+n.icon+'"/>':n.iconCls&&(m='<span class="'+t.Map.ContextMenu.BASE_CLS+"-icon "+n.iconCls+'"></span>'),h.innerHTML=m+n.text,h.href="#",t.DomEvent.on(h,"mouseover",this._onItemMouseOver,this).on(h,"mouseout",this._onItemMouseOut,this).on(h,"mousedown",t.DomEvent.stopPropagation).on(h,"click",a),t.Browser.touch&&t.DomEvent.on(h,this._touchstart,t.DomEvent.stopPropagation),{id:t.Util.stamp(h),el:h,callback:a}},_removeItem:function(e){var n,i,o,s,h
        for(o=0,s=this._items.length
            o<s
        o++)if(n=this._items[o],n.id===e)return i=n.el,h=n.callback,h&&(t.DomEvent.off(i,"mouseover",this._onItemMouseOver,this).off(i,"mouseover",this._onItemMouseOut,this).off(i,"mousedown",t.DomEvent.stopPropagation).off(i,"click",h),t.Browser.touch&&t.DomEvent.off(i,this._touchstart,t.DomEvent.stopPropagation)),this._container.removeChild(i),this._items.splice(o,1),n
        return null},_createSeparator:function(e,n){var i=this._insertElementAt("div",t.Map.ContextMenu.BASE_CLS+"-separator",e,n)
        return{id:t.Util.stamp(i),el:i}},_createEventHandler:function(e,n,i,o){var s=this,h=this._map,a=t.Map.ContextMenu.BASE_CLS+"-item-disabled",o=void 0===o||o
        return function(m){t.DomUtil.hasClass(e,a)||(o&&s._hide(),n&&n.call(i||h,s._showLocation),s._map.fire("contextmenu:select",{contextmenu:s,el:e}))}},_insertElementAt:function(t,e,n,i){var o,s=document.createElement(t)
        return s.className=e,void 0!==i&&(o=n.children[i]),o?n.insertBefore(s,o):n.appendChild(s),s},_show:function(t){this._showAtPoint(t.containerPoint,t)},_showAtPoint:function(e,n){if(this._items.length){var i=this._map,o=i.containerPointToLayerPoint(e),s=i.layerPointToLatLng(o),h=t.extend(n||{},{contextmenu:this})
        this._showLocation={latlng:s,layerPoint:o,containerPoint:e},n&&n.relatedTarget&&(this._showLocation.relatedTarget=n.relatedTarget),this._setPosition(e),this._visible?this._setPosition(e):(this._container.style.display="block",this._visible=!0),this._map.fire("contextmenu.show",h)}},_hide:function(){this._visible&&(this._visible=!1,this._container.style.display="none",this._map.fire("contextmenu.hide",{contextmenu:this}))},_setPosition:function(e){var n,i=this._map.getSize(),o=this._container,s=this._getElementSize(o)
        this._map.options.contextmenuAnchor&&(n=t.point(this._map.options.contextmenuAnchor),e=e.add(n)),o._leaflet_pos=e,e.x+s.x>i.x?(o.style.left="auto",o.style.right=Math.max(i.x-e.x,0)+"px"):(o.style.left=Math.max(e.x,0)+"px",o.style.right="auto"),e.y+s.y>i.y?(o.style.top="auto",o.style.bottom=Math.max(i.y-e.y,0)+"px"):(o.style.top=Math.max(e.y,0)+"px",o.style.bottom="auto")},_getElementSize:function(t){var e=this._size,n=t.style.display
        return e&&!this._sizeChanged||(e={},t.style.left="-999999px",t.style.right="auto",t.style.display="block",e.x=t.offsetWidth,e.y=t.offsetHeight,t.style.left="auto",t.style.display=n,this._sizeChanged=!1),e},_onKeyDown:function(t){var e=t.keyCode
        27===e&&this._hide()},_onItemMouseOver:function(e){t.DomUtil.addClass(e.target||e.srcElement,"over")},_onItemMouseOut:function(e){t.DomUtil.removeClass(e.target||e.srcElement,"over")}}),t.Map.addInitHook("addHandler","contextmenu",t.Map.ContextMenu),t.Mixin.ContextMenu={bindContextMenu:function(e){return t.setOptions(this,e),this._initContextMenu(),this},unbindContextMenu:function(){return this.off("contextmenu",this._showContextMenu,this),this},addContextMenuItem:function(t){this.options.contextmenuItems.push(t)},removeContextMenuItemWithIndex:function(t){for(var e=[],n=0
        n<this.options.contextmenuItems.length
        n++)this.options.contextmenuItems[n].index==t&&e.push(n)
        for(var i=e.pop()
            void 0!==i
        )this.options.contextmenuItems.splice(i,1),i=e.pop()},replaceConextMenuItem:function(t){this.removeContextMenuItemWithIndex(t.index),this.addContextMenuItem(t)},_initContextMenu:function(){this._items=[],this.on("contextmenu",this._showContextMenu,this)},_showContextMenu:function(e){var n,i,o,s,h
        if(this._map.contextmenu){for(i=t.extend({relatedTarget:this},e),o=this._map.mouseEventToContainerPoint(e.originalEvent),this.options.contextmenuInheritItems||this._map.contextmenu.hideAllItems(),s=0,h=this.options.contextmenuItems.length
            s<h
            s++)n=this.options.contextmenuItems[s],this._items.push(this._map.contextmenu.insertItem(n,n.index))
            this._map.once("contextmenu.hide",this._hideContextMenu,this),this._map.contextmenu.showAt(o,i)}},_hideContextMenu:function(){var t,e
        for(t=0,e=this._items.length
            t<e
        t++)this._map.contextmenu.removeItem(this._items[t])
        this._items.length=0,this.options.contextmenuInheritItems||this._map.contextmenu.showAllItems()}}
        var e,n,i,o=[t.Marker,t.Path],s={contextmenu:!1,contextmenuItems:[],contextmenuInheritItems:!0}
        for(n=0,i=o.length
            n<i
        n++)e=o[n],e.prototype.options?e.mergeOptions(s):e.prototype.options=s,e.addInitHook(function(){this.options.contextmenu&&this._initContextMenu()}),e.include(t.Mixin.ContextMenu)
        return t.Map.ContextMenu})


},{"leaflet":6}],5:[function(require,module,exports){
    !function(){function o(o){o.Control.Loading=o.Control.extend({options:{delayIndicator:null,position:"topleft",separate:!1,zoomControl:null,spinjs:!1,spin:{lines:7,length:3,width:3,radius:5,rotate:13,top:"83%"}},initialize:function(t){o.setOptions(this,t),this._dataLoaders={},null!==this.options.zoomControl&&(this.zoomControl=this.options.zoomControl)},onAdd:function(n){if(this.options.spinjs&&"function"!=typeof Spinner)return t.error("Leaflet.loading cannot load because you didn't load spin.js (http://fgnass.github.io/spin.js/), even though you set it in options.")
        this._addLayerListeners(n),this._addMapListeners(n),this.options.separate||this.zoomControl||(n.zoomControl?this.zoomControl=n.zoomControl:n.zoomsliderControl&&(this.zoomControl=n.zoomsliderControl))
        var i,a="leaflet-control-loading"
        return this.zoomControl&&!this.options.separate?(i=this.zoomControl._container,a+=" leaflet-bar-part-bottom leaflet-bar-part last",o.DomUtil.addClass(this._getLastControlButton(),"leaflet-bar-part-bottom")):i=o.DomUtil.create("div","leaflet-control-zoom leaflet-bar"),this._indicator=o.DomUtil.create("a",a,i),this.options.spinjs&&(this._spinner=new Spinner(this.options.spin).spin(),this._indicator.appendChild(this._spinner.el)),i},onRemove:function(o){this._removeLayerListeners(o),this._removeMapListeners(o)},removeFrom:function(t){return this.zoomControl&&!this.options.separate?(this._container.removeChild(this._indicator),this._map=null,this.onRemove(t),this):o.Control.prototype.removeFrom.call(this,t)},addLoader:function(o){if(this._dataLoaders[o]=!0,this.options.delayIndicator&&!this.delayIndicatorTimeout){var t=this
        this.delayIndicatorTimeout=setTimeout(function(){t.updateIndicator(),t.delayIndicatorTimeout=null},this.options.delayIndicator)}else this.updateIndicator()},removeLoader:function(o){delete this._dataLoaders[o],this.updateIndicator(),this.options.delayIndicator&&this.delayIndicatorTimeout&&!this.isLoading()&&(clearTimeout(this.delayIndicatorTimeout),this.delayIndicatorTimeout=null)},updateIndicator:function(){this.isLoading()?this._showIndicator():this._hideIndicator()},isLoading:function(){return this._countLoaders()>0},_countLoaders:function(){var o,t=0
        for(o in this._dataLoaders)this._dataLoaders.hasOwnProperty(o)&&t++
        return t},_showIndicator:function(){o.DomUtil.addClass(this._indicator,"is-loading"),this.options.separate||(this.zoomControl instanceof o.Control.Zoom?o.DomUtil.removeClass(this._getLastControlButton(),"leaflet-bar-part-bottom"):"function"==typeof o.Control.Zoomslider&&this.zoomControl instanceof o.Control.Zoomslider&&o.DomUtil.removeClass(this.zoomControl._ui.zoomOut,"leaflet-bar-part-bottom"))},_hideIndicator:function(){o.DomUtil.removeClass(this._indicator,"is-loading"),this.options.separate||(this.zoomControl instanceof o.Control.Zoom?o.DomUtil.addClass(this._getLastControlButton(),"leaflet-bar-part-bottom"):"function"==typeof o.Control.Zoomslider&&this.zoomControl instanceof o.Control.Zoomslider&&o.DomUtil.addClass(this.zoomControl._ui.zoomOut,"leaflet-bar-part-bottom"))},_getLastControlButton:function(){for(var o=this.zoomControl._container,t=o.children.length-1
        t>0
        ){var n=o.children[t]
            if(this._indicator!==n&&0!==n.offsetWidth&&0!==n.offsetHeight)break
            t--}return o.children[t]},_handleLoading:function(o){this.addLoader(this.getEventId(o))},_handleBaseLayerChange:function(t){var n=this
        t.layer&&t.layer.eachLayer&&"function"==typeof t.layer.eachLayer?t.layer.eachLayer(function(o){n._handleBaseLayerChange({layer:o})}):o.TileLayer.Canvas&&t.layer instanceof o.TileLayer.Canvas||n._handleLoading(t)},_handleLoad:function(o){this.removeLoader(this.getEventId(o))},getEventId:function(o){return o.id?o.id:o.layer?o.layer._leaflet_id:o.target._leaflet_id},_layerAdd:function(o){if(o.layer&&o.layer.on)try{o.layer.on({loading:this._handleLoading,load:this._handleLoad},this)}catch(n){t.warn("L.Control.Loading: Tried and failed to add  event handlers to layer",o.layer),t.warn("L.Control.Loading: Full details",n)}},_layerRemove:function(o){if(o.layer&&o.layer.off)try{o.layer.off({loading:this._handleLoading,load:this._handleLoad},this)}catch(n){t.warn("L.Control.Loading: Tried and failed to remove event handlers from layer",o.layer),t.warn("L.Control.Loading: Full details",n)}},_addLayerListeners:function(o){o.eachLayer(function(o){o.on&&o.on({loading:this._handleLoading,load:this._handleLoad},this)},this),o.on("layeradd",this._layerAdd,this),o.on("layerremove",this._layerRemove,this)},_removeLayerListeners:function(o){o.eachLayer(function(o){o.off&&o.off({loading:this._handleLoading,load:this._handleLoad},this)},this),o.off("layeradd",this._layerAdd,this),o.off("layerremove",this._layerRemove,this)},_addMapListeners:function(o){o.on({baselayerchange:this._handleBaseLayerChange,dataloading:this._handleLoading,dataload:this._handleLoad,layerremove:this._handleLoad},this)},_removeMapListeners:function(o){o.off({baselayerchange:this._handleBaseLayerChange,dataloading:this._handleLoading,dataload:this._handleLoad,layerremove:this._handleLoad},this)}}),o.Map.addInitHook(function(){this.options.loadingControl&&(this.loadingControl=new o.Control.Loading,this.addControl(this.loadingControl))}),o.Control.loading=function(t){return new o.Control.Loading(t)}}var t=window.console||{error:function(){},warn:function(){}}
        "function"==typeof define&&define.amd?define(["leaflet"],function(t){o(t)}):o(L)}()


},{}],6:[function(require,module,exports){
    !function(t,e,i){function n(){var e=t.L
        o.noConflict=function(){return t.L=e,this},t.L=o}var o={version:"1.0.1"}
        "object"==typeof module&&"object"==typeof module.exports?module.exports=o:"function"==typeof define&&define.amd&&define(o),"undefined"!=typeof t&&n(),o.Util={extend:function(t){var e,i,n,o
            for(i=1,n=arguments.length
                i<n
            i++){o=arguments[i]
                for(e in o)t[e]=o[e]}return t},create:Object.create||function(){function t(){}return function(e){return t.prototype=e,new t}}(),bind:function(t,e){var i=Array.prototype.slice
            if(t.bind)return t.bind.apply(t,i.call(arguments,1))
            var n=i.call(arguments,2)
            return function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)}},stamp:function(t){return t._leaflet_id=t._leaflet_id||++o.Util.lastId,t._leaflet_id},lastId:0,throttle:function(t,e,i){var n,o,s,r
            return r=function(){n=!1,o&&(s.apply(i,o),o=!1)},s=function(){n?o=arguments:(t.apply(i,arguments),setTimeout(r,e),n=!0)}},wrapNum:function(t,e,i){var n=e[1],o=e[0],s=n-o
            return t===n&&i?t:((t-o)%s+s)%s+o},falseFn:function(){return!1},formatNum:function(t,e){var i=Math.pow(10,e||5)
            return Math.round(t*i)/i},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},splitWords:function(t){return o.Util.trim(t).split(/\s+/)},setOptions:function(t,e){t.hasOwnProperty("options")||(t.options=t.options?o.Util.create(t.options):{})
            for(var i in e)t.options[i]=e[i]
            return t.options},getParamString:function(t,e,i){var n=[]
            for(var o in t)n.push(encodeURIComponent(i?o.toUpperCase():o)+"="+encodeURIComponent(t[o]))
            return(e&&e.indexOf("?")!==-1?"&":"?")+n.join("&")},template:function(t,e){return t.replace(o.Util.templateRe,function(t,n){var o=e[n]
            if(o===i)throw new Error("No value provided for variable "+t)
            return"function"==typeof o&&(o=o(e)),o})},templateRe:/\{ *([\w_\-]+) *\}/g,isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},indexOf:function(t,e){for(var i=0
            i<t.length
            i++)if(t[i]===e)return i
            return-1},emptyImageUrl:"data:image/gif
            base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="},function(){function e(e){return t["webkit"+e]||t["moz"+e]||t["ms"+e]}function i(e){var i=+new Date,o=Math.max(0,16-(i-n))
        return n=i+o,t.setTimeout(e,o)}var n=0,s=t.requestAnimationFrame||e("RequestAnimationFrame")||i,r=t.cancelAnimationFrame||e("CancelAnimationFrame")||e("CancelRequestAnimationFrame")||function(e){t.clearTimeout(e)}
        o.Util.requestAnimFrame=function(e,n,r){return r&&s===i?void e.call(n):s.call(t,o.bind(e,n))},o.Util.cancelAnimFrame=function(e){e&&r.call(t,e)}}(),o.extend=o.Util.extend,o.bind=o.Util.bind,o.stamp=o.Util.stamp,o.setOptions=o.Util.setOptions,o.Class=function(){},o.Class.extend=function(t){var e=function(){this.initialize&&this.initialize.apply(this,arguments),this.callInitHooks()},i=e.__super__=this.prototype,n=o.Util.create(i)
        n.constructor=e,e.prototype=n
        for(var s in this)this.hasOwnProperty(s)&&"prototype"!==s&&(e[s]=this[s])
        return t.statics&&(o.extend(e,t.statics),delete t.statics),t.includes&&(o.Util.extend.apply(null,[n].concat(t.includes)),delete t.includes),n.options&&(t.options=o.Util.extend(o.Util.create(n.options),t.options)),o.extend(n,t),n._initHooks=[],n.callInitHooks=function(){if(!this._initHooksCalled){i.callInitHooks&&i.callInitHooks.call(this),this._initHooksCalled=!0
            for(var t=0,e=n._initHooks.length
                t<e
            t++)n._initHooks[t].call(this)}},e},o.Class.include=function(t){return o.extend(this.prototype,t),this},o.Class.mergeOptions=function(t){return o.extend(this.prototype.options,t),this},o.Class.addInitHook=function(t){var e=Array.prototype.slice.call(arguments,1),i="function"==typeof t?t:function(){this[t].apply(this,e)}
        return this.prototype._initHooks=this.prototype._initHooks||[],this.prototype._initHooks.push(i),this},o.Evented=o.Class.extend({on:function(t,e,i){if("object"==typeof t)for(var n in t)this._on(n,t[n],e)
    else{t=o.Util.splitWords(t)
        for(var s=0,r=t.length
            s<r
        s++)this._on(t[s],e,i)}return this},off:function(t,e,i){if(t)if("object"==typeof t)for(var n in t)this._off(n,t[n],e)
    else{t=o.Util.splitWords(t)
        for(var s=0,r=t.length
            s<r
        s++)this._off(t[s],e,i)}else delete this._events
        return this},_on:function(t,e,n){this._events=this._events||{}
        var o=this._events[t]
        o||(o=[],this._events[t]=o),n===this&&(n=i)
        for(var s={fn:e,ctx:n},r=o,a=0,h=r.length
            a<h
        a++)if(r[a].fn===e&&r[a].ctx===n)return
        r.push(s),o.count++},_off:function(t,e,n){var s,r,a
        if(this._events&&(s=this._events[t])){if(!e){for(r=0,a=s.length
            r<a
            r++)s[r].fn=o.Util.falseFn
            return void delete this._events[t]}if(n===this&&(n=i),s)for(r=0,a=s.length
            r<a
            r++){var h=s[r]
                if(h.ctx===n&&h.fn===e)return h.fn=o.Util.falseFn,this._firingCount&&(this._events[t]=s=s.slice()),void s.splice(r,1)}}},fire:function(t,e,i){if(!this.listens(t,i))return this
        var n=o.Util.extend({},e,{type:t,target:this})
        if(this._events){var s=this._events[t]
            if(s){this._firingCount=this._firingCount+1||1
                for(var r=0,a=s.length
                    r<a
                r++){var h=s[r]
                    h.fn.call(h.ctx||this,n)}this._firingCount--}}return i&&this._propagateEvent(n),this},listens:function(t,e){var i=this._events&&this._events[t]
        if(i&&i.length)return!0
        if(e)for(var n in this._eventParents)if(this._eventParents[n].listens(t,e))return!0
        return!1},once:function(t,e,i){if("object"==typeof t){for(var n in t)this.once(n,t[n],e)
        return this}var s=o.bind(function(){this.off(t,e,i).off(t,s,i)},this)
        return this.on(t,e,i).on(t,s,i)},addEventParent:function(t){return this._eventParents=this._eventParents||{},this._eventParents[o.stamp(t)]=t,this},removeEventParent:function(t){return this._eventParents&&delete this._eventParents[o.stamp(t)],this},_propagateEvent:function(t){for(var e in this._eventParents)this._eventParents[e].fire(t.type,o.extend({layer:t.target},t),!0)}})
    var s=o.Evented.prototype
    s.addEventListener=s.on,s.removeEventListener=s.clearAllEventListeners=s.off,s.addOneTimeEventListener=s.once,s.fireEvent=s.fire,s.hasEventListeners=s.listens,o.Mixin={Events:s},function(){var i=navigator.userAgent.toLowerCase(),n=e.documentElement,s="ActiveXObject"in t,r=i.indexOf("webkit")!==-1,a=i.indexOf("phantom")!==-1,h=i.search("android [23]")!==-1,l=i.indexOf("chrome")!==-1,u=i.indexOf("gecko")!==-1&&!r&&!t.opera&&!s,c=0===navigator.platform.indexOf("Win"),d="undefined"!=typeof orientation||i.indexOf("mobile")!==-1,_=!t.PointerEvent&&t.MSPointerEvent,m=t.PointerEvent||_,p=s&&"transition"in n.style,f="WebKitCSSMatrix"in t&&"m11"in new t.WebKitCSSMatrix&&!h,g="MozPerspective"in n.style,v="OTransition"in n.style,y=!t.L_NO_TOUCH&&(m||"ontouchstart"in t||t.DocumentTouch&&e instanceof t.DocumentTouch)
        o.Browser={ie:s,ielt9:s&&!e.addEventListener,edge:"msLaunchUri"in navigator&&!("documentMode"in e),webkit:r,gecko:u,android:i.indexOf("android")!==-1,android23:h,chrome:l,safari:!l&&i.indexOf("safari")!==-1,win:c,ie3d:p,webkit3d:f,gecko3d:g,opera12:v,any3d:!t.L_DISABLE_3D&&(p||f||g)&&!v&&!a,mobile:d,mobileWebkit:d&&r,mobileWebkit3d:d&&f,mobileOpera:d&&t.opera,mobileGecko:d&&u,touch:!!y,msPointer:!!_,pointer:!!m,retina:(t.devicePixelRatio||t.screen.deviceXDPI/t.screen.logicalXDPI)>1}}(),o.Point=function(t,e,i){this.x=i?Math.round(t):t,this.y=i?Math.round(e):e},o.Point.prototype={clone:function(){return new o.Point(this.x,this.y)},add:function(t){return this.clone()._add(o.point(t))},_add:function(t){return this.x+=t.x,this.y+=t.y,this},subtract:function(t){return this.clone()._subtract(o.point(t))},_subtract:function(t){return this.x-=t.x,this.y-=t.y,this},divideBy:function(t){return this.clone()._divideBy(t)},_divideBy:function(t){return this.x/=t,this.y/=t,this},multiplyBy:function(t){return this.clone()._multiplyBy(t)},_multiplyBy:function(t){return this.x*=t,this.y*=t,this},scaleBy:function(t){return new o.Point(this.x*t.x,this.y*t.y)},unscaleBy:function(t){return new o.Point(this.x/t.x,this.y/t.y)},round:function(){return this.clone()._round()},_round:function(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this},floor:function(){return this.clone()._floor()},_floor:function(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this},ceil:function(){return this.clone()._ceil()},_ceil:function(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this},distanceTo:function(t){t=o.point(t)
        var e=t.x-this.x,i=t.y-this.y
        return Math.sqrt(e*e+i*i)},equals:function(t){return t=o.point(t),t.x===this.x&&t.y===this.y},contains:function(t){return t=o.point(t),Math.abs(t.x)<=Math.abs(this.x)&&Math.abs(t.y)<=Math.abs(this.y)},toString:function(){return"Point("+o.Util.formatNum(this.x)+", "+o.Util.formatNum(this.y)+")"}},o.point=function(t,e,n){return t instanceof o.Point?t:o.Util.isArray(t)?new o.Point(t[0],t[1]):t===i||null===t?t:"object"==typeof t&&"x"in t&&"y"in t?new o.Point(t.x,t.y):new o.Point(t,e,n)},o.Bounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length
        n<o
        n++)this.extend(i[n])},o.Bounds.prototype={extend:function(t){return t=o.point(t),this.min||this.max?(this.min.x=Math.min(t.x,this.min.x),this.max.x=Math.max(t.x,this.max.x),this.min.y=Math.min(t.y,this.min.y),this.max.y=Math.max(t.y,this.max.y)):(this.min=t.clone(),this.max=t.clone()),this},getCenter:function(t){return new o.Point((this.min.x+this.max.x)/2,(this.min.y+this.max.y)/2,t)},getBottomLeft:function(){return new o.Point(this.min.x,this.max.y)},getTopRight:function(){return new o.Point(this.max.x,this.min.y)},getSize:function(){return this.max.subtract(this.min)},contains:function(t){var e,i
        return t="number"==typeof t[0]||t instanceof o.Point?o.point(t):o.bounds(t),t instanceof o.Bounds?(e=t.min,i=t.max):e=i=t,e.x>=this.min.x&&i.x<=this.max.x&&e.y>=this.min.y&&i.y<=this.max.y},intersects:function(t){t=o.bounds(t)
        var e=this.min,i=this.max,n=t.min,s=t.max,r=s.x>=e.x&&n.x<=i.x,a=s.y>=e.y&&n.y<=i.y
        return r&&a},overlaps:function(t){t=o.bounds(t)
        var e=this.min,i=this.max,n=t.min,s=t.max,r=s.x>e.x&&n.x<i.x,a=s.y>e.y&&n.y<i.y
        return r&&a},isValid:function(){return!(!this.min||!this.max)}},o.bounds=function(t,e){return!t||t instanceof o.Bounds?t:new o.Bounds(t,e)},o.Transformation=function(t,e,i,n){this._a=t,this._b=e,this._c=i,this._d=n},o.Transformation.prototype={transform:function(t,e){return this._transform(t.clone(),e)},_transform:function(t,e){return e=e||1,t.x=e*(this._a*t.x+this._b),t.y=e*(this._c*t.y+this._d),t},untransform:function(t,e){return e=e||1,new o.Point((t.x/e-this._b)/this._a,(t.y/e-this._d)/this._c)}},o.DomUtil={get:function(t){return"string"==typeof t?e.getElementById(t):t},getStyle:function(t,i){var n=t.style[i]||t.currentStyle&&t.currentStyle[i]
        if((!n||"auto"===n)&&e.defaultView){var o=e.defaultView.getComputedStyle(t,null)
            n=o?o[i]:null}return"auto"===n?null:n},create:function(t,i,n){var o=e.createElement(t)
        return o.className=i||"",n&&n.appendChild(o),o},remove:function(t){var e=t.parentNode
        e&&e.removeChild(t)},empty:function(t){for(
        t.firstChild
    )t.removeChild(t.firstChild)},toFront:function(t){t.parentNode.appendChild(t)},toBack:function(t){var e=t.parentNode
        e.insertBefore(t,e.firstChild)},hasClass:function(t,e){if(t.classList!==i)return t.classList.contains(e)
        var n=o.DomUtil.getClass(t)
        return n.length>0&&new RegExp("(^|\\s)"+e+"(\\s|$)").test(n)},addClass:function(t,e){if(t.classList!==i)for(var n=o.Util.splitWords(e),s=0,r=n.length
        s<r
        s++)t.classList.add(n[s])
        else if(!o.DomUtil.hasClass(t,e)){var a=o.DomUtil.getClass(t)
            o.DomUtil.setClass(t,(a?a+" ":"")+e)}},removeClass:function(t,e){t.classList!==i?t.classList.remove(e):o.DomUtil.setClass(t,o.Util.trim((" "+o.DomUtil.getClass(t)+" ").replace(" "+e+" "," ")))},setClass:function(t,e){t.className.baseVal===i?t.className=e:t.className.baseVal=e},getClass:function(t){return t.className.baseVal===i?t.className:t.className.baseVal},setOpacity:function(t,e){"opacity"in t.style?t.style.opacity=e:"filter"in t.style&&o.DomUtil._setOpacityIE(t,e)},_setOpacityIE:function(t,e){var i=!1,n="DXImageTransform.Microsoft.Alpha"
        try{i=t.filters.item(n)}catch(t){if(1===e)return}e=Math.round(100*e),i?(i.Enabled=100!==e,i.Opacity=e):t.style.filter+=" progid:"+n+"(opacity="+e+")"},testProp:function(t){for(var i=e.documentElement.style,n=0
        n<t.length
        n++)if(t[n]in i)return t[n]
        return!1},setTransform:function(t,e,i){var n=e||new o.Point(0,0)
        t.style[o.DomUtil.TRANSFORM]=(o.Browser.ie3d?"translate("+n.x+"px,"+n.y+"px)":"translate3d("+n.x+"px,"+n.y+"px,0)")+(i?" scale("+i+")":"")},setPosition:function(t,e){t._leaflet_pos=e,o.Browser.any3d?o.DomUtil.setTransform(t,e):(t.style.left=e.x+"px",t.style.top=e.y+"px")},getPosition:function(t){return t._leaflet_pos||new o.Point(0,0)}},function(){o.DomUtil.TRANSFORM=o.DomUtil.testProp(["transform","WebkitTransform","OTransform","MozTransform","msTransform"])
        var i=o.DomUtil.TRANSITION=o.DomUtil.testProp(["webkitTransition","transition","OTransition","MozTransition","msTransition"])
        if(o.DomUtil.TRANSITION_END="webkitTransition"===i||"OTransition"===i?i+"End":"transitionend","onselectstart"in e)o.DomUtil.disableTextSelection=function(){o.DomEvent.on(t,"selectstart",o.DomEvent.preventDefault)},o.DomUtil.enableTextSelection=function(){o.DomEvent.off(t,"selectstart",o.DomEvent.preventDefault)}
        else{var n=o.DomUtil.testProp(["userSelect","WebkitUserSelect","OUserSelect","MozUserSelect","msUserSelect"])
            o.DomUtil.disableTextSelection=function(){if(n){var t=e.documentElement.style
                this._userSelect=t[n],t[n]="none"}},o.DomUtil.enableTextSelection=function(){n&&(e.documentElement.style[n]=this._userSelect,delete this._userSelect)}}o.DomUtil.disableImageDrag=function(){o.DomEvent.on(t,"dragstart",o.DomEvent.preventDefault)},o.DomUtil.enableImageDrag=function(){o.DomEvent.off(t,"dragstart",o.DomEvent.preventDefault)},o.DomUtil.preventOutline=function(e){for(
            e.tabIndex===-1
        )e=e.parentNode
            e&&e.style&&(o.DomUtil.restoreOutline(),this._outlineElement=e,this._outlineStyle=e.style.outline,e.style.outline="none",o.DomEvent.on(t,"keydown",o.DomUtil.restoreOutline,this))},o.DomUtil.restoreOutline=function(){this._outlineElement&&(this._outlineElement.style.outline=this._outlineStyle,delete this._outlineElement,delete this._outlineStyle,o.DomEvent.off(t,"keydown",o.DomUtil.restoreOutline,this))}}(),o.LatLng=function(t,e,n){if(isNaN(t)||isNaN(e))throw new Error("Invalid LatLng object: ("+t+", "+e+")")
        this.lat=+t,this.lng=+e,n!==i&&(this.alt=+n)},o.LatLng.prototype={equals:function(t,e){if(!t)return!1
        t=o.latLng(t)
        var n=Math.max(Math.abs(this.lat-t.lat),Math.abs(this.lng-t.lng))
        return n<=(e===i?1e-9:e)},toString:function(t){return"LatLng("+o.Util.formatNum(this.lat,t)+", "+o.Util.formatNum(this.lng,t)+")"},distanceTo:function(t){return o.CRS.Earth.distance(this,o.latLng(t))},wrap:function(){return o.CRS.Earth.wrapLatLng(this)},toBounds:function(t){var e=180*t/40075017,i=e/Math.cos(Math.PI/180*this.lat)
        return o.latLngBounds([this.lat-e,this.lng-i],[this.lat+e,this.lng+i])},clone:function(){return new o.LatLng(this.lat,this.lng,this.alt)}},o.latLng=function(t,e,n){return t instanceof o.LatLng?t:o.Util.isArray(t)&&"object"!=typeof t[0]?3===t.length?new o.LatLng(t[0],t[1],t[2]):2===t.length?new o.LatLng(t[0],t[1]):null:t===i||null===t?t:"object"==typeof t&&"lat"in t?new o.LatLng(t.lat,"lng"in t?t.lng:t.lon,t.alt):e===i?null:new o.LatLng(t,e,n)},o.LatLngBounds=function(t,e){if(t)for(var i=e?[t,e]:t,n=0,o=i.length
        n<o
        n++)this.extend(i[n])},o.LatLngBounds.prototype={extend:function(t){var e,i,n=this._southWest,s=this._northEast
        if(t instanceof o.LatLng)e=t,i=t
        else{if(!(t instanceof o.LatLngBounds))return t?this.extend(o.latLng(t)||o.latLngBounds(t)):this
            if(e=t._southWest,i=t._northEast,!e||!i)return this}return n||s?(n.lat=Math.min(e.lat,n.lat),n.lng=Math.min(e.lng,n.lng),s.lat=Math.max(i.lat,s.lat),s.lng=Math.max(i.lng,s.lng)):(this._southWest=new o.LatLng(e.lat,e.lng),this._northEast=new o.LatLng(i.lat,i.lng)),this},pad:function(t){var e=this._southWest,i=this._northEast,n=Math.abs(e.lat-i.lat)*t,s=Math.abs(e.lng-i.lng)*t
        return new o.LatLngBounds(new o.LatLng(e.lat-n,e.lng-s),new o.LatLng(i.lat+n,i.lng+s))},getCenter:function(){return new o.LatLng((this._southWest.lat+this._northEast.lat)/2,(this._southWest.lng+this._northEast.lng)/2)},getSouthWest:function(){return this._southWest},getNorthEast:function(){return this._northEast},getNorthWest:function(){return new o.LatLng(this.getNorth(),this.getWest())},getSouthEast:function(){return new o.LatLng(this.getSouth(),this.getEast())},getWest:function(){return this._southWest.lng},getSouth:function(){return this._southWest.lat},getEast:function(){return this._northEast.lng},getNorth:function(){return this._northEast.lat},contains:function(t){t="number"==typeof t[0]||t instanceof o.LatLng?o.latLng(t):o.latLngBounds(t)
        var e,i,n=this._southWest,s=this._northEast
        return t instanceof o.LatLngBounds?(e=t.getSouthWest(),i=t.getNorthEast()):e=i=t,e.lat>=n.lat&&i.lat<=s.lat&&e.lng>=n.lng&&i.lng<=s.lng},intersects:function(t){t=o.latLngBounds(t)
        var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),r=s.lat>=e.lat&&n.lat<=i.lat,a=s.lng>=e.lng&&n.lng<=i.lng
        return r&&a},overlaps:function(t){t=o.latLngBounds(t)
        var e=this._southWest,i=this._northEast,n=t.getSouthWest(),s=t.getNorthEast(),r=s.lat>e.lat&&n.lat<i.lat,a=s.lng>e.lng&&n.lng<i.lng
        return r&&a},toBBoxString:function(){return[this.getWest(),this.getSouth(),this.getEast(),this.getNorth()].join(",")},equals:function(t){return!!t&&(t=o.latLngBounds(t),this._southWest.equals(t.getSouthWest())&&this._northEast.equals(t.getNorthEast()))},isValid:function(){return!(!this._southWest||!this._northEast)}},o.latLngBounds=function(t,e){return t instanceof o.LatLngBounds?t:new o.LatLngBounds(t,e)},o.Projection={},o.Projection.LonLat={project:function(t){return new o.Point(t.lng,t.lat)},unproject:function(t){return new o.LatLng(t.y,t.x)},bounds:o.bounds([-180,-90],[180,90])},o.Projection.SphericalMercator={R:6378137,MAX_LATITUDE:85.0511287798,project:function(t){var e=Math.PI/180,i=this.MAX_LATITUDE,n=Math.max(Math.min(i,t.lat),-i),s=Math.sin(n*e)
        return new o.Point(this.R*t.lng*e,this.R*Math.log((1+s)/(1-s))/2)},unproject:function(t){var e=180/Math.PI
        return new o.LatLng((2*Math.atan(Math.exp(t.y/this.R))-Math.PI/2)*e,t.x*e/this.R)},bounds:function(){var t=6378137*Math.PI
        return o.bounds([-t,-t],[t,t])}()},o.CRS={latLngToPoint:function(t,e){var i=this.projection.project(t),n=this.scale(e)
        return this.transformation._transform(i,n)},pointToLatLng:function(t,e){var i=this.scale(e),n=this.transformation.untransform(t,i)
        return this.projection.unproject(n)},project:function(t){return this.projection.project(t)},unproject:function(t){return this.projection.unproject(t)},scale:function(t){return 256*Math.pow(2,t)},zoom:function(t){return Math.log(t/256)/Math.LN2},getProjectedBounds:function(t){if(this.infinite)return null
        var e=this.projection.bounds,i=this.scale(t),n=this.transformation.transform(e.min,i),s=this.transformation.transform(e.max,i)
        return o.bounds(n,s)},infinite:!1,wrapLatLng:function(t){var e=this.wrapLng?o.Util.wrapNum(t.lng,this.wrapLng,!0):t.lng,i=this.wrapLat?o.Util.wrapNum(t.lat,this.wrapLat,!0):t.lat,n=t.alt
        return o.latLng(i,e,n)}},o.CRS.Simple=o.extend({},o.CRS,{projection:o.Projection.LonLat,transformation:new o.Transformation(1,0,-1,0),scale:function(t){return Math.pow(2,t)},zoom:function(t){return Math.log(t)/Math.LN2},distance:function(t,e){var i=e.lng-t.lng,n=e.lat-t.lat
        return Math.sqrt(i*i+n*n)},infinite:!0}),o.CRS.Earth=o.extend({},o.CRS,{wrapLng:[-180,180],R:6371e3,distance:function(t,e){var i=Math.PI/180,n=t.lat*i,o=e.lat*i,s=Math.sin(n)*Math.sin(o)+Math.cos(n)*Math.cos(o)*Math.cos((e.lng-t.lng)*i)
        return this.R*Math.acos(Math.min(s,1))}}),o.CRS.EPSG3857=o.extend({},o.CRS.Earth,{code:"EPSG:3857",projection:o.Projection.SphericalMercator,transformation:function(){var t=.5/(Math.PI*o.Projection.SphericalMercator.R)
        return new o.Transformation(t,.5,-t,.5)}()}),o.CRS.EPSG900913=o.extend({},o.CRS.EPSG3857,{code:"EPSG:900913"}),o.CRS.EPSG4326=o.extend({},o.CRS.Earth,{code:"EPSG:4326",projection:o.Projection.LonLat,transformation:new o.Transformation(1/180,1,-1/180,.5)}),o.Map=o.Evented.extend({options:{crs:o.CRS.EPSG3857,center:i,zoom:i,minZoom:i,maxZoom:i,layers:[],maxBounds:i,renderer:i,fadeAnimation:!0,markerZoomAnimation:!0,transform3DLimit:8388608,zoomSnap:1,zoomDelta:1,trackResize:!0},initialize:function(t,e){e=o.setOptions(this,e),this._initContainer(t),this._initLayout(),this._onResize=o.bind(this._onResize,this),this._initEvents(),e.maxBounds&&this.setMaxBounds(e.maxBounds),e.zoom!==i&&(this._zoom=this._limitZoom(e.zoom)),e.center&&e.zoom!==i&&this.setView(o.latLng(e.center),e.zoom,{reset:!0}),this._handlers=[],this._layers={},this._zoomBoundLayers={},this._sizeChanged=!0,this.callInitHooks(),this._addLayers(this.options.layers)},setView:function(t,e){return e=e===i?this.getZoom():e,this._resetView(o.latLng(t),e),this},setZoom:function(t,e){return this._loaded?this.setView(this.getCenter(),t,{zoom:e}):(this._zoom=t,this)},zoomIn:function(t,e){return t=t||(o.Browser.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom+t,e)},zoomOut:function(t,e){return t=t||(o.Browser.any3d?this.options.zoomDelta:1),this.setZoom(this._zoom-t,e)},setZoomAround:function(t,e,i){var n=this.getZoomScale(e),s=this.getSize().divideBy(2),r=t instanceof o.Point?t:this.latLngToContainerPoint(t),a=r.subtract(s).multiplyBy(1-1/n),h=this.containerPointToLatLng(s.add(a))
        return this.setView(h,e,{zoom:i})},_getBoundsCenterZoom:function(t,e){e=e||{},t=t.getBounds?t.getBounds():o.latLngBounds(t)
        var i=o.point(e.paddingTopLeft||e.padding||[0,0]),n=o.point(e.paddingBottomRight||e.padding||[0,0]),s=this.getBoundsZoom(t,!1,i.add(n))
        s="number"==typeof e.maxZoom?Math.min(e.maxZoom,s):s
        var r=n.subtract(i).divideBy(2),a=this.project(t.getSouthWest(),s),h=this.project(t.getNorthEast(),s),l=this.unproject(a.add(h).divideBy(2).add(r),s)
        return{center:l,zoom:s}},fitBounds:function(t,e){if(t=o.latLngBounds(t),!t.isValid())throw new Error("Bounds are not valid.")
        var i=this._getBoundsCenterZoom(t,e)
        return this.setView(i.center,i.zoom,e)},fitWorld:function(t){return this.fitBounds([[-90,-180],[90,180]],t)},panTo:function(t,e){return this.setView(t,this._zoom,{pan:e})},panBy:function(t){return this.fire("movestart"),this._rawPanBy(o.point(t)),this.fire("move"),this.fire("moveend")},setMaxBounds:function(t){return t=o.latLngBounds(t),t.isValid()?(this.options.maxBounds&&this.off("moveend",this._panInsideMaxBounds),this.options.maxBounds=t,this._loaded&&this._panInsideMaxBounds(),this.on("moveend",this._panInsideMaxBounds)):(this.options.maxBounds=null,this.off("moveend",this._panInsideMaxBounds))},setMinZoom:function(t){return this.options.minZoom=t,this._loaded&&this.getZoom()<this.options.minZoom?this.setZoom(t):this},setMaxZoom:function(t){return this.options.maxZoom=t,this._loaded&&this.getZoom()>this.options.maxZoom?this.setZoom(t):this},panInsideBounds:function(t,e){this._enforcingBounds=!0
        var i=this.getCenter(),n=this._limitCenter(i,this._zoom,o.latLngBounds(t))
        return i.equals(n)||this.panTo(n,e),this._enforcingBounds=!1,this},invalidateSize:function(t){if(!this._loaded)return this
        t=o.extend({animate:!1,pan:!0},t===!0?{animate:!0}:t)
        var e=this.getSize()
        this._sizeChanged=!0,this._lastCenter=null
        var i=this.getSize(),n=e.divideBy(2).round(),s=i.divideBy(2).round(),r=n.subtract(s)
        return r.x||r.y?(t.animate&&t.pan?this.panBy(r):(t.pan&&this._rawPanBy(r),this.fire("move"),t.debounceMoveend?(clearTimeout(this._sizeTimer),this._sizeTimer=setTimeout(o.bind(this.fire,this,"moveend"),200)):this.fire("moveend")),this.fire("resize",{oldSize:e,newSize:i})):this},stop:function(){return this.setZoom(this._limitZoom(this._zoom)),this.options.zoomSnap||this.fire("viewreset"),this._stop()},addHandler:function(t,e){if(!e)return this
        var i=this[t]=new e(this)
        return this._handlers.push(i),this.options[t]&&i.enable(),this},remove:function(){if(this._initEvents(!0),this._containerId!==this._container._leaflet_id)throw new Error("Map container is being reused by another instance")
        try{delete this._container._leaflet_id,delete this._containerId}catch(t){this._container._leaflet_id=i,this._containerId=i}o.DomUtil.remove(this._mapPane),this._clearControlPos&&this._clearControlPos(),this._clearHandlers(),this._loaded&&this.fire("unload")
        for(var t in this._layers)this._layers[t].remove()
        return this},createPane:function(t,e){var i="leaflet-pane"+(t?" leaflet-"+t.replace("Pane","")+"-pane":""),n=o.DomUtil.create("div",i,e||this._mapPane)
        return t&&(this._panes[t]=n),n},getCenter:function(){return this._checkIfLoaded(),this._lastCenter&&!this._moved()?this._lastCenter:this.layerPointToLatLng(this._getCenterLayerPoint())},getZoom:function(){return this._zoom},getBounds:function(){var t=this.getPixelBounds(),e=this.unproject(t.getBottomLeft()),i=this.unproject(t.getTopRight())
        return new o.LatLngBounds(e,i)},getMinZoom:function(){return this.options.minZoom===i?this._layersMinZoom||0:this.options.minZoom},getMaxZoom:function(){return this.options.maxZoom===i?this._layersMaxZoom===i?1/0:this._layersMaxZoom:this.options.maxZoom},getBoundsZoom:function(t,e,i){t=o.latLngBounds(t),i=o.point(i||[0,0])
        var n=this.getZoom()||0,s=this.getMinZoom(),r=this.getMaxZoom(),a=t.getNorthWest(),h=t.getSouthEast(),l=this.getSize().subtract(i),u=this.project(h,n).subtract(this.project(a,n)),c=o.Browser.any3d?this.options.zoomSnap:1,d=Math.min(l.x/u.x,l.y/u.y)
        return n=this.getScaleZoom(d,n),c&&(n=Math.round(n/(c/100))*(c/100),n=e?Math.ceil(n/c)*c:Math.floor(n/c)*c),Math.max(s,Math.min(r,n))},getSize:function(){return this._size&&!this._sizeChanged||(this._size=new o.Point(this._container.clientWidth,this._container.clientHeight),this._sizeChanged=!1),this._size.clone()},getPixelBounds:function(t,e){var i=this._getTopLeftPoint(t,e)
        return new o.Bounds(i,i.add(this.getSize()))},getPixelOrigin:function(){return this._checkIfLoaded(),this._pixelOrigin},getPixelWorldBounds:function(t){return this.options.crs.getProjectedBounds(t===i?this.getZoom():t)},getPane:function(t){return"string"==typeof t?this._panes[t]:t},getPanes:function(){return this._panes},getContainer:function(){return this._container},getZoomScale:function(t,e){var n=this.options.crs
        return e=e===i?this._zoom:e,n.scale(t)/n.scale(e)},getScaleZoom:function(t,e){var n=this.options.crs
        e=e===i?this._zoom:e
        var o=n.zoom(t*n.scale(e))
        return isNaN(o)?1/0:o},project:function(t,e){return e=e===i?this._zoom:e,this.options.crs.latLngToPoint(o.latLng(t),e)},unproject:function(t,e){return e=e===i?this._zoom:e,this.options.crs.pointToLatLng(o.point(t),e)},layerPointToLatLng:function(t){var e=o.point(t).add(this.getPixelOrigin())
        return this.unproject(e)},latLngToLayerPoint:function(t){var e=this.project(o.latLng(t))._round()
        return e._subtract(this.getPixelOrigin())},wrapLatLng:function(t){return this.options.crs.wrapLatLng(o.latLng(t))},distance:function(t,e){return this.options.crs.distance(o.latLng(t),o.latLng(e))},containerPointToLayerPoint:function(t){return o.point(t).subtract(this._getMapPanePos())},layerPointToContainerPoint:function(t){return o.point(t).add(this._getMapPanePos())},containerPointToLatLng:function(t){var e=this.containerPointToLayerPoint(o.point(t))
        return this.layerPointToLatLng(e)},latLngToContainerPoint:function(t){return this.layerPointToContainerPoint(this.latLngToLayerPoint(o.latLng(t)))},mouseEventToContainerPoint:function(t){return o.DomEvent.getMousePosition(t,this._container)},mouseEventToLayerPoint:function(t){return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))},mouseEventToLatLng:function(t){return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))},_initContainer:function(t){var e=this._container=o.DomUtil.get(t)
        if(!e)throw new Error("Map container not found.")
        if(e._leaflet_id)throw new Error("Map container is already initialized.")
        o.DomEvent.addListener(e,"scroll",this._onScroll,this),this._containerId=o.Util.stamp(e)},_initLayout:function(){var t=this._container
        this._fadeAnimated=this.options.fadeAnimation&&o.Browser.any3d,o.DomUtil.addClass(t,"leaflet-container"+(o.Browser.touch?" leaflet-touch":"")+(o.Browser.retina?" leaflet-retina":"")+(o.Browser.ielt9?" leaflet-oldie":"")+(o.Browser.safari?" leaflet-safari":"")+(this._fadeAnimated?" leaflet-fade-anim":""))
        var e=o.DomUtil.getStyle(t,"position")
        "absolute"!==e&&"relative"!==e&&"fixed"!==e&&(t.style.position="relative"),this._initPanes(),this._initControlPos&&this._initControlPos()},_initPanes:function(){var t=this._panes={}
        this._paneRenderers={},this._mapPane=this.createPane("mapPane",this._container),o.DomUtil.setPosition(this._mapPane,new o.Point(0,0)),this.createPane("tilePane"),this.createPane("shadowPane"),this.createPane("overlayPane"),this.createPane("markerPane"),this.createPane("tooltipPane"),this.createPane("popupPane"),this.options.markerZoomAnimation||(o.DomUtil.addClass(t.markerPane,"leaflet-zoom-hide"),o.DomUtil.addClass(t.shadowPane,"leaflet-zoom-hide"))},_resetView:function(t,e){o.DomUtil.setPosition(this._mapPane,new o.Point(0,0))
        var i=!this._loaded
        this._loaded=!0,e=this._limitZoom(e),this.fire("viewprereset")
        var n=this._zoom!==e
        this._moveStart(n)._move(t,e)._moveEnd(n),this.fire("viewreset"),i&&this.fire("load")},_moveStart:function(t){return t&&this.fire("zoomstart"),this.fire("movestart")},_move:function(t,e,n){e===i&&(e=this._zoom)
        var o=this._zoom!==e
        return this._zoom=e,this._lastCenter=t,this._pixelOrigin=this._getNewPixelOrigin(t),(o||n&&n.pinch)&&this.fire("zoom",n),this.fire("move",n)},_moveEnd:function(t){return t&&this.fire("zoomend"),this.fire("moveend")},_stop:function(){return o.Util.cancelAnimFrame(this._flyToFrame),this._panAnim&&this._panAnim.stop(),this},_rawPanBy:function(t){o.DomUtil.setPosition(this._mapPane,this._getMapPanePos().subtract(t))},_getZoomSpan:function(){return this.getMaxZoom()-this.getMinZoom()},_panInsideMaxBounds:function(){this._enforcingBounds||this.panInsideBounds(this.options.maxBounds)},_checkIfLoaded:function(){if(!this._loaded)throw new Error("Set map center and zoom first.")},_initEvents:function(e){if(o.DomEvent){this._targets={},this._targets[o.stamp(this._container)]=this
        var i=e?"off":"on"
        o.DomEvent[i](this._container,"click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress",this._handleDOMEvent,this),this.options.trackResize&&o.DomEvent[i](t,"resize",this._onResize,this),o.Browser.any3d&&this.options.transform3DLimit&&this[i]("moveend",this._onMoveEnd)}},_onResize:function(){o.Util.cancelAnimFrame(this._resizeRequest),this._resizeRequest=o.Util.requestAnimFrame(function(){this.invalidateSize({debounceMoveend:!0})},this)},_onScroll:function(){this._container.scrollTop=0,this._container.scrollLeft=0},_onMoveEnd:function(){var t=this._getMapPanePos()
        Math.max(Math.abs(t.x),Math.abs(t.y))>=this.options.transform3DLimit&&this._resetView(this.getCenter(),this.getZoom())},_findEventTargets:function(t,e){for(var i,n=[],s="mouseout"===e||"mouseover"===e,r=t.target||t.srcElement,a=!1
        r
        ){if(i=this._targets[o.stamp(r)],i&&("click"===e||"preclick"===e)&&!t._simulated&&this._draggableMoved(i)){a=!0
            break}if(i&&i.listens(e,!0)){if(s&&!o.DomEvent._isExternalTarget(r,t))break
            if(n.push(i),s)break}if(r===this._container)break
            r=r.parentNode}return n.length||a||s||!o.DomEvent._isExternalTarget(r,t)||(n=[this]),n},_handleDOMEvent:function(t){if(this._loaded&&!o.DomEvent._skipped(t)){var e="keypress"===t.type&&13===t.keyCode?"click":t.type
        "mousedown"===e&&o.DomUtil.preventOutline(t.target||t.srcElement),this._fireDOMEvent(t,e)}},_fireDOMEvent:function(t,e,i){if("click"===t.type){var n=o.Util.extend({},t)
        n.type="preclick",this._fireDOMEvent(n,n.type,i)}if(!t._stopped&&(i=(i||[]).concat(this._findEventTargets(t,e)),i.length)){var s=i[0]
        "contextmenu"===e&&s.listens(e,!0)&&o.DomEvent.preventDefault(t)
        var r={originalEvent:t}
        if("keypress"!==t.type){var a=s instanceof o.Marker
            r.containerPoint=a?this.latLngToContainerPoint(s.getLatLng()):this.mouseEventToContainerPoint(t),r.layerPoint=this.containerPointToLayerPoint(r.containerPoint),r.latlng=a?s.getLatLng():this.layerPointToLatLng(r.layerPoint)

        }for(var h=0
            h<i.length
        h++)if(i[h].fire(e,r,!0),r.originalEvent._stopped||i[h].options.nonBubblingEvents&&o.Util.indexOf(i[h].options.nonBubblingEvents,e)!==-1)return}},_draggableMoved:function(t){return t=t.dragging&&t.dragging.enabled()?t:this,t.dragging&&t.dragging.moved()||this.boxZoom&&this.boxZoom.moved()},_clearHandlers:function(){for(var t=0,e=this._handlers.length
        t<e
        t++)this._handlers[t].disable()},whenReady:function(t,e){return this._loaded?t.call(e||this,{target:this}):this.on("load",t,e),this},_getMapPanePos:function(){return o.DomUtil.getPosition(this._mapPane)||new o.Point(0,0)},_moved:function(){var t=this._getMapPanePos()
        return t&&!t.equals([0,0])},_getTopLeftPoint:function(t,e){var n=t&&e!==i?this._getNewPixelOrigin(t,e):this.getPixelOrigin()
        return n.subtract(this._getMapPanePos())},_getNewPixelOrigin:function(t,e){var i=this.getSize()._divideBy(2)
        return this.project(t,e)._subtract(i)._add(this._getMapPanePos())._round()},_latLngToNewLayerPoint:function(t,e,i){var n=this._getNewPixelOrigin(i,e)
        return this.project(t,e)._subtract(n)},_getCenterLayerPoint:function(){return this.containerPointToLayerPoint(this.getSize()._divideBy(2))},_getCenterOffset:function(t){return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())},_limitCenter:function(t,e,i){if(!i)return t
        var n=this.project(t,e),s=this.getSize().divideBy(2),r=new o.Bounds(n.subtract(s),n.add(s)),a=this._getBoundsOffset(r,i,e)
        return a.round().equals([0,0])?t:this.unproject(n.add(a),e)},_limitOffset:function(t,e){if(!e)return t
        var i=this.getPixelBounds(),n=new o.Bounds(i.min.add(t),i.max.add(t))
        return t.add(this._getBoundsOffset(n,e))},_getBoundsOffset:function(t,e,i){var n=o.bounds(this.project(e.getNorthEast(),i),this.project(e.getSouthWest(),i)),s=n.min.subtract(t.min),r=n.max.subtract(t.max),a=this._rebound(s.x,-r.x),h=this._rebound(s.y,-r.y)
        return new o.Point(a,h)},_rebound:function(t,e){return t+e>0?Math.round(t-e)/2:Math.max(0,Math.ceil(t))-Math.max(0,Math.floor(e))},_limitZoom:function(t){var e=this.getMinZoom(),i=this.getMaxZoom(),n=o.Browser.any3d?this.options.zoomSnap:1
        return n&&(t=Math.round(t/n)*n),Math.max(e,Math.min(i,t))}}),o.map=function(t,e){return new o.Map(t,e)},o.Layer=o.Evented.extend({options:{pane:"overlayPane",nonBubblingEvents:[]},addTo:function(t){return t.addLayer(this),this},remove:function(){return this.removeFrom(this._map||this._mapToAdd)},removeFrom:function(t){return t&&t.removeLayer(this),this},getPane:function(t){return this._map.getPane(t?this.options[t]||t:this.options.pane)},addInteractiveTarget:function(t){return this._map._targets[o.stamp(t)]=this,this},removeInteractiveTarget:function(t){return delete this._map._targets[o.stamp(t)],this},_layerAdd:function(t){var e=t.target
        if(e.hasLayer(this)){if(this._map=e,this._zoomAnimated=e._zoomAnimated,this.getEvents){var i=this.getEvents()
            e.on(i,this),this.once("remove",function(){e.off(i,this)},this)}this.onAdd(e),this.getAttribution&&this._map.attributionControl&&this._map.attributionControl.addAttribution(this.getAttribution()),this.fire("add"),e.fire("layeradd",{layer:this})}}}),o.Map.include({addLayer:function(t){var e=o.stamp(t)
        return this._layers[e]?this:(this._layers[e]=t,t._mapToAdd=this,t.beforeAdd&&t.beforeAdd(this),this.whenReady(t._layerAdd,t),this)},removeLayer:function(t){var e=o.stamp(t)
        return this._layers[e]?(this._loaded&&t.onRemove(this),t.getAttribution&&this.attributionControl&&this.attributionControl.removeAttribution(t.getAttribution()),delete this._layers[e],this._loaded&&(this.fire("layerremove",{layer:t}),t.fire("remove")),t._map=t._mapToAdd=null,this):this},hasLayer:function(t){return!!t&&o.stamp(t)in this._layers},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i])
        return this},_addLayers:function(t){t=t?o.Util.isArray(t)?t:[t]:[]
        for(var e=0,i=t.length
            e<i
        e++)this.addLayer(t[e])},_addZoomLimit:function(t){!isNaN(t.options.maxZoom)&&isNaN(t.options.minZoom)||(this._zoomBoundLayers[o.stamp(t)]=t,this._updateZoomLevels())},_removeZoomLimit:function(t){var e=o.stamp(t)
        this._zoomBoundLayers[e]&&(delete this._zoomBoundLayers[e],this._updateZoomLevels())},_updateZoomLevels:function(){var t=1/0,e=-(1/0),n=this._getZoomSpan()
        for(var o in this._zoomBoundLayers){var s=this._zoomBoundLayers[o].options
            t=s.minZoom===i?t:Math.min(t,s.minZoom),e=s.maxZoom===i?e:Math.max(e,s.maxZoom)}this._layersMaxZoom=e===-(1/0)?i:e,this._layersMinZoom=t===1/0?i:t,n!==this._getZoomSpan()&&this.fire("zoomlevelschange")}}),o.Projection.Mercator={R:6378137,R_MINOR:6356752.314245179,bounds:o.bounds([-20037508.34279,-15496570.73972],[20037508.34279,18764656.23138]),project:function(t){var e=Math.PI/180,i=this.R,n=t.lat*e,s=this.R_MINOR/i,r=Math.sqrt(1-s*s),a=r*Math.sin(n),h=Math.tan(Math.PI/4-n/2)/Math.pow((1-a)/(1+a),r/2)
        return n=-i*Math.log(Math.max(h,1e-10)),new o.Point(t.lng*e*i,n)},unproject:function(t){for(var e,i=180/Math.PI,n=this.R,s=this.R_MINOR/n,r=Math.sqrt(1-s*s),a=Math.exp(-t.y/n),h=Math.PI/2-2*Math.atan(a),l=0,u=.1
        l<15&&Math.abs(u)>1e-7
        l++)e=r*Math.sin(h),e=Math.pow((1-e)/(1+e),r/2),u=Math.PI/2-2*Math.atan(a*e)-h,h+=u
        return new o.LatLng(h*i,t.x*i/n)}},o.CRS.EPSG3395=o.extend({},o.CRS.Earth,{code:"EPSG:3395",projection:o.Projection.Mercator,transformation:function(){var t=.5/(Math.PI*o.Projection.Mercator.R)
        return new o.Transformation(t,.5,-t,.5)}()}),o.GridLayer=o.Layer.extend({options:{tileSize:256,opacity:1,updateWhenIdle:o.Browser.mobile,updateWhenZooming:!0,updateInterval:200,attribution:null,zIndex:1,bounds:null,minZoom:0,maxZoom:i,noWrap:!1,pane:"tilePane",className:"",keepBuffer:2},initialize:function(t){o.setOptions(this,t)},onAdd:function(){this._initContainer(),this._levels={},this._tiles={},this._resetView(),this._update()},beforeAdd:function(t){t._addZoomLimit(this)},onRemove:function(t){this._removeAllTiles(),o.DomUtil.remove(this._container),t._removeZoomLimit(this),this._container=null,this._tileZoom=null},bringToFront:function(){return this._map&&(o.DomUtil.toFront(this._container),this._setAutoZIndex(Math.max)),this},bringToBack:function(){return this._map&&(o.DomUtil.toBack(this._container),this._setAutoZIndex(Math.min)),this},getAttribution:function(){return this.options.attribution},getContainer:function(){return this._container},setOpacity:function(t){return this.options.opacity=t,this._updateOpacity(),this},setZIndex:function(t){return this.options.zIndex=t,this._updateZIndex(),this},isLoading:function(){return this._loading},redraw:function(){return this._map&&(this._removeAllTiles(),this._update()),this},getEvents:function(){var t={viewprereset:this._invalidateAll,viewreset:this._resetView,zoom:this._resetView,moveend:this._onMoveEnd}
        return this.options.updateWhenIdle||(this._onMove||(this._onMove=o.Util.throttle(this._onMoveEnd,this.options.updateInterval,this)),t.move=this._onMove),this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},createTile:function(){return e.createElement("div")},getTileSize:function(){var t=this.options.tileSize
        return t instanceof o.Point?t:new o.Point(t,t)},_updateZIndex:function(){this._container&&this.options.zIndex!==i&&null!==this.options.zIndex&&(this._container.style.zIndex=this.options.zIndex)},_setAutoZIndex:function(t){for(var e,i=this.getPane().children,n=-t(-(1/0),1/0),o=0,s=i.length
        o<s
        o++)e=i[o].style.zIndex,i[o]!==this._container&&e&&(n=t(n,+e))
        isFinite(n)&&(this.options.zIndex=n+t(-1,1),this._updateZIndex())},_updateOpacity:function(){if(this._map&&!o.Browser.ielt9){o.DomUtil.setOpacity(this._container,this.options.opacity)
        var t=+new Date,e=!1,i=!1
        for(var n in this._tiles){var s=this._tiles[n]
            if(s.current&&s.loaded){var r=Math.min(1,(t-s.loaded)/200)
                o.DomUtil.setOpacity(s.el,r),r<1?e=!0:(s.active&&(i=!0),s.active=!0)}}i&&!this._noPrune&&this._pruneTiles(),e&&(o.Util.cancelAnimFrame(this._fadeFrame),this._fadeFrame=o.Util.requestAnimFrame(this._updateOpacity,this))}},_initContainer:function(){this._container||(this._container=o.DomUtil.create("div","leaflet-layer "+(this.options.className||"")),this._updateZIndex(),this.options.opacity<1&&this._updateOpacity(),this.getPane().appendChild(this._container))},_updateLevels:function(){var t=this._tileZoom,e=this.options.maxZoom
        if(t===i)return i
        for(var n in this._levels)this._levels[n].el.children.length||n===t?this._levels[n].el.style.zIndex=e-Math.abs(t-n):(o.DomUtil.remove(this._levels[n].el),this._removeTilesAtZoom(n),delete this._levels[n])
        var s=this._levels[t],r=this._map
        return s||(s=this._levels[t]={},s.el=o.DomUtil.create("div","leaflet-tile-container leaflet-zoom-animated",this._container),s.el.style.zIndex=e,s.origin=r.project(r.unproject(r.getPixelOrigin()),t).round(),s.zoom=t,this._setZoomTransform(s,r.getCenter(),r.getZoom()),o.Util.falseFn(s.el.offsetWidth)),this._level=s,s},_pruneTiles:function(){if(this._map){var t,e,i=this._map.getZoom()
        if(i>this.options.maxZoom||i<this.options.minZoom)return void this._removeAllTiles()
        for(t in this._tiles)e=this._tiles[t],e.retain=e.current
        for(t in this._tiles)if(e=this._tiles[t],e.current&&!e.active){var n=e.coords
            this._retainParent(n.x,n.y,n.z,n.z-5)||this._retainChildren(n.x,n.y,n.z,n.z+2)}for(t in this._tiles)this._tiles[t].retain||this._removeTile(t)}},_removeTilesAtZoom:function(t){for(var e in this._tiles)this._tiles[e].coords.z===t&&this._removeTile(e)},_removeAllTiles:function(){for(var t in this._tiles)this._removeTile(t)},_invalidateAll:function(){for(var t in this._levels)o.DomUtil.remove(this._levels[t].el),delete this._levels[t]
        this._removeAllTiles(),this._tileZoom=null},_retainParent:function(t,e,i,n){var s=Math.floor(t/2),r=Math.floor(e/2),a=i-1,h=new o.Point(+s,+r)
        h.z=+a
        var l=this._tileCoordsToKey(h),u=this._tiles[l]
        return u&&u.active?(u.retain=!0,!0):(u&&u.loaded&&(u.retain=!0),a>n&&this._retainParent(s,r,a,n))},_retainChildren:function(t,e,i,n){for(var s=2*t
        s<2*t+2
        s++)for(var r=2*e
            r<2*e+2
        r++){var a=new o.Point(s,r)
            a.z=i+1
            var h=this._tileCoordsToKey(a),l=this._tiles[h]
            l&&l.active?l.retain=!0:(l&&l.loaded&&(l.retain=!0),i+1<n&&this._retainChildren(s,r,i+1,n))}},_resetView:function(t){var e=t&&(t.pinch||t.flyTo)
        this._setView(this._map.getCenter(),this._map.getZoom(),e,e)},_animateZoom:function(t){this._setView(t.center,t.zoom,!0,t.noUpdate)},_setView:function(t,e,n,o){var s=Math.round(e)
        (this.options.maxZoom!==i&&s>this.options.maxZoom||this.options.minZoom!==i&&s<this.options.minZoom)&&(s=i)
        var r=this.options.updateWhenZooming&&s!==this._tileZoom
        o&&!r||(this._tileZoom=s,this._abortLoading&&this._abortLoading(),this._updateLevels(),this._resetGrid(),s!==i&&this._update(t),n||this._pruneTiles(),this._noPrune=!!n),this._setZoomTransforms(t,e)},_setZoomTransforms:function(t,e){for(var i in this._levels)this._setZoomTransform(this._levels[i],t,e)},_setZoomTransform:function(t,e,i){var n=this._map.getZoomScale(i,t.zoom),s=t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(e,i)).round()
        o.Browser.any3d?o.DomUtil.setTransform(t.el,s,n):o.DomUtil.setPosition(t.el,s)},_resetGrid:function(){var t=this._map,e=t.options.crs,i=this._tileSize=this.getTileSize(),n=this._tileZoom,o=this._map.getPixelWorldBounds(this._tileZoom)
        o&&(this._globalTileRange=this._pxBoundsToTileRange(o)),this._wrapX=e.wrapLng&&!this.options.noWrap&&[Math.floor(t.project([0,e.wrapLng[0]],n).x/i.x),Math.ceil(t.project([0,e.wrapLng[1]],n).x/i.y)],this._wrapY=e.wrapLat&&!this.options.noWrap&&[Math.floor(t.project([e.wrapLat[0],0],n).y/i.x),Math.ceil(t.project([e.wrapLat[1],0],n).y/i.y)]},_onMoveEnd:function(){this._map&&!this._map._animatingZoom&&this._update()},_getTiledPixelBounds:function(t){var e=this._map,i=e._animatingZoom?Math.max(e._animateToZoom,e.getZoom()):e.getZoom(),n=e.getZoomScale(i,this._tileZoom),s=e.project(t,this._tileZoom).floor(),r=e.getSize().divideBy(2*n)
        return new o.Bounds(s.subtract(r),s.add(r))},_update:function(t){var n=this._map
        if(n){var s=n.getZoom()
            if(t===i&&(t=n.getCenter()),this._tileZoom!==i){var r=this._getTiledPixelBounds(t),a=this._pxBoundsToTileRange(r),h=a.getCenter(),l=[],u=this.options.keepBuffer,c=new o.Bounds(a.getBottomLeft().subtract([u,-u]),a.getTopRight().add([u,-u]))
                for(var d in this._tiles){var _=this._tiles[d].coords
                    _.z===this._tileZoom&&c.contains(o.point(_.x,_.y))||(this._tiles[d].current=!1)}if(Math.abs(s-this._tileZoom)>1)return void this._setView(t,s)
                for(var m=a.min.y
                    m<=a.max.y
                m++)for(var p=a.min.x
                    p<=a.max.x
                p++){var f=new o.Point(p,m)
                    if(f.z=this._tileZoom,this._isValidTile(f)){var g=this._tiles[this._tileCoordsToKey(f)]
                        g?g.current=!0:l.push(f)}}if(l.sort(function(t,e){return t.distanceTo(h)-e.distanceTo(h)}),0!==l.length){this._loading||(this._loading=!0,this.fire("loading"))
                    var v=e.createDocumentFragment()
                    for(p=0
                        p<l.length
                    p++)this._addTile(l[p],v)
                    this._level.el.appendChild(v)}}}},_isValidTile:function(t){var e=this._map.options.crs
        if(!e.infinite){var i=this._globalTileRange
            if(!e.wrapLng&&(t.x<i.min.x||t.x>i.max.x)||!e.wrapLat&&(t.y<i.min.y||t.y>i.max.y))return!1}if(!this.options.bounds)return!0
        var n=this._tileCoordsToBounds(t)
        return o.latLngBounds(this.options.bounds).overlaps(n)},_keyToBounds:function(t){return this._tileCoordsToBounds(this._keyToTileCoords(t))},_tileCoordsToBounds:function(t){var e=this._map,i=this.getTileSize(),n=t.scaleBy(i),s=n.add(i),r=e.unproject(n,t.z),a=e.unproject(s,t.z)
        return this.options.noWrap||(r=e.wrapLatLng(r),a=e.wrapLatLng(a)),new o.LatLngBounds(r,a)},_tileCoordsToKey:function(t){return t.x+":"+t.y+":"+t.z},_keyToTileCoords:function(t){var e=t.split(":"),i=new o.Point(+e[0],+e[1])
        return i.z=+e[2],i},_removeTile:function(t){var e=this._tiles[t]
        e&&(o.DomUtil.remove(e.el),delete this._tiles[t],this.fire("tileunload",{tile:e.el,coords:this._keyToTileCoords(t)}))},_initTile:function(t){o.DomUtil.addClass(t,"leaflet-tile")
        var e=this.getTileSize()
        t.style.width=e.x+"px",t.style.height=e.y+"px",t.onselectstart=o.Util.falseFn,t.onmousemove=o.Util.falseFn,o.Browser.ielt9&&this.options.opacity<1&&o.DomUtil.setOpacity(t,this.options.opacity),o.Browser.android&&!o.Browser.android23&&(t.style.WebkitBackfaceVisibility="hidden")},_addTile:function(t,e){var i=this._getTilePos(t),n=this._tileCoordsToKey(t),s=this.createTile(this._wrapCoords(t),o.bind(this._tileReady,this,t))
        this._initTile(s),this.createTile.length<2&&o.Util.requestAnimFrame(o.bind(this._tileReady,this,t,null,s)),o.DomUtil.setPosition(s,i),this._tiles[n]={el:s,coords:t,current:!0},e.appendChild(s),this.fire("tileloadstart",{tile:s,coords:t})},_tileReady:function(t,e,i){if(this._map){e&&this.fire("tileerror",{error:e,tile:i,coords:t})
        var n=this._tileCoordsToKey(t)
        i=this._tiles[n],i&&(i.loaded=+new Date,this._map._fadeAnimated?(o.DomUtil.setOpacity(i.el,0),o.Util.cancelAnimFrame(this._fadeFrame),this._fadeFrame=o.Util.requestAnimFrame(this._updateOpacity,this)):(i.active=!0,this._pruneTiles()),e||(o.DomUtil.addClass(i.el,"leaflet-tile-loaded"),this.fire("tileload",{tile:i.el,coords:t})),this._noTilesToLoad()&&(this._loading=!1,this.fire("load"),o.Browser.ielt9||!this._map._fadeAnimated?o.Util.requestAnimFrame(this._pruneTiles,this):setTimeout(o.bind(this._pruneTiles,this),250)))}},_getTilePos:function(t){return t.scaleBy(this.getTileSize()).subtract(this._level.origin)},_wrapCoords:function(t){var e=new o.Point(this._wrapX?o.Util.wrapNum(t.x,this._wrapX):t.x,this._wrapY?o.Util.wrapNum(t.y,this._wrapY):t.y)
        return e.z=t.z,e},_pxBoundsToTileRange:function(t){var e=this.getTileSize()
        return new o.Bounds(t.min.unscaleBy(e).floor(),t.max.unscaleBy(e).ceil().subtract([1,1]))},_noTilesToLoad:function(){for(var t in this._tiles)if(!this._tiles[t].loaded)return!1
        return!0}}),o.gridLayer=function(t){return new o.GridLayer(t)},o.TileLayer=o.GridLayer.extend({options:{minZoom:0,maxZoom:18,maxNativeZoom:null,subdomains:"abc",errorTileUrl:"",zoomOffset:0,tms:!1,zoomReverse:!1,detectRetina:!1,crossOrigin:!1},initialize:function(t,e){this._url=t,e=o.setOptions(this,e),e.detectRetina&&o.Browser.retina&&e.maxZoom>0&&(e.tileSize=Math.floor(e.tileSize/2),e.zoomReverse?(e.zoomOffset--,e.minZoom++):(e.zoomOffset++,e.maxZoom--),e.minZoom=Math.max(0,e.minZoom)),"string"==typeof e.subdomains&&(e.subdomains=e.subdomains.split("")),o.Browser.android||this.on("tileunload",this._onTileRemove)},setUrl:function(t,e){return this._url=t,e||this.redraw(),this},createTile:function(t,i){var n=e.createElement("img")
        return o.DomEvent.on(n,"load",o.bind(this._tileOnLoad,this,i,n)),o.DomEvent.on(n,"error",o.bind(this._tileOnError,this,i,n)),this.options.crossOrigin&&(n.crossOrigin=""),n.alt="",n.src=this.getTileUrl(t),n},getTileUrl:function(t){var e={r:o.Browser.retina?"@2x":"",s:this._getSubdomain(t),x:t.x,y:t.y,z:this._getZoomForUrl()}
        if(this._map&&!this._map.options.crs.infinite){var i=this._globalTileRange.max.y-t.y
            this.options.tms&&(e.y=i),e["-y"]=i}return o.Util.template(this._url,o.extend(e,this.options))},_tileOnLoad:function(t,e){o.Browser.ielt9?setTimeout(o.bind(t,this,null,e),0):t(null,e)},_tileOnError:function(t,e,i){var n=this.options.errorTileUrl
        n&&(e.src=n),t(i,e)},getTileSize:function(){var t=this._map,e=o.GridLayer.prototype.getTileSize.call(this),i=this._tileZoom+this.options.zoomOffset,n=this.options.maxNativeZoom
        return null!==n&&i>n?e.divideBy(t.getZoomScale(n,i)).round():e},_onTileRemove:function(t){t.tile.onload=null},_getZoomForUrl:function(){var t=this.options,e=this._tileZoom
        return t.zoomReverse&&(e=t.maxZoom-e),e+=t.zoomOffset,null!==t.maxNativeZoom?Math.min(e,t.maxNativeZoom):e},_getSubdomain:function(t){var e=Math.abs(t.x+t.y)%this.options.subdomains.length
        return this.options.subdomains[e]},_abortLoading:function(){var t,e
        for(t in this._tiles)this._tiles[t].coords.z!==this._tileZoom&&(e=this._tiles[t].el,e.onload=o.Util.falseFn,e.onerror=o.Util.falseFn,e.complete||(e.src=o.Util.emptyImageUrl,o.DomUtil.remove(e)))}}),o.tileLayer=function(t,e){return new o.TileLayer(t,e)},o.TileLayer.WMS=o.TileLayer.extend({defaultWmsParams:{service:"WMS",request:"GetMap",layers:"",styles:"",format:"image/jpeg",transparent:!1,version:"1.1.1"},options:{crs:null,uppercase:!1},initialize:function(t,e){this._url=t
        var i=o.extend({},this.defaultWmsParams)
        for(var n in e)n in this.options||(i[n]=e[n])
        e=o.setOptions(this,e),i.width=i.height=e.tileSize*(e.detectRetina&&o.Browser.retina?2:1),this.wmsParams=i},onAdd:function(t){this._crs=this.options.crs||t.options.crs,this._wmsVersion=parseFloat(this.wmsParams.version)
        var e=this._wmsVersion>=1.3?"crs":"srs"
        this.wmsParams[e]=this._crs.code,o.TileLayer.prototype.onAdd.call(this,t)},getTileUrl:function(t){var e=this._tileCoordsToBounds(t),i=this._crs.project(e.getNorthWest()),n=this._crs.project(e.getSouthEast()),s=(this._wmsVersion>=1.3&&this._crs===o.CRS.EPSG4326?[n.y,i.x,i.y,n.x]:[i.x,n.y,n.x,i.y]).join(","),r=o.TileLayer.prototype.getTileUrl.call(this,t)
        return r+o.Util.getParamString(this.wmsParams,r,this.options.uppercase)+(this.options.uppercase?"&BBOX=":"&bbox=")+s},setParams:function(t,e){return o.extend(this.wmsParams,t),e||this.redraw(),this}}),o.tileLayer.wms=function(t,e){return new o.TileLayer.WMS(t,e)},o.ImageOverlay=o.Layer.extend({options:{opacity:1,alt:"",interactive:!1,attribution:null,crossOrigin:!1},initialize:function(t,e,i){this._url=t,this._bounds=o.latLngBounds(e),o.setOptions(this,i)},onAdd:function(){this._image||(this._initImage(),this.options.opacity<1&&this._updateOpacity()),this.options.interactive&&(o.DomUtil.addClass(this._image,"leaflet-interactive"),this.addInteractiveTarget(this._image)),this.getPane().appendChild(this._image),this._reset()},onRemove:function(){o.DomUtil.remove(this._image),this.options.interactive&&this.removeInteractiveTarget(this._image)},setOpacity:function(t){return this.options.opacity=t,this._image&&this._updateOpacity(),this},setStyle:function(t){return t.opacity&&this.setOpacity(t.opacity),this},bringToFront:function(){return this._map&&o.DomUtil.toFront(this._image),this},bringToBack:function(){return this._map&&o.DomUtil.toBack(this._image),this},setUrl:function(t){return this._url=t,this._image&&(this._image.src=t),this},setBounds:function(t){return this._bounds=t,this._map&&this._reset(),this},getAttribution:function(){return this.options.attribution},getEvents:function(){var t={zoom:this._reset,viewreset:this._reset}
        return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},getBounds:function(){return this._bounds},getElement:function(){return this._image},_initImage:function(){var t=this._image=o.DomUtil.create("img","leaflet-image-layer "+(this._zoomAnimated?"leaflet-zoom-animated":""))
        t.onselectstart=o.Util.falseFn,t.onmousemove=o.Util.falseFn,t.onload=o.bind(this.fire,this,"load"),this.options.crossOrigin&&(t.crossOrigin=""),t.src=this._url,t.alt=this.options.alt},_animateZoom:function(t){var e=this._map.getZoomScale(t.zoom),i=this._map._latLngToNewLayerPoint(this._bounds.getNorthWest(),t.zoom,t.center)
        o.DomUtil.setTransform(this._image,i,e)},_reset:function(){var t=this._image,e=new o.Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()),this._map.latLngToLayerPoint(this._bounds.getSouthEast())),i=e.getSize()
        o.DomUtil.setPosition(t,e.min),t.style.width=i.x+"px",t.style.height=i.y+"px"},_updateOpacity:function(){o.DomUtil.setOpacity(this._image,this.options.opacity)}}),o.imageOverlay=function(t,e,i){return new o.ImageOverlay(t,e,i)},o.Icon=o.Class.extend({initialize:function(t){o.setOptions(this,t)},createIcon:function(t){return this._createIcon("icon",t)},createShadow:function(t){return this._createIcon("shadow",t)},_createIcon:function(t,e){var i=this._getIconUrl(t)
        if(!i){if("icon"===t)throw new Error("iconUrl not set in Icon options (see the docs).")
            return null}var n=this._createImg(i,e&&"IMG"===e.tagName?e:null)
        return this._setIconStyles(n,t),n},_setIconStyles:function(t,e){var i=this.options,n=i[e+"Size"]
        "number"==typeof n&&(n=[n,n])
        var s=o.point(n),r=o.point("shadow"===e&&i.shadowAnchor||i.iconAnchor||s&&s.divideBy(2,!0))
        t.className="leaflet-marker-"+e+" "+(i.className||""),r&&(t.style.marginLeft=-r.x+"px",t.style.marginTop=-r.y+"px"),s&&(t.style.width=s.x+"px",t.style.height=s.y+"px")},_createImg:function(t,i){return i=i||e.createElement("img"),i.src=t,i},_getIconUrl:function(t){return o.Browser.retina&&this.options[t+"RetinaUrl"]||this.options[t+"Url"]}}),o.icon=function(t){return new o.Icon(t)},o.Icon.Default=o.Icon.extend({options:{iconUrl:"marker-icon.png",iconRetinaUrl:"marker-icon-2x.png",shadowUrl:"marker-shadow.png",iconSize:[25,41],iconAnchor:[12,41],popupAnchor:[1,-34],tooltipAnchor:[16,-28],shadowSize:[41,41]},_getIconUrl:function(t){return o.Icon.Default.imagePath||(o.Icon.Default.imagePath=this._detectIconPath()),(this.options.imagePath||o.Icon.Default.imagePath)+o.Icon.prototype._getIconUrl.call(this,t)},_detectIconPath:function(){var t=o.DomUtil.create("div","leaflet-default-icon-path",e.body),i=o.DomUtil.getStyle(t,"background-image")||o.DomUtil.getStyle(t,"backgroundImage")
        return e.body.removeChild(t),0===i.indexOf("url")?i.replace(/^url\([\"\']?/,"").replace(/marker-icon\.png[\"\']?\)$/,""):""}}),o.Marker=o.Layer.extend({options:{icon:new o.Icon.Default,interactive:!0,draggable:!1,keyboard:!0,title:"",alt:"",zIndexOffset:0,opacity:1,riseOnHover:!1,riseOffset:250,pane:"markerPane",nonBubblingEvents:["click","dblclick","mouseover","mouseout","contextmenu"]},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t)},onAdd:function(t){this._zoomAnimated=this._zoomAnimated&&t.options.markerZoomAnimation,this._zoomAnimated&&t.on("zoomanim",this._animateZoom,this),this._initIcon(),this.update()},onRemove:function(t){this.dragging&&this.dragging.enabled()&&(this.options.draggable=!0,this.dragging.removeHooks()),this._zoomAnimated&&t.off("zoomanim",this._animateZoom,this),this._removeIcon(),this._removeShadow()},getEvents:function(){return{zoom:this.update,viewreset:this.update}},getLatLng:function(){return this._latlng},setLatLng:function(t){var e=this._latlng
        return this._latlng=o.latLng(t),this.update(),this.fire("move",{oldLatLng:e,latlng:this._latlng})},setZIndexOffset:function(t){return this.options.zIndexOffset=t,this.update()},setIcon:function(t){return this.options.icon=t,this._map&&(this._initIcon(),this.update()),this._popup&&this.bindPopup(this._popup,this._popup.options),this},getElement:function(){return this._icon},update:function(){if(this._icon){var t=this._map.latLngToLayerPoint(this._latlng).round()
        this._setPos(t)}return this},_initIcon:function(){var t=this.options,e="leaflet-zoom-"+(this._zoomAnimated?"animated":"hide"),i=t.icon.createIcon(this._icon),n=!1
        i!==this._icon&&(this._icon&&this._removeIcon(),n=!0,t.title&&(i.title=t.title),t.alt&&(i.alt=t.alt)),o.DomUtil.addClass(i,e),t.keyboard&&(i.tabIndex="0"),this._icon=i,t.riseOnHover&&this.on({mouseover:this._bringToFront,mouseout:this._resetZIndex})
        var s=t.icon.createShadow(this._shadow),r=!1
        s!==this._shadow&&(this._removeShadow(),r=!0),s&&o.DomUtil.addClass(s,e),this._shadow=s,t.opacity<1&&this._updateOpacity(),n&&this.getPane().appendChild(this._icon),this._initInteraction(),s&&r&&this.getPane("shadowPane").appendChild(this._shadow)},_removeIcon:function(){this.options.riseOnHover&&this.off({mouseover:this._bringToFront,mouseout:this._resetZIndex}),o.DomUtil.remove(this._icon),this.removeInteractiveTarget(this._icon),this._icon=null},_removeShadow:function(){this._shadow&&o.DomUtil.remove(this._shadow),this._shadow=null},_setPos:function(t){o.DomUtil.setPosition(this._icon,t),this._shadow&&o.DomUtil.setPosition(this._shadow,t),this._zIndex=t.y+this.options.zIndexOffset,this._resetZIndex()},_updateZIndex:function(t){this._icon.style.zIndex=this._zIndex+t},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center).round()
        this._setPos(e)},_initInteraction:function(){if(this.options.interactive&&(o.DomUtil.addClass(this._icon,"leaflet-interactive"),this.addInteractiveTarget(this._icon),o.Handler.MarkerDrag)){var t=this.options.draggable
        this.dragging&&(t=this.dragging.enabled(),this.dragging.disable()),this.dragging=new o.Handler.MarkerDrag(this),t&&this.dragging.enable()}},setOpacity:function(t){return this.options.opacity=t,this._map&&this._updateOpacity(),this},_updateOpacity:function(){var t=this.options.opacity
        o.DomUtil.setOpacity(this._icon,t),this._shadow&&o.DomUtil.setOpacity(this._shadow,t)},_bringToFront:function(){this._updateZIndex(this.options.riseOffset)},_resetZIndex:function(){this._updateZIndex(0)}}),o.marker=function(t,e){return new o.Marker(t,e)},o.DivIcon=o.Icon.extend({options:{iconSize:[12,12],html:!1,bgPos:null,className:"leaflet-div-icon"},createIcon:function(t){var i=t&&"DIV"===t.tagName?t:e.createElement("div"),n=this.options
        if(i.innerHTML=n.html!==!1?n.html:"",n.bgPos){var s=o.point(n.bgPos)
            i.style.backgroundPosition=-s.x+"px "+-s.y+"px"}return this._setIconStyles(i,"icon"),i},createShadow:function(){return null}}),o.divIcon=function(t){return new o.DivIcon(t)},o.DivOverlay=o.Layer.extend({options:{offset:[0,7],className:"",pane:"popupPane"},initialize:function(t,e){o.setOptions(this,t),this._source=e},onAdd:function(t){this._zoomAnimated=t._zoomAnimated,this._container||this._initLayout(),t._fadeAnimated&&o.DomUtil.setOpacity(this._container,0),clearTimeout(this._removeTimeout),this.getPane().appendChild(this._container),this.update(),t._fadeAnimated&&o.DomUtil.setOpacity(this._container,1),this.bringToFront()},onRemove:function(t){t._fadeAnimated?(o.DomUtil.setOpacity(this._container,0),this._removeTimeout=setTimeout(o.bind(o.DomUtil.remove,o.DomUtil,this._container),200)):o.DomUtil.remove(this._container)},getLatLng:function(){return this._latlng},setLatLng:function(t){return this._latlng=o.latLng(t),this._map&&(this._updatePosition(),this._adjustPan()),this},getContent:function(){return this._content},setContent:function(t){return this._content=t,this.update(),this},getElement:function(){return this._container},update:function(){this._map&&(this._container.style.visibility="hidden",this._updateContent(),this._updateLayout(),this._updatePosition(),this._container.style.visibility="",this._adjustPan())},getEvents:function(){var t={zoom:this._updatePosition,viewreset:this._updatePosition}
        return this._zoomAnimated&&(t.zoomanim=this._animateZoom),t},isOpen:function(){return!!this._map&&this._map.hasLayer(this)},bringToFront:function(){return this._map&&o.DomUtil.toFront(this._container),this},bringToBack:function(){return this._map&&o.DomUtil.toBack(this._container),this},_updateContent:function(){if(this._content){var t=this._contentNode,e="function"==typeof this._content?this._content(this._source||this):this._content
        if("string"==typeof e)t.innerHTML=e
        else{for(
            t.hasChildNodes()
        )t.removeChild(t.firstChild)
            t.appendChild(e)}this.fire("contentupdate")}},_updatePosition:function(){if(this._map){var t=this._map.latLngToLayerPoint(this._latlng),e=o.point(this.options.offset),i=this._getAnchor()
        this._zoomAnimated?o.DomUtil.setPosition(this._container,t.add(i)):e=e.add(t).add(i)
        var n=this._containerBottom=-e.y,s=this._containerLeft=-Math.round(this._containerWidth/2)+e.x
        this._container.style.bottom=n+"px",this._container.style.left=s+"px"}},_getAnchor:function(){return[0,0]}}),o.Popup=o.DivOverlay.extend({options:{maxWidth:300,minWidth:50,maxHeight:null,autoPan:!0,autoPanPaddingTopLeft:null,autoPanPaddingBottomRight:null,autoPanPadding:[5,5],keepInView:!1,closeButton:!0,autoClose:!0,className:""},openOn:function(t){return t.openPopup(this),this},onAdd:function(t){o.DivOverlay.prototype.onAdd.call(this,t),t.fire("popupopen",{popup:this}),this._source&&(this._source.fire("popupopen",{popup:this},!0),this._source instanceof o.Path||this._source.on("preclick",o.DomEvent.stopPropagation))},onRemove:function(t){o.DivOverlay.prototype.onRemove.call(this,t),t.fire("popupclose",{popup:this}),this._source&&(this._source.fire("popupclose",{popup:this},!0),this._source instanceof o.Path||this._source.off("preclick",o.DomEvent.stopPropagation))},getEvents:function(){var t=o.DivOverlay.prototype.getEvents.call(this)
        return("closeOnClick"in this.options?this.options.closeOnClick:this._map.options.closePopupOnClick)&&(t.preclick=this._close),this.options.keepInView&&(t.moveend=this._adjustPan),t},_close:function(){this._map&&this._map.closePopup(this)},_initLayout:function(){var t="leaflet-popup",e=this._container=o.DomUtil.create("div",t+" "+(this.options.className||"")+" leaflet-zoom-animated")
        if(this.options.closeButton){var i=this._closeButton=o.DomUtil.create("a",t+"-close-button",e)
            i.href="#close",i.innerHTML="&#215
            ",o.DomEvent.on(i,"click",this._onCloseButtonClick,this)}var n=this._wrapper=o.DomUtil.create("div",t+"-content-wrapper",e)
            this._contentNode=o.DomUtil.create("div",t+"-content",n),o.DomEvent.disableClickPropagation(n).disableScrollPropagation(this._contentNode).on(n,"contextmenu",o.DomEvent.stopPropagation),this._tipContainer=o.DomUtil.create("div",t+"-tip-container",e),this._tip=o.DomUtil.create("div",t+"-tip",this._tipContainer)},_updateLayout:function(){var t=this._contentNode,e=t.style
            e.width="",e.whiteSpace="nowrap"
            var i=t.offsetWidth
            i=Math.min(i,this.options.maxWidth),i=Math.max(i,this.options.minWidth),e.width=i+1+"px",e.whiteSpace="",e.height=""
            var n=t.offsetHeight,s=this.options.maxHeight,r="leaflet-popup-scrolled"
            s&&n>s?(e.height=s+"px",o.DomUtil.addClass(t,r)):o.DomUtil.removeClass(t,r),this._containerWidth=this._container.offsetWidth},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center),i=this._getAnchor()
            o.DomUtil.setPosition(this._container,e.add(i))},_adjustPan:function(){if(!(!this.options.autoPan||this._map._panAnim&&this._map._panAnim._inProgress)){var t=this._map,e=parseInt(o.DomUtil.getStyle(this._container,"marginBottom"),10)||0,i=this._container.offsetHeight+e,n=this._containerWidth,s=new o.Point(this._containerLeft,-i-this._containerBottom)
            s._add(o.DomUtil.getPosition(this._container))
            var r=t.layerPointToContainerPoint(s),a=o.point(this.options.autoPanPadding),h=o.point(this.options.autoPanPaddingTopLeft||a),l=o.point(this.options.autoPanPaddingBottomRight||a),u=t.getSize(),c=0,d=0

            r.x+n+l.x>u.x&&(c=r.x+n-u.x+l.x),r.x-c-h.x<0&&(c=r.x-h.x),r.y+i+l.y>u.y&&(d=r.y+i-u.y+l.y),r.y-d-h.y<0&&(d=r.y-h.y),(c||d)&&t.fire("autopanstart").panBy([c,d])}},_onCloseButtonClick:function(t){this._close(),o.DomEvent.stop(t)},_getAnchor:function(){return o.point(this._source&&this._source._getPopupAnchor?this._source._getPopupAnchor():[0,0])}}),o.popup=function(t,e){return new o.Popup(t,e)},o.Map.mergeOptions({closePopupOnClick:!0}),o.Map.include({openPopup:function(t,e,i){return t instanceof o.Popup||(t=new o.Popup(i).setContent(t)),e&&t.setLatLng(e),this.hasLayer(t)?this:(this._popup&&this._popup.options.autoClose&&this.closePopup(),this._popup=t,this.addLayer(t))},closePopup:function(t){return t&&t!==this._popup||(t=this._popup,this._popup=null),t&&this.removeLayer(t),this}}),o.Layer.include({bindPopup:function(t,e){return t instanceof o.Popup?(o.setOptions(t,e),this._popup=t,t._source=this):(this._popup&&!e||(this._popup=new o.Popup(e,this)),this._popup.setContent(t)),this._popupHandlersAdded||(this.on({click:this._openPopup,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!0),this},unbindPopup:function(){return this._popup&&(this.off({click:this._openPopup,remove:this.closePopup,move:this._movePopup}),this._popupHandlersAdded=!1,this._popup=null),this},openPopup:function(t,e){if(t instanceof o.Layer||(e=t,t=this),t instanceof o.FeatureGroup)for(var i in this._layers){t=this._layers[i]
        break}return e||(e=t.getCenter?t.getCenter():t.getLatLng()),this._popup&&this._map&&(this._popup._source=t,this._popup.update(),this._map.openPopup(this._popup,e)),this},closePopup:function(){return this._popup&&this._popup._close(),this},togglePopup:function(t){return this._popup&&(this._popup._map?this.closePopup():this.openPopup(t)),this},isPopupOpen:function(){return this._popup.isOpen()},setPopupContent:function(t){return this._popup&&this._popup.setContent(t),this},getPopup:function(){return this._popup},_openPopup:function(t){var e=t.layer||t.target
        if(this._popup&&this._map)return o.DomEvent.stop(t),e instanceof o.Path?void this.openPopup(t.layer||t.target,t.latlng):void(this._map.hasLayer(this._popup)&&this._popup._source===e?this.closePopup():this.openPopup(e,t.latlng))},_movePopup:function(t){this._popup.setLatLng(t.latlng)}}),o.Marker.include({_getPopupAnchor:function(){return this.options.icon.options.popupAnchor||[0,0]}}),o.Tooltip=o.DivOverlay.extend({options:{pane:"tooltipPane",offset:[0,0],direction:"auto",permanent:!1,sticky:!1,interactive:!1,opacity:.9},onAdd:function(t){o.DivOverlay.prototype.onAdd.call(this,t),this.setOpacity(this.options.opacity),t.fire("tooltipopen",{tooltip:this}),this._source&&this._source.fire("tooltipopen",{tooltip:this},!0)},onRemove:function(t){o.DivOverlay.prototype.onRemove.call(this,t),t.fire("tooltipclose",{tooltip:this}),this._source&&this._source.fire("tooltipclose",{tooltip:this},!0)},getEvents:function(){var t=o.DivOverlay.prototype.getEvents.call(this)
        return o.Browser.touch&&!this.options.permanent&&(t.preclick=this._close),t},_close:function(){this._map&&this._map.closeTooltip(this)},_initLayout:function(){var t="leaflet-tooltip",e=t+" "+(this.options.className||"")+" leaflet-zoom-"+(this._zoomAnimated?"animated":"hide")
        this._contentNode=this._container=o.DomUtil.create("div",e)},_updateLayout:function(){},_adjustPan:function(){},_setPosition:function(t){var e=this._map,i=this._container,n=e.latLngToContainerPoint(e.getCenter()),s=e.layerPointToContainerPoint(t),r=this.options.direction,a=i.offsetWidth,h=i.offsetHeight,l=o.point(this.options.offset),u=this._getAnchor()
        "top"===r?t=t.add(o.point(-a/2+l.x,-h+l.y+u.y)):"bottom"===r?t=t.subtract(o.point(a/2-l.x,-l.y)):"center"===r?t=t.subtract(o.point(a/2+l.x,h/2-u.y+l.y)):"right"===r||"auto"===r&&s.x<n.x?(r="right",t=t.add([l.x+u.x,u.y-h/2+l.y])):(r="left",t=t.subtract(o.point(a+u.x-l.x,h/2-u.y-l.y))),o.DomUtil.removeClass(i,"leaflet-tooltip-right"),o.DomUtil.removeClass(i,"leaflet-tooltip-left"),o.DomUtil.removeClass(i,"leaflet-tooltip-top"),o.DomUtil.removeClass(i,"leaflet-tooltip-bottom"),o.DomUtil.addClass(i,"leaflet-tooltip-"+r),o.DomUtil.setPosition(i,t)},_updatePosition:function(){var t=this._map.latLngToLayerPoint(this._latlng)
        this._setPosition(t)},setOpacity:function(t){this.options.opacity=t,this._container&&o.DomUtil.setOpacity(this._container,t)},_animateZoom:function(t){var e=this._map._latLngToNewLayerPoint(this._latlng,t.zoom,t.center)
        this._setPosition(e)},_getAnchor:function(){return o.point(this._source&&this._source._getTooltipAnchor&&!this.options.sticky?this._source._getTooltipAnchor():[0,0])}}),o.tooltip=function(t,e){return new o.Tooltip(t,e)},o.Map.include({openTooltip:function(t,e,i){return t instanceof o.Tooltip||(t=new o.Tooltip(i).setContent(t)),e&&t.setLatLng(e),this.hasLayer(t)?this:this.addLayer(t)},closeTooltip:function(t){return t&&this.removeLayer(t),this}}),o.Layer.include({bindTooltip:function(t,e){return t instanceof o.Tooltip?(o.setOptions(t,e),this._tooltip=t,t._source=this):(this._tooltip&&!e||(this._tooltip=o.tooltip(e,this)),this._tooltip.setContent(t)),this._initTooltipInteractions(),this._tooltip.options.permanent&&this._map&&this._map.hasLayer(this)&&this.openTooltip(),this},unbindTooltip:function(){return this._tooltip&&(this._initTooltipInteractions(!0),this.closeTooltip(),this._tooltip=null),this},_initTooltipInteractions:function(t){if(t||!this._tooltipHandlersAdded){var e=t?"off":"on",i={remove:this.closeTooltip,move:this._moveTooltip}
        this._tooltip.options.permanent?i.add=this._openTooltip:(i.mouseover=this._openTooltip,i.mouseout=this.closeTooltip,this._tooltip.options.sticky&&(i.mousemove=this._moveTooltip),o.Browser.touch&&(i.click=this._openTooltip)),this[e](i),this._tooltipHandlersAdded=!t}},openTooltip:function(t,e){if(t instanceof o.Layer||(e=t,t=this),t instanceof o.FeatureGroup)for(var i in this._layers){t=this._layers[i]
        break}return e||(e=t.getCenter?t.getCenter():t.getLatLng()),this._tooltip&&this._map&&(this._tooltip._source=t,this._tooltip.update(),this._map.openTooltip(this._tooltip,e),this._tooltip.options.interactive&&this._tooltip._container&&(o.DomUtil.addClass(this._tooltip._container,"leaflet-clickable"),this.addInteractiveTarget(this._tooltip._container))),this},closeTooltip:function(){return this._tooltip&&(this._tooltip._close(),this._tooltip.options.interactive&&this._tooltip._container&&(o.DomUtil.removeClass(this._tooltip._container,"leaflet-clickable"),this.removeInteractiveTarget(this._tooltip._container))),this},toggleTooltip:function(t){return this._tooltip&&(this._tooltip._map?this.closeTooltip():this.openTooltip(t)),this},isTooltipOpen:function(){return this._tooltip.isOpen()},setTooltipContent:function(t){return this._tooltip&&this._tooltip.setContent(t),this},getTooltip:function(){return this._tooltip},_openTooltip:function(t){var e=t.layer||t.target
        this._tooltip&&this._map&&this.openTooltip(e,this._tooltip.options.sticky?t.latlng:i)},_moveTooltip:function(t){var e,i,n=t.latlng
        this._tooltip.options.sticky&&t.originalEvent&&(e=this._map.mouseEventToContainerPoint(t.originalEvent),i=this._map.containerPointToLayerPoint(e),n=this._map.layerPointToLatLng(i)),this._tooltip.setLatLng(n)}}),o.Marker.include({_getTooltipAnchor:function(){return this.options.icon.options.tooltipAnchor||[0,0]}}),o.LayerGroup=o.Layer.extend({initialize:function(t){this._layers={}
        var e,i
        if(t)for(e=0,i=t.length
            e<i
        e++)this.addLayer(t[e])},addLayer:function(t){var e=this.getLayerId(t)
        return this._layers[e]=t,this._map&&this._map.addLayer(t),this},removeLayer:function(t){var e=t in this._layers?t:this.getLayerId(t)
        return this._map&&this._layers[e]&&this._map.removeLayer(this._layers[e]),delete this._layers[e],this},hasLayer:function(t){return!!t&&(t in this._layers||this.getLayerId(t)in this._layers)},clearLayers:function(){for(var t in this._layers)this.removeLayer(this._layers[t])
        return this},invoke:function(t){var e,i,n=Array.prototype.slice.call(arguments,1)
        for(e in this._layers)i=this._layers[e],i[t]&&i[t].apply(i,n)
        return this},onAdd:function(t){for(var e in this._layers)t.addLayer(this._layers[e])},onRemove:function(t){for(var e in this._layers)t.removeLayer(this._layers[e])},eachLayer:function(t,e){for(var i in this._layers)t.call(e,this._layers[i])
        return this},getLayer:function(t){return this._layers[t]},getLayers:function(){var t=[]
        for(var e in this._layers)t.push(this._layers[e])
        return t},setZIndex:function(t){return this.invoke("setZIndex",t)},getLayerId:function(t){return o.stamp(t)}}),o.layerGroup=function(t){return new o.LayerGroup(t)},o.FeatureGroup=o.LayerGroup.extend({addLayer:function(t){return this.hasLayer(t)?this:(t.addEventParent(this),o.LayerGroup.prototype.addLayer.call(this,t),this.fire("layeradd",{layer:t}))},removeLayer:function(t){return this.hasLayer(t)?(t in this._layers&&(t=this._layers[t]),t.removeEventParent(this),o.LayerGroup.prototype.removeLayer.call(this,t),this.fire("layerremove",{layer:t})):this},setStyle:function(t){return this.invoke("setStyle",t)},bringToFront:function(){return this.invoke("bringToFront")},bringToBack:function(){return this.invoke("bringToBack")},getBounds:function(){var t=new o.LatLngBounds
        for(var e in this._layers){var i=this._layers[e]
            t.extend(i.getBounds?i.getBounds():i.getLatLng())}return t}}),o.featureGroup=function(t){return new o.FeatureGroup(t)},o.Renderer=o.Layer.extend({options:{padding:.1},initialize:function(t){o.setOptions(this,t),o.stamp(this)},onAdd:function(){this._container||(this._initContainer(),this._zoomAnimated&&o.DomUtil.addClass(this._container,"leaflet-zoom-animated")),this.getPane().appendChild(this._container),this._update()},onRemove:function(){o.DomUtil.remove(this._container)},getEvents:function(){var t={viewreset:this._reset,zoom:this._onZoom,moveend:this._update}
        return this._zoomAnimated&&(t.zoomanim=this._onAnimZoom),t},_onAnimZoom:function(t){this._updateTransform(t.center,t.zoom)},_onZoom:function(){this._updateTransform(this._map.getCenter(),this._map.getZoom())},_updateTransform:function(t,e){var i=this._map.getZoomScale(e,this._zoom),n=o.DomUtil.getPosition(this._container),s=this._map.getSize().multiplyBy(.5+this.options.padding),r=this._map.project(this._center,e),a=this._map.project(t,e),h=a.subtract(r),l=s.multiplyBy(-i).add(n).add(s).subtract(h)
        o.Browser.any3d?o.DomUtil.setTransform(this._container,l,i):o.DomUtil.setPosition(this._container,l)},_reset:function(){this._update(),this._updateTransform(this._center,this._zoom)},_update:function(){var t=this.options.padding,e=this._map.getSize(),i=this._map.containerPointToLayerPoint(e.multiplyBy(-t)).round()
        this._bounds=new o.Bounds(i,i.add(e.multiplyBy(1+2*t)).round()),this._center=this._map.getCenter(),this._zoom=this._map.getZoom()}}),o.Map.include({getRenderer:function(t){var e=t.options.renderer||this._getPaneRenderer(t.options.pane)||this.options.renderer||this._renderer
        return e||(e=this._renderer=this.options.preferCanvas&&o.canvas()||o.svg()),this.hasLayer(e)||this.addLayer(e),e},_getPaneRenderer:function(t){if("overlayPane"===t||t===i)return!1
        var e=this._paneRenderers[t]
        return e===i&&(e=o.SVG&&o.svg({pane:t})||o.Canvas&&o.canvas({pane:t}),this._paneRenderers[t]=e),e}}),o.Path=o.Layer.extend({options:{stroke:!0,color:"#3388ff",weight:3,opacity:1,lineCap:"round",lineJoin:"round",dashArray:null,dashOffset:null,fill:!1,fillColor:null,fillOpacity:.2,fillRule:"evenodd",interactive:!0},beforeAdd:function(t){this._renderer=t.getRenderer(this)},onAdd:function(){this._renderer._initPath(this),this._reset(),this._renderer._addPath(this),this._renderer.on("update",this._update,this)},onRemove:function(){this._renderer._removePath(this),this._renderer.off("update",this._update,this)},getEvents:function(){return{zoomend:this._project,viewreset:this._reset}},redraw:function(){return this._map&&this._renderer._updatePath(this),this},setStyle:function(t){return o.setOptions(this,t),this._renderer&&this._renderer._updateStyle(this),this},bringToFront:function(){return this._renderer&&this._renderer._bringToFront(this),this},bringToBack:function(){return this._renderer&&this._renderer._bringToBack(this),this},getElement:function(){return this._path},_reset:function(){this._project(),this._update()},_clickTolerance:function(){return(this.options.stroke?this.options.weight/2:0)+(o.Browser.touch?10:0)}}),o.LineUtil={simplify:function(t,e){if(!e||!t.length)return t.slice()
        var i=e*e
        return t=this._reducePoints(t,i),t=this._simplifyDP(t,i)},pointToSegmentDistance:function(t,e,i){return Math.sqrt(this._sqClosestPointOnSegment(t,e,i,!0))},closestPointOnSegment:function(t,e,i){return this._sqClosestPointOnSegment(t,e,i)},_simplifyDP:function(t,e){var n=t.length,o=typeof Uint8Array!=i+""?Uint8Array:Array,s=new o(n)
        s[0]=s[n-1]=1,this._simplifyDPStep(t,s,e,0,n-1)
        var r,a=[]
        for(r=0
            r<n
        r++)s[r]&&a.push(t[r])
        return a},_simplifyDPStep:function(t,e,i,n,o){var s,r,a,h=0
        for(r=n+1
            r<=o-1
        r++)a=this._sqClosestPointOnSegment(t[r],t[n],t[o],!0),a>h&&(s=r,h=a)
        h>i&&(e[s]=1,this._simplifyDPStep(t,e,i,n,s),this._simplifyDPStep(t,e,i,s,o))},_reducePoints:function(t,e){for(var i=[t[0]],n=1,o=0,s=t.length
        n<s
        n++)this._sqDist(t[n],t[o])>e&&(i.push(t[n]),o=n)
        return o<s-1&&i.push(t[s-1]),i},clipSegment:function(t,e,i,n,o){var s,r,a,h=n?this._lastCode:this._getBitCode(t,i),l=this._getBitCode(e,i)
        for(this._lastCode=l

        ){if(!(h|l))return[t,e]
            if(h&l)return!1
            s=h||l,r=this._getEdgeIntersection(t,e,s,i,o),a=this._getBitCode(r,i),s===h?(t=r,h=a):(e=r,l=a)}},_getEdgeIntersection:function(t,e,i,n,s){var r,a,h=e.x-t.x,l=e.y-t.y,u=n.min,c=n.max
        return 8&i?(r=t.x+h*(c.y-t.y)/l,a=c.y):4&i?(r=t.x+h*(u.y-t.y)/l,a=u.y):2&i?(r=c.x,a=t.y+l*(c.x-t.x)/h):1&i&&(r=u.x,a=t.y+l*(u.x-t.x)/h),new o.Point(r,a,s)},_getBitCode:function(t,e){var i=0
        return t.x<e.min.x?i|=1:t.x>e.max.x&&(i|=2),t.y<e.min.y?i|=4:t.y>e.max.y&&(i|=8),i},_sqDist:function(t,e){var i=e.x-t.x,n=e.y-t.y
        return i*i+n*n},_sqClosestPointOnSegment:function(t,e,i,n){var s,r=e.x,a=e.y,h=i.x-r,l=i.y-a,u=h*h+l*l
        return u>0&&(s=((t.x-r)*h+(t.y-a)*l)/u,s>1?(r=i.x,a=i.y):s>0&&(r+=h*s,a+=l*s)),h=t.x-r,l=t.y-a,n?h*h+l*l:new o.Point(r,a)}},o.Polyline=o.Path.extend({options:{smoothFactor:1,noClip:!1},initialize:function(t,e){o.setOptions(this,e),this._setLatLngs(t)},getLatLngs:function(){return this._latlngs},setLatLngs:function(t){return this._setLatLngs(t),this.redraw()},isEmpty:function(){return!this._latlngs.length},closestLayerPoint:function(t){for(var e,i,n=1/0,s=null,r=o.LineUtil._sqClosestPointOnSegment,a=0,h=this._parts.length
        a<h
        a++)for(var l=this._parts[a],u=1,c=l.length
            u<c
        u++){e=l[u-1],i=l[u]
            var d=r(t,e,i,!0)
            d<n&&(n=d,s=r(t,e,i))}return s&&(s.distance=Math.sqrt(n)),s},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()")
        var t,e,i,n,o,s,r,a=this._rings[0],h=a.length
        if(!h)return null
        for(t=0,e=0
            t<h-1
        t++)e+=a[t].distanceTo(a[t+1])/2
        if(0===e)return this._map.layerPointToLatLng(a[0])
        for(t=0,n=0
            t<h-1
        t++)if(o=a[t],s=a[t+1],i=o.distanceTo(s),n+=i,n>e)return r=(n-e)/i,this._map.layerPointToLatLng([s.x-r*(s.x-o.x),s.y-r*(s.y-o.y)])},getBounds:function(){return this._bounds},addLatLng:function(t,e){return e=e||this._defaultShape(),t=o.latLng(t),e.push(t),this._bounds.extend(t),this.redraw()},_setLatLngs:function(t){this._bounds=new o.LatLngBounds,this._latlngs=this._convertLatLngs(t)},_defaultShape:function(){return o.Polyline._flat(this._latlngs)?this._latlngs:this._latlngs[0]},_convertLatLngs:function(t){for(var e=[],i=o.Polyline._flat(t),n=0,s=t.length
        n<s
        n++)i?(e[n]=o.latLng(t[n]),this._bounds.extend(e[n])):e[n]=this._convertLatLngs(t[n])
        return e},_project:function(){var t=new o.Bounds
        this._rings=[],this._projectLatlngs(this._latlngs,this._rings,t)
        var e=this._clickTolerance(),i=new o.Point(e,e)
        this._bounds.isValid()&&t.isValid()&&(t.min._subtract(i),t.max._add(i),this._pxBounds=t)},_projectLatlngs:function(t,e,i){var n,s,r=t[0]instanceof o.LatLng,a=t.length
        if(r){for(s=[],n=0
            n<a
            n++)s[n]=this._map.latLngToLayerPoint(t[n]),i.extend(s[n])
            e.push(s)}else for(n=0
            n<a
        n++)this._projectLatlngs(t[n],e,i)},_clipPoints:function(){var t=this._renderer._bounds
        if(this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip)return void(this._parts=this._rings)
            var e,i,n,s,r,a,h,l=this._parts
            for(e=0,n=0,s=this._rings.length
                e<s
            e++)for(h=this._rings[e],i=0,r=h.length
                i<r-1
            i++)a=o.LineUtil.clipSegment(h[i],h[i+1],t,i,!0),a&&(l[n]=l[n]||[],l[n].push(a[0]),a[1]===h[i+1]&&i!==r-2||(l[n].push(a[1]),n++))}},_simplifyPoints:function(){for(var t=this._parts,e=this.options.smoothFactor,i=0,n=t.length
        i<n
        i++)t[i]=o.LineUtil.simplify(t[i],e)},_update:function(){this._map&&(this._clipPoints(),this._simplifyPoints(),this._updatePath())},_updatePath:function(){this._renderer._updatePoly(this)}}),o.polyline=function(t,e){return new o.Polyline(t,e)},o.Polyline._flat=function(t){return!o.Util.isArray(t[0])||"object"!=typeof t[0][0]&&"undefined"!=typeof t[0][0]},o.PolyUtil={},o.PolyUtil.clipPolygon=function(t,e,i){var n,s,r,a,h,l,u,c,d,_=[1,4,2,8],m=o.LineUtil
        for(s=0,u=t.length
            s<u
        s++)t[s]._code=m._getBitCode(t[s],e)
        for(a=0
            a<4
        a++){for(c=_[a],n=[],s=0,u=t.length,r=u-1
            s<u
            r=s++)h=t[s],l=t[r],h._code&c?l._code&c||(d=m._getEdgeIntersection(l,h,c,e,i),d._code=m._getBitCode(d,e),n.push(d)):(l._code&c&&(d=m._getEdgeIntersection(l,h,c,e,i),d._code=m._getBitCode(d,e),n.push(d)),n.push(h))
            t=n}return t},o.Polygon=o.Polyline.extend({options:{fill:!0},isEmpty:function(){return!this._latlngs.length||!this._latlngs[0].length},getCenter:function(){if(!this._map)throw new Error("Must add layer to map before using getCenter()")
        var t,e,i,n,o,s,r,a,h,l=this._rings[0],u=l.length
        if(!u)return null
        for(s=r=a=0,t=0,e=u-1
            t<u
        e=t++)i=l[t],n=l[e],o=i.y*n.x-n.y*i.x,r+=(i.x+n.x)*o,a+=(i.y+n.y)*o,s+=3*o
        return h=0===s?l[0]:[r/s,a/s],this._map.layerPointToLatLng(h)},_convertLatLngs:function(t){var e=o.Polyline.prototype._convertLatLngs.call(this,t),i=e.length
        return i>=2&&e[0]instanceof o.LatLng&&e[0].equals(e[i-1])&&e.pop(),e},_setLatLngs:function(t){o.Polyline.prototype._setLatLngs.call(this,t),o.Polyline._flat(this._latlngs)&&(this._latlngs=[this._latlngs])},_defaultShape:function(){return o.Polyline._flat(this._latlngs[0])?this._latlngs[0]:this._latlngs[0][0]},_clipPoints:function(){var t=this._renderer._bounds,e=this.options.weight,i=new o.Point(e,e)
        if(t=new o.Bounds(t.min.subtract(i),t.max.add(i)),this._parts=[],this._pxBounds&&this._pxBounds.intersects(t)){if(this.options.noClip)return void(this._parts=this._rings)
            for(var n,s=0,r=this._rings.length
                s<r
            s++)n=o.PolyUtil.clipPolygon(this._rings[s],t,!0),n.length&&this._parts.push(n)}},_updatePath:function(){this._renderer._updatePoly(this,!0)}}),o.polygon=function(t,e){return new o.Polygon(t,e)},o.Rectangle=o.Polygon.extend({initialize:function(t,e){o.Polygon.prototype.initialize.call(this,this._boundsToLatLngs(t),e)},setBounds:function(t){return this.setLatLngs(this._boundsToLatLngs(t))},_boundsToLatLngs:function(t){return t=o.latLngBounds(t),[t.getSouthWest(),t.getNorthWest(),t.getNorthEast(),t.getSouthEast()]}}),o.rectangle=function(t,e){return new o.Rectangle(t,e)},o.CircleMarker=o.Path.extend({options:{fill:!0,radius:10},initialize:function(t,e){o.setOptions(this,e),this._latlng=o.latLng(t),this._radius=this.options.radius},setLatLng:function(t){return this._latlng=o.latLng(t),this.redraw(),this.fire("move",{latlng:this._latlng})},getLatLng:function(){return this._latlng},setRadius:function(t){return this.options.radius=this._radius=t,this.redraw()},getRadius:function(){return this._radius},setStyle:function(t){var e=t&&t.radius||this._radius
        return o.Path.prototype.setStyle.call(this,t),this.setRadius(e),this},_project:function(){this._point=this._map.latLngToLayerPoint(this._latlng),this._updateBounds()},_updateBounds:function(){var t=this._radius,e=this._radiusY||t,i=this._clickTolerance(),n=[t+i,e+i]
        this._pxBounds=new o.Bounds(this._point.subtract(n),this._point.add(n))},_update:function(){this._map&&this._updatePath()},_updatePath:function(){this._renderer._updateCircle(this)},_empty:function(){return this._radius&&!this._renderer._bounds.intersects(this._pxBounds)}}),o.circleMarker=function(t,e){return new o.CircleMarker(t,e)},o.Circle=o.CircleMarker.extend({initialize:function(t,e,i){if("number"==typeof e&&(e=o.extend({},i,{radius:e})),o.setOptions(this,e),this._latlng=o.latLng(t),isNaN(this.options.radius))throw new Error("Circle radius cannot be NaN")
        this._mRadius=this.options.radius},setRadius:function(t){return this._mRadius=t,this.redraw()},getRadius:function(){return this._mRadius},getBounds:function(){var t=[this._radius,this._radiusY||this._radius]
        return new o.LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(t)),this._map.layerPointToLatLng(this._point.add(t)))},setStyle:o.Path.prototype.setStyle,_project:function(){var t=this._latlng.lng,e=this._latlng.lat,i=this._map,n=i.options.crs
        if(n.distance===o.CRS.Earth.distance){var s=Math.PI/180,r=this._mRadius/o.CRS.Earth.R/s,a=i.project([e+r,t]),h=i.project([e-r,t]),l=a.add(h).divideBy(2),u=i.unproject(l).lat,c=Math.acos((Math.cos(r*s)-Math.sin(e*s)*Math.sin(u*s))/(Math.cos(e*s)*Math.cos(u*s)))/s
            (isNaN(c)||0===c)&&(c=r/Math.cos(Math.PI/180*e)),this._point=l.subtract(i.getPixelOrigin()),this._radius=isNaN(c)?0:Math.max(Math.round(l.x-i.project([u,t-c]).x),1),this._radiusY=Math.max(Math.round(l.y-a.y),1)}else{var d=n.unproject(n.project(this._latlng).subtract([this._mRadius,0]))
            this._point=i.latLngToLayerPoint(this._latlng),this._radius=this._point.x-i.latLngToLayerPoint(d).x}this._updateBounds()}}),o.circle=function(t,e,i){return new o.Circle(t,e,i)},o.SVG=o.Renderer.extend({getEvents:function(){var t=o.Renderer.prototype.getEvents.call(this)
        return t.zoomstart=this._onZoomStart,t},_initContainer:function(){this._container=o.SVG.create("svg"),this._container.setAttribute("pointer-events","none"),this._rootGroup=o.SVG.create("g"),this._container.appendChild(this._rootGroup)},_onZoomStart:function(){this._update()},_update:function(){if(!this._map._animatingZoom||!this._bounds){o.Renderer.prototype._update.call(this)
        var t=this._bounds,e=t.getSize(),i=this._container
        this._svgSize&&this._svgSize.equals(e)||(this._svgSize=e,i.setAttribute("width",e.x),i.setAttribute("height",e.y)),o.DomUtil.setPosition(i,t.min),i.setAttribute("viewBox",[t.min.x,t.min.y,e.x,e.y].join(" ")),this.fire("update")}},_initPath:function(t){var e=t._path=o.SVG.create("path")
        t.options.className&&o.DomUtil.addClass(e,t.options.className),t.options.interactive&&o.DomUtil.addClass(e,"leaflet-interactive"),this._updateStyle(t)},_addPath:function(t){this._rootGroup.appendChild(t._path),t.addInteractiveTarget(t._path)},_removePath:function(t){o.DomUtil.remove(t._path),t.removeInteractiveTarget(t._path)},_updatePath:function(t){t._project(),t._update()},_updateStyle:function(t){var e=t._path,i=t.options
        e&&(i.stroke?(e.setAttribute("stroke",i.color),e.setAttribute("stroke-opacity",i.opacity),e.setAttribute("stroke-width",i.weight),e.setAttribute("stroke-linecap",i.lineCap),e.setAttribute("stroke-linejoin",i.lineJoin),i.dashArray?e.setAttribute("stroke-dasharray",i.dashArray):e.removeAttribute("stroke-dasharray"),i.dashOffset?e.setAttribute("stroke-dashoffset",i.dashOffset):e.removeAttribute("stroke-dashoffset")):e.setAttribute("stroke","none"),i.fill?(e.setAttribute("fill",i.fillColor||i.color),e.setAttribute("fill-opacity",i.fillOpacity),e.setAttribute("fill-rule",i.fillRule||"evenodd")):e.setAttribute("fill","none"))},_updatePoly:function(t,e){this._setPath(t,o.SVG.pointsToPath(t._parts,e))},_updateCircle:function(t){var e=t._point,i=t._radius,n=t._radiusY||i,o="a"+i+","+n+" 0 1,0 ",s=t._empty()?"M0 0":"M"+(e.x-i)+","+e.y+o+2*i+",0 "+o+2*-i+",0 "
        this._setPath(t,s)},_setPath:function(t,e){t._path.setAttribute("d",e)},_bringToFront:function(t){o.DomUtil.toFront(t._path)},_bringToBack:function(t){o.DomUtil.toBack(t._path)}}),o.extend(o.SVG,{create:function(t){return e.createElementNS("http://www.w3.org/2000/svg",t)},pointsToPath:function(t,e){var i,n,s,r,a,h,l=""
        for(i=0,s=t.length
            i<s
        i++){for(a=t[i],n=0,r=a.length
            n<r
            n++)h=a[n],l+=(n?"L":"M")+h.x+" "+h.y
            l+=e?o.Browser.svg?"z":"x":""}return l||"M0 0"}}),o.Browser.svg=!(!e.createElementNS||!o.SVG.create("svg").createSVGRect),o.svg=function(t){return o.Browser.svg||o.Browser.vml?new o.SVG(t):null},o.Browser.vml=!o.Browser.svg&&function(){try{var t=e.createElement("div")
            t.innerHTML='<v:shape adj="1"/>'
            var i=t.firstChild
            return i.style.behavior="url(#default#VML)",i&&"object"==typeof i.adj}catch(t){return!1}}(),o.SVG.include(o.Browser.vml?{_initContainer:function(){this._container=o.DomUtil.create("div","leaflet-vml-container")},_update:function(){this._map._animatingZoom||(o.Renderer.prototype._update.call(this),this.fire("update"))},_initPath:function(t){var e=t._container=o.SVG.create("shape")
        o.DomUtil.addClass(e,"leaflet-vml-shape "+(this.options.className||"")),e.coordsize="1 1",t._path=o.SVG.create("path"),e.appendChild(t._path),this._updateStyle(t)},_addPath:function(t){var e=t._container
        this._container.appendChild(e),t.options.interactive&&t.addInteractiveTarget(e)},_removePath:function(t){var e=t._container
        o.DomUtil.remove(e),t.removeInteractiveTarget(e)},_updateStyle:function(t){var e=t._stroke,i=t._fill,n=t.options,s=t._container
        s.stroked=!!n.stroke,s.filled=!!n.fill,n.stroke?(e||(e=t._stroke=o.SVG.create("stroke")),s.appendChild(e),e.weight=n.weight+"px",e.color=n.color,e.opacity=n.opacity,n.dashArray?e.dashStyle=o.Util.isArray(n.dashArray)?n.dashArray.join(" "):n.dashArray.replace(/( *, *)/g," "):e.dashStyle="",e.endcap=n.lineCap.replace("butt","flat"),e.joinstyle=n.lineJoin):e&&(s.removeChild(e),t._stroke=null),n.fill?(i||(i=t._fill=o.SVG.create("fill")),s.appendChild(i),i.color=n.fillColor||n.color,i.opacity=n.fillOpacity):i&&(s.removeChild(i),t._fill=null)},_updateCircle:function(t){var e=t._point.round(),i=Math.round(t._radius),n=Math.round(t._radiusY||i)
        this._setPath(t,t._empty()?"M0 0":"AL "+e.x+","+e.y+" "+i+","+n+" 0,23592600")},_setPath:function(t,e){t._path.v=e},_bringToFront:function(t){o.DomUtil.toFront(t._container)},_bringToBack:function(t){o.DomUtil.toBack(t._container)}}:{}),o.Browser.vml&&(o.SVG.create=function(){try{return e.namespaces.add("lvml","urn:schemas-microsoft-com:vml"),function(t){return e.createElement("<lvml:"+t+' class="lvml">')}}catch(t){return function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')}}}()),o.Canvas=o.Renderer.extend({onAdd:function(){o.Renderer.prototype.onAdd.call(this),this._layers=this._layers||{},this._draw()},_initContainer:function(){var t=this._container=e.createElement("canvas")
        o.DomEvent.on(t,"mousemove",o.Util.throttle(this._onMouseMove,32,this),this).on(t,"click dblclick mousedown mouseup contextmenu",this._onClick,this).on(t,"mouseout",this._handleMouseOut,this),this._ctx=t.getContext("2d")},_update:function(){if(!this._map._animatingZoom||!this._bounds){this._drawnLayers={},o.Renderer.prototype._update.call(this)
        var t=this._bounds,e=this._container,i=t.getSize(),n=o.Browser.retina?2:1
        o.DomUtil.setPosition(e,t.min),e.width=n*i.x,e.height=n*i.y,e.style.width=i.x+"px",e.style.height=i.y+"px",o.Browser.retina&&this._ctx.scale(2,2),this._ctx.translate(-t.min.x,-t.min.y),this.fire("update")}},_initPath:function(t){this._updateDashArray(t),this._layers[o.stamp(t)]=t},_addPath:o.Util.falseFn,_removePath:function(t){t._removed=!0,this._requestRedraw(t)},_updatePath:function(t){this._redrawBounds=t._pxBounds,this._draw(!0),t._project(),t._update(),this._draw(),this._redrawBounds=null},_updateStyle:function(t){this._updateDashArray(t),this._requestRedraw(t)},_updateDashArray:function(t){if(t.options.dashArray){var e,i=t.options.dashArray.split(","),n=[]
        for(e=0
            e<i.length
        e++)n.push(Number(i[e]))
        t.options._dashArray=n}},_requestRedraw:function(t){if(this._map){var e=(t.options.weight||0)+1
        this._redrawBounds=this._redrawBounds||new o.Bounds,this._redrawBounds.extend(t._pxBounds.min.subtract([e,e])),this._redrawBounds.extend(t._pxBounds.max.add([e,e])),this._redrawRequest=this._redrawRequest||o.Util.requestAnimFrame(this._redraw,this)}},_redraw:function(){this._redrawRequest=null,this._draw(!0),this._draw(),this._redrawBounds=null},_draw:function(t){this._clear=t
        var e,i=this._redrawBounds
        this._ctx.save(),i&&(this._ctx.beginPath(),this._ctx.rect(i.min.x,i.min.y,i.max.x-i.min.x,i.max.y-i.min.y),this._ctx.clip())
        for(var n in this._layers)e=this._layers[n],(!i||e._pxBounds&&e._pxBounds.intersects(i))&&e._updatePath(),t&&e._removed&&(delete e._removed,delete this._layers[n])
        this._ctx.restore()},_updatePoly:function(t,e){var i,n,o,s,r=t._parts,a=r.length,h=this._ctx
        if(a){for(this._drawnLayers[t._leaflet_id]=t,h.beginPath(),h.setLineDash&&h.setLineDash(t.options&&t.options._dashArray||[]),i=0
            i<a
            i++){for(n=0,o=r[i].length
                n<o
                n++)s=r[i][n],h[n?"lineTo":"moveTo"](s.x,s.y)
                e&&h.closePath()}this._fillStroke(h,t)}},_updateCircle:function(t){if(!t._empty()){var e=t._point,i=this._ctx,n=t._radius,o=(t._radiusY||n)/n
        this._drawnLayers[t._leaflet_id]=t,1!==o&&(i.save(),i.scale(1,o)),i.beginPath(),i.arc(e.x,e.y/o,n,0,2*Math.PI,!1),1!==o&&i.restore(),this._fillStroke(i,t)}},_fillStroke:function(t,e){var i=this._clear,n=e.options
        t.globalCompositeOperation=i?"destination-out":"source-over",n.fill&&(t.globalAlpha=i?1:n.fillOpacity,t.fillStyle=n.fillColor||n.color,t.fill(n.fillRule||"evenodd")),n.stroke&&0!==n.weight&&(t.globalAlpha=i?1:n.opacity,e._prevWeight=t.lineWidth=i?e._prevWeight+1:n.weight,t.strokeStyle=n.color,t.lineCap=n.lineCap,t.lineJoin=n.lineJoin,t.stroke())},_onClick:function(t){var e,i=this._map.mouseEventToLayerPoint(t),n=[]
        for(var s in this._layers)e=this._layers[s],e.options.interactive&&e._containsPoint(i)&&!this._map._draggableMoved(e)&&(o.DomEvent._fakeStop(t),n.push(e))
        n.length&&this._fireEvent(n,t)},_onMouseMove:function(t){if(this._map&&!this._map.dragging.moving()&&!this._map._animatingZoom){var e=this._map.mouseEventToLayerPoint(t)
        this._handleMouseOut(t,e),this._handleMouseHover(t,e)}},_handleMouseOut:function(t,e){var i=this._hoveredLayer
        !i||"mouseout"!==t.type&&i._containsPoint(e)||(o.DomUtil.removeClass(this._container,"leaflet-interactive"),this._fireEvent([i],t,"mouseout"),this._hoveredLayer=null)},_handleMouseHover:function(t,e){var i,n
        for(i in this._drawnLayers)n=this._drawnLayers[i],n.options.interactive&&n._containsPoint(e)&&(o.DomUtil.addClass(this._container,"leaflet-interactive"),this._fireEvent([n],t,"mouseover"),this._hoveredLayer=n)
        this._hoveredLayer&&this._fireEvent([this._hoveredLayer],t)},_fireEvent:function(t,e,i){this._map._fireDOMEvent(e,i||e.type,t)},_bringToFront:o.Util.falseFn,_bringToBack:o.Util.falseFn}),o.Browser.canvas=function(){return!!e.createElement("canvas").getContext}(),o.canvas=function(t){return o.Browser.canvas?new o.Canvas(t):null},o.Polyline.prototype._containsPoint=function(t,e){var i,n,s,r,a,h,l=this._clickTolerance()
        if(!this._pxBounds.contains(t))return!1
        for(i=0,r=this._parts.length
            i<r
        i++)for(h=this._parts[i],n=0,a=h.length,s=a-1
            n<a
        s=n++)if((e||0!==n)&&o.LineUtil.pointToSegmentDistance(t,h[s],h[n])<=l)return!0
        return!1},o.Polygon.prototype._containsPoint=function(t){var e,i,n,s,r,a,h,l,u=!1
        if(!this._pxBounds.contains(t))return!1
        for(s=0,h=this._parts.length
            s<h
        s++)for(e=this._parts[s],r=0,l=e.length,a=l-1
            r<l
        a=r++)i=e[r],n=e[a],i.y>t.y!=n.y>t.y&&t.x<(n.x-i.x)*(t.y-i.y)/(n.y-i.y)+i.x&&(u=!u)
        return u||o.Polyline.prototype._containsPoint.call(this,t,!0)},o.CircleMarker.prototype._containsPoint=function(t){return t.distanceTo(this._point)<=this._radius+this._clickTolerance()},o.GeoJSON=o.FeatureGroup.extend({initialize:function(t,e){o.setOptions(this,e),this._layers={},t&&this.addData(t)},addData:function(t){var e,i,n,s=o.Util.isArray(t)?t:t.features
        if(s){for(e=0,i=s.length
            e<i
            e++)n=s[e],(n.geometries||n.geometry||n.features||n.coordinates)&&this.addData(n)
            return this

        }var r=this.options
        if(r.filter&&!r.filter(t))return this
        var a=o.GeoJSON.geometryToLayer(t,r)
        return a?(a.feature=o.GeoJSON.asFeature(t),a.defaultOptions=a.options,this.resetStyle(a),r.onEachFeature&&r.onEachFeature(t,a),this.addLayer(a)):this},resetStyle:function(t){return t.options=o.Util.extend({},t.defaultOptions),this._setLayerStyle(t,this.options.style),this},setStyle:function(t){return this.eachLayer(function(e){this._setLayerStyle(e,t)},this)},_setLayerStyle:function(t,e){"function"==typeof e&&(e=e(t.feature)),t.setStyle&&t.setStyle(e)}}),o.extend(o.GeoJSON,{geometryToLayer:function(t,e){var i,n,s,r,a="Feature"===t.type?t.geometry:t,h=a?a.coordinates:null,l=[],u=e&&e.pointToLayer,c=e&&e.coordsToLatLng||this.coordsToLatLng
        if(!h&&!a)return null
        switch(a.type){case"Point":return i=c(h),u?u(t,i):new o.Marker(i)
            case"MultiPoint":for(s=0,r=h.length
                s<r
                s++)i=c(h[s]),l.push(u?u(t,i):new o.Marker(i))
                return new o.FeatureGroup(l)
            case"LineString":case"MultiLineString":return n=this.coordsToLatLngs(h,"LineString"===a.type?0:1,c),new o.Polyline(n,e)
            case"Polygon":case"MultiPolygon":return n=this.coordsToLatLngs(h,"Polygon"===a.type?1:2,c),new o.Polygon(n,e)
            case"GeometryCollection":for(s=0,r=a.geometries.length
                s<r
                s++){var d=this.geometryToLayer({geometry:a.geometries[s],type:"Feature",properties:t.properties},e)
                d&&l.push(d)}return new o.FeatureGroup(l)
            default:throw new Error("Invalid GeoJSON object.")}},coordsToLatLng:function(t){return new o.LatLng(t[1],t[0],t[2])},coordsToLatLngs:function(t,e,i){for(var n,o=[],s=0,r=t.length
        s<r
        s++)n=e?this.coordsToLatLngs(t[s],e-1,i):(i||this.coordsToLatLng)(t[s]),o.push(n)
        return o},latLngToCoords:function(t){return t.alt!==i?[t.lng,t.lat,t.alt]:[t.lng,t.lat]},latLngsToCoords:function(t,e,i){for(var n=[],s=0,r=t.length
        s<r
        s++)n.push(e?o.GeoJSON.latLngsToCoords(t[s],e-1,i):o.GeoJSON.latLngToCoords(t[s]))
        return!e&&i&&n.push(n[0]),n},getFeature:function(t,e){return t.feature?o.extend({},t.feature,{geometry:e}):o.GeoJSON.asFeature(e)},asFeature:function(t){return"Feature"===t.type?t:{type:"Feature",properties:{},geometry:t}}})
    var r={toGeoJSON:function(){return o.GeoJSON.getFeature(this,{type:"Point",coordinates:o.GeoJSON.latLngToCoords(this.getLatLng())})}}
    o.Marker.include(r),o.Circle.include(r),o.CircleMarker.include(r),o.Polyline.prototype.toGeoJSON=function(){var t=!o.Polyline._flat(this._latlngs),e=o.GeoJSON.latLngsToCoords(this._latlngs,t?1:0)
        return o.GeoJSON.getFeature(this,{type:(t?"Multi":"")+"LineString",coordinates:e})},o.Polygon.prototype.toGeoJSON=function(){var t=!o.Polyline._flat(this._latlngs),e=t&&!o.Polyline._flat(this._latlngs[0]),i=o.GeoJSON.latLngsToCoords(this._latlngs,e?2:t?1:0,!0)
        return t||(i=[i]),o.GeoJSON.getFeature(this,{type:(e?"Multi":"")+"Polygon",coordinates:i})},o.LayerGroup.include({toMultiPoint:function(){var t=[]
        return this.eachLayer(function(e){t.push(e.toGeoJSON().geometry.coordinates)}),o.GeoJSON.getFeature(this,{type:"MultiPoint",coordinates:t})},toGeoJSON:function(){var t=this.feature&&this.feature.geometry&&this.feature.geometry.type
        if("MultiPoint"===t)return this.toMultiPoint()
        var e="GeometryCollection"===t,i=[]
        return this.eachLayer(function(t){if(t.toGeoJSON){var n=t.toGeoJSON()
            i.push(e?n.geometry:o.GeoJSON.asFeature(n))}}),e?o.GeoJSON.getFeature(this,{geometries:i,type:"GeometryCollection"}):{type:"FeatureCollection",features:i}}}),o.geoJSON=function(t,e){return new o.GeoJSON(t,e)},o.geoJson=o.geoJSON
    var a="_leaflet_events"
    o.DomEvent={on:function(t,e,i,n){if("object"==typeof e)for(var s in e)this._on(t,s,e[s],i)
    else{e=o.Util.splitWords(e)
        for(var r=0,a=e.length
            r<a
        r++)this._on(t,e[r],i,n)}return this},off:function(t,e,i,n){if("object"==typeof e)for(var s in e)this._off(t,s,e[s],i)
    else{e=o.Util.splitWords(e)
        for(var r=0,a=e.length
            r<a
        r++)this._off(t,e[r],i,n)}return this},_on:function(e,i,n,s){var r=i+o.stamp(n)+(s?"_"+o.stamp(s):"")
        if(e[a]&&e[a][r])return this
        var h=function(i){return n.call(s||e,i||t.event)},l=h
        return o.Browser.pointer&&0===i.indexOf("touch")?this.addPointerListener(e,i,h,r):o.Browser.touch&&"dblclick"===i&&this.addDoubleTapListener?this.addDoubleTapListener(e,h,r):"addEventListener"in e?"mousewheel"===i?e.addEventListener("onwheel"in e?"wheel":"mousewheel",h,!1):"mouseenter"===i||"mouseleave"===i?(h=function(i){i=i||t.event,o.DomEvent._isExternalTarget(e,i)&&l(i)},e.addEventListener("mouseenter"===i?"mouseover":"mouseout",h,!1)):("click"===i&&o.Browser.android&&(h=function(t){return o.DomEvent._filterClick(t,l)}),e.addEventListener(i,h,!1)):"attachEvent"in e&&e.attachEvent("on"+i,h),e[a]=e[a]||{},e[a][r]=h,this},_off:function(t,e,i,n){var s=e+o.stamp(i)+(n?"_"+o.stamp(n):""),r=t[a]&&t[a][s]
        return r?(o.Browser.pointer&&0===e.indexOf("touch")?this.removePointerListener(t,e,s):o.Browser.touch&&"dblclick"===e&&this.removeDoubleTapListener?this.removeDoubleTapListener(t,s):"removeEventListener"in t?"mousewheel"===e?t.removeEventListener("onwheel"in t?"wheel":"mousewheel",r,!1):t.removeEventListener("mouseenter"===e?"mouseover":"mouseleave"===e?"mouseout":e,r,!1):"detachEvent"in t&&t.detachEvent("on"+e,r),t[a][s]=null,this):this},stopPropagation:function(t){return t.stopPropagation?t.stopPropagation():t.originalEvent?t.originalEvent._stopped=!0:t.cancelBubble=!0,o.DomEvent._skipped(t),this},disableScrollPropagation:function(t){return o.DomEvent.on(t,"mousewheel",o.DomEvent.stopPropagation)},disableClickPropagation:function(t){var e=o.DomEvent.stopPropagation
        return o.DomEvent.on(t,o.Draggable.START.join(" "),e),o.DomEvent.on(t,{click:o.DomEvent._fakeStop,dblclick:e})},preventDefault:function(t){return t.preventDefault?t.preventDefault():t.returnValue=!1,this},stop:function(t){return o.DomEvent.preventDefault(t).stopPropagation(t)},getMousePosition:function(t,e){if(!e)return new o.Point(t.clientX,t.clientY)
        var i=e.getBoundingClientRect()
        return new o.Point(t.clientX-i.left-e.clientLeft,t.clientY-i.top-e.clientTop)},_wheelPxFactor:o.Browser.win&&o.Browser.chrome?2:o.Browser.gecko?t.devicePixelRatio:1,getWheelDelta:function(t){return o.Browser.edge?t.wheelDeltaY/2:t.deltaY&&0===t.deltaMode?-t.deltaY/o.DomEvent._wheelPxFactor:t.deltaY&&1===t.deltaMode?20*-t.deltaY:t.deltaY&&2===t.deltaMode?60*-t.deltaY:t.deltaX||t.deltaZ?0:t.wheelDelta?(t.wheelDeltaY||t.wheelDelta)/2:t.detail&&Math.abs(t.detail)<32765?20*-t.detail:t.detail?t.detail/-32765*60:0},_skipEvents:{},_fakeStop:function(t){o.DomEvent._skipEvents[t.type]=!0},_skipped:function(t){var e=this._skipEvents[t.type]
        return this._skipEvents[t.type]=!1,e},_isExternalTarget:function(t,e){var i=e.relatedTarget
        if(!i)return!0
        try{for(
            i&&i!==t
        )i=i.parentNode}catch(t){return!1}return i!==t},_filterClick:function(t,e){var i=t.timeStamp||t.originalEvent&&t.originalEvent.timeStamp,n=o.DomEvent._lastClick&&i-o.DomEvent._lastClick
        return n&&n>100&&n<500||t.target._simulatedClick&&!t._simulated?void o.DomEvent.stop(t):(o.DomEvent._lastClick=i,void e(t))}},o.DomEvent.addListener=o.DomEvent.on,o.DomEvent.removeListener=o.DomEvent.off,o.Draggable=o.Evented.extend({options:{clickTolerance:3},statics:{START:o.Browser.touch?["touchstart","mousedown"]:["mousedown"],END:{mousedown:"mouseup",touchstart:"touchend",pointerdown:"touchend",MSPointerDown:"touchend"},MOVE:{mousedown:"mousemove",touchstart:"touchmove",pointerdown:"touchmove",MSPointerDown:"touchmove"}},initialize:function(t,e,i){this._element=t,this._dragStartTarget=e||t,this._preventOutline=i},enable:function(){this._enabled||(o.DomEvent.on(this._dragStartTarget,o.Draggable.START.join(" "),this._onDown,this),this._enabled=!0)},disable:function(){this._enabled&&(o.DomEvent.off(this._dragStartTarget,o.Draggable.START.join(" "),this._onDown,this),this._enabled=!1,this._moved=!1)},_onDown:function(t){if(!t._simulated&&this._enabled&&(this._moved=!1,!o.DomUtil.hasClass(this._element,"leaflet-zoom-anim")&&!(o.Draggable._dragging||t.shiftKey||1!==t.which&&1!==t.button&&!t.touches)&&this._enabled&&(o.Draggable._dragging=!0,this._preventOutline&&o.DomUtil.preventOutline(this._element),o.DomUtil.disableImageDrag(),o.DomUtil.disableTextSelection(),!this._moving))){this.fire("down")
        var i=t.touches?t.touches[0]:t
        this._startPoint=new o.Point(i.clientX,i.clientY),o.DomEvent.on(e,o.Draggable.MOVE[t.type],this._onMove,this).on(e,o.Draggable.END[t.type],this._onUp,this)}},_onMove:function(i){if(!i._simulated&&this._enabled){if(i.touches&&i.touches.length>1)return void(this._moved=!0)
        var n=i.touches&&1===i.touches.length?i.touches[0]:i,s=new o.Point(n.clientX,n.clientY),r=s.subtract(this._startPoint)
            (r.x||r.y)&&(Math.abs(r.x)+Math.abs(r.y)<this.options.clickTolerance||(o.DomEvent.preventDefault(i),this._moved||(this.fire("dragstart"),this._moved=!0,this._startPos=o.DomUtil.getPosition(this._element).subtract(r),o.DomUtil.addClass(e.body,"leaflet-dragging"),this._lastTarget=i.target||i.srcElement,t.SVGElementInstance&&this._lastTarget instanceof SVGElementInstance&&(this._lastTarget=this._lastTarget.correspondingUseElement),o.DomUtil.addClass(this._lastTarget,"leaflet-drag-target")),this._newPos=this._startPos.add(r),this._moving=!0,o.Util.cancelAnimFrame(this._animRequest),this._lastEvent=i,this._animRequest=o.Util.requestAnimFrame(this._updatePosition,this,!0)))}},_updatePosition:function(){var t={originalEvent:this._lastEvent}
        this.fire("predrag",t),o.DomUtil.setPosition(this._element,this._newPos),this.fire("drag",t)},_onUp:function(t){if(!t._simulated&&this._enabled){o.DomUtil.removeClass(e.body,"leaflet-dragging"),this._lastTarget&&(o.DomUtil.removeClass(this._lastTarget,"leaflet-drag-target"),this._lastTarget=null)
        for(var i in o.Draggable.MOVE)o.DomEvent.off(e,o.Draggable.MOVE[i],this._onMove,this).off(e,o.Draggable.END[i],this._onUp,this)
        o.DomUtil.enableImageDrag(),o.DomUtil.enableTextSelection(),this._moved&&this._moving&&(o.Util.cancelAnimFrame(this._animRequest),this.fire("dragend",{distance:this._newPos.distanceTo(this._startPos)})),this._moving=!1,o.Draggable._dragging=!1}}}),o.Handler=o.Class.extend({initialize:function(t){this._map=t},enable:function(){return this._enabled?this:(this._enabled=!0,this.addHooks(),this)},disable:function(){return this._enabled?(this._enabled=!1,this.removeHooks(),this):this},enabled:function(){return!!this._enabled}}),o.Map.mergeOptions({dragging:!0,inertia:!o.Browser.android23,inertiaDeceleration:3400,inertiaMaxSpeed:1/0,easeLinearity:.2,worldCopyJump:!1,maxBoundsViscosity:0}),o.Map.Drag=o.Handler.extend({addHooks:function(){if(!this._draggable){var t=this._map
        this._draggable=new o.Draggable(t._mapPane,t._container),this._draggable.on({down:this._onDown,dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this),this._draggable.on("predrag",this._onPreDragLimit,this),t.options.worldCopyJump&&(this._draggable.on("predrag",this._onPreDragWrap,this),t.on("zoomend",this._onZoomEnd,this),t.whenReady(this._onZoomEnd,this))}o.DomUtil.addClass(this._map._container,"leaflet-grab leaflet-touch-drag"),this._draggable.enable(),this._positions=[],this._times=[]},removeHooks:function(){o.DomUtil.removeClass(this._map._container,"leaflet-grab"),o.DomUtil.removeClass(this._map._container,"leaflet-touch-drag"),this._draggable.disable()},moved:function(){return this._draggable&&this._draggable._moved},moving:function(){return this._draggable&&this._draggable._moving},_onDown:function(){this._map._stop()},_onDragStart:function(){var t=this._map
        if(this._map.options.maxBounds&&this._map.options.maxBoundsViscosity){var e=o.latLngBounds(this._map.options.maxBounds)
            this._offsetLimit=o.bounds(this._map.latLngToContainerPoint(e.getNorthWest()).multiplyBy(-1),this._map.latLngToContainerPoint(e.getSouthEast()).multiplyBy(-1).add(this._map.getSize())),this._viscosity=Math.min(1,Math.max(0,this._map.options.maxBoundsViscosity))}else this._offsetLimit=null
        t.fire("movestart").fire("dragstart"),t.options.inertia&&(this._positions=[],this._times=[])},_onDrag:function(t){if(this._map.options.inertia){var e=this._lastTime=+new Date,i=this._lastPos=this._draggable._absPos||this._draggable._newPos
        this._positions.push(i),this._times.push(e),e-this._times[0]>50&&(this._positions.shift(),this._times.shift())}this._map.fire("move",t).fire("drag",t)},_onZoomEnd:function(){var t=this._map.getSize().divideBy(2),e=this._map.latLngToLayerPoint([0,0])
        this._initialWorldOffset=e.subtract(t).x,this._worldWidth=this._map.getPixelWorldBounds().getSize().x},_viscousLimit:function(t,e){return t-(t-e)*this._viscosity},_onPreDragLimit:function(){if(this._viscosity&&this._offsetLimit){var t=this._draggable._newPos.subtract(this._draggable._startPos),e=this._offsetLimit
        t.x<e.min.x&&(t.x=this._viscousLimit(t.x,e.min.x)),t.y<e.min.y&&(t.y=this._viscousLimit(t.y,e.min.y)),t.x>e.max.x&&(t.x=this._viscousLimit(t.x,e.max.x)),t.y>e.max.y&&(t.y=this._viscousLimit(t.y,e.max.y)),this._draggable._newPos=this._draggable._startPos.add(t)}},_onPreDragWrap:function(){var t=this._worldWidth,e=Math.round(t/2),i=this._initialWorldOffset,n=this._draggable._newPos.x,o=(n-e+i)%t+e-i,s=(n+e+i)%t-e-i,r=Math.abs(o+i)<Math.abs(s+i)?o:s
        this._draggable._absPos=this._draggable._newPos.clone(),this._draggable._newPos.x=r},_onDragEnd:function(t){var e=this._map,i=e.options,n=!i.inertia||this._times.length<2
        if(e.fire("dragend",t),n)e.fire("moveend")
        else{var s=this._lastPos.subtract(this._positions[0]),r=(this._lastTime-this._times[0])/1e3,a=i.easeLinearity,h=s.multiplyBy(a/r),l=h.distanceTo([0,0]),u=Math.min(i.inertiaMaxSpeed,l),c=h.multiplyBy(u/l),d=u/(i.inertiaDeceleration*a),_=c.multiplyBy(-d/2).round()
            _.x||_.y?(_=e._limitOffset(_,e.options.maxBounds),o.Util.requestAnimFrame(function(){e.panBy(_,{duration:d,easeLinearity:a,noMoveStart:!0,animate:!0})})):e.fire("moveend")}}}),o.Map.addInitHook("addHandler","dragging",o.Map.Drag),o.Map.mergeOptions({doubleClickZoom:!0}),o.Map.DoubleClickZoom=o.Handler.extend({addHooks:function(){this._map.on("dblclick",this._onDoubleClick,this)},removeHooks:function(){this._map.off("dblclick",this._onDoubleClick,this)},_onDoubleClick:function(t){var e=this._map,i=e.getZoom(),n=e.options.zoomDelta,o=t.originalEvent.shiftKey?i-n:i+n
        "center"===e.options.doubleClickZoom?e.setZoom(o):e.setZoomAround(t.containerPoint,o)}}),o.Map.addInitHook("addHandler","doubleClickZoom",o.Map.DoubleClickZoom),o.Map.mergeOptions({scrollWheelZoom:!0,wheelDebounceTime:40,wheelPxPerZoomLevel:60}),o.Map.ScrollWheelZoom=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"mousewheel",this._onWheelScroll,this),this._delta=0},removeHooks:function(){o.DomEvent.off(this._map._container,"mousewheel",this._onWheelScroll,this)},_onWheelScroll:function(t){var e=o.DomEvent.getWheelDelta(t),i=this._map.options.wheelDebounceTime
        this._delta+=e,this._lastMousePos=this._map.mouseEventToContainerPoint(t),this._startTime||(this._startTime=+new Date)
        var n=Math.max(i-(+new Date-this._startTime),0)
        clearTimeout(this._timer),this._timer=setTimeout(o.bind(this._performZoom,this),n),o.DomEvent.stop(t)},_performZoom:function(){var t=this._map,e=t.getZoom(),i=this._map.options.zoomSnap||0
        t._stop()
        var n=this._delta/(4*this._map.options.wheelPxPerZoomLevel),o=4*Math.log(2/(1+Math.exp(-Math.abs(n))))/Math.LN2,s=i?Math.ceil(o/i)*i:o,r=t._limitZoom(e+(this._delta>0?s:-s))-e
        this._delta=0,this._startTime=null,r&&("center"===t.options.scrollWheelZoom?t.setZoom(e+r):t.setZoomAround(this._lastMousePos,e+r))}}),o.Map.addInitHook("addHandler","scrollWheelZoom",o.Map.ScrollWheelZoom),o.extend(o.DomEvent,{_touchstart:o.Browser.msPointer?"MSPointerDown":o.Browser.pointer?"pointerdown":"touchstart",_touchend:o.Browser.msPointer?"MSPointerUp":o.Browser.pointer?"pointerup":"touchend",addDoubleTapListener:function(t,e,i){function n(t){var e
        if(e=o.Browser.pointer?o.DomEvent._pointersCount:t.touches.length,!(e>1)){var i=Date.now(),n=i-(r||i)
            a=t.touches?t.touches[0]:t,h=n>0&&n<=l,r=i}}function s(){if(h&&!a.cancelBubble){if(o.Browser.pointer){var t,i,n={}
        for(i in a)t=a[i],n[i]=t&&t.bind?t.bind(a):t
        a=n}a.type="dblclick",e(a),r=null}}var r,a,h=!1,l=250,u="_leaflet_",c=this._touchstart,d=this._touchend
        return t[u+c+i]=n,t[u+d+i]=s,t[u+"dblclick"+i]=e,t.addEventListener(c,n,!1),t.addEventListener(d,s,!1),o.Browser.edge||t.addEventListener("dblclick",e,!1),this},removeDoubleTapListener:function(t,e){var i="_leaflet_",n=t[i+this._touchstart+e],s=t[i+this._touchend+e],r=t[i+"dblclick"+e]
        return t.removeEventListener(this._touchstart,n,!1),t.removeEventListener(this._touchend,s,!1),o.Browser.edge||t.removeEventListener("dblclick",r,!1),this}}),o.extend(o.DomEvent,{POINTER_DOWN:o.Browser.msPointer?"MSPointerDown":"pointerdown",POINTER_MOVE:o.Browser.msPointer?"MSPointerMove":"pointermove",POINTER_UP:o.Browser.msPointer?"MSPointerUp":"pointerup",POINTER_CANCEL:o.Browser.msPointer?"MSPointerCancel":"pointercancel",TAG_WHITE_LIST:["INPUT","SELECT","OPTION"],_pointers:{},_pointersCount:0,addPointerListener:function(t,e,i,n){return"touchstart"===e?this._addPointerStart(t,i,n):"touchmove"===e?this._addPointerMove(t,i,n):"touchend"===e&&this._addPointerEnd(t,i,n),this},removePointerListener:function(t,e,i){var n=t["_leaflet_"+e+i]
        return"touchstart"===e?t.removeEventListener(this.POINTER_DOWN,n,!1):"touchmove"===e?t.removeEventListener(this.POINTER_MOVE,n,!1):"touchend"===e&&(t.removeEventListener(this.POINTER_UP,n,!1),t.removeEventListener(this.POINTER_CANCEL,n,!1)),this},_addPointerStart:function(t,i,n){var s=o.bind(function(t){if("mouse"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE){if(!(this.TAG_WHITE_LIST.indexOf(t.target.tagName)<0))return
        o.DomEvent.preventDefault(t)}this._handlePointer(t,i)},this)
        if(t["_leaflet_touchstart"+n]=s,t.addEventListener(this.POINTER_DOWN,s,!1),!this._pointerDocListener){var r=o.bind(this._globalPointerUp,this)
            e.documentElement.addEventListener(this.POINTER_DOWN,o.bind(this._globalPointerDown,this),!0),e.documentElement.addEventListener(this.POINTER_MOVE,o.bind(this._globalPointerMove,this),!0),e.documentElement.addEventListener(this.POINTER_UP,r,!0),e.documentElement.addEventListener(this.POINTER_CANCEL,r,!0),this._pointerDocListener=!0}},_globalPointerDown:function(t){this._pointers[t.pointerId]=t,this._pointersCount++},_globalPointerMove:function(t){this._pointers[t.pointerId]&&(this._pointers[t.pointerId]=t)},_globalPointerUp:function(t){delete this._pointers[t.pointerId],this._pointersCount--},_handlePointer:function(t,e){t.touches=[]
        for(var i in this._pointers)t.touches.push(this._pointers[i])
        t.changedTouches=[t],e(t)},_addPointerMove:function(t,e,i){var n=o.bind(function(t){(t.pointerType!==t.MSPOINTER_TYPE_MOUSE&&"mouse"!==t.pointerType||0!==t.buttons)&&this._handlePointer(t,e)},this)
        t["_leaflet_touchmove"+i]=n,t.addEventListener(this.POINTER_MOVE,n,!1)},_addPointerEnd:function(t,e,i){var n=o.bind(function(t){this._handlePointer(t,e)},this)
        t["_leaflet_touchend"+i]=n,t.addEventListener(this.POINTER_UP,n,!1),t.addEventListener(this.POINTER_CANCEL,n,!1)}}),o.Map.mergeOptions({touchZoom:o.Browser.touch&&!o.Browser.android23,bounceAtZoomLimits:!0}),o.Map.TouchZoom=o.Handler.extend({addHooks:function(){o.DomUtil.addClass(this._map._container,"leaflet-touch-zoom"),o.DomEvent.on(this._map._container,"touchstart",this._onTouchStart,this)},removeHooks:function(){o.DomUtil.removeClass(this._map._container,"leaflet-touch-zoom"),o.DomEvent.off(this._map._container,"touchstart",this._onTouchStart,this)},_onTouchStart:function(t){var i=this._map
        if(t.touches&&2===t.touches.length&&!i._animatingZoom&&!this._zooming){var n=i.mouseEventToContainerPoint(t.touches[0]),s=i.mouseEventToContainerPoint(t.touches[1])
            this._centerPoint=i.getSize()._divideBy(2),this._startLatLng=i.containerPointToLatLng(this._centerPoint),"center"!==i.options.touchZoom&&(this._pinchStartLatLng=i.containerPointToLatLng(n.add(s)._divideBy(2))),this._startDist=n.distanceTo(s),this._startZoom=i.getZoom(),this._moved=!1,this._zooming=!0,i._stop(),o.DomEvent.on(e,"touchmove",this._onTouchMove,this).on(e,"touchend",this._onTouchEnd,this),o.DomEvent.preventDefault(t)}},_onTouchMove:function(t){if(t.touches&&2===t.touches.length&&this._zooming){var e=this._map,i=e.mouseEventToContainerPoint(t.touches[0]),n=e.mouseEventToContainerPoint(t.touches[1]),s=i.distanceTo(n)/this._startDist
        if(this._zoom=e.getScaleZoom(s,this._startZoom),!e.options.bounceAtZoomLimits&&(this._zoom<e.getMinZoom()&&s<1||this._zoom>e.getMaxZoom()&&s>1)&&(this._zoom=e._limitZoom(this._zoom)),"center"===e.options.touchZoom){if(this._center=this._startLatLng,1===s)return}else{var r=i._add(n)._divideBy(2)._subtract(this._centerPoint)
            if(1===s&&0===r.x&&0===r.y)return
            this._center=e.unproject(e.project(this._pinchStartLatLng,this._zoom).subtract(r),this._zoom)}this._moved||(e._moveStart(!0),this._moved=!0),o.Util.cancelAnimFrame(this._animRequest)
        var a=o.bind(e._move,e,this._center,this._zoom,{pinch:!0,round:!1})
        this._animRequest=o.Util.requestAnimFrame(a,this,!0),o.DomEvent.preventDefault(t)}},_onTouchEnd:function(){return this._moved&&this._zooming?(this._zooming=!1,o.Util.cancelAnimFrame(this._animRequest),o.DomEvent.off(e,"touchmove",this._onTouchMove).off(e,"touchend",this._onTouchEnd),void(this._map.options.zoomAnimation?this._map._animateZoom(this._center,this._map._limitZoom(this._zoom),!0,this._map.options.zoomSnap):this._map._resetView(this._center,this._map._limitZoom(this._zoom)))):void(this._zooming=!1)}}),o.Map.addInitHook("addHandler","touchZoom",o.Map.TouchZoom),o.Map.mergeOptions({tap:!0,tapTolerance:15}),o.Map.Tap=o.Handler.extend({addHooks:function(){o.DomEvent.on(this._map._container,"touchstart",this._onDown,this)},removeHooks:function(){o.DomEvent.off(this._map._container,"touchstart",this._onDown,this)},_onDown:function(t){if(t.touches){if(o.DomEvent.preventDefault(t),this._fireClick=!0,t.touches.length>1)return this._fireClick=!1,void clearTimeout(this._holdTimeout)
        var i=t.touches[0],n=i.target
        this._startPos=this._newPos=new o.Point(i.clientX,i.clientY),n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.addClass(n,"leaflet-active"),this._holdTimeout=setTimeout(o.bind(function(){this._isTapValid()&&(this._fireClick=!1,this._onUp(),this._simulateEvent("contextmenu",i))},this),1e3),this._simulateEvent("mousedown",i),o.DomEvent.on(e,{touchmove:this._onMove,touchend:this._onUp},this)}},_onUp:function(t){if(clearTimeout(this._holdTimeout),o.DomEvent.off(e,{touchmove:this._onMove,touchend:this._onUp},this),this._fireClick&&t&&t.changedTouches){var i=t.changedTouches[0],n=i.target
        n&&n.tagName&&"a"===n.tagName.toLowerCase()&&o.DomUtil.removeClass(n,"leaflet-active"),this._simulateEvent("mouseup",i),this._isTapValid()&&this._simulateEvent("click",i)}},_isTapValid:function(){return this._newPos.distanceTo(this._startPos)<=this._map.options.tapTolerance},_onMove:function(t){var e=t.touches[0]
        this._newPos=new o.Point(e.clientX,e.clientY),this._simulateEvent("mousemove",e)},_simulateEvent:function(i,n){var o=e.createEvent("MouseEvents")
        o._simulated=!0,n.target._simulatedClick=!0,o.initMouseEvent(i,!0,!0,t,1,n.screenX,n.screenY,n.clientX,n.clientY,!1,!1,!1,!1,0,null),n.target.dispatchEvent(o)}}),o.Browser.touch&&!o.Browser.pointer&&o.Map.addInitHook("addHandler","tap",o.Map.Tap),o.Map.mergeOptions({boxZoom:!0}),o.Map.BoxZoom=o.Handler.extend({initialize:function(t){this._map=t,this._container=t._container,this._pane=t._panes.overlayPane},addHooks:function(){o.DomEvent.on(this._container,"mousedown",this._onMouseDown,this)},removeHooks:function(){o.DomEvent.off(this._container,"mousedown",this._onMouseDown,this)},moved:function(){return this._moved},_resetState:function(){this._moved=!1},_onMouseDown:function(t){return!(!t.shiftKey||1!==t.which&&1!==t.button)&&(this._resetState(),o.DomUtil.disableTextSelection(),o.DomUtil.disableImageDrag(),this._startPoint=this._map.mouseEventToContainerPoint(t),void o.DomEvent.on(e,{contextmenu:o.DomEvent.stop,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this))},_onMouseMove:function(t){this._moved||(this._moved=!0,this._box=o.DomUtil.create("div","leaflet-zoom-box",this._container),o.DomUtil.addClass(this._container,"leaflet-crosshair"),this._map.fire("boxzoomstart")),this._point=this._map.mouseEventToContainerPoint(t)
        var e=new o.Bounds(this._point,this._startPoint),i=e.getSize()
        o.DomUtil.setPosition(this._box,e.min),this._box.style.width=i.x+"px",this._box.style.height=i.y+"px"},_finish:function(){this._moved&&(o.DomUtil.remove(this._box),o.DomUtil.removeClass(this._container,"leaflet-crosshair")),o.DomUtil.enableTextSelection(),o.DomUtil.enableImageDrag(),o.DomEvent.off(e,{contextmenu:o.DomEvent.stop,mousemove:this._onMouseMove,mouseup:this._onMouseUp,keydown:this._onKeyDown},this)},_onMouseUp:function(t){if((1===t.which||1===t.button)&&(this._finish(),this._moved)){setTimeout(o.bind(this._resetState,this),0)
        var e=new o.LatLngBounds(this._map.containerPointToLatLng(this._startPoint),this._map.containerPointToLatLng(this._point))
        this._map.fitBounds(e).fire("boxzoomend",{boxZoomBounds:e})}},_onKeyDown:function(t){27===t.keyCode&&this._finish()}}),o.Map.addInitHook("addHandler","boxZoom",o.Map.BoxZoom),o.Map.mergeOptions({keyboard:!0,keyboardPanDelta:80}),o.Map.Keyboard=o.Handler.extend({keyCodes:{left:[37],right:[39],down:[40],up:[38],zoomIn:[187,107,61,171],zoomOut:[189,109,54,173]},initialize:function(t){this._map=t,this._setPanDelta(t.options.keyboardPanDelta),this._setZoomDelta(t.options.zoomDelta)},addHooks:function(){var t=this._map._container
        t.tabIndex<=0&&(t.tabIndex="0"),o.DomEvent.on(t,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.on({focus:this._addHooks,blur:this._removeHooks},this)},removeHooks:function(){this._removeHooks(),o.DomEvent.off(this._map._container,{focus:this._onFocus,blur:this._onBlur,mousedown:this._onMouseDown},this),this._map.off({focus:this._addHooks,blur:this._removeHooks},this)},_onMouseDown:function(){if(!this._focused){var i=e.body,n=e.documentElement,o=i.scrollTop||n.scrollTop,s=i.scrollLeft||n.scrollLeft
        this._map._container.focus(),t.scrollTo(s,o)}},_onFocus:function(){this._focused=!0,this._map.fire("focus")},_onBlur:function(){this._focused=!1,this._map.fire("blur")},_setPanDelta:function(t){var e,i,n=this._panKeys={},o=this.keyCodes
        for(e=0,i=o.left.length
            e<i
        e++)n[o.left[e]]=[-1*t,0]
        for(e=0,i=o.right.length
            e<i
        e++)n[o.right[e]]=[t,0]
        for(e=0,i=o.down.length
            e<i
        e++)n[o.down[e]]=[0,t]
        for(e=0,i=o.up.length
            e<i
        e++)n[o.up[e]]=[0,-1*t]},_setZoomDelta:function(t){var e,i,n=this._zoomKeys={},o=this.keyCodes
        for(e=0,i=o.zoomIn.length
            e<i
        e++)n[o.zoomIn[e]]=t
        for(e=0,i=o.zoomOut.length
            e<i
        e++)n[o.zoomOut[e]]=-t},_addHooks:function(){o.DomEvent.on(e,"keydown",this._onKeyDown,this)},_removeHooks:function(){o.DomEvent.off(e,"keydown",this._onKeyDown,this)},_onKeyDown:function(t){if(!(t.altKey||t.ctrlKey||t.metaKey)){var e,i=t.keyCode,n=this._map
        if(i in this._panKeys){if(n._panAnim&&n._panAnim._inProgress)return
            e=this._panKeys[i],t.shiftKey&&(e=o.point(e).multiplyBy(3)),n.panBy(e),n.options.maxBounds&&n.panInsideBounds(n.options.maxBounds)}else if(i in this._zoomKeys)n.setZoom(n.getZoom()+(t.shiftKey?3:1)*this._zoomKeys[i])
        else{if(27!==i)return
            n.closePopup()}o.DomEvent.stop(t)}}}),o.Map.addInitHook("addHandler","keyboard",o.Map.Keyboard),o.Handler.MarkerDrag=o.Handler.extend({initialize:function(t){this._marker=t},addHooks:function(){var t=this._marker._icon
        this._draggable||(this._draggable=new o.Draggable(t,t,!0)),this._draggable.on({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this).enable(),o.DomUtil.addClass(t,"leaflet-marker-draggable")},removeHooks:function(){this._draggable.off({dragstart:this._onDragStart,drag:this._onDrag,dragend:this._onDragEnd},this).disable(),this._marker._icon&&o.DomUtil.removeClass(this._marker._icon,"leaflet-marker-draggable")},moved:function(){return this._draggable&&this._draggable._moved},_onDragStart:function(){this._oldLatLng=this._marker.getLatLng(),this._marker.closePopup().fire("movestart").fire("dragstart")},_onDrag:function(t){var e=this._marker,i=e._shadow,n=o.DomUtil.getPosition(e._icon),s=e._map.layerPointToLatLng(n)
        i&&o.DomUtil.setPosition(i,n),e._latlng=s,t.latlng=s,t.oldLatLng=this._oldLatLng,e.fire("move",t).fire("drag",t)},_onDragEnd:function(t){delete this._oldLatLng,this._marker.fire("moveend").fire("dragend",t)}}),o.Control=o.Class.extend({options:{position:"topright"},initialize:function(t){o.setOptions(this,t)},getPosition:function(){return this.options.position},setPosition:function(t){var e=this._map
        return e&&e.removeControl(this),this.options.position=t,e&&e.addControl(this),this},getContainer:function(){return this._container},addTo:function(t){this.remove(),this._map=t
        var e=this._container=this.onAdd(t),i=this.getPosition(),n=t._controlCorners[i]
        return o.DomUtil.addClass(e,"leaflet-control"),i.indexOf("bottom")!==-1?n.insertBefore(e,n.firstChild):n.appendChild(e),this},remove:function(){return this._map?(o.DomUtil.remove(this._container),this.onRemove&&this.onRemove(this._map),this._map=null,this):this},_refocusOnMap:function(t){this._map&&t&&t.screenX>0&&t.screenY>0&&this._map.getContainer().focus()}}),o.control=function(t){return new o.Control(t)},o.Map.include({addControl:function(t){return t.addTo(this),this},removeControl:function(t){return t.remove(),this},_initControlPos:function(){function t(t,s){var r=i+t+" "+i+s
        e[t+s]=o.DomUtil.create("div",r,n)}var e=this._controlCorners={},i="leaflet-",n=this._controlContainer=o.DomUtil.create("div",i+"control-container",this._container)
        t("top","left"),t("top","right"),t("bottom","left"),t("bottom","right")},_clearControlPos:function(){o.DomUtil.remove(this._controlContainer)}}),o.Control.Zoom=o.Control.extend({options:{position:"topleft",zoomInText:"+",zoomInTitle:"Zoom in",zoomOutText:"-",zoomOutTitle:"Zoom out"},onAdd:function(t){var e="leaflet-control-zoom",i=o.DomUtil.create("div",e+" leaflet-bar"),n=this.options
        return this._zoomInButton=this._createButton(n.zoomInText,n.zoomInTitle,e+"-in",i,this._zoomIn),this._zoomOutButton=this._createButton(n.zoomOutText,n.zoomOutTitle,e+"-out",i,this._zoomOut),this._updateDisabled(),t.on("zoomend zoomlevelschange",this._updateDisabled,this),i},onRemove:function(t){t.off("zoomend zoomlevelschange",this._updateDisabled,this)},disable:function(){return this._disabled=!0,this._updateDisabled(),this},enable:function(){return this._disabled=!1,this._updateDisabled(),this},_zoomIn:function(t){!this._disabled&&this._map._zoom<this._map.getMaxZoom()&&this._map.zoomIn(this._map.options.zoomDelta*(t.shiftKey?3:1))},_zoomOut:function(t){!this._disabled&&this._map._zoom>this._map.getMinZoom()&&this._map.zoomOut(this._map.options.zoomDelta*(t.shiftKey?3:1))},_createButton:function(t,e,i,n,s){var r=o.DomUtil.create("a",i,n)
        return r.innerHTML=t,r.href="#",r.title=e,o.DomEvent.on(r,"mousedown dblclick",o.DomEvent.stopPropagation).on(r,"click",o.DomEvent.stop).on(r,"click",s,this).on(r,"click",this._refocusOnMap,this),r},_updateDisabled:function(){var t=this._map,e="leaflet-disabled"
        o.DomUtil.removeClass(this._zoomInButton,e),o.DomUtil.removeClass(this._zoomOutButton,e),(this._disabled||t._zoom===t.getMinZoom())&&o.DomUtil.addClass(this._zoomOutButton,e),(this._disabled||t._zoom===t.getMaxZoom())&&o.DomUtil.addClass(this._zoomInButton,e)}}),o.Map.mergeOptions({zoomControl:!0}),o.Map.addInitHook(function(){this.options.zoomControl&&(this.zoomControl=new o.Control.Zoom,this.addControl(this.zoomControl))}),o.control.zoom=function(t){return new o.Control.Zoom(t)},o.Control.Attribution=o.Control.extend({options:{position:"bottomright",prefix:'<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a>'},initialize:function(t){o.setOptions(this,t),this._attributions={}},onAdd:function(t){t.attributionControl=this,this._container=o.DomUtil.create("div","leaflet-control-attribution"),o.DomEvent&&o.DomEvent.disableClickPropagation(this._container)
        for(var e in t._layers)t._layers[e].getAttribution&&this.addAttribution(t._layers[e].getAttribution())

        return this._update(),this._container},setPrefix:function(t){return this.options.prefix=t,this._update(),this},addAttribution:function(t){return t?(this._attributions[t]||(this._attributions[t]=0),this._attributions[t]++,this._update(),this):this},removeAttribution:function(t){return t?(this._attributions[t]&&(this._attributions[t]--,this._update()),this):this},_update:function(){if(this._map){var t=[]
        for(var e in this._attributions)this._attributions[e]&&t.push(e)
        var i=[]
        this.options.prefix&&i.push(this.options.prefix),t.length&&i.push(t.join(", ")),this._container.innerHTML=i.join(" | ")}}}),o.Map.mergeOptions({attributionControl:!0}),o.Map.addInitHook(function(){this.options.attributionControl&&(new o.Control.Attribution).addTo(this)}),o.control.attribution=function(t){return new o.Control.Attribution(t)},o.Control.Scale=o.Control.extend({options:{position:"bottomleft",maxWidth:100,metric:!0,imperial:!0},onAdd:function(t){var e="leaflet-control-scale",i=o.DomUtil.create("div",e),n=this.options
        return this._addScales(n,e+"-line",i),t.on(n.updateWhenIdle?"moveend":"move",this._update,this),t.whenReady(this._update,this),i},onRemove:function(t){t.off(this.options.updateWhenIdle?"moveend":"move",this._update,this)},_addScales:function(t,e,i){t.metric&&(this._mScale=o.DomUtil.create("div",e,i)),t.imperial&&(this._iScale=o.DomUtil.create("div",e,i))},_update:function(){var t=this._map,e=t.getSize().y/2,i=t.distance(t.containerPointToLatLng([0,e]),t.containerPointToLatLng([this.options.maxWidth,e]))
        this._updateScales(i)},_updateScales:function(t){this.options.metric&&t&&this._updateMetric(t),this.options.imperial&&t&&this._updateImperial(t)},_updateMetric:function(t){var e=this._getRoundNum(t),i=e<1e3?e+" m":e/1e3+" km"
        this._updateScale(this._mScale,i,e/t)},_updateImperial:function(t){var e,i,n,o=3.2808399*t
        o>5280?(e=o/5280,i=this._getRoundNum(e),this._updateScale(this._iScale,i+" mi",i/e)):(n=this._getRoundNum(o),this._updateScale(this._iScale,n+" ft",n/o))},_updateScale:function(t,e,i){t.style.width=Math.round(this.options.maxWidth*i)+"px",t.innerHTML=e},_getRoundNum:function(t){var e=Math.pow(10,(Math.floor(t)+"").length-1),i=t/e
        return i=i>=10?10:i>=5?5:i>=3?3:i>=2?2:1,e*i}}),o.control.scale=function(t){return new o.Control.Scale(t)},o.Control.Layers=o.Control.extend({options:{collapsed:!0,position:"topright",autoZIndex:!0,hideSingleBase:!1},initialize:function(t,e,i){o.setOptions(this,i),this._layers=[],this._lastZIndex=0,this._handlingClick=!1
        for(var n in t)this._addLayer(t[n],n)
        for(n in e)this._addLayer(e[n],n,!0)},onAdd:function(t){return this._initLayout(),this._update(),this._map=t,t.on("zoomend",this._checkDisabledLayers,this),this._container},onRemove:function(){this._map.off("zoomend",this._checkDisabledLayers,this)
        for(var t=0
            t<this._layers.length
        t++)this._layers[t].layer.off("add remove",this._onLayerChange,this)},addBaseLayer:function(t,e){return this._addLayer(t,e),this._map?this._update():this},addOverlay:function(t,e){return this._addLayer(t,e,!0),this._map?this._update():this},removeLayer:function(t){t.off("add remove",this._onLayerChange,this)
        var e=this._getLayer(o.stamp(t))
        return e&&this._layers.splice(this._layers.indexOf(e),1),this._map?this._update():this},expand:function(){o.DomUtil.addClass(this._container,"leaflet-control-layers-expanded"),this._form.style.height=null
        var t=this._map.getSize().y-(this._container.offsetTop+50)
        return t<this._form.clientHeight?(o.DomUtil.addClass(this._form,"leaflet-control-layers-scrollbar"),this._form.style.height=t+"px"):o.DomUtil.removeClass(this._form,"leaflet-control-layers-scrollbar"),this._checkDisabledLayers(),this},collapse:function(){return o.DomUtil.removeClass(this._container,"leaflet-control-layers-expanded"),this},_initLayout:function(){var t="leaflet-control-layers",e=this._container=o.DomUtil.create("div",t)
        e.setAttribute("aria-haspopup",!0),o.DomEvent.disableClickPropagation(e),o.Browser.touch||o.DomEvent.disableScrollPropagation(e)
        var i=this._form=o.DomUtil.create("form",t+"-list")
        if(this.options.collapsed){o.Browser.android||o.DomEvent.on(e,{mouseenter:this.expand,mouseleave:this.collapse},this)
            var n=this._layersLink=o.DomUtil.create("a",t+"-toggle",e)
            n.href="#",n.title="Layers",o.Browser.touch?o.DomEvent.on(n,"click",o.DomEvent.stop).on(n,"click",this.expand,this):o.DomEvent.on(n,"focus",this.expand,this),o.DomEvent.on(i,"click",function(){setTimeout(o.bind(this._onInputClick,this),0)},this),this._map.on("click",this.collapse,this)}else this.expand()
        this._baseLayersList=o.DomUtil.create("div",t+"-base",i),this._separator=o.DomUtil.create("div",t+"-separator",i),this._overlaysList=o.DomUtil.create("div",t+"-overlays",i),e.appendChild(i)},_getLayer:function(t){for(var e=0
        e<this._layers.length
        e++)if(this._layers[e]&&o.stamp(this._layers[e].layer)===t)return this._layers[e]},_addLayer:function(t,e,i){t.on("add remove",this._onLayerChange,this),this._layers.push({layer:t,name:e,overlay:i}),this.options.autoZIndex&&t.setZIndex&&(this._lastZIndex++,t.setZIndex(this._lastZIndex))},_update:function(){if(!this._container)return this
        o.DomUtil.empty(this._baseLayersList),o.DomUtil.empty(this._overlaysList)
        var t,e,i,n,s=0
        for(i=0
            i<this._layers.length
        i++)n=this._layers[i],this._addItem(n),e=e||n.overlay,t=t||!n.overlay,s+=n.overlay?0:1
        return this.options.hideSingleBase&&(t=t&&s>1,this._baseLayersList.style.display=t?"":"none"),this._separator.style.display=e&&t?"":"none",this},_onLayerChange:function(t){this._handlingClick||this._update()
        var e=this._getLayer(o.stamp(t.target)),i=e.overlay?"add"===t.type?"overlayadd":"overlayremove":"add"===t.type?"baselayerchange":null
        i&&this._map.fire(i,e)},_createRadioElement:function(t,i){var n='<input type="radio" class="leaflet-control-layers-selector" name="'+t+'"'+(i?' checked="checked"':"")+"/>",o=e.createElement("div")
        return o.innerHTML=n,o.firstChild},_addItem:function(t){var i,n=e.createElement("label"),s=this._map.hasLayer(t.layer)
        t.overlay?(i=e.createElement("input"),i.type="checkbox",i.className="leaflet-control-layers-selector",i.defaultChecked=s):i=this._createRadioElement("leaflet-base-layers",s),i.layerId=o.stamp(t.layer),o.DomEvent.on(i,"click",this._onInputClick,this)
        var r=e.createElement("span")
        r.innerHTML=" "+t.name
        var a=e.createElement("div")
        n.appendChild(a),a.appendChild(i),a.appendChild(r)
        var h=t.overlay?this._overlaysList:this._baseLayersList
        return h.appendChild(n),this._checkDisabledLayers(),n},_onInputClick:function(){var t,e,i,n=this._form.getElementsByTagName("input"),o=[],s=[]
        this._handlingClick=!0
        for(var r=n.length-1
            r>=0
        r--)t=n[r],e=this._getLayer(t.layerId).layer,i=this._map.hasLayer(e),t.checked&&!i?o.push(e):!t.checked&&i&&s.push(e)
        for(r=0
            r<s.length
        r++)this._map.removeLayer(s[r])
        for(r=0
            r<o.length
        r++)this._map.addLayer(o[r])
        this._handlingClick=!1,this._refocusOnMap()},_checkDisabledLayers:function(){for(var t,e,n=this._form.getElementsByTagName("input"),o=this._map.getZoom(),s=n.length-1
        s>=0
        s--)t=n[s],e=this._getLayer(t.layerId).layer,t.disabled=e.options.minZoom!==i&&o<e.options.minZoom||e.options.maxZoom!==i&&o>e.options.maxZoom},_expand:function(){return this.expand()},_collapse:function(){return this.collapse()}}),o.control.layers=function(t,e,i){return new o.Control.Layers(t,e,i)},o.PosAnimation=o.Evented.extend({run:function(t,e,i,n){this.stop(),this._el=t,this._inProgress=!0,this._duration=i||.25,this._easeOutPower=1/Math.max(n||.5,.2),this._startPos=o.DomUtil.getPosition(t),this._offset=e.subtract(this._startPos),this._startTime=+new Date,this.fire("start"),this._animate()},stop:function(){this._inProgress&&(this._step(!0),this._complete())},_animate:function(){this._animId=o.Util.requestAnimFrame(this._animate,this),this._step()},_step:function(t){var e=+new Date-this._startTime,i=1e3*this._duration
        e<i?this._runFrame(this._easeOut(e/i),t):(this._runFrame(1),this._complete())},_runFrame:function(t,e){var i=this._startPos.add(this._offset.multiplyBy(t))
        e&&i._round(),o.DomUtil.setPosition(this._el,i),this.fire("step")},_complete:function(){o.Util.cancelAnimFrame(this._animId),this._inProgress=!1,this.fire("end")},_easeOut:function(t){return 1-Math.pow(1-t,this._easeOutPower)}}),o.Map.include({setView:function(t,e,n){if(e=e===i?this._zoom:this._limitZoom(e),t=this._limitCenter(o.latLng(t),e,this.options.maxBounds),n=n||{},this._stop(),this._loaded&&!n.reset&&n!==!0){n.animate!==i&&(n.zoom=o.extend({animate:n.animate},n.zoom),n.pan=o.extend({animate:n.animate,duration:n.duration},n.pan))
        var s=this._zoom!==e?this._tryAnimatedZoom&&this._tryAnimatedZoom(t,e,n.zoom):this._tryAnimatedPan(t,n.pan)
        if(s)return clearTimeout(this._sizeTimer),this}return this._resetView(t,e),this},panBy:function(t,e){if(t=o.point(t).round(),e=e||{},!t.x&&!t.y)return this.fire("moveend")
        if(e.animate!==!0&&!this.getSize().contains(t))return this._resetView(this.unproject(this.project(this.getCenter()).add(t)),this.getZoom()),this
        if(this._panAnim||(this._panAnim=new o.PosAnimation,this._panAnim.on({step:this._onPanTransitionStep,end:this._onPanTransitionEnd},this)),e.noMoveStart||this.fire("movestart"),e.animate!==!1){o.DomUtil.addClass(this._mapPane,"leaflet-pan-anim")
            var i=this._getMapPanePos().subtract(t).round()
            this._panAnim.run(this._mapPane,i,e.duration||.25,e.easeLinearity)}else this._rawPanBy(t),this.fire("move").fire("moveend")
        return this},_onPanTransitionStep:function(){this.fire("move")},_onPanTransitionEnd:function(){o.DomUtil.removeClass(this._mapPane,"leaflet-pan-anim"),this.fire("moveend")},_tryAnimatedPan:function(t,e){var i=this._getCenterOffset(t)._floor()
        return!((e&&e.animate)!==!0&&!this.getSize().contains(i))&&(this.panBy(i,e),!0)}}),o.Map.mergeOptions({zoomAnimation:!0,zoomAnimationThreshold:4})
    var h=o.DomUtil.TRANSITION&&o.Browser.any3d&&!o.Browser.mobileOpera
    h&&o.Map.addInitHook(function(){this._zoomAnimated=this.options.zoomAnimation,this._zoomAnimated&&(this._createAnimProxy(),o.DomEvent.on(this._proxy,o.DomUtil.TRANSITION_END,this._catchTransitionEnd,this))}),o.Map.include(h?{_createAnimProxy:function(){var t=this._proxy=o.DomUtil.create("div","leaflet-proxy leaflet-zoom-animated")
        this._panes.mapPane.appendChild(t),this.on("zoomanim",function(e){var i=o.DomUtil.TRANSFORM,n=t.style[i]
            o.DomUtil.setTransform(t,this.project(e.center,e.zoom),this.getZoomScale(e.zoom,1)),n===t.style[i]&&this._animatingZoom&&this._onZoomTransitionEnd()},this),this.on("load moveend",function(){var e=this.getCenter(),i=this.getZoom()
            o.DomUtil.setTransform(t,this.project(e,i),this.getZoomScale(i,1))},this)},_catchTransitionEnd:function(t){this._animatingZoom&&t.propertyName.indexOf("transform")>=0&&this._onZoomTransitionEnd()},_nothingToAnimate:function(){return!this._container.getElementsByClassName("leaflet-zoom-animated").length},_tryAnimatedZoom:function(t,e,i){if(this._animatingZoom)return!0
        if(i=i||{},!this._zoomAnimated||i.animate===!1||this._nothingToAnimate()||Math.abs(e-this._zoom)>this.options.zoomAnimationThreshold)return!1
        var n=this.getZoomScale(e),s=this._getCenterOffset(t)._divideBy(1-1/n)
        return!(i.animate!==!0&&!this.getSize().contains(s))&&(o.Util.requestAnimFrame(function(){this._moveStart(!0)._animateZoom(t,e,!0)},this),!0)},_animateZoom:function(t,e,i,n){i&&(this._animatingZoom=!0,this._animateToCenter=t,this._animateToZoom=e,o.DomUtil.addClass(this._mapPane,"leaflet-zoom-anim")),this.fire("zoomanim",{center:t,zoom:e,noUpdate:n}),setTimeout(o.bind(this._onZoomTransitionEnd,this),250)},_onZoomTransitionEnd:function(){this._animatingZoom&&(o.DomUtil.removeClass(this._mapPane,"leaflet-zoom-anim"),this._animatingZoom=!1,this._move(this._animateToCenter,this._animateToZoom),o.Util.requestAnimFrame(function(){this._moveEnd(!0)},this))}}:{}),o.Map.include({flyTo:function(t,e,n){function s(t){var e=t?-1:1,i=t?v:g,n=v*v-g*g+e*L*L*y*y,o=2*i*L*y,s=n/o,r=Math.sqrt(s*s+1)-s,a=r<1e-9?-18:Math.log(r)
        return a}function r(t){return(Math.exp(t)-Math.exp(-t))/2}function a(t){return(Math.exp(t)+Math.exp(-t))/2}function h(t){return r(t)/a(t)}function l(t){return g*(a(x)/a(x+P*t))}function u(t){return g*(a(x)*h(x+P*t)-r(x))/L}function c(t){return 1-Math.pow(1-t,1.5)}function d(){var i=(Date.now()-b)/T,n=c(i)*w
        i<=1?(this._flyToFrame=o.Util.requestAnimFrame(d,this),this._move(this.unproject(_.add(m.subtract(_).multiplyBy(u(n)/y)),f),this.getScaleZoom(g/l(n),f),{flyTo:!0})):this._move(t,e)._moveEnd(!0)}if(n=n||{},n.animate===!1||!o.Browser.any3d)return this.setView(t,e,n)
        this._stop()
        var _=this.project(this.getCenter()),m=this.project(t),p=this.getSize(),f=this._zoom
        t=o.latLng(t),e=e===i?f:e
        var g=Math.max(p.x,p.y),v=g*this.getZoomScale(f,e),y=m.distanceTo(_)||1,P=1.42,L=P*P,x=s(0),b=Date.now(),w=(s(1)-x)/P,T=n.duration?1e3*n.duration:1e3*w*.8
        return this._moveStart(!0),d.call(this),this},flyToBounds:function(t,e){var i=this._getBoundsCenterZoom(t,e)
        return this.flyTo(i.center,i.zoom,e)}}),o.Map.include({_defaultLocateOptions:{timeout:1e4,watch:!1},locate:function(t){if(t=this._locateOptions=o.extend({},this._defaultLocateOptions,t),!("geolocation"in navigator))return this._handleGeolocationError({code:0,message:"Geolocation not supported."}),this
        var e=o.bind(this._handleGeolocationResponse,this),i=o.bind(this._handleGeolocationError,this)
        return t.watch?this._locationWatchId=navigator.geolocation.watchPosition(e,i,t):navigator.geolocation.getCurrentPosition(e,i,t),this},stopLocate:function(){return navigator.geolocation&&navigator.geolocation.clearWatch&&navigator.geolocation.clearWatch(this._locationWatchId),this._locateOptions&&(this._locateOptions.setView=!1),this},_handleGeolocationError:function(t){var e=t.code,i=t.message||(1===e?"permission denied":2===e?"position unavailable":"timeout")
        this._locateOptions.setView&&!this._loaded&&this.fitWorld(),this.fire("locationerror",{code:e,message:"Geolocation error: "+i+"."})},_handleGeolocationResponse:function(t){var e=t.coords.latitude,i=t.coords.longitude,n=new o.LatLng(e,i),s=n.toBounds(t.coords.accuracy),r=this._locateOptions
        if(r.setView){var a=this.getBoundsZoom(s)
            this.setView(n,r.maxZoom?Math.min(a,r.maxZoom):a)}var h={latlng:n,bounds:s,timestamp:t.timestamp}
        for(var l in t.coords)"number"==typeof t.coords[l]&&(h[l]=t.coords[l])
        this.fire("locationfound",h)}})}(window,document)


},{}],7:[function(require,module,exports){
    !function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.moment=t()}(this,function(){"use strict"
        function e(){return _s.apply(null,arguments)}function t(e){_s=e}function n(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function s(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function i(e){var t
            for(t in e)return!1
            return!0}function r(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function a(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function o(e,t){var n,s=[]
            for(n=0
                n<e.length
            ++n)s.push(t(e[n],n))
            return s}function u(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function l(e,t){for(var n in t)u(t,n)&&(e[n]=t[n])
            return u(t,"toString")&&(e.toString=t.toString),u(t,"valueOf")&&(e.valueOf=t.valueOf),e}function d(e,t,n,s){return gt(e,t,n,s,!0).utc()}function h(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null}}function c(e){return null==e._pf&&(e._pf=h()),e._pf}function f(e){if(null==e._isValid){var t=c(e),n=gs.call(t.parsedDateParts,function(e){return null!=e}),s=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n)
            if(e._strict&&(s=s&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return s
            e._isValid=s}return e._isValid}function m(e){var t=d(NaN)
            return null!=e?l(c(t),e):c(t).userInvalidated=!0,t}function _(e){return void 0===e}function y(e,t){var n,s,i
            if(_(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),_(t._i)||(e._i=t._i),_(t._f)||(e._f=t._f),_(t._l)||(e._l=t._l),_(t._strict)||(e._strict=t._strict),_(t._tzm)||(e._tzm=t._tzm),_(t._isUTC)||(e._isUTC=t._isUTC),_(t._offset)||(e._offset=t._offset),_(t._pf)||(e._pf=c(t)),_(t._locale)||(e._locale=t._locale),ps.length>0)for(n in ps)s=ps[n],i=t[s],_(i)||(e[s]=i)
            return e}function g(t){y(this,t),this._d=new Date(null!=t._d?t._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),ws===!1&&(ws=!0,e.updateOffset(this),ws=!1)}function p(e){return e instanceof g||null!=e&&null!=e._isAMomentObject}function w(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function v(e){var t=+e,n=0
            return 0!==t&&isFinite(t)&&(n=w(t)),n}function S(e,t,n){var s,i=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),a=0
            for(s=0
                s<i
            s++)(n&&e[s]!==t[s]||!n&&v(e[s])!==v(t[s]))&&a++
            return a+r}function M(t){e.suppressDeprecationWarnings===!1&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+t)}function k(t,n){var s=!0
            return l(function(){if(null!=e.deprecationHandler&&e.deprecationHandler(null,t),s){for(var i,r=[],a=0
                a<arguments.length
                a++){if(i="","object"==typeof arguments[a]){i+="\n["+a+"] "
                    for(var o in arguments[0])i+=o+": "+arguments[0][o]+", "
                    i=i.slice(0,-2)}else i=arguments[a]
                    r.push(i)}M(t+"\nArguments: "+Array.prototype.slice.call(r).join("")+"\n"+(new Error).stack),s=!1}return n.apply(this,arguments)},n)}function D(t,n){null!=e.deprecationHandler&&e.deprecationHandler(t,n),vs[t]||(M(n),vs[t]=!0)}function Y(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function O(e){var t,n
            for(n in e)t=e[n],Y(t)?this[n]=t:this["_"+n]=t
            this._config=e,this._ordinalParseLenient=new RegExp(this._ordinalParse.source+"|"+/\d{1,2}/.source)}function x(e,t){var n,i=l({},e)
            for(n in t)u(t,n)&&(s(e[n])&&s(t[n])?(i[n]={},l(i[n],e[n]),l(i[n],t[n])):null!=t[n]?i[n]=t[n]:delete i[n])
            for(n in e)u(e,n)&&!u(t,n)&&s(e[n])&&(i[n]=l({},i[n]))
            return i}function T(e){null!=e&&this.set(e)}function b(e,t,n){var s=this._calendar[e]||this._calendar.sameElse
            return Y(s)?s.call(t,n):s}function P(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()]
            return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])}function W(){return this._invalidDate}function R(e){return this._ordinal.replace("%d",e)}function U(e,t,n,s){var i=this._relativeTime[n]
            return Y(i)?i(e,t,n,s):i.replace(/%d/i,e)}function C(e,t){var n=this._relativeTime[e>0?"future":"past"]
            return Y(n)?n(t):n.replace(/%s/i,t)}function F(e,t){var n=e.toLowerCase()
            Ps[n]=Ps[n+"s"]=Ps[t]=e}function H(e){return"string"==typeof e?Ps[e]||Ps[e.toLowerCase()]:void 0}function L(e){var t,n,s={}
            for(n in e)u(e,n)&&(t=H(n),t&&(s[t]=e[n]))
            return s}function G(e,t){Ws[e]=t}function V(e){var t=[]
            for(var n in e)t.push({unit:n,priority:Ws[n]})
            return t.sort(function(e,t){return e.priority-t.priority}),t}function j(t,n){return function(s){return null!=s?(A(this,t,s),e.updateOffset(this,n),this):N(this,t)}}function N(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function A(e,t,n){e.isValid()&&e._d["set"+(e._isUTC?"UTC":"")+t](n)}function E(e){return e=H(e),Y(this[e])?this[e]():this}function I(e,t){if("object"==typeof e){e=L(e)
            for(var n=V(e),s=0
                s<n.length
            s++)this[n[s].unit](e[n[s].unit])}else if(e=H(e),Y(this[e]))return this[e](t)
            return this}function z(e,t,n){var s=""+Math.abs(e),i=t-s.length,r=e>=0
            return(r?n?"+":"":"-")+Math.pow(10,Math.max(0,i)).toString().substr(1)+s}function Z(e,t,n,s){var i=s
            "string"==typeof s&&(i=function(){return this[s]()}),e&&(Fs[e]=i),t&&(Fs[t[0]]=function(){return z(i.apply(this,arguments),t[1],t[2])}),n&&(Fs[n]=function(){return this.localeData().ordinal(i.apply(this,arguments),e)})}function $(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function q(e){var t,n,s=e.match(Rs)
            for(t=0,n=s.length
                t<n
            t++)Fs[s[t]]?s[t]=Fs[s[t]]:s[t]=$(s[t])
            return function(t){var i,r=""
                for(i=0
                    i<n
                i++)r+=s[i]instanceof Function?s[i].call(t,e):s[i]
                return r}}function B(e,t){return e.isValid()?(t=J(t,e.localeData()),Cs[t]=Cs[t]||q(t),Cs[t](e)):e.localeData().invalidDate()}function J(e,t){function n(e){return t.longDateFormat(e)||e}var s=5
            for(Us.lastIndex=0
                s>=0&&Us.test(e)
        )e=e.replace(Us,n),Us.lastIndex=0,s-=1
            return e}function Q(e,t,n){Ks[e]=Y(t)?t:function(e,s){return e&&n?n:t}}function X(e,t){return u(Ks,e)?Ks[e](t._strict,t._locale):new RegExp(K(e))}function K(e){return ee(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,s,i){return t||n||s||i}))}function ee(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}function te(e,t){var n,s=t
            for("string"==typeof e&&(e=[e]),r(t)&&(s=function(e,n){n[t]=v(e)}),n=0
                n<e.length
            n++)ei[e[n]]=s}function ne(e,t){te(e,function(e,n,s,i){s._w=s._w||{},t(e,s._w,s,i)})}function se(e,t,n){null!=t&&u(ei,e)&&ei[e](t,n._a,n,e)}function ie(e,t){return new Date(Date.UTC(e,t+1,0)).getUTCDate()}function re(e,t){return e?n(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||hi).test(t)?"format":"standalone"][e.month()]:this._months}function ae(e,t){return e?n(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[hi.test(t)?"format":"standalone"][e.month()]:this._monthsShort}function oe(e,t,n){var s,i,r,a=e.toLocaleLowerCase()
            if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],s=0
                s<12
            ++s)r=d([2e3,s]),this._shortMonthsParse[s]=this.monthsShort(r,"").toLocaleLowerCase(),this._longMonthsParse[s]=this.months(r,"").toLocaleLowerCase()
            return n?"MMM"===t?(i=di.call(this._shortMonthsParse,a),i!==-1?i:null):(i=di.call(this._longMonthsParse,a),i!==-1?i:null):"MMM"===t?(i=di.call(this._shortMonthsParse,a),i!==-1?i:(i=di.call(this._longMonthsParse,a),i!==-1?i:null)):(i=di.call(this._longMonthsParse,a),i!==-1?i:(i=di.call(this._shortMonthsParse,a),i!==-1?i:null))}function ue(e,t,n){var s,i,r
            if(this._monthsParseExact)return oe.call(this,e,t,n)
            for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),s=0
                s<12
            s++){if(i=d([2e3,s]),n&&!this._longMonthsParse[s]&&(this._longMonthsParse[s]=new RegExp("^"+this.months(i,"").replace(".","")+"$","i"),this._shortMonthsParse[s]=new RegExp("^"+this.monthsShort(i,"").replace(".","")+"$","i")),n||this._monthsParse[s]||(r="^"+this.months(i,"")+"|^"+this.monthsShort(i,""),this._monthsParse[s]=new RegExp(r.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[s].test(e))return s
                if(n&&"MMM"===t&&this._shortMonthsParse[s].test(e))return s
                if(!n&&this._monthsParse[s].test(e))return s}}function le(e,t){var n
            if(!e.isValid())return e
            if("string"==typeof t)if(/^\d+$/.test(t))t=v(t)
            else if(t=e.localeData().monthsParse(t),!r(t))return e
            return n=Math.min(e.date(),ie(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function de(t){return null!=t?(le(this,t),e.updateOffset(this,!0),this):N(this,"Month")}function he(){return ie(this.year(),this.month())}function ce(e){return this._monthsParseExact?(u(this,"_monthsRegex")||me.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(u(this,"_monthsShortRegex")||(this._monthsShortRegex=mi),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function fe(e){return this._monthsParseExact?(u(this,"_monthsRegex")||me.call(this),e?this._monthsStrictRegex:this._monthsRegex):(u(this,"_monthsRegex")||(this._monthsRegex=_i),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function me(){function e(e,t){return t.length-e.length}var t,n,s=[],i=[],r=[]
            for(t=0
                t<12
            t++)n=d([2e3,t]),s.push(this.monthsShort(n,"")),i.push(this.months(n,"")),r.push(this.months(n,"")),r.push(this.monthsShort(n,""))
            for(s.sort(e),i.sort(e),r.sort(e),t=0
                t<12
            t++)s[t]=ee(s[t]),i[t]=ee(i[t])
            for(t=0
                t<24
            t++)r[t]=ee(r[t])
            this._monthsRegex=new RegExp("^("+r.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+s.join("|")+")","i")}function _e(e){return ye(e)?366:365}function ye(e){return e%4===0&&e%100!==0||e%400===0}function ge(){return ye(this.year())}function pe(e,t,n,s,i,r,a){var o=new Date(e,t,n,s,i,r,a)
            return e<100&&e>=0&&isFinite(o.getFullYear())&&o.setFullYear(e),o}function we(e){var t=new Date(Date.UTC.apply(null,arguments))
            return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function ve(e,t,n){var s=7+t-n,i=(7+we(e,0,s).getUTCDay()-t)%7
            return-i+s-1}function Se(e,t,n,s,i){var r,a,o=(7+n-s)%7,u=ve(e,s,i),l=1+7*(t-1)+o+u
            return l<=0?(r=e-1,a=_e(r)+l):l>_e(e)?(r=e+1,a=l-_e(e)):(r=e,a=l),{year:r,dayOfYear:a}}function Me(e,t,n){var s,i,r=ve(e.year(),t,n),a=Math.floor((e.dayOfYear()-r-1)/7)+1
            return a<1?(i=e.year()-1,s=a+ke(i,t,n)):a>ke(e.year(),t,n)?(s=a-ke(e.year(),t,n),i=e.year()+1):(i=e.year(),s=a),{week:s,year:i}}function ke(e,t,n){var s=ve(e,t,n),i=ve(e+1,t,n)
            return(_e(e)-s+i)/7}function De(e){return Me(e,this._week.dow,this._week.doy).week}function Ye(){return this._week.dow}function Oe(){return this._week.doy}function xe(e){var t=this.localeData().week(this)
            return null==e?t:this.add(7*(e-t),"d")}function Te(e){var t=Me(this,1,4).week
            return null==e?t:this.add(7*(e-t),"d")}function be(e,t){return"string"!=typeof e?e:isNaN(e)?(e=t.weekdaysParse(e),"number"==typeof e?e:null):parseInt(e,10)}function Pe(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function We(e,t){return e?n(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:this._weekdays}function Re(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Ue(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ce(e,t,n){var s,i,r,a=e.toLocaleLowerCase()
            if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],s=0
                s<7
            ++s)r=d([2e3,1]).day(s),this._minWeekdaysParse[s]=this.weekdaysMin(r,"").toLocaleLowerCase(),this._shortWeekdaysParse[s]=this.weekdaysShort(r,"").toLocaleLowerCase(),this._weekdaysParse[s]=this.weekdays(r,"").toLocaleLowerCase()
            return n?"dddd"===t?(i=di.call(this._weekdaysParse,a),i!==-1?i:null):"ddd"===t?(i=di.call(this._shortWeekdaysParse,a),i!==-1?i:null):(i=di.call(this._minWeekdaysParse,a),i!==-1?i:null):"dddd"===t?(i=di.call(this._weekdaysParse,a),i!==-1?i:(i=di.call(this._shortWeekdaysParse,a),i!==-1?i:(i=di.call(this._minWeekdaysParse,a),i!==-1?i:null))):"ddd"===t?(i=di.call(this._shortWeekdaysParse,a),i!==-1?i:(i=di.call(this._weekdaysParse,a),i!==-1?i:(i=di.call(this._minWeekdaysParse,a),i!==-1?i:null))):(i=di.call(this._minWeekdaysParse,a),i!==-1?i:(i=di.call(this._weekdaysParse,a),i!==-1?i:(i=di.call(this._shortWeekdaysParse,a),i!==-1?i:null)))}function Fe(e,t,n){var s,i,r
            if(this._weekdaysParseExact)return Ce.call(this,e,t,n)
            for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),s=0
                s<7
            s++){if(i=d([2e3,1]).day(s),n&&!this._fullWeekdaysParse[s]&&(this._fullWeekdaysParse[s]=new RegExp("^"+this.weekdays(i,"").replace(".",".?")+"$","i"),this._shortWeekdaysParse[s]=new RegExp("^"+this.weekdaysShort(i,"").replace(".",".?")+"$","i"),this._minWeekdaysParse[s]=new RegExp("^"+this.weekdaysMin(i,"").replace(".",".?")+"$","i")),this._weekdaysParse[s]||(r="^"+this.weekdays(i,"")+"|^"+this.weekdaysShort(i,"")+"|^"+this.weekdaysMin(i,""),this._weekdaysParse[s]=new RegExp(r.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[s].test(e))return s
                if(n&&"ddd"===t&&this._shortWeekdaysParse[s].test(e))return s
                if(n&&"dd"===t&&this._minWeekdaysParse[s].test(e))return s
                if(!n&&this._weekdaysParse[s].test(e))return s}}function He(e){if(!this.isValid())return null!=e?this:NaN
            var t=this._isUTC?this._d.getUTCDay():this._d.getDay()
            return null!=e?(e=be(e,this.localeData()),this.add(e-t,"d")):t}function Le(e){if(!this.isValid())return null!=e?this:NaN
            var t=(this.day()+7-this.localeData()._week.dow)%7
            return null==e?t:this.add(e-t,"d")}function Ge(e){if(!this.isValid())return null!=e?this:NaN
            if(null!=e){var t=Pe(e,this.localeData())
                return this.day(this.day()%7?t:t-7)}return this.day()||7}function Ve(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Ae.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(u(this,"_weekdaysRegex")||(this._weekdaysRegex=Si),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function je(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Ae.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(u(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Mi),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Ne(e){return this._weekdaysParseExact?(u(this,"_weekdaysRegex")||Ae.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(u(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ki),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Ae(){function e(e,t){return t.length-e.length}var t,n,s,i,r,a=[],o=[],u=[],l=[]
            for(t=0
                t<7
            t++)n=d([2e3,1]).day(t),s=this.weekdaysMin(n,""),i=this.weekdaysShort(n,""),r=this.weekdays(n,""),a.push(s),o.push(i),u.push(r),l.push(s),l.push(i),l.push(r)
            for(a.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0
                t<7
            t++)o[t]=ee(o[t]),u[t]=ee(u[t]),l[t]=ee(l[t])
            this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+a.join("|")+")","i")}function Ee(){return this.hours()%12||12}function Ie(){return this.hours()||24}function ze(e,t){Z(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function Ze(e,t){return t._meridiemParse}function $e(e){return"p"===(e+"").toLowerCase().charAt(0)}function qe(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}function Be(e){return e?e.toLowerCase().replace("_","-"):e}function Je(e){for(var t,n,s,i,r=0
            r<e.length
        ){for(i=Be(e[r]).split("-"),t=i.length,n=Be(e[r+1]),n=n?n.split("-"):null
                t>0
            ){if(s=Qe(i.slice(0,t).join("-")))return s
                    if(n&&n.length>=t&&S(i,n,!0)>=t-1)break
                    t--}r++}return null}function Qe(e){var t=null
            if(!Ti[e]&&"undefined"!=typeof module&&module&&module.exports)try{t=Di._abbr,require("./locale/"+e),Xe(t)}catch(e){}return Ti[e]}function Xe(e,t){var n
            return e&&(n=_(t)?tt(e):Ke(e,t),n&&(Di=n)),Di._abbr}function Ke(e,t){if(null!==t){var n=xi
            if(t.abbr=e,null!=Ti[e])D("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),n=Ti[e]._config
            else if(null!=t.parentLocale){if(null==Ti[t.parentLocale])return bi[t.parentLocale]||(bi[t.parentLocale]=[]),bi[t.parentLocale].push({name:e,config:t}),null
                n=Ti[t.parentLocale]._config}return Ti[e]=new T(x(n,t)),bi[e]&&bi[e].forEach(function(e){Ke(e.name,e.config)}),Xe(e),Ti[e]}return delete Ti[e],null}function et(e,t){if(null!=t){var n,s=xi
            null!=Ti[e]&&(s=Ti[e]._config),t=x(s,t),n=new T(t),n.parentLocale=Ti[e],Ti[e]=n,Xe(e)}else null!=Ti[e]&&(null!=Ti[e].parentLocale?Ti[e]=Ti[e].parentLocale:null!=Ti[e]&&delete Ti[e])
            return Ti[e]}function tt(e){var t
            if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return Di
            if(!n(e)){if(t=Qe(e))return t
                e=[e]}return Je(e)}function nt(){return ks(Ti)}function st(e){var t,n=e._a
            return n&&c(e).overflow===-2&&(t=n[ni]<0||n[ni]>11?ni:n[si]<1||n[si]>ie(n[ti],n[ni])?si:n[ii]<0||n[ii]>24||24===n[ii]&&(0!==n[ri]||0!==n[ai]||0!==n[oi])?ii:n[ri]<0||n[ri]>59?ri:n[ai]<0||n[ai]>59?ai:n[oi]<0||n[oi]>999?oi:-1,c(e)._overflowDayOfYear&&(t<ti||t>si)&&(t=si),c(e)._overflowWeeks&&t===-1&&(t=ui),c(e)._overflowWeekday&&t===-1&&(t=li),c(e).overflow=t),e}function it(e){var t,n,s,i,r,a,o=e._i,u=Pi.exec(o)||Wi.exec(o)
            if(u){for(c(e).iso=!0,t=0,n=Ui.length
                t<n
                t++)if(Ui[t][1].exec(u[1])){i=Ui[t][0],s=Ui[t][2]!==!1
                    break}if(null==i)return void(e._isValid=!1)
                if(u[3]){for(t=0,n=Ci.length
                    t<n
                    t++)if(Ci[t][1].exec(u[3])){r=(u[2]||" ")+Ci[t][0]
                        break}if(null==r)return void(e._isValid=!1)}if(!s&&null!=r)return void(e._isValid=!1)
                if(u[4]){if(!Ri.exec(u[4]))return void(e._isValid=!1)
                    a="Z"}e._f=i+(r||"")+(a||""),dt(e)}else e._isValid=!1}function rt(t){var n=Fi.exec(t._i)
            return null!==n?void(t._d=new Date(+n[1])):(it(t),void(t._isValid===!1&&(delete t._isValid,e.createFromInputFallback(t))))}function at(e,t,n){return null!=e?e:null!=t?t:n}function ot(t){var n=new Date(e.now())
            return t._useUTC?[n.getUTCFullYear(),n.getUTCMonth(),n.getUTCDate()]:[n.getFullYear(),n.getMonth(),n.getDate()]}function ut(e){var t,n,s,i,r=[]
            if(!e._d){for(s=ot(e),e._w&&null==e._a[si]&&null==e._a[ni]&&lt(e),e._dayOfYear&&(i=at(e._a[ti],s[ti]),e._dayOfYear>_e(i)&&(c(e)._overflowDayOfYear=!0),n=we(i,0,e._dayOfYear),e._a[ni]=n.getUTCMonth(),e._a[si]=n.getUTCDate()),t=0
                t<3&&null==e._a[t]
                ++t)e._a[t]=r[t]=s[t]
                for(
                    t<7
                    t++)e._a[t]=r[t]=null==e._a[t]?2===t?1:0:e._a[t]
                24===e._a[ii]&&0===e._a[ri]&&0===e._a[ai]&&0===e._a[oi]&&(e._nextDay=!0,e._a[ii]=0),e._d=(e._useUTC?we:pe).apply(null,r),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[ii]=24)}}function lt(e){var t,n,s,i,r,a,o,u
            if(t=e._w,null!=t.GG||null!=t.W||null!=t.E)r=1,a=4,n=at(t.GG,e._a[ti],Me(pt(),1,4).year),s=at(t.W,1),i=at(t.E,1),(i<1||i>7)&&(u=!0)
            else{r=e._locale._week.dow,a=e._locale._week.doy
                var l=Me(pt(),r,a)
                n=at(t.gg,e._a[ti],l.year),s=at(t.w,l.week),null!=t.d?(i=t.d,(i<0||i>6)&&(u=!0)):null!=t.e?(i=t.e+r,(t.e<0||t.e>6)&&(u=!0)):i=r}s<1||s>ke(n,r,a)?c(e)._overflowWeeks=!0:null!=u?c(e)._overflowWeekday=!0:(o=Se(n,s,i,r,a),e._a[ti]=o.year,e._dayOfYear=o.dayOfYear)}function dt(t){if(t._f===e.ISO_8601)return void it(t)
            t._a=[],c(t).empty=!0
            var n,s,i,r,a,o=""+t._i,u=o.length,l=0
            for(i=J(t._f,t._locale).match(Rs)||[],n=0
                n<i.length
            n++)r=i[n],s=(o.match(X(r,t))||[])[0],s&&(a=o.substr(0,o.indexOf(s)),a.length>0&&c(t).unusedInput.push(a),o=o.slice(o.indexOf(s)+s.length),l+=s.length),Fs[r]?(s?c(t).empty=!1:c(t).unusedTokens.push(r),se(r,s,t)):t._strict&&!s&&c(t).unusedTokens.push(r)
            c(t).charsLeftOver=u-l,o.length>0&&c(t).unusedInput.push(o),t._a[ii]<=12&&c(t).bigHour===!0&&t._a[ii]>0&&(c(t).bigHour=void 0),c(t).parsedDateParts=t._a.slice(0),c(t).meridiem=t._meridiem,t._a[ii]=ht(t._locale,t._a[ii],t._meridiem),ut(t),st(t)}function ht(e,t,n){var s
            return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?(s=e.isPM(n),s&&t<12&&(t+=12),s||12!==t||(t=0),t):t}function ct(e){var t,n,s,i,r
            if(0===e._f.length)return c(e).invalidFormat=!0,void(e._d=new Date(NaN))
            for(i=0
                i<e._f.length
            i++)r=0,t=y({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[i],dt(t),f(t)&&(r+=c(t).charsLeftOver,r+=10*c(t).unusedTokens.length,c(t).score=r,(null==s||r<s)&&(s=r,n=t))
            l(e,n||t)}function ft(e){if(!e._d){var t=L(e._i)
            e._a=o([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),ut(e)}}function mt(e){var t=new g(st(_t(e)))
            return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function _t(e){var t=e._i,s=e._f
            return e._locale=e._locale||tt(e._l),null===t||void 0===s&&""===t?m({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),p(t)?new g(st(t)):(a(t)?e._d=t:n(s)?ct(e):s?dt(e):yt(e),f(e)||(e._d=null),e))}function yt(t){var s=t._i
            void 0===s?t._d=new Date(e.now()):a(s)?t._d=new Date(s.valueOf()):"string"==typeof s?rt(t):n(s)?(t._a=o(s.slice(0),function(e){return parseInt(e,10)}),ut(t)):"object"==typeof s?ft(t):r(s)?t._d=new Date(s):e.createFromInputFallback(t)}function gt(e,t,r,a,o){var u={}
            return r!==!0&&r!==!1||(a=r,r=void 0),(s(e)&&i(e)||n(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=o,u._l=r,u._i=e,u._f=t,u._strict=a,mt(u)}function pt(e,t,n,s){return gt(e,t,n,s,!1)}function wt(e,t){var s,i
            if(1===t.length&&n(t[0])&&(t=t[0]),!t.length)return pt()
            for(s=t[0],i=1
                i<t.length
            ++i)t[i].isValid()&&!t[i][e](s)||(s=t[i])
            return s}function vt(){var e=[].slice.call(arguments,0)
            return wt("isBefore",e)}function St(){var e=[].slice.call(arguments,0)
            return wt("isAfter",e)}function Mt(e){var t=L(e),n=t.year||0,s=t.quarter||0,i=t.month||0,r=t.week||0,a=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0
            this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+a+7*r,this._months=+i+3*s+12*n,this._data={},this._locale=tt(),this._bubble()}function kt(e){return e instanceof Mt}function Dt(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function Yt(e,t){Z(e,0,0,function(){var e=this.utcOffset(),n="+"
            return e<0&&(e=-e,n="-"),n+z(~~(e/60),2)+t+z(~~e%60,2)})}function Ot(e,t){var n=(t||"").match(e)
            if(null===n)return null
            var s=n[n.length-1]||[],i=(s+"").match(Vi)||["-",0,0],r=+(60*i[1])+v(i[2])
            return 0===r?0:"+"===i[0]?r:-r}function xt(t,n){var s,i
            return n._isUTC?(s=n.clone(),i=(p(t)||a(t)?t.valueOf():pt(t).valueOf())-s.valueOf(),s._d.setTime(s._d.valueOf()+i),e.updateOffset(s,!1),s):pt(t).local()}function Tt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function bt(t,n){var s,i=this._offset||0
            if(!this.isValid())return null!=t?this:NaN
            if(null!=t){if("string"==typeof t){if(t=Ot(Js,t),null===t)return this}else Math.abs(t)<16&&(t*=60)
                return!this._isUTC&&n&&(s=Tt(this)),this._offset=t,this._isUTC=!0,null!=s&&this.add(s,"m"),i!==t&&(!n||this._changeInProgress?zt(this,jt(t-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,e.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:Tt(this)}function Pt(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function Wt(e){return this.utcOffset(0,e)}function Rt(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Tt(this),"m")),this}function Ut(){if(null!=this._tzm)this.utcOffset(this._tzm)
        else if("string"==typeof this._i){var e=Ot(Bs,this._i)
            null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Ct(e){return!!this.isValid()&&(e=e?pt(e).utcOffset():0,(this.utcOffset()-e)%60===0)}function Ft(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Ht(){if(!_(this._isDSTShifted))return this._isDSTShifted
            var e={}
            if(y(e,this),e=_t(e),e._a){var t=e._isUTC?d(e._a):pt(e._a)
                this._isDSTShifted=this.isValid()&&S(e._a,t.toArray())>0}else this._isDSTShifted=!1
            return this._isDSTShifted}function Lt(){return!!this.isValid()&&!this._isUTC}function Gt(){return!!this.isValid()&&this._isUTC}function Vt(){return!!this.isValid()&&(this._isUTC&&0===this._offset)}function jt(e,t){var n,s,i,a=e,o=null
            return kt(e)?a={ms:e._milliseconds,d:e._days,M:e._months}:r(e)?(a={},t?a[t]=e:a.milliseconds=e):(o=ji.exec(e))?(n="-"===o[1]?-1:1,a={y:0,d:v(o[si])*n,h:v(o[ii])*n,m:v(o[ri])*n,s:v(o[ai])*n,ms:v(Dt(1e3*o[oi]))*n}):(o=Ni.exec(e))?(n="-"===o[1]?-1:1,a={y:Nt(o[2],n),M:Nt(o[3],n),w:Nt(o[4],n),d:Nt(o[5],n),h:Nt(o[6],n),m:Nt(o[7],n),s:Nt(o[8],n)}):null==a?a={}:"object"==typeof a&&("from"in a||"to"in a)&&(i=Et(pt(a.from),pt(a.to)),a={},a.ms=i.milliseconds,a.M=i.months),s=new Mt(a),kt(e)&&u(e,"_locale")&&(s._locale=e._locale),s}function Nt(e,t){var n=e&&parseFloat(e.replace(",","."))
            return(isNaN(n)?0:n)*t}function At(e,t){var n={milliseconds:0,months:0}
            return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Et(e,t){var n
            return e.isValid()&&t.isValid()?(t=xt(t,e),e.isBefore(t)?n=At(e,t):(n=At(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function It(e,t){return function(n,s){var i,r
            return null===s||isNaN(+s)||(D(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),r=n,n=s,s=r),n="string"==typeof n?+n:n,i=jt(n,s),zt(this,i,e),this}}function zt(t,n,s,i){var r=n._milliseconds,a=Dt(n._days),o=Dt(n._months)
            t.isValid()&&(i=null==i||i,r&&t._d.setTime(t._d.valueOf()+r*s),a&&A(t,"Date",N(t,"Date")+a*s),o&&le(t,N(t,"Month")+o*s),i&&e.updateOffset(t,a||o))}function Zt(e,t){var n=e.diff(t,"days",!0)
            return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function $t(t,n){var s=t||pt(),i=xt(s,this).startOf("day"),r=e.calendarFormat(this,i)||"sameElse",a=n&&(Y(n[r])?n[r].call(this,s):n[r])
            return this.format(a||this.localeData().calendar(r,this,pt(s)))}function qt(){return new g(this)}function Bt(e,t){var n=p(e)?e:pt(e)
            return!(!this.isValid()||!n.isValid())&&(t=H(_(t)?"millisecond":t),"millisecond"===t?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())}function Jt(e,t){var n=p(e)?e:pt(e)
            return!(!this.isValid()||!n.isValid())&&(t=H(_(t)?"millisecond":t),"millisecond"===t?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())}function Qt(e,t,n,s){return s=s||"()",("("===s[0]?this.isAfter(e,n):!this.isBefore(e,n))&&(")"===s[1]?this.isBefore(t,n):!this.isAfter(t,n))}function Xt(e,t){var n,s=p(e)?e:pt(e)
            return!(!this.isValid()||!s.isValid())&&(t=H(t||"millisecond"),"millisecond"===t?this.valueOf()===s.valueOf():(n=s.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))}function Kt(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function en(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function tn(e,t,n){var s,i,r,a
            return this.isValid()?(s=xt(e,this),s.isValid()?(i=6e4*(s.utcOffset()-this.utcOffset()),t=H(t),"year"===t||"month"===t||"quarter"===t?(a=nn(this,s),"quarter"===t?a/=3:"year"===t&&(a/=12)):(r=this-s,a="second"===t?r/1e3:"minute"===t?r/6e4:"hour"===t?r/36e5:"day"===t?(r-i)/864e5:"week"===t?(r-i)/6048e5:r),n?a:w(a)):NaN):NaN}function nn(e,t){var n,s,i=12*(t.year()-e.year())+(t.month()-e.month()),r=e.clone().add(i,"months")
            return t-r<0?(n=e.clone().add(i-1,"months"),s=(t-r)/(r-n)):(n=e.clone().add(i+1,"months"),s=(t-r)/(n-r)),-(i+s)||0}function sn(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function rn(){var e=this.clone().utc()
            return 0<e.year()&&e.year()<=9999?Y(Date.prototype.toISOString)?this.toDate().toISOString():B(e,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):B(e,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")}function an(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)"
            var e="moment",t=""
            this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z")
            var n="["+e+'("]',s=0<this.year()&&this.year()<=9999?"YYYY":"YYYYYY",i="-MM-DD[T]HH:mm:ss.SSS",r=t+'[")]'
            return this.format(n+s+i+r)}function on(t){t||(t=this.isUtc()?e.defaultFormatUtc:e.defaultFormat)
            var n=B(this,t)
            return this.localeData().postformat(n)}function un(e,t){return this.isValid()&&(p(e)&&e.isValid()||pt(e).isValid())?jt({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function ln(e){return this.from(pt(),e)}function dn(e,t){return this.isValid()&&(p(e)&&e.isValid()||pt(e).isValid())?jt({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function hn(e){return this.to(pt(),e)}function cn(e){var t
            return void 0===e?this._locale._abbr:(t=tt(e),null!=t&&(this._locale=t),this)}function fn(){return this._locale}function mn(e){switch(e=H(e)){case"year":this.month(0)
            case"quarter":case"month":this.date(1)
            case"week":case"isoWeek":case"day":case"date":this.hours(0)
            case"hour":this.minutes(0)
            case"minute":this.seconds(0)
            case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this}function _n(e){return e=H(e),void 0===e||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))}function yn(){return this._d.valueOf()-6e4*(this._offset||0)}function gn(){return Math.floor(this.valueOf()/1e3)}function pn(){return new Date(this.valueOf())}function wn(){var e=this
            return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function vn(){var e=this
            return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function Sn(){return this.isValid()?this.toISOString():null}function Mn(){return f(this)}function kn(){return l({},c(this))}function Dn(){return c(this).overflow}function Yn(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}function On(e,t){Z(0,[e,e.length],0,t)}function xn(e){return Wn.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Tn(e){return Wn.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function bn(){return ke(this.year(),1,4)}function Pn(){var e=this.localeData()._week
            return ke(this.year(),e.dow,e.doy)}function Wn(e,t,n,s,i){var r
            return null==e?Me(this,s,i).year:(r=ke(e,s,i),t>r&&(t=r),Rn.call(this,e,t,n,s,i))}function Rn(e,t,n,s,i){var r=Se(e,t,n,s,i),a=we(r.year,0,r.dayOfYear)
            return this.year(a.getUTCFullYear()),this.month(a.getUTCMonth()),this.date(a.getUTCDate()),this}function Un(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)}function Cn(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1
            return null==e?t:this.add(e-t,"d")}function Fn(e,t){t[oi]=v(1e3*("0."+e))}function Hn(){return this._isUTC?"UTC":""}function Ln(){return this._isUTC?"Coordinated Universal Time":""}function Gn(e){return pt(1e3*e)}function Vn(){return pt.apply(null,arguments).parseZone()}function jn(e){return e}function Nn(e,t,n,s){var i=tt(),r=d().set(s,t)
            return i[n](r,e)}function An(e,t,n){if(r(e)&&(t=e,e=void 0),e=e||"",null!=t)return Nn(e,t,n,"month")
            var s,i=[]
            for(s=0
                s<12
            s++)i[s]=Nn(e,s,n,"month")
            return i

        }function En(e,t,n,s){"boolean"==typeof e?(r(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,r(t)&&(n=t,t=void 0),t=t||"")
            var i=tt(),a=e?i._week.dow:0
            if(null!=n)return Nn(t,(n+a)%7,s,"day")
            var o,u=[]
            for(o=0
                o<7
            o++)u[o]=Nn(t,(o+a)%7,s,"day")
            return u}function In(e,t){return An(e,t,"months")}function zn(e,t){return An(e,t,"monthsShort")}function Zn(e,t,n){return En(e,t,n,"weekdays")}function $n(e,t,n){return En(e,t,n,"weekdaysShort")}function qn(e,t,n){return En(e,t,n,"weekdaysMin")}function Bn(){var e=this._data
            return this._milliseconds=Xi(this._milliseconds),this._days=Xi(this._days),this._months=Xi(this._months),e.milliseconds=Xi(e.milliseconds),e.seconds=Xi(e.seconds),e.minutes=Xi(e.minutes),e.hours=Xi(e.hours),e.months=Xi(e.months),e.years=Xi(e.years),this}function Jn(e,t,n,s){var i=jt(t,n)
            return e._milliseconds+=s*i._milliseconds,e._days+=s*i._days,e._months+=s*i._months,e._bubble()}function Qn(e,t){return Jn(this,e,t,1)}function Xn(e,t){return Jn(this,e,t,-1)}function Kn(e){return e<0?Math.floor(e):Math.ceil(e)}function es(){var e,t,n,s,i,r=this._milliseconds,a=this._days,o=this._months,u=this._data
            return r>=0&&a>=0&&o>=0||r<=0&&a<=0&&o<=0||(r+=864e5*Kn(ns(o)+a),a=0,o=0),u.milliseconds=r%1e3,e=w(r/1e3),u.seconds=e%60,t=w(e/60),u.minutes=t%60,n=w(t/60),u.hours=n%24,a+=w(n/24),i=w(ts(a)),o+=i,a-=Kn(ns(i)),s=w(o/12),o%=12,u.days=a,u.months=o,u.years=s,this}function ts(e){return 4800*e/146097}function ns(e){return 146097*e/4800}function ss(e){var t,n,s=this._milliseconds
            if(e=H(e),"month"===e||"year"===e)return t=this._days+s/864e5,n=this._months+ts(t),"month"===e?n:n/12
            switch(t=this._days+Math.round(ns(this._months)),e){case"week":return t/7+s/6048e5
                case"day":return t+s/864e5
                case"hour":return 24*t+s/36e5
                case"minute":return 1440*t+s/6e4
                case"second":return 86400*t+s/1e3
                case"millisecond":return Math.floor(864e5*t)+s
                default:throw new Error("Unknown unit "+e)}}function is(){return this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*v(this._months/12)}function rs(e){return function(){return this.as(e)}}function as(e){return e=H(e),this[e+"s"]()}function os(e){return function(){return this._data[e]}}function us(){return w(this.days()/7)}function ls(e,t,n,s,i){return i.relativeTime(t||1,!!n,e,s)}function ds(e,t,n){var s=jt(e).abs(),i=mr(s.as("s")),r=mr(s.as("m")),a=mr(s.as("h")),o=mr(s.as("d")),u=mr(s.as("M")),l=mr(s.as("y")),d=i<_r.s&&["s",i]||r<=1&&["m"]||r<_r.m&&["mm",r]||a<=1&&["h"]||a<_r.h&&["hh",a]||o<=1&&["d"]||o<_r.d&&["dd",o]||u<=1&&["M"]||u<_r.M&&["MM",u]||l<=1&&["y"]||["yy",l]
            return d[2]=t,d[3]=+e>0,d[4]=n,ls.apply(null,d)}function hs(e){return void 0===e?mr:"function"==typeof e&&(mr=e,!0)}function cs(e,t){return void 0!==_r[e]&&(void 0===t?_r[e]:(_r[e]=t,!0))}function fs(e){var t=this.localeData(),n=ds(this,!e,t)
            return e&&(n=t.pastFuture(+this,n)),t.postformat(n)}function ms(){var e,t,n,s=yr(this._milliseconds)/1e3,i=yr(this._days),r=yr(this._months)
            e=w(s/60),t=w(e/60),s%=60,e%=60,n=w(r/12),r%=12
            var a=n,o=r,u=i,l=t,d=e,h=s,c=this.asSeconds()
            return c?(c<0?"-":"")+"P"+(a?a+"Y":"")+(o?o+"M":"")+(u?u+"D":"")+(l||d||h?"T":"")+(l?l+"H":"")+(d?d+"M":"")+(h?h+"S":""):"P0D"}var _s,ys
        ys=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,s=0
            s<n
            s++)if(s in t&&e.call(this,t[s],s,t))return!0
            return!1}
        var gs=ys,ps=e.momentProperties=[],ws=!1,vs={}
        e.suppressDeprecationWarnings=!1,e.deprecationHandler=null
        var Ss
        Ss=Object.keys?Object.keys:function(e){var t,n=[]
            for(t in e)u(e,t)&&n.push(t)
            return n}
        var Ms,ks=Ss,Ds={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},Ys={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},Os="Invalid date",xs="%d",Ts=/\d{1,2}/,bs={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},Ps={},Ws={},Rs=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,Us=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,Cs={},Fs={},Hs=/\d/,Ls=/\d\d/,Gs=/\d{3}/,Vs=/\d{4}/,js=/[+-]?\d{6}/,Ns=/\d\d?/,As=/\d\d\d\d?/,Es=/\d\d\d\d\d\d?/,Is=/\d{1,3}/,zs=/\d{1,4}/,Zs=/[+-]?\d{1,6}/,$s=/\d+/,qs=/[+-]?\d+/,Bs=/Z|[+-]\d\d:?\d\d/gi,Js=/Z|[+-]\d\d(?::?\d\d)?/gi,Qs=/[+-]?\d+(\.\d{1,3})?/,Xs=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,Ks={},ei={},ti=0,ni=1,si=2,ii=3,ri=4,ai=5,oi=6,ui=7,li=8
        Ms=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t
            for(t=0
                t<this.length
            ++t)if(this[t]===e)return t
            return-1}
        var di=Ms
        Z("M",["MM",2],"Mo",function(){return this.month()+1}),Z("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),Z("MMMM",0,0,function(e){return this.localeData().months(this,e)}),F("month","M"),G("month",8),Q("M",Ns),Q("MM",Ns,Ls),Q("MMM",function(e,t){return t.monthsShortRegex(e)}),Q("MMMM",function(e,t){return t.monthsRegex(e)}),te(["M","MM"],function(e,t){t[ni]=v(e)-1}),te(["MMM","MMMM"],function(e,t,n,s){var i=n._locale.monthsParse(e,s,n._strict)
            null!=i?t[ni]=i:c(n).invalidMonth=e})
        var hi=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,ci="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),fi="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),mi=Xs,_i=Xs
        Z("Y",0,0,function(){var e=this.year()
            return e<=9999?""+e:"+"+e}),Z(0,["YY",2],0,function(){return this.year()%100}),Z(0,["YYYY",4],0,"year"),Z(0,["YYYYY",5],0,"year"),Z(0,["YYYYYY",6,!0],0,"year"),F("year","y"),G("year",1),Q("Y",qs),Q("YY",Ns,Ls),Q("YYYY",zs,Vs),Q("YYYYY",Zs,js),Q("YYYYYY",Zs,js),te(["YYYYY","YYYYYY"],ti),te("YYYY",function(t,n){n[ti]=2===t.length?e.parseTwoDigitYear(t):v(t)}),te("YY",function(t,n){n[ti]=e.parseTwoDigitYear(t)}),te("Y",function(e,t){t[ti]=parseInt(e,10)}),e.parseTwoDigitYear=function(e){return v(e)+(v(e)>68?1900:2e3)}
        var yi=j("FullYear",!0)
        Z("w",["ww",2],"wo","week"),Z("W",["WW",2],"Wo","isoWeek"),F("week","w"),F("isoWeek","W"),G("week",5),G("isoWeek",5),Q("w",Ns),Q("ww",Ns,Ls),Q("W",Ns),Q("WW",Ns,Ls),ne(["w","ww","W","WW"],function(e,t,n,s){t[s.substr(0,1)]=v(e)})
        var gi={dow:0,doy:6}
        Z("d",0,"do","day"),Z("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),Z("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),Z("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),Z("e",0,0,"weekday"),Z("E",0,0,"isoWeekday"),F("day","d"),F("weekday","e"),F("isoWeekday","E"),G("day",11),G("weekday",11),G("isoWeekday",11),Q("d",Ns),Q("e",Ns),Q("E",Ns),Q("dd",function(e,t){return t.weekdaysMinRegex(e)}),Q("ddd",function(e,t){return t.weekdaysShortRegex(e)}),Q("dddd",function(e,t){return t.weekdaysRegex(e)}),ne(["dd","ddd","dddd"],function(e,t,n,s){var i=n._locale.weekdaysParse(e,s,n._strict)
            null!=i?t.d=i:c(n).invalidWeekday=e}),ne(["d","e","E"],function(e,t,n,s){t[s]=v(e)})
        var pi="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),wi="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),vi="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Si=Xs,Mi=Xs,ki=Xs
        Z("H",["HH",2],0,"hour"),Z("h",["hh",2],0,Ee),Z("k",["kk",2],0,Ie),Z("hmm",0,0,function(){return""+Ee.apply(this)+z(this.minutes(),2)}),Z("hmmss",0,0,function(){return""+Ee.apply(this)+z(this.minutes(),2)+z(this.seconds(),2)}),Z("Hmm",0,0,function(){return""+this.hours()+z(this.minutes(),2)}),Z("Hmmss",0,0,function(){return""+this.hours()+z(this.minutes(),2)+z(this.seconds(),2)}),ze("a",!0),ze("A",!1),F("hour","h"),G("hour",13),Q("a",Ze),Q("A",Ze),Q("H",Ns),Q("h",Ns),Q("HH",Ns,Ls),Q("hh",Ns,Ls),Q("hmm",As),Q("hmmss",Es),Q("Hmm",As),Q("Hmmss",Es),te(["H","HH"],ii),te(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),te(["h","hh"],function(e,t,n){t[ii]=v(e),c(n).bigHour=!0}),te("hmm",function(e,t,n){var s=e.length-2
            t[ii]=v(e.substr(0,s)),t[ri]=v(e.substr(s)),c(n).bigHour=!0}),te("hmmss",function(e,t,n){var s=e.length-4,i=e.length-2
            t[ii]=v(e.substr(0,s)),t[ri]=v(e.substr(s,2)),t[ai]=v(e.substr(i)),c(n).bigHour=!0}),te("Hmm",function(e,t,n){var s=e.length-2
            t[ii]=v(e.substr(0,s)),t[ri]=v(e.substr(s))}),te("Hmmss",function(e,t,n){var s=e.length-4,i=e.length-2
            t[ii]=v(e.substr(0,s)),t[ri]=v(e.substr(s,2)),t[ai]=v(e.substr(i))})
        var Di,Yi=/[ap]\.?m?\.?/i,Oi=j("Hours",!0),xi={calendar:Ds,longDateFormat:Ys,invalidDate:Os,ordinal:xs,ordinalParse:Ts,relativeTime:bs,months:ci,monthsShort:fi,week:gi,weekdays:pi,weekdaysMin:vi,weekdaysShort:wi,meridiemParse:Yi},Ti={},bi={},Pi=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Wi=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ri=/Z|[+-]\d\d(?::?\d\d)?/,Ui=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Ci=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Fi=/^\/?Date\((\-?\d+)/i
        e.createFromInputFallback=k("value provided is not in a recognized ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),e.ISO_8601=function(){}
        var Hi=k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=pt.apply(null,arguments)
            return this.isValid()&&e.isValid()?e<this?this:e:m()}),Li=k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=pt.apply(null,arguments)
            return this.isValid()&&e.isValid()?e>this?this:e:m()}),Gi=function(){return Date.now?Date.now():+new Date}
        Yt("Z",":"),Yt("ZZ",""),Q("Z",Js),Q("ZZ",Js),te(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=Ot(Js,e)})
        var Vi=/([\+\-]|\d\d)/gi
        e.updateOffset=function(){}
        var ji=/^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ni=/^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/
        jt.fn=Mt.prototype
        var Ai=It(1,"add"),Ei=It(-1,"subtract")
        e.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",e.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]"
        var Ii=k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)})
        Z(0,["gg",2],0,function(){return this.weekYear()%100}),Z(0,["GG",2],0,function(){return this.isoWeekYear()%100}),On("gggg","weekYear"),On("ggggg","weekYear"),On("GGGG","isoWeekYear"),On("GGGGG","isoWeekYear"),F("weekYear","gg"),F("isoWeekYear","GG"),G("weekYear",1),G("isoWeekYear",1),Q("G",qs),Q("g",qs),Q("GG",Ns,Ls),Q("gg",Ns,Ls),Q("GGGG",zs,Vs),Q("gggg",zs,Vs),Q("GGGGG",Zs,js),Q("ggggg",Zs,js),ne(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,s){t[s.substr(0,2)]=v(e)}),ne(["gg","GG"],function(t,n,s,i){n[i]=e.parseTwoDigitYear(t)}),Z("Q",0,"Qo","quarter"),F("quarter","Q"),G("quarter",7),Q("Q",Hs),te("Q",function(e,t){t[ni]=3*(v(e)-1)}),Z("D",["DD",2],"Do","date"),F("date","D"),G("date",9),Q("D",Ns),Q("DD",Ns,Ls),Q("Do",function(e,t){return e?t._ordinalParse:t._ordinalParseLenient}),te(["D","DD"],si),te("Do",function(e,t){t[si]=v(e.match(Ns)[0],10)})
        var zi=j("Date",!0)
        Z("DDD",["DDDD",3],"DDDo","dayOfYear"),F("dayOfYear","DDD"),G("dayOfYear",4),Q("DDD",Is),Q("DDDD",Gs),te(["DDD","DDDD"],function(e,t,n){n._dayOfYear=v(e)}),Z("m",["mm",2],0,"minute"),F("minute","m"),G("minute",14),Q("m",Ns),Q("mm",Ns,Ls),te(["m","mm"],ri)
        var Zi=j("Minutes",!1)
        Z("s",["ss",2],0,"second"),F("second","s"),G("second",15),Q("s",Ns),Q("ss",Ns,Ls),te(["s","ss"],ai)
        var $i=j("Seconds",!1)
        Z("S",0,0,function(){return~~(this.millisecond()/100)}),Z(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),Z(0,["SSS",3],0,"millisecond"),Z(0,["SSSS",4],0,function(){return 10*this.millisecond()}),Z(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),Z(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),Z(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),Z(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),Z(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),F("millisecond","ms"),G("millisecond",16),Q("S",Is,Hs),Q("SS",Is,Ls),Q("SSS",Is,Gs)
        var qi
        for(qi="SSSS"
            qi.length<=9
        qi+="S")Q(qi,$s)
        for(qi="S"
            qi.length<=9
        qi+="S")te(qi,Fn)
        var Bi=j("Milliseconds",!1)
        Z("z",0,0,"zoneAbbr"),Z("zz",0,0,"zoneName")
        var Ji=g.prototype
        Ji.add=Ai,Ji.calendar=$t,Ji.clone=qt,Ji.diff=tn,Ji.endOf=_n,Ji.format=on,Ji.from=un,Ji.fromNow=ln,Ji.to=dn,Ji.toNow=hn,Ji.get=E,Ji.invalidAt=Dn,Ji.isAfter=Bt,Ji.isBefore=Jt,Ji.isBetween=Qt,Ji.isSame=Xt,Ji.isSameOrAfter=Kt,Ji.isSameOrBefore=en,Ji.isValid=Mn,Ji.lang=Ii,Ji.locale=cn,Ji.localeData=fn,Ji.max=Li,Ji.min=Hi,Ji.parsingFlags=kn,Ji.set=I,Ji.startOf=mn,Ji.subtract=Ei,Ji.toArray=wn,Ji.toObject=vn,Ji.toDate=pn,Ji.toISOString=rn,Ji.inspect=an,Ji.toJSON=Sn,Ji.toString=sn,Ji.unix=gn,Ji.valueOf=yn,Ji.creationData=Yn,Ji.year=yi,Ji.isLeapYear=ge,Ji.weekYear=xn,Ji.isoWeekYear=Tn,Ji.quarter=Ji.quarters=Un,Ji.month=de,Ji.daysInMonth=he,Ji.week=Ji.weeks=xe,Ji.isoWeek=Ji.isoWeeks=Te,Ji.weeksInYear=Pn,Ji.isoWeeksInYear=bn,Ji.date=zi,Ji.day=Ji.days=He,Ji.weekday=Le,Ji.isoWeekday=Ge,Ji.dayOfYear=Cn,Ji.hour=Ji.hours=Oi,Ji.minute=Ji.minutes=Zi,Ji.second=Ji.seconds=$i,Ji.millisecond=Ji.milliseconds=Bi,Ji.utcOffset=bt,Ji.utc=Wt,Ji.local=Rt,Ji.parseZone=Ut,Ji.hasAlignedHourOffset=Ct,Ji.isDST=Ft,Ji.isLocal=Lt,Ji.isUtcOffset=Gt,Ji.isUtc=Vt,Ji.isUTC=Vt,Ji.zoneAbbr=Hn,Ji.zoneName=Ln,Ji.dates=k("dates accessor is deprecated. Use date instead.",zi),Ji.months=k("months accessor is deprecated. Use month instead",de),Ji.years=k("years accessor is deprecated. Use year instead",yi),Ji.zone=k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",Pt),Ji.isDSTShifted=k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Ht)
        var Qi=T.prototype
        Qi.calendar=b,Qi.longDateFormat=P,Qi.invalidDate=W,Qi.ordinal=R,Qi.preparse=jn,Qi.postformat=jn,Qi.relativeTime=U,Qi.pastFuture=C,Qi.set=O,Qi.months=re,Qi.monthsShort=ae,Qi.monthsParse=ue,Qi.monthsRegex=fe,Qi.monthsShortRegex=ce,Qi.week=De,Qi.firstDayOfYear=Oe,Qi.firstDayOfWeek=Ye,Qi.weekdays=We,Qi.weekdaysMin=Ue,Qi.weekdaysShort=Re,Qi.weekdaysParse=Fe,Qi.weekdaysRegex=Ve,Qi.weekdaysShortRegex=je,Qi.weekdaysMinRegex=Ne,Qi.isPM=$e,Qi.meridiem=qe,Xe("en",{ordinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===v(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"
            return e+n}}),e.lang=k("moment.lang is deprecated. Use moment.locale instead.",Xe),e.langData=k("moment.langData is deprecated. Use moment.localeData instead.",tt)
        var Xi=Math.abs,Ki=rs("ms"),er=rs("s"),tr=rs("m"),nr=rs("h"),sr=rs("d"),ir=rs("w"),rr=rs("M"),ar=rs("y"),or=os("milliseconds"),ur=os("seconds"),lr=os("minutes"),dr=os("hours"),hr=os("days"),cr=os("months"),fr=os("years"),mr=Math.round,_r={s:45,m:45,h:22,d:26,M:11},yr=Math.abs,gr=Mt.prototype
        return gr.abs=Bn,gr.add=Qn,gr.subtract=Xn,gr.as=ss,gr.asMilliseconds=Ki,gr.asSeconds=er,gr.asMinutes=tr,gr.asHours=nr,gr.asDays=sr,gr.asWeeks=ir,gr.asMonths=rr,gr.asYears=ar,gr.valueOf=is,gr._bubble=es,gr.get=as,gr.milliseconds=or,gr.seconds=ur,gr.minutes=lr,gr.hours=dr,gr.days=hr,gr.weeks=us,gr.months=cr,gr.years=fr,gr.humanize=fs,gr.toISOString=ms,gr.toString=ms,gr.toJSON=ms,gr.locale=cn,gr.localeData=fn,gr.toIsoString=k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",ms),gr.lang=Ii,Z("X",0,0,"unix"),Z("x",0,0,"valueOf"),Q("x",qs),Q("X",Qs),te("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),te("x",function(e,t,n){n._d=new Date(v(e))}),e.version="2.17.1",t(pt),e.fn=Ji,e.min=vt,e.max=St,e.now=Gi,e.utc=d,e.unix=Gn,e.months=In,e.isDate=a,e.locale=Xe,e.invalid=m,e.duration=jt,e.isMoment=p,e.weekdays=Zn,e.parseZone=Vn,e.localeData=tt,e.isDuration=kt,e.monthsShort=zn,e.weekdaysMin=qn,e.defineLocale=Ke,e.updateLocale=et,e.locales=nt,e.weekdaysShort=$n,e.normalizeUnits=H,e.relativeTimeRounding=hs,e.relativeTimeThreshold=cs,e.calendarFormat=Zt,e.prototype=Ji,e})


},{}],8:[function(require,module,exports){
    var formatTools=require("./tools/format.js"),GHInput=require("./graphhopper/GHInput.js"),GHRoute=require("./graphhopper/GHRoute.js"),mapLayer=require("./map.js"),dataToHtml=function(e,t){var o=""
        if(e.name)o+="<div class='nameseg'>"+formatTools.formatValue(e.name,t)+"</div>"
        else if(e.street){var a=e.street
            e.housenumber&&(a=formatTools.insComma(a,e.housenumber)),o+="<div class='nameseg'>"+formatTools.formatValue(a,t)+"</div>"}var n=""
        return e.postcode&&(n=e.postcode),e.city&&(n=formatTools.insComma(n,e.city)),e.country&&(n=formatTools.insComma(n,e.country)),n&&(o+="<div class='cityseg'>"+formatTools.formatValue(n,t)+"</div>"),"highway"===e.osm_key,o+="place"===e.osm_key?"<span class='moreseg'>"+e.osm_value+"</span>":"<span class='moreseg'>"+e.osm_key+"</span>"},dataToText=function(e){var t=""
        return e.name?t=e.name:e.street&&(t=e.street,e.housenumber&&(t=formatTools.insComma(t,e.housenumber))),e.postcode&&(t=formatTools.insComma(t,e.postcode)),e.city&&t.indexOf(e.city)<0&&(t=formatTools.insComma(t,e.city)),e.country&&t.indexOf(e.country)<0&&(t=formatTools.insComma(t,e.country)),t},AutoComplete=function(e,t){this.host=e,this.key=t,this.dataType="json",this.api_params={locale:"en"}}
    AutoComplete.prototype.createPath=function(e){for(var t in this.api_params){var o=this.api_params[t]
        if(GHRoute.isArray(o))for(var a in o)e+="&"+encodeURIComponent(t)+"="+encodeURIComponent(o[a])
        else e+="&"+encodeURIComponent(t)+"="+encodeURIComponent(o)}return e},AutoComplete.prototype.createGeocodeURL=function(e,t){var o=this.createPath(this.host+"/geocode?limit=6&type="+this.dataType+"&key="+this.key)
        if(t>=0&&t<e.route.size()){var a=e.route.getIndex(t)
            a.isResolved()&&(o+="&point="+a.lat+","+a.lng)}return o},AutoComplete.prototype.getAutoCompleteDiv=function(e){return $("#locationpoints > div.pointDiv").eq(e).find(".pointInput")},AutoComplete.prototype.hide=function(){$(':input[id$="_Input"]').autocomplete().hide()},AutoComplete.prototype.showListForIndex=function(e,t,o){var a=this.getAutoCompleteDiv(o),n=this.createGeocodeURL(e,o-1),r={containerClass:"autocomplete",timeout:1e3,deferRequestBy:5,minChars:2,maxHeight:510,noCache:!0,triggerSelectOnValidInput:!1,autoSelectFirst:!1,paramName:"q",dataType:e.dataType,onSearchStart:function(e){var t=new GHInput(e.q).lat
        return void 0===t},serviceUrl:function(){return n},transformResult:function(e,t){if(e.suggestions=[],e.hits)for(var o=0
        o<e.hits.length
        o++){var a=e.hits[o]
            e.suggestions.push({value:dataToText(a),data:a})}return e},onSearchError:function(e,t,o,a,n){},formatResult:function(e,t){return dataToHtml(e.data,t)},onSelect:function(e){r.onPreSelect(e)},onPreSelect:function(n){var r=e.route.getIndex(o)
        a.autocomplete().disable()
        var s=n.data.point
        r.setCoord(s.lat,s.lng),r.input=n.value,t(!0)||mapLayer.focus(r,15,o),a.autocomplete().enable()}}
        a.autocomplete(r)},AutoComplete.prototype.createStub=function(){return complete=new AutoComplete,complete.showListForIndex=function(){},complete.hide=function(){},complete},AutoComplete.prototype.setLocale=function(e){e&&(this.api_params.locale=e)},module.exports=AutoComplete


},{"./graphhopper/GHInput.js":12,"./graphhopper/GHRoute.js":14,"./map.js":23,"./tools/format.js":27}],9:[function(require,module,exports){
    exports.options={environment:"development",routing:{host:"",api_key:""},geocoding:{host:"",api_key:""},thunderforest:{api_key:""}}


},{}],10:[function(require,module,exports){
    var ghenv=require("./options.js").options,tfAddition=""
    ghenv.thunderforest.api_key&&(tfAddition="?apikey="+ghenv.thunderforest.api_key)
    var osmAttr='&copy
        <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors',retinaTiles=L.Browser.retina,lyrk=L.tileLayer("https://tiles.lyrk.org/"+(retinaTiles?"lr":"ls")+"/{z}/{x}/{y}?apikey=6e8cfef737a140e2a58c8122aaa26077",{attribution:osmAttr+', <a href="https://geodienste.lyrk.de/">Lyrk</a>'}),omniscale=L.tileLayer.wms("https://maps.omniscale.net/v1/mapsgraph-bf48cc0b/tile",{layers:"osm",attribution:osmAttr+', &copy
    <a href="http://maps.omniscale.com/">Omniscale</a>'}),openMapSurfer=L.tileLayer("http://korona.geog.uni-heidelberg.de/tiles/roads/x={x}&y={y}&z={z}",{attribution:osmAttr+', <a href="http://korona.geog.uni-heidelberg.de/contact.html">GIScience Heidelberg</a>'}),sorbianLang=L.tileLayer("http://a.tile.openstreetmap.de/tiles/osmhrb/{z}/{x}/{y}.png",{attribution:osmAttr+', <a href="http://www.alberding.eu/">&copy
    Alberding GmbH, CC-BY-SA</a>'}),thunderTransport=L.tileLayer("https://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png"+tfAddition,{attribution:osmAttr+', <a href="https://www.thunderforest.com/maps/transport/" target="_blank">Thunderforest Transport</a>'}),thunderCycle=L.tileLayer("https://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png"+tfAddition,{attribution:osmAttr+', <a href="https://www.thunderforest.com/maps/opencyclemap/" target="_blank">Thunderforest Cycle</a>'}),thunderOutdoors=L.tileLayer("https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png"+tfAddition,{attribution:osmAttr+', <a href="https://www.thunderforest.com/maps/outdoors/" target="_blank">Thunderforest Outdoors</a>'}),thunderNeighbourhood=L.tileLayer("https://{s}.tile.thunderforest.com/neighbourhood/{z}/{x}/{y}.png"+tfAddition,{attribution:osmAttr+', <a href="https://thunderforest.com/maps/neighbourhood/" target="_blank">Thunderforest Neighbourhood</a>'}),wrk=L.tileLayer("http://{s}.wanderreitkarte.de/topo/{z}/{x}/{y}.png",{attribution:osmAttr+', <a href="http://wanderreitkarte.de" target="_blank">WanderReitKarte</a>',subdomains:["topo4","topo","topo2","topo3"]}),osm=L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:osmAttr}),osmde=L.tileLayer("http://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png",{attribution:osmAttr}),mapLink='<a href="http://www.esri.com/">Esri</a>',wholink="i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community",esriAerial=L.tileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",{attribution:"&copy
    "+mapLink+", "+wholink,maxZoom:18}),availableTileLayers={Omniscale:omniscale,OpenStreetMap:osm,"Esri Aerial":esriAerial,"TF Transport":thunderTransport,"TF Cycle":thunderCycle,"TF Outdoors":thunderOutdoors,"TF Neighbourhood":thunderNeighbourhood,Lyrk:lyrk,WanderReitKarte:wrk,OpenMapSurfer:openMapSurfer,"Sorbian Language":sorbianLang,"OpenStreetMap.de":osmde}
    module.exports.activeLayerName="Omniscale",module.exports.defaultLayer=omniscale,module.exports.getAvailableTileLayers=function(){return availableTileLayers},module.exports.selectLayer=function(t){var e=availableTileLayers[t]
        return e||(e=module.exports.defaultLayer),e}


},{"./options.js":9}],11:[function(require,module,exports){
    var ensureOneCheckboxSelected=function(){$("#gpx_route").change(function(){$(this).is(":checked")?($("#gpx_track").prop("disabled",!1),$("#gpx_waypoints").prop("disabled",!1)):$("#gpx_track").is(":checked")?$("#gpx_waypoints").is(":checked")||$("#gpx_track").prop("disabled",!0):$("#gpx_waypoints").prop("disabled",!0)}),$("#gpx_track").change(function(){$(this).is(":checked")?($("#gpx_route").prop("disabled",!1),$("#gpx_waypoints").prop("disabled",!1)):$("#gpx_route").is(":checked")?$("#gpx_waypoints").is(":checked")||$("#gpx_route").prop("disabled",!0):$("#gpx_waypoints").prop("disabled",!0)}),$("#gpx_waypoints").change(function(){$(this).is(":checked")?($("#gpx_route").prop("disabled",!1),$("#gpx_track").prop("disabled",!1)):$("#gpx_route").is(":checked")?$("#gpx_track").is(":checked")||$("#gpx_route").prop("disabled",!0):$("#gpx_track").prop("disabled",!0)})}
    module.exports.addGpxExport=function(e){function p(p,o,i){return e.route.isResolved()&&window.open(e.createGPXURL(p,o,i)),!1}function o(){return p($("#gpx_route").is(":checked"),$("#gpx_track").is(":checked"),$("#gpx_waypoints").is(":checked")),i.dialog("close"),!1}var i
        $(function(){i=$("#gpx_dialog").dialog({width:420,height:260,autoOpen:!1,resizable:!1,draggable:!1,buttons:{"Export GPX":o,Cancel:function(){$(this).dialog("close")}}}),ensureOneCheckboxSelected()}),$("#gpxExportButton a").click(function(e){e.preventDefault(),$("#gpx_dialog").dialog("open")})}


},{}],12:[function(require,module,exports){
    function round(t,n){return void 0===n&&(n=1e6),Math.round(t*n)/n}var GHInput=function(t){this.set(t)}
    GHInput.isObject=function(t){var n=Object.prototype.toString.call(t)
        return"[object object]"===n.toLowerCase()},GHInput.isString=function(t){var n=Object.prototype.toString.call(t)
        return"[object string]"===n.toLowerCase()},GHInput.prototype.isResolved=function(){return!isNaN(this.lat)&&!isNaN(this.lng)},GHInput.prototype.setCoord=function(t,n){this.lat=round(t),this.lng=round(n),this.input=this.toString()},GHInput.prototype.setUnresolved=function(){this.lat=void 0,this.lng=void 0},GHInput.prototype.set=function(t){if(this.input=t,GHInput.isObject(t))this.setCoord(t.lat,t.lng)
    else if(GHInput.isString(t)){var n=t.indexOf(",")
        n>=0?(this.lat=round(parseFloat(t.substr(0,n))),this.lng=round(parseFloat(t.substr(n+1))),this.isResolved()?this.input=this.toString():this.setUnresolved()):this.setUnresolved()}},GHInput.prototype.toString=function(){if(void 0!==this.lat&&void 0!==this.lng)return this.lat+","+this.lng},module.exports=GHInput


},{}],13:[function(require,module,exports){
    var GHRoute=require("./GHRoute.js"),GHInput=require("./GHInput.js"),graphhopperTools=require("./tools.js")
    Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable")
        var e=Array.prototype.slice.call(arguments,1),i=this,o=function(){},s=function(){return i.apply(this instanceof o&&t?this:t,e.concat(Array.prototype.slice.call(arguments)))}
        return o.prototype=this.prototype,s.prototype=new o,s})
    var GHRequest=function(t,e){this.host=t,this.route=new GHRoute(new GHInput,new GHInput),this.from=this.route.first(),this.to=this.route.last(),this.features={},this.do_zoom=!0,this.useMiles=!1,this.dataType="json",this.api_params={locale:"en",vehicle:"car",weighting:"fastest",elevation:!1,key:e,pt:{}},this.route.addListener("route.add",function(t){this.to=this.route.last()}.bind(this)),this.route.addListener("route.remove",function(t){this.from=this.route.first(),this.to=this.route.last()}.bind(this)),this.route.addListener("route.move",function(t){this.from=this.route.first(),this.to=this.route.last()}.bind(this)),this.route.addListener("route.reverse",function(t){this.from=this.route.first(),this.to=this.route.last()}.bind(this))}
    GHRequest.prototype.init=function(t){for(var e in t)if("point"!==e&&"mathRandom"!==e&&"do_zoom"!==e&&"layer"!==e&&"use_miles"!==e){var i=t[e]
        "false"===i?i=!1:"true"===i&&(i=!0),this.api_params[e]=i}"do_zoom"in t&&(this.do_zoom=t.do_zoom),"use_miles"in t&&(this.useMiles=t.use_miles),this.api_params.elevation=!1
        var o=this.features[this.api_params.vehicle]
        if(o&&o.elevation&&("elevation"in t?this.api_params.elevation=t.elevation:this.api_params.elevation=!0),t.q){var s=t.q
            t.point||(t.point=[])
            var r=s.indexOf("from:"),a=s.indexOf("to:")
            if(r>=0&&a>=0)r<a?(t.point.push(s.substring(r+5,a).trim()),t.point.push(s.substring(a+3).trim())):(t.point.push(s.substring(a+3,r).trim()),t.point.push(s.substring(r+5).trim()))
            else for(var n=s.split("p:"),p=0
                p<n.length
            p++){var u=n[p].trim()
                0!==u.length&&t.point.push(u)}}},GHRequest.prototype.setEarliestDepartureTime=function(t){this.api_params.pt.earliest_departure_time=t},GHRequest.prototype.getEarliestDepartureTime=function(){if(this.api_params.pt.earliest_departure_time)return this.api_params.pt.earliest_departure_time},GHRequest.prototype.initVehicle=function(t){this.api_params.vehicle=t
        var e=this.features[t]
        e&&e.elevation?this.api_params.elevation=!0:this.api_params.elevation=!1},GHRequest.prototype.hasElevation=function(){return this.api_params.elevation},GHRequest.prototype.getVehicle=function(){return this.api_params.vehicle},GHRequest.prototype.isPublicTransit=function(){return"pt"===this.getVehicle()},GHRequest.prototype.createGeocodeURL=function(t,e){var i=this.host
        t&&(i=t)
        var o=this.createPath(i+"/geocode?limit=6&type="+this.dataType)
        if(e>=0&&e<this.route.size()){var s=this.route.getIndex(e)
            s.isResolved()&&(o+="&point="+s.lat+","+s.lng)}return o},GHRequest.prototype.createURL=function(){return this.createPath(this.host+"/route?"+this.createPointParams(!1)+"&type="+this.dataType)},GHRequest.prototype.createGPXURL=function(t,e,i){return this.createPath(this.host+"/route?"+this.createPointParams(!1)+"&type=gpx&gpx.route="+t+"&gpx.track="+e+"&gpx.waypoints="+i)},GHRequest.prototype.createHistoryURL=function(){var t={key:!0}
        return this.createPath("?"+this.createPointParams(!0),t)+"&use_miles="+!!this.useMiles},GHRequest.prototype.createPointParams=function(t){var e,i,o,s=""
        for(i=0,o=this.route.size()
            i<o
        i++)e=this.route.getIndex(i),i>0&&(s+="&"),s+=t?"point="+encodeURIComponent(e.input):"point="+encodeURIComponent(e.toString())
        return s},GHRequest.prototype.createPath=function(t,e){for(var i in this.api_params)if(!e||!e[i]){var o=this.api_params[i]
        t+=this.flatParameter(i,o)}return t},GHRequest.prototype.flatParameter=function(t,e){if(GHRoute.isObject(e)){var i="",o=Object.keys(e)
        for(var s in o){var r=o[s]
            i+=this.flatParameter(t+"."+r,e[r])}return i}if(GHRoute.isArray(e)){var i="",o=e
        for(var s in o)i+=this.flatParameter(t,o[s])
        return i}return"&"+encodeURIComponent(t)+"="+encodeURIComponent(e)},GHRequest.prototype.doRequest=function(t,e){var i=this
        $.ajax({timeout:3e4,url:t,success:function(t){if(t.paths)for(var o=0
            o<t.paths.length
            o++){var s=t.paths[o]
                if(s.points_encoded){var r=graphhopperTools.decodePath(s.points,i.hasElevation())
                    s.points={type:"LineString",coordinates:r}
                    var a=graphhopperTools.decodePath(s.snapped_waypoints,i.hasElevation())
                    s.snapped_waypoints={type:"MultiPoint",coordinates:a}}}e(t)},error:function(i){var o,s="API did not respond! "
            if(i&&i.responseText&&i.responseText.indexOf("{")>=0)o=JSON.parse(i.responseText)
            else if(i&&i.statusText&&"OK"!==i.statusText){s+=i.statusText
                var r="Error for "+t
                o={message:s,hints:[{message:s,details:r}]}}console.log(s+" "+JSON.stringify(i)),e(o)},type:"GET",dataType:this.dataType,crossDomain:!0})},GHRequest.prototype.getInfo=function(){var t=this.host+"/info?type="+this.dataType+"&key="+this.getKey()
        return $.ajax({url:t,timeout:3e3,type:"GET",dataType:this.dataType,crossDomain:!0})},GHRequest.prototype.setLocale=function(t){t&&(this.api_params.locale=t)},GHRequest.prototype.getKey=function(){return this.api_params.key},GHRequest.prototype.fetchTranslationMap=function(t){t||(t="")
        var e=this.host+"/i18n/"+t+"?type="+this.dataType+"&key="+this.getKey()
        return $.ajax({url:e,timeout:3e3,type:"GET",dataType:this.dataType,crossDomain:!0})},module.exports=GHRequest


},{"./GHInput.js":12,"./GHRoute.js":14,"./tools.js":15}],14:[function(require,module,exports){
    var GHInput=require("./GHInput.js"),GHroute=function(){var t=Object.create(Array.prototype)
        return t=Array.apply(t,arguments)||t,GHroute.injectClassMethods(t),t._listeners={},t}
    GHroute.injectClassMethods=function(t){for(var e in GHroute.prototype)GHroute.prototype.hasOwnProperty(e)&&(t[e]=GHroute.prototype[e])
        return t},GHroute.fromArray=function(t){var e=GHroute.apply(null,t)
        return e},GHroute.isArray=function(t){var e=Object.prototype.toString.call(t)
        return"[object array]"===e.toLowerCase()},GHroute.isObject=function(t){var e=Object.prototype.toString.call(t)
        return"[object object]"===e.toLowerCase()},GHroute.prototype={first:function(){return this.getIndex(0)},last:function(){return this.getIndex(this.length-1)},getIndex:function(t){return t=isNaN(t)?0:t,this[t]instanceof GHInput&&this[t]},getIndexByCoord:function(t){var e,r,i,n=!1,o=new GHInput(t)
        for(r=0,i=this.length
            r<i
        r++)if(e=this[r],e.toString()===o.toString()){n=r
            break}return n},getIndexFromCoord:function(t){return this.getIndex(this.getIndexByCoord(t))},size:function(){return this.length},add:function(t,e){if(GHroute.isArray(t)){for(var r=0
        r<t.length
        r++)Array.prototype.push.call(this,t[r]instanceof GHInput?t[r]:new GHInput(t[r])),void 0!==e?(this.move(-1,e,!0),e++):e=this.lenght-1,this.fire("route.add",{point:this[e],to:e})
        return this}return Array.prototype.push.call(this,t instanceof GHInput?t:new GHInput(t)),void 0!==e?this.move(-1,e,!0):e=this.lenght-1,this.fire("route.add",{point:this[e],to:e}),this[e]},removeSingle:function(t){var e=!1
        return isNaN(t)||t>=this.length||void 0===this[t]?(t instanceof GHInput&&(t=t.toString()),e=this.getIndexByCoord(t)):e=t,e!==!1&&this.remove(e),this},remove:function(t,e){var r=e||1
        return Array.prototype.splice.call(this,t,r),1===this.length&&Array.prototype.push.call(this,new GHInput),this.fire("route.remove",{from:t,to:r}),this},addAll:function(){for(var t=0
        t<arguments.length
        t++)this.add(arguments[t])
        return this},set:function(t,e,r){if(t instanceof GHInput)this[e]=t
    else{if(!(this[e]instanceof GHInput))return!!r&&this.add(t,e)
        this[e].set(t)}return this.fire("route.set",{point:this[e],to:e}),this[e]},move:function(t,e,r){for(
        t<0
    )t+=this.length
        for(
            e<0
        )e+=this.length
        if(e>=this.length)for(var i=e-this.length
            i--+1
        )Array.prototype.push.call(this,void 0)
        return Array.prototype.splice.call(this,e,0,Array.prototype.splice.call(this,t,1)[0]),r||this.fire("route.move",{old_index:t,new_index:e}),this},reverse:function(){return Array.prototype.reverse.call(this),this.fire("route.reverse",{}),this},isResolved:function(){for(var t=0,e=this.length
        t<e
        t++){var r=this[t]
            if(!r.isResolved())return!1}return!0},addListener:function(t,e){return"undefined"==typeof this._listeners[t]&&(this._listeners[t]=[]),this._listeners[t].push(e),this},fire:function(t,e){if("string"==typeof t&&(t={type:t}),"object"==typeof e)for(var r in e)t[r]=e[r]
        if(t.route||(t.route=this),!t.type)throw new Error("Event object missing 'type' property.")
        if(this._listeners[t.type]instanceof Array)for(var i=this._listeners[t.type],n=0,o=i.length
            n<o
        n++)i[n].call(this,t)},removeListener:function(t,e){if(this._listeners[t]instanceof Array)for(var r=this._listeners[t],i=0,n=r.length
        i<n
        i++)if(r[i]===e){r.splice(i,1)
            break}}},module.exports=GHroute

},{"./GHInput.js":12}],15:[function(require,module,exports){
    var decodePath=function(e,d){for(var o=e.length,r=0,a=[],h=0,t=0,c=0
        r<o
        ){var l,v=0,i=0
            do l=e.charCodeAt(r++)-63,i|=(31&l)<<v,v+=5
            while(l>=32)
            var u=1&i?~(i>>1):i>>1
            h+=u,v=0,i=0
            do l=e.charCodeAt(r++)-63,i|=(31&l)<<v,v+=5
            while(l>=32)
            var n=1&i?~(i>>1):i>>1
            if(t+=n,d){v=0,i=0
                do l=e.charCodeAt(r++)-63,i|=(31&l)<<v,v+=5
                while(l>=32)
                var s=1&i?~(i>>1):i>>1
                c+=s,a.push([1e-5*t,1e-5*h,c/100])}else a.push([1e-5*t,1e-5*h])}return a}
    module.exports.decodePath=decodePath

},{}],16:[function(require,module,exports){
    function addInstruction(t,e,n,a,r,o,i){var s=n.sign
        s=0===a?"marker-icon-green":messages.getSignName(s)
        var p=n.text
        n.annotation_text&&(p=p?p+", "+n.annotation_text:n.annotation_text)
        var c=window.location.pathname,d=c.substring(0,c.lastIndexOf("/")),l=$("<tr class='instruction'/>")
        if("continue"!==s){var g="<img class='pic' style='vertical-align: middle' src='"+d+"/img/"+s+".png'/>"
            l.append("<td class='instr_pic'>"+g+"</td>")}else l.append("<td class='instr_pic'/>")
        var u=$("<td class='instr_title'>")
        u.text(p),l.append(u)
        var m=n.distance
        m>0&&l.append("<td class='instr_distance'><span>"+translate.createDistanceString(m,o)+"<br/>"+translate.createTimeString(n.time)+"</span></td>"),r&&(l.click(function(){routeSegmentPopup&&t.removeLayerFromMap(routeSegmentPopup),routeSegmentPopup=L.popup().setLatLng([r[1],r[0]]).setContent(p).openOn(t.getMap())}),i&&L.marker([r[1],r[0]],{icon:L.icon({iconUrl:"./img/marker-small-blue.png",iconSize:[15,15]}),draggable:!0}).addTo(t.getRoutingLayer()).bindPopup(p)),e.append(l)}var translate=require("./translate.js"),messages=require("./messages.js"),routeSegmentPopup=null
    module.exports.create=function(t,e,n,a){for(var r=$("<table class='instructions'>"),o=a.api_params.debug_instructions,i=e.instructions.length>100,s=Math.min(e.instructions.length,100),p=0
        p<s
        p++){var c=e.instructions[p],d=e.points.coordinates[c.interval[0]]
            addInstruction(t,r,c,p,d,a.useMiles,o)}var l=$("<div class='instructions_info'>")
        if(l.append(r),i){var g=$("<button id='moreButton'>"+translate.tr("more_button")+"…</button>")
            g.click(function(){g.remove()
                for(var n=s
                    n<e.instructions.length
                n++){var o=e.instructions[n],i=e.points.coordinates[o.interval[0]]
                    addInstruction(t,r,o,n,i,a.useMiles)}}),r.append(g)}var u=$("<div id='routeDetails'/>")
        u.hide()
        var m=$("<button class='expandDetails'>+</button>")
        m.click(function(){u.toggle()}),l.append(m)
        var v="points: "+e.points.coordinates.length
        u.append("<span>"+v+"</span>")
        var f=$("#export-link a")
        f.attr("href",n)
        var h=$("<br/><a>view on OSM</a>"),b="bicycle"
        "FOOT"===a.getVehicle().toUpperCase()&&(b="foot"),h.attr("href","http://www.openstreetmap.org/directions?engine=graphhopper_"+b+"&route="+encodeURIComponent(a.from.lat+","+a.from.lng+"
        "+a.to.lat+","+a.to.lng)),u.append(h)
        var _=$("<a>OSRM</a>")
        _.attr("href","http://map.project-osrm.org/?z=13&loc="+a.from+"&loc="+a.to),u.append("<br/><span>Compare with: </span>"),u.append(_)
        var w=$("<a>Google</a> "),x="",S=""
        "FOOT"===a.getVehicle().toUpperCase()?(x="&dirflg=w",S="&mode=W"):(a.getVehicle().toUpperCase().indexOf("BIKE")>=0||"MTB"===a.getVehicle().toUpperCase())&&(x="&dirflg=b"),w.attr("href","https://maps.google.com/?saddr="+a.from+"&daddr="+a.to+x),u.append(w)
        var O=$("<a>Bing</a> ")
        return O.attr("href","https://www.bing.com/maps/default.aspx?rtp=adr."+a.from+"~adr."+a.to+S),u.append(O),metaVersionInfo&&u.append(metaVersionInfo),l.append(u),l}

},{"./messages.js":24,"./translate.js":31}],17:[function(require,module,exports){
    !function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(t){for(var e=t.css("visibility")
        "inherit"===e
    )t=t.parent(),e=t.css("visibility")
        return"hidden"!==e}t.ui=t.ui||{},t.ui.version="1.12.0"
        var i=0,s=Array.prototype.slice
        t.cleanData=function(e){return function(i){var s,o,n
            for(n=0
                null!=(o=i[n])
            n++)try{s=t._data(o,"events"),s&&s.remove&&t(o).triggerHandler("remove")}catch(t){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var o,n,r,h={},a=e.split(".")[0]
            e=e.split(".")[1]
            var l=a+"-"+e
            return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][l.toLowerCase()]=function(e){return!!t.data(e,l)},t[a]=t[a]||{},o=t[a][e],n=t[a][e]=function(t,e){return this._createWidget?void(arguments.length&&this._createWidget(t,e)):new n(t,e)},t.extend(n,o,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),r=new i,r.options=t.widget.extend({},r.options),t.each(s,function(e,s){return t.isFunction(s)?void(h[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function o(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,n=this._superApply
                return this._super=t,this._superApply=o,e=s.apply(this,arguments),this._super=i,this._superApply=n,e}}()):void(h[e]=s)}),n.prototype=t.widget.extend(r,{widgetEventPrefix:o?r.widgetEventPrefix||e:e},h,{constructor:n,namespace:a,widgetName:e,widgetFullName:l}),o?(t.each(o._childConstructors,function(e,i){var s=i.prototype
                t.widget(s.namespace+"."+s.widgetName,n,i._proto)}),delete o._childConstructors):i._childConstructors.push(n),t.widget.bridge(e,n),n},t.widget.extend=function(e){for(var i,o,n=s.call(arguments,1),r=0,h=n.length
            h>r
            r++)for(i in n[r])o=n[r][i],n[r].hasOwnProperty(i)&&void 0!==o&&(e[i]=t.isPlainObject(o)?t.isPlainObject(e[i])?t.widget.extend({},e[i],o):t.widget.extend({},o):o)
            return e},t.widget.bridge=function(e,i){var o=i.prototype.widgetFullName||e
            t.fn[e]=function(n){var r="string"==typeof n,h=s.call(arguments,1),a=this
                return r?this.each(function(){var i,s=t.data(this,o)
                    return"instance"===n?(a=s,!1):s?t.isFunction(s[n])&&"_"!==n.charAt(0)?(i=s[n].apply(s,h),i!==s&&void 0!==i?(a=i&&i.jquery?a.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+n+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization
                    attempted to call method '"+n+"'")}):(h.length&&(n=t.widget.extend.apply(null,[n].concat(h))),this.each(function(){var e=t.data(this,o)
                    e?(e.option(n||{}),e._init&&e._init()):t.data(this,o,new i(n,this))})),a}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this
    this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,o,n,r=e
    if(0===arguments.length)return t.widget.extend({},this.options)
    if("string"==typeof e)if(r={},s=e.split("."),e=s.shift(),s.length){for(o=r[e]=t.widget.extend({},this.options[e]),n=0
        s.length-1>n
        n++)o[s[n]]=o[s[n]]||{},o=o[s[n]]
        if(e=s.pop(),1===arguments.length)return void 0===o[e]?null:o[e]
        o[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e]
        r[e]=i}return this._setOptions(r),this},_setOptions:function(t){var e
    for(e in t)this._setOption(e,t[e])
    return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,o
    for(i in e)o=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&o&&o.length&&(s=t(o.get()),this._removeClass(o,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,n){var r,h
    for(h=0
        i.length>h
    h++)r=o.classesElementLookup[i[h]]||t(),r=t(e.add?t.unique(r.get().concat(e.element.get())):r.not(e.element).get()),o.classesElementLookup[i[h]]=r,s.push(i[h]),n&&e.classes[i[h]]&&s.push(e.classes[i[h]])}var s=[],o=this
    return e=t.extend({element:this.element,classes:this.options.classes||{}},e),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i
    var o="string"==typeof t||null===t,n={extra:o?e:i,keys:o?t:e,element:o?this.element:t,add:s}
    return n.element.toggleClass(this._classes(n),s),this},_on:function(e,i,s){var o,n=this
    "boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=o=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,o=this.widget()),t.each(s,function(s,r){function h(){return e||n.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?n[r]:r).apply(n,arguments):void 0}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++)
        var a=s.match(/^([\w:-]*)\s*(.*)$/),l=a[1]+n.eventNamespace,c=a[2]
        c?o.on(l,c,h):i.on(l,h)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this
    return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var o,n,r=this.options[e]
    if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],n=i.originalEvent)for(o in n)o in i||(i[o]=n[o])
    return this.element.trigger(i,s),!(t.isFunction(r)&&r.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,o,n){"string"==typeof o&&(o={effect:o})
    var r,h=o?o===!0||"number"==typeof o?i:o.effect||i:e
    o=o||{},"number"==typeof o&&(o={duration:o}),r=!t.isEmptyObject(o),o.complete=n,o.delay&&s.delay(o.delay),r&&t.effects&&t.effects.effect[h]?s[e](o):h!==e&&s[h]?s[h](o.duration,o.easing,n):s.queue(function(i){t(this)[e](),n&&n.call(s[0]),i()})}}),t.widget,function(){function e(t,e,i){return[parseFloat(t[0])*(d.test(t[0])?e/100:1),parseFloat(t[1])*(d.test(t[1])?i/100:1)]}function i(e,i){return parseInt(t.css(e,i),10)||0}function s(e){var i=e[0]
    return 9===i.nodeType?{width:e.width(),height:e.height(),offset:{top:0,left:0}}:t.isWindow(i)?{width:e.width(),height:e.height(),offset:{top:e.scrollTop(),left:e.scrollLeft()}}:i.preventDefault?{width:0,height:0,offset:{top:i.pageY,left:i.pageX}}:{width:e.outerWidth(),height:e.outerHeight(),offset:e.offset()}}var o,n,r=Math.max,h=Math.abs,a=Math.round,l=/left|center|right/,c=/top|center|bottom/,p=/[\+\-]\d+(\.[\d]+)?%?/,u=/^\w+/,d=/%$/,f=t.fn.position
    n=function(){var e=t("<div>").css("position","absolute").appendTo("body").offset({top:1.5,left:1.5}),i=1.5===e.offset().top
        return e.remove(),n=function(){return i},i},t.position={scrollbarWidth:function(){if(void 0!==o)return o
        var e,i,s=t("<div style='display:block
        position:absolute
        width:50px
        height:50px
        overflow:hidden
        '><div style='height:100px
        width:auto
        '></div></div>"),n=s.children()[0]
        return t("body").append(s),e=n.offsetWidth,s.css("overflow","scroll"),i=n.offsetWidth,e===i&&(i=s[0].clientWidth),s.remove(),o=e-i},getScrollInfo:function(e){var i=e.isWindow||e.isDocument?"":e.element.css("overflow-x"),s=e.isWindow||e.isDocument?"":e.element.css("overflow-y"),o="scroll"===i||"auto"===i&&e.width<e.element[0].scrollWidth,n="scroll"===s||"auto"===s&&e.height<e.element[0].scrollHeight
        return{width:n?t.position.scrollbarWidth():0,height:o?t.position.scrollbarWidth():0}},getWithinInfo:function(e){var i=t(e||window),s=t.isWindow(i[0]),o=!!i[0]&&9===i[0].nodeType,n=!s&&!o
        return{element:i,isWindow:s,isDocument:o,offset:n?t(e).offset():{left:0,top:0},scrollLeft:i.scrollLeft(),scrollTop:i.scrollTop(),width:i.outerWidth(),height:i.outerHeight()}}},t.fn.position=function(o){if(!o||!o.of)return f.apply(this,arguments)
        o=t.extend({},o)
        var d,g,m,_,v,b,w=t(o.of),y=t.position.getWithinInfo(o.within),P=t.position.getScrollInfo(y),x=(o.collision||"flip").split(" "),z={}
        return b=s(w),w[0].preventDefault&&(o.at="left top"),g=b.width,m=b.height,_=b.offset,v=t.extend({},_),t.each(["my","at"],function(){var t,e,i=(o[this]||"").split(" ")
            1===i.length&&(i=l.test(i[0])?i.concat(["center"]):c.test(i[0])?["center"].concat(i):["center","center"]),i[0]=l.test(i[0])?i[0]:"center",i[1]=c.test(i[1])?i[1]:"center",t=p.exec(i[0]),e=p.exec(i[1]),z[this]=[t?t[0]:0,e?e[0]:0],o[this]=[u.exec(i[0])[0],u.exec(i[1])[0]]}),1===x.length&&(x[1]=x[0]),"right"===o.at[0]?v.left+=g:"center"===o.at[0]&&(v.left+=g/2),"bottom"===o.at[1]?v.top+=m:"center"===o.at[1]&&(v.top+=m/2),d=e(z.at,g,m),v.left+=d[0],v.top+=d[1],this.each(function(){var s,l,c=t(this),p=c.outerWidth(),u=c.outerHeight(),f=i(this,"marginLeft"),b=i(this,"marginTop"),C=p+f+i(this,"marginRight")+P.width,H=u+b+i(this,"marginBottom")+P.height,T=t.extend({},v),k=e(z.my,c.outerWidth(),c.outerHeight())
            "right"===o.my[0]?T.left-=p:"center"===o.my[0]&&(T.left-=p/2),"bottom"===o.my[1]?T.top-=u:"center"===o.my[1]&&(T.top-=u/2),T.left+=k[0],T.top+=k[1],n()||(T.left=a(T.left),T.top=a(T.top)),s={marginLeft:f,marginTop:b},t.each(["left","top"],function(e,i){t.ui.position[x[e]]&&t.ui.position[x[e]][i](T,{targetWidth:g,targetHeight:m,elemWidth:p,elemHeight:u,collisionPosition:s,collisionWidth:C,collisionHeight:H,offset:[d[0]+k[0],d[1]+k[1]],my:o.my,at:o.at,within:y,elem:c})}),o.using&&(l=function(t){var e=_.left-T.left,i=e+g-p,s=_.top-T.top,n=s+m-u,a={target:{element:w,left:_.left,top:_.top,width:g,height:m},element:{element:c,left:T.left,top:T.top,width:p,height:u},horizontal:0>i?"left":e>0?"right":"center",vertical:0>n?"top":s>0?"bottom":"middle"}
                p>g&&g>h(e+i)&&(a.horizontal="center"),u>m&&m>h(s+n)&&(a.vertical="middle"),a.important=r(h(e),h(i))>r(h(s),h(n))?"horizontal":"vertical",o.using.call(this,t,a)}),c.offset(t.extend(T,{using:l}))})},t.ui.position={fit:{left:function(t,e){var i,s=e.within,o=s.isWindow?s.scrollLeft:s.offset.left,n=s.width,h=t.left-e.collisionPosition.marginLeft,a=o-h,l=h+e.collisionWidth-n-o
        e.collisionWidth>n?a>0&&0>=l?(i=t.left+a+e.collisionWidth-n-o,t.left+=a-i):t.left=l>0&&0>=a?o:a>l?o+n-e.collisionWidth:o:a>0?t.left+=a:l>0?t.left-=l:t.left=r(t.left-h,t.left)},top:function(t,e){var i,s=e.within,o=s.isWindow?s.scrollTop:s.offset.top,n=e.within.height,h=t.top-e.collisionPosition.marginTop,a=o-h,l=h+e.collisionHeight-n-o
        e.collisionHeight>n?a>0&&0>=l?(i=t.top+a+e.collisionHeight-n-o,t.top+=a-i):t.top=l>0&&0>=a?o:a>l?o+n-e.collisionHeight:o:a>0?t.top+=a:l>0?t.top-=l:t.top=r(t.top-h,t.top)}},flip:{left:function(t,e){var i,s,o=e.within,n=o.offset.left+o.scrollLeft,r=o.width,a=o.isWindow?o.scrollLeft:o.offset.left,l=t.left-e.collisionPosition.marginLeft,c=l-a,p=l+e.collisionWidth-r-a,u="left"===e.my[0]?-e.elemWidth:"right"===e.my[0]?e.elemWidth:0,d="left"===e.at[0]?e.targetWidth:"right"===e.at[0]?-e.targetWidth:0,f=-2*e.offset[0]
        0>c?(i=t.left+u+d+f+e.collisionWidth-r-n,(0>i||h(c)>i)&&(t.left+=u+d+f)):p>0&&(s=t.left-e.collisionPosition.marginLeft+u+d+f-a,(s>0||p>h(s))&&(t.left+=u+d+f))},top:function(t,e){var i,s,o=e.within,n=o.offset.top+o.scrollTop,r=o.height,a=o.isWindow?o.scrollTop:o.offset.top,l=t.top-e.collisionPosition.marginTop,c=l-a,p=l+e.collisionHeight-r-a,u="top"===e.my[1],d=u?-e.elemHeight:"bottom"===e.my[1]?e.elemHeight:0,f="top"===e.at[1]?e.targetHeight:"bottom"===e.at[1]?-e.targetHeight:0,g=-2*e.offset[1]
        0>c?(s=t.top+d+f+g+e.collisionHeight-r-n,(0>s||h(c)>s)&&(t.top+=d+f+g)):p>0&&(i=t.top-e.collisionPosition.marginTop+d+f+g-a,(i>0||p>h(i))&&(t.top+=d+f+g))}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position,t.extend(t.expr[":"],{data:t.expr.createPseudo?t.expr.createPseudo(function(e){return function(i){return!!t.data(i,e)}}):function(e,i,s){return!!t.data(e,s[3])}}),t.fn.extend({disableSelection:function(){var t="onselectstart"in document.createElement("div")?"selectstart":"mousedown"
    return function(){return this.on(t+".ui-disableSelection",function(t){t.preventDefault()})}}(),enableSelection:function(){return this.off(".ui-disableSelection")}}),t.ui.focusable=function(i,s){var o,n,r,h,a,l=i.nodeName.toLowerCase()
    return"area"===l?(o=i.parentNode,n=o.name,!(!i.href||!n||"map"!==o.nodeName.toLowerCase())&&(r=t("img[usemap='#"+n+"']"),r.length>0&&r.is(":visible"))):(/^(input|select|textarea|button|object)$/.test(l)?(h=!i.disabled,h&&(a=t(i).closest("fieldset")[0],a&&(h=!a.disabled))):h="a"===l?i.href||s:s,h&&t(i).is(":visible")&&e(t(i)))},t.extend(t.expr[":"],{focusable:function(e){return t.ui.focusable(e,null!=t.attr(e,"tabindex"))}}),t.ui.focusable,t.fn.form=function(){return"string"==typeof this[0].form?this.closest("form"):t(this[0].form)},t.ui.formResetMixin={_formResetHandler:function(){var e=t(this)
    setTimeout(function(){var i=e.data("ui-form-reset-instances")
        t.each(i,function(){this.refresh()})})},_bindFormResetHandler:function(){if(this.form=this.element.form(),this.form.length){var t=this.form.data("ui-form-reset-instances")||[]
    t.length||this.form.on("reset.ui-form-reset",this._formResetHandler),t.push(this),this.form.data("ui-form-reset-instances",t)}},_unbindFormResetHandler:function(){if(this.form.length){var e=this.form.data("ui-form-reset-instances")
    e.splice(t.inArray(this,e),1),e.length?this.form.data("ui-form-reset-instances",e):this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")}}},"1.7"===t.fn.jquery.substring(0,3)&&(t.each(["Width","Height"],function(e,i){function s(e,i,s,n){return t.each(o,function(){i-=parseFloat(t.css(e,"padding"+this))||0,s&&(i-=parseFloat(t.css(e,"border"+this+"Width"))||0),n&&(i-=parseFloat(t.css(e,"margin"+this))||0)}),i}var o="Width"===i?["Left","Right"]:["Top","Bottom"],n=i.toLowerCase(),r={innerWidth:t.fn.innerWidth,innerHeight:t.fn.innerHeight,outerWidth:t.fn.outerWidth,outerHeight:t.fn.outerHeight}
    t.fn["inner"+i]=function(e){return void 0===e?r["inner"+i].call(this):this.each(function(){t(this).css(n,s(this,e)+"px")})},t.fn["outer"+i]=function(e,o){return"number"!=typeof e?r["outer"+i].call(this,e):this.each(function(){t(this).css(n,s(this,e,!0,o)+"px")})}}),t.fn.addBack=function(t){return this.add(null==t?this.prevObject:this.prevObject.filter(t))}),t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.escapeSelector=function(){var t=/([!"#$%&'()*+,.\/:
<=>?@[\]^`{|}~])/g
    return function(e){return e.replace(t,"\\$1")}}(),t.fn.labels=function(){var e,i,s,o,n
    return this[0].labels&&this[0].labels.length?this.pushStack(this[0].labels):(o=this.eq(0).parents("label"),s=this.attr("id"),s&&(e=this.eq(0).parents().last(),n=e.add(e.length?e.siblings():this.siblings()),i="label[for='"+t.ui.escapeSelector(s)+"']",o=o.add(n.find(i).addBack(i))),this.pushStack(o))},t.fn.scrollParent=function(e){var i=this.css("position"),s="absolute"===i,o=e?/(auto|scroll|hidden)/:/(auto|scroll)/,n=this.parents().filter(function(){var e=t(this)
    return(!s||"static"!==e.css("position"))&&o.test(e.css("overflow")+e.css("overflow-y")+e.css("overflow-x"))}).eq(0)
    return"fixed"!==i&&n.length?n:t(this[0].ownerDocument||document)},t.extend(t.expr[":"],{tabbable:function(e){var i=t.attr(e,"tabindex"),s=null!=i
    return(!s||i>=0)&&t.ui.focusable(e,s)}}),t.fn.extend({uniqueId:function(){var t=0
    return function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++t)})}}(),removeUniqueId:function(){return this.each(function(){/^ui-id-\d+$/.test(this.id)&&t(this).removeAttr("id")})}}),t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase())
var o=!1
t(document).on("mouseup",function(){o=!1}),t.widget("ui.mouse",{version:"1.12.0",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this
    this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!o){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e
    var i=this,s=1===e.which,n=!("string"!=typeof this.options.cancel||!e.target.nodeName)&&t(e.target).closest(this.options.cancel).length
    return!(s&&!n&&this._mouseCapture(e))||(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),o=!0,!0))}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e)
    if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0
    else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,o=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.ui.plugin={add:function(e,i,s){var o,n=t.ui[e].prototype
    for(o in s)n.plugins[o]=n.plugins[o]||[],n.plugins[o].push([i,s[o]])},call:function(t,e,i,s){var o,n=t.plugins[e]
    if(n&&(s||t.element[0].parentNode&&11!==t.element[0].parentNode.nodeType))for(o=0
        n.length>o
    o++)t.options[n[o][0]]&&n[o][1].apply(t.element,i)}},t.ui.safeActiveElement=function(t){var e
    try{e=t.activeElement}catch(i){e=t.body}return e||(e=t.body),e.nodeName||(e=t.body),e},t.ui.safeBlur=function(e){e&&"body"!==e.nodeName.toLowerCase()&&t(e).trigger("blur")},t.widget("ui.draggable",t.ui.mouse,{version:"1.12.0",widgetEventPrefix:"drag",options:{addClasses:!0,appendTo:"parent",axis:!1,connectToSortable:!1,containment:!1,cursor:"auto",cursorAt:!1,grid:!1,handle:!1,helper:"original",iframeFix:!1,opacity:!1,refreshPositions:!1,revert:!1,revertDuration:500,scope:"default",scroll:!0,scrollSensitivity:20,scrollSpeed:20,snap:!1,snapMode:"both",snapTolerance:20,stack:!1,zIndex:!1,drag:null,start:null,stop:null},_create:function(){"original"===this.options.helper&&this._setPositionRelative(),this.options.addClasses&&this._addClass("ui-draggable"),this._setHandleClassName(),this._mouseInit()},_setOption:function(t,e){this._super(t,e),"handle"===t&&(this._removeHandleClassName(),this._setHandleClassName())},_destroy:function(){return(this.helper||this.element).is(".ui-draggable-dragging")?void(this.destroyOnClear=!0):(this._removeHandleClassName(),void this._mouseDestroy())},_mouseCapture:function(e){var i=this.options
    return this._blurActiveElement(e),!(this.helper||i.disabled||t(e.target).closest(".ui-resizable-handle").length>0)&&(this.handle=this._getHandle(e),!!this.handle&&(this._blockFrames(i.iframeFix===!0?"iframe":i.iframeFix),!0))},_blockFrames:function(e){this.iframeBlocks=this.document.find(e).map(function(){var e=t(this)
    return t("<div>").css("position","absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_blurActiveElement:function(e){var i=t.ui.safeActiveElement(this.document[0]),s=t(e.target)
    this._getHandle(e)&&s.closest(i).length||t.ui.safeBlur(i)},_mouseStart:function(e){var i=this.options
    return this.helper=this._createHelper(e),this._addClass(this.helper,"ui-draggable-dragging"),this._cacheHelperProportions(),t.ui.ddmanager&&(t.ui.ddmanager.current=this),this._cacheMargins(),this.cssPosition=this.helper.css("position"),this.scrollParent=this.helper.scrollParent(!0),this.offsetParent=this.helper.offsetParent(),this.hasFixedAncestor=this.helper.parents().filter(function(){return"fixed"===t(this).css("position")}).length>0,this.positionAbs=this.element.offset(),this._refreshOffsets(e),this.originalPosition=this.position=this._generatePosition(e,!1),this.originalPageX=e.pageX,this.originalPageY=e.pageY,i.cursorAt&&this._adjustOffsetFromHelper(i.cursorAt),this._setContainment(),this._trigger("start",e)===!1?(this._clear(),!1):(this._cacheHelperProportions(),t.ui.ddmanager&&!i.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this._mouseDrag(e,!0),t.ui.ddmanager&&t.ui.ddmanager.dragStart(this,e),!0)},_refreshOffsets:function(t){this.offset={top:this.positionAbs.top-this.margins.top,left:this.positionAbs.left-this.margins.left,scroll:!1,parent:this._getParentOffset(),relative:this._getRelativeOffset()},this.offset.click={left:t.pageX-this.offset.left,top:t.pageY-this.offset.top}},_mouseDrag:function(e,i){if(this.hasFixedAncestor&&(this.offset.parent=this._getParentOffset()),this.position=this._generatePosition(e,!0),this.positionAbs=this._convertPositionTo("absolute"),!i){var s=this._uiHash()
    if(this._trigger("drag",e,s)===!1)return this._mouseUp(new t.Event("mouseup",e)),!1
    this.position=s.position}return this.helper[0].style.left=this.position.left+"px",this.helper[0].style.top=this.position.top+"px",t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),!1},_mouseStop:function(e){var i=this,s=!1
    return t.ui.ddmanager&&!this.options.dropBehaviour&&(s=t.ui.ddmanager.drop(this,e)),this.dropped&&(s=this.dropped,this.dropped=!1),"invalid"===this.options.revert&&!s||"valid"===this.options.revert&&s||this.options.revert===!0||t.isFunction(this.options.revert)&&this.options.revert.call(this.element,s)?t(this.helper).animate(this.originalPosition,parseInt(this.options.revertDuration,10),function(){i._trigger("stop",e)!==!1&&i._clear()}):this._trigger("stop",e)!==!1&&this._clear(),!1},_mouseUp:function(e){return this._unblockFrames(),t.ui.ddmanager&&t.ui.ddmanager.dragStop(this,e),this.handleElement.is(e.target)&&this.element.trigger("focus"),t.ui.mouse.prototype._mouseUp.call(this,e)},cancel:function(){return this.helper.is(".ui-draggable-dragging")?this._mouseUp(new t.Event("mouseup",{target:this.element[0]})):this._clear(),this},_getHandle:function(e){return!this.options.handle||!!t(e.target).closest(this.element.find(this.options.handle)).length},_setHandleClassName:function(){this.handleElement=this.options.handle?this.element.find(this.options.handle):this.element,this._addClass(this.handleElement,"ui-draggable-handle")},_removeHandleClassName:function(){this._removeClass(this.handleElement,"ui-draggable-handle")},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper),o=s?t(i.helper.apply(this.element[0],[e])):"clone"===i.helper?this.element.clone().removeAttr("id"):this.element
    return o.parents("body").length||o.appendTo("parent"===i.appendTo?this.element[0].parentNode:i.appendTo),s&&o[0]===this.element[0]&&this._setPositionRelative(),o[0]===this.element[0]||/(fixed|absolute)/.test(o.css("position"))||o.css("position","absolute"),o},_setPositionRelative:function(){/^(?:r|a|f)/.test(this.element.css("position"))||(this.element[0].style.position="relative")},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_isRootNode:function(t){return/(html|body)/i.test(t.tagName)||t===this.document[0]},_getParentOffset:function(){var e=this.offsetParent.offset(),i=this.document[0]
    return"absolute"===this.cssPosition&&this.scrollParent[0]!==i&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),this._isRootNode(this.offsetParent[0])&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"!==this.cssPosition)return{top:0,left:0}
    var t=this.element.position(),e=this._isRootNode(this.scrollParent[0])
    return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+(e?0:this.scrollParent.scrollTop()),left:t.left-(parseInt(this.helper.css("left"),10)||0)+(e?0:this.scrollParent.scrollLeft())}},_cacheMargins:function(){this.margins={left:parseInt(this.element.css("marginLeft"),10)||0,top:parseInt(this.element.css("marginTop"),10)||0,right:parseInt(this.element.css("marginRight"),10)||0,bottom:parseInt(this.element.css("marginBottom"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,o=this.options,n=this.document[0]
    return this.relativeContainer=null,o.containment?"window"===o.containment?void(this.containment=[t(window).scrollLeft()-this.offset.relative.left-this.offset.parent.left,t(window).scrollTop()-this.offset.relative.top-this.offset.parent.top,t(window).scrollLeft()+t(window).width()-this.helperProportions.width-this.margins.left,t(window).scrollTop()+(t(window).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):"document"===o.containment?void(this.containment=[0,0,t(n).width()-this.helperProportions.width-this.margins.left,(t(n).height()||n.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]):o.containment.constructor===Array?void(this.containment=o.containment):("parent"===o.containment&&(o.containment=this.helper[0].parentNode),i=t(o.containment),s=i[0],void(s&&(e=/(scroll|auto)/.test(i.css("overflow")),this.containment=[(parseInt(i.css("borderLeftWidth"),10)||0)+(parseInt(i.css("paddingLeft"),10)||0),(parseInt(i.css("borderTopWidth"),10)||0)+(parseInt(i.css("paddingTop"),10)||0),(e?Math.max(s.scrollWidth,s.offsetWidth):s.offsetWidth)-(parseInt(i.css("borderRightWidth"),10)||0)-(parseInt(i.css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left-this.margins.right,(e?Math.max(s.scrollHeight,s.offsetHeight):s.offsetHeight)-(parseInt(i.css("borderBottomWidth"),10)||0)-(parseInt(i.css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top-this.margins.bottom],this.relativeContainer=i))):void(this.containment=null)},_convertPositionTo:function(t,e){e||(e=this.position)
    var i="absolute"===t?1:-1,s=this._isRootNode(this.scrollParent[0])
    return{top:e.top+this.offset.relative.top*i+this.offset.parent.top*i-("fixed"===this.cssPosition?-this.offset.scroll.top:s?0:this.offset.scroll.top)*i,left:e.left+this.offset.relative.left*i+this.offset.parent.left*i-("fixed"===this.cssPosition?-this.offset.scroll.left:s?0:this.offset.scroll.left)*i}},_generatePosition:function(t,e){var i,s,o,n,r=this.options,h=this._isRootNode(this.scrollParent[0]),a=t.pageX,l=t.pageY
    return h&&this.offset.scroll||(this.offset.scroll={top:this.scrollParent.scrollTop(),left:this.scrollParent.scrollLeft()}),e&&(this.containment&&(this.relativeContainer?(s=this.relativeContainer.offset(),i=[this.containment[0]+s.left,this.containment[1]+s.top,this.containment[2]+s.left,this.containment[3]+s.top]):i=this.containment,t.pageX-this.offset.click.left<i[0]&&(a=i[0]+this.offset.click.left),t.pageY-this.offset.click.top<i[1]&&(l=i[1]+this.offset.click.top),t.pageX-this.offset.click.left>i[2]&&(a=i[2]+this.offset.click.left),t.pageY-this.offset.click.top>i[3]&&(l=i[3]+this.offset.click.top)),r.grid&&(o=r.grid[1]?this.originalPageY+Math.round((l-this.originalPageY)/r.grid[1])*r.grid[1]:this.originalPageY,l=i?o-this.offset.click.top>=i[1]||o-this.offset.click.top>i[3]?o:o-this.offset.click.top>=i[1]?o-r.grid[1]:o+r.grid[1]:o,n=r.grid[0]?this.originalPageX+Math.round((a-this.originalPageX)/r.grid[0])*r.grid[0]:this.originalPageX,a=i?n-this.offset.click.left>=i[0]||n-this.offset.click.left>i[2]?n:n-this.offset.click.left>=i[0]?n-r.grid[0]:n+r.grid[0]:n),"y"===r.axis&&(a=this.originalPageX),"x"===r.axis&&(l=this.originalPageY)),{top:l-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.offset.scroll.top:h?0:this.offset.scroll.top),left:a-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.offset.scroll.left:h?0:this.offset.scroll.left)
    }},_clear:function(){this._removeClass(this.helper,"ui-draggable-dragging"),this.helper[0]===this.element[0]||this.cancelHelperRemoval||this.helper.remove(),this.helper=null,this.cancelHelperRemoval=!1,this.destroyOnClear&&this.destroy()},_trigger:function(e,i,s){return s=s||this._uiHash(),t.ui.plugin.call(this,e,[i,s,this],!0),/^(drag|start|stop)/.test(e)&&(this.positionAbs=this._convertPositionTo("absolute"),s.offset=this.positionAbs),t.Widget.prototype._trigger.call(this,e,i,s)},plugins:{},_uiHash:function(){return{helper:this.helper,position:this.position,originalPosition:this.originalPosition,offset:this.positionAbs}}}),t.ui.plugin.add("draggable","connectToSortable",{start:function(e,i,s){var o=t.extend({},i,{item:s.element})
    s.sortables=[],t(s.options.connectToSortable).each(function(){var i=t(this).sortable("instance")
        i&&!i.options.disabled&&(s.sortables.push(i),i.refreshPositions(),i._trigger("activate",e,o))})},stop:function(e,i,s){var o=t.extend({},i,{item:s.element})
    s.cancelHelperRemoval=!1,t.each(s.sortables,function(){var t=this
        t.isOver?(t.isOver=0,s.cancelHelperRemoval=!0,t.cancelHelperRemoval=!1,t._storedCSS={position:t.placeholder.css("position"),top:t.placeholder.css("top"),left:t.placeholder.css("left")},t._mouseStop(e),t.options.helper=t.options._helper):(t.cancelHelperRemoval=!0,t._trigger("deactivate",e,o))})},drag:function(e,i,s){t.each(s.sortables,function(){var o=!1,n=this
    n.positionAbs=s.positionAbs,n.helperProportions=s.helperProportions,n.offset.click=s.offset.click,n._intersectsWith(n.containerCache)&&(o=!0,t.each(s.sortables,function(){return this.positionAbs=s.positionAbs,this.helperProportions=s.helperProportions,this.offset.click=s.offset.click,this!==n&&this._intersectsWith(this.containerCache)&&t.contains(n.element[0],this.element[0])&&(o=!1),o})),o?(n.isOver||(n.isOver=1,s._parent=i.helper.parent(),n.currentItem=i.helper.appendTo(n.element).data("ui-sortable-item",!0),n.options._helper=n.options.helper,n.options.helper=function(){return i.helper[0]},e.target=n.currentItem[0],n._mouseCapture(e,!0),n._mouseStart(e,!0,!0),n.offset.click.top=s.offset.click.top,n.offset.click.left=s.offset.click.left,n.offset.parent.left-=s.offset.parent.left-n.offset.parent.left,n.offset.parent.top-=s.offset.parent.top-n.offset.parent.top,s._trigger("toSortable",e),s.dropped=n.element,t.each(s.sortables,function(){this.refreshPositions()}),s.currentItem=s.element,n.fromOutside=s),n.currentItem&&(n._mouseDrag(e),i.position=n.position)):n.isOver&&(n.isOver=0,n.cancelHelperRemoval=!0,n.options._revert=n.options.revert,n.options.revert=!1,n._trigger("out",e,n._uiHash(n)),n._mouseStop(e,!0),n.options.revert=n.options._revert,n.options.helper=n.options._helper,n.placeholder&&n.placeholder.remove(),i.helper.appendTo(s._parent),s._refreshOffsets(e),i.position=s._generatePosition(e,!0),s._trigger("fromSortable",e),s.dropped=!1,t.each(s.sortables,function(){this.refreshPositions()}))})}}),t.ui.plugin.add("draggable","cursor",{start:function(e,i,s){var o=t("body"),n=s.options
    o.css("cursor")&&(n._cursor=o.css("cursor")),o.css("cursor",n.cursor)},stop:function(e,i,s){var o=s.options
    o._cursor&&t("body").css("cursor",o._cursor)}}),t.ui.plugin.add("draggable","opacity",{start:function(e,i,s){var o=t(i.helper),n=s.options
    o.css("opacity")&&(n._opacity=o.css("opacity")),o.css("opacity",n.opacity)},stop:function(e,i,s){var o=s.options
    o._opacity&&t(i.helper).css("opacity",o._opacity)}}),t.ui.plugin.add("draggable","scroll",{start:function(t,e,i){i.scrollParentNotHidden||(i.scrollParentNotHidden=i.helper.scrollParent(!1)),i.scrollParentNotHidden[0]!==i.document[0]&&"HTML"!==i.scrollParentNotHidden[0].tagName&&(i.overflowOffset=i.scrollParentNotHidden.offset())},drag:function(e,i,s){var o=s.options,n=!1,r=s.scrollParentNotHidden[0],h=s.document[0]
    r!==h&&"HTML"!==r.tagName?(o.axis&&"x"===o.axis||(s.overflowOffset.top+r.offsetHeight-e.pageY<o.scrollSensitivity?r.scrollTop=n=r.scrollTop+o.scrollSpeed:e.pageY-s.overflowOffset.top<o.scrollSensitivity&&(r.scrollTop=n=r.scrollTop-o.scrollSpeed)),o.axis&&"y"===o.axis||(s.overflowOffset.left+r.offsetWidth-e.pageX<o.scrollSensitivity?r.scrollLeft=n=r.scrollLeft+o.scrollSpeed:e.pageX-s.overflowOffset.left<o.scrollSensitivity&&(r.scrollLeft=n=r.scrollLeft-o.scrollSpeed))):(o.axis&&"x"===o.axis||(e.pageY-t(h).scrollTop()<o.scrollSensitivity?n=t(h).scrollTop(t(h).scrollTop()-o.scrollSpeed):t(window).height()-(e.pageY-t(h).scrollTop())<o.scrollSensitivity&&(n=t(h).scrollTop(t(h).scrollTop()+o.scrollSpeed))),o.axis&&"y"===o.axis||(e.pageX-t(h).scrollLeft()<o.scrollSensitivity?n=t(h).scrollLeft(t(h).scrollLeft()-o.scrollSpeed):t(window).width()-(e.pageX-t(h).scrollLeft())<o.scrollSensitivity&&(n=t(h).scrollLeft(t(h).scrollLeft()+o.scrollSpeed)))),n!==!1&&t.ui.ddmanager&&!o.dropBehaviour&&t.ui.ddmanager.prepareOffsets(s,e)}}),t.ui.plugin.add("draggable","snap",{start:function(e,i,s){var o=s.options
    s.snapElements=[],t(o.snap.constructor!==String?o.snap.items||":data(ui-draggable)":o.snap).each(function(){var e=t(this),i=e.offset()
        this!==s.element[0]&&s.snapElements.push({item:this,width:e.outerWidth(),height:e.outerHeight(),top:i.top,left:i.left})})},drag:function(e,i,s){var o,n,r,h,a,l,c,p,u,d,f=s.options,g=f.snapTolerance,m=i.offset.left,_=m+s.helperProportions.width,v=i.offset.top,b=v+s.helperProportions.height
    for(u=s.snapElements.length-1
        u>=0
    u--)a=s.snapElements[u].left-s.margins.left,l=a+s.snapElements[u].width,c=s.snapElements[u].top-s.margins.top,p=c+s.snapElements[u].height,a-g>_||m>l+g||c-g>b||v>p+g||!t.contains(s.snapElements[u].item.ownerDocument,s.snapElements[u].item)?(s.snapElements[u].snapping&&s.options.snap.release&&s.options.snap.release.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[u].item})),s.snapElements[u].snapping=!1):("inner"!==f.snapMode&&(o=g>=Math.abs(c-b),n=g>=Math.abs(p-v),r=g>=Math.abs(a-_),h=g>=Math.abs(l-m),o&&(i.position.top=s._convertPositionTo("relative",{top:c-s.helperProportions.height,left:0}).top),n&&(i.position.top=s._convertPositionTo("relative",{top:p,left:0}).top),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:a-s.helperProportions.width}).left),h&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l}).left)),d=o||n||r||h,"outer"!==f.snapMode&&(o=g>=Math.abs(c-v),n=g>=Math.abs(p-b),r=g>=Math.abs(a-m),h=g>=Math.abs(l-_),o&&(i.position.top=s._convertPositionTo("relative",{top:c,left:0}).top),n&&(i.position.top=s._convertPositionTo("relative",{top:p-s.helperProportions.height,left:0}).top),r&&(i.position.left=s._convertPositionTo("relative",{top:0,left:a}).left),h&&(i.position.left=s._convertPositionTo("relative",{top:0,left:l-s.helperProportions.width}).left)),!s.snapElements[u].snapping&&(o||n||r||h||d)&&s.options.snap.snap&&s.options.snap.snap.call(s.element,e,t.extend(s._uiHash(),{snapItem:s.snapElements[u].item})),s.snapElements[u].snapping=o||n||r||h||d)}}),t.ui.plugin.add("draggable","stack",{start:function(e,i,s){var o,n=s.options,r=t.makeArray(t(n.stack)).sort(function(e,i){return(parseInt(t(e).css("zIndex"),10)||0)-(parseInt(t(i).css("zIndex"),10)||0)})
    r.length&&(o=parseInt(t(r[0]).css("zIndex"),10)||0,t(r).each(function(e){t(this).css("zIndex",o+e)}),this.css("zIndex",o+r.length))}}),t.ui.plugin.add("draggable","zIndex",{start:function(e,i,s){var o=t(i.helper),n=s.options
    o.css("zIndex")&&(n._zIndex=o.css("zIndex")),o.css("zIndex",n.zIndex)},stop:function(e,i,s){var o=s.options
    o._zIndex&&t(i.helper).css("zIndex",o._zIndex)}}),t.ui.draggable,t.widget("ui.resizable",t.ui.mouse,{version:"1.12.0",widgetEventPrefix:"resize",options:{alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",aspectRatio:!1,autoHide:!1,classes:{"ui-resizable-se":"ui-icon ui-icon-gripsmall-diagonal-se"},containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,zIndex:90,resize:null,start:null,stop:null},_num:function(t){return parseFloat(t)||0},_isNumber:function(t){return!isNaN(parseFloat(t))},_hasScroll:function(e,i){if("hidden"===t(e).css("overflow"))return!1
    var s=i&&"left"===i?"scrollLeft":"scrollTop",o=!1
    return e[s]>0||(e[s]=1,o=e[s]>0,e[s]=0,o)},_create:function(){var e,i=this.options,s=this
    this._addClass("ui-resizable"),t.extend(this,{_aspectRatio:!!i.aspectRatio,aspectRatio:i.aspectRatio,originalElement:this.element,_proportionallyResizeElements:[],_helper:i.helper||i.ghost||i.animate?i.helper||"ui-resizable-helper":null}),this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i)&&(this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden
    '></div>").css({position:this.element.css("position"),width:this.element.outerWidth(),height:this.element.outerHeight(),top:this.element.css("top"),left:this.element.css("left")})),this.element=this.element.parent().data("ui-resizable",this.element.resizable("instance")),this.elementIsWrapper=!0,e={marginTop:this.originalElement.css("marginTop"),marginRight:this.originalElement.css("marginRight"),marginBottom:this.originalElement.css("marginBottom"),marginLeft:this.originalElement.css("marginLeft")},this.element.css(e),this.originalElement.css("margin",0),this.originalResizeStyle=this.originalElement.css("resize"),this.originalElement.css("resize","none"),this._proportionallyResizeElements.push(this.originalElement.css({position:"static",zoom:1,display:"block"})),this.originalElement.css(e),this._proportionallyResize()),this._setupHandles(),i.autoHide&&t(this.element).on("mouseenter",function(){i.disabled||(s._removeClass("ui-resizable-autohide"),s._handles.show())}).on("mouseleave",function(){i.disabled||s.resizing||(s._addClass("ui-resizable-autohide"),s._handles.hide())}),this._mouseInit()},_destroy:function(){this._mouseDestroy()
    var e,i=function(e){t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()}
    return this.elementIsWrapper&&(i(this.element),e=this.element,this.originalElement.css({position:e.css("position"),width:e.outerWidth(),height:e.outerHeight(),top:e.css("top"),left:e.css("left")}).insertAfter(e),e.remove()),this.originalElement.css("resize",this.originalResizeStyle),i(this.originalElement),this},_setOption:function(t,e){switch(this._super(t,e),t){case"handles":this._removeHandles(),this._setupHandles()}},_setupHandles:function(){var e,i,s,o,n,r=this.options,h=this
    if(this.handles=r.handles||(t(".ui-resizable-handle",this.element).length?{n:".ui-resizable-n",e:".ui-resizable-e",s:".ui-resizable-s",w:".ui-resizable-w",se:".ui-resizable-se",sw:".ui-resizable-sw",ne:".ui-resizable-ne",nw:".ui-resizable-nw"}:"e,s,se"),this._handles=t(),this.handles.constructor===String)for("all"===this.handles&&(this.handles="n,e,s,w,se,sw,ne,nw"),s=this.handles.split(","),this.handles={},i=0
        s.length>i
    i++)e=t.trim(s[i]),o="ui-resizable-"+e,n=t("<div>"),this._addClass(n,"ui-resizable-handle "+o),n.css({zIndex:r.zIndex}),this.handles[e]=".ui-resizable-"+e,this.element.append(n)
    this._renderAxis=function(e){var i,s,o,n
        e=e||this.element
        for(i in this.handles)this.handles[i].constructor===String?this.handles[i]=this.element.children(this.handles[i]).first().show():(this.handles[i].jquery||this.handles[i].nodeType)&&(this.handles[i]=t(this.handles[i]),this._on(this.handles[i],{mousedown:h._mouseDown})),this.elementIsWrapper&&this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i)&&(s=t(this.handles[i],this.element),n=/sw|ne|nw|se|n|s/.test(i)?s.outerHeight():s.outerWidth(),o=["padding",/ne|nw|n/.test(i)?"Top":/se|sw|s/.test(i)?"Bottom":/^e$/.test(i)?"Right":"Left"].join(""),e.css(o,n),this._proportionallyResize()),this._handles=this._handles.add(this.handles[i])},this._renderAxis(this.element),this._handles=this._handles.add(this.element.find(".ui-resizable-handle")),this._handles.disableSelection(),this._handles.on("mouseover",function(){h.resizing||(this.className&&(n=this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)),h.axis=n&&n[1]?n[1]:"se")}),r.autoHide&&(this._handles.hide(),this._addClass("ui-resizable-autohide"))},_removeHandles:function(){this._handles.remove()},_mouseCapture:function(e){var i,s,o=!1
    for(i in this.handles)s=t(this.handles[i])[0],(s===e.target||t.contains(s,e.target))&&(o=!0)
    return!this.options.disabled&&o},_mouseStart:function(e){var i,s,o,n=this.options,r=this.element
    return this.resizing=!0,this._renderProxy(),i=this._num(this.helper.css("left")),s=this._num(this.helper.css("top")),n.containment&&(i+=t(n.containment).scrollLeft()||0,s+=t(n.containment).scrollTop()||0),this.offset=this.helper.offset(),this.position={left:i,top:s},this.size=this._helper?{width:this.helper.width(),height:this.helper.height()}:{width:r.width(),height:r.height()},this.originalSize=this._helper?{width:r.outerWidth(),height:r.outerHeight()}:{width:r.width(),height:r.height()},this.sizeDiff={width:r.outerWidth()-r.width(),height:r.outerHeight()-r.height()},this.originalPosition={left:i,top:s},this.originalMousePosition={left:e.pageX,top:e.pageY},this.aspectRatio="number"==typeof n.aspectRatio?n.aspectRatio:this.originalSize.width/this.originalSize.height||1,o=t(".ui-resizable-"+this.axis).css("cursor"),t("body").css("cursor","auto"===o?this.axis+"-resize":o),this._addClass("ui-resizable-resizing"),this._propagate("start",e),!0},_mouseDrag:function(e){var i,s,o=this.originalMousePosition,n=this.axis,r=e.pageX-o.left||0,h=e.pageY-o.top||0,a=this._change[n]
    return this._updatePrevProperties(),!!a&&(i=a.apply(this,[e,r,h]),this._updateVirtualBoundaries(e.shiftKey),(this._aspectRatio||e.shiftKey)&&(i=this._updateRatio(i,e)),i=this._respectSize(i,e),this._updateCache(i),this._propagate("resize",e),s=this._applyChanges(),!this._helper&&this._proportionallyResizeElements.length&&this._proportionallyResize(),t.isEmptyObject(s)||(this._updatePrevProperties(),this._trigger("resize",e,this.ui()),this._applyChanges()),!1)},_mouseStop:function(e){this.resizing=!1
    var i,s,o,n,r,h,a,l=this.options,c=this
    return this._helper&&(i=this._proportionallyResizeElements,s=i.length&&/textarea/i.test(i[0].nodeName),o=s&&this._hasScroll(i[0],"left")?0:c.sizeDiff.height,n=s?0:c.sizeDiff.width,r={width:c.helper.width()-n,height:c.helper.height()-o},h=parseFloat(c.element.css("left"))+(c.position.left-c.originalPosition.left)||null,a=parseFloat(c.element.css("top"))+(c.position.top-c.originalPosition.top)||null,l.animate||this.element.css(t.extend(r,{top:a,left:h})),c.helper.height(c.size.height),c.helper.width(c.size.width),this._helper&&!l.animate&&this._proportionallyResize()),t("body").css("cursor","auto"),this._removeClass("ui-resizable-resizing"),this._propagate("stop",e),this._helper&&this.helper.remove(),!1},_updatePrevProperties:function(){this.prevPosition={top:this.position.top,left:this.position.left},this.prevSize={width:this.size.width,height:this.size.height}},_applyChanges:function(){var t={}
    return this.position.top!==this.prevPosition.top&&(t.top=this.position.top+"px"),this.position.left!==this.prevPosition.left&&(t.left=this.position.left+"px"),this.size.width!==this.prevSize.width&&(t.width=this.size.width+"px"),this.size.height!==this.prevSize.height&&(t.height=this.size.height+"px"),this.helper.css(t),t},_updateVirtualBoundaries:function(t){var e,i,s,o,n,r=this.options
    n={minWidth:this._isNumber(r.minWidth)?r.minWidth:0,maxWidth:this._isNumber(r.maxWidth)?r.maxWidth:1/0,minHeight:this._isNumber(r.minHeight)?r.minHeight:0,maxHeight:this._isNumber(r.maxHeight)?r.maxHeight:1/0},(this._aspectRatio||t)&&(e=n.minHeight*this.aspectRatio,s=n.minWidth/this.aspectRatio,i=n.maxHeight*this.aspectRatio,o=n.maxWidth/this.aspectRatio,e>n.minWidth&&(n.minWidth=e),s>n.minHeight&&(n.minHeight=s),n.maxWidth>i&&(n.maxWidth=i),n.maxHeight>o&&(n.maxHeight=o)),this._vBoundaries=n},_updateCache:function(t){this.offset=this.helper.offset(),this._isNumber(t.left)&&(this.position.left=t.left),this._isNumber(t.top)&&(this.position.top=t.top),this._isNumber(t.height)&&(this.size.height=t.height),this._isNumber(t.width)&&(this.size.width=t.width)},_updateRatio:function(t){var e=this.position,i=this.size,s=this.axis
    return this._isNumber(t.height)?t.width=t.height*this.aspectRatio:this._isNumber(t.width)&&(t.height=t.width/this.aspectRatio),"sw"===s&&(t.left=e.left+(i.width-t.width),t.top=null),"nw"===s&&(t.top=e.top+(i.height-t.height),t.left=e.left+(i.width-t.width)),t},_respectSize:function(t){var e=this._vBoundaries,i=this.axis,s=this._isNumber(t.width)&&e.maxWidth&&e.maxWidth<t.width,o=this._isNumber(t.height)&&e.maxHeight&&e.maxHeight<t.height,n=this._isNumber(t.width)&&e.minWidth&&e.minWidth>t.width,r=this._isNumber(t.height)&&e.minHeight&&e.minHeight>t.height,h=this.originalPosition.left+this.originalSize.width,a=this.originalPosition.top+this.originalSize.height,l=/sw|nw|w/.test(i),c=/nw|ne|n/.test(i)
    return n&&(t.width=e.minWidth),r&&(t.height=e.minHeight),s&&(t.width=e.maxWidth),o&&(t.height=e.maxHeight),n&&l&&(t.left=h-e.minWidth),s&&l&&(t.left=h-e.maxWidth),r&&c&&(t.top=a-e.minHeight),o&&c&&(t.top=a-e.maxHeight),t.width||t.height||t.left||!t.top?t.width||t.height||t.top||!t.left||(t.left=null):t.top=null,t},_getPaddingPlusBorderDimensions:function(t){for(var e=0,i=[],s=[t.css("borderTopWidth"),t.css("borderRightWidth"),t.css("borderBottomWidth"),t.css("borderLeftWidth")],o=[t.css("paddingTop"),t.css("paddingRight"),t.css("paddingBottom"),t.css("paddingLeft")]
    4>e
    e++)i[e]=parseFloat(s[e])||0,i[e]+=parseFloat(o[e])||0
    return{height:i[0]+i[2],width:i[1]+i[3]}},_proportionallyResize:function(){if(this._proportionallyResizeElements.length)for(var t,e=0,i=this.helper||this.element
    this._proportionallyResizeElements.length>e
    e++)t=this._proportionallyResizeElements[e],this.outerDimensions||(this.outerDimensions=this._getPaddingPlusBorderDimensions(t)),t.css({height:i.height()-this.outerDimensions.height||0,width:i.width()-this.outerDimensions.width||0})},_renderProxy:function(){var e=this.element,i=this.options
    this.elementOffset=e.offset(),this._helper?(this.helper=this.helper||t("<div style='overflow:hidden
        '></div>"),this._addClass(this.helper,this._helper),this.helper.css({width:this.element.outerWidth(),height:this.element.outerHeight(),position:"absolute",left:this.elementOffset.left+"px",top:this.elementOffset.top+"px",zIndex:++i.zIndex}),this.helper.appendTo("body").disableSelection()):this.helper=this.element},_change:{e:function(t,e){return{width:this.originalSize.width+e}},w:function(t,e){var i=this.originalSize,s=this.originalPosition
    return{left:s.left+e,width:i.width-e}},n:function(t,e,i){var s=this.originalSize,o=this.originalPosition
    return{top:o.top+i,height:s.height-i}},s:function(t,e,i){return{height:this.originalSize.height+i}},se:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},sw:function(e,i,s){return t.extend(this._change.s.apply(this,arguments),this._change.w.apply(this,[e,i,s]))},ne:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.e.apply(this,[e,i,s]))},nw:function(e,i,s){return t.extend(this._change.n.apply(this,arguments),this._change.w.apply(this,[e,i,s]))}},_propagate:function(e,i){t.ui.plugin.call(this,e,[i,this.ui()]),"resize"!==e&&this._trigger(e,i,this.ui())},plugins:{},ui:function(){return{originalElement:this.originalElement,element:this.element,helper:this.helper,position:this.position,size:this.size,originalSize:this.originalSize,originalPosition:this.originalPosition}}}),t.ui.plugin.add("resizable","animate",{stop:function(e){var i=t(this).resizable("instance"),s=i.options,o=i._proportionallyResizeElements,n=o.length&&/textarea/i.test(o[0].nodeName),r=n&&i._hasScroll(o[0],"left")?0:i.sizeDiff.height,h=n?0:i.sizeDiff.width,a={width:i.size.width-h,height:i.size.height-r},l=parseFloat(i.element.css("left"))+(i.position.left-i.originalPosition.left)||null,c=parseFloat(i.element.css("top"))+(i.position.top-i.originalPosition.top)||null
    i.element.animate(t.extend(a,c&&l?{top:c,left:l}:{}),{duration:s.animateDuration,easing:s.animateEasing,step:function(){var s={width:parseFloat(i.element.css("width")),height:parseFloat(i.element.css("height")),top:parseFloat(i.element.css("top")),left:parseFloat(i.element.css("left"))}
        o&&o.length&&t(o[0]).css({width:s.width,height:s.height}),i._updateCache(s),i._propagate("resize",e)}})}}),t.ui.plugin.add("resizable","containment",{start:function(){var e,i,s,o,n,r,h,a=t(this).resizable("instance"),l=a.options,c=a.element,p=l.containment,u=p instanceof t?p.get(0):/parent/.test(p)?c.parent().get(0):p
    u&&(a.containerElement=t(u),/document/.test(p)||p===document?(a.containerOffset={left:0,top:0},a.containerPosition={left:0,top:0},a.parentData={element:t(document),left:0,top:0,width:t(document).width(),height:t(document).height()||document.body.parentNode.scrollHeight}):(e=t(u),i=[],t(["Top","Right","Left","Bottom"]).each(function(t,s){i[t]=a._num(e.css("padding"+s))}),a.containerOffset=e.offset(),a.containerPosition=e.position(),a.containerSize={height:e.innerHeight()-i[3],width:e.innerWidth()-i[1]},s=a.containerOffset,o=a.containerSize.height,n=a.containerSize.width,r=a._hasScroll(u,"left")?u.scrollWidth:n,h=a._hasScroll(u)?u.scrollHeight:o,a.parentData={element:u,left:s.left,top:s.top,width:r,height:h}))},resize:function(e){var i,s,o,n,r=t(this).resizable("instance"),h=r.options,a=r.containerOffset,l=r.position,c=r._aspectRatio||e.shiftKey,p={top:0,left:0},u=r.containerElement,d=!0
    u[0]!==document&&/static/.test(u.css("position"))&&(p=a),l.left<(r._helper?a.left:0)&&(r.size.width=r.size.width+(r._helper?r.position.left-a.left:r.position.left-p.left),c&&(r.size.height=r.size.width/r.aspectRatio,d=!1),r.position.left=h.helper?a.left:0),l.top<(r._helper?a.top:0)&&(r.size.height=r.size.height+(r._helper?r.position.top-a.top:r.position.top),c&&(r.size.width=r.size.height*r.aspectRatio,d=!1),r.position.top=r._helper?a.top:0),o=r.containerElement.get(0)===r.element.parent().get(0),n=/relative|absolute/.test(r.containerElement.css("position")),o&&n?(r.offset.left=r.parentData.left+r.position.left,r.offset.top=r.parentData.top+r.position.top):(r.offset.left=r.element.offset().left,r.offset.top=r.element.offset().top),i=Math.abs(r.sizeDiff.width+(r._helper?r.offset.left-p.left:r.offset.left-a.left)),s=Math.abs(r.sizeDiff.height+(r._helper?r.offset.top-p.top:r.offset.top-a.top)),i+r.size.width>=r.parentData.width&&(r.size.width=r.parentData.width-i,c&&(r.size.height=r.size.width/r.aspectRatio,d=!1)),s+r.size.height>=r.parentData.height&&(r.size.height=r.parentData.height-s,c&&(r.size.width=r.size.height*r.aspectRatio,d=!1)),d||(r.position.left=r.prevPosition.left,r.position.top=r.prevPosition.top,r.size.width=r.prevSize.width,r.size.height=r.prevSize.height)},stop:function(){var e=t(this).resizable("instance"),i=e.options,s=e.containerOffset,o=e.containerPosition,n=e.containerElement,r=t(e.helper),h=r.offset(),a=r.outerWidth()-e.sizeDiff.width,l=r.outerHeight()-e.sizeDiff.height
    e._helper&&!i.animate&&/relative/.test(n.css("position"))&&t(this).css({left:h.left-o.left-s.left,width:a,height:l}),e._helper&&!i.animate&&/static/.test(n.css("position"))&&t(this).css({left:h.left-o.left-s.left,width:a,height:l})}}),t.ui.plugin.add("resizable","alsoResize",{start:function(){var e=t(this).resizable("instance"),i=e.options
    t(i.alsoResize).each(function(){var e=t(this)
        e.data("ui-resizable-alsoresize",{width:parseFloat(e.width()),height:parseFloat(e.height()),left:parseFloat(e.css("left")),top:parseFloat(e.css("top"))})})},resize:function(e,i){var s=t(this).resizable("instance"),o=s.options,n=s.originalSize,r=s.originalPosition,h={height:s.size.height-n.height||0,width:s.size.width-n.width||0,top:s.position.top-r.top||0,left:s.position.left-r.left||0}
    t(o.alsoResize).each(function(){var e=t(this),s=t(this).data("ui-resizable-alsoresize"),o={},n=e.parents(i.originalElement[0]).length?["width","height"]:["width","height","top","left"]
        t.each(n,function(t,e){var i=(s[e]||0)+(h[e]||0)
            i&&i>=0&&(o[e]=i||null)}),e.css(o)})},stop:function(){t(this).removeData("ui-resizable-alsoresize")}}),t.ui.plugin.add("resizable","ghost",{start:function(){var e=t(this).resizable("instance"),i=e.size
    e.ghost=e.originalElement.clone(),e.ghost.css({opacity:.25,display:"block",position:"relative",height:i.height,width:i.width,margin:0,left:0,top:0}),e._addClass(e.ghost,"ui-resizable-ghost"),t.uiBackCompat!==!1&&"string"==typeof e.options.ghost&&e.ghost.addClass(this.options.ghost),e.ghost.appendTo(e.helper)},resize:function(){var e=t(this).resizable("instance")
    e.ghost&&e.ghost.css({position:"relative",height:e.size.height,width:e.size.width})},stop:function(){var e=t(this).resizable("instance")
    e.ghost&&e.helper&&e.helper.get(0).removeChild(e.ghost.get(0))}}),t.ui.plugin.add("resizable","grid",{resize:function(){var e,i=t(this).resizable("instance"),s=i.options,o=i.size,n=i.originalSize,r=i.originalPosition,h=i.axis,a="number"==typeof s.grid?[s.grid,s.grid]:s.grid,l=a[0]||1,c=a[1]||1,p=Math.round((o.width-n.width)/l)*l,u=Math.round((o.height-n.height)/c)*c,d=n.width+p,f=n.height+u,g=s.maxWidth&&d>s.maxWidth,m=s.maxHeight&&f>s.maxHeight,_=s.minWidth&&s.minWidth>d,v=s.minHeight&&s.minHeight>f
    s.grid=a,_&&(d+=l),v&&(f+=c),g&&(d-=l),m&&(f-=c),/^(se|s|e)$/.test(h)?(i.size.width=d,i.size.height=f):/^(ne)$/.test(h)?(i.size.width=d,i.size.height=f,i.position.top=r.top-u):/^(sw)$/.test(h)?(i.size.width=d,i.size.height=f,i.position.left=r.left-p):((0>=f-c||0>=d-l)&&(e=i._getPaddingPlusBorderDimensions(this)),f-c>0?(i.size.height=f,i.position.top=r.top-u):(f=c-e.height,i.size.height=f,i.position.top=r.top+n.height-f),d-l>0?(i.size.width=d,i.position.left=r.left-p):(d=l-e.width,i.size.width=d,i.position.left=r.left+n.width-d))}}),t.ui.resizable,t.widget("ui.sortable",t.ui.mouse,{version:"1.12.0",widgetEventPrefix:"sort",ready:!1,options:{appendTo:"parent",axis:!1,connectWith:!1,containment:!1,cursor:"auto",cursorAt:!1,dropOnEmpty:!0,forcePlaceholderSize:!1,forceHelperSize:!1,grid:!1,handle:!1,helper:"original",items:"> *",opacity:!1,placeholder:!1,revert:!1,scroll:!0,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1e3,activate:null,beforeStop:null,change:null,deactivate:null,out:null,over:null,receive:null,remove:null,sort:null,start:null,stop:null,update:null},_isOverAxis:function(t,e,i){return t>=e&&e+i>t},_isFloating:function(t){return/left|right/.test(t.css("float"))||/inline|table-cell/.test(t.css("display"))},_create:function(){this.containerCache={},this._addClass("ui-sortable"),this.refresh(),this.offset=this.element.offset(),this._mouseInit(),this._setHandleClassName(),this.ready=!0},_setOption:function(t,e){this._super(t,e),"handle"===t&&this._setHandleClassName()},_setHandleClassName:function(){var e=this
        this._removeClass(this.element.find(".ui-sortable-handle"),"ui-sortable-handle"),t.each(this.items,function(){e._addClass(this.instance.options.handle?this.item.find(this.instance.options.handle):this.item,"ui-sortable-handle")})},_destroy:function(){this._mouseDestroy()
        for(var t=this.items.length-1
            t>=0
        t--)this.items[t].item.removeData(this.widgetName+"-item")
        return this},_mouseCapture:function(e,i){var s=null,o=!1,n=this
        return!this.reverting&&(!this.options.disabled&&"static"!==this.options.type&&(this._refreshItems(e),t(e.target).parents().each(function(){return t.data(this,n.widgetName+"-item")===n?(s=t(this),!1):void 0}),t.data(e.target,n.widgetName+"-item")===n&&(s=t(e.target)),!!s&&(!(this.options.handle&&!i&&(t(this.options.handle,s).find("*").addBack().each(function(){this===e.target&&(o=!0)}),!o))&&(this.currentItem=s,this._removeCurrentsFromItems(),!0))))},_mouseStart:function(e,i,s){var o,n,r=this.options
        if(this.currentContainer=this,this.refreshPositions(),this.helper=this._createHelper(e),this._cacheHelperProportions(),this._cacheMargins(),this.scrollParent=this.helper.scrollParent(),this.offset=this.currentItem.offset(),this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left},t.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()}),this.helper.css("position","absolute"),this.cssPosition=this.helper.css("position"),this.originalPosition=this._generatePosition(e),this.originalPageX=e.pageX,this.originalPageY=e.pageY,r.cursorAt&&this._adjustOffsetFromHelper(r.cursorAt),this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]},this.helper[0]!==this.currentItem[0]&&this.currentItem.hide(),this._createPlaceholder(),r.containment&&this._setContainment(),r.cursor&&"auto"!==r.cursor&&(n=this.document.find("body"),this.storedCursor=n.css("cursor"),n.css("cursor",r.cursor),this.storedStylesheet=t("<style>*{ cursor: "+r.cursor+" !important
            }</style>").appendTo(n)),r.opacity&&(this.helper.css("opacity")&&(this._storedOpacity=this.helper.css("opacity")),this.helper.css("opacity",r.opacity)),r.zIndex&&(this.helper.css("zIndex")&&(this._storedZIndex=this.helper.css("zIndex")),this.helper.css("zIndex",r.zIndex)),this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName&&(this.overflowOffset=this.scrollParent.offset()),this._trigger("start",e,this._uiHash()),this._preserveHelperProportions||this._cacheHelperProportions(),!s)for(o=this.containers.length-1
        o>=0
o--)this.containers[o]._trigger("activate",e,this._uiHash(this))
return t.ui.ddmanager&&(t.ui.ddmanager.current=this),t.ui.ddmanager&&!r.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e),this.dragging=!0,this._addClass(this.helper,"ui-sortable-helper"),this._mouseDrag(e),!0},_mouseDrag:function(e){var i,s,o,n,r=this.options,h=!1
    for(this.position=this._generatePosition(e),this.positionAbs=this._convertPositionTo("absolute"),this.lastPositionAbs||(this.lastPositionAbs=this.positionAbs),this.options.scroll&&(this.scrollParent[0]!==this.document[0]&&"HTML"!==this.scrollParent[0].tagName?(this.overflowOffset.top+this.scrollParent[0].offsetHeight-e.pageY<r.scrollSensitivity?this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop+r.scrollSpeed:e.pageY-this.overflowOffset.top<r.scrollSensitivity&&(this.scrollParent[0].scrollTop=h=this.scrollParent[0].scrollTop-r.scrollSpeed),this.overflowOffset.left+this.scrollParent[0].offsetWidth-e.pageX<r.scrollSensitivity?this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft+r.scrollSpeed:e.pageX-this.overflowOffset.left<r.scrollSensitivity&&(this.scrollParent[0].scrollLeft=h=this.scrollParent[0].scrollLeft-r.scrollSpeed)):(e.pageY-this.document.scrollTop()<r.scrollSensitivity?h=this.document.scrollTop(this.document.scrollTop()-r.scrollSpeed):this.window.height()-(e.pageY-this.document.scrollTop())<r.scrollSensitivity&&(h=this.document.scrollTop(this.document.scrollTop()+r.scrollSpeed)),e.pageX-this.document.scrollLeft()<r.scrollSensitivity?h=this.document.scrollLeft(this.document.scrollLeft()-r.scrollSpeed):this.window.width()-(e.pageX-this.document.scrollLeft())<r.scrollSensitivity&&(h=this.document.scrollLeft(this.document.scrollLeft()+r.scrollSpeed))),h!==!1&&t.ui.ddmanager&&!r.dropBehaviour&&t.ui.ddmanager.prepareOffsets(this,e)),this.positionAbs=this._convertPositionTo("absolute"),this.options.axis&&"y"===this.options.axis||(this.helper[0].style.left=this.position.left+"px"),this.options.axis&&"x"===this.options.axis||(this.helper[0].style.top=this.position.top+"px"),i=this.items.length-1
        i>=0
    i--)if(s=this.items[i],o=s.item[0],n=this._intersectsWithPointer(s),n&&s.instance===this.currentContainer&&o!==this.currentItem[0]&&this.placeholder[1===n?"next":"prev"]()[0]!==o&&!t.contains(this.placeholder[0],o)&&("semi-dynamic"!==this.options.type||!t.contains(this.element[0],o))){if(this.direction=1===n?"down":"up","pointer"!==this.options.tolerance&&!this._intersectsWithSides(s))break
        this._rearrange(e,s),this._trigger("change",e,this._uiHash())
        break}return this._contactContainers(e),t.ui.ddmanager&&t.ui.ddmanager.drag(this,e),this._trigger("sort",e,this._uiHash()),
        this.lastPositionAbs=this.positionAbs,!1},_mouseStop:function(e,i){if(e){if(t.ui.ddmanager&&!this.options.dropBehaviour&&t.ui.ddmanager.drop(this,e),this.options.revert){var s=this,o=this.placeholder.offset(),n=this.options.axis,r={}
    n&&"x"!==n||(r.left=o.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollLeft)),n&&"y"!==n||(r.top=o.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]===this.document[0].body?0:this.offsetParent[0].scrollTop)),this.reverting=!0,t(this.helper).animate(r,parseInt(this.options.revert,10)||500,function(){s._clear(e)})}else this._clear(e,i)
    return!1}},cancel:function(){if(this.dragging){this._mouseUp({target:null}),"original"===this.options.helper?(this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")):this.currentItem.show()
    for(var e=this.containers.length-1
        e>=0
    e--)this.containers[e]._trigger("deactivate",null,this._uiHash(this)),this.containers[e].containerCache.over&&(this.containers[e]._trigger("out",null,this._uiHash(this)),this.containers[e].containerCache.over=0)}return this.placeholder&&(this.placeholder[0].parentNode&&this.placeholder[0].parentNode.removeChild(this.placeholder[0]),"original"!==this.options.helper&&this.helper&&this.helper[0].parentNode&&this.helper.remove(),t.extend(this,{helper:null,dragging:!1,reverting:!1,_noFinalSort:null}),this.domPosition.prev?t(this.domPosition.prev).after(this.currentItem):t(this.domPosition.parent).prepend(this.currentItem)),this},serialize:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[]
    return e=e||{},t(i).each(function(){var i=(t(e.item||this).attr(e.attribute||"id")||"").match(e.expression||/(.+)[\-=_](.+)/)
        i&&s.push((e.key||i[1]+"[]")+"="+(e.key&&e.expression?i[1]:i[2]))}),!s.length&&e.key&&s.push(e.key+"="),s.join("&")},toArray:function(e){var i=this._getItemsAsjQuery(e&&e.connected),s=[]
    return e=e||{},i.each(function(){s.push(t(e.item||this).attr(e.attribute||"id")||"")}),s},_intersectsWith:function(t){var e=this.positionAbs.left,i=e+this.helperProportions.width,s=this.positionAbs.top,o=s+this.helperProportions.height,n=t.left,r=n+t.width,h=t.top,a=h+t.height,l=this.offset.click.top,c=this.offset.click.left,p="x"===this.options.axis||s+l>h&&a>s+l,u="y"===this.options.axis||e+c>n&&r>e+c,d=p&&u
    return"pointer"===this.options.tolerance||this.options.forcePointerForContainers||"pointer"!==this.options.tolerance&&this.helperProportions[this.floating?"width":"height"]>t[this.floating?"width":"height"]?d:e+this.helperProportions.width/2>n&&r>i-this.helperProportions.width/2&&s+this.helperProportions.height/2>h&&a>o-this.helperProportions.height/2},_intersectsWithPointer:function(t){var e,i,s="x"===this.options.axis||this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top,t.height),o="y"===this.options.axis||this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left,t.width),n=s&&o
    return!!n&&(e=this._getDragVerticalDirection(),i=this._getDragHorizontalDirection(),this.floating?"right"===i||"down"===e?2:1:e&&("down"===e?2:1))},_intersectsWithSides:function(t){var e=this._isOverAxis(this.positionAbs.top+this.offset.click.top,t.top+t.height/2,t.height),i=this._isOverAxis(this.positionAbs.left+this.offset.click.left,t.left+t.width/2,t.width),s=this._getDragVerticalDirection(),o=this._getDragHorizontalDirection()
    return this.floating&&o?"right"===o&&i||"left"===o&&!i:s&&("down"===s&&e||"up"===s&&!e)},_getDragVerticalDirection:function(){var t=this.positionAbs.top-this.lastPositionAbs.top
    return 0!==t&&(t>0?"down":"up")},_getDragHorizontalDirection:function(){var t=this.positionAbs.left-this.lastPositionAbs.left
    return 0!==t&&(t>0?"right":"left")},refresh:function(t){return this._refreshItems(t),this._setHandleClassName(),this.refreshPositions(),this},_connectWith:function(){var t=this.options
    return t.connectWith.constructor===String?[t.connectWith]:t.connectWith},_getItemsAsjQuery:function(e){function i(){h.push(this)}var s,o,n,r,h=[],a=[],l=this._connectWith()
    if(l&&e)for(s=l.length-1
        s>=0
    s--)for(n=t(l[s],this.document[0]),o=n.length-1
        o>=0
    o--)r=t.data(n[o],this.widgetFullName),r&&r!==this&&!r.options.disabled&&a.push([t.isFunction(r.options.items)?r.options.items.call(r.element):t(r.options.items,r.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),r])
    for(a.push([t.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):t(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]),s=a.length-1
        s>=0
    s--)a[s][0].each(i)
    return t(h)},_removeCurrentsFromItems:function(){var e=this.currentItem.find(":data("+this.widgetName+"-item)")
    this.items=t.grep(this.items,function(t){for(var i=0
        e.length>i
        i++)if(e[i]===t.item[0])return!1
        return!0})},_refreshItems:function(e){this.items=[],this.containers=[this]
    var i,s,o,n,r,h,a,l,c=this.items,p=[[t.isFunction(this.options.items)?this.options.items.call(this.element[0],e,{item:this.currentItem}):t(this.options.items,this.element),this]],u=this._connectWith()
    if(u&&this.ready)for(i=u.length-1
        i>=0
    i--)for(o=t(u[i],this.document[0]),s=o.length-1
        s>=0
    s--)n=t.data(o[s],this.widgetFullName),n&&n!==this&&!n.options.disabled&&(p.push([t.isFunction(n.options.items)?n.options.items.call(n.element[0],e,{item:this.currentItem}):t(n.options.items,n.element),n]),this.containers.push(n))
    for(i=p.length-1
        i>=0
    i--)for(r=p[i][1],h=p[i][0],s=0,l=h.length
        l>s
    s++)a=t(h[s]),a.data(this.widgetName+"-item",r),c.push({item:a,instance:r,width:0,height:0,left:0,top:0})},refreshPositions:function(e){this.floating=!!this.items.length&&("x"===this.options.axis||this._isFloating(this.items[0].item)),this.offsetParent&&this.helper&&(this.offset.parent=this._getParentOffset())
    var i,s,o,n
    for(i=this.items.length-1
        i>=0
    i--)s=this.items[i],s.instance!==this.currentContainer&&this.currentContainer&&s.item[0]!==this.currentItem[0]||(o=this.options.toleranceElement?t(this.options.toleranceElement,s.item):s.item,e||(s.width=o.outerWidth(),s.height=o.outerHeight()),n=o.offset(),s.left=n.left,s.top=n.top)
    if(this.options.custom&&this.options.custom.refreshContainers)this.options.custom.refreshContainers.call(this)
    else for(i=this.containers.length-1
        i>=0
    i--)n=this.containers[i].element.offset(),this.containers[i].containerCache.left=n.left,this.containers[i].containerCache.top=n.top,this.containers[i].containerCache.width=this.containers[i].element.outerWidth(),this.containers[i].containerCache.height=this.containers[i].element.outerHeight()
    return this},_createPlaceholder:function(e){e=e||this
    var i,s=e.options
    s.placeholder&&s.placeholder.constructor!==String||(i=s.placeholder,s.placeholder={element:function(){var s=e.currentItem[0].nodeName.toLowerCase(),o=t("<"+s+">",e.document[0])
        return e._addClass(o,"ui-sortable-placeholder",i||e.currentItem[0].className)._removeClass(o,"ui-sortable-helper"),"tbody"===s?e._createTrPlaceholder(e.currentItem.find("tr").eq(0),t("<tr>",e.document[0]).appendTo(o)):"tr"===s?e._createTrPlaceholder(e.currentItem,o):"img"===s&&o.attr("src",e.currentItem.attr("src")),i||o.css("visibility","hidden"),o},update:function(t,o){(!i||s.forcePlaceholderSize)&&(o.height()||o.height(e.currentItem.innerHeight()-parseInt(e.currentItem.css("paddingTop")||0,10)-parseInt(e.currentItem.css("paddingBottom")||0,10)),o.width()||o.width(e.currentItem.innerWidth()-parseInt(e.currentItem.css("paddingLeft")||0,10)-parseInt(e.currentItem.css("paddingRight")||0,10)))}}),e.placeholder=t(s.placeholder.element.call(e.element,e.currentItem)),e.currentItem.after(e.placeholder),s.placeholder.update(e,e.placeholder)},_createTrPlaceholder:function(e,i){var s=this
    e.children().each(function(){t("<td>&#160
        </td>",s.document[0]).attr("colspan",t(this).attr("colspan")||1).appendTo(i)})},_contactContainers:function(e){var i,s,o,n,r,h,a,l,c,p,u=null,d=null
        for(i=this.containers.length-1
            i>=0
        i--)if(!t.contains(this.currentItem[0],this.containers[i].element[0]))if(this._intersectsWith(this.containers[i].containerCache)){if(u&&t.contains(this.containers[i].element[0],u.element[0]))continue
            u=this.containers[i],d=i}else this.containers[i].containerCache.over&&(this.containers[i]._trigger("out",e,this._uiHash(this)),this.containers[i].containerCache.over=0)
        if(u)if(1===this.containers.length)this.containers[d].containerCache.over||(this.containers[d]._trigger("over",e,this._uiHash(this)),this.containers[d].containerCache.over=1)
        else{for(o=1e4,n=null,c=u.floating||this._isFloating(this.currentItem),r=c?"left":"top",h=c?"width":"height",p=c?"pageX":"pageY",s=this.items.length-1
            s>=0
            s--)t.contains(this.containers[d].element[0],this.items[s].item[0])&&this.items[s].item[0]!==this.currentItem[0]&&(a=this.items[s].item.offset()[r],l=!1,e[p]-a>this.items[s][h]/2&&(l=!0),o>Math.abs(e[p]-a)&&(o=Math.abs(e[p]-a),n=this.items[s],this.direction=l?"up":"down"))
            if(!n&&!this.options.dropOnEmpty)return
            if(this.currentContainer===this.containers[d])return void(this.currentContainer.containerCache.over||(this.containers[d]._trigger("over",e,this._uiHash()),this.currentContainer.containerCache.over=1))
            n?this._rearrange(e,n,null,!0):this._rearrange(e,null,this.containers[d].element,!0),this._trigger("change",e,this._uiHash()),this.containers[d]._trigger("change",e,this._uiHash(this)),this.currentContainer=this.containers[d],this.options.placeholder.update(this.currentContainer,this.placeholder),this.containers[d]._trigger("over",e,this._uiHash(this)),this.containers[d].containerCache.over=1}},_createHelper:function(e){var i=this.options,s=t.isFunction(i.helper)?t(i.helper.apply(this.element[0],[e,this.currentItem])):"clone"===i.helper?this.currentItem.clone():this.currentItem
        return s.parents("body").length||t("parent"!==i.appendTo?i.appendTo:this.currentItem[0].parentNode)[0].appendChild(s[0]),s[0]===this.currentItem[0]&&(this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}),(!s[0].style.width||i.forceHelperSize)&&s.width(this.currentItem.width()),(!s[0].style.height||i.forceHelperSize)&&s.height(this.currentItem.height()),s},_adjustOffsetFromHelper:function(e){"string"==typeof e&&(e=e.split(" ")),t.isArray(e)&&(e={left:+e[0],top:+e[1]||0}),"left"in e&&(this.offset.click.left=e.left+this.margins.left),"right"in e&&(this.offset.click.left=this.helperProportions.width-e.right+this.margins.left),"top"in e&&(this.offset.click.top=e.top+this.margins.top),"bottom"in e&&(this.offset.click.top=this.helperProportions.height-e.bottom+this.margins.top)},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent()
        var e=this.offsetParent.offset()
        return"absolute"===this.cssPosition&&this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])&&(e.left+=this.scrollParent.scrollLeft(),e.top+=this.scrollParent.scrollTop()),(this.offsetParent[0]===this.document[0].body||this.offsetParent[0].tagName&&"html"===this.offsetParent[0].tagName.toLowerCase()&&t.ui.ie)&&(e={top:0,left:0}),{top:e.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:e.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if("relative"===this.cssPosition){var t=this.currentItem.position()
        return{top:t.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:t.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}return{top:0,left:0}},_cacheMargins:function(){this.margins={left:parseInt(this.currentItem.css("marginLeft"),10)||0,top:parseInt(this.currentItem.css("marginTop"),10)||0}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var e,i,s,o=this.options
        "parent"===o.containment&&(o.containment=this.helper[0].parentNode),("document"===o.containment||"window"===o.containment)&&(this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,"document"===o.containment?this.document.width():this.window.width()-this.helperProportions.width-this.margins.left,("document"===o.containment?this.document.height()||document.body.parentNode.scrollHeight:this.window.height()||this.document[0].body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]),/^(document|window|parent)$/.test(o.containment)||(e=t(o.containment)[0],i=t(o.containment).offset(),s="hidden"!==t(e).css("overflow"),this.containment=[i.left+(parseInt(t(e).css("borderLeftWidth"),10)||0)+(parseInt(t(e).css("paddingLeft"),10)||0)-this.margins.left,i.top+(parseInt(t(e).css("borderTopWidth"),10)||0)+(parseInt(t(e).css("paddingTop"),10)||0)-this.margins.top,i.left+(s?Math.max(e.scrollWidth,e.offsetWidth):e.offsetWidth)-(parseInt(t(e).css("borderLeftWidth"),10)||0)-(parseInt(t(e).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,i.top+(s?Math.max(e.scrollHeight,e.offsetHeight):e.offsetHeight)-(parseInt(t(e).css("borderTopWidth"),10)||0)-(parseInt(t(e).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top])},_convertPositionTo:function(e,i){i||(i=this.position)
        var s="absolute"===e?1:-1,o="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,n=/(html|body)/i.test(o[0].tagName)
        return{top:i.top+this.offset.relative.top*s+this.offset.parent.top*s-("fixed"===this.cssPosition?-this.scrollParent.scrollTop():n?0:o.scrollTop())*s,left:i.left+this.offset.relative.left*s+this.offset.parent.left*s-("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():n?0:o.scrollLeft())*s}},_generatePosition:function(e){var i,s,o=this.options,n=e.pageX,r=e.pageY,h="absolute"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&t.contains(this.scrollParent[0],this.offsetParent[0])?this.scrollParent:this.offsetParent,a=/(html|body)/i.test(h[0].tagName)
        return"relative"!==this.cssPosition||this.scrollParent[0]!==this.document[0]&&this.scrollParent[0]!==this.offsetParent[0]||(this.offset.relative=this._getRelativeOffset()),this.originalPosition&&(this.containment&&(e.pageX-this.offset.click.left<this.containment[0]&&(n=this.containment[0]+this.offset.click.left),e.pageY-this.offset.click.top<this.containment[1]&&(r=this.containment[1]+this.offset.click.top),e.pageX-this.offset.click.left>this.containment[2]&&(n=this.containment[2]+this.offset.click.left),e.pageY-this.offset.click.top>this.containment[3]&&(r=this.containment[3]+this.offset.click.top)),o.grid&&(i=this.originalPageY+Math.round((r-this.originalPageY)/o.grid[1])*o.grid[1],r=this.containment?i-this.offset.click.top>=this.containment[1]&&i-this.offset.click.top<=this.containment[3]?i:i-this.offset.click.top>=this.containment[1]?i-o.grid[1]:i+o.grid[1]:i,s=this.originalPageX+Math.round((n-this.originalPageX)/o.grid[0])*o.grid[0],n=this.containment?s-this.offset.click.left>=this.containment[0]&&s-this.offset.click.left<=this.containment[2]?s:s-this.offset.click.left>=this.containment[0]?s-o.grid[0]:s+o.grid[0]:s)),{top:r-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+("fixed"===this.cssPosition?-this.scrollParent.scrollTop():a?0:h.scrollTop()),left:n-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+("fixed"===this.cssPosition?-this.scrollParent.scrollLeft():a?0:h.scrollLeft())}},_rearrange:function(t,e,i,s){i?i[0].appendChild(this.placeholder[0]):e.item[0].parentNode.insertBefore(this.placeholder[0],"down"===this.direction?e.item[0]:e.item[0].nextSibling),this.counter=this.counter?++this.counter:1
        var o=this.counter
        this._delay(function(){o===this.counter&&this.refreshPositions(!s)})},_clear:function(t,e){function i(t,e,i){return function(s){i._trigger(t,s,e._uiHash(e))}}this.reverting=!1
        var s,o=[]
        if(!this._noFinalSort&&this.currentItem.parent().length&&this.placeholder.before(this.currentItem),this._noFinalSort=null,this.helper[0]===this.currentItem[0]){for(s in this._storedCSS)("auto"===this._storedCSS[s]||"static"===this._storedCSS[s])&&(this._storedCSS[s]="")
            this.currentItem.css(this._storedCSS),this._removeClass(this.currentItem,"ui-sortable-helper")}else this.currentItem.show()
        for(this.fromOutside&&!e&&o.push(function(t){this._trigger("receive",t,this._uiHash(this.fromOutside))}),!this.fromOutside&&this.domPosition.prev===this.currentItem.prev().not(".ui-sortable-helper")[0]&&this.domPosition.parent===this.currentItem.parent()[0]||e||o.push(function(t){this._trigger("update",t,this._uiHash())}),this!==this.currentContainer&&(e||(o.push(function(t){this._trigger("remove",t,this._uiHash())}),o.push(function(t){return function(e){t._trigger("receive",e,this._uiHash(this))}}.call(this,this.currentContainer)),o.push(function(t){return function(e){t._trigger("update",e,this._uiHash(this))}}.call(this,this.currentContainer)))),s=this.containers.length-1
            s>=0
        s--)e||o.push(i("deactivate",this,this.containers[s])),this.containers[s].containerCache.over&&(o.push(i("out",this,this.containers[s])),this.containers[s].containerCache.over=0)
        if(this.storedCursor&&(this.document.find("body").css("cursor",this.storedCursor),this.storedStylesheet.remove()),this._storedOpacity&&this.helper.css("opacity",this._storedOpacity),this._storedZIndex&&this.helper.css("zIndex","auto"===this._storedZIndex?"":this._storedZIndex),this.dragging=!1,e||this._trigger("beforeStop",t,this._uiHash()),this.placeholder[0].parentNode.removeChild(this.placeholder[0]),this.cancelHelperRemoval||(this.helper[0]!==this.currentItem[0]&&this.helper.remove(),this.helper=null),!e){for(s=0
            o.length>s
            s++)o[s].call(this,t)
            this._trigger("stop",t,this._uiHash())}return this.fromOutside=!1,!this.cancelHelperRemoval},_trigger:function(){t.Widget.prototype._trigger.apply(this,arguments)===!1&&this.cancel()},_uiHash:function(e){var i=e||this
        return{helper:i.helper,placeholder:i.placeholder||t([]),position:i.position,originalPosition:i.originalPosition,offset:i.positionAbs,item:i.currentItem,sender:e?e.element:null}}})
var n=/ui-corner-([a-z]){2,6}/g
t.widget("ui.controlgroup",{version:"1.12.0",defaultElement:"<div>",options:{direction:"horizontal",disabled:null,onlyVisible:!0,items:{button:"input[type=button], input[type=submit], input[type=reset], button, a",controlgroupLabel:".ui-controlgroup-label",checkboxradio:"input[type='checkbox'], input[type='radio']",selectmenu:"select",spinner:".ui-spinner-input"}},_create:function(){this._enhance()},_enhance:function(){this.element.attr("role","toolbar"),this.refresh()},_destroy:function(){this._callChildMethod("destroy"),this.childWidgets.removeData("ui-controlgroup-data"),this.element.removeAttr("role"),this.options.items.controlgroupLabel&&this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()},_initWidgets:function(){var e=this,i=[]
    t.each(this.options.items,function(s,o){var n,r={}
        return o?"controlgroupLabel"===s?(n=e.element.find(o),n.each(function(){var e=t(this)
            e.children(".ui-controlgroup-label-contents").length||e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")}),e._addClass(n,null,"ui-widget ui-widget-content ui-state-default"),void(i=i.concat(n.get()))):void(t.fn[s]&&(e["_"+s+"Options"]&&(r=e["_"+s+"Options"]("middle")),e.element.find(o).each(function(){var o=t(this),n=o[s]("instance"),h=t.widget.extend({},r)
            if("button"!==s||!o.parent(".ui-spinner").length){n||(n=o[s]()[s]("instance")),n&&(h.classes=e._resolveClassesValues(h.classes,n)),o[s](h)
                var a=o[s]("widget")
                t.data(a[0],"ui-controlgroup-data",n?n:o[s]("instance")),i.push(a[0])}}))):void 0}),this.childWidgets=t(t.unique(i)),this._addClass(this.childWidgets,"ui-controlgroup-item")},_callChildMethod:function(e){this.childWidgets.each(function(){var i=t(this),s=i.data("ui-controlgroup-data")
    s&&s[e]&&s[e]()})},_updateCornerClass:function(t,e){var i="ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all",s=this._buildSimpleOptions(e,"label").classes.label
    this._removeClass(t,null,i),this._addClass(t,null,s)},_buildSimpleOptions:function(t,e){var i="vertical"===this.options.direction,s={classes:{}}
    return s.classes[e]={middle:"",first:"ui-corner-"+(i?"top":"left"),last:"ui-corner-"+(i?"bottom":"right"),only:"ui-corner-all"}[t],s},_spinnerOptions:function(t){var e=this._buildSimpleOptions(t,"ui-spinner")
    return e.classes["ui-spinner-up"]="",e.classes["ui-spinner-down"]="",e},_buttonOptions:function(t){return this._buildSimpleOptions(t,"ui-button")},_checkboxradioOptions:function(t){return this._buildSimpleOptions(t,"ui-checkboxradio-label")},_selectmenuOptions:function(t){var e="vertical"===this.options.direction
    return{width:!!e&&"auto",classes:{middle:{"ui-selectmenu-button-open":"","ui-selectmenu-button-closed":""},first:{"ui-selectmenu-button-open":"ui-corner-"+(e?"top":"tl"),"ui-selectmenu-button-closed":"ui-corner-"+(e?"top":"left")},last:{"ui-selectmenu-button-open":e?"":"ui-corner-tr","ui-selectmenu-button-closed":"ui-corner-"+(e?"bottom":"right")},only:{"ui-selectmenu-button-open":"ui-corner-top","ui-selectmenu-button-closed":"ui-corner-all"}}[t]}},_resolveClassesValues:function(e,i){var s={}
    return t.each(e,function(t){var o=i.options.classes[t]||""
        o=o.replace(n,"").trim(),s[t]=(o+" "+e[t]).replace(/\s+/g," ")}),s},_setOption:function(t,e){return"direction"===t&&this._removeClass("ui-controlgroup-"+this.options.direction),this._super(t,e),"disabled"===t?void this._callChildMethod(e?"disable":"enable"):void this.refresh()},refresh:function(){var e,i=this
    this._addClass("ui-controlgroup ui-controlgroup-"+this.options.direction),"horizontal"===this.options.direction&&this._addClass(null,"ui-helper-clearfix"),this._initWidgets(),e=this.childWidgets,this.options.onlyVisible&&(e=e.filter(":visible")),e.length&&(t.each(["first","last"],function(t,s){var o=e[s]().data("ui-controlgroup-data")
        if(o&&i["_"+o.widgetName+"Options"]){var n=i["_"+o.widgetName+"Options"](1===e.length?"only":s)
            n.classes=i._resolveClassesValues(n.classes,o),o.element[o.widgetName](n)}else i._updateCornerClass(e[s](),s)}),this._callChildMethod("refresh"))}}),t.widget("ui.checkboxradio",[t.ui.formResetMixin,{version:"1.12.0",options:{disabled:null,label:null,icon:!0,classes:{"ui-checkboxradio-label":"ui-corner-all","ui-checkboxradio-icon":"ui-corner-all"}},_getCreateOptions:function(){var e,i,s=this,o=this._super()||{}
    return this._readType(),i=this.element.labels(),this.label=t(i[i.length-1]),this.label.length||t.error("No label found for checkboxradio widget"),this.originalLabel="",this.label.contents().not(this.element).each(function(){s.originalLabel+=3===this.nodeType?t(this).text():this.outerHTML}),this.originalLabel&&(o.label=this.originalLabel),e=this.element[0].disabled,null!=e&&(o.disabled=e),o},_create:function(){var t=this.element[0].checked
    this._bindFormResetHandler(),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled),this._setOption("disabled",this.options.disabled),this._addClass("ui-checkboxradio","ui-helper-hidden-accessible"),this._addClass(this.label,"ui-checkboxradio-label","ui-button ui-widget"),"radio"===this.type&&this._addClass(this.label,"ui-checkboxradio-radio-label"),this.options.label&&this.options.label!==this.originalLabel?this._updateLabel():this.originalLabel&&(this.options.label=this.originalLabel),this._enhance(),t&&(this._addClass(this.label,"ui-checkboxradio-checked","ui-state-active"),this.icon&&this._addClass(this.icon,null,"ui-state-hover")),this._on({change:"_toggleClasses",focus:function(){this._addClass(this.label,null,"ui-state-focus ui-visual-focus")},blur:function(){this._removeClass(this.label,null,"ui-state-focus ui-visual-focus")}})},_readType:function(){var e=this.element[0].nodeName.toLowerCase()
    this.type=this.element[0].type,"input"===e&&/radio|checkbox/.test(this.type)||t.error("Can't create checkboxradio on element.nodeName="+e+" and element.type="+this.type)},_enhance:function(){this._updateIcon(this.element[0].checked)},widget:function(){return this.label},_getRadioGroup:function(){var e,i=this.element[0].name,s="input[name='"+t.ui.escapeSelector(i)+"']"
    return i?(e=this.form.length?t(this.form[0].elements).filter(s):t(s).filter(function(){return 0===t(this).form().length}),e.not(this.element)):t([])},_toggleClasses:function(){var e=this.element[0].checked
    this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",e),this.options.icon&&"checkbox"===this.type&&this._toggleClass(this.icon,null,"ui-icon-check ui-state-checked",e)._toggleClass(this.icon,null,"ui-icon-blank",!e),"radio"===this.type&&this._getRadioGroup().each(function(){var e=t(this).checkboxradio("instance")
        e&&e._removeClass(e.label,"ui-checkboxradio-checked","ui-state-active")})},_destroy:function(){this._unbindFormResetHandler(),this.icon&&(this.icon.remove(),this.iconSpace.remove())},_setOption:function(t,e){return"label"!==t||e?(this._super(t,e),"disabled"===t?(this._toggleClass(this.label,null,"ui-state-disabled",e),void(this.element[0].disabled=e)):void this.refresh()):void 0},_updateIcon:function(e){var i="ui-icon ui-icon-background "
    this.options.icon?(this.icon||(this.icon=t("<span>"),this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-checkboxradio-icon-space")),"checkbox"===this.type?(i+=e?"ui-icon-check ui-state-checked":"ui-icon-blank",this._removeClass(this.icon,null,e?"ui-icon-blank":"ui-icon-check")):i+="ui-icon-blank",this._addClass(this.icon,"ui-checkboxradio-icon",i),e||this._removeClass(this.icon,null,"ui-icon-check ui-state-checked"),this.icon.prependTo(this.label).after(this.iconSpace)):void 0!==this.icon&&(this.icon.remove(),this.iconSpace.remove(),delete this.icon)},_updateLabel:function(){this.label.contents().not(this.element.add(this.icon).add(this.iconSpace)).remove(),this.label.append(this.options.label)},refresh:function(){var t=this.element[0].checked,e=this.element[0].disabled
    this._updateIcon(t),this._toggleClass(this.label,"ui-checkboxradio-checked","ui-state-active",t),null!==this.options.label&&this._updateLabel(),e!==this.options.disabled&&this._setOptions({disabled:e})}}]),t.ui.checkboxradio,t.widget("ui.button",{version:"1.12.0",defaultElement:"<button>",options:{classes:{"ui-button":"ui-corner-all"},disabled:null,icon:null,iconPosition:"beginning",label:null,showLabel:!0},_getCreateOptions:function(){var t,e=this._super()||{}
    return this.isInput=this.element.is("input"),t=this.element[0].disabled,null!=t&&(e.disabled=t),this.originalLabel=this.isInput?this.element.val():this.element.html(),this.originalLabel&&(e.label=this.originalLabel),e},_create:function(){!this.option.showLabel&!this.options.icon&&(this.options.showLabel=!0),null==this.options.disabled&&(this.options.disabled=this.element[0].disabled||!1),this.hasTitle=!!this.element.attr("title"),this.options.label&&this.options.label!==this.originalLabel&&(this.isInput?this.element.val(this.options.label):this.element.html(this.options.label)),this._addClass("ui-button","ui-widget"),this._setOption("disabled",this.options.disabled),this._enhance(),this.element.is("a")&&this._on({keyup:function(e){e.keyCode===t.ui.keyCode.SPACE&&(e.preventDefault(),this.element[0].click?this.element[0].click():this.element.trigger("click"))}})},_enhance:function(){this.element.is("button")||this.element.attr("role","button"),this.options.icon&&(this._updateIcon("icon",this.options.icon),this._updateTooltip())},_updateTooltip:function(){this.title=this.element.attr("title"),this.options.showLabel||this.title||this.element.attr("title",this.options.label)},_updateIcon:function(e,i){var s="iconPosition"!==e,o=s?this.options.iconPosition:i,n="top"===o||"bottom"===o
    this.icon?s&&this._removeClass(this.icon,null,this.options.icon):(this.icon=t("<span>"),this._addClass(this.icon,"ui-button-icon","ui-icon"),this.options.showLabel||this._addClass("ui-button-icon-only")),s&&this._addClass(this.icon,null,i),this._attachIcon(o),n?(this._addClass(this.icon,null,"ui-widget-icon-block"),this.iconSpace&&this.iconSpace.remove()):(this.iconSpace||(this.iconSpace=t("<span> </span>"),this._addClass(this.iconSpace,"ui-button-icon-space")),this._removeClass(this.icon,null,"ui-wiget-icon-block"),this._attachIconSpace(o))},_destroy:function(){this.element.removeAttr("role"),this.icon&&this.icon.remove(),this.iconSpace&&this.iconSpace.remove(),this.hasTitle||this.element.removeAttr("title")},_attachIconSpace:function(t){this.icon[/^(?:end|bottom)/.test(t)?"before":"after"](this.iconSpace)},_attachIcon:function(t){this.element[/^(?:end|bottom)/.test(t)?"append":"prepend"](this.icon)},_setOptions:function(t){var e=void 0===t.showLabel?this.options.showLabel:t.showLabel,i=void 0===t.icon?this.options.icon:t.icon
    e||i||(t.showLabel=!0),this._super(t)},_setOption:function(t,e){"icon"===t&&(e?this._updateIcon(t,e):this.icon&&(this.icon.remove(),this.iconSpace&&this.iconSpace.remove())),"iconPosition"===t&&this._updateIcon(t,e),"showLabel"===t&&(this._toggleClass("ui-button-icon-only",null,!e),this._updateTooltip()),"label"===t&&(this.isInput?this.element.val(e):(this.element.html(e),this.icon&&(this._attachIcon(this.options.iconPosition),this._attachIconSpace(this.options.iconPosition)))),this._super(t,e),"disabled"===t&&(this._toggleClass(null,"ui-state-disabled",e),this.element[0].disabled=e,e&&this.element.blur())},refresh:function(){var t=this.element.is("input, button")?this.element[0].disabled:this.element.hasClass("ui-button-disabled")
    t!==this.options.disabled&&this._setOptions({disabled:t}),this._updateTooltip()}}),t.uiBackCompat!==!1&&(t.widget("ui.button",t.ui.button,{options:{text:!0,icons:{primary:null,secondary:null}},_create:function(){this.options.showLabel&&!this.options.text&&(this.options.showLabel=this.options.text),!this.options.showLabel&&this.options.text&&(this.options.text=this.options.showLabel),this.options.icon||!this.options.icons.primary&&!this.options.icons.secondary?this.options.icon&&(this.options.icons.primary=this.options.icon):this.options.icons.primary?this.options.icon=this.options.icons.primary:(this.options.icon=this.options.icons.secondary,this.options.iconPosition="end"),this._super()},_setOption:function(t,e){return"text"===t?void this._super("showLabel",e):("showLabel"===t&&(this.options.text=e),"icon"===t&&(this.options.icons.primary=e),"icons"===t&&(e.primary?(this._super("icon",e.primary),this._super("iconPosition","beginning")):e.secondary&&(this._super("icon",e.secondary),this._super("iconPosition","end"))),void this._superApply(arguments))}}),t.fn.button=function(e){return function(){return!this.length||this.length&&"INPUT"!==this[0].tagName||this.length&&"INPUT"===this[0].tagName&&"checkbox"!==this.attr("type")&&"radio"!==this.attr("type")?e.apply(this,arguments):(t.ui.checkboxradio||t.error("Checkboxradio widget missing"),0===arguments.length?this.checkboxradio({icon:!1}):this.checkboxradio.apply(this,arguments))}}(t.fn.button),t.fn.buttonset=function(){return t.ui.controlgroup||t.error("Controlgroup widget missing"),"option"===arguments[0]&&"items"===arguments[1]&&arguments[2]?this.controlgroup.apply(this,[arguments[0],"items.button",arguments[2]]):"option"===arguments[0]&&"items"===arguments[1]?this.controlgroup.apply(this,[arguments[0],"items.button"]):("object"==typeof arguments[0]&&arguments[0].items&&(arguments[0].items={button:arguments[0].items}),this.controlgroup.apply(this,arguments))}),t.ui.button,t.widget("ui.dialog",{version:"1.12.0",options:{appendTo:"body",autoOpen:!0,buttons:[],classes:{"ui-dialog":"ui-corner-all","ui-dialog-titlebar":"ui-corner-all"},closeOnEscape:!0,closeText:"Close",draggable:!0,hide:null,height:"auto",maxHeight:null,maxWidth:null,minHeight:150,minWidth:150,modal:!1,position:{my:"center",
    at:"center",of:window,collision:"fit",using:function(e){var i=t(this).css(e).offset().top
        0>i&&t(this).css("top",e.top-i)}},resizable:!0,show:null,title:null,width:300,beforeClose:null,close:null,drag:null,dragStart:null,dragStop:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},sizeRelatedOptions:{buttons:!0,height:!0,maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0,width:!0},resizableRelatedOptions:{maxHeight:!0,maxWidth:!0,minHeight:!0,minWidth:!0},_create:function(){this.originalCss={display:this.element[0].style.display,width:this.element[0].style.width,minHeight:this.element[0].style.minHeight,maxHeight:this.element[0].style.maxHeight,height:this.element[0].style.height},this.originalPosition={parent:this.element.parent(),index:this.element.parent().children().index(this.element)},this.originalTitle=this.element.attr("title"),null==this.options.title&&null!=this.originalTitle&&(this.options.title=this.originalTitle),this.options.disabled&&(this.options.disabled=!1),this._createWrapper(),this.element.show().removeAttr("title").appendTo(this.uiDialog),this._addClass("ui-dialog-content","ui-widget-content"),this._createTitlebar(),this._createButtonPane(),this.options.draggable&&t.fn.draggable&&this._makeDraggable(),this.options.resizable&&t.fn.resizable&&this._makeResizable(),this._isOpen=!1,this._trackFocus()},_init:function(){this.options.autoOpen&&this.open()},_appendTo:function(){var e=this.options.appendTo
    return e&&(e.jquery||e.nodeType)?t(e):this.document.find(e||"body").eq(0)},_destroy:function(){var t,e=this.originalPosition
    this._untrackInstance(),this._destroyOverlay(),this.element.removeUniqueId().css(this.originalCss).detach(),this.uiDialog.remove(),this.originalTitle&&this.element.attr("title",this.originalTitle),t=e.parent.children().eq(e.index),t.length&&t[0]!==this.element[0]?t.before(this.element):e.parent.append(this.element)},widget:function(){return this.uiDialog},disable:t.noop,enable:t.noop,close:function(e){var i=this
    this._isOpen&&this._trigger("beforeClose",e)!==!1&&(this._isOpen=!1,this._focusedElement=null,this._destroyOverlay(),this._untrackInstance(),this.opener.filter(":focusable").trigger("focus").length||t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])),this._hide(this.uiDialog,this.options.hide,function(){i._trigger("close",e)}))},isOpen:function(){return this._isOpen},moveToTop:function(){this._moveToTop()},_moveToTop:function(e,i){var s=!1,o=this.uiDialog.siblings(".ui-front:visible").map(function(){return+t(this).css("z-index")}).get(),n=Math.max.apply(null,o)
    return n>=+this.uiDialog.css("z-index")&&(this.uiDialog.css("z-index",n+1),s=!0),s&&!i&&this._trigger("focus",e),s},open:function(){var e=this
    return this._isOpen?void(this._moveToTop()&&this._focusTabbable()):(this._isOpen=!0,this.opener=t(t.ui.safeActiveElement(this.document[0])),this._size(),this._position(),this._createOverlay(),this._moveToTop(null,!0),this.overlay&&this.overlay.css("z-index",this.uiDialog.css("z-index")-1),this._show(this.uiDialog,this.options.show,function(){e._focusTabbable(),e._trigger("focus")}),this._makeFocusTarget(),void this._trigger("open"))},_focusTabbable:function(){var t=this._focusedElement
    t||(t=this.element.find("[autofocus]")),t.length||(t=this.element.find(":tabbable")),t.length||(t=this.uiDialogButtonPane.find(":tabbable")),t.length||(t=this.uiDialogTitlebarClose.filter(":tabbable")),t.length||(t=this.uiDialog),t.eq(0).trigger("focus")},_keepFocus:function(e){function i(){var e=t.ui.safeActiveElement(this.document[0]),i=this.uiDialog[0]===e||t.contains(this.uiDialog[0],e)
    i||this._focusTabbable()}e.preventDefault(),i.call(this),this._delay(i)},_createWrapper:function(){this.uiDialog=t("<div>").hide().attr({tabIndex:-1,role:"dialog"}).appendTo(this._appendTo()),this._addClass(this.uiDialog,"ui-dialog","ui-widget ui-widget-content ui-front"),this._on(this.uiDialog,{keydown:function(e){if(this.options.closeOnEscape&&!e.isDefaultPrevented()&&e.keyCode&&e.keyCode===t.ui.keyCode.ESCAPE)return e.preventDefault(),void this.close(e)
    if(e.keyCode===t.ui.keyCode.TAB&&!e.isDefaultPrevented()){var i=this.uiDialog.find(":tabbable"),s=i.filter(":first"),o=i.filter(":last")
        e.target!==o[0]&&e.target!==this.uiDialog[0]||e.shiftKey?e.target!==s[0]&&e.target!==this.uiDialog[0]||!e.shiftKey||(this._delay(function(){o.trigger("focus")}),e.preventDefault()):(this._delay(function(){s.trigger("focus")}),e.preventDefault())}},mousedown:function(t){this._moveToTop(t)&&this._focusTabbable()}}),this.element.find("[aria-describedby]").length||this.uiDialog.attr({"aria-describedby":this.element.uniqueId().attr("id")})},_createTitlebar:function(){var e
    this.uiDialogTitlebar=t("<div>"),this._addClass(this.uiDialogTitlebar,"ui-dialog-titlebar","ui-widget-header ui-helper-clearfix"),this._on(this.uiDialogTitlebar,{mousedown:function(e){t(e.target).closest(".ui-dialog-titlebar-close")||this.uiDialog.trigger("focus")}}),this.uiDialogTitlebarClose=t("<button type='button'></button>").button({label:t("<a>").text(this.options.closeText).html(),icon:"ui-icon-closethick",showLabel:!1}).appendTo(this.uiDialogTitlebar),this._addClass(this.uiDialogTitlebarClose,"ui-dialog-titlebar-close"),this._on(this.uiDialogTitlebarClose,{click:function(t){t.preventDefault(),this.close(t)}}),e=t("<span>").uniqueId().prependTo(this.uiDialogTitlebar),this._addClass(e,"ui-dialog-title"),this._title(e),this.uiDialogTitlebar.prependTo(this.uiDialog),this.uiDialog.attr({"aria-labelledby":e.attr("id")})},_title:function(t){this.options.title?t.text(this.options.title):t.html("&#160
    ")},_createButtonPane:function(){this.uiDialogButtonPane=t("<div>"),this._addClass(this.uiDialogButtonPane,"ui-dialog-buttonpane","ui-widget-content ui-helper-clearfix"),this.uiButtonSet=t("<div>").appendTo(this.uiDialogButtonPane),this._addClass(this.uiButtonSet,"ui-dialog-buttonset"),this._createButtons()},_createButtons:function(){var e=this,i=this.options.buttons
    return this.uiDialogButtonPane.remove(),this.uiButtonSet.empty(),t.isEmptyObject(i)||t.isArray(i)&&!i.length?void this._removeClass(this.uiDialog,"ui-dialog-buttons"):(t.each(i,function(i,s){var o,n
        s=t.isFunction(s)?{click:s,text:i}:s,s=t.extend({type:"button"},s),o=s.click,n={icon:s.icon,iconPosition:s.iconPosition,showLabel:s.showLabel},delete s.click,delete s.icon,delete s.iconPosition,delete s.showLabel,t("<button></button>",s).button(n).appendTo(e.uiButtonSet).on("click",function(){o.apply(e.element[0],arguments)})}),this._addClass(this.uiDialog,"ui-dialog-buttons"),void this.uiDialogButtonPane.appendTo(this.uiDialog))},_makeDraggable:function(){function e(t){return{position:t.position,offset:t.offset}}var i=this,s=this.options
    this.uiDialog.draggable({cancel:".ui-dialog-content, .ui-dialog-titlebar-close",handle:".ui-dialog-titlebar",containment:"document",start:function(s,o){i._addClass(t(this),"ui-dialog-dragging"),i._blockFrames(),i._trigger("dragStart",s,e(o))},drag:function(t,s){i._trigger("drag",t,e(s))},stop:function(o,n){var r=n.offset.left-i.document.scrollLeft(),h=n.offset.top-i.document.scrollTop()
        s.position={my:"left top",at:"left"+(r>=0?"+":"")+r+" top"+(h>=0?"+":"")+h,of:i.window},i._removeClass(t(this),"ui-dialog-dragging"),i._unblockFrames(),i._trigger("dragStop",o,e(n))}})},_makeResizable:function(){function e(t){return{originalPosition:t.originalPosition,originalSize:t.originalSize,position:t.position,size:t.size}}var i=this,s=this.options,o=s.resizable,n=this.uiDialog.css("position"),r="string"==typeof o?o:"n,e,s,w,se,sw,ne,nw"
    this.uiDialog.resizable({cancel:".ui-dialog-content",containment:"document",alsoResize:this.element,maxWidth:s.maxWidth,maxHeight:s.maxHeight,minWidth:s.minWidth,minHeight:this._minHeight(),handles:r,start:function(s,o){i._addClass(t(this),"ui-dialog-resizing"),i._blockFrames(),i._trigger("resizeStart",s,e(o))},resize:function(t,s){i._trigger("resize",t,e(s))},stop:function(o,n){var r=i.uiDialog.offset(),h=r.left-i.document.scrollLeft(),a=r.top-i.document.scrollTop()
        s.height=i.uiDialog.height(),s.width=i.uiDialog.width(),s.position={my:"left top",at:"left"+(h>=0?"+":"")+h+" top"+(a>=0?"+":"")+a,of:i.window},i._removeClass(t(this),"ui-dialog-resizing"),i._unblockFrames(),i._trigger("resizeStop",o,e(n))}}).css("position",n)},_trackFocus:function(){this._on(this.widget(),{focusin:function(e){this._makeFocusTarget(),this._focusedElement=t(e.target)}})},_makeFocusTarget:function(){this._untrackInstance(),this._trackingInstances().unshift(this)},_untrackInstance:function(){var e=this._trackingInstances(),i=t.inArray(this,e)
    -1!==i&&e.splice(i,1)},_trackingInstances:function(){var t=this.document.data("ui-dialog-instances")
    return t||(t=[],this.document.data("ui-dialog-instances",t)),t},_minHeight:function(){var t=this.options
    return"auto"===t.height?t.minHeight:Math.min(t.minHeight,t.height)},_position:function(){var t=this.uiDialog.is(":visible")
    t||this.uiDialog.show(),this.uiDialog.position(this.options.position),t||this.uiDialog.hide()},_setOptions:function(e){var i=this,s=!1,o={}
    t.each(e,function(t,e){i._setOption(t,e),t in i.sizeRelatedOptions&&(s=!0),t in i.resizableRelatedOptions&&(o[t]=e)}),s&&(this._size(),this._position()),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option",o)},_setOption:function(e,i){var s,o,n=this.uiDialog
    "disabled"!==e&&(this._super(e,i),"appendTo"===e&&this.uiDialog.appendTo(this._appendTo()),"buttons"===e&&this._createButtons(),"closeText"===e&&this.uiDialogTitlebarClose.button({label:t("<a>").text(""+this.options.closeText).html()}),"draggable"===e&&(s=n.is(":data(ui-draggable)"),s&&!i&&n.draggable("destroy"),!s&&i&&this._makeDraggable()),"position"===e&&this._position(),"resizable"===e&&(o=n.is(":data(ui-resizable)"),o&&!i&&n.resizable("destroy"),o&&"string"==typeof i&&n.resizable("option","handles",i),o||i===!1||this._makeResizable()),"title"===e&&this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))},_size:function(){var t,e,i,s=this.options
    this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0}),s.minWidth>s.width&&(s.width=s.minWidth),t=this.uiDialog.css({height:"auto",width:s.width}).outerHeight(),e=Math.max(0,s.minHeight-t),i="number"==typeof s.maxHeight?Math.max(0,s.maxHeight-t):"none","auto"===s.height?this.element.css({minHeight:e,maxHeight:i,height:"auto"}):this.element.height(Math.max(0,s.height-t)),this.uiDialog.is(":data(ui-resizable)")&&this.uiDialog.resizable("option","minHeight",this._minHeight())},_blockFrames:function(){this.iframeBlocks=this.document.find("iframe").map(function(){var e=t(this)
    return t("<div>").css({position:"absolute",width:e.outerWidth(),height:e.outerHeight()}).appendTo(e.parent()).offset(e.offset())[0]})},_unblockFrames:function(){this.iframeBlocks&&(this.iframeBlocks.remove(),delete this.iframeBlocks)},_allowInteraction:function(e){return!!t(e.target).closest(".ui-dialog").length||!!t(e.target).closest(".ui-datepicker").length},_createOverlay:function(){if(this.options.modal){var e=!0
    this._delay(function(){e=!1}),this.document.data("ui-dialog-overlays")||this._on(this.document,{focusin:function(t){e||this._allowInteraction(t)||(t.preventDefault(),this._trackingInstances()[0]._focusTabbable())}}),this.overlay=t("<div>").appendTo(this._appendTo()),this._addClass(this.overlay,null,"ui-widget-overlay ui-front"),this._on(this.overlay,{mousedown:"_keepFocus"}),this.document.data("ui-dialog-overlays",(this.document.data("ui-dialog-overlays")||0)+1)}},_destroyOverlay:function(){if(this.options.modal&&this.overlay){var t=this.document.data("ui-dialog-overlays")-1
    t?this.document.data("ui-dialog-overlays",t):(this._off(this.document,"focusin"),this.document.removeData("ui-dialog-overlays")),this.overlay.remove(),this.overlay=null}}}),t.uiBackCompat!==!1&&t.widget("ui.dialog",t.ui.dialog,{options:{dialogClass:""},_createWrapper:function(){this._super(),this.uiDialog.addClass(this.options.dialogClass)},_setOption:function(t,e){"dialogClass"===t&&this.uiDialog.removeClass(this.options.dialogClass).addClass(e),this._superApply(arguments)}}),t.ui.dialog})


},{}],18:[function(require,module,exports){
    !function(e){"use strict"
        "function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){"use strict"
        function t(n,s){var i=function(){},o=this,l={autoSelectFirst:!1,appendTo:"body",serviceUrl:null,lookup:null,onSelect:null,width:"auto",minChars:1,maxHeight:300,deferRequestBy:0,params:{},formatResult:t.formatResult,onPreSelect:i,delimiter:null,zIndex:9999,type:"GET",noCache:!1,onSearchStart:i,onSearchComplete:i,onSearchError:i,containerClass:"autocomplete-suggestions",tabDisabled:!1,dataType:"text",currentRequest:null,triggerSelectOnValidInput:!0,lookupFilter:function(e,t,n){return e.value.toLowerCase().indexOf(n)!==-1},paramName:"query",transformResult:function(t){return"string"==typeof t?e.parseJSON(t):t}}
            o.element=n,o.el=e(n),o.suggestions=[],o.badQueries=[],o.selectedIndex=-1,o.currentValue=o.element.value,o.intervalId=0,o.cachedResponse={},o.onChangeInterval=null,o.onChange=null,o.isLocal=!1,o.suggestionsContainer=null,o.options=e.extend({},l,s),o.classes={selected:"autocomplete-selected",suggestion:"autocomplete-suggestion"},o.hint=null,o.hintValue="",o.selection=null,o.initialize(),o.setOptions(s)}var n=function(){return{escapeRegExChars:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},createNode:function(e){var t=document.createElement("div")
            return t.className=e,t.style.position="absolute",t.style.display="none",t.style.cursor="pointer",t}}}(),s={ESC:27,TAB:9,RETURN:13,LEFT:37,UP:38,RIGHT:39,DOWN:40}
        t.utils=n,e.Autocomplete=t,t.formatResult=function(e,t){var s="("+n.escapeRegExChars(t)+")"
            return e.value.replace(new RegExp(s,"gi"),"<strong>$1</strong>")},t.prototype={killerFn:null,initialize:function(){var n,s=this,i="."+s.classes.suggestion,o=(s.classes.selected,s.options)
            s.element.setAttribute("autocomplete","off"),s.killerFn=function(t){0===e(t.target).closest("."+s.options.containerClass).length&&(s.killSuggestions(),s.disableKillerFn())},s.suggestionsContainer=t.utils.createNode(o.containerClass),n=e(s.suggestionsContainer),n.appendTo(o.appendTo),"auto"!==o.width&&n.width(o.width),n.on("click.autocomplete",i,function(){s.select(e(this).data("index"))}),s.fixPosition(),s.fixPositionCapture=function(){s.visible&&s.fixPosition()},e(window).on("resize.autocomplete",s.fixPositionCapture),s.el.on("keydown.autocomplete",function(e){s.onKeyPress(e)}),s.el.on("keyup.autocomplete",function(e){s.onKeyUp(e)}),s.el.on("blur.autocomplete",function(){s.onBlur()}),s.el.on("focus.autocomplete",function(){s.onFocus()}),s.el.on("change.autocomplete",function(e){s.onKeyUp(e)})},onFocus:function(){var e=this
            e.fixPosition(),e.options.minChars<=e.el.val().length},onBlur:function(){this.enableKillerFn()},setOptions:function(t){var n=this,s=n.options
            e.extend(s,t),n.isLocal=e.isArray(s.lookup),n.isLocal&&(s.lookup=n.verifySuggestionsFormat(s.lookup)),e(n.suggestionsContainer).css({"max-height":s.maxHeight+"px",width:s.width+"px","z-index":s.zIndex})},clearCache:function(){this.cachedResponse={},this.badQueries=[]},clear:function(){this.clearCache(),this.currentValue="",this.suggestions=[]},disable:function(){var e=this
            e.disabled=!0,e.currentRequest&&e.currentRequest.abort()},enable:function(){this.disabled=!1},fixPosition:function(){var t,n,s=this
            "body"===s.options.appendTo&&(t=s.el.offset(),n={top:t.top+s.el.outerHeight()+"px",left:t.left+"px"},"auto"===s.options.width&&(n.width=s.el.outerWidth()-2+"px"),e(s.suggestionsContainer).css(n))},enableKillerFn:function(){var t=this
            e(document).on("click.autocomplete",t.killerFn)},disableKillerFn:function(){var t=this
            e(document).off("click.autocomplete",t.killerFn)},killSuggestions:function(){var e=this
            e.stopKillSuggestions(),e.intervalId=window.setInterval(function(){e.hide(),e.stopKillSuggestions()},50)},stopKillSuggestions:function(){window.clearInterval(this.intervalId)},isCursorAtEnd:function(){var e,t=this,n=t.el.val().length,s=t.element.selectionStart
            return"number"==typeof s?s===n:!document.selection||(e=document.selection.createRange(),e.moveStart("character",-n),n===e.text.length)},onKeyPress:function(e){var t=this
            if(!t.disabled&&!t.visible&&e.which===s.DOWN&&t.currentValue)return void t.suggest()
            if(!t.disabled&&t.visible){switch(e.which){case s.ESC:t.el.val(t.currentValue),t.hide()
                break
                case s.RIGHT:if(t.hint&&t.options.onHint&&t.isCursorAtEnd()){t.selectHint()
                    break}return
                case s.TAB:if(t.hint&&t.options.onHint)return void t.selectHint()
                case s.RETURN:if(t.selectedIndex===-1)return void t.hide()
                    if(t.select(t.selectedIndex),e.which===s.TAB&&t.options.tabDisabled===!1)return
                    break
                case s.UP:t.moveUp()
                    break
                case s.DOWN:t.moveDown()
                    break
                default:return}e.stopImmediatePropagation(),e.preventDefault()}},onKeyUp:function(e){var t=this
            if(!t.disabled){switch(e.which){case s.UP:case s.DOWN:return}clearInterval(t.onChangeInterval),t.currentValue!==t.el.val()&&(t.findBestHint(),t.options.deferRequestBy>0?t.onChangeInterval=setInterval(function(){t.onValueChange()},t.options.deferRequestBy):t.onValueChange())}},onValueChange:function(){var t,n=this,s=n.options,i=n.el.val(),o=n.getQuery(i)
            return n.selection&&(n.selection=null,(s.onInvalidateSelection||e.noop).call(n.element)),clearInterval(n.onChangeInterval),n.currentValue=i,n.selectedIndex=-1,s.triggerSelectOnValidInput&&(t=n.findSuggestionIndex(o),t!==-1)?void n.select(t):void(o.length<s.minChars?n.hide():n.getSuggestions(o))},findSuggestionIndex:function(t){var n=this,s=-1,i=t.toLowerCase()
            return e.each(n.suggestions,function(e,t){if(t.value.toLowerCase()===i)return s=e,!1}),s},getQuery:function(t){var n,s=this.options.delimiter
            return s?(n=t.split(s),e.trim(n[n.length-1])):t},getSuggestionsLocal:function(t){var n,s=this,i=s.options,o=t.toLowerCase(),l=i.lookupFilter,a=parseInt(i.lookupLimit,10)
            return n={suggestions:e.grep(i.lookup,function(e){return l(e,t,o)})},a&&n.suggestions.length>a&&(n.suggestions=n.suggestions.slice(0,a)),n},getSuggestions:function(t){var n,s,i,o=this,l=o.options,a=l.serviceUrl
            if(l.params[l.paramName]=t,s=l.ignoreParams?null:l.params,o.isLocal?n=o.getSuggestionsLocal(t):(e.isFunction(a)&&(a=a.call(o.element,t)),i=a+"?"+e.param(s||{}),n=o.cachedResponse[i]),n&&e.isArray(n.suggestions))o.suggestions=n.suggestions,o.suggest()
            else if(!o.isBadQuery(t)){if(l.onSearchStart.call(o.element,l.params)===!1)return
                o.currentRequest&&o.currentRequest.abort(),o.currentRequest=e.ajax({url:a,data:s,type:l.type,dataType:l.dataType}).done(function(e){o.currentRequest=null,o.processResponse(e,t,i),l.onSearchComplete.call(o.element,t)}).fail(function(e,n,s){l.onSearchError.call(o.element,t,e,n,s)})}},isBadQuery:function(e){for(var t=this.badQueries,n=t.length
            n--
            )if(0===e.indexOf(t[n]))return!0
            return!1},hide:function(){var t=this
            t.visible=!1,t.selectedIndex=-1,e(t.suggestionsContainer).hide(),t.signalHint(null)},suggest:function(){if(0===this.suggestions.length)return void this.hide()
            var t,n,s=this,i=s.options,o=i.formatResult,l=s.getQuery(s.currentValue),a=s.classes.suggestion,r=s.classes.selected,u=e(s.suggestionsContainer),c=i.beforeRender,g=""
            return i.triggerSelectOnValidInput&&(t=s.findSuggestionIndex(l),t!==-1)?void s.select(t):(e.each(s.suggestions,function(e,t){g+='<div class="'+a+'" data-index="'+e+'">'+o(t,l)+"</div>"}),"auto"===i.width&&(n=s.el.outerWidth()-2,u.width(n>0?n:300)),u.html(g),i.autoSelectFirst&&(s.selectedIndex=0,u.children().first().addClass(r)),e.isFunction(c)&&c.call(s.element,u),u.show(),s.visible=!0,void s.findBestHint())},findBestHint:function(){var t=this,n=t.el.val().toLowerCase(),s=null
            n&&(e.each(t.suggestions,function(e,t){var i=0===t.value.toLowerCase().indexOf(n)
                return i&&(s=t),!i}),t.signalHint(s))},signalHint:function(t){var n="",s=this
            t&&(n=s.currentValue+t.value.substr(s.currentValue.length)),s.hintValue!==n&&(s.hintValue=n,s.hint=t,(this.options.onHint||e.noop)(n))},verifySuggestionsFormat:function(t){return t.length&&"string"==typeof t[0]?e.map(t,function(e){return{value:e,data:null}}):t},processResponse:function(e,t,n){var s=this,i=s.options,o=i.transformResult(e,t)
            o.suggestions=s.verifySuggestionsFormat(o.suggestions),i.noCache||(s.cachedResponse[n]=o,0===o.suggestions.length&&s.badQueries.push(n)),t===s.getQuery(s.currentValue)&&(s.suggestions=o.suggestions,s.suggest())},activate:function(t){var n,s=this,i=s.classes.selected,o=e(s.suggestionsContainer),l=o.children()
            return s.selectedIndex===t?null:(o.children("."+i).removeClass(i),s.selectedIndex=t,s.selectedIndex!==-1&&l.length>s.selectedIndex?(n=l.get(s.selectedIndex),e(n).addClass(i),s.options.onPreSelect(s.suggestions[t],n),n):null)},selectHint:function(){var t=this,n=e.inArray(t.hint,t.suggestions)
            t.select(n)},select:function(e){var t=this
            t.hide(),t.onSelect(e)},moveUp:function(){var t=this
            if(t.selectedIndex!==-1)return 0===t.selectedIndex?(e(t.suggestionsContainer).children().first().removeClass(t.classes.selected),t.selectedIndex=-1,t.el.val(t.currentValue),void t.findBestHint()):void t.adjustScroll(t.selectedIndex-1)},moveDown:function(){var e=this
            e.selectedIndex!==e.suggestions.length-1&&e.adjustScroll(e.selectedIndex+1)},adjustScroll:function(t){var n,s,i,o=this,l=o.activate(t),a=25
            l&&(n=l.offsetTop,s=e(o.suggestionsContainer).scrollTop(),i=s+o.options.maxHeight-a,n<s?e(o.suggestionsContainer).scrollTop(n):n>i&&e(o.suggestionsContainer).scrollTop(n-o.options.maxHeight+a),o.el.val(o.getValue(o.suggestions[t].value)),o.signalHint(null))},onSelect:function(t){var n=this,s=n.options.onSelect,i=n.suggestions[t]
            n.currentValue=n.getValue(i.value),n.el.val(n.currentValue),n.signalHint(null),n.suggestions=[],n.selection=i,e.isFunction(s)&&s.call(n.element,i)},getValue:function(e){var t,n,s=this,i=s.options.delimiter
            return i?(t=s.currentValue,n=t.split(i),1===n.length?e:t.substr(0,t.length-n[n.length-1].length)+e):e},dispose:function(){var t=this
            t.el.off(".autocomplete").removeData("autocomplete"),t.disableKillerFn(),e(window).off("resize.autocomplete",t.fixPositionCapture),e(t.suggestionsContainer).remove()}},e.fn.autocomplete=function(n,s){var i="autocomplete"
            return 0===arguments.length?this.first().data(i):this.each(function(){var o=e(this),l=o.data(i)
                "string"==typeof n?l&&"function"==typeof l[n]&&l[n](s):(l&&l.dispose&&l.dispose(),l=new t(this,n),o.data(i,l))})}})


},{}],19:[function(require,module,exports){
    !function(e,t){"use strict"
        var r=e.History=e.History||{},a=e.jQuery
        if("undefined"!=typeof r.Adapter)throw new Error("History.js Adapter has already been loaded...")
        r.Adapter={bind:function(e,t,r){a(e).bind(t,r)},trigger:function(e,t,r){a(e).trigger(t,r)},extractEventData:function(e,r,a){var n=r&&r.originalEvent&&r.originalEvent[e]||a&&a[e]||t
            return n},onDomLoad:function(e){a(e)}},"undefined"!=typeof r.init&&r.init()}(window),function(e,t){"use strict"
        var r=e.console||t,a=e.document,n=e.navigator,o=e.sessionStorage||!1,i=e.setTimeout,s=e.clearTimeout,u=e.setInterval,l=e.clearInterval,d=e.JSON,c=e.alert,p=e.History=e.History||{},f=e.history
        try{o.setItem("TEST","1"),o.removeItem("TEST")}catch(e){o=!1}if(d.stringify=d.stringify||d.encode,d.parse=d.parse||d.decode,"undefined"!=typeof p.init)throw new Error("History.js Core has already been loaded...")
        p.init=function(e){return"undefined"!=typeof p.Adapter&&("undefined"!=typeof p.initCore&&p.initCore(),"undefined"!=typeof p.initHtml4&&p.initHtml4(),!0)},p.initCore=function(g){if("undefined"!=typeof p.initCore.initialized)return!1
            if(p.initCore.initialized=!0,p.options=p.options||{},p.options.hashChangeInterval=p.options.hashChangeInterval||100,p.options.safariPollInterval=p.options.safariPollInterval||500,p.options.doubleCheckInterval=p.options.doubleCheckInterval||500,p.options.disableSuid=p.options.disableSuid||!1,p.options.storeInterval=p.options.storeInterval||1e3,p.options.busyDelay=p.options.busyDelay||250,p.options.debug=p.options.debug||!1,p.options.initialTitle=p.options.initialTitle||a.title,p.options.html4Mode=p.options.html4Mode||!1,p.options.delayInit=p.options.delayInit||!1,p.intervalList=[],p.clearAllIntervals=function(){var e,t=p.intervalList
                    if("undefined"!=typeof t&&null!==t){for(e=0
                        e<t.length
                        e++)l(t[e])
                        p.intervalList=null}},p.debug=function(){(p.options.debug||!1)&&p.log.apply(p,arguments)},p.log=function(){var e,t,n,o,i,s="undefined"!=typeof r&&"undefined"!=typeof r.log&&"undefined"!=typeof r.log.apply,u=a.getElementById("log")
                    for(s?(o=Array.prototype.slice.call(arguments),e=o.shift(),"undefined"!=typeof r.debug?r.debug.apply(r,[e,o]):r.log.apply(r,[e,o])):e="\n"+arguments[0]+"\n",t=1,n=arguments.length
                        t<n
                    ++t){if(i=arguments[t],"object"==typeof i&&"undefined"!=typeof d)try{i=d.stringify(i)}catch(e){}e+="\n"+i+"\n"}return u?(u.value+=e+"\n-----\n",u.scrollTop=u.scrollHeight-u.clientHeight):s||c(e),!0},p.getInternetExplorerMajorVersion=function(){var e=p.getInternetExplorerMajorVersion.cached="undefined"!=typeof p.getInternetExplorerMajorVersion.cached?p.getInternetExplorerMajorVersion.cached:function(){for(var e=3,t=a.createElement("div"),r=t.getElementsByTagName("i")
                    (t.innerHTML="<!--[if gt IE "+ ++e+"]><i></i><![endif]-->")&&r[0]
                )
                    return e>4&&e}()
                    return e},p.isInternetExplorer=function(){var e=p.isInternetExplorer.cached="undefined"!=typeof p.isInternetExplorer.cached?p.isInternetExplorer.cached:Boolean(p.getInternetExplorerMajorVersion())
                    return e},p.options.html4Mode?p.emulated={pushState:!0,hashChange:!0}:p.emulated={pushState:!Boolean(e.history&&e.history.pushState&&e.history.replaceState&&!/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(n.userAgent)&&!/AppleWebKit\/5([0-2]|3[0-2])/i.test(n.userAgent)),hashChange:Boolean(!("onhashchange"in e||"onhashchange"in a)||p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8)},p.enabled=!p.emulated.pushState,p.bugs={setHash:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),safariPoll:Boolean(!p.emulated.pushState&&"Apple Computer, Inc."===n.vendor&&/AppleWebKit\/5([0-2]|3[0-3])/.test(n.userAgent)),ieDoubleCheck:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<8),hashEscape:Boolean(p.isInternetExplorer()&&p.getInternetExplorerMajorVersion()<7)},p.isEmptyObject=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1
                    return!0},p.cloneObject=function(e){var t,r
                    return e?(t=d.stringify(e),r=d.parse(t)):r={},r},p.getRootUrl=function(){var e=a.location.protocol+"//"+(a.location.hostname||a.location.host)
                    return a.location.port&&(e+=":"+a.location.port),e+="/"},p.getBaseHref=function(){var e=a.getElementsByTagName("base"),t=null,r=""
                    return 1===e.length&&(t=e[0],r=t.href.replace(/[^\/]+$/,"")),r=r.replace(/\/+$/,""),r&&(r+="/"),r},p.getBaseUrl=function(){var e=p.getBaseHref()||p.getBasePageUrl()||p.getRootUrl()
                    return e},p.getPageUrl=function(){var e,t=p.getState(!1,!1),r=(t||{}).url||p.getLocationHref()
                    return e=r.replace(/\/+$/,"").replace(/[^\/]+$/,function(e,t,r){return/\./.test(e)?e:e+"/"})},p.getBasePageUrl=function(){var e=p.getLocationHref().replace(/[#\?].*/,"").replace(/[^\/]+$/,function(e,t,r){return/[^\/]$/.test(e)?"":e}).replace(/\/+$/,"")+"/"
                    return e},p.getFullUrl=function(e,t){var r=e,a=e.substring(0,1)
                    return t="undefined"==typeof t||t,/[a-z]+\:\/\//.test(e)||(r="/"===a?p.getRootUrl()+e.replace(/^\/+/,""):"#"===a?p.getPageUrl().replace(/#.*/,"")+e:"?"===a?p.getPageUrl().replace(/[\?#].*/,"")+e:t?p.getBaseUrl()+e.replace(/^(\.\/)+/,""):p.getBasePageUrl()+e.replace(/^(\.\/)+/,"")),r.replace(/\#$/,"")},p.getShortUrl=function(e){var t=e,r=p.getBaseUrl(),a=p.getRootUrl()
                    return p.emulated.pushState&&(t=t.replace(r,"")),t=t.replace(a,"/"),p.isTraditionalAnchor(t)&&(t="./"+t),t=t.replace(/^(\.\/)+/g,"./").replace(/\#$/,"")},p.getLocationHref=function(e){return e=e||a,e.URL===e.location.href?e.location.href:e.location.href===decodeURIComponent(e.URL)?e.URL:e.location.hash&&decodeURIComponent(e.location.href.replace(/^[^#]+/,""))===e.location.hash?e.location.href:e.URL.indexOf("#")==-1&&e.location.href.indexOf("#")!=-1?e.location.href:e.URL||e.location.href},p.store={},p.idToState=p.idToState||{},p.stateToId=p.stateToId||{},p.urlToId=p.urlToId||{},p.storedStates=p.storedStates||[],p.savedStates=p.savedStates||[],p.normalizeStore=function(){p.store.idToState=p.store.idToState||{},p.store.urlToId=p.store.urlToId||{},p.store.stateToId=p.store.stateToId||{}},p.getState=function(e,t){"undefined"==typeof e&&(e=!0),"undefined"==typeof t&&(t=!0)
                    var r=p.getLastSavedState()
                    return!r&&t&&(r=p.createStateObject()),e&&(r=p.cloneObject(r),r.url=r.cleanUrl||r.url),r},p.getIdByState=function(e){var t,r=p.extractId(e.url)
                    if(!r)if(t=p.getStateString(e),"undefined"!=typeof p.stateToId[t])r=p.stateToId[t]
                    else if("undefined"!=typeof p.store.stateToId[t])r=p.store.stateToId[t]
                    else{for(
                        r=(new Date).getTime()+String(Math.random()).replace(/\D/g,""),"undefined"!=typeof p.idToState[r]||"undefined"!=typeof p.store.idToState[r]
                    )
                        p.stateToId[t]=r,p.idToState[r]=e}return r},p.normalizeState=function(e){var t,r
                    return e&&"object"==typeof e||(e={}),"undefined"!=typeof e.normalized?e:(e.data&&"object"==typeof e.data||(e.data={}),t={},t.normalized=!0,t.title=e.title||"",t.url=p.getFullUrl(e.url?e.url:p.getLocationHref()),t.hash=p.getShortUrl(t.url),t.data=p.cloneObject(e.data),t.id=p.getIdByState(t),t.cleanUrl=t.url.replace(/\??\&_suid.*/,""),t.url=t.cleanUrl,r=!p.isEmptyObject(t.data),(t.title||r)&&p.options.disableSuid!==!0&&(t.hash=p.getShortUrl(t.url).replace(/\??\&_suid.*/,""),/\?/.test(t.hash)||(t.hash+="?"),t.hash+="&_suid="+t.id),t.hashedUrl=p.getFullUrl(t.hash),(p.emulated.pushState||p.bugs.safariPoll)&&p.hasUrlDuplicate(t)&&(t.url=t.hashedUrl),t)},p.createStateObject=function(e,t,r){var a={data:e,title:t,url:r}
                    return a=p.normalizeState(a)},p.getStateById=function(e){e=String(e)
                    var r=p.idToState[e]||p.store.idToState[e]||t
                    return r},p.getStateString=function(e){var t,r,a
                    return t=p.normalizeState(e),r={data:t.data,title:e.title,url:e.url},a=d.stringify(r)},p.getStateId=function(e){var t,r
                    return t=p.normalizeState(e),r=t.id},p.getHashByState=function(e){var t,r
                    return t=p.normalizeState(e),r=t.hash},p.extractId=function(e){var t,r,a,n
                    return n=e.indexOf("#")!=-1?e.split("#")[0]:e,r=/(.*)\&_suid=([0-9]+)$/.exec(n),a=r?r[1]||e:e,t=r?String(r[2]||""):"",t||!1},p.isTraditionalAnchor=function(e){var t=!/[\/\?\.]/.test(e)
                    return t},p.extractState=function(e,t){var r,a,n=null
                    return t=t||!1,r=p.extractId(e),r&&(n=p.getStateById(r)),n||(a=p.getFullUrl(e),r=p.getIdByUrl(a)||!1,r&&(n=p.getStateById(r)),!n&&t&&!p.isTraditionalAnchor(e)&&(n=p.createStateObject(null,null,a))),n},p.getIdByUrl=function(e){var r=p.urlToId[e]||p.store.urlToId[e]||t
                    return r},p.getLastSavedState=function(){return p.savedStates[p.savedStates.length-1]||t},p.getLastStoredState=function(){return p.storedStates[p.storedStates.length-1]||t},p.hasUrlDuplicate=function(e){var t,r=!1
                    return t=p.extractState(e.url),r=t&&t.id!==e.id},p.storeState=function(e){return p.urlToId[e.url]=e.id,p.storedStates.push(p.cloneObject(e)),e},p.isLastSavedState=function(e){var t,r,a,n=!1
                    return p.savedStates.length&&(t=e.id,r=p.getLastSavedState(),a=r.id,n=t===a),n},p.saveState=function(e){return!p.isLastSavedState(e)&&(p.savedStates.push(p.cloneObject(e)),!0)},p.getStateByIndex=function(e){var t=null
                    return t="undefined"==typeof e?p.savedStates[p.savedStates.length-1]:e<0?p.savedStates[p.savedStates.length+e]:p.savedStates[e]},p.getCurrentIndex=function(){var e=null
                    return e=p.savedStates.length<1?0:p.savedStates.length-1},p.getHash=function(e){var t,r=p.getLocationHref(e)
                    return t=p.getHashByUrl(r)},p.unescapeHash=function(e){var t=p.normalizeHash(e)
                    return t=decodeURIComponent(t)},p.normalizeHash=function(e){var t=e.replace(/[^#]*#/,"").replace(/#.*/,"")
                    return t},p.setHash=function(e,t){var r,n
                    return t!==!1&&p.busy()?(p.pushQueue({scope:p,callback:p.setHash,args:arguments,queue:t}),!1):(p.busy(!0),r=p.extractState(e,!0),r&&!p.emulated.pushState?p.pushState(r.data,r.title,r.url,!1):p.getHash()!==e&&(p.bugs.setHash?(n=p.getPageUrl(),p.pushState(null,null,n+"#"+e,!1)):a.location.hash=e),p)},p.escapeHash=function(t){var r=p.normalizeHash(t)
                    return r=e.encodeURIComponent(r),p.bugs.hashEscape||(r=r.replace(/\%21/g,"!").replace(/\%26/g,"&").replace(/\%3D/g,"=").replace(/\%3F/g,"?")),r},p.getHashByUrl=function(e){var t=String(e).replace(/([^#]*)#?([^#]*)#?(.*)/,"$2")
                    return t=p.unescapeHash(t)},p.setTitle=function(e){var t,r=e.title
                    r||(t=p.getStateByIndex(0),t&&t.url===e.url&&(r=t.title||p.options.initialTitle))
                    try{a.getElementsByTagName("title")[0].innerHTML=r.replace("<","&lt
                        ").replace(">","&gt
                        ").replace(" & "," &amp
                        ")}catch(e){}return a.title=r,p},p.queues=[],p.busy=function(e){if("undefined"!=typeof e?p.busy.flag=e:"undefined"==typeof p.busy.flag&&(p.busy.flag=!1),!p.busy.flag){s(p.busy.timeout)
                        var t=function(){var e,r,a
                            if(!p.busy.flag)for(e=p.queues.length-1
                                e>=0
                            --e)r=p.queues[e],0!==r.length&&(a=r.shift(),p.fireQueueItem(a),p.busy.timeout=i(t,p.options.busyDelay))}
                        p.busy.timeout=i(t,p.options.busyDelay)}return p.busy.flag},p.busy.flag=!1,p.fireQueueItem=function(e){return e.callback.apply(e.scope||p,e.args||[])},p.pushQueue=function(e){return p.queues[e.queue||0]=p.queues[e.queue||0]||[],p.queues[e.queue||0].push(e),p},p.queue=function(e,t){return"function"==typeof e&&(e={callback:e}),"undefined"!=typeof t&&(e.queue=t),p.busy()?p.pushQueue(e):p.fireQueueItem(e),p},p.clearQueue=function(){return p.busy.flag=!1,p.queues=[],p},p.stateChanged=!1,p.doubleChecker=!1,p.doubleCheckComplete=function(){return p.stateChanged=!0,p.doubleCheckClear(),p},p.doubleCheckClear=function(){return p.doubleChecker&&(s(p.doubleChecker),p.doubleChecker=!1),p},p.doubleCheck=function(e){return p.stateChanged=!1,p.doubleCheckClear(),p.bugs.ieDoubleCheck&&(p.doubleChecker=i(function(){return p.doubleCheckClear(),p.stateChanged||e(),!0},p.options.doubleCheckInterval)),p},p.safariStatePoll=function(){var t,r=p.extractState(p.getLocationHref())
                    if(!p.isLastSavedState(r))return t=r,t||(t=p.createStateObject()),p.Adapter.trigger(e,"popstate"),p},p.back=function(e){return e!==!1&&p.busy()?(p.pushQueue({scope:p,callback:p.back,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.back(!1)}),f.go(-1),!0)},p.forward=function(e){return e!==!1&&p.busy()?(p.pushQueue({scope:p,callback:p.forward,args:arguments,queue:e}),!1):(p.busy(!0),p.doubleCheck(function(){p.forward(!1)}),f.go(1),!0)},p.go=function(e,t){var r
                    if(e>0)for(r=1
                        r<=e
                    ++r)p.forward(t)
                    else{if(!(e<0))throw new Error("History.go: History.go requires a positive or negative integer passed.")
                        for(r=-1
                            r>=e
                        --r)p.back(t)}return p},p.emulated.pushState){var h=function(){}
                p.pushState=p.pushState||h,p.replaceState=p.replaceState||h}else p.onPopState=function(t,r){var a,n,o=!1,i=!1
                return p.doubleCheckComplete(),a=p.getHash(),a?(n=p.extractState(a||p.getLocationHref(),!0),n?p.replaceState(n.data,n.title,n.url,!1):(p.Adapter.trigger(e,"anchorchange"),p.busy(!1)),p.expectedStateId=!1,!1):(o=p.Adapter.extractEventData("state",t,r)||!1,i=o?p.getStateById(o):p.expectedStateId?p.getStateById(p.expectedStateId):p.extractState(p.getLocationHref()),i||(i=p.createStateObject(null,null,p.getLocationHref())),p.expectedStateId=!1,p.isLastSavedState(i)?(p.busy(!1),!1):(p.storeState(i),p.saveState(i),p.setTitle(i),p.Adapter.trigger(e,"statechange"),p.busy(!1),!0))},p.Adapter.bind(e,"popstate",p.onPopState),p.pushState=function(t,r,a,n){if(p.getHashByUrl(a)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")
                if(n!==!1&&p.busy())return p.pushQueue({scope:p,callback:p.pushState,args:arguments,queue:n}),!1
                p.busy(!0)
                var o=p.createStateObject(t,r,a)
                return p.isLastSavedState(o)?p.busy(!1):(p.storeState(o),p.expectedStateId=o.id,f.pushState(o.id,o.title,o.url),p.Adapter.trigger(e,"popstate")),!0},p.replaceState=function(t,r,a,n){if(p.getHashByUrl(a)&&p.emulated.pushState)throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).")
                if(n!==!1&&p.busy())return p.pushQueue({scope:p,callback:p.replaceState,args:arguments,queue:n}),!1
                p.busy(!0)
                var o=p.createStateObject(t,r,a)
                return p.isLastSavedState(o)?p.busy(!1):(p.storeState(o),p.expectedStateId=o.id,f.replaceState(o.id,o.title,o.url),p.Adapter.trigger(e,"popstate")),!0}
            if(o){try{p.store=d.parse(o.getItem("History.store"))||{}}catch(e){p.store={}}p.normalizeStore()}else p.store={},p.normalizeStore()
            p.Adapter.bind(e,"unload",p.clearAllIntervals),p.saveState(p.storeState(p.extractState(p.getLocationHref(),!0))),o&&(p.onUnload=function(){var e,t,r
                try{e=d.parse(o.getItem("History.store"))||{}}catch(t){e={}}e.idToState=e.idToState||{},e.urlToId=e.urlToId||{},e.stateToId=e.stateToId||{}
                for(t in p.idToState)p.idToState.hasOwnProperty(t)&&(e.idToState[t]=p.idToState[t])
                for(t in p.urlToId)p.urlToId.hasOwnProperty(t)&&(e.urlToId[t]=p.urlToId[t])
                for(t in p.stateToId)p.stateToId.hasOwnProperty(t)&&(e.stateToId[t]=p.stateToId[t])
                p.store=e,p.normalizeStore(),r=d.stringify(e)
                try{o.setItem("History.store",r)}catch(e){if(e.code!==DOMException.QUOTA_EXCEEDED_ERR)throw e
                    o.length&&(o.removeItem("History.store"),o.setItem("History.store",r))}},p.intervalList.push(u(p.onUnload,p.options.storeInterval)),p.Adapter.bind(e,"beforeunload",p.onUnload),p.Adapter.bind(e,"unload",p.onUnload)),p.emulated.pushState||(p.bugs.safariPoll&&p.intervalList.push(u(p.safariStatePoll,p.options.safariPollInterval)),"Apple Computer, Inc."!==n.vendor&&"Mozilla"!==(n.appCodeName||"")||(p.Adapter.bind(e,"hashchange",function(){p.Adapter.trigger(e,"popstate")}),p.getHash()&&p.Adapter.onDomLoad(function(){p.Adapter.trigger(e,"hashchange")})))},(!p.options||!p.options.delayInit)&&p.init()}(window)


},{}],20:[function(require,module,exports){
    L.Control.Elevation=L.Control.extend({options:{position:"topright",theme:"lime-theme",width:600,height:175,margins:{top:10,right:20,bottom:30,left:60},useHeightIndicator:!0,interpolation:"linear",hoverNumber:{decimalsX:3,decimalsY:0,formatter:void 0},xTicks:void 0,yTicks:void 0,collapsed:!1,yAxisMin:void 0,yAxisMax:void 0,forceAxisBounds:!1,controlButton:{iconCssClass:"elevation-toggle-icon",title:"Elevation"},imperial:!1},__mileFactor:.621371,__footFactor:3.28084,onRemove:function(t){this._container=null},onAdd:function(t){this._map=t
        var i=this.options,e=i.margins
        i.xTicks=i.xTicks||Math.round(this._width()/75),i.yTicks=i.yTicks||Math.round(this._height()/30),i.hoverNumber.formatter=i.hoverNumber.formatter||this._formatter
        var a=this._x=d3.scale.linear().range([0,this._width()]),s=this._y=d3.scale.linear().range([this._height(),0]),o=(this._area=d3.svg.area().interpolate(i.interpolation).x(function(t){var i=a(t.dist)
            return t.xDiagCoord=i,i}).y0(this._height()).y1(function(t){return s(t.altitude)}),this._container=L.DomUtil.create("div","elevation"))
        L.DomUtil.addClass(o,i.theme),this._initToggle()
        var r=d3.select(o)
        r.attr("width",i.width)
        var n=r.append("svg")
        n.attr("width",i.width).attr("class","background").attr("height",i.height).append("g").attr("transform","translate("+e.left+","+e.top+")")
        var h=d3.svg.line()
        h=h.x(function(t){return d3.mouse(n.select("g"))[0]}).y(function(t){return this._height()})
        var l=d3.select(this._container).select("svg").select("g")
        this._areapath=l.append("path").attr("class","area")
        var d=this._background=l.append("rect").attr("width",this._width()).attr("height",this._height()).style("fill","none").style("stroke","none").style("pointer-events","all")
        L.Browser.touch?(d.on("touchmove.drag",this._dragHandler.bind(this)).on("touchstart.drag",this._dragStartHandler.bind(this)).on("touchstart.focus",this._mousemoveHandler.bind(this)),L.DomEvent.on(this._container,"touchend",this._dragEndHandler,this)):(d.on("mousemove.focus",this._mousemoveHandler.bind(this)).on("mouseout.focus",this._mouseoutHandler.bind(this)).on("mousedown.drag",this._dragStartHandler.bind(this)).on("mousemove.drag",this._dragHandler.bind(this)),L.DomEvent.on(this._container,"mouseup",this._dragEndHandler,this)),this._xaxisgraphicnode=l.append("g"),this._yaxisgraphicnode=l.append("g"),this._appendXaxis(this._xaxisgraphicnode),this._appendYaxis(this._yaxisgraphicnode)
        var c=this._focusG=l.append("g")
        return this._mousefocus=c.append("svg:line").attr("class","mouse-focus-line").attr("x2","0").attr("y2","0").attr("x1","0").attr("y1","0"),this._focuslabelX=c.append("svg:text").style("pointer-events","none").attr("class","mouse-focus-label-x"),this._focuslabelY=c.append("svg:text").style("pointer-events","none").attr("class","mouse-focus-label-y"),this._data&&this._applyData(),o},_dragHandler:function(){d3.event.preventDefault(),d3.event.stopPropagation(),this._gotDragged=!0,this._drawDragRectangle()},_drawDragRectangle:function(){if(this._dragStartCoords){var t=this._dragCurrentCoords=d3.mouse(this._background.node()),i=Math.min(this._dragStartCoords[0],t[0]),e=Math.max(this._dragStartCoords[0],t[0])
        if(this._dragRectangle||this._dragRectangleG)this._dragRectangle.attr("width",e-i).attr("x",i)
        else{var a=d3.select(this._container).select("svg").select("g")
            this._dragRectangleG=a.append("g"),this._dragRectangle=this._dragRectangleG.append("rect").attr("width",e-i).attr("height",this._height()).attr("x",i).attr("class","mouse-drag").style("pointer-events","none")}}},_resetDrag:function(){this._dragRectangleG&&(this._dragRectangleG.remove(),this._dragRectangleG=null,this._dragRectangle=null,this._hidePositionMarker(),this._map.fitBounds(this._fullExtent))},_dragEndHandler:function(){if(!this._dragStartCoords||!this._gotDragged)return this._dragStartCoords=null,this._gotDragged=!1,void this._resetDrag()
        this._hidePositionMarker()
        var t=this._findItemForX(this._dragStartCoords[0]),i=this._findItemForX(this._dragCurrentCoords[0])
        this._fitSection(t,i),this._dragStartCoords=null,this._gotDragged=!1},_dragStartHandler:function(){d3.event.preventDefault(),d3.event.stopPropagation(),this._gotDragged=!1,this._dragStartCoords=d3.mouse(this._background.node())},_findItemForX:function(t){var i=d3.bisector(function(t){return t.dist}).left,e=this._x.invert(t)
        return i(this._data,e)},_findItemForLatLng:function(t){var i=null,e=1/0
        return this._data.forEach(function(a){var s=t.distanceTo(a.latlng)
            e>s&&(e=s,i=a)}),i},_fitSection:function(t,i){var e=Math.min(t,i),a=Math.max(t,i),s=this._calculateFullExtent(this._data.slice(e,a))
        this._map.fitBounds(s)},_initToggle:function(){var t=this._container
        if(t.setAttribute("aria-haspopup",!0),L.Browser.touch?L.DomEvent.on(t,"click",L.DomEvent.stopPropagation):L.DomEvent.disableClickPropagation(t),this.options.collapsed){this._collapse(),L.Browser.android||L.DomEvent.on(t,"mouseover",this._expand,this).on(t,"mouseout",this._collapse,this)
            var i=this._button=L.DomUtil.create("a","elevation-toggle "+this.options.controlButton.iconCssClass,t)
            i.href="#",i.title=this.options.controlButton.title,L.Browser.touch?L.DomEvent.on(i,"click",L.DomEvent.stop).on(i,"click",this._expand,this):L.DomEvent.on(i,"focus",this._expand,this),this._map.on("click",this._collapse,this)}},_expand:function(){this._container.className=this._container.className.replace(" elevation-collapsed","")},_collapse:function(){L.DomUtil.addClass(this._container,"elevation-collapsed")},_width:function(){var t=this.options
        return t.width-t.margins.left-t.margins.right},_height:function(){var t=this.options
        return t.height-t.margins.top-t.margins.bottom},_formatter:function(t,i,e){var a
        a=0===i?Math.round(t)+"":L.Util.formatNum(t,i)+""
        var s=a.split(".")
        if(s[1]){for(var o=i-s[1].length
            o>0
            o--)s[1]+="0"
            a=s.join(e||".")}return a},_appendYaxis:function(t){var i=this.options
        i.imperial?t.attr("class","y axis").call(d3.svg.axis().scale(this._y).ticks(this.options.yTicks).orient("left")).append("text").attr("x",-37).attr("y",3).style("text-anchor","end").text("ft"):t.attr("class","y axis").call(d3.svg.axis().scale(this._y).ticks(this.options.yTicks).orient("left")).append("text").attr("x",-45).attr("y",3).style("text-anchor","end").text("m")},_appendXaxis:function(t){var i=this.options
        i.imperial?t.attr("class","x axis").attr("transform","translate(0,"+this._height()+")").call(d3.svg.axis().scale(this._x).ticks(this.options.xTicks).orient("bottom")).append("text").attr("x",this._width()+10).attr("y",15).style("text-anchor","end").text("mi"):t.attr("class","x axis").attr("transform","translate(0,"+this._height()+")").call(d3.svg.axis().scale(this._x).ticks(this.options.xTicks).orient("bottom")).append("text").attr("x",this._width()+20).attr("y",15).style("text-anchor","end").text("km")},_updateAxis:function(){this._xaxisgraphicnode.selectAll("g").remove(),this._xaxisgraphicnode.selectAll("path").remove(),this._xaxisgraphicnode.selectAll("text").remove(),this._yaxisgraphicnode.selectAll("g").remove(),this._yaxisgraphicnode.selectAll("path").remove(),this._yaxisgraphicnode.selectAll("text").remove(),this._appendXaxis(this._xaxisgraphicnode),this._appendYaxis(this._yaxisgraphicnode)},_mouseoutHandler:function(){this._hidePositionMarker()},_hidePositionMarker:function(){this._marker&&(this._map.removeLayer(this._marker),this._marker=null),this._mouseHeightFocus&&(this._mouseHeightFocus.style("visibility","hidden"),this._mouseHeightFocusLabel.style("visibility","hidden")),this._pointG&&this._pointG.style("visibility","hidden"),this._focusG.style("visibility","hidden")},_mousemoveHandler:function(t,i,e){if(this._data&&0!==this._data.length){var a=d3.mouse(this._background.node()),s=this.options,o=this._data[this._findItemForX(a[0])],r=o.altitude,n=o.dist,h=o.latlng,l=s.hoverNumber.formatter(r,s.hoverNumber.decimalsY)
        s.hoverNumber.formatter(n,s.hoverNumber.decimalsX),this._showDiagramIndicator(o,a[0])
        var d=this._map.latLngToLayerPoint(h)
        if(s.useHeightIndicator){if(!this._mouseHeightFocus){var c=d3.select(".leaflet-overlay-pane svg").append("g")
            this._mouseHeightFocus=c.append("svg:line").attr("class",s.theme+" height-focus line").attr("x2",0).attr("y2",0).attr("x1",0).attr("y1",0)
            var _=this._pointG=c.append("g")
            _.append("svg:circle").attr("r",6).attr("cx",0).attr("cy",0).attr("class",s.theme+" height-focus circle-lower"),this._mouseHeightFocusLabel=c.append("svg:text").attr("class",s.theme+" height-focus-label").style("pointer-events","none")}var u=this._height()/this._maxElevation*r,g=d.y-u
            this._mouseHeightFocus.attr("x1",d.x).attr("x2",d.x).attr("y1",d.y).attr("y2",g).style("visibility","visible"),this._pointG.attr("transform","translate("+d.x+","+d.y+")").style("visibility","visible"),s.imperial?this._mouseHeightFocusLabel.attr("x",d.x).attr("y",g).text(l+" ft").style("visibility","visible"):this._mouseHeightFocusLabel.attr("x",d.x).attr("y",g).text(l+" m").style("visibility","visible")}else this._marker?this._marker.setLatLng(h):this._marker=new L.Marker(h).addTo(this._map)}},_addGeoJSONData:function(t){var i=this.options
        if(t){for(var e=this._data||[],a=this._dist||0,s=this._maxElevation||0,o=0
            o<t.length
            o++){var r=new L.LatLng(t[o][1],t[o][0]),n=new L.LatLng(t[o?o-1:0][1],t[o?o-1:0][0]),h=i.imperial?r.distanceTo(n)*this.__mileFactor:r.distanceTo(n)
                a+=Math.round(h/1e3*1e5)/1e5,s=s<t[o][2]?t[o][2]:s,e.push({dist:a,altitude:i.imperial?t[o][2]*this.__footFactor:t[o][2],x:t[o][0],y:t[o][1],latlng:r})}this._dist=a,this._data=e,s=i.imperial?s*this.__footFactor:s,this._maxElevation=s}},_addGPXdata:function(t){var i=this.options
        if(t){for(var e=this._data||[],a=this._dist||0,s=this._maxElevation||0,o=0
            o<t.length
            o++){var r=t[o],n=t[o?o-1:0],h=i.imperial?r.distanceTo(n)*this.__mileFactor:r.distanceTo(n)
                a+=Math.round(h/1e3*1e5)/1e5,s=s<r.meta.ele?r.meta.ele:s,e.push({dist:a,altitude:i.imperial?r.meta.ele*this.__footFactor:r.meta.ele,x:r.lng,y:r.lat,latlng:r})}this._dist=a,this._data=e,s=i.imperial?s*this.__footFactor:s,this._maxElevation=s}},_addData:function(t){var i,e=t&&t.geometry&&t.geometry
        if(e)switch(e.type){case"LineString":this._addGeoJSONData(e.coordinates)
            break
            case"MultiLineString":for(i=0
                i<e.coordinates.length
                i++)this._addGeoJSONData(e.coordinates[i])
                break
            default:throw new Error("Invalid GeoJSON object.")}var a=t&&"FeatureCollection"===t.type
        if(a)for(i=0
            i<t.features.length
        i++)this._addData(t.features[i])
        t&&t._latlngs&&this._addGPXdata(t._latlngs)},_calculateFullExtent:function(t){if(!t||t.length<1)throw new Error("no data in parameters")
        var i=new L.latLngBounds(t[0].latlng,t[0].latlng)
        return t.forEach(function(t){i.extend(t.latlng)}),i},addData:function(t,i){this._addData(t),this._container&&this._applyData(),null===i&&t.on&&(i=t),i&&i.on("mousemove",this._handleLayerMouseOver.bind(this))},_handleLayerMouseOver:function(t){if(this._data&&0!==this._data.length){var i=t.latlng,e=this._findItemForLatLng(i)
        if(e){var a=e.xDiagCoord
            this._showDiagramIndicator(e,a)}}},_showDiagramIndicator:function(t,i){var e=this.options
        this._focusG.style("visibility","visible"),this._mousefocus.attr("x1",i).attr("y1",0).attr("x2",i).attr("y2",this._height()).classed("hidden",!1)
        var a=t.altitude,s=t.dist,o=(t.latlng,e.hoverNumber.formatter(a,e.hoverNumber.decimalsY)),r=e.hoverNumber.formatter(s,e.hoverNumber.decimalsX)
        e.imperial?(this._focuslabelX.attr("x",i).text(o+" ft"),this._focuslabelY.attr("y",this._height()-5).attr("x",i).text(r+" mi")):(this._focuslabelX.attr("x",i).text(o+" m"),this._focuslabelY.attr("y",this._height()-5).attr("x",i).text(r+" km"))},_applyData:function(){var t=d3.extent(this._data,function(t){return t.dist}),i=d3.extent(this._data,function(t){return t.altitude}),e=this.options
        void 0!==e.yAxisMin&&(e.yAxisMin<i[0]||e.forceAxisBounds)&&(i[0]=e.yAxisMin),void 0!==e.yAxisMax&&(e.yAxisMax>i[1]||e.forceAxisBounds)&&(i[1]=e.yAxisMax),this._x.domain(t),this._y.domain(i),this._areapath.datum(this._data).attr("d",this._area),this._updateAxis(),this._fullExtent=this._calculateFullExtent(this._data)},_clearData:function(){this._data=null,this._dist=null,this._maxElevation=null},clear:function(){this._clearData(),this._areapath&&(this._areapath.attr("d","M0 0"),this._x.domain([0,1]),this._y.domain([0,1]),this._updateAxis())},hide:function(){this._container.style.display="none"},show:function(){this._container.style.display="block"}}),L.control.elevation=function(t){return new L.Control.Elevation(t)}


},{}],21:[function(require,module,exports){
    L.NumberedDivIcon=L.Icon.extend({options:{iconUrl:"./img/marker_hole.png",number:"",shadowUrl:null,iconSize:new L.Point(25,41),iconAnchor:new L.Point(12,40),popupAnchor:new L.Point(0,-33),shadowSize:new L.Point(50,-64),shadowAnchor:new L.Point(4,-62),className:"leaflet-div-icon"},createIcon:function(){var n=document.createElement("div"),e=this._createImg(this.options.iconUrl),o=document.createElement("div")
        return o.setAttribute("class","number"),o.innerHTML=this.options.number||"",n.appendChild(e),n.appendChild(o),this._setIconStyles(n,"icon"),n},createShadow:function(){return null}})


},{}],22:[function(require,module,exports){
    (function (global){
        function initFromParams(e,t){ghRequest.init(e)
            var o=new Flatpickr(document.getElementById("input_date_0"),{defaultDate:new Date,allowInput:!0,minuteIncrement:15,time_24hr:!0,enableTime:!0})
            ghRequest.getEarliestDepartureTime()&&o.setDate(ghRequest.getEarliestDepartureTime())
            var r,a=0
            if(e.point)for(var n=0
                n<e.point.length
            n++)""!==e.point[n]&&(a++,r=n)
            var s=e.point&&a>=2
            s?resolveCoords(e.point,t):e.point&&1===a&&(ghRequest.route.set(e.point[r],r,!0),resolveIndex(r).done(function(){mapLayer.focus(ghRequest.route.getIndex(r),15,r)}))}function resolveCoords(e,t){for(var o=0,r=e.length
            o<r
            o++){var a=e[o],n=ghRequest.route.getIndex(o)
                n&&a===n.input&&n.isResolved()||ghRequest.route.set(a,o,!0)}checkInput(),ghRequest.route.isResolved()?(resolveAll(),routeLatLng(ghRequest,t)):$.when.apply($,resolveAll()).done(function(){routeLatLng(ghRequest,t)})}function getToFrom(e){return 0===e?FROM:e===ghRequest.route.size()-1?TO:-1}function checkInput(){var e=$("#pointTemplate").html(),t=ghRequest.route.size()
            $("#locationpoints > div.pointDiv").length>t&&$("#locationpoints > div.pointDiv:gt("+(t-1)+")").remove(),$("#locationpoints .pointDelete").off()
            for(var o=function(){var e=$(this).parent().data("index")
                ghRequest.route.removeSingle(e),mapLayer.clearLayers(),routeLatLng(ghRequest,!1)},r=0
                r<t
            r++){var a=$("#locationpoints > div.pointDiv").eq(r)
                0===a.length&&($("#locationpoints > div.pointAdd").before(translate.nanoTemplate(e,{id:r})),a=$("#locationpoints > div.pointDiv").eq(r))
                var n=getToFrom(r)
                if(a.data("index",r),a.find(".pointFlag").attr("src",n===FROM?"img/marker-small-green.png":n===TO?"img/marker-small-red.png":"img/marker-small-blue.png"),t>2?a.find(".pointDelete").click(o).prop("disabled",!1).removeClass("ui-state-disabled"):a.find(".pointDelete").prop("disabled",!0).addClass("ui-state-disabled"),autocomplete.showListForIndex(ghRequest,routeIfAllResolved,r),translate.isI18nIsInitialized()){var s=a.find(".pointInput")
                    0===r?$(s).attr("placeholder",translate.tr("from_hint")):r===t-1?$(s).attr("placeholder",translate.tr("to_hint")):$(s).attr("placeholder",translate.tr("via_hint"))}}}function setToStart(e){var t=e.relatedTarget.getLatLng(),o=ghRequest.route.getIndexByCoord(t)
            ghRequest.route.move(o,0),routeIfAllResolved()}function setToEnd(e){var t=e.relatedTarget.getLatLng(),o=ghRequest.route.getIndexByCoord(t)
            ghRequest.route.move(o,-1),routeIfAllResolved()}function setStartCoord(e){ghRequest.route.set(e.latlng.wrap(),0),resolveFrom(),routeIfAllResolved()}function setIntermediateCoord(e){var t=mapLayer.getSubLayers("route"),o=t.map(function(e){return{coordinates:e.getLatLngs(),wayPoints:e.feature.properties.snapped_waypoints.coordinates.map(function(e){return L.latLng(e[1],e[0])})}}),r=routeManipulation.getIntermediatePointIndex(o,e.latlng)
            ghRequest.route.add(e.latlng.wrap(),r),resolveIndex(r),routeIfAllResolved()}function deleteCoord(e){var t=e.relatedTarget.getLatLng()
            ghRequest.route.removeSingle(t),mapLayer.clearLayers(),routeLatLng(ghRequest,!1)}function setEndCoord(e){var t=ghRequest.route.size()-1
            ghRequest.route.set(e.latlng.wrap(),t),resolveTo(),routeIfAllResolved()}function routeIfAllResolved(e){return!!ghRequest.route.isResolved()&&(routeLatLng(ghRequest,e),!0)}function setFlag(e,t){if(e.lat){var o=getToFrom(t),r=mapLayer.createMarker(t,e,setToEnd,setToStart,deleteCoord,ghRequest)
            r._openPopup=r.openPopup,r.openPopup=function(){var e,t=this.getLatLng(),o=ghRequest.route.getIndexFromCoord(t)
                if(o.resolvedList&&o.resolvedList[0]&&o.resolvedList[0].locationDetails){var r=o.resolvedList[0].locationDetails
                    e=format.formatAddress(r),this._popup.setContent(e).update()}this._openPopup()}
            var a={text:translate.tr("set_start"),icon:"./img/marker-small-green.png",callback:setToStart,index:1}
            o===-1&&r.options.contextmenuItems.push(a),r.on("dragend",function(e){mapLayer.clearLayers()
                var o=e.target.getLatLng()
                autocomplete.hide(),ghRequest.route.getIndex(t).setCoord(o.lat,o.lng),resolveIndex(t),ghRequest.do_zoom=!1,routeLatLng(ghRequest,!1)})}}function resolveFrom(){return resolveIndex(0)}function resolveTo(){return resolveIndex(ghRequest.route.size()-1)}function resolveIndex(e){return setFlag(ghRequest.route.getIndex(e),e),0===e?ghRequest.to.isResolved()?mapLayer.setDisabledForMapsContextMenu("start",!1):mapLayer.setDisabledForMapsContextMenu("start",!0):e===ghRequest.route.size()-1&&(ghRequest.from.isResolved()?mapLayer.setDisabledForMapsContextMenu("end",!1):mapLayer.setDisabledForMapsContextMenu("end",!0)),nominatim.resolve(e,ghRequest.route.getIndex(e))}function resolveAll(){for(var e=[],t=0,o=ghRequest.route.size()
            t<o
            t++)e[t]=resolveIndex(t)
            return ghRequest.isPublicTransit()&&ghRequest.setEarliestDepartureTime(moment($("#input_date_0").val(),"YYYY-MM-DD HH:mm").toISOString()),e}function flagAll(){for(var e=0,t=ghRequest.route.size()
            e<t
            e++)setFlag(ghRequest.route.getIndex(e),e)}function routeLatLng(e,t){var o=e.do_zoom
            e.do_zoom=!0
            var r=e.createHistoryURL()+"&layer="+tileLayers.activeLayerName
            if(!t&&History.enabled){var a=urlTools.parseUrl(r)
                return console.log(a),a.do_zoom=o,a.mathRandom=Math.random(),void History.pushState(a,messages.browserTitle,r)}var n=$("#info")
            n.empty(),n.show()
            var s=$("<div class='route_results'/>")
            n.append(s),mapLayer.clearElevation(),mapLayer.clearLayers(),flagAll(),mapLayer.setDisabledForMapsContextMenu("intermediate",!1),$("#vehicles button").removeClass("selectvehicle"),$("button#"+e.getVehicle().toLowerCase()).addClass("selectvehicle")
            var i=e.createURL()
            s.html('<img src="img/indicator.gif"/> Search Route ...'),e.doRequest(i,function(t){function a(e,t,o,r,a,n){return function(){var i=e[t]
                mapLayer.eachLayer(function(e){if(e.setStyle){var t=e.feature===i
                    e.setStyle(t?d:c),t&&(L.Browser.ie||L.Browser.opera||e.bringToFront())}}),a&&(mapLayer.clearElevation(),mapLayer.addElevation(i,n)),l.find("li").removeClass("current"),s.find("div").removeClass("current"),o.addClass("current"),r.addClass("current")}}if(s.html(""),t.message){var n=t.message
                if(console.log(n),t.hints)for(var i=0
                    i<t.hints.length
                i++)s.append("<div class='error'>"+t.hints[i].message+"</div>")
            else s.append("<div class='error'>"+n+"</div>")}else{var l=$("<ul id='route_result_tabs'/>")
                t.paths.length>1&&(s.append(l),s.append("<div class='clear'/>"))
                var u,p={color:"#00cc33",weight:5,opacity:.6},d={color:"#00cc33",weight:6,opacity:.8},c={color:"darkgray",weight:6,opacity:.8},g=[],h=function(e){return function(){mapLayer.updateScale(e),ghRequest.useMiles=e,resolveAll(),routeLatLng(ghRequest)}}
                if(t.paths.length>0&&t.paths[0].points_order){mapLayer.clearLayers()
                    for(var m=t.paths[0].points_order,v=0
                        v<m.length
                    v++)setFlag(ghRequest.route.getIndex(m[v]),v)}for(var f=0
                    f<t.paths.length
                f++){var q=$("<li>").append(f+1+"<img class='alt_route_img' src='img/alt_route.png'/>")
                    0===f&&(u=q),l.append(q)
                    var y=t.paths[f],R=0===f?p:c,b={type:"Feature",geometry:y.points,properties:{style:R,name:"route",snapped_waypoints:y.snapped_waypoints}}
                    g.push(b),mapLayer.addDataToRoutingLayer(b)
                    var x=$("<div class='route_result_tab'>")
                    s.append(x),q.click(a(g,f,q,x,e.hasElevation(),e.useMiles))
                    var I=$("<div class='route_description'>")
                    y.description&&y.description.length>0&&(I.text(y.description),I.append("<br/>"))
                    var _,w=translate.createDistanceString(y.distance,e.useMiles)
                    if(e.isPublicTransit()){var T=moment(ghRequest.getEarliestDepartureTime()).add(y.time,"milliseconds").format("LT")
                        _=y.transfers>=0?translate.tr("pt_route_info",[T,y.transfers,w]):translate.tr("pt_route_info_walking",[T,w])}else{var C=translate.createTimeString(y.time)
                        _=translate.tr("route_info",[w,C])}I.append(_)
                    var M=$("<button class='plain_text_button "+(e.useMiles?"gray":"")+"'>")
                    M.text(translate.tr2("km_abbr")),M.click(h(!1))
                    var k=$("<button class='plain_text_button "+(e.useMiles?"":"gray")+"'>")
                    k.text(translate.tr2("mi_abbr")),k.click(h(!0))
                    var F=$("<span style='float: right
                    '>")
                    if(F.append(M),F.append("|"),F.append(k),I.append(F),e.hasElevation()&&I.append(translate.createEleInfoString(y.ascend,y.descend,e.useMiles)),I.append($("<div style='clear:both'/>")),x.append(I),y.instructions){var j=require("./instructions.js")
                        x.append(j.create(mapLayer,y,r,e))}}u.click(),mapLayer.adjustMapSize()
                var D=t.paths[0]
                if(D.bbox&&o){var S=D.bbox[0],A=D.bbox[1],E=D.bbox[2],z=D.bbox[3],P=new L.LatLngBounds(new L.LatLng(A,S),new L.LatLng(z,E))
                    mapLayer.fitMapToBounds(P)}$(".defaulting").each(function(e,t){$(t).css("color","black")})}})}function mySubmit(){var e,t,o,r=[],a=!0,n=$("#locationpoints > div.pointDiv > input.pointInput"),s=n.size
            if($.each(n,function(n){0===n?(e=$(this).val(),e!==translate.tr("from_hint")&&""!==e?r.push(e):a=!1):n===s-1?(t=$(this).val(),t!==translate.tr("to_hint")&&""!==t?r.push(t):a=!1):(o=$(this).val(),o!==translate.tr("via_hint")&&""!==o?r.push(o):a=!1)}),a&&e!==translate.tr("from_hint"))return t===translate.tr("to_hint")?(ghRequest.from.setStr(e),void $.when(resolveFrom()).done(function(){mapLayer.focus(ghRequest.from,null,0)})):void(a&&resolveCoords(r))}function isProduction(){return host.indexOf("graphhopper.com")>0}global.d3=require("d3")
        var Flatpickr=require("flatpickr"),L=require("leaflet")
        require("leaflet-contextmenu"),require("leaflet-loading")
        var moment=require("moment")
        require("./lib/leaflet.elevation-0.0.4.min.js"),require("./lib/leaflet_numbered_markers.js"),global.jQuery=require("jquery"),global.$=global.jQuery,require("./lib/jquery-ui-custom-1.12.0.min.js"),require("./lib/jquery.history.js"),require("./lib/jquery.autocomplete.js")
        var ghenv=require("./config/options.js").options
        console.log(ghenv.environment)
        var GHInput=require("./graphhopper/GHInput.js"),GHRequest=require("./graphhopper/GHRequest.js"),host=ghenv.routing.host
        host||(host=""===location.port?location.protocol+"//"+location.hostname:location.protocol+"//"+location.hostname+":"+location.port)
        var AutoComplete=require("./autocomplete.js")
        if("development"===ghenv.environment)var autocomplete=AutoComplete.prototype.createStub()
        else var autocomplete=new AutoComplete(ghenv.geocoding.host,ghenv.geocoding.api_key)
        var mapLayer=require("./map.js"),nominatim=require("./nominatim.js"),routeManipulation=require("./routeManipulation.js"),gpxExport=require("./gpxexport.js"),messages=require("./messages.js"),translate=require("./translate.js"),format=require("./tools/format.js"),urlTools=require("./tools/url.js"),vehicleTools=require("./tools/vehicle.js"),tileLayers=require("./config/tileLayers.js"),debug=!1,ghRequest=new GHRequest(host,ghenv.routing.api_key),bounds={},metaVersionInfo
        global.window&&(window.log=function(){log.history=log.history||[],log.history.push(arguments),this.console&&debug&&console.log(Array.prototype.slice.call(arguments))}),$(document).ready(function(e){jQuery.support.cors=!0,gpxExport.addGpxExport(ghRequest),isProduction()&&$("#hosting").show()
            var t=window.History
            t.enabled&&t.Adapter.bind(window,"statechange",function(){var e=t.getState()
                console.log(e),initFromParams(e.data,!0)}),$("#locationform").submit(function(e){e.preventDefault(),mySubmit()})
            var o=urlTools.parseUrlWithHisto()
            $.when(ghRequest.fetchTranslationMap(o.locale),ghRequest.getInfo()).then(function(e,t){function r(e,t){var o=$("<button class='vehicle-btn' title='"+translate.tr(e)+"'/>")
                return t&&o.hide(),o.attr("id",e),o.html("<img src='img/"+e+".png' alt='"+translate.tr(e)+"'></img>"),o.click(function(){ghRequest.initVehicle(e),resolveAll(),routeLatLng(ghRequest)}),o}var a=e[0]
                autocomplete.setLocale(a.locale),ghRequest.setLocale(a.locale),translate.init(a)
                var n=t[0],s=n.bbox
                bounds.initialized=!0,bounds.minLon=s[0],bounds.minLat=s[1],bounds.maxLon=s[2],bounds.maxLat=s[3],nominatim.setBounds(bounds)
                var i=$("#vehicles")
                if(n.features){ghRequest.features=n.features
                    var l={car:1,foot:2,bike:3,motorcycle:1e4},u=o.vehicle&&(!l[o.vehicle]||l[o.vehicle]>3),p=vehicleTools.getSortedVehicleKeys(n.features,l)
                    p.length>0&&ghRequest.initVehicle(p[0]),ghRequest.isPublicTransit()||$(".time_input").hide()
                    var d=[]
                    for(var c in p){var g=r(p[c].toLowerCase(),!u&&c>2)
                        i.append(g),c>2&&d.push(g)}if(!u&&p.length>3){var h=$("<a id='more-vehicle-btn'> ...</a>").click(function(){h.hide()
                        for(var e in d)d[e].show()})
                        i.append($("<a class='vehicle-info-link' href='https://graphhopper.com/api/1/docs/supported-vehicle-profiles/'>?</a>")),i.append(h)}}metaVersionInfo=messages.extractMetaVersionInfo(n),mapLayer.initMap(bounds,setStartCoord,setIntermediateCoord,setEndCoord,o.layer,o.use_miles),initFromParams(o,!0),checkInput()},function(e){console.log(e),$("#error").html('GraphHopper API offline? <a href="http://graphhopper.com/maps">Refresh</a><br/>Status: '+e.statusText+"<br/>"+host),bounds={minLon:-180,minLat:-90,maxLon:180,maxLat:90},nominatim.setBounds(bounds),mapLayer.initMap(bounds,setStartCoord,setIntermediateCoord,setEndCoord,o.layer,o.use_miles)}),$(window).resize(function(){mapLayer.adjustMapSize()}),$("#locationpoints").sortable({items:".pointDiv",cursor:"n-resize",containment:"parent",handle:".pointFlag",update:function(e,t){var o=$(t.item[0]).data("index")
                sortable_items=$("#locationpoints > div.pointDiv"),$(sortable_items).each(function(e){var t=$(this).data("index")
                    if(o===t)return ghRequest.route.move(t,e),routeIfAllResolved()||checkInput(),!1})}}),$("#locationpoints > div.pointAdd").click(function(){ghRequest.route.add(new GHInput),checkInput()}),checkInput()})
        var FROM="from",TO="to"
        module.exports.setFlag=setFlag

    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./autocomplete.js":8,"./config/options.js":9,"./config/tileLayers.js":10,"./gpxexport.js":11,"./graphhopper/GHInput.js":12,"./graphhopper/GHRequest.js":13,"./instructions.js":16,"./lib/jquery-ui-custom-1.12.0.min.js":17,"./lib/jquery.autocomplete.js":18,"./lib/jquery.history.js":19,"./lib/leaflet.elevation-0.0.4.min.js":20,"./lib/leaflet_numbered_markers.js":21,"./map.js":23,"./messages.js":24,"./nominatim.js":25,"./routeManipulation.js":26,"./tools/format.js":27,"./tools/url.js":29,"./tools/vehicle.js":30,"./translate.js":31,"d3":1,"flatpickr":2,"jquery":3,"leaflet":6,"leaflet-contextmenu":4,"leaflet-loading":5,"moment":7}],23:[function(require,module,exports){
    function adjustMapSize(){var e=$("#map"),t=$(window).width()-280
        t<400?(t=400,e.attr("style","position: relative
            float: right
        ")):e.attr("style","position: absolute
        right: 0
        ")
        var a=$(window).height()
        a<500&&(a=500),e.width(t).height(a),$("#input").height(a)
        var n=a-60-$("#input_header").height()-$("#footer").height()-$(".route_description").height(),o=$("#route_result_tabs li").height()
        isNaN(o)||(n-=o),$(".instructions_info").css("max-height",n)}function initMap(e,t,a,n,o,r){adjustMapSize()
        var i=tileLayers.selectLayer(o)
        defaultContextmenuItems=[{separator:!0,index:10},{text:translate.tr("show_coords"),callback:function(e){alert(e.latlng.lat+","+e.latlng.lng)},index:11},{text:translate.tr("center_map"),callback:function(e){map.panTo(e.latlng)},index:12}],map=L.map("map",{layers:[i],minZoom:2,contextmenu:!0,contextmenuItems:defaultContextmenuItems,zoomControl:!1,loadingControl:!1})
        var l={text:translate.tr("set_start"),icon:"./img/marker-small-green.png",callback:t,index:0},m={text:translate.tr("set_intermediate"),icon:"./img/marker-small-blue.png",callback:a,disabled:!0,index:1},s={text:translate.tr("set_end"),icon:"./img/marker-small-red.png",callback:n,index:2}
        menuStart=map.contextmenu.insertItem(l,l.index),menuIntermediate=map.contextmenu.insertItem(m,m.index),menuEnd=map.contextmenu.insertItem(s,s.index)
        var u=new L.Control.Zoom({position:"topleft",zoomInTitle:translate.tr("zoom_in"),zoomOutTitle:translate.tr("zoom_out")}).addTo(map)
        new L.Control.loading({zoomControl:u}).addTo(map),L.control.layers(tileLayers.getAvailableTileLayers()).addTo(map),map.on("baselayerchange",function(e){e.name&&(tileLayers.activeLayerName=e.name,$("#export-link a").attr("href",function(e,t){return t.replace(/(layer=)([\w\s]+)/,"$1"+tileLayers.activeLayerName)}))}),scaleControl=L.control.scale(r?{metric:!1}:{imperial:!1}).addTo(map),map.fitBounds(new L.LatLngBounds(new L.LatLng(e.minLat,e.minLon),new L.LatLng(e.maxLat,e.maxLon))),map.attributionControl.setPrefix(!1)
        var d={color:"black",weight:2,opacity:.3},c={type:"Feature",geometry:{type:"LineString",coordinates:[[e.minLon,e.minLat],[e.maxLon,e.minLat],[e.maxLon,e.maxLat],[e.minLon,e.maxLat],[e.minLon,e.minLat]]}}
        e.initialized&&L.geoJson(c,{style:d}).addTo(map),routingLayer=L.geoJson().addTo(map),routingLayer.options={style:function(e){return e.properties&&e.properties.style},contextmenu:!0,contextmenuItems:defaultContextmenuItems.concat([{text:translate.tr("route"),disabled:!0,index:0},{text:translate.tr("set_intermediate"),icon:"./img/marker-small-blue.png",callback:a,index:1}]),contextmenuInheritItems:!1}}function focus(e,t,a){e.lat&&e.lng&&(t||(t=11),routingLayer.clearLayers(),map.setView(new L.LatLng(e.lat,e.lng),t),mainTemplate.setFlag(e,a))}function getToFrom(e,t){return 0===e?FROM:e===t.route.size()-1?TO:-1}var mainTemplate=require("./main-template.js"),tileLayers=require("./config/tileLayers.js"),translate=require("./translate.js"),routingLayer,map,menuStart,menuIntermediate,menuEnd,elevationControl=null,defaultContextmenuItems
    module.exports.clearLayers=function(){routingLayer.clearLayers()},module.exports.getRoutingLayer=function(){return routingLayer},module.exports.getSubLayers=function(e){var t=routingLayer.getLayers()
        return t.filter(function(t){return t.feature&&t.feature.properties&&t.feature.properties.name===e})},module.exports.addDataToRoutingLayer=function(e){routingLayer.addData(e)},module.exports.eachLayer=function(e){routingLayer.eachLayer(e)},module.exports.setDisabledForMapsContextMenu=function(e,t){"start"===e&&map.contextmenu.setDisabled(menuStart,t),"end"===e&&map.contextmenu.setDisabled(menuEnd,t),"intermediate"===e&&map.contextmenu.setDisabled(menuIntermediate,t)},module.exports.fitMapToBounds=function(e){map.fitBounds(e,{padding:[42,42]})},module.exports.removeLayerFromMap=function(e){map.removeLayer(e)},module.exports.focus=focus,module.exports.initMap=initMap,module.exports.adjustMapSize=adjustMapSize,module.exports.addElevation=function(e,t){null===elevationControl&&(elevationControl=L.control.elevation({position:"bottomright",theme:"white-theme",width:450,height:125,margins:{top:10,right:20,bottom:30,left:60},useHeightIndicator:!0,interpolation:"linear",hoverNumber:{decimalsX:2,decimalsY:0,formatter:void 0},xTicks:void 0,yTicks:void 0,collapsed:!1}),elevationControl.addTo(map)),elevationControl.options.imperial=t,elevationControl.addData(e)},module.exports.clearElevation=function(){elevationControl&&elevationControl.clear()},module.exports.getMap=function(){return map},module.exports.updateScale=function(e){if(null!==scaleControl){scaleControl.remove()
        var t=e?{metric:!1}:{imperial:!1}
        scaleControl=L.control.scale(t).addTo(map)}}
    var FROM="from",TO="to",iconFrom=L.icon({iconUrl:"./img/marker-icon-green.png",shadowSize:[50,64],shadowAnchor:[4,62],iconAnchor:[12,40]}),iconTo=L.icon({iconUrl:"./img/marker-icon-red.png",shadowSize:[50,64],shadowAnchor:[4,62],iconAnchor:[12,40]})
    module.exports.createMarker=function(e,t,a,n,o,r){var i=getToFrom(e,r)
        return L.marker([t.lat,t.lng],{icon:i===FROM?iconFrom:i===TO?iconTo:new L.NumberedDivIcon({number:e}),draggable:!0,contextmenu:!0,contextmenuItems:defaultContextmenuItems.concat([{text:translate.tr("marker")+" "+(i===FROM?translate.tr("start_label"):i===TO?translate.tr("end_label"):translate.tr("intermediate_label")+" "+e),disabled:!0,index:0},{text:translate.tr(i!==TO?"set_end":"set_start"),icon:i!==TO?"./img/marker-small-red.png":"./img/marker-small-green.png",callback:i!==TO?a:n,index:2},{text:translate.tr("delete_from_route"),callback:o,disabled:i!==-1&&2===r.route.size(),index:3}]),contextmenuInheritItems:!1}).addTo(routingLayer).bindPopup(i===FROM?translate.tr("start_label"):i===TO?translate.tr("end_label"):translate.tr("intermediate_label")+" "+e)}


},{"./config/tileLayers.js":10,"./main-template.js":22,"./translate.js":31}],24:[function(require,module,exports){
    module.exports.extractMetaVersionInfo=function(e){return metaVersionInfo="",e.data_date&&(metaVersionInfo+="<br/>Data date: "+e.data_date),e.import_date&&(metaVersionInfo+="<br/>Import date: "+e.import_date),e.prepare_date&&(metaVersionInfo+="<br/>Prepare date: "+e.prepare_date),e.version&&(metaVersionInfo+="<br/>GH version: "+e.version),e.build_date&&(metaVersionInfo+="<br/>Jar date: "+e.build_date),metaVersionInfo},module.exports.getSignName=function(e){return e===-7?"keep_left":e===-3?"sharp_left":e===-2?"left":e===-1?"slight_left":0===e?"continue":1===e?"slight_right":2===e?"right":3===e?"sharp_right":4===e?"marker-icon-red":5===e?"marker-icon-blue":6===e?"roundabout":7===e?"keep_right":101===e?"pt_start_trip":102===e?"pt_transfer_to":103===e?"pt_end_trip":"unknown"},module.exports.browserTitle="GraphHopper Maps - Walking Directions"


},{}],25:[function(require,module,exports){
    function createAmbiguityList(o){o.error="",o.resolvedList=[]
        var n=3e3
        if(o.isResolved()){var r=$.Deferred()
            return r.resolve([o]),r}if(o.lat&&o.lng){var t=nominatimReverseURL+"?lat="+o.lat+"&lon="+o.lng+"&format=json&zoom=16"
            return $.ajax({url:t,type:"GET",dataType:"json",timeout:n}).then(function(n){if(!n)return o.error="No description found for coordinate",[o]
                var r=n.address,t={}
                return t.lat=o.lat,t.lng=o.lng,t.bbox=n.boundingbox,t.positionType=n.type,t.locationDetails=format.formatLocationEntry(r),o.resolvedList.push(t),[o]},function(n){return console.log("[nominatim_reverse] Error while looking up coordinate lat="+o.lat+"&lon="+o.lng),o.error="Problem while looking up location.",[o]})}return doGeoCoding(o.input,10,n).then(function(n){if(!n||0===n.length)return o.error="No area description found",[o]
            var r,t=n[0].importance
            for(var e in n){var i=n[e]
                if(t-i.importance>.4)break
                if(!r||JSON.stringify(r)!==JSON.stringify(i.address)){r=i.address,t=i.importance
                    var a={}
                    a.lat=mathTools.round(i.lat),a.lng=mathTools.round(i.lon),a.locationDetails=format.formatLocationEntry(r),a.bbox=i.boundingbox,a.positionType=i.type,o.resolvedList.push(a)}}if(0===o.resolvedList.length)return o.error="No area description found",[o]
            var s=o.resolvedList
            return o.lat=s[0].lat,o.lng=s[0].lng,[o]},function(){return o.error="Problem while looking up address",[o]})}function doGeoCoding(o,n,r){n||(n=10)
        var t=nominatimURL+"?format=json&addressdetails=1&q="+encodeURIComponent(o)+"&limit="+n
        return bounds.initialized&&(t+="&bounded=1&viewbox="+bounds.minLon+","+bounds.maxLat+","+bounds.maxLon+","+bounds.minLat),$.ajax({url:t,type:"GET",dataType:"json",timeout:r}).fail(createCallback("[nominatim] Problem while looking up location "+o))}function createCallback(o){return function(n){console.log(o+" "+JSON.stringify(n))}}function resolve(o,n){var r=$("#locationpoints > div.pointDiv").eq(o)
        return $(r).find(".pointFlag").hide(),$(r).find(".pointIndicator").show(),$(r).find(".pointInput").val(n.input),createAmbiguityList(n).always(function(){var o=$(r).find(".pointResolveError")
            return o.empty(),n.error&&(o.show(),o.text(n.error).fadeOut(5e3),n.error=""),$(r).find(".pointIndicator").hide(),$(r).find(".pointFlag").show(),n})}var nominatimURL="https://nominatim.openstreetmap.org/search",nominatimReverseURL="https://nominatim.openstreetmap.org/reverse",bounds,mathTools=require("./tools/math.js"),format=require("./tools/format.js")
    module.exports.resolve=resolve,module.exports.setBounds=function(o){bounds=o}


},{"./tools/format.js":27,"./tools/math.js":28}],26:[function(require,module,exports){
    var L=require("leaflet")
    module.exports.getIntermediatePointIndex=function(e,n){for(var t=0,r=e[0].wayPoints,a=[],i=0
        i<e.length
        ++i)for(var o=e[i].coordinates,d=0
            d<o.length
        ++d)o[d].equals(r[t],1e-5)&&t++,a.push({distance:o[d].distanceTo(n),nextWayPointIndex:t===r.length?t-1:t})
        var s=a.reduce(function(e,n){return n.distance-e.distance<1e-6?n:e}).nextWayPointIndex
        return s=s>0&&s<r.length?s:1}


},{"leaflet":6}],27:[function(require,module,exports){
    function insComma(o,t){return o.length>0?o+", "+t:t}function formatLocationEntry(o){var t={},n=""
        return o?(o.road&&(n=o.road,o.house_number&&(n.length>0&&(n+=" "),n+=o.house_number),t.road=n),o.postcode&&(t.postcode=o.postcode),t.country=o.country,(o.city||o.suburb||o.town||o.village||o.hamlet||o.locality)&&(n="",o.locality&&(n=insComma(n,o.locality)),o.hamlet&&(n=insComma(n,o.hamlet)),o.village&&(n=insComma(n,o.village)),o.suburb&&(n=insComma(n,o.suburb)),o.city&&(n=insComma(n,o.city)),o.town&&(n=insComma(n,o.town)),t.city=n),n="",o.state&&(n+=o.state),o.continent&&(n=insComma(n,o.continent)),t.more=n,t):t}module.exports.formatLocationEntry=formatLocationEntry,module.exports.formatAddress=function(o){return(o.road?o.road+", ":"")+(o.postcode?o.postcode+", ":"")+(o.city?o.city+", ":"")+(o.country?o.country:"")},module.exports.insComma=insComma,module.exports.formatValue=function(o,t){var n="("+$.Autocomplete.utils.escapeRegExChars(t)+")"
        return o.replace(/[<>]/g,"_").replace(new RegExp(n,"gi"),"<strong>$1</strong>")}


},{}],28:[function(require,module,exports){
    module.exports.getCenter=function(n){var o={lat:0,lng:0}
        return n.initialized&&(o.lat=(n.minLat+n.maxLat)/2,o.lng=(n.minLon+n.maxLon)/2),o},module.exports.floor=function(n,o){return o||(o=1e6),Math.floor(n*o)/o},module.exports.round=function(n,o){return void 0===o&&(o=1e6),Math.round(n*o)/o}


},{}],29:[function(require,module,exports){
    function parseUrlWithHisto(){return parseUrl(window.location.hash?window.location.hash:window.location.search)}function parseUrl(r){var e=r.indexOf("?")
        e>=0&&(r=r.substring(e+1))
        for(var t={},a=r.split("&"),n=0
            n<a.length
        n++){var o=a[n].indexOf("=")
            if(!(o<0)){var i=a[n].substring(0,o),s=a[n].substring(o+1)
                s=decodeURIComponent(s.replace(/\+/g," ")),mergeParamIntoObject(t,i,s)}}return t}function mergeParamIntoObject(r,e,t){var a=e.indexOf(".")
        if(a<0){if("undefined"==typeof r[e]&&"heading"!==e&&"point"!==e)"true"===t?t=!0:"false"===t&&(t=!1),r[e]=t
        else{var n=r[e]
            isArray(n)?n.push(t):n?r[e]=[n,t]:r[e]=[t]}return r}var o=e.substring(0,a),i=e.substring(a+1),n=r[o]
        return n||(n={}),r[o]=mergeParamIntoObject(n,i,t),r}var isArray=function(r){var e=Object.prototype.toString.call(r)
        return"[object array]"===e.toLowerCase()}
    module.exports.parseUrl=parseUrl,module.exports.mergeParamIntoObject=mergeParamIntoObject,module.exports.parseUrlWithHisto=parseUrlWithHisto


},{}],30:[function(require,module,exports){
    module.exports.getSortedVehicleKeys=function(e,r){var t=Object.keys(e)
        return t.sort(function(e,t){var o=r[e],n=r[t]
            return o||n?(o||(o=4),n||(n=4),o-n):e.localeCompare(t)}),t}


},{}],31:[function(require,module,exports){
    (function (global){
        function tr2(t,r){if(null===t)return console.log("ERROR: key was null?"),""
            if(null===defaultTranslationMap)return console.log("ERROR: defaultTranslationMap was not initialized?"),t
            t=t.toLowerCase()
            var o=defaultTranslationMap[t]
            return!o&&enTranslationMap&&(o=enTranslationMap[t]),o?stringFormat(o,r):t}function tr(t,r){return t!==t.toLowerCase()&&console.log("key "+t+" has to be lower case"),tr2("web."+t,r)}function stringFormat(t,r){if("string"==typeof r&&(r=[r]),t.indexOf("%1$s")>=0)return t.replace(/\%(\d+)\$s/g,function(t,o){return o--,"undefined"!=typeof r[o]?r[o]:t})
            var o=0
            return t.replace(/\%s/g,function(t){var n="undefined"!=typeof r[o]?r[o]:t
                return o++,n})}function initI18N(){if(global.$){$("#searchButton").attr("value",tr("search_button"))
            var t=$("#locationpoints > div.pointDiv > input.pointInput"),r=t.size
            $(t).each(function(t){0===t?$(this).attr("placeholder",tr("from_hint")):t===r-1?$(this).attr("placeholder",tr("to_hint")):$(this).attr("placeholder",tr("via_hint"))}),$(".pointFlag").each(function(){$(this).attr("title",tr("drag_to_reorder"))}),$(".pointDelete").each(function(){$(this).attr("title",tr("delete_from_route"))}),$("#export-link").attr("title",tr("staticlink")),$("#gpxExportButton").attr("title",tr("gpx_export_button"))}}function mToKm(t){return t/1e3}function mToFt(t){return t/.3048}function mToMi(t){return t/1609.344}var defaultTranslationMap=null,enTranslationMap=null,i18nIsInitialized,mathTools=require("./tools/math.js")
        module.exports.createDistanceString=function(t,r){return r?t<152?mathTools.round(mToFt(t),1)+tr2("ft_abbr"):(t=mathTools.round(mToMi(t),100),t>100&&(t=mathTools.round(t,1)),t+tr2("mi_abbr")):t<900?mathTools.round(t,1)+tr2("m_abbr"):(t=mathTools.round(mToKm(t),100),t>100&&(t=mathTools.round(t,1)),t+tr2("km_abbr"))},module.exports.createEleInfoString=function(t,r,o){var n=""
            return(t>0||r>0)&&(n="<br/> ",t>0&&(n+=o?"&#8599
                    "+mathTools.round(mToFt(t),1)+tr2("ft_abbr"):"&#8599
            "+mathTools.round(t,1)+tr2("m_abbr")),r>0&&(n+=o?" &#8600
            "+mathTools.round(mToFt(r),1)+tr2("ft_abbr"):" &#8600
            "+mathTools.round(r,1)+tr2("m_abbr"))),n},module.exports.createTimeString=function(t){var r,o=mathTools.round(t/60/1e3,1e3)
            return o>60?o/60>24?(r=mathTools.floor(o/60/24,1)+tr2("day_abbr"),o=mathTools.floor(o/60%24,1),o>0&&(r+=" "+o+tr2("hour_abbr"))):(r=mathTools.floor(o/60,1)+tr2("hour_abbr"),o=mathTools.floor(o%60,1),o>0&&(r+=" "+o+tr2("min_abbr"))):r=mathTools.round(o%60,1)+tr2("min_abbr"),r},module.exports.tr=tr,module.exports.tr2=tr2,module.exports.nanoTemplate=function(t,r){return t.replace(/\{([\w\.]*)\}/g,function(t,o){var n=o.split("."),a=r[n.shift()]
            for(i=0,l=n.length
                i<l
            _i++)a=a[this]
            return"undefined"!=typeof a&&null!==a?a:""})},module.exports.init=function(t){defaultTranslationMap=t.default,enTranslationMap=t.en,defaultTranslationMap||(defaultTranslationMap=enTranslationMap),i18nIsInitialized=!0,initI18N()},module.exports.isI18nIsInitialized=function(){return i18nIsInitialized}


    }).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"./tools/math.js":28}]},{},[22])

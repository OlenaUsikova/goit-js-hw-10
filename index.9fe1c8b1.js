!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,s=a||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,y=function(){return s.Date.now()};function b(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function m(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(b(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=b(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var a=u.test(t);return a||f.test(t)?c(t.slice(2),a?2:8):i.test(t)?NaN:+t}n=function(t,e,n){var o,r,i,u,f,c,a=0,l=!1,s=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(e){var n=o,i=r;return o=r=void 0,a=e,u=t.apply(i,n)}function h(t){return a=t,f=setTimeout(T,e),l?g(t):u}function j(t){var n=t-c;return void 0===c||n>=e||n<0||s&&t-a>=i}function T(){var t=y();if(j(t))return O(t);f=setTimeout(T,function(t){var n=e-(t-c);return s?p(n,i-(t-a)):n}(t))}function O(t){return f=void 0,d&&o?g(t):(o=r=void 0,u)}function w(){var t=y(),n=j(t);if(o=arguments,r=this,c=t,n){if(void 0===f)return h(c);if(s)return f=setTimeout(T,e),g(c)}return void 0===f&&(f=setTimeout(T,e)),u}return e=m(e)||0,b(n)&&(l=!!n.leading,i=(s="maxWait"in n)?v(m(n.maxWait)||0,e):i,d="trailing"in n?!!n.trailing:d),w.cancel=function(){void 0!==f&&clearTimeout(f),a=0,o=c=r=f=void 0},w.flush=function(){return void 0===f?u:O(y())},w};var g=document.querySelector("country-list"),h=document.querySelector("country-info");document.querySelector("#search-box").addEventListener("input",n((function(t){""===t.target.value&&(h.innerHTML="",g.innerHTML="");(e=t.target.value.trim,fetch("https://restcountries.com/v3.1/name/".concat(e,"/?fields=official,capital,population,flags,languages")).then((function(t){return t.json()}))).then((function(t){console.log(t)}));var e}),300))}();
//# sourceMappingURL=index.9fe1c8b1.js.map
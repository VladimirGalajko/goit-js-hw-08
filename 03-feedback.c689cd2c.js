function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,g=Math.min,d=function(){return c.Date.now()};function v(e,t,n){var i,o,r,a,f,u,l=0,c=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,r=o;return i=o=void 0,l=t,a=e.apply(r,n)}function S(e){return l=e,f=setTimeout(O,t),c?y(e):a}function j(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=r}function O(){var e=d();if(j(e))return T(e);f=setTimeout(O,function(e){var n=t-(e-u);return s?g(n,r-(e-l)):n}(e))}function T(e){return f=void 0,v&&i?y(e):(i=o=void 0,a)}function h(){var e=d(),n=j(e);if(i=arguments,o=this,u=e,n){if(void 0===f)return S(u);if(s)return f=setTimeout(O,t),y(u)}return void 0===f&&(f=setTimeout(O,t)),a}return t=b(t)||0,p(n)&&(c=!!n.leading,r=(s="maxWait"in n)?m(b(n.maxWait)||0,t):r,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),l=0,i=u=o=f=void 0},h.flush=function(){return void 0===f?a:T(d())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:i,maxWait:t,trailing:o})};const y=document.querySelector(".feedback-form");y.addEventListener("input",e(t)((function(e){const t=e.target.name;console.log(e.target),"email"===t&&(O.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(O)));"message"===t&&(O.msg=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(O)));console.log(`email: ${O.email}, msg: ${O.msg} `)}),500)),y.addEventListener("submit",(function(e){e.preventDefault(),console.log(`\n    localStorage: ${localStorage.getItem("feedback-form-state")}\n    Email: ${O.email}\n    Message: ${O.msg}\n    `),e.currentTarget.reset()}));let S="",j="";!function(e){let t=localStorage.getItem("feedback-form-state");null!=t&&(t=JSON.parse(t),e.email.value=t.email,e.message.value=t.msg,j=t.email,S=t.msg)}(y);const O={email:j,msg:S};
//# sourceMappingURL=03-feedback.c689cd2c.js.map

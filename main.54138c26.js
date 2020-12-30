parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a,i=!0,c=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==o.return||o.return()}finally{if(c)throw a}}}}function t(e){return a(e)||o(e)||r(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return i(e)}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c,l=document.querySelector("table"),d=document.querySelector("tbody"),u=d.querySelectorAll("tr"),s=l.querySelector("thead").querySelectorAll("th"),f=t(u),p=t(s),v=function(e){if(c!==e){c=e;var t=p.findIndex(function(t){return t.textContent===e});f.sort(function(n,r){var o=n.children[t].textContent.replace(/[$,]/g,""),a=r.children[t].textContent.replace(/[$,]/g,"");return"Salary"===e||"Age"===e?o-a:o.localeCompare(a)})}else f.reverse()};l.addEventListener("click",function(t){if("TH"===t.target.tagName){v(t.target.textContent);var n,r=e(f);try{for(r.s();!(n=r.n()).done;){var o=n.value;d.append(o)}}catch(a){r.e(a)}finally{r.f()}}}),d.addEventListener("click",function(n){if("TD"===n.target.tagName){var r,o=e(t(d.children));try{for(o.s();!(r=o.n()).done;){r.value.className="non-active"}}catch(a){o.e(a)}finally{o.f()}n.target.parentNode.className="active"}});var m=document.createElement("form");m.method="GET",m.className="new-employee-form",document.body.append(m);var y=document.createElement("label"),g=document.createElement("input"),h=document.createElement("label");y.append(g),h.innerHTML='\nOffice:\n<select data-qa="office">\n  <option value="Tokyo">Tokyo</option>\n  <option value="Singapore">Singapore</option>\n  <option value="London">London</option>\n  <option value="New York">New York</option>\n  <option value="Edinburgh">Edinburgh</option>\n  <option value="San Francisco">San Francisco</option>\n</select>\n',m.append(y.cloneNode(!0),y.cloneNode(!0),h,y.cloneNode(!0),y.cloneNode(!0));var b,x=document.querySelectorAll("label"),C=0,S=e(s);try{for(S.s();!(b=S.n()).done;){var E=b.value;"Office"!==E.textContent?(x[C].children[0].setAttribute(E.textContent.toLowerCase(),E.textContent.toLowerCase()),x[C].insertAdjacentHTML("afterbegin","".concat(E.textContent,":")),x[C].children[0].dataset.qa=E.textContent.toLowerCase(),"Name"!==E.textContent&&"Position"!==E.textContent||(x[C].children[0].setAttribute("type","text"),C++),"Age"!==E.textContent&&"Salary"!==E.textContent||(x[C].children[0].setAttribute("type","number"),C++)):C++}}catch(L){S.e(L)}finally{S.f()}var N=document.createElement("button");m.append(N),N.textContent="Save to table",N.type="submit",m.addEventListener("submit",function(t){t.preventDefault();var n,r={},o=e(m.elements);try{for(o.s();!(n=o.n()).done;){var a=n.value;r[a.dataset.qa]=a.value}}catch(L){o.e(L)}finally{o.f()}if(r.name.length<4||r.age<18||r.age>90||r.position.length<4)A("Error","Please, verify inputs 'Name', 'Position' and 'Age'","error");else{A("Success","You have successfuly added new employee.","success");var i=document.createElement("tr");r.salary=+r.salary,i.innerHTML="\n  <td>".concat(r.name,"</td>\n  <td>").concat(r.position,"</td>\n  <td>").concat(r.office,"</td>\n  <td>").concat(r.age,"</td>\n  <td>$").concat(r.salary.toLocaleString(),"</td>\n  "),f.push(i),d.append(i),m.reset()}});var A=function(e,t,n){var r=document.createElement("div");r.classList.add("notification",n),r.dataset.qa="notification",r.innerHTML='\n  <h2 class = "title">'.concat(e,"</h2>\n  <p>").concat(t,"</p>"),r.style.top="5px",r.style.right="10px",r.style.minHeight="50px",r.style.width="400px",document.body.append(r),setTimeout(function(){r.hidden=!0},2e3)};d.addEventListener("dblclick",function(e){e.preventDefault();var n=document.createElement("input"),r=e.target.textContent;n.className="cell-input",n.value=r;var o=document.createElement("td");o.append(n);var a=t(e.target.parentNode.children),i=a.findIndex(function(t){return t.textContent===e.target.textContent}),c=e.target.parentNode;e.target.remove(),c.insertBefore(o,c.children[i]);var l=a[i].textContent;o.addEventListener("keydown",function(e){if("Enter"===e.key){if(""===e.target.value)return e.target.parentNode.textContent=l,void e.target.remove();var t=e.target.value;e.target.parentNode.textContent=t,e.target.remove()}}),o.addEventListener("blur",function(e){if(""===e.target.value)return e.target.parentNode.textContent=l,void e.target.remove();var t=e.target.value;e.target.parentNode.textContent=t,e.target.remove()},!0)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.54138c26.js.map
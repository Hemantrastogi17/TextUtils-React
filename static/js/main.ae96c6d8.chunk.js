(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{10:function(e,t,c){},12:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(4),s=c.n(r),l=(c(9),c(2)),o=(c(10),c(0));function i(e){return Object(o.jsx)("div",{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch mx-2 text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Dark Mode"})]})]})]})})})}function d(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),n=c[0],r=c[1],s=Object(a.useState)("Copy"),i=Object(l.a)(s,2),d=i[0],b=i[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{backgroundColor:"dark"===e.mode?"#00001a":"white",color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:Object(o.jsx)("pre",{children:e.heading})}),Object(o.jsxs)("div",{className:"textarea-container",children:[Object(o.jsx)("textarea",{className:"form-control",value:n,onChange:function(e){console.log(" Change detected"),r(e.target.value)},id:"mybox",rows:"8",style:{backgroundColor:"light"===e.mode?"white":"#00001a",color:"light"===e.mode?"black":"white"}}),Object(o.jsx)("button",{onClick:function(){navigator.clipboard.writeText(n),b("Copied"),setTimeout((function(){b("Copy")}),1e3),e.showAlert(" Copied to Clipboard","success")},value:d,type:"button",children:d})]}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("dark"===e.mode?"warning":"primary"," my-2 mx-2"),onClick:function(){r("")},children:"Clear Text"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("dark"===e.mode?"warning":"primary"," my-2 mx-2"),onClick:function(){console.log(" Uppercase is clicked"+n);var t=n.toUpperCase();r(t),e.showAlert(" Converted to Uppercase","success")},children:"UPPERCASE"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("dark"===e.mode?"warning":"primary"," my-2 mx-2"),onClick:function(){console.log("Lowercase is clicked"+n);var t=n.toLowerCase();r(t),e.showAlert(" Converted to Lowercase","success")},children:"lowercase"}),Object(o.jsx)("button",{disabled:0===n.length,className:"btn btn-".concat("dark"===e.mode?"warning":"primary"," my-2 mx-2"),onClick:function(){var t=n.split(/[ ]+/);r(t.join(" ")),e.showAlert(" Extra spaces removed!","success")},children:"Remove Extra Spaces"})]}),Object(o.jsx)("hr",{className:"rounded",size:"6"}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h2",{children:Object(o.jsx)("pre",{children:"Text Summary"})}),Object(o.jsx)("h5",{children:Object(o.jsxs)("pre",{children:["Word Count: ",n.split(/\s+/).filter((function(e){return 0!==e.length})).length,"  Character Count: ",n.length]})}),Object(o.jsxs)("pre",{children:[n.length>0?Math.ceil(.008*n.split(" ").length):0," minute read"]}),Object(o.jsx)("hr",{className:"rounded",size:"6"}),Object(o.jsx)("h2",{children:"Preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter text in the textbox above to preview here"})]})]})}function b(e){return Object(o.jsx)("div",{style:{height:"50px"},children:e.alert&&Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:function(e){var t=e.toLowerCase();return t.charAt(0).toUpperCase()+t.slice(1)}(e.alert.type)}),"!",e.alert.msg]})})}i.defaultProps={title:"Set title here"};var h=function(){var e=Object(a.useState)("light"),t=Object(l.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(null),s=Object(l.a)(r,2),h=s[0],j=s[1],u=function(e,t){j({msg:e,type:t}),setTimeout((function(){j(null)}),2e3)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:c,toggleMode:function(){"light"===c?(n("dark"),document.body.style.backgroundColor="#00001a",u("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",u("Light mode has been enabled","success"))}}),Object(o.jsx)(b,{alert:h}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(d,{showAlert:u,heading:"TextUtils-Word Counter, Character counter, Remove Extra Spaces",mode:c})})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,13)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),a(e),n(e),r(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,c){}},[[12,1,2]]]);
//# sourceMappingURL=main.ae96c6d8.chunk.js.map
(this["webpackJsonpgoit-react-hw-phonebook"]=this["webpackJsonpgoit-react-hw-phonebook"]||[]).push([[0],{11:function(t,e,n){t.exports={wrapper:"Filter_wrapper__IqOjQ"}},12:function(t,e,n){t.exports={list:"ContactList_list__2T7aG"}},19:function(t,e,n){},20:function(t,e,n){},30:function(t,e,n){"use strict";n.r(e);var c=n(1),a=n.n(c),r=n(10),i=n.n(r),o=(n(18),n(19),n(13)),s=n(3),l=(n(20),n(2)),u=n.n(l),j=n(11),b=n.n(j),d=n(0),m=function(t){var e=t.handleChangeFilter,n=t.filter,c=u()();return Object(d.jsxs)("div",{className:b.a.wrapper,children:[Object(d.jsx)("label",{htmlFor:c,children:"Find contacts by name"}),Object(d.jsx)("input",{id:c,name:n,type:"text",value:n,onChange:e})]})},h=n(8),O=n.n(h),f=function(t){var e=t.searchDuplicate,n=u()(),a=u()(),r=Object(c.useState)(""),i=Object(s.a)(r,2),o=i[0],l=i[1],j=Object(c.useState)(""),b=Object(s.a)(j,2),m=b[0],h=b[1];return Object(d.jsx)("section",{className:O.a.section,children:Object(d.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={id:u()(),name:o,number:m};o&&m&&(l(n.name),h(n.number),e(n),l(""),h(""))},className:O.a.form,children:[Object(d.jsx)("label",{htmlFor:n,children:"Names"}),Object(d.jsx)("input",{id:n,name:o,type:"text",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0406\u043c'\u044f \u0432\u043a\u043b\u044e\u0447\u0430\u0454 \u0431\u0443\u043a\u0432\u0438, \u043f\u0440\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0456 : \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444, \u0442\u0438\u0440\u0435 \u0456 \u043f\u0440\u043e\u0431\u0456\u043b\u0438",value:o,onChange:function(t){l(t.target.value)}}),Object(d.jsx)("label",{htmlFor:a,children:"Number"}),Object(d.jsx)("input",{id:a,name:m,type:"tel",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",tittle:"\u043e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u043e \u0446\u0438\u0444\u0440\u0438! \u043f\u0440\u0438 \u043f\u043e\u0442\u0440\u0435\u0431\u0456 '+' , '-', '()'",value:m,placeholder:"XXX-XX-XX",onChange:function(t){h(t.target.value)}}),Object(d.jsx)("button",{type:"submit",className:O.a.button,children:"Add contact"})]})})},p=n(12),x=n.n(p),_=function(t){var e=t.children;return{children:e}&&Object(d.jsx)("section",{children:Object(d.jsx)("ul",{className:x.a.list,children:e})})},v=n(5),C=n.n(v),g=function(t){var e=t.filter,n=t.contacts,c=t.deleteItem;return Object(d.jsx)(d.Fragment,{children:""===e?n.map((function(t){var e=t.name,n=t.number,a=t.id;return Object(d.jsxs)("li",{className:C.a.item,children:[Object(d.jsxs)("p",{children:[e," : ",n]}),Object(d.jsx)("button",{type:"button",className:C.a.button,onClick:function(){return c(a)},children:"Delete"})]},a)})):n.map((function(t){var n=t.name,a=t.number,r=t.id;return n.toLowerCase().includes(e.toLowerCase())&&Object(d.jsxs)("li",{className:C.a.item,children:[Object(d.jsxs)("p",{children:[n," : ",a]}),Object(d.jsx)("button",{type:"button",className:C.a.button,onClick:function(){return c(r)},children:"Delete"})]},r)}))})},w=function(){var t,e=Object(c.useState)(null!==(t=JSON.parse(window.localStorage.getItem("contacts")))&&void 0!==t?t:[]),n=Object(s.a)(e,2),a=n[0],r=n[1],i=Object(c.useState)(""),l=Object(s.a)(i,2),u=l[0],j=l[1];Object(c.useEffect)((function(){window.localStorage.setItem("contacts",JSON.stringify(a))}),[a]);var b=function(t){r((function(e){return[].concat(Object(o.a)(e),[t])}))};return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Phonebook"}),Object(d.jsx)(f,{addNewContact:b,searchDuplicate:function(t){a.map((function(t){return t.name})).includes(t.name)?alert("".concat(t.name," is already in contacts!!!")):b(t)},contacts:a}),Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(m,{filter:u,handleChangeFilter:function(t){j(t.target.value)}}),Object(d.jsx)(_,{children:Object(d.jsx)(g,{contacts:a,filter:u,deleteItem:function(t){r(a.filter((function(e){return e.id!==t})))}})})]})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(w,{})}),document.getElementById("root"))},5:function(t,e,n){t.exports={item:"ContactListItem_item__2THQn",button:"ContactListItem_button__22wLV"}},8:function(t,e,n){t.exports={section:"ContactForm_section__QTTHr",form:"ContactForm_form__1fuOn",button:"ContactForm_button__1MLZK"}}},[[30,1,2]]]);
//# sourceMappingURL=main.3ad0fd78.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[139],{139:function(e,t,r){r.r(t),r.d(t,{default:function(){return o}});var n=r(270),a=r(434),u=r(273),s=r(329),c=function(){var e=(0,a.I0)();return(0,s.jsxs)("form",{onSubmit:function(t){t.preventDefault();var r=t.currentTarget;e((0,u.z2)({name:r.elements.name.value,email:r.elements.email.value,password:r.elements.password.value})),r.reset()},autoComplete:"off",children:[(0,s.jsxs)("label",{children:["Username",(0,s.jsx)("input",{type:"text",name:"name"})]}),(0,s.jsxs)("label",{children:["Email",(0,s.jsx)("input",{type:"email",name:"email"})]}),(0,s.jsxs)("label",{children:["Password",(0,s.jsx)("input",{type:"password",name:"password"})]}),(0,s.jsx)("button",{type:"submit",children:"Register"})]})};function o(){return(0,s.jsxs)("div",{children:[(0,s.jsx)(n.q,{children:(0,s.jsx)("title",{children:"Registration"})}),(0,s.jsx)(c,{})]})}},273:function(e,t,r){r.d(t,{Ib:function(){return l},z2:function(){return i}});var n=r(861),a=r(757),u=r.n(a),s=r(243),c=r(382);s.Z.defaults.baseURL="http://connections-api.herokuapp.com";var o=function(e){s.Z.defaults.headers.common.Authorization="Bearer ".concat(e)},i=(0,c.hg)("auth/register",function(){var e=(0,n.Z)(u().mark((function e(t,r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.post("/users/signup",t);case 3:return n=e.sent,o(n.data.token),e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",r.rejectWithValue(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}()),l=(0,c.hg)("auth/login",function(){var e=(0,n.Z)(u().mark((function e(t,r){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.post("/users/login",t);case 3:return n=e.sent,o(n.data.token),e.abrupt("return",n.data);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",r.rejectWithValue(e.t0.message));case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,r){return e.apply(this,arguments)}}());(0,c.hg)("auth/logout",function(){var e=(0,n.Z)(u().mark((function e(t,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.Z.post("/users/logout");case 3:s.Z.defaults.headers.common.Authorization="",e.next=9;break;case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",r.rejectWithValue(e.t0.message));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,r){return e.apply(this,arguments)}}())}}]);
//# sourceMappingURL=139.e44237a7.chunk.js.map
webpackJsonp([14],{Qw4y:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("4YfN"),s=n.n(a),l=n("NnyI"),o=n.n(l),r=n("b8UZ"),i={name:"header",data:function(){return{defaultSettings:o.a}},methods:s()({},Object(r.b)({handleMenuCollapse:"global/handleMenuCollapse"}),{handleLogout:function(){localStorage.clear(),this.$router.push({path:"user/login"})}})},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header"},[n("div",{staticClass:"title",on:{click:e.handleMenuCollapse}},[n("i",{staticClass:"el-icon-s-fold"})]),e._v(" "),n("div",{staticClass:"user-info"},[n("el-dropdown",[n("span",{staticClass:"el-dropdown-link user-info"},[n("el-avatar",{staticClass:"avatar",attrs:{size:"small",src:e.defaultSettings.logoImg}}),e._v("\n        gkAdmin\n        "),n("i",{staticClass:"el-icon-arrow-down el-icon--right"})],1),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("span",{on:{click:function(){return e.handleLogout()}}},[e._v("退出系统")])])],1)],1)],1)])},staticRenderFns:[]};var c=n("C7Lr")(i,d,!1,function(e){n("Rgsv")},"data-v-65f0d61f",null);t.default=c.exports},Rgsv:function(e,t){}});
//# sourceMappingURL=14.1095a754f856f326f85f.js.map
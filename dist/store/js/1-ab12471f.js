webpackJsonp([1],{257:function(e,t,n){(function(t,a){"use strict";function c(e){return e&&e.__esModule?e:{"default":e}}var o=n(267),r=c(o),i=n(27).bindActionCreators,s=n(127).connect,u=n(261),l=t.createClass({displayName:"About",getInitialState:function(){return{filter:"123"}},click:function(){var e=this.props.actions;e.test()},render:function(){var e=this.props.todo;this.props.actions;return t.createElement("div",{className:a(r["default"].style,r["default"].back),onClick:this.click},e.name)}}),p=s(function(e){return{todo:e.about.todo}},function(e){return{actions:i(u,e)}})(l);e.exports=p}).call(t,n(4),n(263))},261:function(e,t,n){"use strict";var a=n(130);e.exports={test:function(){return{type:a.TEST}}}},263:function(e,t){function n(){function e(e){n.each(e.split(" "),function(e){t[e]=!!e})}var t={},a={},c="";return n.each([].slice.call(arguments),function(t){switch(n.getType(t)){case"string":case"number":e(t);break;case"array":e(n.apply(null,t));break;case"element":e(n(t.className||""));break;case"nodelist":e(n.apply(null,[].slice.call(t)));break;case"jquery":e(n.apply(null,t.get()));break;case"object":a=n.extend(a,t)}}),t=n.extend(t,a),n.each(t,function(e,t){e&&(c+=" "+t)}),c.substr(1)}n.setTo=function(e){var t=n.getType(e);return"element"===t&&(e=[e]),"jquery"===t&&(e=e.get()),"nodelist"===t&&(e=[].slice.call(e)),function(){var t=n.apply(null,arguments);n.each(e,function(e){e.className=t})}},n.each=function(e,t){var a=n.getType(e);if("array"===a)for(var c=0;c<e.length;c++)t(e[c],c);if("object"===a)for(var o in e)t(e[o],o)},n.getType=function(e){var t=Object.prototype.toString.call(e).slice(8,-1).toLowerCase();return"object"===t&&e.jquery?"jquery":t.indexOf("element")>1?"element":t},n.extend=function(e,t){var a={},c=[e,t];return n.each(c,function(e){n.each(e,function(t,n){e.hasOwnProperty(n)&&(a[n]=t)})}),a},"undefined"!=typeof e&&e.exports&&(e.exports=n)},264:function(e,t,n){t=e.exports=n(126)(),t.push([e.id,".about-1yXWTCUy{color:#7c2845}.about-2QF7naWo{background:url("+n(266)+") no-repeat;height:265px;width:241px}",""]),t.locals={style:"about-1yXWTCUy",back:"about-2QF7naWo"}},266:function(e,t,n){e.exports=n.p+"../../images/test-a1c66524.jpeg"},267:function(e,t,n){var a=n(264);"string"==typeof a&&(a=[[e.id,a,""]]);n(128)(a,{});a.locals&&(e.exports=a.locals)}});
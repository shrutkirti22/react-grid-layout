webpackJsonp([6],[function(t,e,n){(function(t){"use strict";var e=n(4),r=n(17),o=n(11),i=e.createClass({displayName:"GridPropertyLayout",mixins:[e.addons.PureRenderMixin],getDefaultProps:function(){return{isDraggable:!0,isResizable:!0,items:20,rowHeight:30,cols:12}},getInitialState:function(){return{}},generateDOM:function(){var t=this.generateLayout();return r.map(r.range(this.props.items),function(n){return e.createElement("div",{key:n,_grid:t[n]},e.createElement("span",{className:"text"},n))})},generateLayout:function(){var t=this.props;return r.map(new Array(t.items),function(e,n){var o=r.result(t,"w")||Math.ceil(4*Math.random()),i=r.result(t,"y")||Math.ceil(4*Math.random())+1;return{x:2*n%12,y:Math.floor(n/6)*i,w:o,h:i,i:n}})},onLayoutChange:function(t){this.props.onLayoutChange(t)},render:function(){return e.createElement(o,e.__spread({onLayoutChange:this.onLayoutChange},this.props),this.generateDOM())}});t.exports=i,n.c[0]===t&&n(12)(t.exports)}).call(e,n(10)(t))}]);
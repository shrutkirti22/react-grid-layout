webpackJsonp([8],[function(t,e,n){(function(t){"use strict";var e=n(4),r=n(17),o=n(11),i=e.createClass({displayName:"NoDraggingLayout",mixins:[e.addons.PureRenderMixin],propTypes:{onLayoutChange:e.PropTypes.func.isRequired},getDefaultProps:function(){return{className:"layout",isDraggable:!1,isResizable:!1,items:50,cols:12,rowHeight:30}},getInitialState:function(){var t=this.generateLayout();return{layout:t}},generateDOM:function(){return r.map(r.range(this.props.items),function(t){return e.createElement("div",{key:t},e.createElement("span",{className:"text"},t))})},generateLayout:function(){var t=this.props;return r.map(new Array(t.items),function(e,n){var o=r.result(t,"y")||Math.ceil(4*Math.random())+1;return{x:2*n%12,y:Math.floor(n/6)*o,w:2,h:o,i:n}})},onLayoutChange:function(t){this.props.onLayoutChange(t)},render:function(){return e.createElement(o,e.__spread({layout:this.state.layout,onLayoutChange:this.onLayoutChange},this.props),this.generateDOM())}});t.exports=i,n.c[0]===t&&n(12)(t.exports)}).call(e,n(10)(t))}]);
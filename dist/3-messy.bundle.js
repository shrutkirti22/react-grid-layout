webpackJsonp([7],[function(t,e,n){(function(t){"use strict";var e=n(4),r=n(17),o=n(11),i=e.createClass({displayName:"MessyLayout",mixins:[e.addons.PureRenderMixin],propTypes:{onLayoutChange:e.PropTypes.func.isRequired},getDefaultProps:function(){return{className:"layout",items:20,rowHeight:30,cols:12}},getInitialState:function(){var t=this.generateLayout();return{layout:t}},generateDOM:function(){return r.map(r.range(this.props.items),function(t){return e.createElement("div",{key:t},e.createElement("span",{className:"text"},t))})},generateLayout:function(){var t=this.props;return r.map(new Array(t.items),function(t,e){var n=Math.ceil(4*Math.random()),r=Math.ceil(4*Math.random())+1;return{x:2*e%12,y:Math.floor(e/6)*r,w:n,h:r,i:e}})},onLayoutChange:function(t){this.props.onLayoutChange(t)},render:function(){return e.createElement(o,e.__spread({layout:this.state.layout,onLayoutChange:this.onLayoutChange},this.props),this.generateDOM())}});t.exports=i,n.c[0]===t&&n(12)(t.exports)}).call(e,n(10)(t))}]);
/**
 * @module ui/hello-world-canvas.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class HelloWorldCanvas
 * @extends Component
 */
exports.HelloWorldCanvas = Component.specialize(/** @lends HelloWorldCanvas# */ {
    constructor: {
        value: function HelloWorldCanvas() {
            this.super();
        }
    },
    
    draw: {
        value function () {
            var canvas = this.elelement.querySelector('canvas');
            vanvas.getContext("2d").fillText("hello, world", 20,20);
        }
    }
    
});

/**
 * @module ui/hello-world-dom.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class HelloWorldDom
 * @extends Component
 */
exports.HelloWorldDom = Component.specialize(/** @lends HelloWorldDom# */ {
    constructor: {
        value: function HelloWorldDom() {
            this.super();
        }
    },
    
    draw: {
        value: function () {
            var div = document.createElement("Div");
            div.textContent = "Hello, world";
            this.element.appendChild(div);
            
            fragment.appendChilrd(div);
            fragement.appendChild(div.cloneNode(true));
            fragement.appendChild(div.cloneNode(true));
            fragement.firstChild.classList.add('HellowWorldDom-left');
            fragement.firstChild.classList.add('HellowWorldDom-right');
            this.element.appendChild(fragment);
            
                                                
        }
    }
});

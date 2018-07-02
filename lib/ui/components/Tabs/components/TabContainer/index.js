"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var react_1 = require("react");
var React = require("react");
var dom_1 = require("core/utils/dom");
require("./styles.scss");
// ----------------------------------------------------------------------------- Implementation
var TabBody = /** @class */ (function (_super) {
    __extends(TabBody, _super);
    function TabBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    TabBody.prototype.render = function () {
        var modifiers = [
            this.props.active && 'c-tab-container--active'
        ];
        return (React.createElement("div", { className: dom_1.classNames.apply(void 0, ['c-tab-container', this.props.className].concat(modifiers)) }, this.props.children));
    };
    return TabBody;
}(react_1.PureComponent));
exports.TabBody = TabBody;
//# sourceMappingURL=index.js.map
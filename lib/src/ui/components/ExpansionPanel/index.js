"use strict";
// tslint:disable:max-classes-per-file
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
var Icon_1 = require("../Icon");
var ExpansionPanelHeader = /** @class */ (function (_super) {
    __extends(ExpansionPanelHeader, _super);
    function ExpansionPanelHeader() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpansionPanelHeader.prototype.render = function () { return this.props.children; };
    return ExpansionPanelHeader;
}(react_1.PureComponent));
exports.ExpansionPanelHeader = ExpansionPanelHeader;
var ExpansionPanelBody = /** @class */ (function (_super) {
    __extends(ExpansionPanelBody, _super);
    function ExpansionPanelBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpansionPanelBody.prototype.render = function () { return this.props.children; };
    return ExpansionPanelBody;
}(react_1.PureComponent));
exports.ExpansionPanelBody = ExpansionPanelBody;
var ExpansionPanelFooter = /** @class */ (function (_super) {
    __extends(ExpansionPanelFooter, _super);
    function ExpansionPanelFooter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExpansionPanelFooter.prototype.render = function () { return this.props.children; };
    return ExpansionPanelFooter;
}(react_1.PureComponent));
exports.ExpansionPanelFooter = ExpansionPanelFooter;
// ----------------------------------------------------------------------------- Implementation
var ExpansionPanel = /** @class */ (function (_super) {
    __extends(ExpansionPanel, _super);
    function ExpansionPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // ----------------------------------------------------------------------------- Helpers methods
        _this.propagateToggle = function () {
            return _this.props.onToggle(!_this.props.active);
        };
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    ExpansionPanel.prototype.render = function () {
        var modifiers = [
            this.props.active && 'c-expansion-panel--active'
        ];
        var children = React.Children.toArray(this.props.children);
        var header = children.filter(function (child) { return child.type === ExpansionPanelHeader; });
        var body = children.filter(function (child) { return child.type === ExpansionPanelBody; });
        var footer = children.filter(function (child) { return child.type === ExpansionPanelFooter; });
        return (React.createElement("div", { className: dom_1.classNames.apply(void 0, ['c-expansion-panel', this.props.className].concat(modifiers)) },
            header.length > 0 && (React.createElement("button", { className: 'c-expansion-panel__header', onClick: this.propagateToggle },
                React.createElement("div", { className: 'c-expansion-panel__header-title' }, header),
                React.createElement(Icon_1.Icon, { name: 'arrow-down', className: 'c-expansion-panel__icon' }))),
            body.length > 0 && (React.createElement("div", { className: 'c-expansion-panel__body' }, body)),
            footer.length > 0 && (React.createElement("div", { className: 'c-expansion-panel__footer' }, footer))));
    };
    return ExpansionPanel;
}(react_1.PureComponent));
exports.ExpansionPanel = ExpansionPanel;
//# sourceMappingURL=index.js.map
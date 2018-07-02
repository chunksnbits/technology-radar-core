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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var React = require("react");
var core_1 = require("@material-ui/core");
var dom_1 = require("core/utils/dom");
var react_1 = require("react");
require("./styles.scss");
var GroupIndicator_1 = require("core/ui/components/GroupIndicator");
// ----------------------------------------------------------------------------- Implementation
var TechnologyListEntry = /** @class */ (function (_super) {
    __extends(TechnologyListEntry, _super);
    function TechnologyListEntry(props) {
        var _this = _super.call(this, props) || this;
        _this.elementRef = react_1.createRef();
        return _this;
    }
    TechnologyListEntry.prototype.componentDidUpdate = function () {
        if (!this.props.focusable) {
            return;
        }
        if (this.props.focused) {
            this.elementRef.current.scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
                behavior: 'smooth'
            });
        }
    };
    TechnologyListEntry.prototype.render = function () {
        var _a = this.props, className = _a.className, focusable = _a.focusable, technology = _a.technology, group = _a.group, focused = _a.focused, buttonProps = __rest(_a, ["className", "focusable", "technology", "group", "focused"]);
        var modifiers = [
            focused && 'c-technology-list-entry--focused'
        ];
        return (React.createElement("li", { className: dom_1.classNames.apply(void 0, ['c-technology-list-entry', className].concat(modifiers)), ref: this.elementRef },
            React.createElement(core_1.Button, __assign({ role: 'flat', fullWidth: true }, buttonProps),
                React.createElement(GroupIndicator_1.GroupIndicator, { className: 'c-technology-list-entry__group-indicator', color: group.color, focused: focused }),
                React.createElement("span", { className: 'c-technology-list-entry__label' }, technology.name))));
    };
    return TechnologyListEntry;
}(react_1.PureComponent));
exports.TechnologyListEntry = TechnologyListEntry;
//# sourceMappingURL=index.js.map
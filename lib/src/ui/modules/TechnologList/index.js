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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// ----------------------------------------------------------------------------- Dependencies
var react_1 = require("react");
var React = require("react");
var dom_1 = require("core/utils/dom");
var consume_1 = require("core/utils/store/consume");
var store_1 = require("core/store");
require("./styles.scss");
var TechnologyListEntry_1 = require("./components/TechnologyListEntry");
var TechnologyListGroup_1 = require("./components/TechnologyListGroup");
// ----------------------------------------------------------------------------- Implementation
var TechnologyList = /** @class */ (function (_super) {
    __extends(TechnologyList, _super);
    function TechnologyList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handlers = {};
        return _this;
    }
    // ----------------------------------------------------------------------------- Lifecycle methods
    TechnologyList.prototype.render = function () {
        var _this = this;
        var _a = this.props, breakpoint = _a.breakpoint, focusedTechnology = _a.focusedTechnology, selectedGroup = _a.selectedGroup, selectedTechnology = _a.selectedTechnology, viewMode = _a.viewMode, technologies = _a.technologies, groups = _a.groups;
        var active = Boolean(selectedGroup) || Boolean(selectedTechnology);
        var listView = (breakpoint === 'large' || viewMode === 'list');
        var modifiers = [
            !listView && 'c-technology-list--hidden',
            active && 'c-technology-list--hidden'
        ];
        var focusable = breakpoint === 'large' && active;
        var grouped = Object.entries(this.groupTechnologies(technologies, groups, selectedGroup));
        return (React.createElement("div", { className: dom_1.classNames.apply(void 0, ['c-technology-list', this.props.className].concat(modifiers)) },
            React.createElement("ul", { className: 'c-technology-list__items' }, grouped.map(function (_a) {
                var groupId = _a[0], groupedTechnologies = _a[1];
                return (React.createElement(TechnologyListGroup_1.TechnologyListGroup, { key: groupId }, groupedTechnologies.reverse().map(function (technology) { return (React.createElement(TechnologyListEntry_1.TechnologyListEntry, { className: _this.isHidden(groupId, selectedGroup) && 'c-technology-list__item--hidden', key: technology.id, focusable: focusable, technology: technology, group: groups.find(function (acc) { return acc.id === groupId; }), onMouseOver: _this.bindFocusTechnologyHandler(technology), onMouseOut: _this.bindUnfocusTechnologyHandler(technology), onClick: _this.bindSelectTechnologyHandler(technology), focused: Boolean(focusedTechnology) && focusedTechnology === technology })); })));
            }))));
    };
    // ----------------------------------------------------------------------------- Event handler methods
    TechnologyList.prototype.bindSelectTechnologyHandler = function (technology) {
        var _this = this;
        var key = "select-technology-" + technology.id;
        if (!this.handlers[key]) {
            this.handlers[key] = function () { return _this.props.selectTechnology(technology); };
        }
        return this.handlers[key];
    };
    TechnologyList.prototype.bindFocusTechnologyHandler = function (technology) {
        var _this = this;
        var key = "set-focused-technology-" + technology.id;
        if (!this.handlers[key]) {
            this.handlers[key] = function () { return _this.props.focusTechnology(technology); };
        }
        return this.handlers[key];
    };
    TechnologyList.prototype.bindUnfocusTechnologyHandler = function (technology) {
        var _this = this;
        var key = "unset-focused-technology-" + technology.id;
        if (!this.handlers[key]) {
            this.handlers[key] = function () { return _this.props.focusTechnology(null); };
        }
        return this.handlers[key];
    };
    // ----------------------------------------------------------------------------- Helpers methods
    TechnologyList.prototype.groupTechnologies = function (technologies, groups, selectedGroup) {
        return groups.reduce(function (result, group) {
            var _a;
            return __assign({}, result, (_a = {}, _a[group.id] = technologies.filter(function (technology) { return technology.groupId === group.id; }), _a));
        }, {});
    };
    TechnologyList.prototype.isHidden = function (groupId, selectedGroup) {
        return Boolean(selectedGroup) && selectedGroup.id !== groupId;
    };
    TechnologyList = __decorate([
        consume_1.consume(store_1.TechnologyRadarContext, { select: ['technologies', 'groups'] }),
        consume_1.consume(store_1.ApplicationStateContext, {
            select: [
                'breakpoint',
                'focusedTechnology',
                'selectedTechnology',
                'selectedGroup',
                'selectTechnology',
                'focusTechnology',
                'viewMode'
            ]
        })
    ], TechnologyList);
    return TechnologyList;
}(react_1.PureComponent));
exports.TechnologyList = TechnologyList;
//# sourceMappingURL=index.js.map
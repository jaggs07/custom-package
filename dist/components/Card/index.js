"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Card;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card(_ref) {
  var title = _ref.title,
      body = _ref.body,
      footer = _ref.footer;
  return _react.default.createElement("div", {
    className: "Card"
  }, _react.default.createElement("div", {
    className: "Card-header"
  }, title), _react.default.createElement("div", {
    className: "Card-body"
  }, body), _react.default.createElement("div", {
    className: "Card-footer"
  }, footer));
}
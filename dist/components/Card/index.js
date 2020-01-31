"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Card;

var _react = _interopRequireDefault(require("react"));

require("./index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Card() {
  return _react.default.createElement("div", {
    className: "Card"
  }, _react.default.createElement("div", {
    className: "Card-Header"
  }, "Card Title"), _react.default.createElement("div", {
    className: "Card-body"
  }, "Card Body"), _react.default.createElement("div", {
    className: "Card-footer"
  }, "Card Footer"));
}
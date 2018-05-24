"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.Page = Page;
exports.Header = Header;
exports.Body = Body;
exports.Footer = Footer;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _Paper = require("@material-ui/core/Paper");

var _Paper2 = _interopRequireDefault(_Paper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @description Styled Layout component
 * 
 * @example
 * <Page>
 *  <Header>header</Header>
 *  <Body>header</Body>
 *  <Footer>header</Footer>
 * </Page>
 */

var Layout = function (_Component) {
  _inherits(Layout, _Component);

  function Layout(props) {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).call(this, props));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        _Paper2.default,
        null,
        children
      );
    }
  }]);

  return Layout;
}(_react.Component);

exports.default = Layout;
function Page(props) {
  return _react2.default.createElement(
    "div",
    { className: "page" },
    props.children,
    _react2.default.createElement(
      "style",
      { jsx: true },
      "\n        .page {\n          display: flex;\n          height: 100%;\n          flex-direction: column;\n        }\n      "
    )
  );
}

function Header(props) {
  return _react2.default.createElement(
    "div",
    { className: "page_header" },
    props.children,
    _react2.default.createElement(
      "style",
      { jsx: true },
      "\n        .page_header {\n          background-color: #fff;\n          text-align: center;\n          position: relative;\n        }\n      "
    )
  );
}

function Body(props) {
  return _react2.default.createElement(
    "div",
    { className: "page_body" },
    props.children,
    _react2.default.createElement(
      "style",
      { jsx: true },
      "\n        .page_body {\n          flex: 1;\n          overflow: auto;\n          text-align: center;\n        }\n      "
    )
  );
}

function Footer(_ref) {
  var height = _ref.height,
      children = _ref.children;

  return _react2.default.createElement(
    "div",
    { className: "footer" },
    children,
    _react2.default.createElement(
      "style",
      { jsx: true },
      "\n        .footer {\n          background-color: #fff;\n          text-align: center;\n          position: relative;\n        }\n      "
    )
  );
}

//# sourceMappingURL=Layout.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.MenuItem = exports.SubMenu = exports.RightSubMenu = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Menu = require('./Menu.css');

var _Menu2 = _interopRequireDefault(_Menu);

var _RightSubMenu = require('./RightSubMenu');

var _RightSubMenu2 = _interopRequireDefault(_RightSubMenu);

var _SubMenu = require('./SubMenu');

var _SubMenu2 = _interopRequireDefault(_SubMenu);

var _MenuItem = require('./MenuItem');

var _MenuItem2 = _interopRequireDefault(_MenuItem);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_Component) {
	_inherits(Menu, _Component);

	function Menu(props) {
		_classCallCheck(this, Menu);

		return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));
	}

	_createClass(Menu, [{
		key: 'renderSubItem',
		value: function renderSubItem() {
			var _this2 = this;

			var children = this.props.children;


			return _react2.default.Children.map(children, function (child) {
				if (!child) {
					return;
				}

				return _react2.default.cloneElement(child, {
					children: child.props.children,
					isActive: false,
					preWordSpace: 0,
					width: _this2.props.width
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    maxHeight = _props.maxHeight,
			    className = _props.className,
			    onClick = _props.onClick;


			var userClass = className.split(" ").reduce(function (obj, str, index) {
				if (str != "") obj[str] = true;
				return obj;
			}, {});

			var height = parseInt(maxHeight) || 'inherit';

			var inlineStyle = {
				width: parseInt(width),
				maxHeight: height,
				overflow: parseInt(maxHeight) ? 'auto' : 'none'
			};

			var css = _bind2.default.bind(_Menu2.default);
			var style = css({
				"menu_ul_normal": true
			}, userClass);

			return _react2.default.createElement(
				'ul',
				{ className: style, style: inlineStyle, onClick: onClick },
				this.renderSubItem()
			);
		}
	}]);

	return Menu;
}(_react.Component);

Menu.defaultProps = {
	width: 150
};
exports.RightSubMenu = _RightSubMenu2.default;
exports.SubMenu = _SubMenu2.default;
exports.MenuItem = _MenuItem2.default;
exports.default = Menu;
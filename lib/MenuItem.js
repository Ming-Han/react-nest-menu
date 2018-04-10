'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _Menu = require('./Menu.css');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_Component) {
	_inherits(MenuItem, _Component);

	function MenuItem() {
		_classCallCheck(this, MenuItem);

		return _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).apply(this, arguments));
	}

	_createClass(MenuItem, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    children = _props.children,
			    classPrefix = _props.classPrefix,
			    preWordSpace = _props.preWordSpace,
			    onClick = _props.onClick;


			var css = _bind2.default.bind(_Menu2.default);
			var liCss = css({
				"menu_MenuItem_li": true
			});
			var aCss = css({
				"menu_a_normal": true
			});

			return _react2.default.createElement(
				'li',
				{ className: liCss },
				_react2.default.createElement(
					'a',
					{
						className: aCss,
						href: '#',
						style: { paddingLeft: preWordSpace },
						onClick: onClick
					},
					children
				)
			);
		}
	}]);

	return MenuItem;
}(_react.Component);

exports.default = MenuItem;
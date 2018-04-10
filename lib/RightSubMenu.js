'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _bind = require('classnames/bind');

var _bind2 = _interopRequireDefault(_bind);

var _Menu = require('./Menu.css');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var css = _bind2.default.bind(_Menu2.default);

var RightSubMenu = function (_Component) {
	_inherits(RightSubMenu, _Component);

	function RightSubMenu(props) {
		_classCallCheck(this, RightSubMenu);

		var _this = _possibleConstructorReturn(this, (RightSubMenu.__proto__ || Object.getPrototypeOf(RightSubMenu)).call(this, props));

		_this.stopPropagation.bind(_this);
		return _this;
	}

	_createClass(RightSubMenu, [{
		key: 'stopPropagation',
		value: function stopPropagation(e) {
			e.stopPropagation();
		}
	}, {
		key: 'renderSubItem',
		value: function renderSubItem() {
			var _props = this.props,
			    children = _props.children,
			    classPrefix = _props.classPrefix,
			    title = _props.title,
			    width = _props.width;


			var ulInlineStyle = {
				width: parseInt(width),
				left: parseInt(this.props.width) + 2
			};

			var style = css({
				"menu_ul_normal": true
			});

			var subs = _react2.default.Children.map(children, function (child) {
				if (!child) {
					return;
				}

				return _react2.default.cloneElement(child, {
					children: child.props.children,
					classPrefix: classPrefix,
					width: width
				});
			});

			return _react2.default.createElement(
				'ul',
				{ className: style, style: ulInlineStyle },
				subs
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    title = _props2.title,
			    onClick = _props2.onClick;


			var liCss = css({
				"menu_rightSub_li": true
			});

			var aCss = css({
				'menu_a_normal': true,
				'menu_rightSub_Arrow': true
			});

			return _react2.default.createElement(
				'li',
				{ className: liCss },
				_react2.default.createElement(
					'a',
					{
						className: aCss,
						href: '#',
						onClick: this.stopPropagation
					},
					title
				),
				this.renderSubItem()
			);
		}
	}]);

	return RightSubMenu;
}(_react.Component);

RightSubMenu.defaultProps = {
	classPrefix: 'menu_rightSub_li'
};
exports.default = RightSubMenu;
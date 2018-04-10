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

var SubMenu = function (_Component) {
	_inherits(SubMenu, _Component);

	function SubMenu(props) {
		_classCallCheck(this, SubMenu);

		var _this = _possibleConstructorReturn(this, (SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).call(this, props));

		_this.state = {
			isActive: false
		};
		return _this;
	}

	_createClass(SubMenu, [{
		key: 'toggleSubMenu',
		value: function toggleSubMenu(e) {
			e.stopPropagation();

			this.setState({
				isActive: !this.state.isActive
			});
		}
	}, {
		key: 'renderSubItem',
		value: function renderSubItem() {
			var _props = this.props,
			    children = _props.children,
			    classPrefix = _props.classPrefix,
			    preWordSpace = _props.preWordSpace,
			    title = _props.title;


			var childActive = !this.state.isActive;
			var css = _bind2.default.bind(_Menu2.default);
			var classes = css({
				"menu_SubMenu_ul": true,
				"menu_SubMenu_disabled": childActive
			});
			var space = parseInt(preWordSpace | 0) + parseInt(this.props.wordSpace);

			var subs = _react2.default.Children.map(children, function (child) {
				if (!child) {
					return;
				}

				return _react2.default.cloneElement(child, {
					children: child.props.children,
					classPrefix: classPrefix,
					isActive: childActive,
					preWordSpace: space
				});
			});

			return _react2.default.createElement(
				'ul',
				{ className: classes },
				subs
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props2 = this.props,
			    title = _props2.title,
			    preWordSpace = _props2.preWordSpace;

			var css = _bind2.default.bind(_Menu2.default);
			var aCss = css({
				'menu_a_normal': true,
				'menu_SubMenu_Arrow': true,
				"menu_arrow_transform": this.state.isActive
			});
			var liCss = css("menu_SubMenu_li");

			var space = parseInt(preWordSpace | 0) + parseInt(this.props.wordSpace);

			return _react2.default.createElement(
				'li',
				{ className: liCss },
				_react2.default.createElement(
					'a',
					{
						href: '#',
						className: aCss,
						style: { paddingLeft: space },
						onClick: this.toggleSubMenu.bind(this)
					},
					title
				),
				this.renderSubItem()
			);
		}
	}]);

	return SubMenu;
}(_react.Component);

SubMenu.defaultProps = {
	classPrefix: 'menu_SubMenu_li',
	wordSpace: '7px'
};
exports.default = SubMenu;
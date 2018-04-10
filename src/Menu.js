import React , { Component , cloneElement}from 'react';
import styles from './Menu.css';
import RightSubMenu from './RightSubMenu';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
import classNames from 'classnames/bind';


class Menu extends Component {

	static defaultProps = {
    	width : 150
  	}

	constructor(props){
		super(props);

	}

	renderSubItem(){
		const { children } = this.props;

		return React.Children.map(children , (child) => {
			if(!child) { return; }

			return React.cloneElement(child , {
				children:child.props.children,
				isActive:false,
				preWordSpace:0,
				width:this.props.width
			})
		});
	}

	render() {
		const { width , maxHeight , className , onClick } = this.props;
		
		let userClass = className.split(" ").reduce(function(obj, str, index) {
			if(str != "")
		  		obj[str] = true;
		  	return obj;
		}, {});

		const height = parseInt(maxHeight) || 'inherit';

		const inlineStyle = {
			width:parseInt(width),
			maxHeight : height,
			overflow : (parseInt(maxHeight)) ? 'auto' : 'none'
		};

		let css = classNames.bind(styles);
		let style = css({
			"menu_ul_normal" : true,
		},userClass)

		return (
			<ul className = { style } style = { inlineStyle } onClick={ onClick }>
				{this.renderSubItem()}
			</ul>
		);
	}
}
export { RightSubMenu , SubMenu , MenuItem };

export default Menu;
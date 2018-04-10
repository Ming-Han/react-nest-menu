import React , { Component }from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.css';

class SubMenu extends Component {

	static defaultProps = {
    	classPrefix: 'menu_SubMenu_li',
    	wordSpace : '7px'
  	}

	constructor(props) {
		super(props);

		this.state = {
			isActive : false
		}
	}

	toggleSubMenu(e) {
		 e.stopPropagation();

		this.setState({
			isActive : !this.state.isActive,
		})
	}

	renderSubItem() {
		const { children , classPrefix , preWordSpace, title } = this.props;

		let childActive = !this.state.isActive;
		let css = classNames.bind(styles);
		let classes = css({
			"menu_SubMenu_ul" : true,
			"menu_SubMenu_disabled" : childActive,
		})
		let space = parseInt((preWordSpace | 0)) + parseInt(this.props.wordSpace);
		
		const subs =  React.Children.map( children , (child) => {
			if(!child) { return ; }

			return React.cloneElement(child , {
				children:child.props.children,
				classPrefix:classPrefix,
				isActive:childActive,
				preWordSpace:space
			});
		});

		return (
			<ul className = { classes } >
				{subs}
			</ul>
		);

	}

	render() {		

		const { title , preWordSpace } = this.props;
		let css = classNames.bind(styles);
		let aCss = css({
			'menu_a_normal' : true,
			'menu_SubMenu_Arrow' : true,
			"menu_arrow_transform" : this.state.isActive
		});
		let liCss = css("menu_SubMenu_li");

		let space = parseInt((preWordSpace | 0)) + parseInt(this.props.wordSpace);

		return (
			<li className = { liCss } ><a 
				href="#" 
				className ={aCss}
				style = {{paddingLeft : space}}
				onClick = { this.toggleSubMenu.bind(this) }
				>{title}</a>
			{this.renderSubItem()}
			</li>
		);
		
	}
}

export default SubMenu;
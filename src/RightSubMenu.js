import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames/bind';
import styles from './Menu.css';

let css = classNames.bind(styles);

class RightSubMenu extends Component {

	static defaultProps = {
    	classPrefix: 'menu_rightSub_li',
  	};

	constructor(props) {
		super(props);
		this.stopPropagation.bind(this);
	}

	stopPropagation(e){
		e.stopPropagation();
	}

	renderSubItem() {

		const { children , classPrefix , title , width} = this.props;

		let ulInlineStyle = {
			width : parseInt(width),
			left : parseInt(this.props.width) + 2 
		}

		let style = css({
			"menu_ul_normal" : true
		})

		const subs = React.Children.map( children , (child) => {
			if(!child) { return ; }

			return React.cloneElement(child , {
				children:child.props.children,
				classPrefix : classPrefix,
				width:width
			});
		});



		return (
			<ul className = { style } style = {ulInlineStyle} >
				{subs}
			</ul>
		);
	}

	render() {
		const { title , onClick } = this.props;

		let liCss = css({
			"menu_rightSub_li" : true,
		})

		let aCss = css({
			'menu_a_normal' : true,
			'menu_rightSub_Arrow' : true,
		});


		return(
			<li className = { liCss } ><a 
					className = { aCss } 
					href="#" 
					onClick = { this.stopPropagation } 
				>{title}</a>
				{this.renderSubItem()}
			</li> 
		);
		
	}
}

export default RightSubMenu;
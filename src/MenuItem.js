import React , { Component }from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.css';

class MenuItem extends Component {
	render(){
		const { children , classPrefix , preWordSpace , onClick } = this.props;

		let css = classNames.bind(styles);
		let liCss = css({
			"menu_MenuItem_li" : true
		})
		let aCss = css({
			"menu_a_normal" : true
		})

		return (
			<li className = { liCss }>
				<a 
					className = { aCss } 
					href="#"
					style = {{paddingLeft:preWordSpace}}
					onClick = { onClick }
				>{children}</a>
			</li>
		);
	}
}

export default MenuItem	;
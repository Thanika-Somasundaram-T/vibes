import React from 'react';
import './sideBarOption.css';

const SideBarOption = ({ title, Icon }) => {

	return (
		<div id={ title } className="side-bar-option">
			{ Icon && <Icon className="side-bar-option-icon" /> }	
			{ Icon ? <h4>{ title }</h4> : <p>{ title }</p> }
		</div>
	);
};

export default SideBarOption;
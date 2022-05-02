import React from 'react';
import './player.css';
import SideBar from './sideBar';
import Body from './body';
import Footer from './footer';

const Player = ({ spotify }) => {
	return(
		<div className='player'>
			<div className="player-body">
				<SideBar/>
				<Body/>
			</div>
		<Footer/>
		</div>
	);
};

export default Player;
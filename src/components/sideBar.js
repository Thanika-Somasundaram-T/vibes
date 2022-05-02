import React from 'react';
import './sideBar.css';
import SideBarOption from './sideBarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import { useDataLayerValue } from '../dataLayer';

const Playlists = (playlists) => playlists?.items.map((item) => <SideBarOption title={ item.name }/>)

const SideBar = () => {
	const [{ playlists }, dispatch] = useDataLayerValue();
	return (
		<div className="side-bar">
			<img
				className="side-bar-logo"
				src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" 
				alt="spotify logo"/>
				<SideBarOption title="Home" Icon={ HomeIcon }/>
				<SideBarOption title="Search" Icon={ SearchIcon }/>
				<SideBarOption title="Your Library" Icon={ LibraryMusicIcon}/>
				<br/>
				<strong className="side-bar-title">PLAYLISTS</strong>
				<hr/>
				{ Playlists(playlists) }
		</div>
	);
};

export default SideBar;
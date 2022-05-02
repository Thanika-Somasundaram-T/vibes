import React from 'react';
import './footer.css';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ShuffleIcon from '@mui/icons-material/Shuffle';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import RepeatIcon from '@mui/icons-material/Repeat';
import Grid from '@mui/material/Grid';
import PlaylistAddRoundedIcon from '@mui/icons-material/PlaylistAddRounded';
import VolumeDownRoundedIcon from '@mui/icons-material/VolumeDownRounded';
import Slider from '@mui/material/Slider';


const Footer = () => {

	return (
		<div className="footer">
			<div className="footer-left">
				<img src="https://upload.wikimedia.org/wikipedia/en/e/e6/The_Weeknd_-_Blinding_Lights.png" alt="song"/>
				<div className="footer-song-info">
					<h4>Blinding Lights</h4>
					<p>The Weeknd</p>
				</div>
			</div>
			<div className="footer-center">
				<ShuffleIcon className="footer-center-icon"/>
				<SkipPreviousIcon className="footer-center-icon"/>
				<PlayCircleIcon fontSize="large" className="footer-center-icon"/>
				<SkipNextIcon className="footer-center-icon"/>
				<RepeatIcon className="footer-center-icon"/>
			</div>
			<div className="footer-right">
				<Grid container spacing={ 2 }>
					<Grid item>
						<PlaylistAddRoundedIcon/>
					</Grid>
					<Grid item>
							<VolumeDownRoundedIcon/>
					</Grid>
					<Grid item xs>
						<Slider size="small" defaultValue={50}/>
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default Footer;
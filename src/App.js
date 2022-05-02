import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login';
import Player from './components/player';
import Spotify from './components/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import { useDataLayerValue } from './dataLayer';

const spotify = new SpotifyWebApi();

const { getTokenFromUrl } = Spotify;

function App() {

	const [{ playlists, token }, dispatch] = useDataLayerValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		const _token = hash.access_token;

		if(_token) {

			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});
			spotify.setAccessToken(_token);
			spotify.getMe().then((user) => {
				
				dispatch({
					type: 'SET_USER',
					user: user,
				});
			})

			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				})
			});
		}
		// console.log(...playlists);
	}, []);

	return (
		<div className="App">
		{
			token
			? <Player spotify={ spotify }/>
			: <Login/>
		}
		</div>
	);
}

export default App;

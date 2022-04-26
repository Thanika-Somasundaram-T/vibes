import React, { useEffect, useState } from 'react';
import './App.css';
import Login from './components/login';
import Spotify from './components/spotify';

const { getTokenFromUrl } = Spotify;

function App() {

	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromUrl();
		window.location.hash = '';
		const _token = hash.access_token;

		if(_token) {
			setToken(_token);
		}

		console.log("i have a token: =>", hash);
	}, []);

	return (
		<div className="App">
		{
			token
			? <h1>I am Logged in</h1>
			: <Login/>
		}
		</div>
	);
}

export default App;

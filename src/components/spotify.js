// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

const authEndPoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "4bec80536d154c0b95923e6ef7d659ba";

const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
];

const loginUrl = `${ authEndPoint }?client_id=${ clientId }&redirect_uri=${ redirectUri }&scope=${ scopes.join("%20")}&response_type=token&show_dialog=true`;

const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			let parts = item.split('=')
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};


const Spotify = {
	authEndPoint,
	loginUrl,
	getTokenFromUrl,
};

export default Spotify;
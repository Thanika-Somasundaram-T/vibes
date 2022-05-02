export const initialState = {
	user: null,
	playLists: [],
	playing: false,
	item: null,
	token: 'BQCWJC2xiXJ_s-qVTCPfM-gUk80Tw7tVW7PGMmEl34jJ_YLAKAhzmuncjYh1Okam8mT_rjbIGwPzHWomGYrklkzp4PYdfw5x9RPzM3igCilh5o2K5R10-WgLug95KZ2kf3vQQJEPcHu1krcoIuQHLSkoiylQCGp4kkWENZT6S8pinV2cLGmo',
};

const reducer = ( state, action ) => {
	console.log(action);
	
	switch(action.type) {
		case 'SET_USER':
			return {
				...state,
				user: action.user
			};
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			}
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			}
		default:
			return state;  
	}
}

export default reducer;
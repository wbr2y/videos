import axios from 'axios';

const KEY = 'AIzaSyDohos8q5QZJKcYLnxpoPU7vBwX-QxV6QM';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
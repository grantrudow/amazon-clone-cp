import axios from 'axios';

const instane = axios.create({
	baseURL: '...'  //The API (cloud function) URL
});

export default axios;
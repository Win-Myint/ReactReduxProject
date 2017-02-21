import axios from 'axios';

var getData = function(str_username){
	return axios.get(`https://api.github.com/search/users?q=${str_username}&page=1&per_page=6`)
}

export { getData };
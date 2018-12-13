// ES5 syntax
const axios = require('axios');

module.exports = {
    fetchPopularRepos: (language) => {
        const encodedURI = window.encodeURI(`https://api.github.com/search/repositories?q=stars:>1+language:${language}&sort=stars&order=desc&type=Repositories`);
        return axios.get(encodedURI)
            .then(res => res.data.items)
            .catch(err => { throw new Error(err) });
    }
};
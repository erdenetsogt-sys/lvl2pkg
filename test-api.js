const axios = require("axios");
axios.get('https://www.juniordevelopercentral.com')
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    })
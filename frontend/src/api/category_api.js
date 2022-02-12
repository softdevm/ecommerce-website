import { HOST } from './hosts';

const endpoint = {
    get_categories: '/api/category'
}

function getCategories(callback) {
    let request = new Request(HOST.backend_api + endpoint.get_categories, {
        method: 'GET',
    });

    fetch(request)
        .then(
            function(response) {
                if (response.ok) {
                    response.json().then(json => callback(json, response.status,null));
                }
                else {
                    response.json().then(err => callback(null, response.status,  err));
                }
            })
        .catch(function (err) {
            //catch any other unexpected error, and set custom code for error = 1
            callback(null, 1, err)
        });
}


export {
    getCategories
}
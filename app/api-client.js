import xhr from 'xhr';
import merge from 'lodash.merge';

const apiUrl = process.env.API_URL || 'http://localhost:3000/api';

export function getThingsSinceDate(date, callback) {
    request('/things?since=' + date, callback);
}

export function createThing(thing, callback) {
    request('/things', {
        method: 'post',
        json: thing
    }, callback);
}

function request(url, opts, callback) {
    if (typeof opts === 'function') {
        callback = opts;
        opts = {};
    }

    xhr(merge({
        uri: apiUrl + url,
        json: true
    }, opts), callback);
}

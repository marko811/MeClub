import _ from 'lodash';

// add username concept

export default class User {

    constructor(data) {
        _.assignIn(this, data);
    }

    get fullName() {
        return this.displayName;
    }

    get firstName(){
        return _.get(this, 'name.first', _.first(_.words(this.fullName)));
    }

    get lastName(){
        return _.get(this, 'name.last',  _.last(_.words(this.fullName)));
    }

    get photo(){
        // @TODO add default?
        return this.photoUrl;
    }

    toString() {
        return `(${this.fullName})`;
    }
}

/** FROM firebase auth
{
    providerData: [
        {
            "email": null,
            "photoURL": "https://scontent....",
            "phoneNumber": null,
            "displayName": 'Josh Coffman',
            "uid": "101558...",
            "providerId": "facebook.com"
        }
    ],
    "photoURL": "https://scontent.....",
    "phoneNumber": null,
    "displayName": "Josh Coffman",
    "email": "joshmcoffman@gmail.com",
    "isAnonymous": false,
    "emailVerified": false,
    "providerId": "firebase",
    "uid": "NCLRGK.........................................."
}
 */
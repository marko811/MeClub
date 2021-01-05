/**
 * Responsible for handling MeClub activities.
 */

import firebase from 'react-native-firebase';
import _ from 'lodash';

import RNFS from 'react-native-fs';

const activities = [
    {
        'id': 'hiking',
        'name': 'Hiking',
        'icon': 'hiking.png',
        'categories': [
            'Backpacking',
            'Beach',
            'Camping',
            'Casual',
            'Desert',
            'Forest',
            'Incline',
            'Mountain'
        ],
        'options': [
            'Need Transport',
            'Transport Available',
            'N/A'
        ],
        'level': [
            'Beginner',
            'Intermediate',
            'Expert',
            'All'
        ],
        'share': {
            'created': {
                'facebook': {
                    'text': 'I just created a hiking event. Want to join? Find out more ...'
                },
                'email': {
                    'text': 'Hi, I just created a hiking activity on MeClub. Want to join? Find out more at http://www.meclub.com/activity.html?q='
                },
                'sms': {
                    'text': 'Hi, I just found a hiker for a hiking event I created on MeClub. Feel like becoming more active too?'
                }
            },
            'recruited' : {
                'facebook': {
                    'text': 'Found a hiker! Feel like becoming more active too?'
                },
                'email': {
                    'text': 'Hi, I just found a hiker for a hiking event I created on MeClub. Feel like becoming more active too?'
                },
                'sms': {
                    'text': 'Hi, I just found a hiker for a hiking event I created on MeClub. Feel like becoming more active too?'
                }
            }
        }
    }
];

class Activity {

    constructor(data) {
        _.assignIn(this, data);
    }

    alert(){
        return alert(this.name);
    }
}

class Repository {

    // administrative only
    syncActivities(){
        activities.forEach((activity) => {
            // read the file
            RNFS.readFileAssets(activity.icon, 'base64').then(data => {
                activity.icon = 'data:image/png;base64,' + data;
                this.upsert(activity.id, _.omit(activity, ['id']));
            });
        });
    }

    constructor(){
        this.collection = firebase.firestore().collection('activities');
    }

    find(id){
        return this.collection.doc(id).get().then((doc) => { return new Activity(_.merge(doc.data(), {id: doc.id})); });
    }

    all(){
        return this.collection.get().then(function(querySnapshot) {
            let collection = [];

            querySnapshot.forEach(function(doc) {
                collection.push(new Activity(_.merge(doc.data(), {"id": doc.id})));
            });

            return collection;
        });
    }

    upsert(id, doc){
        return this.collection.doc(id).set(_.omit(doc, ['id']), { merge: true });
    }
}

// export const so we have a singleton
export const ActivityRepository = new Repository();


/**
 ActivityRepository.find('hiking').then((Activity) => { Activity.alert(); });

 ActivityRepository.all().then((docs) => {
            //console.warn(JSON.stringify(docs));
            let first = _.first(docs);
            console.warn(JSON.stringify(first));
            first.alert();
        });
 */
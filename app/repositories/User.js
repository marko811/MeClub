import User from '../entities/User';
import firebase from 'react-native-firebase';
import _ from 'lodash';
import { ActivityRepository } from '../repositories/Activity';

class Repository {

    constructor(){
        this.collection = firebase.firestore().collection('users');
    }

    save(user){
        return this.collection.doc(user.id).set(_.omit(user, ['id']), { merge: true });
    }

    upsert(id, doc){
        return this.collection.doc(id).set(_.omit(doc, ['id']), { merge: true });
    }

    make(data) {
        return new User(data);
    }

    find(id){
        return this.collection.doc(id).get().then((doc) => { return this.make(_.merge(doc.data(), {id: id})) });
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

    getActivities(user){

        let ids = _.map(_.get(user, 'activities', null), 'id');

        if (! ids){
            return [];
        }

        console.warn(_.get(user, 'activities', null))

        console.warn("Fetching activities: ", ids);

        return ActivityRepository.collection.where('id', '==', 'hiking').get();
    }
}

// export const so we have a singleton
export const UserRepository = new Repository();
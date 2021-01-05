import firebase from 'react-native-firebase';

import _ from 'lodash';

class Repository {

    constructor(){
        this.storage = firebase.storage();
        // create a root reference
        this.storageRef = this.storage.ref();
    }

    root(){
        return this.storageRef;
    }

    getFile(path){
        return this.storageRef.child(path);
    }

    metadata(fileRef){
        return fileRef.getMetadata();
    }
}

// export const so we have a singleton
export const CloudStorageRepository = new Repository();
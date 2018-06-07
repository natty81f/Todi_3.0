import firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyCPUPnYcUfHhbwJuHMD-cE4YU2ZwJkeQlc',
    authDomain: 'todi-9d9ef.firebaseapp.com',
    databaseURL: 'https://todi-9d9ef.firebaseio.com',
    projectId: 'todi-9d9ef',
    storageBucket: '',
    messagingSenderId: '642409533897'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();

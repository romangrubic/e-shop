// We need first one to allow firebase
import firebase from 'firebase/app';
// Next are the ones we wish to implement to our app
// Firestore as database
import 'firebase/firestore';
// Auth for user authorization
import 'firebase/auth';
import directoryComponent from '../components/directory/directory.component';

// Configuration for Firebase
const config = {
    apiKey: 'AIzaSyCh7Xv1HCF5A-HLUTc-2wcaJVL8WHP_rEw',
    authDomain: 'shop-db-a9eed.firebaseapp.com',
    databaseURL: 'https://shop-db-a9eed.firebaseio.com',
    projectId: 'shop-db-a9eed',
    storageBucket: 'shop-db-a9eed.appspot.com',
    messagingSenderId: '134068313807',
    appId: '1:134068313807:web:ae018b5ceac01842aba1ba',
};

// To create a user in our Firebase Database
export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData,
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

// export const addCollectionsAndDocuments = async (
//     collectionKey,
//     objectsToAdd
// ) => {
//     const collectionRef = firestore.collection(collectionKey);
//     console.log(collectionRef);

//     const batch = firestore.batch();
//     objectsToAdd.forEach((obj) => {
//         const newDocRef = collectionRef.doc();
//         batch.set(newDocRef, obj);
//     });

//     return await batch.commit();
// };

// Taking collections from Firebase and setting routeName for shop component
export const convertCollectionsSnapshotToMap = (collectionsSnapshot) => {
    const transformedCollection = collectionsSnapshot.docs.map((doc) => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
        };
    });
    return transformedCollection.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection;
        return accumulator;
    }, {});
};

// Initializing Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
// To apply the default browser preference language instead of explicitly setting it.
firebase.auth().useDeviceLanguage();
export const firestore = firebase.firestore();

// Google sign-in https://firebase.google.com/docs/auth/web/google-signin
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

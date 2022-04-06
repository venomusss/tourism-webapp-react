import {initializeApp} from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth"
import {
    getFirestore,
    collection,
    addDoc,
    query, where, getDocs
} from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAkBRxravwg9cWcehtZd37Rs7K80kALxFA",
    authDomain: "tourism-webapp-react.firebaseapp.com",
    projectId: "tourism-webapp-react",
    storageBucket: "tourism-webapp-react.appspot.com",
    messagingSenderId: "405161810835",
    appId: "1:405161810835:web:8da45ffc38ba0be2a6a666"
};

const app = initializeApp(firebaseConfig);

//Init services
export const auth = getAuth(app);
export const db = getFirestore(app);

//DB functions
const usersCollection = collection(db, 'users')

//Auth functions
const googleProvider = new GoogleAuthProvider();

export const loginAccountWithGoogle = async () => {
    try {
        const res = await signInWithPopup(auth, googleProvider);
        const user = res.user;
        const q = query(collection(db, "users"), where("uid", "==", user.uid));
        const docs = await getDocs(q);
        if (docs.docs.length === 0) {
            await addDoc(collection(db, "users"), {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                role: 'USER'
            });
        }
    } catch (error) {
        console.error(error);
    }
}

export const createAccountWithEmailAndPassword = async (email: string, password: string, name: string) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(usersCollection, {
            uid: user.uid,
            name: name,
            email: email,
            role: 'USER'
        })
    } catch (error) {
        console.error(error)
    }
}

export const loginWithEmailAndPassword = async (email: string, password: string) => {
    try {
        await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
        console.error(error)
    }
}

export const logOut = async () => {
    await signOut(auth);
};
import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBoSvcqf4lD8FErxnIPpdqyuN_ZegO2IAM",
    authDomain: "marketplace-hackfest.firebaseapp.com",
    projectId: "marketplace-hackfest",
    storageBucket: "marketplace-hackfest.appspot.com",
    messagingSenderId: "429619551232",
    appId: "1:429619551232:web:dfd175edf61dd7b4904ce5",
    measurementId: "G-1JM7YD1G2E"
};

export const app = initializeApp(firebaseConfig)
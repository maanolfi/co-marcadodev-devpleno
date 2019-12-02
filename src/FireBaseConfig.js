const config = {
    apiKey: "AIzaSyCpX9nHKgUu5wzNUiHnpplNkZWpQNAlWzk",
    authDomain: "loja-bd2a2.firebaseapp.com",
    databaseURL: "https://loja-bd2a2.firebaseio.com",
    projectId: "loja-bd2a2",
    storageBucket: "gs://loja-bd2a2.appspot.com",
    messagingSenderId: "794666367708" }

    const Rebase = require('re-base')
    const firebase = require('firebase/app')
    require('firebase/database')
    require('firebase/storage')

    const app = firebase.initializeApp(config)
    const base = Rebase.createClass(app.database())

    export const storage = app.storage()
    export default base
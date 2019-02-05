import Firebase from 'firebase';
 let config = {
    apiKey: "AAAAepSNdf4:APA91bEYdZM7Luxyslh6TH4nz00-dGDQ6bOHmJpzt0MeNJOjNz6ON1_PnArGiIZauUfeBWqSguPGi_3yNHkRoWQvCmy_ssqpYtqomegsklwhe09odxzE5YrCO1jGLpr4LDjP9Wkojn-k",
    authDomain: "intervention-93186.firebaseapp.com ",
    databaseURL: "https://intervention-93186.firebaseio.com/",
    projectId: "intervention-93186",
    storageBucket: "gs://intervention-93186.appspot.com/",
    
  };
let app = Firebase.initializeApp(config);
export const db = app.database();
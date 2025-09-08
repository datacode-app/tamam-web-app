importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js"
);
// // Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyDZIUBAwqInb1coDQPulQaloEhqF1KIh_U",
  authDomain: "tamam-35b98.firebaseapp.com",
  projectId: "tamam-35b98",
  storageBucket: "tamam-35b98.firebasestorage.app",
  messagingSenderId: "81567664901",
  appId: "1:81567664901:web:8ea043ca7aed6ba74a056c",
  measurementId: "G-RGB6KW73NN",
};

firebase?.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase?.messaging();

messaging.onBackgroundMessage(function (payload) {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

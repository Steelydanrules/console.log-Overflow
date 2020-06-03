import React from "react";
import ReactDOM from "react-dom";
<<<<<<< HEAD

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>testing</h1>, root);
=======
import Root from './components/root'
import configureStore from './store/store'



document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  
  const root = document.getElementById("root");
  window.getState = store.getState


  ReactDOM.render(<Root store={store}/>, root);
<<<<<<< HEAD
>>>>>>> auth
});
=======
});

>>>>>>> auth

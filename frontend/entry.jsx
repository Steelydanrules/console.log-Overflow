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
  const root = document.getElementById("root");
  const store = configureStore()
  ReactDOM.render(<Root store={store}/>, root);
>>>>>>> auth
});
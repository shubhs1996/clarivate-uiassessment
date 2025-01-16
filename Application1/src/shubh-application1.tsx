import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from "react-router-dom"
import Root from "./root.component";
import store from "./redux/store";
import "./style/main.scss"

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (props) => (
    <Provider store={store}>
      <Router>
       <Root {...props}/>
       </Router>
    </Provider>
  ),
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

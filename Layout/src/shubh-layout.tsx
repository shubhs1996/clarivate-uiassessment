import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router } from "react-router-dom"
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import "./style/_style.scss"

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (props) => {
    return <Router>
      <Root />
    </Router>;
  },
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;

//higher order component(hoc)- a component that renders another component

import React, { Component } from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info please dont share</p>}

      <WrappedComponent {...props} />
    </div>
  );
};

const requestAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please Login to view the info</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requestAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="These are the details" />,
//   document.querySelector("#root")
// );
ReactDOM.render(
  <AuthInfo isAuthenticated={false} info="These are the details" />,
  document.querySelector("#root")
);

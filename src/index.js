import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    // success callback
    (position) => console.log(position),
    // failure callback
    (err) => console.log(err)
  );

  return <div>Hi there!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));

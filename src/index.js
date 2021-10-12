import React from "react";
import ReactDOM from "react-dom";

// This Allows us to pull in a bunch of functions from 'React.Component' into our class, in this case the 'App Class'.
class App extends React.Component {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => console.log(position),
      // failure callback
      (err) => console.log(err)
    );

    return <div>Latitude: </div>;
  }
}

// *** FUNCTIONAL COMPONENT ***
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     // success callback
//     (position) => console.log(position),
//     // failure callback
//     (err) => console.log(err)
//   );

//   return <div>Latitude: </div>;
// };

ReactDOM.render(<App />, document.querySelector("#root"));

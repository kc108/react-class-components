import React from "react";
import ReactDOM from "react-dom";

// This Allows us to pull in a bunch of functions from 'React.Component' into our class, in this case the 'App Class'.
class App extends React.Component {
  // The very first fnct to run, any time an instance is create, it will be called before anything else
  constructor(props) {
    // Required: This super() is needed to set up a fnct for us
    super(props);

    // This is our State Object
    // use null when we do not know what it is initially
    // *** THIS IS THE ONLY TIME WE DO A DIRECT ASSIGNMENT TO 'THIS.STATE' ***
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => {
        // We called setState!!!
        this.setState({ lat: position.coords.latitude });
        // //never setState to something else like this
        // // this.state.lat = position.coords.latitude
        // ** One exception: when we Initialize are State in the render function
      },
      // failure callback
      (err) => console.log(err)
    );
  }

  render() {
    return <div>Latitude: {this.state.lat}</div>;
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

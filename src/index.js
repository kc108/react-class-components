import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";

import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// This Allows us to pull in a bunch of functions from 'React.Component' into our class, in this case the 'App Class'.
class App extends React.Component {
  // The very first fnct to run, any time an instance is create, it will be called before anything else
  // //constructor(props) {
  //   // Required: This super() is needed to set up a fnct for us
  //   // super(props);

  //   // This is our State Object
  //   // use null when we do not know what it is initially
  //   // *** THIS IS THE ONLY TIME WE DO A DIRECT ASSIGNMENT TO 'THIS.STATE' ***
  //   // this.state = { lat: null, errorMessage: "" };
  // // }

  // Refactored code from above
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      // success callback
      (position) => this.setState({ lat: position.coords.latitude }),
      // failure callback
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>{this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
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

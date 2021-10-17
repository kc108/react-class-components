import React from "react";

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      {/* <div className="ui big text loader">{props.message || 'Loading...'}</div> */}
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};

// Will set Default props, more elegant that commented out line (Line 6)
Spinner.defaultProps = {
  message: "Loading...",
};

export default Spinner;

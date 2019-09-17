import React, { createElement, useState } from "react";

//Let's simulate a React library from npm:

export default props => {
  const [val, setVal] = useState(0);
  return React.createElement(
    "div",
    null,
    React.createElement("div", null, "Hello World!"),
    React.createElement("br", null),
    React.createElement(
      "div",
      null,
      "Current Value: ",
      val,
      React.createElement(
        "button",
        {
          onClick: () => setVal(val => val + 1)
        },
        "Incremenet"
      ),
      React.createElement(
        "button",
        {
          onClick: () => setVal(val => val - 1)
        },
        "Decrement"
      )
    )
  );
};

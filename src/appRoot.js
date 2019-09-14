import React from "react";
import { render } from "react-dom";

import App from "./mainComponent";

const target = document.createElement("div");
document.body.appendChild(target);

render(<App />, target);

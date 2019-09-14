import { render, h } from "preact";

import App from "./mainComponent";

const target = document.createElement("div");
document.body.appendChild(target);

render(<App />, target);

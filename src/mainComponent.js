import { h } from "preact";
import { useState } from "preact/hooks";

export default props => {
  const [val, setVal] = useState(0);
  return (
    <div>
      <div>Hello World!</div>
      <br />
      <div>
        Current Value: {val}
        <button onClick={() => setVal(val => val + 1)}>Incremenet</button>
        <button onClick={() => setVal(val => val - 1)}>Decrement</button>
      </div>
    </div>
  );
};

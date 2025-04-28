import { useState } from "react";

const Comp1 = () => {
  const [state, setState] = useState(0)
  const increment = () => {
    setState((state) => state + 1)
  }
  return (
    <div>
      <p>
        state is: {state}
      </p>
      <button onClick={increment}>click</button>
    </div>
  );
};
export default Comp1
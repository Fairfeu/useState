import { useState } from "react";

const Comp1 = () => {
  const [state, setState] = useState(0)
  const increment = () => {
    setState((state) => state + 1)
  }
  return (
    <div>
      <button onClick={increment}>click</button>
      <p> state is: {state}</p>
    </div>
  );
};
export default Comp1
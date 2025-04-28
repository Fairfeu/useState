import { useState } from "react";
import ChildComponent from "./ChildComponent";
import SiblingComponent from "./SiblingCompont";
const ParentComponent = () => {
  const [counter, setCounter] = useState(0)
  const increaseCount = () => setCounter((counter) => counter + 1)
  const resetCounter = () => setCounter(0)
  const setRandom = () => setCounter(Math.ceil(Math.random() * 10))
  const decreaseCount = () => setCounter((counter) => counter > 0 ? counter - 1 : counter)
  const name = 'Oleg'

  return (
    <div>
      <p>count is: {counter}</p>
      <button onClick={increaseCount}>Increase</button>
      <button onClick={resetCounter}>Reset</button>
      <button onClick={setRandom}>setRandom</button>
      <button onClick={decreaseCount}>Decrease</button>
      <ChildComponent name={name} count={counter} />
      <SiblingComponent />
    </div>
  );
};
export default ParentComponent
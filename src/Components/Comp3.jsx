import { useState } from "react";

const Comp3 = () => {
  const [input, setInput] = useState('')
  const writeText = (inp) => setInput(inp.target.value)
  return (
    <div>
      <input onInput={writeText} type="text" />
      <p>text: {input}</p>
    </div>
  );
};
export default Comp3
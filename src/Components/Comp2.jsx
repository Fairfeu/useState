import { useState } from "react";

const Comp2 = () => {
  const [text, setText] = useState(false)
  const showText = () => {
    setText((text) => !text)
  }
  return (
    <p>

      <button onClick={showText}>Show/Hide text</button>
      <span>
        {text && <span> Some text :</span>}
      </span>
    </p>
  );
};
export default Comp2
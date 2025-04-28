import { useState } from "react";

const Comp2 = () => {
  const [text, setText] = useState(false)
  const showText = () => {
    setText((text) => !text)
  }
  return (
    <div>
      {text && <p> Some text  :</p>}
      <button onClick={showText}>Show/Hide text</button>
    </div>
  );
};
export default Comp2
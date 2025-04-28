import { useState } from "react";

const SiblingComponent = () => {
  const [text, setText] = useState('sample text')
  const changeText = () => setText(('REDEV'))
  return (
    <div>
      <p>Current text: {text}</p>
      <button onClick={changeText} >Change text</button>
    </div>
  );
};
export default SiblingComponent
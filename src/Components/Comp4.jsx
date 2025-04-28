import { useState } from "react";

const Comp4 = () => {
  const [changedColor, setColor] = useState('')
  const randomColor = () => {
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    setColor(`rgb(${red}, ${green}, ${blue})`)

  }
  return (
    <div>
      <button onClick={randomColor}>change color</button>
      <p style={{ color: changedColor }} >change color text</p>
    </div>
  );
};
export default Comp4
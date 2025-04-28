const ChildComponent = ({ name, count }) => {
  return (
    <div>
      <p>
        Hello, {name}!
      </p>
      <p>
        Current count is: {count}
      </p>
    </div>
  );
};
export default ChildComponent
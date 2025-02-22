import { memo, useCallback, useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions. Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
  const [count, setCount] = useState(0);

  // Your code starts here
  const handleIncrement = useCallback(() => {
    console.log("handleIncrement called");
    setCount(count + 1);
  }, [count]);

  const handleDecrement = useCallback(() => {
    console.log("handleDecrement called");
    setCount(count - 1);
  }, [count]);
  // Your code ends here

  return (
    <div>
      <p>Count: {count}</p>
      <CounterButtons
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
}

const CounterButtons = memo(({ onIncrement, onDecrement }) => {
    console.log('memo called');
  return (
    <>
      <div>
        <br />
        <br />
        <button style={{ marginLeft: 10 }} onClick={onIncrement}>
          Increment
        </button>
        <br />
        <br />
        <button onClick={onDecrement}>Decrement</button>
      </div>
    </>
  );
});

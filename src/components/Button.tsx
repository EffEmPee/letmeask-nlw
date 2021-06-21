import { useState } from 'react';

export function Button() {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(1 + counter);
  }

  return (
    <button onClick={increment}>
      {counter}
    </button>
  );
}
import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('Tick');
      setCount((prev) => prev + 1);
    }, 1000);

    // Cleanup function
    return () => {
      console.log('Cleanup: clearing interval');
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold">⏱️ Timer: {count}</h2>
    </div>
  );
};

export default Timer;

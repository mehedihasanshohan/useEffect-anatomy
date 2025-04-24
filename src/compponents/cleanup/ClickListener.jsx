import React, { useEffect } from 'react';

const ClickListener = () => {
  useEffect(() => {
    const handleClick = () => {
      console.log('Window was clicked!');
    };

    window.addEventListener('click', handleClick);

    // Cleanup function
    // return () => {
    //   console.log('Cleanup: removing event listener');
    //   window.removeEventListener('click', handleClick);
    // };
  }, []);

  return (
    <div className="p-4 text-center">
      <h2 className="text-xl font-bold">Click anywhere on the window 👇</h2>
    </div>
  );
};

export default ClickListener;

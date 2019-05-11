import React, { useState } from 'react';

const useStateComponent = () => {
  const [name, setName] = useState('');
  return (
    <section>
      <h3>Use State</h3>
      {name && <p>{name}</p>}
      <button onClick={() => setName('YoYea')}>click me!</button>
    </section>
  );
};

export default useStateComponent;

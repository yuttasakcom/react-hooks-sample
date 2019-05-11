import React, { useState, useEffect } from 'react';

const useStateComponent = () => {
  const [name, setName] = useState();

  useEffect(() => {
    setName('YoYea');
  });

  return (
    <section>
      <h3>Use Effect</h3>
      {name && <p>{name}</p>}
    </section>
  );
};

export default useStateComponent;

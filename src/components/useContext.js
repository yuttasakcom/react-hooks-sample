import React, { useContext } from 'react';
import { ConfigContext } from './App';

const useStateComponent = () => {
  const context = useContext(ConfigContext);

  return (
    <section>
      <h3>Use Context</h3>
      {context.name && <p>{context.name}</p>}
    </section>
  );
};

export default useStateComponent;

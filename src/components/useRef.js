import React, { useRef } from 'react';

const useStateComponent = () => {
  const name = useRef(null);
  return (
    <section>
      <h3>Use Ref</h3>
      <p ref={name} style={{ color: 'blue' }}>
        Yo
      </p>

      <button
        onMouseOver={() => (name.current.style.color = 'red')}
        onMouseOut={() => (name.current.style.color = 'blue')}
      >
        on mouse over me!
      </button>
    </section>
  );
};

export default useStateComponent;

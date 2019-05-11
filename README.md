# React Hooks Sample

## Use State

```javascript
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
```

## Use Ref

```javascript
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
```

## Use Effect

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

```javascript
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
```

## Use Context

```javascript
// file App.js

export const ConfigContext = React.createContext();

const configValue = {
  name: 'YoYea',
};

...

<ConfigContext.Provider value={configValue}>
  <UseContext />
</ConfigContext.Provider>

// file useContext.js
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

```

## Use Reducer

```javascript
import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const usersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERS':
      return action.payload;

    default:
      return state;
  }
};

const useStateComponent = () => {
  const [users, dispatch] = useReducer(usersReducer, []);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(res => res.data)
      .then(users => {
        dispatch({
          type: 'SET_USERS',
          payload: users,
        });
      });
  });

  return (
    <section>
      <h3>Use Reducer</h3>
      {users && (
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default useStateComponent;
```

## Use Callback

## Use Memo

import React from 'react';

import UseStateComponent from './useState';
import UseRef from './useRef';
import UseEffect from './useEffect';
import UseContext from './useContext';
import UseReducer from './useReducer';

export const ConfigContext = React.createContext();

const configValue = {
  name: 'YoYea',
  users: [],
};

const App = () => (
  <div>
    <UseStateComponent />
    <UseRef />
    <UseEffect />
    <ConfigContext.Provider value={configValue}>
      <UseContext />
    </ConfigContext.Provider>
    <UseReducer initialState={configValue.users} />
  </div>
);

export default App;

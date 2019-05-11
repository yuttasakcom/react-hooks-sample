import React from 'react';

import UseStateComponent from './useState';
import UseRef from './useRef';
import UseEffect from './useEffect';
import UseContext from './useContext';

export const ConfigContext = React.createContext();

const configValue = {
  name: 'YoYea',
};

const App = () => (
  <div>
    <UseStateComponent />
    <UseRef />
    <UseEffect />
    <ConfigContext.Provider value={configValue}>
      <UseContext />
    </ConfigContext.Provider>
  </div>
);

export default App;

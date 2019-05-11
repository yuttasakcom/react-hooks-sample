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

const useStateComponent = ({ initialState }) => {
  const [users, dispatch] = useReducer(usersReducer, initialState);

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

export const getUsersAsync = () => dispatch => {
  dispatch(getUsers());

  return fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(
      res => {
        dispatch(getUsersSucceeded(res));
      },
      err => dispatch(getUsersFailed(err)),
    );
};

export const getUsers = () => {
  return {type: 'GET_USERS'};
};

export const getUsersSucceeded = payload => {
  return {type: 'GET_USERS_SUCCEEDED', payload};
  // [{ name: 'aa', email: 'ww@gmail.com' }, { name:'bb', email: 'sfdaf' }]
};

export const getUsersFailed = error => {
  return {type: 'GET_USERS_FAILED', payload: error};
};

export const addUser = payload => {
  return {type: 'ADD_USER', payload}; // { name: 'ha', age: 50 }
};

export function updateUser(payload) {
  return {type: 'UPDATE_USER', payload}; // { id, 1, name: 'ha', age: 50 }
}

export function deleteUser(payload) {
  return {type: 'DELETE_USER', payload}; // { id: 1 }
}

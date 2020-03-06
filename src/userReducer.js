export const initialState = {
  data: [
    // {id: 1, name: 'derek', email: 'derek@gmail.com'},
    // {id: 2, name: 'iris', email: 'iris@gmail.com'},
  ],
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_USERS':
      return {...state, loading: true};
    case 'GET_USERS_SUCCEEDED':
      return {...state, loading: false, data: action.payload};
    case 'GET_USERS_FAILED':
      return {...state, loading: false, error: action.payload};
    case 'ADD_USER':
      // const len = state.length;
      // const id = state[len - 1].id + 1; // last item id + 1 as new item id
      // return [...state, { id, ...action.payload }];

      return {
        data: [...state.data, action.payload],
        loading: false,
        error: null,
      };
    case 'UPDATE_USER':
      let updatedData = [...state.data].map(item => {
        if (item.id === action.payload.id) {
          return {...item, ...action.payload};
        } else {
          return item;
        }
      });
      return {data: updatedData, loading: false, error: null};
    case 'DELETE_USER':
      const filteredData = [...state.data].filter(
        item => item.id !== action.payload.id,
      );
      return {data: filteredData, loading: false, error: null};
    default:
      return state;
  }
}

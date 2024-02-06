//redux almacena el estado inicial aca, en la reducer
//

import { GET_USERS, GET_BY_NAME } from "../actions";

let initialState = {
  allUsers: [],
  posts: [],
  usersCopy: [], //esta copia va a ser lo mismo que allUsers para que cuando modifique algo (al hacer un filtrado se va a modificar mi estado), tenga la opcion de tener mi estado original.
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS: //aca se verifica el tipo de accion que llega
      return {
        ...state,
        allUsers: action.payload, //con la info que llega aca se modifica el estado de allUser.
        usersCopy: action.payload,
      };

    case GET_BY_NAME: //aca se verifica el tipo de accion que llega
      return {
        ...state,
        allUsers: action.payload, //con la info que llega aca se modifica el estado de allUser.
      };

    default:
      return state;
  }
}

export default rootReducer;

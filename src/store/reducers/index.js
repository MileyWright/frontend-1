import {
  LOADING,
  ERROR,
  SET_TRUCKS,
  SET_TRUCK,
  ADD_TRUCK,
  SET_USER,
  SET_MENU,
  ADD_MENU_ITEM,
  LOGOUT_USER,
  SET_USER_TYPE,
  FETCH_TRUCKS_OWNED,
  EDIT_TRUCK,
  TRUCK_UPDATED,
  SET_MENU_ITEM_TO_EDIT,
} from '../actions';

const userType = localStorage.getItem('userType');
const user = JSON.parse(localStorage.getItem('user'));

const initialState = {
  isLoading: false,
  error: '',
  user: user ? user : {},
  userType: userType ? userType : '',
  trucks: [],
  currentTruck: {},
  trucksOwned: [],
  isLoggedIn: user ? true : false,
  menu: [],
  truckToEdit: {},
  menuItemToEdit: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, isLoading: true };
    case ERROR:
      return { ...state, error: action.payload, isLoading: false };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isLoggedIn: true,
        error: '',
        truckToEdit: {},
      };
    case SET_USER_TYPE:
      return { ...state, userType: action.payload };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
      };
    case SET_TRUCKS:
      return {
        ...state,
        trucks: action.payload,
        isLoading: false,
        error: '',
        truckToEdit: {},
      };
    case ADD_TRUCK:
      return {
        ...state,
        trucks: [...state.trucks, action.payload],
        isLoading: false,
        error: '',
        truckToEdit: {},
      };
    case SET_TRUCK:
      return {
        ...state,
        currentTruck: action.payload,
        isLoading: false,
        error: '',
        truckToEdit: {},
        menuItemToEdit: {},
      };
    case SET_MENU:
      return { ...state, menu: action.payload, isLoading: false, error: '' };
    case ADD_MENU_ITEM:
      return {
        ...state,
        menu: [state.menu, action.payload],
        isLoading: false,
        error: '',
      };
    case FETCH_TRUCKS_OWNED:
      return {
        ...state,
        trucksOwned: action.payload,
        isLoading: false,
        error: '',
        truckToEdit: {},
      };
    case EDIT_TRUCK:
      return {
        ...state,
        truckToEdit: action.payload,
        isLoading: false,
        error: '',
      };
    case TRUCK_UPDATED:
      return {
        ...state,
        truckToEdit: {},
      };
    case SET_MENU_ITEM_TO_EDIT:
      return {
        ...state,
        menuItemToEdit: action.payload,
      };
    default:
      return state;
  }
};

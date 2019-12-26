import { createStore } from "redux";

//Action generator = return action objects
const incerementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: "INCREMENT",
    incrementBy
  };
};

const decrementCount = ({ decrementBy = 1 } = {}) => {
  return {
    type: "DECREMENT",
    decrementBy
  };
};

const resetCount = () => {
  return {
    type: "RESET"
  };
};
const setCount = ({ count = 1 } = {}) => {
  return {
    type: "SET",
    count
  };
};

//reducers
//1.Reducer are pure functions
//2.Never Change State or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + action.incrementBy
      };
    case "DECREMENT":
      return {
        count: state.count - action.decrementBy
      };
    case "RESET":
      return {
        count: 0
      };
    case "SET":
      return {
        count: action.count
      };
    default:
      return state;
  }
};

//creating store
const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});
//getting store

//actions - an object that gets sent to the store

//incerement,decrement,reset
// store.dispatch({
//   type: "INCREMENT",
//   incrementBy: 5
// });

// store.dispatch({
//   type: "INCREMENT"
// });

store.dispatch(incerementCount({ incrementBy: 5 }));
store.dispatch(incerementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: 101 }));

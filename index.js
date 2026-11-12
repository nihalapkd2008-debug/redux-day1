
const { legacy_createStore: createStore } = require("redux");

// 1. Initial State
const initialState = {
  count: 0,
};

// 2. Reducer
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
}

// 3. Create Redux Store
const store = createStore(counterReducer);

// 4. Subscribe to Store Changes
store.subscribe(() => {
  console.log("Updated State:", store.getState());
});

// 5. Get Initial State
console.log("Initial State:", store.getState());

// 6. Dispatch Actions
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });

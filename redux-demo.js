const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1
    };
  } else {
    return state;
  }
}

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log("latest state:", latestState);
}

store.subscribe(counterSubscriber);


/* At first counterReducer is initilized and store state -> counter value becomes 0 */

// first dispach conter = 1
store.dispatch({ type: 'increment' });
// second dispach conter = 2
store.dispatch({ type: 'increment' });
// third dispach conter = 3
store.dispatch({ type: 'increment' });
// fourth dispach conter = 4
store.dispatch({ type: 'increment' });
// fifth dispach conter = 5
store.dispatch({ type: 'increment' });
// sixth dispach conter = 4
store.dispatch({ type: 'decrement' });
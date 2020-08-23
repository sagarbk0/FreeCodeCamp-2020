// Extract State Logic to Redux
const ADD = "ADD";
function addMessage(message) {
  const action = {
    type: ADD,
    message: message
  }
  return action;
}

const defaultState = [];
function messageReducer(state = defaultState, action) {
  switch(action.type) {
    case ADD:
      return [...state, action.message];
    default:
      return state;
  }
}

const store = Redux.createStore(messageReducer);

// Use Provider to Connect Redux to React
class AppWrapper extends React.Component {
  render () {
    return (
      <Provider store={store}>
       <DisplayMessages/>
      </Provider>
    )
  }
};

// Map Dispatch to Props
const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: function(message) {
      dispatch(addMessage(message));
    }
  }
}
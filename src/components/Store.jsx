import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

const middleware = [thunk];

const initialState = [];


const reducer = (state = initialState , action) => {
  // var s = Object.assign({},state);
  var stateCopy = [...state];
  console.log(state + " reducer");
  let tempobj = {};
  switch (action.type) {
    case "SUBMIT":
      tempobj.firstName = action.payload.firstName;
      tempobj.lastName = action.payload.lastName;
      tempobj.emailAddress = action.payload.emailAddress;
      tempobj.image = action.payload.image;
      tempobj.contactNumber = action.payload.contactNumber;
      tempobj.address = action.payload.address;
      stateCopy.push(tempobj);
      return stateCopy;
    default:
      return state;
  }
};
export const store = createStore(
  reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

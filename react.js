// ### React Hooks ### //

/***************************************************************/
// Reducer Hook (useReducer)
/***************************************************************/

/* 
- What is React useReducer Hook?
is a built-in hook provided by React that allows you to manage complex state and state transitions in a more structured and predictable way. 
It is an alternative to using the useState hook when you have more complex state management needs, 
especially when the state transitions depend on previous state or involve multiple actions.

const [state, dispatch] = useReducer(reducer, initialState);
state: The current state value.
dispatch: A function used to dispatch actions to update the state.
reducer: A function that handles state transitions based on the dispatched actions.
initialState: The initial state value.
*/

// # Example of using useReducer Hook:
import { useReducer } from 'react';
const initialState = 0;
// Reducer function
const CounterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return initialState;
    default:
      return state;
  }
};
const Counter = () => {
  const [count, dispatch] = useReducer(CounterReducer, initialState);
  return (
    <div>
      Count: {count}
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

// # Example-2
import { useReducer } from 'react';
const initialState = 0;
const balanceReducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE': return state + 1;
    case 'DECREASE': return state - 1;
    case 'RESET': return initialState;
    default: return state;
  }
}
function App() {
  const [balance, dispatch] = useReducer(balanceReducer, initialState)
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems:'center', justifyContent: 'center'}}>
      <h1>Current Balance is: {balance}</h1>
      <div style={{ display: 'flex' }}>
        <button onClick={() => {dispatch({type: 'INCREASE'})} }>Increase</button>
        <button onClick={() => {dispatch({type: 'DECREASE'})} }>Decrease</button>
        <button onClick={() => {dispatch({type: 'RESET'})} }>Reset</button>
      </div>
    </div>
  );
}
export default App;



/***************************************************************/
// Context Hook (createContext / useContext)
/***************************************************************/

/* 
What is useContext Hook?
is a built-in hook provided by React that allows you to access the value of a context directly within a functional component. 
It is used to consume the value from a context without the need for a nested consumer component.

const value = useContext(Context);
Context: The context object created using React.createContext.
This useContext hook takes a context object created using React.createContext and returns the current value of that context.

NOTE: useContext can be useful when you want to access values from a context in functional components without wrapping the component with a context consumer.
*/

// # Example of using createContext and useContext Hooks:

// A: Parent Component: 
import React, { createContext } from 'react';

const ThemeContext = createContext(); // Create a context using createContext Hook call 'ThemContext'

function App() {
 return (
   // wrap the application with the context provider and give it a global value so all child component will access it
    <ThemeContext.Provider value="dark">
      <ThemeDisplay />
    </ThemeContext.Provider>
  );
}

export default App;

// B: Child Component:
import React, { useContext } from 'react';

function ThemeDisplay() {
  const theme = useContext(ThemeContext); // use 'ThemeContext' context and save its value in 'theme'.
  return <div>Current theme: {theme}</div>;
}

export default ThemeDisplay;


// # Example-2:

// A: myContext.js (Context)
const MyContext = React.createContext(); // create context

// Provider (Dynamic parent function to wrapper children component)
function MyProvider({ children }) {
  return (
    <MyContext.Provider value={'This is the shared data'}>
      {children}
    </MyContext.Provider>
  );
}

// B: App.js
import { MyProvider } from './context/myContext.js'
function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

// C: MyComponent.js (Random component that consumes / use the context data)
function MyComponent() {
 const sharedData = React.useContext(MyContext); // use context call 'MyContext'
 return <div>{sharedData}</div>;
}



/***************************************************************/
// ? Hook ()
/***************************************************************/
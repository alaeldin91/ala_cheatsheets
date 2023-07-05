
/***************************************************************/
// Context Hook
/***************************************************************/

/* 
What is React Context API?
- Context provides a way to pass data through the component tree without having to pass props down manually at every level.  
- React Context API consists of two main components: 
1. The Provider component: is responsible for defining the context and providing the data.
2. The Consumer component (or useContext hook): is used by child components to access the data from the context.
*/

// # Simple example of how React Context work:

// A: myContext.js (Context)
// 1. Create a new context
const MyContext = React.createContext();

// 2. Define a component that provides the context data
function MyProvider({ children }) {
  const sharedData = 'This is the shared data';

  // wrap the dynamic parent with the provider to allow children to access the context shared data 
  return (
    <MyContext.Provider value={sharedData}>
      {children}
    </MyContext.Provider>
  );
}

// B: App.js (Parent Component)
// Usage in the component tree (an other parent component with children)
import { MyProvider } from './context/myContext.js'
function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

// C: MyComponent.js (Child Component)
// Random component that consumes / use the context data
function MyComponent() {
 // use a context call MyContext
 const sharedData = React.useContext(MyContext);
 return <div>{sharedData}</div>;
}


// # Real Example of using React Context Hook: a counter example
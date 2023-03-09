// # React Hooks:
// 1. useState: Declare a state in a function component.
const [count, setCount] = useState(3);
const [counter, setCounter] = useState(() => { return 3 }) // state value only run once (When the component first mounted).
// 2. useEffect
useEffect(() => { console.log("I run everytime this component rerenders") }) // Every rerender
useEffect(() => { console.log("I Only run once (When the component gets mounted)") }, []) // onMount
useEffect(() => { console.log("I run everytime my condition is changed") }, [condition]) // Condition based 
useEffect(() => { return () => { console.log("Use this return as a 'clean up tool' (this runs when unmounting and before the actual code)") } }); // Clean up
// 3. useMemo: will only recompute the memoized value when one of the dependencies has changed. This optimization helps to avoid expensive calculations on every render.
const memoizedValue = useMemo(() => { computeExpensiveValue(a, b) }, [a, b]);


// ---------------------------------------------------------
// ### Fetching data from an end point:-

// 1. Using fetch() method
// Simple GET request using fetch
fetch('https://api.adviceslip.com/advice')
  .then(response => response.json())
  .then(data => console.log(data.slip.advice));
// Simple GET request using fetch with async/await
const fetchData = async () => {
  const response = await fetch('https://api.adviceslip.com/advice');
  const data = await response.json();
  console.log(data);
};
// Simple POST request using fetch
const requestOptions = { method: 'POST', headers: { 'Content-Type': 'application/json'}, data: JSON.stringify({ title: 'React Post Request'}) }
fetch('https://api.adviceslip.com/advice', requestOptions)
  .then(response => response.json())
  .then(data => console.log('POST SUCCESS'));
// Simple POST request using fetch with async/await
const requestOptions = { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ title: 'React POST Request Example' }) };
const response = await fetch('https://reqres.in/api/posts', requestOptions);
const data = await response.json();
setPost({ id: data.id });
// Simple DELETE request with fetch
fetch('https://jsonplaceholder.typicode.com/posts/1', { method: 'DELETE' })
.then(() => console.log('Delete successful'));

// 2. Using Axios
// Simple GET request using axios
axios.get('https://api.npms.io/v2/search?q=react')
  .then(response => console.log(response.data));
// Simple GET request using axios with async/await
const response = await axios.get('https://api.npms.io/v2/search?q=react');
console.log(response.data);
// Simple POST request using axios
const article = { title: 'React POST Request Example' };
axios.post('https://reqres.in/api/articles', article)
    .then(response => console.log(response.data));
// Simple POST request using axios with async/await
const response = await axios.post('https://reqres.in/api/articles', article);
console.log(response.data);
// Simple POST request using axios with set headers
axios.post('https://reqres.in/api/articles', article, { headers })
console.log(response.data);
// Simple DELETE request with axios
axios.delete('https://reqres.in/api/posts/1')
  .then(() => console.log('Delete successful'));

// --------------------------------------------------------------------------------------------------------------------------------------------------
// ### Fetching data from an end point:-

// # A: GET Requeist:-
// 1. Using only fetch() method and tack-on then method to it:
useEffect(() => {
  const url = 'https://api.adviceslip.com/advice';

  fetch(url) // will return response object (promise)
    .then(res => res.json()) // will take response object and convers into json object (promise)
    .then(data => console.log(data)); // will take the json object and do something with it
},[]);
// 2. Using fetch() method with async function and await:
useEffect(() => {
  const url = 'https://api.adviceslip.com/advice';

  const fetchData = async () => { // fire a async function 
    try {
      const res = await fetch(url); // fire fetch() to return the response object and store it in a var
      const data = await res.json(); // convers the response object into json object
      console.log(data); // now its avilable to use
    } catch (error) { // catch and desplay any error in case is there a one
      console.log(error);
    }
  };
});
// 3. Using Axios: ( $ npm i axios ):
import axios from 'axios'
import { json } from 'stream/consumers';
useEffect(() => {
  axios.get('https://api.adviceslip.com/advice')
    .then( res => console.log(res.data.slip.advice)) // here you get the response as json object
}, [])
// 3.2 Using Axios with async function and await:
const [data, setData] = useState([]);
useEffect(() => {
  const fetchData = async () => {
    const res = await axios.get('https://hn.algolia.com/api/v1/search?query=redux');
    setData(res.data);
  };
  fetchData();
}, []);
// 3.3 Another good way to use Axios:
const [posts, setPosts] = useState([])
const url = "https://mrcrudapp.herokuapp.com/api/getallposts"
const postings = async () => { 
    try{
        const res = await axios.get(url)
        setPosts(res.data.data)
    } catch (error) {
        console.log('error')
    }
}
useEffect( () =>  postings(), [])



// # B: POST Requeist:-
// 1. Using Fetch() mehtod
const url = 'https://api.adviceslip.com/advice';
fetch(url, {
  method: 'POST', // to tell fetch that your sending a POST requeist.
  headers: { 'Content-Type': 'application/json'}, // set the content-type to tell fetch that your going to pass a json object.
  data: JSON.stringify({ name: 'Bushra' }) // convert the object to a json object and pass the data as a json object.
}) // pass this info as a second paramiter to the fetch method.




//#############################################################################################################################//
// Fetch Data from an API
const { useEffect } = require('react');

useEffect(() => {
  const url = 'https://api.adviceslip.com/advice';

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
    } catch (error){ 
      console.log("error", error);
     }
  }
})

// Fetch Data from an API Using Axios
const MyComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const {data: response} = await axios.get('/stuff/to/fetch');
        setData(response);
      } catch (error) {
        console.log(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Doing stuff with data</h2>
          {data.map(item => (<span>{item.name}</span>))}
        </div>
      )}
    </div>
  );
}



// React’s one-way data flow - React use Single-responsibility principle.

// # ReactJS Version 16 CheatSheet
{
// # Syntax
// Component MyCom1 syntax: (Container Component / Class Component)
import React, { Component } from 'react';
import MyCom2 from './MyCom2';

class MyCom1 extends Component {
  // 1. State
  state = {
    data: [
      {id: 1, name:'Bushra', age: 29},
      {id: 2, name:'Ali', age: 23},
      {id: 3, name:'Luka', age: 26}, 
    ]
  }
  // 2. Methods
  const handleClick = () => {
    // do something..
  } 
  // 3. Lifecycle Hooks
  constructor(props){
    // [Here we can set the inital State value]
    super(Props);
    this.state = {
      data: ['any data you wan to add']
    };
  }
  ComponentWillMount(){ }
  ComponentDidMount(){
    // *{Command Use of this Hook is to "Fetch Data from an API"}*
    // [Fires/Trigers on the Firest Render of the component]
    // [Only Fires Once]-[When Component First Mount To The DOM)=>(Refresh).
    // (Good place to): (Get Any External Data From The Database).
  }
  ComponentWillReceiveProps(nextProps){
    // *{Command Use of this Hook is to "Reset State base on a change in Props value"}*
    // [Fires/Trigers when component Resive a New Props from its Perent]
    // [Use to Check "if there a Change in the Incoming Props Value Compered with Current Peops Vlaue"]-[Use it to couse rerender]
    if(this.props.id !== nextProps.id){
      this.setState({
        data: null
      })
    }
  }
  shouldComponentUpdate(nextProps, nextState){
    // Here we deside if should Rerender will happens or not, cuz renders are expensive in react.
    // [Fires/Trigers when "State/Props Changes"]
    // [Use this if "State or Props changes after the Firest Render"]-[Use it to couse rerender]
    return this.props.id !== this.nextProps.id; // if this return true then this component will update, if not this component will not update.
  }
  ComponentWillUpdate(prevProps, preveState){ }
  ComponentDidUpdate(prevProps, preveState){
    // *{Command Use of this Hook is to "Fetch Data from an API/Update State"}*
    // [Fires/Trigers if "Props/State values Changes After the Firest Render of the component]
    // [Fires EveryTime]-[When Components Data Changes]=>[Add,Delete,Edit [State/Props] Data)
    // (NOTE: If You Update the State inside this hook you will get an invenit loop).
  }
  ComponentWillUnmount(){
    // [Here we can clean or put a Goodbye or anything we want to do before remove this component form the DOM]
    window.removeEventListener('resize', this.resizeEventHandler);
  }
  componentDidCatch(error, info) {
    // This Hooks is Use To [Catch Any JavaScript Errors Occurring in a Children of a Parent Component]
    // *{Comman Use of this Hook is to "Display 404 Page"}*
    this.setState({
      hasError: true
    })
    // log the error to error reporting
    logErrorToErrorServic(error, info);
  }
  // 4. Render Method
  render(){
    return (
      <div className='App'>
        <MyCom2 dataPassAsProps="Hello World" />
        <MyCom2 dataPassAsProps={ this.state.data } />
      </div>
    );
  }
}
export default MyCom1;
// Component MyCom2 syntax: (UI Component / Function Component)
import React from 'react';

const MyCom2 = (props) => {    
    return(
        <div className='Show'>
            <p>{ props.dataPassAsProps.name }</p> 
        </div>
    );
}
export default MyCom2;

// # Conditionally RenderDisplay:
// 1. Logical && Operator
condition && true

{ cars.length > 0 &&
  <h2>
    You have {cars.length} cars in your garage.
  </h2>
}
// 2. Ternary Operator
condition ? (true) : (false)

{ age > 29 ? (
  <p>Your Good</p> 
) : (
  <p>Your Young</p>
); 
// 3. if else
if(age > 29){
    <p>Your Good</p>
} else {
    <p>Your Young</p>
}

// # Change an Array Elemets
// Using Map Function to Loop Through an Array and Do Something For Each Iteam Indeviualy
const arr = [{name: a, id: 1}, {name: b, id: 2}, {name: c, id: 3}]
// 1. (Map Function To Display an Array):
const newList = arr.map(item => { 
    return( 
        <div key={item.id}><p>{ item.name }</p></div>
    ); 
})
// 2. (Map Function To Edit an Array):
const newList = arr.map(item => { 
    return( item.id = item.id + 1 ); 
})

// # Delete an Elemet From an Array: 
// Using Filter Function to delete an elemetn from an array
const newData = this.state.data.filter(item => {
    return item.id !== id // if item pass the condition here it will stay in the new array, if not it will delelted.
});

// # Copy an Array:
// Using Rest parameter to accept an indefinite number of arguments as an array (chang anything to an array elements).
// [...oldData, addedData] Make a copy of array and Add Another Extra Data to it (Add an elemet to an array).
let newData = [...this.state.oldArr, newArr];

// # LifeCycle Hooks:
// NAME	                        CALLED FOR	            RECEIVES CONTEXT/TRIGGERS AN UPDATE
// componentWillMount	          initial render()	      no	      no
// componentDidMount*	          initial render()	      no	      yes
// componentWillReceiveProps	  new props	              yes	      yes
// shouldComponentUpdate	      new props/state	        yes	      yes
// componentWillUpdate	        new props/state	        yes	      n/a
// componentDidUpdate*	        new props/state	        no	      yes
// componentWillUnmount*	      unmounting	            no	      n/a


// # Router/Route:
// > npx install react-router-dom
// App.js
import { BrowserRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
    render() {
        return(
            <BrowserRouter>
                <div className='App'>
                    <Navbar />
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/:post_id' component={Post} /> // route paramiter
                        <Route path='*' component={PageNotFound} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}
// Navbar.js
import { NavLink, withRouter } from 'react-router-dom';
const Navbar = (props) => {
    // Redirect me after 5s
    setTimeout(() => {
        props.history.push('/about')
    }, 5000)

    return(
        <nav>
            <h1>LOGO</h1>
            <ul>
                <li><NavLink to='/'>Home</NavLink></li>
                <li><NavLink to='/about'>About</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </nav>
    );
}
export default withRouter(Navbar);
// NOTE: we wrap Navbar with heigher order component(HOC) call withRouter. 
// NOTE: we us <NavLink to='/'> instate of <Link to='/'> so we can get active class.

// # Fetch Method (GET/POST/DELETE):
// GET
useEffect(() => {
    fetch('url')
        .then(res => {
            return res.json();
        })
        .then(data => {
            this.setState({
                StateData: data
            })
        });
})
// POST
const handleSubmit = () => {
    const data = { name, email, msg};
    fetch('url', {
        method: 'POST',
        header: {'Content-Type': 'application/json'},
        body: JSON.stringyify(data)
    }).then(() => {
        console.log('new data added to the endpoint');
    })
}
// DELETE
const handleClick = (id) => {
    fetch('url'+ data.id, {
        method: DELETE
    }).then(() => {
        console.log('data deleted i will redirect you to the home page');
        history.push('/');
    })
}

// # Fetch data using Axios: (GET)
// > npm install axios
import React, { Component } from 'react';
import axios from 'axios'

class Posts extends Component {
    state = {
        posts: []
    }

    ComponentDidMount() {
        axios.get('url')
            .then(res => {
                this.setState({
                    posts: res.data.slice(0,10)
                })
            })
    }

    render(){
        const {posts} = this.state;
        const postList = posts.length ? (
            return(
                posts.map(post => {
                    <p>{post.title}</p>
                })
            )
        )
        : (
            <p>There is no posts</p>
        )

        return(
            <div>
                {postList}
            </div>
        );
    }
}
// Fetch Single Data by its ID: (GET single data)
// home.js
<Link to={'/' + post.id}><p>{post.title}</p></Link> 
post.js
class Post extends Component {
    state = {
        post: null
    }

    ComponentDidMount() {
        // get the post_id (data in the URL) from the props
        let id = this.props.match.pramas.post_id;         
        axios.get('url' + id)
            .then(res => { 
                this.setState({ 
                    post: res.data
                })
             })
    }

    render(){
        const post = this.state.post ? (
            <div>
                <p>{this.state.post.title}</p>
                <p>{this.state.post.body}</p>
            </div>
        ) : ( 
            <p>Loding...</p>
        )
        
        return(){
            <div>
                {post}
            </div>
        }
    }
}

// # Context API
{
  // Contect is a center place to share data with all other component without sending props.
  // Same as Redux (Centeral Data of true)
}
// # Hooks
{
  // Hooks is a special function allow us to do things inside functional component like use State use livecycle.
  // # useState Hook: use stat within a functional component.
  // # useEffect Hook: use lifycycle within a functional component.(run conde when component renders or re-render)
  // # useContext Hook: consume context in a functional component.
}

// # Reducer ( Reducers, Actions & State)
{
  // The reducer is a pure function that accepts 2 parameters: the current state and an action object. Depending on the action object, the reducer function must update the state in an immutable manner, and return the new state.

    const [state, dispatch] = useReducer(reducer, initialState);
    const idRef = useRef(0);
  
  function reducer(state, action) {
    let newState;
    switch (action.type) {
      case 'increase':
        newState = { counter: state.counter + 1 };
        break;
      case 'descrease':
        newState = { counter: state.counter - 1 };
        break;
      default:
        throw new Error();
    }
    return newState;
  }

}
// # Local Storage
{
  // is a property that allows JavaScript sites and apps to save key-value pairs in a web browser with no expiration date. 
  localStorage.setItem('nameOfItem', 'value'); 

  // 'key' could be any variable to address your 'value'. 
//'value' could be of any data-type.

// Save data to localStorage
localStorage.setItem('key', JSON.stringify('value'));

// Get saved data from localStorage
localStorage.getItem('key') ? JSON.parse(localStorage.getItem('key')) : '';

// Remove saved data from localStorage
localStorage.removeItem('key');

// Remove all saved data from localStorage
localStorage.clear();
}


// ###############################################################################################################

// ! React Files & Folders
{
// > node_modules: Project dependancy.
// > public: File that gonna serve to the browser.
  // - index.html: our html page that gonna be injected.
  // - imgs
// > src: Components and Stylesheet that gonna be injected.
  // - index.js: This file is use to inject our Component and CSS to index.html.(takes only the root component)
  // - App.js: This is our first component by default.(Root Component)
  // - ComponentName.js: other Component.(Nested Component).
  // - index.css: Global Stylesheet for our app.
  // - App.css: Stylesheet for App Component.
  // - reportWebVitals.js: ?? A Performans file /or/ To start measuring performance in your app or send to an analytics endpoint /or/Helps cashing our assets.
  // - setupTests.js: ??
}

// ! Components
{
 // Components let you split the UI into independent, reusable pieces, and think about each piece in isolation
 // NOTE: always start your component with a Capital letters <App />, <Welcome />
 // Composing Component: thats mean component can refers to other components.
 // Ectracting Components: you can split your component into smaller components.
}

// ! Props
{
 // (short for “properties”)
 // stands for properties thats being used for passing data from one component to another in a uni-directional flow (one way from parent to child) and only for read (you cant change or modify it).
}

// ! State Object
{
 // a built-in React object that used to contain data about the component (component state can change).

 // save props data into state object
 class Clock extends React.Component { // creat a component
  // state 
   constructor(props) { // create a constructor method with props as an arrg
    super(props); // pass props to the perent constructor (this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).)
    // assign date to the state object
    this.state = {
     name: 'bushra',
     comment: 'empty',
     date: new Date()
    };
   }

  // rendering this and return it to the DOM
   render() {
     return (
       <div>
         <h1>Hello, world!</h1>
         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
       </div>
     );
   }
 }

 // display render() method into the DOM where ID=root
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Clock />);

 // setState: use to change/modify state object values.
 this.setState({ comment: 'Hello' });

 // NOTE: State Updates May Be Asynchronous
 // Wrong
 this.setState({
   counter: this.state.counter + this.props.increment,
 });
 // Correct
 this.setState((state, props) => ({
   counter: state.counter + props.increment
 }));
 // Correct
 this.setState(function(state, props) {
   return {
     counter: state.counter + props.increment
   };
 });
}

// ! props vs state
{
// props: similar to function parameters(cannot change there values)
// state: similar to variables declared within a function(can change there values alot depending on user events).

/* 
props
props (short for properties) are a Component's configuration, its options if you may. They are received from above and immutable as far as the Component receiving them is concerned.
A Component cannot change its props, but it is responsible for putting together the props of its child Components.

state
The state starts with a default value when a Component mounts and then suffers from mutations in time (mostly generated from user events). It's a serializable* representation of one point in time—a snapshot.
A Component manages its own state internally, but—besides setting an initial state—has no business fiddling with the state of its children. You could say the state is private.

                                                props	state
Can get initial value from parent Component?	   Yes	  Yes
Can be changed by parent Component?	            Yes   No
Can set default values inside Component?*	      Yes	  Yes
Can change inside Component?	                   No	   Yes
Can set initial value for child Components?	    Yes	  Yes
Can change in child Components?	                Yes	  No

*/
}

// ! Lifecycle Methods
{
 // 1- Mounting: when putting elements into the DOM we can use this methods:
 constructor(props) // called before anything else, its the natural place to set up the initial state and other initial values.
 getDerivedStateFromProps(props, state) // called right before rendering the elements, its the natural place to set the state object based on the initial props.
 render() // is the method that actually outputs the HTML to the DOM.
 componentDidMount() // called after the component is rendered, its where you run statements that requires the component to be already placed in the DOM.
 // 2- Updating: whenever there is a change in the component's state or props.
 getDerivedStateFromProps(props, state) // the first method that is called when a component gets updated.
 shouldComponentUpdate() // return a Boolean value that specifies whether React should continue with the rendering or not.(default value is true)
 render()
 getSnapshotBeforeUpdate() // check what the values were before the update.
 componentDidUpdate() // called after the component is updated in the DOM.
 // 3- Unmounting: when a component is removed from the DOM.
componentWillUnmount() // called when the component is about to be removed from the DOM.
}

// ! Handling Events
{
 // TODO: handek click effect to return a msg in console
 <button onClick={activateLasers}>Activate Lasers</button>
 // fire activateLasers function when this button is clicked.
 
 function Form() {
  function handleSubmit(e) { // pass the event handeler as an arrgument to this function
    e.preventDefault(); // prevent default behavior of the form (refresh on submit)
    console.log('You clicked submit.');
  }

  return (
   // add an onsubmit event to the form 
   <form onSubmit={handleSubmit}>
     <button type="submit">Submit</button>
   </form>
  );
 }

 // TODO: handel click event to toggle something
 class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
 }

 // Passing Arguments to Event Handlers:
 <button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button> // passing the event handeler as an arrgument to onClick event function 
 <button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>
}

// ! Conditional Rendering
{
 // you can create distinct components that encapsulate behavior you need. Then, you can render only some of them, depending on the state of your application.
 // todo: create a Greeting component that displays either of these components depending on whether a user is logged in:
 function UserGreeting(props) { // component 1
  return <h1>Welcome back!</h1>;
 }
 function GuestGreeting(props) { // component 2
  return <h1>Please sign up.</h1>;
 }

 function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) { // check what isLoggedIn return
   return <UserGreeting />; // if true
  }
  return <GuestGreeting />; // if false
 }

 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Greeting isLoggedIn={false} />);  // Try changing to isLoggedIn={true}:

 // todo: Inline If with Logical (&&) Operator:
 function Mailbox(props) {
  // store the unreadMessages props value
  const unreadMessages = props.unreadMessages;
  return (
   <div>
    {/* check if there unreadMessages if there then display the length of them and hello word too if not only display hello */}
    <h1>Hello!</h1>
    {unreadMessages.length > 0 &&
     <h2>
      You have {unreadMessages.length} unread messages.
     </h2>
    }
   </div>
  );
 }
 const messages = ['React', 'Re: React', 'Re:Re: React']; // unreadMessages
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Mailbox unreadMessages={messages} />); // render Mailbox component with the props value of messages.
 
 // todo: Another way to conditionally render elements is by using a ternary operator (?):
 function Goal(props) {
  const isGoal = props.isGoal;
  return (
   <>
    {/* if isGoal is true then Return the MadeGoal component, otherwise return the MissedGoal component */}
    {isGoal ? <MadeGoal /> : <MissedGoal />}
   </>
  );
 }
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Goal isGoal={false} />);
 

 // Inline If-Else with Conditional Operator: condition ? true : false
 class A extends React.Component {
  render() {
   const isLoggedIn = this.state.isLoggedIn;
   return (
    <div>
     The user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.
    </div>
   );
  }
 }

 class B extends React.Component {
 function WarningBanner(props) {
  if (!props.warn) {
   return null;
  }

  return (
   <div className="warning">
    Warning!
   </div>
  );
 }

 class Page extends React.Component {
  constructor(props) {
   super(props);
   this.state = { showWarning: true };
   this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
   this.setState(state => ({
    showWarning: !state.showWarning
   }));
  }

  render() {
   return (
    <div>
     <WarningBanner warn={this.state.showWarning} />
     <button onClick={this.handleToggleClick}>
      {this.state.showWarning ? 'Hide' : 'Show'}
     </button>
    </div>
   );
  }
 }
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(<Page />);

// todo: Full eventhanddeler Example:
// class LoginControl
class LoginControl extends React.Component {
  // state
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  // methods
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }
  // render
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    // check the state of our user if its loggedIn or not at the moment
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    // render return
    return (
      <div>
        {/* return greeting component with an eventhanddeler function isLoggedIn */}
        <Greeting isLoggedIn={isLoggedIn} />
        {/* place the button varible value here */}
        {button}
      </div>
    );
  }
}
// UserGreeting function
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}
// GuestGreeting function
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}
// Greeting function
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) { // check if user loggedIn or not
    return <UserGreeting />; // if loggedIn return the component UserGreeting
  }
  return <GuestGreeting />;
}
// LoginButton function 
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>; // onClick={props.onClick}
}
// LogoutButton function
function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>;
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LoginControl />);

}

// ! Lists & Keys
{
// A “key” is a special string attribute you need to include when creating lists of elements,Keys help React identify which items have changed, are added, or are removed.
// 1
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((numbers) =>
  <li>{numbers}</li>
);
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<ul>{listItems}</ul>);
// 2
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NumberList numbers={numbers} />);
// 3
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>{number}</li>
  );
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1, 2, 3, 4, 5];
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render( <NumberList numbers={numbers} />);
}

// ! Forms
{
// todo: full from ex:
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<NameForm />);

// multible inputs
}

// ! Lifting State Up
{
// todo:ex
 // component 1
 function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
 }
 // component 2
 class Calculator extends React.Component {
  // constructor method
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this); // ??? what this line mean
    // state
    this.state = { temperature: '' };
  }
  // handleChange method: chang the state value accorduing to what user type in the input filed
  handleChange(e) {
    this.setState({temperature: e.target.value});
  }
  // render
  render() {
    const temperature = this.state.temperature; // take a copy of the state current value
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input
          value={temperature} // ?? show the current value in the sate
          onChange={this.handleChange} // eventhanddeler fire a function when the user change the input filed value or add something
         /> 
        <BoilingVerdict // call the component 1 and pass a props to it and then display the return of it
          celsius={parseFloat(temperature)} />
      </fieldset>
    );
  }
}
}

// ! 
{
// React.lazy: is function lets you render a dynamic import as a regular component.
import OtherComponent from './OtherComponent';
const OtherComponent = React.lazy(() => import('./OtherComponent'));
// React.lazy takes a function that must call a dynamic import(). This must return a Promise which resolves to a module with a default export containing a React component.
// The lazy component should then be rendered inside a Suspense component, which allows us to show some fallback content (such as a loading indicator) while we’re waiting for the lazy component to load.
import React, { Suspense } from 'react';
const OtherComponent = React.lazy(() => import('./OtherComponent'));
function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}
// The fallback prop accepts any React elements that you want to render while waiting for the component to load. You can place the Suspense component anywhere above the lazy component. You can even wrap multiple lazy components with a single Suspense component.
import React, { Suspense } from 'react';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));
function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <section>
          <OtherComponent />
          <AnotherComponent />
        </section>
      </Suspense>
    </div>
  );
}
}
// =====================================================================
// |
// |                      Deploy React to GitHub
// |            https://github.com/gitname/react-gh-pages
// =====================================================================

// 1. Install the gh-pages npm package and designate it as a development dependency:
$ npm install gh-pages --save-dev

// 2. Add GitHub pages and Deployment Scripts dependancy into package.json file:
"homepage": "https://{username}.github.io/{repo-name}"
//...
"scripts": {
  //...
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

// 3. Add a "remote" to the local Git repository (To let Git know which repo to push on it):
$ git init
$ git remote add origin https://github.com/{username}/{repo-name}.git
// NOTE: This command tells Git where I want it to push things whenever I—or the gh-pages npm package acting on my behalf—issue the $ git push command from within this local Git repository.

// 4. Deploy the React app to GitHub Pages:
$ npm run deploy

// 5. Store/Save the source code on GitHub (Commit and save the changes you made from the local repo into remote repo)
$ git add .
$ git commit -m "Configure React app for deployment to GitHub Pages"
$ git push origin master


// All git steps
$ git init
$ git remote add origin https://github.com/gitname/react-gh-pages.git
$ npm run deploy
$ git add .
$ git commit -m "Create a React app and publish it to GitHub Pages"
$ git push origin master 


// =====================================================================
// |
// |                      React Versions Syntax
// |
// =====================================================================
// ! React v15 Syntax:
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link } from 'react-router';
var moduleName = require('./modulFileName');    // import extends component
require('./index.css');   // add CSS
var TodoComponent = React.createClass({   // Component
  getInitialState: function () {    // State
    return {
      todos: ['Read React', 'Eat Breakfast', 'Take a Nap']
    }
  },
  render: function () {     // Render Method
    return (
      <div id="any">
        <h1>Hello</h1>
        <button onClick={handleClick}>Click me</button>
        {/* JSX Code */}
      </div>
    );
  },
  handleClick: function () {     // Methods/Functions
    // do something..
  }
});

// ! React v16 Syntax:
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import './index.css';
class App extends Component {     // Component
  state = {   // State
    todos: [
      {id: 1, content: 'buy some milk'},
      {id: 2, content: 'play mario kart'}
    ]
  }
  deleteTodo = (id) => {    // Methods/Functions
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  render() {    // Render Method
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
      </div>
    );
  }
}
export default App;

// ! React v17 Syntax:
// App.js
import Navbar from './Navbar'; // import combonent
import { useState } from 'react';
function App() {  // component App
const [name, setName] = useState('bushra'); // State
const handleClick = () => { setName('ali'); } // Methods/Functions
  return (  // Render method 
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
export default App;
// Navbar.js
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</a>
      </div>
    </nav>
  );
}
 
export default Navbar;


// ==============================================================================================================
// TODO: React v15
// ==================
// !React 15
// ==================
// https://www.youtube.com/watch?v=yZ0f1Apb5CU&list=PL4cUxeGkcC9i0_2FF-WhtRIfIJ1lXlTZR
// https://github.com/iamshaunjp/react-playlist
// to install React v 15
// to create a new project > npm install react react-dom --save
// to install babel > npm install babel-core babel-loder --save -dev
// to install webpack > npm install webpack webpack-dev-server --save -dev
// to install any other package you want > npm install PackageName --save -dev
// to inital package.json file to track your dependancy > npm init
// to builld project and start dev server > npm run build
// to install dependancy > npm install
// TODO: Syntax:
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, Link } from 'react-router';
// import extends component
var moduleName = require('./modulFileName');
// add CSS
require('./index.css');
// create component
var TodoComponent = React.createClass({
  // State
  getInitialState: function () {
    return {
      todos: ['Read React', 'Eat Breakfast', 'Take a Nap']
    }
  },
  // Render
  render: function () {
    return (
      <div id="any">
        <h1>Hello</h1>
        <button onClick={handleClick}>Click me</button>
        {/* JSX Code */}
      </div>
    );
  },
  // Methods
  handleClick: function () {
    // do something..
  }
});

// TODO: TodoList Example:-
{
  // index.js
var React = require('react');
var ReactDOM = require('react-dom');
import { Router, Route, browserHistory, Link } from 'react-router';
// Module
var TodoItem = require('./todoItem');
var AddItem = require('./addItem');
var About = require('./about');
// CSS
require('./css/index.css');
// Routing
var App = React.createClass({
    render: function(){
        return(
            <Router history={browserHistory}>
                <Route path={"/"} component={TodoComponent}></Route>
                <Route path={"/about"} component={About}></Route>
            </Router>
        );
    }
});
// Component
var TodoComponent = React.createClass({
    // State
    getInitialState: function () {
        return {
            todos: ['Read React', 'Eat Breakfast', 'Take a Nap']
        }
    },
    // Render
    render: function(){
        var todos = this.state.todos;
        todos = todos.map(function(item, index){
            return(<TodoItem key={index} item={item} onDelete={this.onDelete} />);
        }.bind(this));
        return(
            <div id="todo-list">
                <Link to={"/about"}>About</Link>
                <p>The busiest people have the most leisure...</p>
                <ul>{todos}</ul>
                <AddItem onAdd={this.onAdd} />
            </div>
        );
    },
    // Methods
    onDelete: function(item){
        var updatedTodos = this.state.todos.filter(function(val, index){
            return item !== val;
        });
        this.setState({
          todos: updatedTodos
        });
    },
    onAdd: function(item){
        var updatedTodos = this.state.todos;
        updatedTodos.push(item);
        this.setState({
            todos: updatedTodos
        })
    }
});
ReactDOM.render(<App />, document.getElementById('app'));
  
  // addItem.js
var React = require('react');
// CSS
require('./css/addItem.css');
// Component
var AddItem = React.createClass({
    // Render
    render: function(){
        return(
            <form id="add-todo" onSubmit={this.handleSubmit}>
                <input type="text" required ref="newItem"/>
                <input type="submit" value="Hit me" />
            </form>
        );
    },
    // Methods
    handleSubmit: function(e){
        e.preventDefault();
        this.props.onAdd(this.refs.newItem.value);
    }
});
module.exports = AddItem;
}
// =======================================
// TODO: React v16
// ==================
// ! React 16
// ==================
// to install React v 16
// to create a new project > npx create-react-app my-app
// to start dev server > npm start
// to install dependancy > npm install
// https://github.com/iamshaunjp/react-redux-complete-playlist
// https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG
// Syntax:-
{
  // index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
  
  // App.js
import React, { Component } from 'react';
import AddTodo from './AddTodo';
import './index.css';

  class App extends Component {
    // State
    state = {
      todos: [
        {id: 1, content: 'buy some milk'},
        {id: 2, content: 'play mario kart'}
      ]
    }
    // Methods/Functions
    deleteTodo = (id) => {
      const todos = this.state.todos.filter(todo => {
        return todo.id !== id
      });
      this.setState({
        todos
      });
    }
    // Render Method
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome :)</p>
      </div>
    );
  }
}
export default App;

// TODO: Check the react v16 course...
}
// =========================================
// ==================
// ! React 17
// ==================
// Syntax:-
// =========================================
// ==================
// ! React 18
// ==================
// Syntax:-

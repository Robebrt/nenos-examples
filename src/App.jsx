
import './App.css'
import { createContext, useContext, useRef, useReducer } from 'react';
import ToDoList from './ToDoList';

const ThemeContext = createContext('light');

function App() {
  //useRef example
  let ref = useRef(0);

  //useReducer example
  const [state, dispatch] = useReducer(reducer, { clicks: 0 })

  const handleClick = event => {
    ref.current = ref.current + 1;
    console.log('You clicked ' + ref.current + ' times!');
    dispatch({ type: 'increment' });
  }
  const decrement = event => {
    dispatch({ type: 'decrement' });
  }
  return (
    <>
      <ThemeContext.Provider value="dark">
        <Button onClick={handleClick} >
          Increment
        </Button>
      </ThemeContext.Provider>
      <ThemeContext.Provider value="light">
        <Button onClick={decrement}>
          Decrement
        </Button>
      </ThemeContext.Provider>
      <p>Clicks: {state.clicks}</p>
      {/* useMemo and useCallback examples*/}
      <ToDoList />
    </>
  )
}
function Button(props) {
  //useContext
  const theme = useContext(ThemeContext);
  const className = 'button-' + theme;
  return (
    <button className={className} onClick={props.onClick}>
      I'm a {theme} button {props.children}
    </button>
  );
}

function reducer(state, action) {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        clicks: state.clicks + 1
      };
    }
    case "decrement": {
      return {
        ...state,
        clicks: state.clicks - 1
      };
    }
  }
}

export default App;
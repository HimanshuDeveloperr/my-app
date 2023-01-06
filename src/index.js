import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

//here create root is a method in react library used to create main entry point the main hook of the ui that we build using react.
// as we are inserting our react all functionalities in this div with the id of root in it we basically starting injecting the react methods from here only

//reactdom=library
//createroot=reactdom method
//render is used to tell the react what should it render in that root const created by createRoot.

//app here is our first component .

// The src/ directory contains the React JavaScript code for your project. Most of the work you do will be in that directory.

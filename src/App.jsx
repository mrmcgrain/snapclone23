import React from 'react';
// import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import { Routes, Route } from 'react-router'
import WebcamCapture from './WebcamCapture'
// import { Preview } from '@mui/icons-material';
import Preview from "./Preview"
import Chats from "./Chats"
import ChatView from "./ChatView"
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/appSlice';
import Login from "./Login"


function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  return (
    <div className="app">
      {/* <h1>Snaps</h1> */}

      <Routes>
        {!user ? (
          <Route path="/login" element={<Login />} />
        )
          :
          (
            <div className='app__body'>

              <Route path="/" element={<WebcamCapture />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/chats" element={<Chats />} />
              <Route path="/chats/view" element={<ChatView />} />


              {/* <WebcamCapture /> */}
            </div>
          )}
      </Routes>



      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
    </div>
  );
}

export default App;

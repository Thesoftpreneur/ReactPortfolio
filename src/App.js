import React, { useState, useEffect } from 'react';

import {Toast, Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';

import './App.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() =>{
    console.log("count variable is changed and is now equal:" + count);
  }, [count]);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
        <>{count}</>
      </Toast>
      <Button onClick={() => setCount(count + 1)}>Counter: {count}</Button>
      <Button onClick={() => setCount(0)}>Reset counter</Button>
    </>
  );
};

const App = () => {
  
  return(
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">Welcome To React-Bootstrap</h1>
      <ExampleToast>
        We now have Toasts
        <span role="img" aria-label="tada">
          🎉
        </span>
      </ExampleToast>
    </Container>
  </Container>
);
};

export default App;

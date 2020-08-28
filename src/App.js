import React from 'react';
import './App.scss';
import Form from './components/Form';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="inner-container">
          <div className="form-container">
            <Form></Form>
          </div>
          <div className="card-container">
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

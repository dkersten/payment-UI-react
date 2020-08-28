import React, { useState } from 'react';
import './App.scss';
import Form from './components/Form';
import Card from './components/Card';

function App() {

  const [name, setName] = useState('John Doe')
  const [num, setNum] = useState('1234567890123456')
  const [date, setDate] = useState('05/22')

  const updateName = (name) => {
    setName(name)
  }

  const updateNum = (num) => {
    setNum(num)
  }

  const updateDate = (date) => {
    setDate(date)
  }

  return (
    <div className="App">
      <div className="container">
        <div className="inner-container">
          <div className="form-container">
            <Form 
              name={name}
              updateNameFunc={updateName}
              num={num}
              updateNumFunc={updateNum}
              date={date}
              updateDateFunc={updateDate}
            />
          </div>
          <div className="card-container">
            <Card 
              name={name}
              num={num}
              date={date}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

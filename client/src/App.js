import React, { useState, useEffect } from 'react';
import './App.css';
import openSocket from 'socket.io-client';

const socket = openSocket('http://localhost:3000')

export default () => {
  const [inputValue, setInputValue] = useState('')
  const [reverseValue, setReverseValue] = useState('')

  useEffect(() => {
    socket.on('reverseText', setReverseValue)
  }, [])

  const handleInput = e => {
    setInputValue(e.target.value)
  }

  const submit = () => {
    socket.emit('text', inputValue)
  }

  return (
    <div className="App">
      <div>Reverses value: {reverseValue}</div>
      <div>Input value: {inputValue}</div>
      <input value={inputValue} onChange={handleInput} />
      <button onClick={submit}>Submit</button>
    </div>
  );
}
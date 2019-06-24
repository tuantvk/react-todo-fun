import React from 'react';

const Input = ({ addTodo }) => {

  let _input = "";

  const _handleSubmit = e => {
    e.preventDefault();
    if (_input.value.trim().length <= 0) return;
    
    addTodo(_input.value);
    _input.value = "";
  }

  return (
    <form onSubmit={_handleSubmit}>
      <input ref={ref => { _input = ref }} placeholder="Input text here" type="text" autoComplete="off" />
    </form>
  )
};

export default Input;
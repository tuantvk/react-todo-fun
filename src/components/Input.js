import React from 'react';

const Input = () => (
  <div className="centered">
    <div className="group"><input type="text" id="name" autoComplete="off" required="required" /><label htmlFor="name">Name</label>
      <div className="bar"></div>
    </div>
  </div>
);

export default Input;
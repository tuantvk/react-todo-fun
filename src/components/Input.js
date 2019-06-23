import React from 'react';

const Input = () => (
  <div className="centered">
    <div className="group"><input type="text" id="name" autocomplete="off" required="required" /><label for="name">Name</label>
      <div className="bar"></div>
    </div>
  </div>
);

export default Input;
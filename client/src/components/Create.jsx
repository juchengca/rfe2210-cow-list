import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Create = (props) => {

  var [cow, setCow] = useState({name: '', description: ''});

  const handleChange = (e) => {
    var target = e.target.name;
    var prevCow = cow;
    prevCow[target] = e.target.value;
    setCow(prevCow);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createCow(cow);
  }

  return (
    <div>
      <h3>Create a new cow</h3>
      <form>
        Name: <input type='text' name='name' onChange={handleChange}/>
        <br></br>
        Description: <input type='text' name='description' onChange={handleChange}/>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>

  )

};

export default Create;
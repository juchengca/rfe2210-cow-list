import React from 'react';
import ReactDOM from 'react-dom';

const Selected = (props) => {

  return (
    <div>
    <div>SELECTED COW</div>
    <div>{props.selected.name}</div>
    <div>{props.selected.description}</div>
    </div>
  )
};

export default Selected;
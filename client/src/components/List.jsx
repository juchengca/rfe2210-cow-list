import React from 'react';
import ReactDOM from 'react-dom';

const List = (props) => {

  var cows = props.cowList;

  return (
    <div>
      <h3>List of cows</h3>
      <ul>
        {cows.map((cow) =>
          <li onClick={() => props.showSelected(cow)} key={cow.name}>{cow.name}</li>
        )}
      </ul>
    </div>

  )

};

export default List;
import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Create from './Create.jsx';
import List from './List.jsx';
import $ from 'jquery';

const App = () => {

  var [cowList, setCowList] = useState([{name: 'initial', description: 'state'}]);

  useEffect(() => {
    getCows((result) => {
      setCowList(result);
    })
  }, []);

  const getCows = (callback) => {
    $.ajax({
      url: '/api/cows',
      type: 'GET',
      success: (result) => {
        callback(result);
      }
    })
  };

  const createCow = (cow) => {
    $.ajax({
      url: '/api/cows',
      type: 'POST',
      data: cow,
      success: () => {
        getCows((result) => {
          setCowList(result);
        })
      }
    })
  };

  return (
    <div>
      <h2>Cow List</h2>
    <div><Create createCow={createCow}/></div>
    <div><List cowList={cowList}/></div>
    </div>
  )

}

export default App;
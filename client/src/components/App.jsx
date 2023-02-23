import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom';
import Create from './Create.jsx';
import List from './List.jsx';
import Selected from './Selected.jsx';
import $ from 'jquery';

const App = () => {

  var [cowList, setCowList] = useState([{name: 'initial', description: 'state'}]);

  var [showDesc, setShowDesc] = useState(false);

  var [selected, setSelected] = useState({name: 'initial', description: 'state'});

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

  const showSelected = (cow) => {
    setSelected(cow);
    setShowDesc(true);
  };


  return (
    <div>
      <h2>Cow List</h2>
    <div>{showDesc ? <Selected selected={selected}/> : null}</div>
    <div><Create createCow={createCow}/></div>
    <div><List showSelected={showSelected} cowList={cowList}/></div>
    </div>
  )

}

export default App;
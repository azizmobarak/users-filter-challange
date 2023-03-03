import { useState } from 'react';
import './App.css';
import ListOfItemsComponent from './ListOfItemsComponent';

// WE CAN USE API INSTEAD OF STATIC DATA
const listOfNames = [{
  name: 'Flowers_Ice_cream',
}, {
  name: 'Allergies_Cone',
}, {
  name: 'Shower_Mail',
}, {
  name: 'Breakfast_Light_saber',
}, {
  name: 'YouTube_Poop',
}, {
  name: 'Ice_cream_Ring',
}, {
  name: 'Shower_System',
}, {
  name: 'Solar_Toilet',
}, {
  name: 'Ice_cream_cone_Post_office',
}, {
  name: 'Puppy_Ring',
}];

function App() {
  const [list, setList] = useState(listOfNames);

  // WE CAN MOVE THIS FUNCTION TO AN OTHER FILE TO REMOVE LOGIC FROM UI
  function onFilter(value) {
    let newArr = [];
    newArr = listOfNames.filter((names) => {
      return names.name.toLowerCase().indexOf(value.toLowerCase()) !== -1
    })
    setList(newArr);
  }


  return (
    <div className='container'>
      <h1>List of users by name</h1>
      <ListOfItemsComponent onFilter={onFilter} items={list} />
    </div>
  );
}

export default App;

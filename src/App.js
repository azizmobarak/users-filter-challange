import { useState } from 'react';
import './App.css';
import ListOfItemsComponent from './ListOfItemsComponent';

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
  function onFilter(value) {
    let newArr = [];
    newArr = listOfNames.filter((names) => {
      return names.name.indexOf(value) !== -1
    })
    setList(newArr);
  }


  return (
    <div>
      <ListOfItemsComponent onFilter={onFilter} items={list} />
    </div>
  );
}

export default App;

import { useEffect, useState } from 'react';
import './App.css';
import ListOfItemsComponent from './component/ListOfItemsComponent';
import { generateUsers } from './utils/helper';

function App() {
  const [initialList, setInitialList] = useState([])
  const [list, setList] = useState([]);

  useEffect(() => {
    setInitialList(generateUsers());
    setList(generateUsers());
  }, []);

  // WE CAN MOVE THIS FUNCTION TO AN OTHER FILE TO REMOVE LOGIC FROM UI (like using redux)
  function onFilter(value) {
    let filtredUsers = [];
    filtredUsers = list.filter((names) => names.name.toLowerCase().indexOf(value.toLowerCase()) !== -1)
    if (value) setList(filtredUsers);
    else {
      setList(initialList)
    }
  }


  return (
    <div className='container'>
      <h1>List of users by name</h1>
      <ListOfItemsComponent onFilter={onFilter} items={list} />
    </div>
  );
}

export default App;

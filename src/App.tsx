import React, { useEffect, useState } from 'react';
import './App.css';
import { Users, generateUsers, getFiltredList } from 'src/utils/helper';
import ListOfItemsComponent from './component/ListOfItemsComponent';

function App() {
  const [initialList, setInitialList] = useState<Users[]>([])
  const [list, setList] = useState<Users[]>([]);

  useEffect(() => {
    setInitialList(generateUsers());
    setList(generateUsers());
  }, []);

  // WE CAN MOVE THIS FUNCTION TO AN OTHER FILE TO REMOVE LOGIC FROM UI (like using redux)
  function onFilter(value: string) {
    let filtredUsers = [];
    filtredUsers = getFiltredList(list, value);
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

import React, { useEffect, useState } from 'react';
import 'src/App.css';
import { generateUsers } from 'src/utils/helper';
import ListOfItemsComponent from 'src/component/ListOfItemsComponent';
import { useSelector } from 'react-redux';
import { RootState } from 'src/reducer/RootStore';
import { buildUsersPresenter } from './userPresenter';

function App() {
  const { list }: any = useSelector<RootState>((state: RootState) => state.usersState);
  const { onFilter } = buildUsersPresenter();

  useEffect(() => {
    generateUsers();
  }, []);

  return (
    <div className='container'>
      <h1>List of users by name</h1>
      <ListOfItemsComponent onFilter={onFilter} items={list} />
    </div>
  );
}

export default App;

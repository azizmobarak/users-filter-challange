import React from 'react'
import { render } from 'react-dom'

import Users from './Pages/UsersScreen/Users'
import { Provider } from 'react-redux'
import { store } from 'src/reducer/store'

const rootElement = document.getElementById('root')

render(
  <React.StrictMode>
    <Provider store={store}>
      <Users />
    </Provider>
  </React.StrictMode>,
  rootElement,
)
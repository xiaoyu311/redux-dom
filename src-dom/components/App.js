import React from 'react'
import {Provider} from 'react-redux'
import Homepage from './Homepage'
import Postpage from './Postpage'
import store from '../store'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

class App extends React.Component{
  render(){
    return(
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Homepage} />
            <Route path="/post/:id" component={Postpage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App

import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import 'bulma'
import './stylesheets/main.scss'


import Home from './component/Common/Home'

const App = () => (
  <BrowserRouter>

    

    <main>
    

      <Switch>
        <Route exact path="/" component={Home} />

      </Switch>
    </main>

  </BrowserRouter>
)



ReactDOM.render(
  <App />,
  document.getElementById('root')
)
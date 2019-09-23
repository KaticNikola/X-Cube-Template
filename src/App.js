import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import NavBar from './Layout/NavBar';
import LiveEdit from './live-edit/LiveEdit'
import EditMode from './live-edit/EditMode/EditMode'

import Test from './live-edit/Test/Test'

import Homepage from './Pages/Homepage'
import PageNotFound from './Pages/PageNotFound'
import { Provider } from './live-edit/templateContext/TemplateContext';


function App() {

  return (
    <Provider>
      <BrowserRouter>
        <div className="App">
          <div className="navbar">
            <NavBar />
          </div>
          <Switch>
            <Route exact path='/' component={Homepage} />
            <Route exact path='/live-edit' component={LiveEdit} />
            <Route exact path='/live-edit/edit-mode' component={EditMode} />
            <Route exact path='/live-edit/test' component={Test} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>


  );
}

export default App;

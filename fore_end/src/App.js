import React, { Fragment } from 'react';
import { Provider } from 'react-redux'
import { Route, Switch,Redirect} from 'react-router-dom';

import store from './store'
import Footer from '../src/components/Foot/index';
import Home from './views/Home/Home';
import Infor from './views//Infor/Infor.js';
import Mine from './views//Mine/Mine.js';


const App = () => {
  return (
    <Provider store={store}>
       <Fragment>
          <Switch>
            <Route path='/Home' component={Home}></Route>
            <Route path='/ChangeNew' component={Infor}></Route>
            <Route path='/My' component={Mine}></Route>
            <Redirect from='/' to='/Home'></Redirect>
          </Switch>  
            <Footer></Footer>
      </Fragment>
    </Provider>
     
  )
}
export default App;

import Reduct_detail from './views/Reduct_detail/Reduct_detail';
import SaleDetail from './views/Home/SaleDetail/SaleDetail';
import SaleDetail1 from './views/Home/SaleDetail/SaleDetail1';
import SaleDetail2 from './views/Home/SaleDetail/SaleDetail2';
import SaleDetail3 from './views/Home/SaleDetail/SaleDetail3';
import SaleDetail4 from './views/Home/SaleDetail/SaleDetail4';
import ChooseList from './views/ChooseList/ChooseList';
import Tonew from './views/Tonew/Tonew';
import Notebook from './views/ChooseList/Notebook'
import Ipad from './views/ChooseList/Ipad'
import React,{Fragment} from 'react';
import {HashRouter as Router, Route,Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './style/reset.scss'
import store from './store'
import App from './App';
import Login from '../src/views/Login/Login.js'
import Register from '../src/views/Register/Register.js'



import Map from '../src/views/Map/Map.js'


ReactDOM.render(
 <Provider store={store}>
    <Fragment>
        <Router>
            <Switch>
							<Route path='/Login' component={Login}></Route>
							<Route path='/Register' component={Register}></Route>
							<Route path='/tonew' component={Tonew}/>
							<Route path='/choose' component={ChooseList}/>
							<Route path='/choose1' component={Notebook}/>
							<Route path='/choose2' component={Ipad}/>

              <Route path='/Reduct_detail' component={Reduct_detail} />
              <Route path='/saleDetail' component={SaleDetail}/>
              <Route path='/saleDetail1' component={SaleDetail1} />
              <Route path='/saleDetail2' component={SaleDetail2} />
              <Route path='/saleDetail3' component={SaleDetail3} />
              <Route path='/saleDetail4' component={SaleDetail4} />
              <Route path='/Map' component={Map}></Route>
              <Route path='/' component={App}></Route>
            </Switch>
        </Router>
    </Fragment>
    </Provider>
, document.getElementById('root'));


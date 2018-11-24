import { combineReducers } from 'redux';

import InforReducer from '../views/Infor/store/reducers';
import HomeReducer from '../views/Home/store/reducers';
import MapReducer from '../views/Map/store/reducer.js';
import LoginReducer from '../views/Login/store/reducers';
import RegisterReducer from '../views/Register/store/reducers';

    let zongdeReducers = combineReducers({
        InforReducer,
        HomeReducer,
        MapReducer,
        LoginReducer,
        RegisterReducer
    })

// console.log(zongdeReducers);

export default zongdeReducers;

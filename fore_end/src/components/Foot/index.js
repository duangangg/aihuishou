import React,{Component} from 'react';
import { NavLink } from "react-router-dom";
import './index.scss';
import '../../style/font/iconfont.css'
import '../../style/reset.scss';
// import Home from '../../views/Home/Home.js';
// import Infor from '../../views/Infor/Infor.js';
// import Mine from '../../views/Mine/Mine.js';
class Footer extends Component{
    render(){
        return(
                <div className='footer'>
                        <div>
                            <ul>
                                <li>
                                    <NavLink to='/Home'>
                                        <i className="icon-home iconfont"></i>
                                        <p>首页</p> 
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/ChangeNew'>
                                        <i className='icon-ai-phone iconfont'></i>
                                        <p>换新机</p> 
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to='/My'>
                                        <i className='icon-My iconfont'></i>
                                        <p>我的</p> 
                                    </NavLink>
                                    </li>
                            </ul>
                        
                            {/* <switch> */}
                                {/* <Route path='/Home' Component={Home} />
                                <Route path='/ChangeNew' Component={Infor} />
                                <Route path='/My' Component={Mine} /> */}
                            {/* </switch> */}
                        </div>
                </div>
            
        )
    }
}

export default Footer;
//这里是RegisterUI组件

import React, { Fragment }  from 'react';
import './Register.scss';
import { NavLink } from 'react-router-dom'; 

const RegisterUI = (props) => {
    return(
        <Fragment>
        <div className='wrapper'>
                <div className='login-contanier'>
                    <div className="login-header">
                      <span className="back ">
                      <NavLink to='/'>
                        <i className='icon-jiantou-copy iconfont'></i>
                      </NavLink>
                      </span>
                     注册 
                    </div>
                </div>
            <div className="content">
               <div className="tab">
                 <span className="active">
                   <font>
                      <font>账号密码注册</font>
                   </font>
                 </span>
               </div>


            <div className="input-contanier">
               <div className="single-input">
                        <label>
                            <font>
                                <font>账号</font>
                            </font>
                        </label>
                   <div className="input-box">
                      <input type="tel"
                       onChange={props.userChange}
                       maxlength="11" placeholder="爱回收账号" />
                   </div>
                </div>
            </div>
            <div className="input-contanier" >
               <div className="single-input">
                  <label>
                     <font>
                        <font>密码</font>
                     </font>
                  </label>
                    <div className="input-box">
                        <input type="password" maxlength="20" placeholder="密码" 
                        onChange={props.pwdChange} 
                         />
                    </div>
               </div>
           </div>
           <div className="input-contanier" >
               <div className="single-input">
                  <label>
                     <font>
                        <font>确认密码</font>
                     </font>
                  </label>
                    <div className="input-box">
                        <input type="password" maxlength="20" placeholder="密码" 
                         onChange={props.pwdsChange} />
                    </div>
               </div>
           </div>

            <div className="tips">
                  <font><NavLink to='/Login'>点击回到登录页面</NavLink></font>
            </div>
            <div>
               <span className="submit" onClick={()=>{
                   props.registerInt(props.username,props.password)
               }}> 注册</span>
            </div>

        </div>
    </div> 
        </Fragment> 
    )
}
    
  export default RegisterUI;
import React, { Fragment }  from 'react';
import './Login.scss';
import { NavLink } from 'react-router-dom'; 


const LoginUI = (props) => {
    return(
        <Fragment>
        <div className='wrapper'>
                <div className='login-contanier'>
                    <div className="login-header">
                      <span className="back">
                      <NavLink to='/'>
                        <i className='icon-jiantou-copy iconfont'></i>
                      </NavLink>
                            
                      </span>
                      <font> 登录 </font>  
                    </div>
                </div>
            
             
            <div className="content">
               <div className="tab">
                 <span className="active">
                   <font>
                      <font>账号密码登录</font>
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
                       maxlength="11" placeholder="爱回收账号"  />
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
                        <input type="password" 
                         onChange={props.pwdChange}
                        maxlength="20" placeholder="密码"  />
                    </div>
               </div>
           </div>

            <div className="tips">
                  <font><NavLink to='/Register'>未注册用户>></NavLink></font>
            </div>
            <div>
            <span className="submit" onClick={()=>{
                   props.loginInt(props.username,props.password)
               }}> 登录</span>
            </div>
            <div className="bottom-tip">
               <font>
                  <font>登录即代表您已经同意</font>
               </font>
                <a href="https://m.aihuishou.com/m/index.html#/help/privacy">
                  <font>
                     <font>“爱回收隐私政策”</font>
                  </font>
                </a>
            </div>  
          
           
            
        </div>
    </div>
        </Fragment> 
    )
}
export default LoginUI;
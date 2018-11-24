import React ,{ Component} from 'react';
import './Mine.scss';
import { NavLink } from 'react-router-dom';
const MineUI =(props)=>{
        return (
            <div className='mine'>
                <div className='title'>
                    <p>我的</p>
                    <i className='iconfont icon-gouwuche'></i>
                </div>
                <div className="login">
                    <div className="login_Left">
                        <div className="ing">
                            <i className="icon-touxiang iconfont"></i>
                            
                        </div>
                        {/* <a href="/Login">立即登录</a> */}
                        <NavLink to='/Login'>{props.name}</NavLink>
                        <span onClick = {props.outLogin}>退出登陆</span>
                    </div>
                    <div className="login_Right">
                        <p> 
                            <i className='icon-shezhi iconfont'></i>
                            设置 
                            <i className='iconfont icon-jiantou1'></i> 
                            </p>
                    </div>
                </div>
                <div className="OtherInfo">
                    <ul>
                        <li>
                            <i className='iconfont icon-yue'></i>
                            <p>账户余额</p>
                            <span>0.00</span>  
                        </li>
                        <li> 
                            <i className='iconfont icon-quan'></i>
                            <p>加价券</p> 
                            <span>0张可用</span>  
                        </li>
                        <li> 
                            <i className='iconfont icon-yinxingqia'></i>
                            <p>银行卡</p>
                            <span>未绑定</span>
                        </li>
                    </ul>
                </div>
                <div className="order">
                    <p>我的订单</p>
                    <NavLink to='/'>查看更多
                        <i className='icon-jiantou1 iconfont'></i>
                    </NavLink>
                </div>
                <div className="server">
                    <p className='Oth-Server'>其他服务</p>
                    <ul>
                        <li>
                        <NavLink to='/'>
                                <i className='iconfont icon-liwu'></i>
                                <p>兑换中心</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                <i className='iconfont icon-home'></i>
                                <p>查看门店</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                <i className='iconfont icon-xunhuan'></i>
                                <p>回收指南</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/'>
                                <i className='iconfont icon-dingdan'></i>
                                <p>换新订单</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            
        )
    }

export default MineUI;
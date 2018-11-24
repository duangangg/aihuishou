import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './Home.scss';
import '../../style/font/iconfont.css'
import '../../style/reset.scss';
import  {NavLink} from 'react-router-dom';
const HomeUI = (props) =>{
        return (
            <div className='home'>
                <div className='title'>
                    <div className='title_Left'>
                        {/* <a href='/'></a> */}
                        <NavLink to='/Map'>{props.cityName}</NavLink>
                        <i className='icon-jiantouarrow483 iconfont'></i>
                    </div>
                    <div className='titile_Right'>
                        <NavLink to="/" className="a_left"><i className="iconfont icon-search"></i></NavLink> 
                        <NavLink to="/" className='a_right'><i className='iconfont icon-gouwuche'></i></NavLink> 
                    </div>
                </div>
                <div className='lunBo'>
                <WingBlank>
                    <Carousel
                    autoplay={true}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {props.list.map((val,index) => (
                        <img
                            src={val.imageUrl}
                            alt=""
                            key={index}
                            style={{ width: '100%', verticalAlign: 'top' }}
                        />
                    ))}
                    </Carousel>
                </WingBlank>
                </div>
                <div className='part_img'>
                    <img src='../../style/img/1.png' alt=''/>
                </div>
                <div className='banner'>
                    <ul>
                        <li>
                            <NavLink to="/saleDetail">
                            <img src='../../style/img/b_1.png' alt=''/>
                                <p>卖手机</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                            <img src='../../style/img/b_2.png' alt=''/>
                                <p>卖笔记本</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <img src='../../style/img/b_3.png' alt=''/>
                                    <p>卖平板</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                            <img src='../../style/img/b_4.png' alt=''/>
                                <p>摄影摄像</p>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                            <img src='../../style/img/b_5.png' alt=''/>
                                <p>智能数码</p>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className='gu'>
                <NavLink to="/">
                    <img src='../../style/img/gu.png' alt=''/>
                </NavLink>
                </div>
                <div className='Hui'>
                    <NavLink to="/">
                        <img src='../../style/img/Hui.jpg' alt=''/>
                    </NavLink>
                </div>
                <div className='two_Pic'>
                    <NavLink to="/" className='Tow_Left'>
                        <img src='../../style/img/Left.png' alt=''/>
                    </NavLink>
                    <NavLink to="/" className='Tow_Right'>
                        <img src='../../style/img/Right.png' alt=''/>
                    </NavLink>
                </div>
                <div className='ch'>
                    <NavLink to="/">
                        <img src='../../style/img/ch.png' alt=''/>
                    </NavLink>
                </div>
                <div className='Price'>
                    <ul>
                        <li>
                            <NavLink to='/Reduct_detail'>
                                <img src='../../style/img/Price_1.png' alt=''/>
                            </NavLink>
                        </li>
                        <li>
                  <NavLink to='/Reduct_detail'>
                                <img src='../../style/img/Price_2.png' alt=''/>
                            </NavLink>
                        </li>
                        <li>
                  <NavLink to='/Reduct_detail'>
                                <img src='../../style/img/Price_3.png' alt=''/>
                            </NavLink>
                        </li>
                    </ul>
                    
                    
                </div>
                <div className='toutiao'>
                    <NavLink to="/">
                            <img src='../../style/img/11.png' alt=''/>
                    </NavLink>
                </div>
                <div className='yello'>
                    <NavLink to="/">
                        <img src='../../style/img/22.png' alt=''/>
                    </NavLink>
                </div>
                <div className="last">
                    <NavLink to="/">
                        <img src='../../style/img/33.png' alt=''/>
                    </NavLink>
                </div>
            </div>
        )
}
export default HomeUI;
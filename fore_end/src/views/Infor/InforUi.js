import React from 'react';
import { Carousel, WingBlank } from 'antd-mobile';
import './Infor.scss';
import '../../style/font/iconfont.css'
import '../../style/reset.scss';
const InforUI = (props) => {
        return (
            <div className='infor'>
                <div className='title'>
                    <p> 爱回收 0 元换新机</p>
                </div>
                <div className='lunbo'>
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
                <div className='xianshi'>
                    <img src={props.list2} alt=''/>
                </div>
                <div className='double'>
                    <ul>
                        {
                            props.list3.map((items,index)=>{
                                return (
                                    <li key={index}>
                                        <img src={items.imageUrl} alt=''/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className='more'>
                    <img src={props.list4} alt=''/>
                </div>    
                <div className='change'>
                    <img src={props.list5} alt=''/>
                </div>

                <div className='item_Img'>
                    <ul>
                        {
                            props.list6.map((items,index)=>{
                                return (
                                    <li key={index}>
                                        <img src={items.imageUrl} alt=''/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                
                <div className="activeIphone">
                <img src={props.list7} alt=''/>
                </div>

                <div className="text">
                    <ul>
                        {/* <li><a href="#">图片一</a></li>
                        <li><a href="#">图片一</a></li> */}
                        {
                            props.list8.map((item,index)=>{
                                return (
                                    <li key={index}>
                                        <img src={item.imageUrl} alt=''/>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>

                <div className="Heart">
                    <img src={props.list9} alt=''/>
                </div>

                <div className="Img_List">
                    <img src={props.list10} alt=''/>
                </div>
                <div className="Huanxinliucheng">
                    <img src={props.list11} alt=''/>
                </div>
                <div className="notice">
                    <img src={props.list12} alt=''/>
                </div>
            </div>
        )
    }
export default InforUI;
import React from 'react';
import {NavLink} from 'react-router-dom';
import './Map.scss';
const MapUI = (props)=>{
    return(
        <div className='map'>
            <div className="title">
                <NavLink to='/Home'>
                    <i className='icon-jiantou-copy iconfont'></i>
                </NavLink>
                    <p>选择城市</p>
                
            </div>
            <div className="inputBox">
                <input type="text" className='text' placeholder='请输入城市名称查询'/>
                <i  className='iconfont icon-search'></i>
            </div>
            <div className='boxContent'>
                <p>热门城市</p>
                <ul>
                    {/* <li>上海市</li>
                    <li>上海市</li>
                    <li>上海市</li>
                    <li>上海市</li>
                    <li>上海市</li>
                    <li>上海市</li>
                    <li>上海市</li>
                    <li>上海市</li> */}
                    {
                        props.list.map((item,index)=>{
                            return (
                                <li key={index} onClick={()=>{props.choseCity(item)}}>
                                    {item} 
                                </li>
                            )
                        })
                    }
                    
                </ul>
            </div>
            <div className="list">
                <ul>
                    <li>#</li>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>#</li>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>#</li>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>#</li>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                </ul>
            </div>
            <div className='list2'>
                    <p>A</p> 
                    <ul>
                        {
                            props.list2.map((item,index)=>{
                               return (
                                <li key={index}>{item}</li>
                               )

                            })
                        }
                    </ul>
            </div>        
        </div>
    )
}
export default MapUI;
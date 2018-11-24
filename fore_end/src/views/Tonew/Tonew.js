import React, { Component,Fragment } from 'react';
import Dgheader from '../../components/Dgheader/Dgheader'
import Progress from '../../components/Progress/Progress'
import './Tonew.scss'
import { NavLink } from 'react-router-dom'

class Odetonew extends Component {
  constructor(props){
    super(props);
    this.state = {
      title : '以旧换新'
    }
  }
  render() {
    return (
      <Fragment>
        <Dgheader></Dgheader>
        <Progress></Progress>
        {/* //新手机 */}
        <div className="p-list">
          <h4 className="flag flag-new">新机</h4>
          <div className="pn-item">
            {/* <img className="img" src="../style/img/huawei_baoshilan.jpg" /> */}
            <img src={require('../../style/img/huawei_baoshilan.jpg')} alt="华为P20Pro" className="img"/>
            <h4 className="title">华为 HUAWEI P20 Pro 全面屏徕卡三摄全网通手机</h4>
            <div className="sku">
              <span>P20 Pro 128G 宝石蓝</span>
            </div>
            <span className="price">官方售价<span className="price-num"><small>￥</small>4988</span></span>
            <div className="tips"><span>以旧换新立享¥500现金补贴</span></div>
          </div>
        </div>
        {/* 旧手机 */}
        <div className="p-list">
          <h4 className="flag flag-old">旧机</h4>
          <div >
            <NavLink to="choose" className="add2">
              <img src={require('../../style/img/yourmoblie.png')} className="img" alt=""/>
              <h4 className="title">未检测到你的机型<br/>请手动添加</h4>
              <span className="joinbtn">
              <NavLink to='/choose'></NavLink>立即添加
              </span>
            </NavLink>
            </div>
          </div>
          {/* 特权专享 */}
          <div className="special">
            <div className="title">
              <img src={require('../../style/img/corw.png')}alt=""/>
              <h3>专享特权</h3>
            </div>
            <ul>
              <li>
                <img src={require('../../style/img/save_1.png')} alt=""/>
                <p>5项专业质检</p>
              </li>
              <li>
                <img src={require('../../style/img/datemove.png')} alt=""/>
                <p>免费数据迁移</p>
              </li>
              <li>
                <img src={require('../../style/img/myInfo.png')} alt=""/>
                <p>100%隐私清除</p>
              </li>
            </ul>
          </div>
          {/* 底部 */}
          <div className="btn">
            <span className="discount">已抵扣 <i>¥ 0</i></span>
            <span className="price">预计到店支付 <i>¥ 4988</i></span>
            <span className="go-shop">前往门店</span>
          </div>
      </Fragment>
    )
  }
}

export default Odetonew;

import React, { Component, Fragment } from 'react';
import { Link,NavLink } from "react-router-dom";
// import Carousel from 'antd/lib/carousel';
import './css/iconfont/iconfont.css';
import './css/reset.css';
import './css/SaleDetail.scss';
import axios from 'axios';

class SaleDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urlT: 'https://bird.ioliu.cn/v1/?url=',
      url_sub: 'https://m.aihuishou.com/portal-api/product/category-brands/22',
      url_sub_main: '/SaleDetail/SaleDetail3.json',
      list_sub: [],
      list_sub_main: []
    }
  }

  render() {
    return (
      <Fragment>
        <div className="category_header">
          <Link to='/home' >
            <i className="iconfont icon-fanhui"></i>
          </Link>
          <div className="search">
            <span className="iconfont icon-sousuo"></span>
            <input type="text" placeholder="iphoneX" />
          </div>
        </div>
        <div className="category_main">
          <ul className="category_main_hd">
            <li>
              <NavLink to="/saleDetail" activeClassName="yellow">卖手机</NavLink>
            </li>
            <li>
              <NavLink to="/saleDetail1" activeClassName="yellow">卖笔记本</NavLink>
            </li>
            <li>
              <NavLink to="/saleDetail2" activeClassName="yellow">卖平板</NavLink>
            </li>
            <li>
              <NavLink to="/saleDetail3" activeClassName="yellow">摄影摄像</NavLink>
            </li>
            <li>
              <NavLink to="/saleDetail4" activeClassName="yellow">智能数码</NavLink>
            </li>
          </ul>
          <div className="sub">
            <div className="sub_titles">
              <ul>
                {/* <li>{this.state.list_sub[0].name }</li> */}
                {
                  this.state.list_sub.map((item, index) => {
                    return (
                      <li key={index}>{item}</li>
                    );
                  })
                }
              </ul>
            </div>
            <div className="sub_main">
              <ul className="box">
                {/* <li>
                  <span className="sub_num">1</span>
                  <span>苹果 iPhone X</span>
                </li> */}
                {
                  this.state.list_sub_main.map((item, index) => {
                    return (
                      <li key={index}>
                        <span className="sub_num">{index+1}</span>
                        <span>{item}</span>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
  componentDidMount() {
    axios.get(this.state.urlT + this.state.url_sub)
      .then(res => {
        // var res1 = JSON.parse(res);
        // console.log(typeof res.data)
        var arr1 =[]
        arr1=Object.keys(res.data.data).map(key => res.data.data[key].name)
        // console.log(arr1)
        // console.log(Object.keys(res.data.data).map(key => res.data.data[key].name))
        this.setState({
          list_sub: arr1
        });
      })

    axios.get(this.state.url_sub_main)
      .then(res => {
        // var res1 = JSON.parse(res);
        // console.log(typeof res.data.data)
        var arr2 = []
        arr2 = Object.keys(res.data).map(key => res.data[key].name)
        // console.log(arr2)
        // console.log(Object.keys(res.data.data).map(key => res.data.data[key].name))
        this.setState({
          list_sub_main: arr2
        });
      })
  }
}

export default SaleDetail;
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import './css/iconfont/iconfont.css';
import './css/reset.css';
import './css/Reduct_detail.scss';
import axios from 'axios';

class Reduct_detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urlT: 'https://bird.ioliu.cn/v1/?url=',
      url_reduct: '/Reduct_detail_info.json',
      url_reduct2: 'https://xin.aihuishou.com/ofnew/api/brand_new_products/27640?region_id=256',
      list_reduct: [],
      list_reduct2: [],
      list_img: [],
      list_img2: []
    }
  }

  render() {
    return (
      <Fragment>
        <div className="top_banner">
          <div className="hd">
          <Link to='/home' className="icon-jiantou-copy iconfont">
            </Link>
          </div>
          <ul>
            {/* <li>
              <img src={item.image_url} alt=""/>
            </li> */}
            {
              this.state.list_img.map((item, index) => {
                return (
                  <li key={index}>
                    <img src={item.image_url} alt="" />
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className="product_content">
          <div className="desc">
            <div className="name">
              <span>
                <i>正品自营</i>
                {this.state.list_reduct2[6]}
              </span>
            </div>
            <p>{this.state.list_reduct2[7]}</p>
            <p className="original_price">官方售价 ¥10999</p>
            <div className="price">
              <i className="iconfont icon-zhibi_renminbi"></i>
              <span>
                享以旧换新补贴
                 ¥
                500
              </span>
            </div>
          </div>
          <div className="process">
            <div className="title">
              <i className="iconfont icon-jiaohuan"></i>
              <em>以旧换新</em>
              <span>旧机回收抵扣新机款</span>
            </div>
            <img src="/img/process.png" alt="" />
          </div>
          <div className="selected">
            <div className="selected_sku">
              <i>已选</i>
              <div>
                <span>256GB, 以旧换新, 更换城市</span>
                <span>></span>
              </div>
            </div>
            <div className="serve">
              <span>15天质量问题换货</span>
              <span>门店数据迁移</span>
              <span>旧机隐私清除</span>
            </div>
          </div>
          <div className="comment_page">
            <div className="title">优质评价</div>
            <div className="list">
              <ul>
                {
                  this.state.list_reduct.map((item, index) => {
                    return (
                      <li key={index}>
                        <div className="list_main">
                          <div className="info">
                            <div className="info_l">
                              <img src={item.avatar_image_url} alt="" />
                              <span>{item.mobile}</span>
                            </div>
                            <i>
                              10月16日
                            </i>
                          </div>
                          <div className="product_info">
                            <div className="name">
                              {item.recycle_product}
                            </div>
                            <div className="price">
                              <span className="price_l">
                                新机实付：
                                ￥
                              <i>{item.pay_amount/100}</i>
                              </span>
                              |
                              <span className="price_r">
                                换新省:
                                <em>￥</em>
                                <i>{item.save_amount/100}</i>
                              </span>
                            </div>
                          </div>
                          <div className="comment">
                            {item.content}
                          </div>
                        </div>
                      </li>
                    );
                  })
                }
              </ul>
            </div>
          </div>
          {/* 图文详情 */}
          <div className="detail_page">
            <div className="title"> —— 图文详情 —— </div>
            {
              this.state.list_img2.map((item,index) => {
                return (
                  <img src={item.image_url} alt="" key={index}/>
                );
              })
            }
          </div>
          <div className="has_product_btn">
            <Link to='/tonew'>立即换新</Link>
          </div>
        </div>
      </Fragment>
    );
  }

  componentDidMount() {
    axios.get(this.state.url_reduct)
      .then(res => {

        // console.log(res)
        // console.log(typeof res)
        var arr1 = []
        arr1 = Object.keys(res.data).map(key => res.data[key])

        // console.log(arr1)
        // console.log(typeof arr1)
        this.setState({
          list_reduct: arr1
        })
      })

    axios.get(this.state.urlT + this.state.url_reduct2)
      .then(res => {

        // console.log(res.data.data)
        // console.log(typeof res)
        var arr2 = []
        arr2 = Object.keys(res.data.data).map(key => res.data.data[key])

        var arr_img = []
        arr_img = Object.keys(res.data.data.header_medias).map(key => res.data.data.header_medias[key])

        var arr_img2 = []
        arr_img2 = Object.keys(res.data.data.introduction).map(key => res.data.data.introduction[key])
        // console.log(arr_img2)
        // console.log(typeof arr1)
        this.setState({
          list_reduct2: arr2,
          list_img: arr_img,
          list_img2: arr_img2
        })
      })
  }

}

export default Reduct_detail;

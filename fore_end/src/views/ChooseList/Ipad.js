import './ipad.scss'
import React,{ Component,Fragment }from 'react'
// import { HashRouter as Router} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import Tonew from '../Tonew/Tonew'

class Ipad extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urlT: 'https://bird.ioliu.cn/v1/?url=',
      url_sub: 'https://m.aihuishou.com/portal-api/product/category-brands/6',
      url_sub_main: '/dgfile/ipad.json',
      list_sub: [],
      list_sub_main: []
    }
  }

  render() {
    return(
      <Fragment>
        <div className="page-header toper append-fixed">
          <h2 className="title"></h2>
          <NavLink to='tonew'><span className="back iconfont icon-guanbi"></span></NavLink>
        </div>

        <div className="category_main">
          <ul className="title-shop">
            <li>
              <NavLink to="/choose" >卖手机</NavLink>
            </li>
            <li>
              <NavLink to="/choose1" >卖笔记本</NavLink>
            </li>
            <li>
              <NavLink to="/choose2" activeClassName="yellow">卖平板</NavLink>
            </li>
          </ul>
          <div className="submain">
            <div className=" leftnav">
              <ul className="leftnav_li">
                {
                  this.state.list_sub.map((item, index) => {
                    return (
                      <li className="mobilepai" key={index}>{item}</li>
                    );
                  })
                }
              </ul>
            </div>
            <div className="rightmain">
              <ul className="box">
                {
                  this.state.list_sub_main.map((item, index) => {
                    return (
                    <NavLink to="/tonew" component={Tonew}>
                      <li key={index}>
                        <span className="sub_num">{index+1}</span>
                        <span>{item}</span>
                      </li>
                    </NavLink>
                    );
                  })
                }
              </ul>
            </div>
          </div>
        </div>

      </Fragment>
    )
  }

  componentDidMount() {
    axios.get(this.state.urlT + this.state.url_sub)
      .then(res => {
        var arr1 =[]
        arr1=Object.keys(res.data.data).map(key => res.data.data[key].name)
        this.setState({
          list_sub: arr1
        });
      })

    axios.get(this.state.url_sub_main)
      .then(res => {
        var arr2 = []
        arr2 = Object.keys(res.data.data).map(index => res.data.data[index].name)
        this.setState({
          list_sub_main: arr2
        });
      })
  }

}

export default Ipad;

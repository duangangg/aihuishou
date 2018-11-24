import React,{ Component } from 'react';
import HomeUI from './HomeUi';
import axios from 'axios';
import { connect } from 'react-redux';
import store from '../../store/index';
import cookie from 'react-cookies'
import { SSL_OP_COOKIE_EXCHANGE } from 'constants';
class Home extends Component{
    render(){
        return (
            <HomeUI {...this.props} />
        )
    }

    componentDidMount(){
        axios.get('https://bird.ioliu.cn/v1/?url=https://m.aihuishou.com/portal-api/home/mobile-sos?inquirykey=&cityid=256').then((res)=>{
            store.dispatch({
                type:'INDEX',
                list:res.data.data[0].items,
            })
            
        });
        // axios.get('https://bird.ioliu.cn/v1/?url=https://m.aihuishou.com/portal-api/city/locate')
        // .then((res)=>{
        //     console.log(res.data);
        //     // store.dispatch({
        //     //     type:"CITY",

        //     // })
        // })
    }  
}
const mapStateToProps1 = (state) =>{
    return {
        list:state.HomeReducer.bannerImg,
        cityName:cookie.load('choseCity') || '深圳市'
    }
}
const mapDispatchToProps1 = (dispatch) => {
    return {
  
    }
  }
export default connect(mapStateToProps1, mapDispatchToProps1)(Home);

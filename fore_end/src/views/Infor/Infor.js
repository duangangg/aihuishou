import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import InforUI from './InforUi';
import store from '../../store/index';
class Infor extends Component{
    
    render(){
        return (
            <InforUI {...this.props}></InforUI>
        )

    }
    componentDidMount(){
        axios.get('https://bird.ioliu.cn/v1/?url=https://m.aihuishou.com/portal-api/ofnew/home?cityid=256').then((res)=>{
            // console.log(res.data.data);
            store.dispatch({
                type:'LUNBOTU',
                list:res.data.data[0].items,
                list2:res.data.data[1].items[0].imageUrl,
                list3:res.data.data[2].items,
                list4:res.data.data[3].items[0].imageUrl,
                list5:res.data.data[4].items[0].imageUrl,
                list6:res.data.data[5].items,
                list7:res.data.data[7].items[0].imageUrl,
                list8:res.data.data[8].items,
                list9:res.data.data[9].items[0].imageUrl,
                list10:res.data.data[10].items[0].imageUrl,
                list11:res.data.data[11].items[0].imageUrl,
                list12:res.data.data[12].items[0].imageUrl,
            })
        })
    }
}

const mapStateToProps = (state) => {
    return {
        list:state.InforReducer.bannerImg,
        list2:state.InforReducer.baokuan,
        list3:state.InforReducer.doubleImg,
        list4:state.InforReducer.moreImg,
        list5:state.InforReducer.changeNew,
        list6:state.InforReducer.imgItem,
        list7:state.InforReducer.goodsActive,
        list8:state.InforReducer.context,
        list9:state.InforReducer.newBuy,
        list10:state.InforReducer.threeImg,
        list11:state.InforReducer.liucheng,
        list12:state.InforReducer.notice,

    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
  
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Infor);
// export default Infor;
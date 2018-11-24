import React, { Component } from 'react';
import MapUI from './MapUI';
import axios from 'axios';
import store from  '../../store';
import { connect } from 'react-redux';
class Map extends Component{
    render(){
        return (
            <MapUI {...this.props}></MapUI>
            // <MapUI></MapUI>
        )
    }
    componentDidMount(){
        axios.get('https://bird.ioliu.cn/v1/?url=https://m.aihuishou.com/portal-api/city/all').then((res)=>{
            var HotName=[];
            var Alist=[];
            
            for(var i=0;i<res.data.data.length;i++){
                if(res.data.data[i].isHot===true){
                    HotName.push(res.data.data[i].name);
                }
                if(res.data.data[i].character==='A'){
                    Alist.push(res.data.data[i].name)
                }
            }
            store.dispatch({
                type:'HotMap',
                list : HotName,
                list2:Alist
            })  
        })
    }
}

const mapStateToProps = (state) =>{
    return {
        list:state.MapReducer.HotName,
        list2:state.MapReducer.Alist
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        choseCity:(name) =>{
            document.cookie='choseCity='+name;
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Map);
// export default Map;

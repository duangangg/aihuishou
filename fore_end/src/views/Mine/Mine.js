import React,{ Component } from 'react';
import MineUI from './MineUi'
import cookie from 'react-cookies'
import { connect } from 'react-redux';

class Mine extends Component{
    render(){
        return (
                <MineUI {...this.props}></MineUI>
            )
    }

    componentDidMount () {
        console.log(cookie.load('uname'))
    }
}

const stateProps = (state) => {
    console.log(cookie.load('uname'))
    return{
        name:cookie.load('uname') || '立即登录'
    }
 }

 const dispatchProps = (dispatch) => {
    return {
        outLogin:()=>{
            if(cookie.load('uname')){
                cookie.remove('uname')
                
            }
        }
    }
 }


export default connect(stateProps,dispatchProps)(Mine);

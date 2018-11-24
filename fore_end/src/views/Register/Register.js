import React, { Component }  from 'react';
import { connect } from 'react-redux';
import RegisterUI from './RegisterUI';
import '../../style/font/iconfont.css'
import axios from 'axios'
import RegisterReducer from  '../../store/reducers'
import {userInp,pwdInp} from './store/actionCreators' 


  class Register extends Component {
     render(){
         return (
             <RegisterUI {...this.props}></RegisterUI>
           
         )
     }
    }
   
const stateProps = (state) => {
    console.log('我到底',state.Register)
    return{
        username: state.RegisterReducer.user,
        password: state.RegisterReducer.pwd
    }
}

const dispatchProps = (dispatch) => {
    return {
        onClick:() => {
            window.location.href = 'https://www.baidu.com/index.php?tn=06074089_32_pg&ch=7' ;
        },       
        registerInt:(username,password) => {
            
            console.log(username,password);
            axios.post('http://10.36.134.10:3001/Register',{
                    username:username,
                    password:password
            }).then(results => {
                var code = results.data.code;
                if(code === -3) {
                    alert("用户名已存在")
                }else{
                    alert("注册成功，请继续操作")
                    window.location.href='#/Login'
                }
            })
        },

            //绑定表单值
    userChange:(e) => {
      dispatch(userInp(e.target.value))
    },
    pwdChange:(e) => {
        dispatch(pwdInp(e.target.value))
      },
    }
}
export default connect(stateProps,dispatchProps)(Register);

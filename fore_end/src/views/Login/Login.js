import React, { Component}  from 'react';
import { connect } from 'react-redux';
import LoginUI from './LoginUI';
import './Login.scss';
import LoginReducer from '../../store/reducers'
import axios from 'axios'
import '../../style/font/iconfont.css';
import {userInp,pwdInp} from './store/actionCreators' 
import cookie from 'react-cookies'

class Login extends Component {

    render(){
        return(
         <LoginUI {...this.props}></LoginUI>
        )
    }
  }
  const stateProps = (state) => {
   console.log('我到底',state.Login)
   return{
       username: state.LoginReducer.user,
       password: state.LoginReducer.pwd
   }
}

const dispatchProps = (dispatch) => {
   return {
       onClick:() => {
           window.location.href = './Mine'
       },
       loginInt:(username,password) => {
            // cookie.save('username',val)
           console.log(username,password);
           axios.post('http://10.36.134.10:3001/Login',{
                   username:username,
                   password:password
           }).then(results => {
              console.log(results)
                var code = results.data.code;
                if(code === 0) {
                    cookie.save('uname',username);
                    localStorage.setItem('uname',username)
                    window.location.href = '#/Mine' 
                }else if(code === -2){
                    alert("用户名或密码错误，请重新输入")
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
export default connect(stateProps,dispatchProps)(Login);
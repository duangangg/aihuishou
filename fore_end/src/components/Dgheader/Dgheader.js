import React from "react";
import './Dgheader.scss'
import { NavLink, Link } from "react-router-dom";
import '../../style/iconfont/iconfont.css'

const Dgheader = () =>{
  return (
      <div className="page-header append-fixed">
        <h2 className="title">以旧换新</h2>
        <NavLink to="/Reduct_detail"><span className="back iconfont icon-guanbi"></span></NavLink>
      </div>
  )
}

export default Dgheader;

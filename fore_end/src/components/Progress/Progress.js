import React from 'react'
import './Progress.scss'

const Progress = () => {
  return(
    <div className="g-step">
			<div className="item past">
        <span className="line">
          <span className="index">1</span>
        </span>
        <span className="text">选购新机</span>
      </div>

			<div className="item">
        <span className="line">
          <span className="index">2</span>
        </span>
        <span className="text">旧机估价</span>
      </div>

			<div className="item future">
        <span className="line">
          <span className="index">3</span>
        </span>
        <span className="text">前往门店</span>
      </div>

			<div className="item future">
        <span className="line">
          <span className="index">4</span>
        </span><span className="text">换取新机</span>
      </div>
		</div>
  )
}

export default Progress;

import React from 'react'
import { FcEngineering } from "react-icons/fc";

const Header = () => {
  return (
    <div>
        <h1 className="title">
            <div className="title-icon">
                <FcEngineering className="d-block" />
            </div>
            <div className="d-block">
                <a href="#">HY's PORTFOLIO SITE</a>
            </div>
        </h1>
    </div>
  )
}

export default Header
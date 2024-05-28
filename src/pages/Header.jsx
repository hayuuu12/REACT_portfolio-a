import React from 'react'
import { FcLike } from "react-icons/fc";

const Header = () => {
  return (
    <div>
        <h1 className="title">
            <div className="title-icon">
                <FcLike className="d-block" />
            </div>
            <div className="title-text">
                <a href="#">HY's PORTFOLIO SITE</a>
            </div>
        </h1>
    </div>
  )
}

export default Header
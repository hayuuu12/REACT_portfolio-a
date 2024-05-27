import React from 'react'
import styled from 'styled-components'

const MainLink = styled.div`
  display:flex;
  align-items:center;
`;
const Links = styled.span`
    display: inline-block;
    width: 15px;
    height: 10px;
    border-radius: 50%;
    border: 3px solid #0c339e;
    position:relative;
    transition: all 300ms ease;
    &:first-child::after{
        content: "";
        display: inline-block;
        width: 15px;
        position: absolute;
        left: 6px;
        border: 2px solid #0c339e;
        border-radius: 40px;
        transition: width 300ms ease
    }
    &:last-child{
        margin-left: 3px;
        margin-right:10px;
        transition: margin-left 300ms ease;
    }
`;
const HoverLink = styled(MainLink)`
    &:hover ${Links}:first-child::after{
      width:30px;
    }
    &:hover ${Links}:last-child{
      margin-left: 18px;
    }
`;
const ActiveLink = styled(MainLink)`
    ${Links}:first-child::after{
      width:30px;
    }
    ${Links}:last-child{
      margin-left:18px;
    }
`;
const Menus = ({navtitle, navLink, navActive, setNavActive}) => {
  //메뉴이동 함수
  const scrollTo = (id) => {
    const ele = document.getElementById(id);
    if(ele){
      setNavActive(!navActive);
      ele.scrollIntoView({behavior: 'smooth'});
    }
  }
  return navActive? (
                    <ActiveLink onClick={()=>scrollTo(navLink)}>
                      <Links />
                      <Links />
                      {navtitle}
                    </ActiveLink>
                  ) : (
                    <HoverLink>
                      <Links />
                      <Links />
                      {navtitle}
                    </HoverLink>
                  )
    }


export default Menus
import React from 'react'
import styled from 'styled-components'

const MainLink = styled.a`
  display:flex;
  align-items:center;
  text-transform: capitalize;
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
        transition: width 300ms ease;
    }
    &:last-child{
        margin-left: 3px;
        margin-right:10px;
        transition: margin-left 300ms ease;
    }
`;
const HoverLink = styled(MainLink)`
    &:hover ${Links}:first-child::after{
      width:25px;
    }
    &:hover ${Links}:last-child{
      margin-left: 13px;
    }
`;
const ActiveLink = styled(MainLink)`
    color:#0c339e;
    font-weight:600;
    text-decoration:underline;
    ${Links}:first-child::after{
      width:25px;
    }
    ${Links}:last-child{
      margin-left: 13px;
    }
`;
const Menus = ({navtitle, navLink, navActive, setNavActive}) => {

  const handleLink = (links) => {
    setNavActive(links);
  }

  const activeLinks = <ActiveLink href={'#'+navLink} onClick={() => handleLink(navLink)}>
                        <Links />
                        <Links />
                        {navtitle}
                      </ActiveLink>;
  const hoverLinks = <HoverLink href={'#'+navLink}  onClick={() => handleLink(navLink)}>
                        <Links />
                        <Links />
                        {navtitle}
                      </HoverLink>;

  return navActive && navActive === navLink ? activeLinks : hoverLinks
  
}


export default Menus
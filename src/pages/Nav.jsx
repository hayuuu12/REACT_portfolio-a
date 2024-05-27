import React, {useState, useEffect} from 'react'
import Menus from '../components/Menus'

const Nav = () => {
  const [menuItem, setMenuItem] = useState([]);
  const [navActive, setNavActive] = useState(false);
  useEffect(() =>{
    fetch('./data/menu.json')
    .then(res => res.json())
    .then(data => setMenuItem(data.menu))
    .catch(error=>console.error('데이터를 가져오는데 실패했습니다.', error));
  }, []);
  console.table(menuItem);
  return (
    <nav>
      <ul className="mynav">
      {
        menuItem.map((item, index)=>(
          <li key={index}>
            <Menus 
              navtitle={item.name} 
              navLink={item.link} 
              navActive={navActive} 
              setNavActive={setNavActive} />
          </li>
        ))
      }
      </ul>
    </nav>
  )
}

export default Nav
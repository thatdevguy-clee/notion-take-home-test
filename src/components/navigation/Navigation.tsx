"use client"
import { useRef, useState } from 'react';
import { usePathname} from 'next/navigation';
import './navigation.css';

const Navigation = () => {
  const activePage = usePathname();
  const navigationRef = useRef<HTMLElement>(null);
  const [menuOpened, setMenuOpened] = useState(false);

  const openMenu = () => {
    if(navigationRef.current){
      navigationRef.current.classList.add('opened');
      setMenuOpened(true);
    }
  }
  const closeMenu = () => {
    if(navigationRef.current){
      navigationRef.current.classList.remove('opened');
      setMenuOpened(false);
    }
  }

  return (
    <>
      <nav className="top-navigation" ref={navigationRef}>
        <button className="menu-bg" title="close menu" onClick={closeMenu}></button>
        <ul className="flex items-center">
          <li><a href="/" className={activePage == "/product" ? "active" : ""}>Product</a></li>
          <li><a href="/download" className={activePage == "/download" ? "active" : ""}>Download</a></li>
          <li><a href="/pricing" className={activePage == "/pricing" ? "active" : ""}>Pricing</a></li>
        </ul>
      </nav>
      <button className="menu-button" title="open menu" onClick={menuOpened ? closeMenu: openMenu}>{menuOpened ? '🗙' : '='}</button>
    </>
  )
}

export default Navigation;
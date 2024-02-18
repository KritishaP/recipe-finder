import { NavLink } from 'react-router-dom'
import { MdFoodBank } from "react-icons/md"
import { IoMdMenu } from "react-icons/io"
import './Header.css'
import { useSidebarContext } from '../../context/sidebarContext'
import { useEffect, useState } from 'react'
const Navbar = () => {
  const { openSidebar } = useSidebarContext();
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 60) {
      setScrolled(true)

    }
    else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })
  return (<>
    <nav className={`navbar bg-orangish flex items-center ${scrolled ? 'scrolled' : ''}`}>
      <div className='container w-screen'>
        <div className='navbar-content text-whitish'>
          <div className='brand-and-toggler flex items-center justify-between'>
            <NavLink to={'/'} className={'navbar-brand font-light text-3xl flex items-center'}>
              <MdFoodBank />
              <span className='navbar-brand-text font-bold'>EasyCook</span>
            </NavLink>
            <div className='navbar-btns flex items-center'>
              <button type='button' className='navbar-show-btn text-whitish' onClick={() => openSidebar()}>
                <IoMdMenu size={27} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>)
}
export default Navbar
import '../../styles/Navbar.css'
import Logo from '../../img/logo.jpg'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="container">
            <div className="logo">
                <img src={Logo} alt="" className='logo' />
            </div>
            <div className="links">
                <Link to='/?cat=road' className='Link'>Опасные дороги</Link>
                <Link to='/?cat=road' className='Link'>Ремонт</Link>
                <Link to='/?cat=road' className='Link'>Строительство</Link>
                <Link to='/?cat=road' className='Link'>Коммунальные службы</Link>
                <Link to='/?cat=road' className='Link'>Опасные места</Link>
                <span>Андрей</span>
                <span>Выйти</span>
                <span className='writting'>
                    <Link className="zayvka" to='/write'>Подать заявку</Link>
                    </span>
            </div>
        </div>
    </div>
  )
}

export default Navbar
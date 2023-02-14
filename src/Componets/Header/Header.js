import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './Header.module.css';
import logo from '../../Assets/Images/logo.png';
import useMedia from '../../Hooks/UseMedia';

function Header() {
    const [mobileMenu, setMobileMenu] = React.useState(false);
    let mobile = useMedia('mobile');

    const { pathname } = useLocation();
    React.useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    if(mobile) return (
        <header className={styles.header}>
            <img src={logo} alt="Logo do Pokemon" className={`${mobileMenu && styles.center}`} />
            <button aria-label="Menu" className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`} onClick={() => setMobileMenu(!mobileMenu)}></button>
            { mobileMenu && 
                <nav className={`${styles.menu} ${mobile ? styles.mobile : ''}`}>
                    <ul>
                        <li>
                            <NavLink to="/">
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/pokedex">
                                Pokedex
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/legendarios">
                                Legendários
                            </NavLink>
                        </li>
                    </ul>
                </nav>}
        </header>)

    //Dormato do menu para tablet e desktop
    return ( 
        <header className={styles.header}>
            <img src={logo} alt="Logo do Pokemon"/>
            <nav className={styles.menu}>
                <ul>
                    <li>
                        <NavLink to="/">
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/pokedex">
                            Pokedex
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/legendarios">
                            Legendários
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
      )
}

export default Header

import React from 'react';
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

import LogoRick from '../../assets/image/logo-rick.png'


const Nav: React.FC = () => {
    return (
        <motion.nav
            className="nav-bar conteiner"
        >
            <div >
                <img src={LogoRick} alt="logo Rick" />
            </div>

            <div className="links">
                <Link to='/'>Home</Link>
                <Link to="/ram">Personagens</Link>
            </div>
        </motion.nav>
    )
}

export default Nav;
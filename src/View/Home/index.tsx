import React from "react";
import { motion } from 'framer-motion';

import Initial from '../../assets/image/rickandmorty.png'

const Home: React.FC = () => {
    return (
        <motion.div
            animate={{  rotate:360}}
            transition={{duration:2}}
            className="home conteiner">
            <div>
                <img src={Initial} alt="logo Rick" />
            </div>

            <p>Look Morty, look!</p>
        </motion.div>
    )
}

export default Home;
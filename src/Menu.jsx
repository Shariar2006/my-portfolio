/* eslint-disable react/prop-types */

import { Link } from 'react-scroll';
import { AnimatePresence, motion } from "framer-motion"
import { useState } from 'react';


const Menu = ({item}) => {
    const [isHover, setIsHover] = useState(false)

    return (
        
            <a href={item?.uri} key={item?.id} className="text-gray-300 p-1 rounded-full hover:text-gray-800 cursor-pointer hover:bg-[#FFF1B0] relative" 
          onMouseEnter={()=>setIsHover(true)}
          onMouseLeave={()=>setIsHover(false)}
          >
            <Link 
            
            activeClass="active"
            to={item?.id}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}

          >
            {item?.Icon}
            <AnimatePresence>
              {
                isHover && (<motion.div
                initial={{opacity: 0, x: -25}}
                animate={{opacity: 1, x: 0}}
                exit={{opacity: 0, x: -25}}
                   className="absolute bg-white rounded-md px-3 py-1 -right-10 -top-14 text-gray-800 font-semibold lg:-top-0 lg:right-16 after:absolute after:w-3 after:h-3 after:bg-white lg:after:top-[10px] 
              after:-bottom-1 after:right-5 lg:after:-right-[3px] after:rotate-45">
                  {item?.name}
                </motion.div>)
              }
            </AnimatePresence>
          </Link>
          </a>
        
    );
};

export default Menu;
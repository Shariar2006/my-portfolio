/* eslint-disable react/prop-types */
import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react";

const Social = ({ social }) => {
    const [isHover, setIsHover] = useState(false)

    return (
        <a href={social?.url} 
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        target="_blank" rel="noreferrer"
        >
            <motion.div
        
            className="w-12 h-12 bg-[#1D232A] border border-[#FFF1B0] rounded-full cursor-pointer relative"
        >
            
            <AnimatePresence>
                {
                    isHover && <motion.div
                    className={`absolute inset-1 blur-md bg-gradient-to-br from-[#f9ecb2] to-[#FFF1B0] -z-10`}
                    ></motion.div>
                }
                <div className="flex items-center justify-center pt-3 cursor-pointer text-[#FFF1B0]">
                    {social?.Icon}
                </div>
            </AnimatePresence>
        </motion.div>
        </a>
    );
};

export default Social;
import { motion } from 'framer-motion'

export function Navbar() {
    return (
        <div className="font-poppins max-w-[1280px] mx-auto rounded-md flex items-center justify-between py-4 px-3 bg-white/20 backdrop-blur-xl sticky top-2 mt-4 z-10">
            <h1>madeit</h1>
            <motion.button className="btn" animate={{ scale: 0.8 }}>Generate</motion.button>
        </div>
    )
}
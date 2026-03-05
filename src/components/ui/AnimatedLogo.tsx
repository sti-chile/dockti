// components/ui/AnimatedLogo.tsx
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const AnimatedLogo = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <motion.div
            className="flex items-center space-x-2 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
        >
            {/* Logo Image */}
            <div className="relative w-10 h-10 flex-shrink-0">
                <Image
                    src="/images/logo.png"
                    alt="DockTI Logo"
                    width={40}
                    height={40}
                    priority
                    className="object-contain"
                />
            </div>

            {/* Brand Name — always visible */}
            <div className="flex flex-col leading-tight">
                <span className="text-gray-900 dark:text-white font-bold text-lg tracking-tight">
                    DockTI
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-medium text-xs">
                    STI Chile
                </span>
            </div>
        </motion.div>
    );
};

export default AnimatedLogo;

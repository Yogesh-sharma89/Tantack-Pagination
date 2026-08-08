import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

const Loader = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#0F172A]">
            {/* Background Blur */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 120, 0],
                        y: [0, -80, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-10 top-20 h-72 w-72 rounded-full bg-violet-600/25 blur-[120px]"
                />

                <motion.div
                    animate={{
                        x: [0, -120, 0],
                        y: [0, 100, 0],
                        scale: [1, 1.15, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]"
                />
            </div>

            {/* Card */}
            <motion.div
                initial={{
                    opacity: 0,
                    y: 30,
                    scale: 0.9,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                }}
                transition={{
                    duration: 0.5,
                }}
                className="relative flex w-80 flex-col items-center rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
            >
                {/* Animated Ring */}
                <motion.div
                    animate={{
                        rotate: 360,
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="relative flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-violet-500/20 border-t-violet-500"
                >
                    {/* Logo */}
                    <motion.div
                        animate={{
                            scale: [1, 1.12, 1],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.8,
                        }}
                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 shadow-xl"
                    >
                        <Loader2 className="h-8 w-8 text-white" />
                    </motion.div>
                </motion.div>

                {/* Text */}
                <motion.h2
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-8 text-2xl font-bold text-white"
                >
                    Loading
                </motion.h2>

                <motion.p
                    animate={{
                        opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                    className="mt-2 text-center text-sm text-slate-400"
                >
                    Preparing your experience...
                </motion.p>

                {/* Dots */}
                <div className="mt-8 flex gap-2">
                    {[0, 1, 2].map((dot) => (
                        <motion.div
                            key={dot}
                            animate={{
                                y: [0, -8, 0],
                                opacity: [0.4, 1, 0.4],
                            }}
                            transition={{
                                duration: 0.8,
                                repeat: Infinity,
                                delay: dot * 0.2,
                            }}
                            className="h-3 w-3 rounded-full bg-violet-500"
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Loader;
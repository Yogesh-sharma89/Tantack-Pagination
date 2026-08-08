import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="relative overflow-hidden py-36">

            {/* Background Blur */}

            <div className="absolute inset-0">

                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -60, 0],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute left-0 top-20 h-80 w-80 rounded-full bg-violet-600/20 blur-[130px]"
                />

                <motion.div
                    animate={{
                        x: [0, -120, 0],
                        y: [0, 80, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-cyan-500/20 blur-[160px]"
                />

            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: .7,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mx-auto max-w-4xl text-center"
                >

                    <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
                        🍔 About Our Platform
                    </span>

                    <h1 className="mt-8 bg-linear-to-r from-white via-slate-200 to-violet-300 bg-clip-text text-6xl font-black leading-tight text-transparent">
                        Delivering More Than Food.
                        <br />
                        Delivering Experiences.
                    </h1>

                    <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-400">
                        We connect hungry customers with amazing local restaurants
                        through a fast, secure, and delightful food ordering
                        experience designed for everyone.
                    </p>

                    <div className="mt-12 flex justify-center gap-5">

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: .95,
                            }}
                            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 px-8 py-4 font-semibold text-white shadow-xl shadow-violet-600/20"
                        >
                            Explore Shops

                            <ArrowRight size={18} />
                        </motion.button>

                        <motion.button
                            whileHover={{
                                scale: 1.05,
                            }}
                            whileTap={{
                                scale: .95,
                            }}
                            className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-xl"
                        >
                            Learn More
                        </motion.button>

                    </div>

                </motion.div>

            </div>

        </section>
    );
};

export default HeroSection;
import { motion } from "framer-motion";
import { Home, ArrowLeft, SearchX } from "lucide-react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F172A] px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 top-10 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[160px]"
        />
      </div>

      {/* Floating Particles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.2,
          }}
          className="absolute h-2 w-2 rounded-full bg-violet-400"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full max-w-xl rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl"
      >
        {/* Icon */}
        <motion.div
          animate={{
            y: [0, -12, 0],
            rotate: [-5, 5, -5],
          }}
          transition={{
            repeat: Infinity,
            duration: 3,
          }}
          className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-linear-to-r from-violet-600 to-indigo-600 shadow-xl"
        >
          <SearchX className="h-12 w-12 text-white" />
        </motion.div>

        {/* 404 */}
        <motion.h1
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
          }}
          className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-8xl font-black text-transparent"
        >
          404
        </motion.h1>

        <h2 className="mt-4 text-3xl font-bold text-white">
          Page Not Found
        </h2>

        <p className="mt-4 text-slate-400">
          The page you're looking for doesn't exist, has been moved,
          or the URL might be incorrect.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => window.history.back()}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 py-4 text-white transition hover:bg-white/10"
          >
            <ArrowLeft size={18} />
            Go Back
          </motion.button>

          <Link className="flex-1" to="/">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 py-4 font-semibold text-white shadow-lg shadow-violet-500/20"
            >
              <Home size={18} />
              Go Home
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
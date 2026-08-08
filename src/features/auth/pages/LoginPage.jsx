import { motion } from "framer-motion";
import { Eye, Lock, User, ArrowRight, EyeOffIcon } from "lucide-react";
import useAuthForm from "../hooks/useAuthForm";
import { useState } from "react";


const LoginPage = () => {

  const { handleSubmit, register, errors, onSubmit } = useAuthForm();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0F172A] px-4">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 10,
            ease: "easeInOut",
          }}
          className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-violet-600/20 blur-[120px]"
        />

        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 80, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[150px]"
        />
      </div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_20px_80px_rgba(0,0,0,.45)] backdrop-blur-2xl"
      >
        {/* Logo */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 0.2,
            type: "spring",
          }}
          className="mx-auto mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600 shadow-lg"
        >
          <Lock className="h-8 w-8 text-white" />
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="mb-8 text-center"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            Welcome Back
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-400">
            Sign in to continue to your dashboard.
          </p>
        </motion.div>


        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Username */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-5"
          >
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Username
            </label>

            <div className="group flex h-14 items-center rounded-xl border border-white/10 bg-white/5 px-4 transition-all duration-300 hover:border-violet-500/60 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20">
              <User className="mr-3 h-5 w-5 text-slate-400 transition-colors group-focus-within:text-violet-400" />

              <input
                type="text"
                {...register("username", {
                  required: "Username is required",
                  minLength: {
                    value: 3,
                    message: "Minimum 3 characters",
                  }
                })}
                placeholder="Enter your username"
                className="w-full bg-transparent text-white placeholder:text-slate-500 outline-none"
              />


            </div>
            {
              errors.username &&
              <p className="my-1 relative text-red-500 font-medium text-sm">{errors.username.message}</p>
            }
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
            className="mb-4"
          >
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Password
            </label>

            <div className="group flex h-14 items-center rounded-xl border border-white/10 bg-white/5 px-4 transition-all duration-300 hover:border-violet-500/60 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20">
              <Lock className="mr-3 h-5 w-5 text-slate-400 transition-colors group-focus-within:text-violet-400" />

              <input
                type={showPassword ? 'text':"password"}
                {...register("password", {
                  required: "password is required",
                  minLength: {
                    value: 8,
                    message: "Minimum 8 characters",
                  }
                })}
                placeholder="Enter your password"
                className="w-full bg-transparent text-white placeholder:text-slate-500 outline-none"
              />

              

              <button
                type="button"
                onClick={() => setShowPassword(prev => !prev)}
                className="text-slate-400 cursor-pointer transition hover:text-white"
              >
                {showPassword ?
                  <Eye size={20} />
                  :
                  <EyeOffIcon size={20} />

                }
              </button>
             
            </div>
             {
                errors.password &&
                <p className="my-1 text-red-500 font-medium text-sm">{errors.password.message}</p>
              }
          </motion.div>

          {/* Remember + Forgot */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55 }}
            className="mb-8 flex items-center justify-between"
          >
            <label className="flex cursor-pointer items-center gap-2 text-sm text-slate-400">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-slate-500 bg-transparent accent-violet-600"
              />
              Remember me
            </label>

            <button className="text-sm cursor-pointer font-medium text-violet-400 transition hover:text-violet-300">
              Forgot Password?
            </button>
          </motion.div>

          {/* Login Button */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group cursor-pointer flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-violet-500/40"
          >
            Sign In

            <ArrowRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </motion.button>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <div className="h-px flex-1 bg-white/10" />

            <span className="px-4 text-xs uppercase tracking-wider text-slate-500">
              OR
            </span>

            <div className="h-px flex-1 bg-white/10" />
          </div>

          {/* Google */}
          <motion.button
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex cursor-pointer h-14 w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/5 font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt=""
              className="h-5 w-5"
            />

            Continue with Google
          </motion.button>

        </form>



        {/* Footer */}
        <p className="mt-8 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <button className="font-semibold text-violet-400 transition hover:text-violet-300">
            Create Account
          </button>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
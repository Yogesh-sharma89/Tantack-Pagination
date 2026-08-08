import { motion } from "framer-motion";
import { ShoppingCart, LogOut, ShoppingBag } from "lucide-react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router";
import { logout } from "../../features/auth/slice/auth.slice";

const Navbar = () => {

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "About",
      href: "/about",
    },
  ];

  const dispatch = useDispatch();

  const handleLogout = ()=>{
    dispatch(logout());
  }

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="fixed left-0 right-0 top-5 z-50 flex justify-center px-5"
    >
      <nav className="flex w-full max-w-7xl items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-8 py-4 shadow-2xl backdrop-blur-2xl">

        {/* Logo */}

        <Link to="/">
          <motion.div
            whileHover={{
              scale: 1.05,
            }}
            className="flex items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 shadow-lg">
              <ShoppingBag className="text-white" size={24} />
            </div>

            <div>
              <h1 className="bg-linear-to-r from-violet-400 to-cyan-400 bg-clip-text text-2xl font-black text-transparent">
                ShopVerse
              </h1>

              <p className="-mt-1 text-xs tracking-widest text-slate-400">
                PREMIUM STORE
              </p>
            </div>
          </motion.div>
        </Link>

        {/* Links */}

        <div className="hidden items-center gap-5 md:flex">
          {links.map((link) => (
            <motion.div
              whileHover={{
                y: -2,
              }}
              key={link.name}
              className="relative"
            >
              <NavLink
                to={link.href}
                className={({isActive})=>
                 isActive ? "rounded-xl px-5 py-3 text-sm font-medium  transition bg-white/5 text-white":"text-slate-300 hover:text-white text-sm font-medium transition"
                }
              >
                {link.name}
              </NavLink>

              <motion.div
                layoutId="navbar-indicator"
                className="absolute -bottom-1 left-5 right-5 h-0.5 rounded-full bg-linear-to-r from-violet-500 to-cyan-400"
              />
            </motion.div>
          ))}
        </div>

        {/* Right */}

        <div className="flex items-center gap-4">

          {/* Cart */}

          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="relative cursor-pointer flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-violet-500 hover:text-white"
          >
            <ShoppingCart size={20} />

            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-violet-600 text-[10px] font-bold text-white">
              2
            </span>
          </motion.button>

          {/* Logout */}

          <motion.button
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.96,
            }}
            className="flex cursor-pointer items-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 px-6 py-3 font-medium text-white shadow-lg shadow-violet-500/30"
            onClick={handleLogout}
          >
            <LogOut size={18} />

            Logout
          </motion.button>

        </div>
      </nav>
    </motion.header>
  );
};

export default Navbar;
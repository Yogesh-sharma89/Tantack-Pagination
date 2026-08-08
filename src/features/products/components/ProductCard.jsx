import { motion } from "framer-motion";
import {
  Heart,
  ShoppingCart,
  Eye,
  Star,
} from "lucide-react";
import { useProducts } from "../hooks/useProducts";

const ProductCard = ({ product }) => {

  const {isPlaceholderData} = useProducts();
    
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{
        duration: 0.25,
      }}
      className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
    >
      {/* Image */}

      <div style={{opacity:isPlaceholderData ? 0.3 : 1}} className="relative overflow-hidden bg-linear-to-b from-slate-900 to-slate-800">

        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-72 w-full object-contain p-8 transition duration-500 group-hover:scale-110"
        />

        {/* Wishlist */}

        <button className="absolute cursor-pointer right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-lg transition hover:bg-violet-600">
          <Heart size={18} />
        </button>

        {/* Discount */}

        <span className="absolute left-4 top-4 rounded-full bg-violet-600 px-3 py-1 text-xs font-semibold text-white">
          -{Math.round(product.discountPercentage)}%
        </span>
      </div>

      {/* Content */}

      <div className="space-y-4 p-6">

        {/* Brand */}

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-300">
            {product.brand}
          </span>

          <div className="flex items-center gap-1 text-yellow-400">
            <Star
              size={16}
              fill="currentColor"
            />

            <span className="text-sm text-white">
              {product.rating}
            </span>
          </div>

        </div>

        {/* Title */}

        <h2 className="line-clamp-2 text-xl font-bold text-white">
          {product.title}
        </h2>

        {/* Description */}

        <p className="line-clamp-2 text-sm leading-6 text-slate-400">
          {product.description}
        </p>

        {/* Stock */}

        <div className="flex items-center justify-between">

          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            {product.stock} In Stock
          </span>

          <span className="text-sm text-slate-500">
            {product.category}
          </span>

        </div>

        {/* Price */}

        <div className="flex items-end justify-between">

          <div>

            <h3 className="text-3xl font-black text-white">
              ${product.price}
            </h3>

            <p className="text-sm text-slate-500 line-through">
              $
              {(
                product.price /
                (1 - product.discountPercentage / 100)
              ).toFixed(2)}
            </p>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <motion.button
            whileTap={{
              scale: 0.96,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="flex cursor-pointer flex-1 items-center justify-center gap-2 rounded-xl bg-linear-to-r from-violet-600 to-indigo-600 py-3 font-semibold text-white shadow-lg shadow-violet-600/20"
          >
            <ShoppingCart size={18} />
            Add
          </motion.button>

          <motion.button
            whileTap={{
              scale: 0.96,
            }}
            whileHover={{
              scale: 1.02,
            }}
            className="flex cursor-pointer items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 text-white hover:bg-white/10"
          >
            <Eye size={18} />
          </motion.button>

        </div>

      </div>
    </motion.div>
  );
};

export default ProductCard;
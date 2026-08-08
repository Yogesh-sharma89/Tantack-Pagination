import { motion } from "framer-motion";

export const shimmer = {
  initial: {
    backgroundPosition: "-400px 0",
  },
  animate: {
    backgroundPosition: "400px 0",
  },
  transition: {
    repeat: Infinity,
    duration: 1.4,
    ease: "linear",
  },
};

export const Skeleton = ({ className }) => (
  <motion.div
    variants={shimmer}
    initial="initial"
    animate="animate"
    className={`
      rounded-xl
      bg-size-[800px_100%]
      bg-linear-to-r
      from-white/3
      via-white/8
      to-white/3
      ${className}
    `}
  />
);

const ProductCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

      {/* Image */}

      <div className="relative">

        <Skeleton className="h-72 w-full" />

        <Skeleton className="absolute left-4 top-4 h-7 w-16 rounded-full" />

        <Skeleton className="absolute right-4 top-4 h-10 w-10 rounded-full" />

      </div>

      {/* Content */}

      <div className="space-y-5 p-6">

        {/* Brand + Rating */}

        <div className="flex items-center justify-between">

          <Skeleton className="h-7 w-20 rounded-full" />

          <Skeleton className="h-5 w-14 rounded-lg" />

        </div>

        {/* Title */}

        <Skeleton className="h-7 w-5/6" />

        <Skeleton className="h-7 w-3/5" />

        {/* Description */}

        <Skeleton className="h-4 w-full" />

        <Skeleton className="h-4 w-4/5" />

        {/* Stock */}

        <div className="flex justify-between">

          <Skeleton className="h-6 w-24 rounded-full" />

          <Skeleton className="h-5 w-20" />

        </div>

        {/* Price */}

        <div className="space-y-2">

          <Skeleton className="h-9 w-28" />

          <Skeleton className="h-4 w-20" />

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          <Skeleton className="h-12 flex-1 rounded-xl" />

          <Skeleton className="h-12 w-12 rounded-xl" />

        </div>

      </div>

    </div>
  );
};

export default ProductCardSkeleton;
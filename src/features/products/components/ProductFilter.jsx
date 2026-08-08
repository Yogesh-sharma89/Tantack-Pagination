import { motion } from "framer-motion";
import { Search, Package2, ChevronDown } from "lucide-react";
import { useCategories } from "../hooks/useProducts";
import { Skeleton } from "./ProductCardSkeleton";

const ProductFilters = ({
  search,
  setSearch,
  category,
  setCategory,
}) => {

  const {data:categories,isLoading,error} = useCategories();



  return (
    <motion.div
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between"
    >
      {/* Left */}

      <div>
        <h2 className="text-4xl font-black text-white">
          Products
        </h2>

        <p className="mt-2 text-slate-400">
          Discover premium products from our collection.
        </p>
      </div>

      {/* Right */}

      <div className="flex flex-col gap-4 sm:flex-row">

        {/* Search */}

        <div className="group flex h-14 w-full items-center rounded-2xl border border-white/10 bg-white/5 px-5 backdrop-blur-xl transition-all duration-300 hover:border-violet-500/40 focus-within:border-violet-500 focus-within:ring-2 focus-within:ring-violet-500/20 sm:w-80">

          <Search
            size={20}
            className="text-slate-400 transition group-focus-within:text-violet-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="ml-3 w-full bg-transparent text-white placeholder:text-slate-500 outline-none"
          />

        </div>

        {/* Category */}

      {isLoading ? 
       <Skeleton className={"w-20 h-10 rounded-lg"}/>
       :
      <div className="group relative">

          <Package2
            size={18}
            className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-violet-400"
          />

          <ChevronDown
            size={18}
            className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-14 cursor-pointer scrollbar-none w-full appearance-none rounded-2xl border border-white/10 bg-white/5 pl-14 pr-12 text-white backdrop-blur-xl outline-none transition hover:border-violet-500/40 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 sm:w-64"
          >
            <option
              value=""
              className="bg-slate-900"
            >
              All Categories
            </option>

            {categories?.map((item) => (
              <option
                key={item.slug}
                value={item.slug}
                className="bg-slate-900"
              >
                {item.name}
              </option>
            ))}
          </select>

        </div>}

      </div>
    </motion.div>
  );
};

export default ProductFilters;
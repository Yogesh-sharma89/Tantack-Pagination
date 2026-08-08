import { motion } from "framer-motion";
import { Store, UtensilsCrossed, Rocket } from "lucide-react";

const StorySection = () => {
  return (
    <section className="relative py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-300">
            OUR STORY
          </span>

          <h2 className="mt-6 text-5xl font-black leading-tight text-white">
            Empowering Local Restaurants
            <br />
            Through Technology.
          </h2>

          <p className="mt-8 text-lg leading-8 text-slate-400">
            Our journey started with one simple observation:
            ordering food should feel effortless.

            Instead of navigating dozens of apps,
            customers deserve one premium platform where discovering
            restaurants, placing orders, and tracking deliveries
            feels smooth and enjoyable.
          </p>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            We're helping local businesses grow while delivering
            exceptional experiences for every customer.
          </p>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl"
        >

          <div className="space-y-6">

            <div className="flex items-center gap-5 rounded-2xl bg-white/5 p-5">

              <div className="rounded-xl bg-violet-600 p-4">
                <Store className="text-white"/>
              </div>

              <div>
                <h3 className="font-bold text-white">
                  500+ Restaurants
                </h3>

                <p className="text-slate-400">
                  Verified local businesses.
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 rounded-2xl bg-white/5 p-5">

              <div className="rounded-xl bg-cyan-600 p-4">
                <UtensilsCrossed className="text-white"/>
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Fresh Meals Everyday
                </h3>

                <p className="text-slate-400">
                  Quality food from trusted partners.
                </p>
              </div>

            </div>

            <div className="flex items-center gap-5 rounded-2xl bg-white/5 p-5">

              <div className="rounded-xl bg-indigo-600 p-4">
                <Rocket className="text-white"/>
              </div>

              <div>
                <h3 className="font-bold text-white">
                  Lightning Fast Delivery
                </h3>

                <p className="text-slate-400">
                  Optimized ordering & delivery system.
                </p>
              </div>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default StorySection;
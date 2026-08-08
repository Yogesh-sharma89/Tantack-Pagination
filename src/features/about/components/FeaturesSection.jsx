import { ShieldCheck, Clock3, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock3,
    title: "Fast Delivery",
    description:
      "Optimized logistics ensure your food reaches you quickly while staying fresh.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Payments",
    description:
      "Industry-standard encryption keeps every payment safe and protected.",
  },
  {
    icon: HeartHandshake,
    title: "Trusted Restaurants",
    description:
      "Every restaurant is carefully verified before joining our platform.",
  },
];

const FeatureSection = () => {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity:0,y:40 }}
          whileInView={{ opacity:1,y:0 }}
          transition={{ duration:.7 }}
          viewport={{ once:true }}
          className="text-center"
        >

          <span className="text-violet-400 font-semibold">
            WHY CHOOSE US
          </span>

          <h2 className="mt-5 text-5xl font-black text-white">
            Built Around Your Experience
          </h2>

        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {features.map((feature,index)=>{

            const Icon = feature.icon;

            return(

              <motion.div

                key={feature.title}

                initial={{opacity:0,y:40}}

                whileInView={{opacity:1,y:0}}

                transition={{
                  delay:index*.2
                }}

                viewport={{once:true}}

                whileHover={{
                  y:-10
                }}

                className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"

              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-r from-violet-600 to-indigo-600">

                  <Icon className="text-white"/>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">

                  {feature.title}

                </h3>

                <p className="mt-5 leading-8 text-slate-400">

                  {feature.description}

                </p>

              </motion.div>

            )

          })}

        </div>

      </div>

    </section>
  )
}

export default FeatureSection;
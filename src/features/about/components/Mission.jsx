import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="relative py-32">

      <div className="mx-auto max-w-5xl px-6">

        <motion.div

          initial={{opacity:0,scale:.9}}

          whileInView={{opacity:1,scale:1}}

          viewport={{once:true}}

          className="rounded-[40px] border border-white/10 bg-white/5 p-14 text-center backdrop-blur-2xl"

        >

          <span className="font-semibold text-violet-400">
            OUR MISSION
          </span>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white">

            Making Food Ordering
            <br />
            Effortless For Everyone.

          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-slate-400">

            We believe technology should simplify everyday life.
            Our mission is to build an intelligent food ordering
            ecosystem that empowers restaurants, delights customers,
            and creates meaningful connections within local communities.

          </p>

        </motion.div>

      </div>

    </section>
  );
};

export default MissionSection;
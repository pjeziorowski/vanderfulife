import type { MetaFunction } from "@remix-run/cloudflare";
import type { MotionValue } from "framer-motion";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "vanderfulife",
  description: "Living our wonderful lives in a van",
  viewport: "width=device-width,initial-scale=1",
});

export default function Index() {
  // for the scrolling progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main>
      {/* each site section should have it's place on the landing page */}
      {[1, 2, 3, 4, 5].map((item, idx) => (
        <Section key={idx} item={item} />
      ))}

      {/* scrollig progress bar */}
      <motion.div
        className="fixed left-0 right-0 h-1 bg-black bottom-2"
        style={{ scaleX }}
      />
    </main>
  );
}

// for the floating text on the section images
function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Section({ item }: { item: number }) {
  const ref = useRef(null);

  // for the floating text on the section images
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section
      // TODO - check what this does
      style={{ perspective: 500 }}
      className="h-screen flex justify-center items-center relative snap-center">
      <div
        // TODO - check image sizes
        className="w-3/5 h-4/5 relative max-h-90vh m-20 bg-white overflow-hidden"
        ref={ref}
      >
        <img
          className="absolute inset-0 w-full h-ful"
          // TODO - update image src
          src="https://i9gwuc.csb.app/1.jpg"
          alt=""
        />
      </div>

      {/* Floating text */}
      <motion.h2
        className="m-0 text-black left-1/2 translate-x-130 text-[56px] font-bold tracking-wider leading-tight absolute"
        style={{ y }}
      >{`#00${item}`}</motion.h2>
    </section>
  );
}

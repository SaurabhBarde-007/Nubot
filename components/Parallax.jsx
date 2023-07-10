import { motion, useTransform, useViewportScroll } from "framer-motion";

const Parallax = ({ children }) => {
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <>
      {" "}
      <motion.div
        style={{
          y: yRange,
          background: "linear-gradient(to bottom, #000000, #ffffff)",
        }}
        className="h-[40vh] lg:h-[80vh]"
      >
        {children}
      </motion.div>
    </>
  );
};

export default Parallax;

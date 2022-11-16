import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { Link } from "react-scroll";

function Card() {
  const { ref, inView } = useInView({
    threshold: 0.3,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    } else {
      animation.start({ x: "-50px", opacity: 0 });
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className="flex flex-col xl:flex-row space-y-4 xl:space-x-[80px] xl:space-y-0 justify-start items-start xl:justify-center xl:items-center"
    >
      <motion.div
        animate={animation}
        className="md:h-[340px] md:w-[480px] sm:h-[255px] sm:w-[360px] h-[238px] w-[336px] bg-[url(../public/assets/barcatering.png)] bg-cover bg-no-repeat bg-right-top "
      ></motion.div>
      <div className="xl:w-[2px] xl:h-[320px] h-[2px] w-[280px] bg-darkbeige rounded-full mt-8 xl:mt-0"></div>
      <div className="flex flex-col xl:h-[340px] md:w-[480px] sm:w-[360px] h-[280px] w-[336px] text-black tracking-wide text-start justify-end pb-2">
        <h2 className="text-2xl md:text-3xl tracking-wider font-extrabold uppercase">
          Bar Catering
        </h2>
        <p className="text-m md:text-l tracking-wide font-semibold max-w-[360px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <div className="h-[60px] w-[150px] mt-8">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button
              type="button"
              className="text-black border-2 border-darkbeige hover:bg-darkbeige hover:text-[#ffffff] focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold text-m px-5 py-2.5 text-center ease-in duration-150 h-full w-full uppercase"
            >
              Contact
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;

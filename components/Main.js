import { Link } from "react-scroll";
import { useEffect, useState } from "react";

function Main() {
  // useEffect(() => {
  //   const bgmove = getComputedStyle(document.documentElement).getPropertyValue(
  //     "--bg-move"
  //   );
  //   function setbg() {
  //     const bgnew = "left " + window.scrollY + "px";

  //     document.documentElement.style.setProperty("--bg-move", bgnew);

  //     console.log(bgnew);
  //   }
  //   window.addEventListener("scroll", setbg);
  // }, []);

  return (
    <div id="home" className="w-full h-screen herobgfixed z-10 relative">
      <div className="absolute left:0 top:0 w-full h-screen bg-black/[0.4]"></div>
      <div className="max-w-[1240px] w-full h-full mx-auto p-4 relative">
        <div className="flex flex-col space-y-8 absolute top-[360px] max-w-[700px] text-start w-[50%]">
          <div className="">
            <h3 className="text-cwhite tracking-wider text-2xl md:text-3xl font-semibold uppercase animate-[heroanimation_.75s_.4s_forwards]">
              ivre
            </h3>
            <h2 className="mb-[20px] text-cwhite tracking-wide text-3xl md:text-5xl font-semibold animate-[heroanimation_1.2s_.55s_forwards]">
              On ne peut s&#39;aimer que si l&#39;on est ivre
            </h2>
          </div>
          <div className="md:h-[80px] md:w-[200px] h-[70px] w-[150px] mr-2 mb-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button
                type="button"
                className="text-cwhite border-2 border-darkbeige hover:bg-darkbeige focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold text-m md:text-lg px-5 py-2.5 text-center mr-2 mb-2 ease-in duration-150 h-full w-full uppercase z-10"
              >
                About us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

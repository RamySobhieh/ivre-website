import Slider from "../components/Slider.js";
import Navbar from "../components/Navbar2.js";

function bottles() {
  const slidesbottles = [
    { url: "https://ivrelb.com/assets/toters.jpg", title: "bottles 1" },
    { url: "https://ivrelb.com/assets/bottles2.JPG", title: "bottles 2" },
    { url: "https://ivrelb.com/assets/bottles3.JPG", title: "bottles 3" },
    { url: "https://ivrelb.com/assets/bottles5.jpeg", title: "bottles 5" },
  ];

  const slidesdispenser = [
    { url: "https://ivrelb.com/assets/dispenser1.JPG", title: "Dispenser 1" },
    { url: "https://ivrelb.com/assets/dispenser2.JPG", title: "Dispenser 2" },
    { url: "https://ivrelb.com/assets/dispenser1.JPG", title: "Dispenser 3" },
    { url: "https://ivrelb.com/assets/dispenser4.JPG", title: "Dispenser4" },
  ];

  return (
    <div className="font-roman">
      <Navbar />
      <div className="flex bg-cwhite  min-h-screen min-w-screen font-roman justify-center">
        <div className="flex flex-col">
          <div className="bg-black pt-[100px] w-full p-8 lg:p-24 h-full">
            <h1 className="uppercase font-extrabold text-beige tracking-widest text-5xl mb-4">
              Ivre Cocktails
            </h1>
          </div>
          <div className="flex flex-col space-y-[150px] p-8 lg:p-24 ">
            <div
              id="wedding"
              className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start 2xl:pl-40 2xl:pr-40"
            >
              <div className="flex flex-col space-y-4 text-start lg:h-full lg:w-[50%] w-full items-center">
                <div className="flex flex-col mb-10 lg:mb-0">
                  <h2 className="uppercase font-bold text-darkbeige tracking-wide text-start lg:text-start text-3xl">
                    Ready-to-go bottles
                  </h2>
                  <p className="text-black text-m font-semibold mb-10 lg:mb-20 text-start lg:text-start">
                    Our cocktails are made with premium ingredients for a
                    perfect balance of flavors. We offer a wide variety, from
                    classics to unique creations. Each is presented in a stylish
                    bottle, perfect for at-home enjoyment or gifting. Order now
                    and taste the excellence of a high-end bar in the comfort of
                    your own home.
                  </p>
                  <div className="h-[60px] w-[200px]">
                    <a href="https://link.totersapp.com/gjr3">
                      <button
                        type="button"
                        className=" text-black border-2 border-darkbeige hover:bg-darkbeige hover:text-[#ffffff] focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold text-m px-5 py-2.5 text-center ease-in duration-150 h-full w-full uppercase"
                      >
                        Order Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-[450px] lg:h-[500px] h-[350px] md:h-[450px]  w-full">
                <Slider slides={slidesbottles} />
              </div>
            </div>

            <div
              id="private"
              className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start 2xl:pl-40 2xl:pr-40"
            >
              <div className="flex flex-col space-y-4 text-start lg:h-full lg:w-[50%] w-full items-center">
                <div className="flex flex-col mb-10 lg:mb-0">
                  <h2 className="uppercase font-bold text-darkbeige tracking-wide text-start lg:text-start text-3xl">
                    Dispensers
                  </h2>
                  <p className="text-black text-m font-semibold mb-10 lg:mb-20 text-start lg:text-start">
                    Introducing our alcohol dispensers, perfect for hosting
                    parties or enjoying a drink at home. Simply fill with your
                    desired alcohol and let the dispenser do the rest. It
                    dispenses your cocktail with ease and accuracy. Stylish
                    designs, great addition to any home bar or party setup.
                    Experience the convenience and elegance of our alcohol
                    dispensers today.
                  </p>
                  <div className="h-[60px] w-[200px]">
                    <a href="https://api.whatsapp.com/send?phone=96171699860">
                      <button
                        type="button"
                        className=" text-black border-2 border-darkbeige hover:bg-darkbeige hover:text-[#ffffff] focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold text-m px-5 py-2.5 text-center ease-in duration-150 h-full w-full uppercase"
                      >
                        Order Now
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-[450px] lg:h-[500px] h-[350px] md:h-[450px]  w-full">
                <Slider slides={slidesdispenser} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default bottles;

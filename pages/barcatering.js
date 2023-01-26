import Slider from "../components/Slider.js";
import Navbar from "../components/Navbar2.js";

function barcatering() {
  const slideswedding = [
    { url: "https://ivrelb.com/assets/wedding1.jpg", title: "wedding 1" },
    { url: "https://ivrelb.com/assets/wedding2.jpg", title: "wedding 2" },
    { url: "https://ivrelb.com/assets/wedding3.jpg", title: "wedding 3" },
    { url: "https://ivrelb.com/assets/wedding5.JPG", title: "wedding 5" },
  ];

  const slidesprivate = [
    { url: "https://ivrelb.com/assets/private1.jpg", title: "private 1" },
    { url: "https://ivrelb.com/assets/private2.jpg", title: "private 2" },
    { url: "https://ivrelb.com/assets/private1.jpeg", title: "private 3" },
    { url: "https://ivrelb.com/assets/private4.jpg", title: "private 4" },
  ];

  const slidescorporate = [
    {
      url: "https://ivrelb.com/assets/corporate1.jpg",
      title: "corporate 1",
    },
    {
      url: "https://ivrelb.com/assets/corporate2.jpeg",
      title: "corporate 2",
    },
    {
      url: "https://ivrelb.com/assets/corporate3.jpeg",
      title: "corporate 3",
    },
    {
      url: "https://ivrelb.com/assets/corporate4.jpg",
      title: "corporate 4",
    },
  ];

  return (
    <div className="font-roman">
      <Navbar />
      <div className="flex bg-cwhite  min-h-screen min-w-screen font-roman justify-center">
        <div className="flex flex-col">
          <div className="bg-black pt-[100px] w-full p-8 lg:p-24 h-full">
            <h1 className="uppercase font-extrabold text-beige tracking-widest text-5xl mb-4">
              Our Bar-Catering Services
            </h1>
            <p className="text-white max-w-[500px] mb-20">
              These images showcase some of the events we have had the pleasure
              of serving, as well as the delicious drinks and impeccable service
              that we are known for.
            </p>
          </div>
          <div className="flex flex-col space-y-[150px] p-8 lg:p-24 ">
            <div
              id="wedding"
              className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start 2xl:pl-40 2xl:pr-40"
            >
              <div className="flex flex-col space-y-4 text-start lg:h-full lg:w-[50%] w-full items-center">
                <div className="flex flex-col mb-10 lg:mb-0">
                  <h2 className="uppercase font-bold text-darkbeige tracking-wide text-start lg:text-start text-3xl">
                    Wedding
                  </h2>
                  <p className="text-black text-m font-semibold mb-10 lg:mb-20 text-start lg:text-start">
                    Congratulations on your true love and best wishes! Your
                    wedding is more than a long-awaited day, it is a beautiful
                    beginning of a lifetime of happiness. We are raising the bar
                    for wedding drink services. Our experienced, attentive team
                    of tapsters are here to make your reception go as smoothly
                    as a top-shelf whiskey. We guarantee happy guests, so all
                    you have to do is drink it all in. Style. Reliability. Ease.
                  </p>
                  <div className="h-[60px] w-[200px]">
                    <a href="https://api.whatsapp.com/send?phone=96171699860">
                      <button
                        type="button"
                        className=" text-black border-2 border-darkbeige hover:bg-darkbeige hover:text-[#ffffff] focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold text-m px-5 py-2.5 text-center ease-in duration-150 h-full w-full uppercase"
                      >
                        GET QUOTATION
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-[450px] lg:h-[500px] h-[350px] md:h-[450px]  w-full border-2 border-double border-darkbeige">
                <Slider slides={slideswedding} />
              </div>
            </div>

            <div
              id="private"
              className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start 2xl:pl-40 2xl:pr-40"
            >
              <div className="flex flex-col space-y-4 text-start lg:h-full lg:w-[50%] w-full items-center">
                <div className="flex flex-col mb-10 lg:mb-0">
                  <h2 className="uppercase font-bold text-darkbeige tracking-wide text-start lg:text-start text-3xl">
                    Private Parties
                  </h2>
                  <p className="text-black text-m font-semibold mb-10 lg:mb-20 text-start lg:text-start">
                    In this busy world of ours we have to cherish and joyously
                    share special occasions with our family and friends. Ivre
                    Bar Catering is there for your every special occasion,
                    whether it is a birthday party, engagement party,
                    bachelor/bachelorette party, graduation, or celebration of
                    any kind. We will ensure your celebration becomes a
                    memorable moment that is more sentimental, and the mood will
                    become joyful beyond your expectations. We look forward to
                    the opportunity to serve you!
                  </p>
                  <div className="h-[60px] w-[200px]">
                    <a href="https://api.whatsapp.com/send?phone=96171699860">
                      <button
                        type="button"
                        className=" text-black border-2 border-darkbeige hover:bg-darkbeige hover:text-[#ffffff] focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold text-m px-5 py-2.5 text-center ease-in duration-150 h-full w-full uppercase"
                      >
                        GET QUOTATION
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-[450px] lg:h-[500px] h-[350px] md:h-[450px]  w-full border-2 border-double border-darkbeige">
                <Slider slides={slidesprivate} />
              </div>
            </div>

            <div
              id="corporate"
              className="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start 2xl:pl-40 2xl:pr-40"
            >
              <div className="flex flex-col space-y-4 text-start lg:h-full lg:w-[50%] w-full items-center">
                <div className="flex flex-col mb-10 lg:mb-0">
                  <h2 className="uppercase font-bold text-darkbeige tracking-wide text-start lg:text-start text-3xl">
                    Corporate Events
                  </h2>
                  <p className="text-black text-m font-semibold mb-10 lg:mb-20 text-start lg:text-start">
                    Your company&apos;s productivity and success are extremely
                    dependent on the performance and relationship of your loyal
                    and knowledgeable employees. It is very important to build a
                    solid relationship with your clients and maintaining a
                    strong relationship with your employees. Corporate events
                    will show your appreciation, improve relationship, and
                    ensure loyalty on both sides. Ivre Bar Catering will help
                    you on such an occasion. Open Bar Catering will provide a
                    superior service and will go above and beyond to ensure your
                    event is one to remember. We have provided bar services for
                    all types of corporate functions and non-profit fundraisers
                    and we would love the opportunity to showcase our skills at
                    your next function that calls for bar service!
                  </p>
                  <div className="h-[60px] w-[200px]">
                    <a href="https://api.whatsapp.com/send?phone=96171699860">
                      <button
                        type="button"
                        className=" text-black border-2 border-darkbeige hover:bg-darkbeige hover:text-[#ffffff] focus:ring-4 focus:outline-none focus:ring-purple-300 font-semibold text-m px-5 py-2.5 text-center ease-in duration-150 h-full w-full uppercase"
                      >
                        GET QUOTATION
                      </button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="lg:w-[450px] lg:h-[500px] h-[350px] md:h-[450px]  w-full border-2 border-double border-darkbeige">
                <Slider slides={slidescorporate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default barcatering;

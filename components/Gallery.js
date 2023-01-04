import { useEffect, useState } from "react";

function Gallery() {
  const size = useWindowSize();

  useEffect(() => {
    const svideos = document.querySelectorAll("#svideo");

    if (size.width <= 640) {
      svideos.forEach((svideo) => {
        // We can only control playback without insteraction if video is mute
        svideo.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = svideo.play();
        if (playPromise !== undefined) {
          playPromise.then((_) => {
            let observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.intersectionRatio !== 1 && !svideo.paused) {
                    svideo.pause();
                  } else if (svideo.paused) {
                    svideo.play();
                  }
                });
              },
              { threshold: 1 }
            );
            observer.observe(svideo);
          });
        }
      });
    } else return;
  }, [size.width]);

  useEffect(() => {
    const bvideos = document.querySelectorAll("#bvideo");
    if (size.width > 640) {
      console.log("ayre bl dene" + size.width);
      for (let i = 0; i < bvideos.length; i++) {
        bvideos[i].addEventListener("mouseenter", function (e) {
          bvideos[i].play();
        });
        bvideos[i].addEventListener("mouseout", function (e) {
          bvideos[i].pause();
        });
      }
    } else return;
  }, [size.width]);

  return (
    <div
      id="gallery"
      className="w-full h-screen bg-black scroll-mt-12 md:scroll-mt-0"
    >
      <div className="flex flex-col md:p-24 p-10">
        <h1 className="uppercase font-extrabold text-beige tracking-widest text-5xl mb-4">
          Gallery
        </h1>
        <p className="text-cwhite max-w-[500px] mb-20">
          These images showcase some of the events we have had the pleasure of
          serving, as well as the delicious drinks and impeccable service that
          we are known for.
        </p>

        <div className="w-full xl:px-10 flex flex-col sm:flex-row justify-between items-center snap-mandatory snap-y md:snap:none overflow-y-scroll md:overflow-visible scrollbar-hide h-[423.55px] md:h-fit">
          <div className="border-[2px] bg-black border-beige md:board snap-center snap-always">
            {/* video 1 */}
            {size.width < 640 ? (
              <video
                id="svideo"
                preload="metadata"
                muted
                playsInline
                autoPlay
                loop
                className="bg-black"
                width={235}
              >
                <source src="/assets/reelc.mp4" type="video/mp4"></source>
              </video>
            ) : (
              <video
                id="bvideo"
                autoPlay
                playsInline
                muted
                loop
                className="grayscale hover:grayscale-0"
                width={270}
              >
                <source src="/assets/reelc.mp4" type="video/mp4"></source>
              </video>
            )}
          </div>

          {/* video 2 */}
          <div className="border-[2px] bg-black border-beige md:board snap-center snap-always">
            {size.width < 640 ? (
              <video
                id="svideo"
                preload="metadata"
                autoPlay
                playsInline
                muted
                loop
                className=" bg-beige"
                width={236}
              >
                <source src="/assets/reelb.mp4" type="video/mp4"></source>
              </video>
            ) : (
              <video
                id="bvideo"
                autoPlay
                playsInline
                muted
                loop
                className="grayscale hover:grayscale-0"
                width={270}
              >
                <source src="/assets/reelb.mp4" type="video/mp4"></source>
              </video>
            )}
          </div>

          {/* video 3 */}
          <div className="border-[2px] bg-black border-beige md:board snap-center snap-always">
            {size.width < 640 ? (
              <video
                id="svideo"
                autoPlay
                playsInline
                muted
                loop
                className="bg-black"
                width={236}
              >
                <source src="/assets/reela.mp4" type="video/mp4"></source>
              </video>
            ) : (
              <video
                id="bvideo"
                autoPlay
                playsInline
                muted
                loop
                className="grayscale hover:grayscale-0"
                width={270}
              >
                <source src="/assets/reela.mp4" type="video/mp4"></source>
              </video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default Gallery;

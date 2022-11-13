import { useEffect, useState } from "react";

function Gallery() {
  const size = useWindowSize();

  useEffect(() => {
    const videos = document.querySelectorAll("video");
    if (size.width < 640) {
      console.log("sabaho");
      videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.then((_) => {
            let observer = new IntersectionObserver(
              (entries) => {
                entries.forEach((entry) => {
                  if (entry.intersectionRatio !== 1 && !video.paused) {
                    video.pause();
                  } else if (video.paused) {
                    video.play();
                  }
                });
              },
              { threshold: 1 }
            );
            observer.observe(video);
          });
        }
      });
    } else {
      for (let i = 0; i < videos.length; i++) {
        videos[i].addEventListener("mouseenter", function (e) {
          videos[i].play();
        });
        videos[i].addEventListener("mouseout", function (e) {
          videos[i].pause();
        });
      }
    }
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
          Lorem ipsum dolor sit amet. Et quasi quae quo veniam iusto qui
          consectetur dolorem qui fugit vitae et aliquam unde. Et aperiam
          perspiciatis sed exercitationem molestias non quas deserunt aut sequi
          cupiditate non nulla voluptatem.
        </p>

        <div className="w-full xl:px-10 flex flex-col sm:flex-row justify-between items-center snap-mandatory snap-y md:snap:none overflow-y-scroll md:overflow-visible scrollbar-hide h-[423.55px] md:h-fit">
          <div className="border-[2px] border-beige md:board snap-center snap-always">
            {size.width < 640 ? (
              <video
                src="/assets/reela.mp4"
                type="video/mp4"
                muted
                loop
                className="sm:grayscale hover:grayscale-0 clip"
                width={236}
              ></video>
            ) : (
              <video
                src="/assets/reela.mp4"
                type="video/mp4"
                muted
                loop
                className="sm:grayscale hover:grayscale-0 clip"
                width={270}
              ></video>
            )}
          </div>

          <div className="border-[2px] border-beige md:board snap-center snap-always">
            {size.width < 640 ? (
              <video
                src="/assets/reelb.mp4"
                type="video/mp4"
                muted
                loop
                className="sm:grayscale hover:grayscale-0 clip"
                width={236}
              ></video>
            ) : (
              <video
                src="/assets/reelb.mp4"
                type="video/mp4"
                muted
                loop
                className="sm:grayscale hover:grayscale-0 clip"
                width={270}
              ></video>
            )}
          </div>

          <div className="border-[2px] border-beige md:board snap-center snap-always">
            {size.width < 640 ? (
              <video
                src="/assets/reelc.mp4"
                type="video/mp4"
                muted
                loop
                className="sm:grayscale hover:grayscale-0 clip"
                width={236}
              ></video>
            ) : (
              <video
                src="/assets/reelc.mp4"
                type="video/mp4"
                muted
                loop
                className="sm:grayscale hover:grayscale-0 clip"
                width={270}
              ></video>
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

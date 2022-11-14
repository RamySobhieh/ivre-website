import { useEffect, useState } from "react";

function Gallery() {
  const size = useWindowSize();

  // useEffect(() => {
  //   const videos = document.querySelectorAll("video");
  //   console.log(size.width);
  //   if (size.width < 640) {
  //     videos.forEach((video) => {
  //       // We can only control playback without insteraction if video is mute
  //       video.muted = true;
  //       // Play is a promise so we need to check we have it
  //       let playPromise = video.play();
  //       if (playPromise !== undefined) {
  //         playPromise.then((_) => {
  //           let observer = new IntersectionObserver(
  //             (entries) => {
  //               entries.forEach((entry) => {
  //                 if (entry.intersectionRatio !== 1 && !video.paused) {
  //                   video.pause();
  //                 } else if (video.paused) {
  //                   video.play();
  //                 }
  //               });
  //             },
  //             { threshold: 1 }
  //           );
  //           observer.observe(video);
  //         });
  //       }
  //     });
  //   } else {
  //     for (let i = 0; i < videos.length; i++) {
  //       videos[i].addEventListener("mouseenter", function (e) {
  //         videos[i].play();
  //       });
  //       videos[i].addEventListener("mouseout", function (e) {
  //         videos[i].pause();
  //       });
  //     }
  //   }
  // }, [size.width]);

  useEffect(() => {
    const svideos = document.querySelectorAll("#svideo");

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
  });

  useEffect(() => {
    const bvideos = document.querySelectorAll("#bvideo");

    console.log(size.width);

    for (let i = 0; i < bvideos.length; i++) {
      bvideos[i].addEventListener("mouseenter", function (e) {
        if (size.width < 640) return;
        else bvideos[i].play();
      });
      bvideos[i].addEventListener("mouseout", function (e) {
        if (size.width < 640) return;
        else bvideos[i].pause();
      });
    }
  });

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
          <div className="border-[2px] bg-black border-beige md:board snap-center snap-always">
            {size.width < 640 ? (
              <video
                id="svideo"
                src="/assets/reela.mp4"
                type="video/mp4"
                preload="metadata"
                muted
                playsinline
                autoplay
                loop
                className="bg-black"
                width={236}
              ></video>
            ) : (
              <video
                id="bvideo"
                src="/assets/reela.mp4"
                type="video/mp4"
                muted
                loop
                className="grayscale hover:grayscale-0"
                width={270}
              ></video>
            )}
          </div>

          <div className="border-[2px] bg-black border-beige md:board snap-center snap-always">
            {size.width < 640 ? (
              <video
                id="svideo"
                preload="metadata"
                muted
                src="/assets/reelb.mp4"
                type="video/mp4"
                loop
                className=" bg-beige"
                width={236}
              ></video>
            ) : (
              <video
                id="bvideo"
                src="/assets/reelb.mp4"
                type="video/mp4"
                muted
                loop
                className="grayscale hover:grayscale-0"
                width={270}
              ></video>
            )}
          </div>

          <div className="border-[2px] bg-black border-beige md:board snap-center snap-always">
            {size.width < 640 ? (
              <video
                id="svideo"
                src="/assets/reelc.mp4"
                type="video/mp4"
                loop
                className="bg-black"
                width={236}
              ></video>
            ) : (
              <video
                id="bvideo"
                src="/assets/reelc.mp4"
                type="video/mp4"
                muted
                loop
                className="grayscale hover:grayscale-0"
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

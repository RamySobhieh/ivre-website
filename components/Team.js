import Image from "next/image";

function Team() {
  return (
    <div id="about" className="scroll-mt-[-50px]">
      <div className="max-w-[1240px] flex flex-col lg:flex-row justify-center items-center lg:items-start lg:pt-[300px] pt-[150px] mb-[160px] mx-auto lg:space-x-[80px] lg:px-[80px]">
        <div className="md:w-[400px] md:h-[300px] w-[280px] h-[210px] bg-[url(../public/assets/team.png)] bg-cover bg-no-repeat bg-center relative pictureshadow mb-[60px] lg:mb-0">
          <div className="bg-darkbeige w-full h-full absolute left-[-20px] top-[-20px] z-[-5] "></div>
        </div>
        <div className="flex flex-col justify-center text-start md:w-[480px] w-[300px]">
          <h2 className="font-extrabold text-3xl text-darkbeige mb-8 tracking-wider">
            What We Believe In
          </h2>
          <p className="text-m first-letter:text-5xl first-letter:font-extrabold first-letter:mr-2 first-letter:float-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

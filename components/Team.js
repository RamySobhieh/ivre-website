import Image from "next/image";
import Teampic from "../public/assets/team.jpeg";
function Team() {
  return (
    <div id="about" className="scroll-mt-[-50px]">
      <div className="max-w-[1240px] flex flex-col lg:flex-row justify-center items-center lg:items-start lg:pt-[300px] pt-[150px] mb-[160px] mx-auto lg:space-x-[80px] lg:px-[80px]">
        <div className="md:w-[400px] md:h-[300px] w-[280px] h-[210px] relative pictureshadow mb-[60px] lg:mb-0">
          <Image
            src={Teampic}
            alt="teampic"
            layout="fill"
            objectFit="cover"
          ></Image>
          <div className="bg-darkbeige w-full h-full absolute left-[-20px] top-[-20px] z-[-5] "></div>
        </div>
        <div className="flex flex-col justify-center text-start md:w-[480px] w-[300px]">
          <h2 className="font-extrabold text-3xl text-darkbeige mb-8 tracking-wider">
            What We Believe In
          </h2>
          <p className="text-m first-letter:text-5xl first-letter:font-extrabold first-letter:mr-2 first-letter:float-left">
            We understand that hosting an event can be stressful, which is why
            we strive to make the process as seamless and stress-free as
            possible. From setup to cleanup, our team is here to take care of
            everything so you can sit back, relax, and enjoy the festivities. We
            are a team of skilled mixologists and service professionals
            dedicated to providing top-notch service and delicious drinks to our
            clients. Whether you&apos;re planning a wedding reception, corporate
            function, or private party, we have the expertise and resources to
            make your event a success. Thank you again for considering our
            company. We look forward to working with you and helping make your
            event a memorable one.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;

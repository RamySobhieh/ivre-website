import Card from "./Card";
import RevCard from "./RevCard";

function Sectors() {
  return (
    <div
      id="services"
      className="xl:w-full w-screen overflow-hidden max-w-[1240px] mx-auto flex flex-col xl:pt-[160px] pt-[100px] xl:space-y-[160px] space-y-[120px] items-center justify-center mb-[100px] xl:mb-[160px] scroll-mt-[50px]"
    >
      <Card />
      <RevCard />
    </div>
  );
}

export default Sectors;

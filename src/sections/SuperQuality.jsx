import Button from "../Components/Button";
import { shoe8 } from "../assets/assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-[40px] lg:max-w-lg capitalize font-bold">
          We Provide You<span className="text-coral-red"> Super</span>
          <span className="text-coral-red"> Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-base leading-7">
          Ensuring your comfort and style, our shoes are crafted with the finest materials and innovative designs. Experience the perfect blend of fashion and functionality with every step you take.
        </p>
        <p className="my-6 max-w-lg font-montserrat text-slate-gray text-base leading-7">
          Our shoes are designed to provide the ultimate comfort and support, making them perfect for any occasion.
        </p>
        <div>
          <Button label="View details" />
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
    <img src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  );
};

export default SuperQuality;

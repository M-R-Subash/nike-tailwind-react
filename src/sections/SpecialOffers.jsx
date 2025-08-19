import { offer } from "../assets/assets/images";
import { arrowRight } from "../assets/assets/icons";
import Button from "../Components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-warp items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain w-full "
          alt="special-offer"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-[40px] lg:max-w-lg capitalize font-extrabold">
          <span className="text-coral-red"> Special</span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg font-montserrat text-slate-gray text-base leading-7">
          Embark on a journey of style and comfort with our exclusive special
          offers. Discover the perfect blend of quality and affordability,
          designed to elevate your footwear collection without breaking the
          bank.
        </p>
        <p className="my-6 max-w-lg font-montserrat text-slate-gray text-base leading-7">
          Navigate through our curated selection of shoes that not only meet
          your fashion needs but also provide exceptional value.
        </p>
        <div className=" flex flex-wrap gap-4 ">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;

import { star } from "../assets/assets/icons";

const Review = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <section>
      <div className="flex flex-col items-center justify-center">
        <img
          src={imgURL}
          alt="customer"
          className="rounded-full w-[120px] h-[120px]  object-cover"
        />
        <h3 className="mt-4 font-palanquin text-2xl font-bold text-center">
          {customerName}
        </h3>

        <p className="mt-4 max-w-sm text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5">
          <img
            src={star}
            width={24}
            height={24}
            className="object-contain m-0"
          />
          <p className="text-base font-montserrat text-slate-gray">
            ({rating})
          </p>
        </div>
      </div>
    </section>
  );
};

export default Review;

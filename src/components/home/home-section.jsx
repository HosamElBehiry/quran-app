import { ServiceCard } from "../cards/service-card";

export const HomeSections = ({ Data, title, description }) => {
  return (
    <section className="lg:my-15 max-lg:my-10 max-md:py-5 max-md:my-0 container max-sm:px-3 mx-auto flex flex-col max-sm:gap-5 gap-10 items-center justify-center">
      <div className="flex flex-col items-center max-md:gap-2.5 gap-4">
        <h3 className="text-3xl max-lg:text-2xl max-md:text-xl max-sm:text-lg text-sky-800 font-bold">
          {title}
        </h3>
        <p className="text-center text-zinc-700 text-xl max-lg:text-lg max-md:text-base max-sm:text-sm font-medium">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-md:gap-5 gap-8">
        {Data.map(({ title, description, img }) => (
          <ServiceCard key={title} {...{ description, img, title }} />
        ))}
      </div>
    </section>
  );
};

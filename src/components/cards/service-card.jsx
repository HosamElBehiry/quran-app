import Image from "next/image";

export const ServiceCard = ({ img, title, description }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-3 text-center">
      <Image
        src={img}
        loading="lazy"
        height={95}
        width={95}
        alt="Quran"
        className="size-24 object-cover rounded-full"
      />
      <div className="flex items-center flex-col text-center gap-2.5">
        <h4 className="font-bold max-lg:text-base max-md:text-sm text-lg">
          {title}
        </h4>
        <p className="text-zinc-500 font-medium max-lg:text-sm max-md:text-xs">
          {description}
        </p>
      </div>
    </div>
  );
};

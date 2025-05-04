import Image from "next/image";
import Link from "next/link";

export const LogoTitle = ({ title }) => {
  return (
    <>
      <Link href="/">
        <Image
          loading="eager"
          src="/layout/logo.webp"
          className="object-contain w-32 h-auto max-sm:w-24"
          height={400}
          width={400}
          alt="Logo"
        />
      </Link>
      <h3 className="text-2xl font-semibold max-md:text-lg max-lg:text-xl">
        {title}{" "}
      </h3>
    </>
  );
};

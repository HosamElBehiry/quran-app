import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-sky-800 text-white py-3 max-sm:py-2">
      <div className="container mx-auto max-sm:px-3 flex items-center justify-between">
        <p className="font-semibold lg:text-sm text-[10px] max-lg:text-[13px]">
          جميع الحقوق محفوظة
        </p>
        <div className="flex items-center gap-2">
          <Link href="#">
            <Image
              loading="eager"
              src="/layout/facebook.png"
              className="object-contain max-sm:size-5"
              height={25}
              width={25}
              alt="Img!"
            />
          </Link>
          <Link href="#">
            <Image
              loading="eager"
              src="/layout/twitter.png"
              className="object-contain max-sm:size-5"
              height={25}
              width={25}
              alt="Img!"
            />
          </Link>
          <Link href="#">
            <Image
              loading="eager"
              src="/layout/instagram.png"
              className="object-contain max-sm:size-5"
              height={25}
              width={25}
              alt="Img!"
            />
          </Link>
          <Link href="#">
            <Image
              loading="eager"
              src="/layout/whatsapp.png"
              className="object-contain max-sm:size-5"
              height={25}
              width={25}
              alt="Img!"
            />
          </Link>
          {/* <Link href={!session?.user ? "/login" : "/user"}>
          <ProfileIcon className="size-[25px] cursor-pointer" />
        </Link> */}
        </div>
      </div>
    </footer>
  );
};

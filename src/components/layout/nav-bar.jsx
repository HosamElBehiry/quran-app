import Image from "next/image";
import Link from "next/link";
import { BurgerMenuIcon } from "../icons/burger-menu";

export const Navbar = () => {
  return (
    <nav className="container mx-auto py-4 max-md:py-3 max-sm:px-3 max-sm:py-2 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/layout/logo.webp"
          className="w-auto h-25 max-sm:h-20 object-contain"
          height={40}
          width={300}
          alt="Logo"
        />
      </Link>
      <div className="hidden lg:flex items-center gap-8">
        <Link href="#" className="font-medium hover:text-yellow-700">
          الرئيسية
        </Link>
        <Link href="#" className="font-medium hover:text-yellow-700">
          القران الكريم
        </Link>
        <Link href="#" className="font-medium hover:text-yellow-700">
          السنة النبوية
        </Link>
        <Link href="#" className="font-medium hover:text-yellow-700">
          العقيده الإسلامية
        </Link>
        <Link href="#" className="font-medium hover:text-yellow-700">
          القيم الإسلامية
        </Link>
        <Link href="#" className="font-medium hover:text-yellow-700">
          نماذج الأسئلة
        </Link>
      </div>
      <BurgerMenuIcon className="lg:hidden" />
    </nav>
  );
};

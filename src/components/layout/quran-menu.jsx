import Link from "next/link";
import { ArrowIcon } from "../icons/arrow-icon";

export const QuranMenu = () => {
  return (
    <div className="flex items-center gap-4 relative group">
      <span className="font-medium py-2">القران الكريم</span>
      <ArrowIcon className="size-2.5 rotate-90" />
      <ul className="absolute top-full z-100 w-40 max-h-40 overflow-y-auto green-scroll-bar start-1/2 translate-x-1/2 bg-white px-2.5 py-2.5 border border-slate-200 rounded-sm hidden group-hover:flex flex-col gap-2">
        <li className="text-sm cursor-pointer hover:text-emerald-600">
          <Link href="/quran/memorizing">حفظ القران الكريم</Link>
        </li>
        <li className="text-sm cursor-pointer hover:text-emerald-600">
          <Link href="/quran/surahs">أسماء السور</Link>
        </li>
        <li className="text-sm cursor-pointer hover:text-emerald-600">
          تفسير القران الكريم
        </li>
        <li className="text-sm cursor-pointer hover:text-emerald-600">
          من المقصود
        </li>
        <li className="text-sm cursor-pointer hover:text-emerald-600">
          أذكر نص الأية
        </li>
      </ul>
    </div>
  );
};

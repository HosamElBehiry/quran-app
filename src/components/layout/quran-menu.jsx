import { ArrowIcon } from "../icons/arrow-icon";

export const QuranMenu = () => {
  return (
    <div className="flex items-center gap-4 relative group">
      <span className="font-medium py-2">القران الكريم</span>
      <ArrowIcon className="size-2.5 rotate-90" />
      <ul className="absolute top-full z-100 w-40 max-h-40 overflow-y-auto yellow-scroll-bar start-1/2 translate-x-1/2 bg-white px-2.5 py-2.5 border border-slate-200 rounded-sm hidden group-hover:flex flex-col gap-2">
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          حفظ القران الكريم
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          أسماء السور
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          تفسير القران الكريم
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          من المقصود
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          أذكر نص الأية
        </li>
      </ul>
    </div>
  );
};

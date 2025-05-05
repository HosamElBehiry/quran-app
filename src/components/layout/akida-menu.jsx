import { ArrowIcon } from "../icons/arrow-icon";

export const AkidahMenu = () => {
  return (
    <div className="flex items-center gap-4 relative group">
      <span className="font-medium py-2"> العقيدة</span>
      <ArrowIcon className="size-2.5 rotate-90" />
      <ul className="absolute top-full z-100 w-40 max-h-40 overflow-y-auto yellow-scroll-bar start-1/2 translate-x-1/2 bg-white px-2.5 py-2.5 border border-slate-200 rounded-sm hidden group-hover:flex flex-col gap-2">
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          العبادات
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          المعاملات
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          فقه الاسرة
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          العادات
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          الايمان والنذور
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          مسائل فقهية
        </li>
      </ul>
    </div>
  );
};

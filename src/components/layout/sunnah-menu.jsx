import { ArrowIcon } from "../icons/arrow-icon";

export const SunnahMenu = () => {
  return (
    <div className="flex items-center gap-4 relative group">
      <span className="font-medium py-2">السنة النبوية</span>
      <ArrowIcon className="size-2.5 rotate-90" />
      <ul className="absolute top-full z-100 w-40 max-h-40 overflow-y-auto yellow-scroll-bar start-1/2 translate-x-1/2 bg-white px-2.5 py-2.5 border border-slate-200 rounded-sm hidden group-hover:flex flex-col gap-2">
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          الحديث الشريف
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          سيرة النبي ﷺ
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          كتب السير
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          صحابةالنبي ﷺ
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          معارك وغزوات
        </li>
        <li className="text-sm cursor-pointer hover:text-yellow-700">
          احكام في السيرة
        </li>
      </ul>
    </div>
  );
};

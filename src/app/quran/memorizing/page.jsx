"use client";

import dynamic from "next/dynamic";
import { SelectQuestionNumbers } from "@/components/quran-memorizing/select-question-numbers";

const SelectCategories = dynamic(
  () => import("@/components/quran-memorizing/select-categories"),
  { ssr: false }
);
const SelectLines = dynamic(
  () => import("@/components/quran-memorizing/select-lines"),
  { ssr: false }
);

const MemorizingQuranPage = () => {
  return (
    <main className="my-10 max-sm:my-5 w-3/4 mx-auto px-3 flex max-lg:container 2xl:container flex-col max-sm:gap-7 gap-15">
      <h2 className="py-6 max-lg:py-3 w-fit max-lg:w-full max-lg:text-center mx-auto">
        <span className="font-extrabold max-lg:text-base text-xl max-sm:text-sm relative z-20">
          مسابقة حفظ القران الكريم
        </span>
      </h2>
      <div className="grid grid-cols-3 max-md:grid-cols-1 max-md:gap-5 max-lg:gap-10 gap-20">
        <SelectCategories />
        <SelectQuestionNumbers />
        <SelectLines />
        <button className="bg-emerald-700 max-sm:text-xs max-lg:text-sm rounded-md hover:bg-emerald-700/90 cursor-pointer w-65 mx-auto max-md:w-full col-span-full py-2 text-white font-semibold">
          إنشاء نموذج إختبار
        </button>
      </div>
    </main>
  );
};

export default MemorizingQuranPage;

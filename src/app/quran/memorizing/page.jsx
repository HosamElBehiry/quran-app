"use client";

import dynamic from "next/dynamic";
import { TitleBgIcon } from "@/components/icons/title-bg-icon";
import { SelectJuzz } from "@/components/quran-memorizing/select-juzz";
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
      <h2 className="px-20 max-sm:px-7 py-6 max-lg:py-3 w-fit max-lg:w-full max-lg:text-center mx-auto relative shadow overflow-hidden rounded-md border border-slate-200 border-t-4 border-t-yellow-800">
        <span className="font-extrabold max-lg:text-base text-lg max-sm:text-sm relative z-20">
          عرض نماذج اختبار في حفظ القرآن الكريم بمسابقة عباد الرحمن
        </span>
        <TitleBgIcon className="absolute top-0 start-0 w-full object-fill" />
      </h2>
      <div className="grid grid-cols-2 max-md:grid-cols-1 max-md:gap-5 max-lg:gap-10 gap-20">
        <SelectCategories />
        <SelectJuzz />
        <SelectQuestionNumbers />
        <SelectLines />
        <button className="bg-yellow-800 max-sm:text-xs max-lg:text-sm rounded-md hover:bg-yellow-800/90 cursor-pointer w-full col-span-full py-2 text-white font-semibold">
          إنشاء نموذج إختبار
        </button>
      </div>
    </main>
  );
};

export default MemorizingQuranPage;

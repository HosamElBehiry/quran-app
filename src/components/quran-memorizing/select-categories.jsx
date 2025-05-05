import { customStyles } from "@/constants/custom-style";
import { quranJuzz } from "@/constants/memorizing-quran";
import Select from "react-select";

const SelectCategories = () => {
  return (
    <div className="flex flex-col gap-8 max-md:gap-3 w-80 max-md:w-full">
      <h4 className="font-medium max-sm:text-sm max-lg:text-base text-lg">
        حدد الفئة
      </h4>
      <Select
        options={quranJuzz}
        placeholder="برجاء تحديد الفئة"
        styles={customStyles}
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default SelectCategories;

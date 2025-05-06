import { quranLines } from "@/constants/memorizing-quran";
import { customStyles } from "@/constants/custom-style";
import Select from "react-select";

const SelectLines = () => {
  return (
    <div className="flex flex-col gap-5 max-md:gap-3 w-full">
      <h4 className="font-medium max-sm:text-sm max-lg:text-base text-lg">
        إختر عدد السطور
      </h4>
      <Select
        options={quranLines}
        placeholder="برجاء تحديد عدد السطور"
        styles={customStyles}
        classNamePrefix="react-select"
      />
    </div>
  );
};

export default SelectLines;

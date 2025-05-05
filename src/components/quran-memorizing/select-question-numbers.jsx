import { AddIcon } from "../icons/add-icon";
import { MinusIcon } from "../icons/minus-icon";

export const SelectQuestionNumbers = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 max-md:gap-3 w-80 max-md:w-full">
      <h4 className="font-medium max-sm:text-sm max-lg:text-base text-lg">
        عدد الأسئلة
      </h4>
      <div className="flex items-center">
        <button className="bg-yellow-800 hover:bg-yellow-800/90 cursor-pointer size-9 flex items-center justify-center text-white">
          <AddIcon className="size-3" />
        </button>
        <span className="h-9 w-12 font-medium border-y border-y-yellow-800 flex items-center justify-center">
          1
        </span>
        <button className="bg-yellow-800 hover:bg-yellow-800/90 cursor-pointer size-9 flex items-center justify-center text-white">
          <MinusIcon className="size-3" />
        </button>
      </div>
    </div>
  );
};

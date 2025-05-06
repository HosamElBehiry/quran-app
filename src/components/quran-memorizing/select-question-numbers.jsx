import { useState } from "react";
import { AddIcon } from "../icons/add-icon";
import { MinusIcon } from "../icons/minus-icon";

export const SelectQuestionNumbers = () => {
  const [qty, setQty] = useState(1);
  return (
    <div className="flex flex-col items-center gap-5 max-md:gap-3 w-full">
      <h4 className="font-medium max-sm:text-sm max-lg:text-base text-lg">
        عدد الأسئلة
      </h4>
      <div className="flex items-center">
        <button
          disabled={qty === 15}
          onClick={() => (qty !== 15 ? setQty((prev) => prev + 1) : null)}
          className="bg-emerald-700 disabled:cursor-not-allowed hover:bg-emerald-700/90 cursor-pointer size-9 flex items-center justify-center text-white"
        >
          <AddIcon className="size-3" />
        </button>
        <span className="h-9 w-12 font-medium border-y border-y-emerald-700 flex items-center justify-center">
          {qty}
        </span>
        <button
          disabled={qty === 1}
          onClick={() => (qty !== 1 ? setQty((prev) => prev - 1) : null)}
          className="bg-emerald-700 disabled:cursor-not-allowed hover:bg-emerald-700/90 cursor-pointer size-9 flex items-center justify-center text-white"
        >
          <MinusIcon className="size-3" />
        </button>
      </div>
    </div>
  );
};

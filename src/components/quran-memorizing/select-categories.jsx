const SelectCategories = () => {
  return (
    <div className="flex flex-col gap-5 max-md:gap-3 w-full">
      <h4 className="font-medium max-sm:text-sm max-lg:text-base text-lg">
        حدد الفئة
      </h4>
      <div className="border border-slate-200 rounded-md p-3 flex flex-col gap-4">
        <ul className="flex flex-col gap-3 max-h-40 overflow-y-auto">
          <li className="flex items-center gap-2 *:cursor-pointer">
            <input
              type="checkbox"
              id="all"
              className="size-4 border border-slate-200 appearance-none checked:bg-emerald-800 rounded"
            />
            <label
              htmlFor="all"
              className="font-medium max-md:text-sm max-sm:text-xs"
            >
              جميع الأجزاء
            </label>
          </li>
          {[...Array(30).keys()].map((info) => (
            <li key={info} className="flex items-center gap-2 *:cursor-pointer">
              <input
                type="checkbox"
                id={`juzz-${info + 1}`}
                className="size-4 border border-slate-200 appearance-none checked:bg-emerald-800 rounded"
              />
              <label
                htmlFor={`juzz-${info + 1}`}
                className="font-medium max-md:text-sm max-sm:text-xs"
              >
                الجزء {info + 1}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectCategories;

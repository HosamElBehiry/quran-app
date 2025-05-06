const SurahsPage = () => {
  return (
    <main className="my-10 max-sm:my-5 mx-auto px-3 flex container flex-col max-sm:gap-8 gap-15">
      <h2 className="py-6 max-lg:pt-3 max-lg:pb-0 w-fit max-lg:w-full max-lg:text-center mx-auto">
        <span className="font-extrabold max-lg:text-base text-xl max-sm:text-sm relative z-20">
          مسابقة أسماء سور القران الكريم
        </span>
      </h2>
      {[...Array(20).keys()].map((j) => (
        <div key={j}>
          <div className="flex items-center gap-3">
            <span className="flex items-center justify-center text-white rounded-md max-sm:text-sm max-sm:size-6 size-7 bg-emerald-700">
              {j + 1}
            </span>
            <p className="flex-1 max-sm:text-sm">
              كم عدد الانبياء والرسل المذكورين في القران الكريم ؟
            </p>
          </div>
          <ul className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 gap-3 max-sm:my-2 lg:mt-5">
            {[1, 2, 3, 4, 5, 6]?.map((i) => (
              <li
                key={i}
                className="flex items-center w-full gap-2 p-2 border border-slate-200 rounded-md cursor-pointer ps-4"
              >
                <input
                  type="radio"
                  id={i + j}
                  name={i * j}
                  className={`border border-slate-300 rounded-md appearance-none size-3 ${
                    i === 1 ? "checked:bg-emerald-700" : "checked:bg-red-600"
                  }`}
                />
                <label
                  htmlFor={i * j}
                  className="flex-1 cursor-pointer max-sm:text-xs"
                >
                  ادم عليه السلام
                </label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  );
};

export default SurahsPage;

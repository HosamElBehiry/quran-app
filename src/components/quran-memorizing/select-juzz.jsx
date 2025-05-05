import { LocationIcon } from "@/components/icons/location-icon";
import { useRanger } from "react-ranger";
import { useState } from "react";

export const SelectJuzz = () => {
  const [rangPrice, setRangPrice] = useState([1, 30]);
  const { getTrackProps, handles, segments } = useRanger({
    min: 1,
    max: 30,
    stepSize: 1,
    values: rangPrice,
    onChange: setRangPrice,
  });
  return (
    <div className="flex flex-col gap-9 w-80 max-md:w-full">
      <h4 className="font-medium max-sm:text-sm max-lg:text-base text-lg">
        من {segments[0].value} إلى {segments[1].value} -{" "}
        {Math.abs(segments[1].value - segments[0].value) + 1} جزء
      </h4>
      <div>
        <div
          className="h-1 bg-yellow-800 rounded-sm mx-auto mt-5 w-[95%]"
          {...getTrackProps()}
        >
          {handles.map(({ getHandleProps, value }, index) => {
            const handleProps = getHandleProps();
            const { key: _, ...restProps } = handleProps;
            return (
              <div key={`handle-juzz-${index}`} {...restProps}>
                <div className="border relative border-yellow-800 bg-yellow-800 rounded-full size-4.5 outline-none cursor-pointer">
                  <LocationIcon className="absolute -top-9.5 size-9 text-yellow-800 -start-2" />
                  <span
                    className={`text-xs absolute -top-7.5 start-1 text-white font-semibold flex items-center justify-center ${
                      value < 10 ? "ps-0.5" : "ps-0"
                    }`}
                  >
                    {value}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import lightBtn from "./assets/Shape-1.svg";
import darkBtn from "./assets/Shape.svg";
import delBtn from "./assets/del.svg";

function App() {
  let [mode, setMode] = useState(true);

  // dark mode and light mode
  const mode

  return (
    <div
      className={
        mode === false ? "bg-[#171823] h-screen" : "bg-[#F4F4F6FF] h-screen"
      }
    >
      <div className=" h-[200px] bg-cover bg-center mobile:h-[300px] bg-[url('./assets/light-bg-mobile.jpg')] mobile:bg-[url('./assets/light-bg.jpg')]"></div>

      <div className="absolute top-[48px] pl-[26px] pr-[26px] w-[100%]">
        <div className="flex justify-between">
          <h1 className=" text-white text-[22px] font-bold tracking-[8px]">
            TODO
          </h1>
          <img
            src={mode === "dark" ? lightBtn : darkBtn}
            className="cursor-pointer"
          />
        </div>

        <div className=" w-[100%] mt-[36px]">
          <input
            type="text"
            className=" w-full px-[20px] py-[12px] rounded-md text-[12px]"
            placeholder="Create a new todo…"
          />

          <ul className="bg-white mt-[16px] rounded-md">
            <li className="flex px-[20px] py-[12px] gap-x-[12px]">
              <div className="flex justify-center items-center">
                <p className="border w-[20px] h-[20px] rounded-full"></p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[12px] font-[400] text-[#494C6BFF] leading-3">
                  Kitob o'qigandan so'ng uxlash.
                </p>
                <img
                  src={delBtn}
                  width="11.79"
                  height="11.79"
                  className="col-span-2"
                />
              </div>
            </li>

            <li className="flex px-[20px] py-[12px] gap-x-[12px]">
              <div className="flex justify-center items-center">
                <p className="border w-[20px] h-[20px] rounded-full"></p>
              </div>
              <div className="flex justify-between items-center w-full">
                <p className="text-[12px] font-[400] text-[#494C6BFF] leading-3">
                  Kitob o'qigandan so'ng uxlash.
                </p>
                <img
                  src={delBtn}
                  width="11.79"
                  height="11.79"
                  className="col-span-2"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;

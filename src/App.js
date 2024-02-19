import { useState } from "react";
import lightBtn from "./assets/Shape-1.svg";
import darkBtn from "./assets/Shape.svg";
import delBtn from "./assets/del.svg";
import chekPoint from "./assets/checkpoint.svg";

function App() {
  let [mode, setMode] = useState(true);
  let [inputValue, setInputValue] = useState([{ text: "", isComplate: false }]);

  // dark mode and light mode
  const Todemode = () => {
    setMode((e) => {
      return !e;
    });
  };

  function pres(params) {
    if (params.key === "Enter") {
      console.log(params.target.value);
      setInputValue((prev) => {
        return (prev.text = params.target.value);
      });
      console.log(inputValue);
    }
  }

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
            src={mode === false ? lightBtn : darkBtn}
            className="cursor-pointer"
            onClick={() => {
              Todemode();
            }}
          />
        </div>

        <div className=" w-[100%] mt-[36px]">
          <input
            type="text"
            className={` w-full px-[20px] py-[12px] rounded-md text-[12px] ${
              mode ?? false
                ? "bg-white text-[#25273DFF]"
                : "bg-[#25273DFF] text-white"
            }`}
            placeholder="Create a new todo…"
            onKeyPress={(e) => {
              pres(e);
            }}
          />

          <ul
            className={` mt-[16px] rounded-md ${
              mode ?? false ? "bg-white" : "bg-[#25273DFF]"
            }`}
          >
            <li className="flex px-[20px] py-[12px] gap-x-[12px]">
              <div className="flex justify-center items-center">
                {/* complate button */}
                <p className={`border w-[20px] h-[20px] rounded-full`}></p>
              </div>

              <div className="flex justify-between items-center w-full">
                <p
                  className={`text-[12px] font-[400] ${
                    mode ?? false ? "text-[#494C6BFF]" : "text-white"
                  } leading-3`}
                >
                  Kitob o'qigandan so'ng uxlash.
                </p>

                {/* del btn */}
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

import { useEffect, useState } from "react";
import lightBtn from "./assets/Shape-1.svg";
import darkBtn from "./assets/Shape.svg";
import delBtn from "./assets/del.svg";
import chekPoint from "./assets/checkpoint.svg";

function App() {
  let [mode, setMode] = useState(true);
  let [inputValue, setInputValue] = useState("");
  let [todos, setTodos] = useState([]);

  // dark mode and light mode
  const Todemode = () => {
    setMode((e) => {
      return !e;
    });
  };

  const handleSubmit = (e) => {
    const newTodo = {
      desc: e,
      isDel: false,
      id: todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1,
      isActive: false,
    };
    // Yangi todo obyektini saqlash
    setTodos([...todos, newTodo]);
  };

  const isAct = (id) => {
    setTodos((prev) => {
      return prev.map((e) => {
        if (e.id === id) {
          return { ...e, isActive: !e.isActive };
        }
        return { ...e, isActive: e.isActive };
      });
    });
  };

  const handlerDel = (id) => {
    setTodos((prev) => {
      return prev.filter((e) => e.id !== id);
    });
  };

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
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(inputValue);
            }}
          >
            <input
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
              type="text"
              className={` w-full px-[20px] py-[12px] rounded-md text-[12px] ${
                mode ?? false
                  ? "bg-white text-[#25273DFF]"
                  : "bg-[#25273DFF] text-white"
              }`}
              placeholder="Create a new todo…"
            />
          </form>

          <ul
            className={` mt-[16px] rounded-md ${
              mode ?? false ? "bg-white" : "bg-[#25273DFF]"
            }`}
          >
            {todos.map((item) => {
              return (
                <li
                  className="flex px-[20px] py-[12px] gap-x-[12px]"
                  key={item.id}
                >
                  <div className="flex justify-center items-center">
                    {/* complate button */}
                    <p
                      className={`border w-[20px] h-[20px] rounded-full ${
                        item.isActive === true ? "bg-red-600" : ""
                      }`}
                      onClick={() => {
                        isAct(item.id);
                      }}
                    ></p>
                  </div>

                  <div className="flex justify-between items-center w-full">
                    <p
                      className={`text-[12px] font-[400] ${
                        mode === true
                          ? `text-[#494C6BFF]  ${
                              item.isActive == true
                                ? "line-through opacity-55"
                                : ""
                            }`
                          : `text-white  ${
                              item.isActive == true
                                ? "line-through opacity-55"
                                : ""
                            }`
                      } leading-3`}
                    >
                      {item.desc}
                    </p>

                    {/* del btn */}
                    <img
                      src={delBtn}
                      width="11.79"
                      height="11.79"
                      className="col-span-2"
                      onClick={() => {
                        handlerDel(item.id);
                      }}
                    />
                  </div>
                </li>
              );
            })}
          </ul>
          <div
            className={`flex justify-between items-center px-[20px] py-[12px] bg-white mt-[12px] text-[14px] 
            ${todos.length <= 0 ? "hidden" : ""} `}
          >
            <span className="hover:text-[#2957b3] cursor-pointer hover:underline">
              {todos.length} items
            </span>
            <ul className="flex justify-between items-center gap-4">
              <li className="hover:text-[#2957b3] cursor-pointer hover:underline">
                All
              </li>
              <li className="hover:text-[#2957b3] cursor-pointer hover:underline">
                Active
              </li>
              <li className="hover:text-[#2957b3] cursor-pointer hover:underline">
                Complate
              </li>
            </ul>
            <span className="hover:text-[#2957b3] cursor-pointer hover:underline">
              Clear Complated
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

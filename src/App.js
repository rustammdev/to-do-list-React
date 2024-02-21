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

  function countTrue(array) {
    const trueIsWiev = array.filter((item) => item.isWiev === true);
    return trueIsWiev.length;
  }

  // json
  const handleSubmit = (e) => {
    if (e.trim().length > 0) {
      const newTodo = {
        desc: e,
        id:
          todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1,
        isActive: false,
        isDel: false,
        isWiev: true,
      };
      // Yangi todo obyektini saqlash
      setTodos([newTodo, ...todos]);
    }
  };

  // complate todo
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

  // del todo
  const handlerDel = (id) => {
    setTodos((prev) => {
      return prev.filter((e) => e.id !== id);
    });
  };

  // filter All
  const filterAll = () => {
    setTodos((prev) => {
      return prev.map((e) => {
        return { ...e, isWiev: true };
      });
    });
  };

  // filter Active
  const filterActive = () => {
    setTodos((prev) => {
      return prev.map((e) => {
        if (e.isActive === true) {
          return { ...e, isWiev: false };
        }
        return { ...e, isWiev: true };
      });
    });
  };

  // filter Complate
  const filterComplate = () => {
    setTodos((prev) => {
      return prev.map((e) => {
        if (e.isActive === true) {
          return { ...e, isWiev: true };
        }
        return { ...e, isWiev: false };
      });
    });
  };

  // clear complateded
  const clearComplated = () => {
    setTodos((prev) => {
      return prev.filter((e) => e.isActive === false);
    });
  };

  return (
    // bacground color
    <div
      className={
        mode === false ? "bg-[#171823] h-screen" : "bg-[#d5d5d9] h-screen"
      }
    >
      {/* background img */}
      <div className=" h-[200px] bg-cover bg-center mobile:h-[300px] bg-[url('./assets/light-bg-mobile.jpg')] mobile:bg-[url('./assets/light-bg.jpg')]"></div>

      <div className="relative mobile:top-[-200px] top-[-120px] max-w-xl pl-[26px] pr-[26px] m-auto">
        {/* main */}
        <div>
          {/* title and mode */}
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

          {/* todo items */}
          <div className=" w-[100%] mt-[36px]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setInputValue("");
                handleSubmit(inputValue);
                filterAll();
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
                return item.isWiev ? (
                  <li
                    className="flex px-[20px] gap-x-[12px] h-[50px]"
                    key={item.id}
                  >
                    <div
                      className="flex justify-center items-center cursor-pointer"
                      onClick={() => {
                        isAct(item.id);
                      }}
                    >
                      {/* complate button */}
                      {!item.isActive && (
                        <p
                          className={`border w-[20px] h-[20px] rounded-full`}
                        ></p>
                      )}
                      {item.isActive && (
                        <img src={chekPoint} width="22" height="22" />
                      )}
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
                        className="cursor-pointer"
                        onClick={() => {
                          handlerDel(item.id);
                        }}
                      />
                    </div>
                  </li>
                ) : (
                  ""
                );
              })}
            </ul>
          </div>
        </div>

        {/* footer */}
        <div
          className={`flex justify-between items-center px-[20px] py-[12px] text-[14px] mt-3 max-mobile:flex-col max-mobile:gap-2 ${
            mode ?? false
              ? "bg-white text-[#25273DFF]"
              : "bg-[#25273DFF] text-white"
          }`}
        >
          <span>{countTrue(todos)} items</span>

          <ul className="flex justify-between items-center gap-4">
            <li
              className="text-[#2957b3] cursor-pointer hover:underline"
              onClick={() => {
                filterAll();
              }}
            >
              All
            </li>
            <li
              className="hover:text-[#2957b3] cursor-pointer hover:underline"
              onClick={() => {
                filterActive();
              }}
            >
              Active
            </li>
            <li
              className="hover:text-[#2957b3] cursor-pointer hover:underline"
              onClick={() => {
                filterComplate();
              }}
            >
              Complate
            </li>
          </ul>
          <span
            className="hover:text-[#2957b3] cursor-pointer hover:underline"
            onClick={() => {
              clearComplated();
              filterAll();
            }}
          >
            Clear Complated
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;

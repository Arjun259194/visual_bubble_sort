import { useState } from "react";

function App() {
  const [datalist, setDataList] = useState<Array<number>>([
    19, 12, 11, 5, 13, 14, 6, 3, 4, 8, 1, 9, 2, 7, 10, 17, 20, 16,
  ]);

  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  function shuffleArray(array: Array<number>) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i (inclusive)
      const randomIndex = Math.floor(Math.random() * (i + 1));

      // Swap elements at randomIndex and i
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    setDataList([...array]);
  }

  async function bubbleSort(arr: Array<number>) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i; j < arr.length; j++) {
        if (arr[i] > arr[j]) {
          let temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
          setDataList([...arr]);
          await sleep(500);
        }
      }
    }
  }

  return (
    <section className="bg-gray-800 h-screen w-screen ">
      <div className="w-5/6 mx-auto flex flex-col items-center">
        <h1 className="text-white text-2xl sm:text-4xl py-3 capitalize">
          Visualize the bubble sort
        </h1>
        <div className="grid grid-flow-col w-full items-end p-5 gap-1">
          {datalist.map((item, index) => {
            return (
              <div
                key={index}
                style={{ height: `${item}.5rem` }}
                className="bg-blue-400 rounded-md flex items-center justify-center font-semibold">
                {item}
              </div>
            );
          })}
        </div>
        <div className="space-x-4">
          <button
            onClick={() => {
              bubbleSort(datalist);
            }}
            className="bg-blue-400 m-10 text-white px-6 py-2 rounded-lg">
            Sort
          </button>
          <button
            onClick={() => {
              shuffleArray(datalist);
            }}
            className="bg-blue-400 m-10 text-white px-6 py-2 rounded-lg">
            Mix
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;

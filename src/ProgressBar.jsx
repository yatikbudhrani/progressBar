import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 1);
        console.log(progress);
      }
    }, 100);
    return () => clearTimeout(timeout);
  }, [progress]);

  return (
    <div
      className="flex flex-col items-center gap-4"
      style={{ padding: "15rem" }}
    >
      <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Progress Bar
        </span>
      </h1>
      <div className="relative w-[500px] rounded-full overflow-hidden h-[30px] bg-gray-300">
        <p className="absolute left-[230px] top-[3px] text-black font-bold">
          {progress}%
        </p>
        <div
          style={{ width: `${progress * 5}px`, backgroundColor: "green" }}
          className={` h-[30px] rounded-full`}
        ></div>
      </div>
      <p>{progress !== 100 ? "loading..." : "Complete!"}</p>
      <button
        onClick={() => {
          setProgress(0);
        }}
        type="button"
        class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
      >
        Start Again?
      </button>
    </div>
  );
};

export default ProgressBar;

"use client";
// import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  // const [showButton, setShowButton] = useState(false);
  // const targetDate = new Date("November 7, 2024 00:00:00").getTime();
  // const [timeLeft, setTimeLeft] = useState(targetDate - new Date().getTime());
  // const [isTargetDay, setIsTargetDay] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const difference = targetDate - now;

  //     if (difference < 0) {
  //       setShowButton(true);
  //       clearInterval(interval); 
  //     } else {
  //       setTimeLeft(difference);
  //     }
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, [targetDate]);

  const handleButtonClick = () => {
    router.push("/birthday");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-mono)]">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
      <div className="flex flex-col justify-between text-center h-32 align-middle font-[family-name:var(--font-geist-mono)]">
            <p className="text-lg">To My Beautiful Girlfriend</p>
            <p className="text-lg">Click on the button below 😉</p>
            <button
              onClick={handleButtonClick}
              className="bg-red-500 text-white px-3 py-3 rounded-lg hover:bg-red-600"
            >
              🎉Happy Birthday Baby🎉
            </button>
          </div>

      </main>

    </div>
  );
}

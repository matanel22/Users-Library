import { useEffect, useState } from "react";

export const useTimer = (seconds: number) => {
  const [active, setActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(seconds);
  const resetTimer = () => {
    setActive(false);
    setTimeLeft(seconds);
  };
  useEffect(() => {
    // exit early when we reach 0
    if (active) {
      if (!timeLeft || timeLeft === 0) return;

      // save intervalId to clear the interval when the
      // component re-renders
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      // clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
    }
    // add timeLeft as a dependency to re-rerun the effect
    // when we update it
  }, [timeLeft, active]);
  return { timeLeft, setActive, resetTimer };
};

"use client";

import React, { useRef, useEffect } from "react";

function InfoButton() {
  const [showInfo, setShowInfo] = React.useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent | TouchEvent): void => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowInfo(false);
    }
  };

  useEffect(() => {
    if (showInfo) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [showInfo]);
  return (
    <div className="relative w-fit" ref={buttonRef}>
      <button
        className="mx-1 size-6 rounded-full border-2 border-gray-400 font-mono text-xs text-gray-400"
        onClick={() => setShowInfo(!showInfo)}
      >
        i
      </button>
      <p
        className={`absolute -bottom-5 left-9 min-w-24 rounded-lg bg-black bg-opacity-50 px-2 py-1 text-[8px] font-light text-white ${showInfo ? "block" : "hidden"} md:-bottom-3 md:w-52 md:text-xs lg:w-56`}
      >
        Be one of the first to try our app and help us make it better by sharing
        your feedback!
      </p>
    </div>
  );
}

export default InfoButton;
